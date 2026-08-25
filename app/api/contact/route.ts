import { NextResponse } from "next/server";
import {
  getContactCategoryLabel,
  parseContactSubmission,
  type ContactFieldErrors,
} from "@/lib/contact";
import {
  createContactAcknowledgementEmail,
  createContactNotificationEmail,
  type ContactEmail,
} from "@/emails/contactEmails";

export const runtime = "nodejs";

const developmentResendEndpoint = process.env.RESEND_API_ENDPOINT;
const RESEND_ENDPOINT =
  process.env.NODE_ENV === "development" &&
  developmentResendEndpoint &&
  /^http:\/\/(?:127\.0\.0\.1|localhost):\d+(?:\/|$)/.test(developmentResendEndpoint)
    ? developmentResendEndpoint
    : "https://api.resend.com/emails";
const CONTACT_RECIPIENT = "info@realtegicworks.com";
const CONTACT_SENDER = "Realtegic <notifications@realtegicworks.com>";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_MAX_ENTRIES = 10_000;
const MAX_REQUEST_BYTES = 20_000;

interface RateLimitEntry {
  count: number;
  expiresAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function jsonError(
  message: string,
  status: number,
  fieldErrors?: ContactFieldErrors,
  retryAfter?: number
) {
  return NextResponse.json(
    { ok: false, message, fieldErrors },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...(retryAfter ? { "Retry-After": String(retryAfter) } : {}),
      },
    }
  );
}

function getClientAddress(request: Request): string {
  const forwarded =
    request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string, now: number): { allowed: boolean; retryAfter?: number } {
  for (const [storedKey, entry] of rateLimitStore) {
    if (entry.expiresAt <= now) {
      rateLimitStore.delete(storedKey);
    }
  }

  if (rateLimitStore.size >= RATE_LIMIT_MAX_ENTRIES && !rateLimitStore.has(key)) {
    const oldestKey = rateLimitStore.keys().next().value;
    if (oldestKey) {
      rateLimitStore.delete(oldestKey);
    }
  }

  const current = rateLimitStore.get(key);
  if (!current || current.expiresAt <= now) {
    rateLimitStore.set(key, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.expiresAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true };
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  try {
    const requestHost =
      request.headers.get("x-forwarded-host") ??
      request.headers.get("host") ??
      new URL(request.url).host;
    return new URL(origin).host === requestHost;
  } catch {
    return false;
  }
}

async function sendEmail(
  apiKey: string,
  email: ContactEmail,
  to: string,
  replyTo: string,
  idempotencyKey: string
): Promise<Response> {
  return fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      from: CONTACT_SENDER,
      to: [to],
      reply_to: replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
    cache: "no-store",
  });
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return jsonError("This submission could not be accepted.", 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonError("The submitted form data was invalid.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonError("This submission is too large.", 413);
  }

  const now = Date.now();
  const rateLimit = checkRateLimit(getClientAddress(request), now);
  if (!rateLimit.allowed) {
    return jsonError(
      "Too many messages were submitted. Please wait before trying again.",
      429,
      undefined,
      rateLimit.retryAfter
    );
  }

  let requestBody: string;
  try {
    requestBody = await request.text();
  } catch {
    return jsonError("The submitted form data was invalid.", 400);
  }

  if (requestBody.length > MAX_REQUEST_BYTES) {
    return jsonError("This submission is too large.", 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(requestBody);
  } catch {
    return jsonError("The submitted form data was invalid.", 400);
  }

  const parsed = parseContactSubmission(payload, now);
  if (!parsed.success) {
    if (parsed.spam) {
      return jsonError("This submission could not be accepted.", 400);
    }
    return jsonError("Please correct the highlighted fields and try again.", 400, parsed.errors);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact delivery is unavailable: RESEND_API_KEY is not configured.");
    return jsonError(
      "We couldn't send your message right now. Please try again or email info@realtegicworks.com.",
      503
    );
  }

  const { data } = parsed;
  const categoryLabel = getContactCategoryLabel(data.category);
  const submittedAt = new Date(data.submittedAt).toISOString();
  const emailData = {
    ...data,
    categoryLabel,
    submittedAt,
  };
  const notificationEmail = createContactNotificationEmail(emailData);
  const acknowledgementEmail = createContactAcknowledgementEmail(emailData);

  let providerResponse: Response;
  try {
    providerResponse = await sendEmail(
      apiKey,
      notificationEmail,
      CONTACT_RECIPIENT,
      data.email,
      `contact/${data.submissionId}/notification`
    );
  } catch (error) {
    console.error("Contact delivery request failed.", {
      submissionId: data.submissionId,
      error: error instanceof Error ? error.message : "Unknown network error",
    });
    return jsonError(
      "We couldn't send your message right now. Please try again or email info@realtegicworks.com.",
      502
    );
  }

  if (!providerResponse.ok) {
    console.error("Resend rejected an internal contact notification.", {
      submissionId: data.submissionId,
      status: providerResponse.status,
    });
    return jsonError(
      "We couldn't send your message right now. Please try again or email info@realtegicworks.com.",
      502
    );
  }

  try {
    const acknowledgementResponse = await sendEmail(
      apiKey,
      acknowledgementEmail,
      data.email,
      CONTACT_RECIPIENT,
      `contact/${data.submissionId}/acknowledgement`
    );
    if (!acknowledgementResponse.ok) {
      console.error("Resend rejected a contact acknowledgement.", {
        submissionId: data.submissionId,
        status: acknowledgementResponse.status,
      });
    }
  } catch (error) {
    console.error("Contact acknowledgement delivery request failed.", {
      submissionId: data.submissionId,
      error: error instanceof Error ? error.message : "Unknown network error",
    });
  }

  return NextResponse.json(
    { ok: true, message: "Thank you. Your message has been sent to Realtegic." },
    { headers: { "Cache-Control": "no-store" } }
  );
}
