import { NextResponse } from "next/server";

export const runtime = "nodejs";

const developmentChatEndpoint = process.env.SUPERKUBA_CHAT_API_URL;
const SUPERKUBA_CHAT_ENDPOINT =
  process.env.NODE_ENV === "development" &&
  developmentChatEndpoint &&
  /^http:\/\/(?:127\.0\.0\.1|localhost):\d+(?:\/|$)/.test(developmentChatEndpoint)
    ? developmentChatEndpoint
    : "https://superkuba.com/api/integrations/website-chat";
const MAX_REQUEST_BYTES = 4_000;
const MAX_MESSAGE_LENGTH = 1_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

interface RateLimitEntry {
  count: number;
  expiresAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function errorResponse(error: string, status: number, retryAfter?: number) {
  return NextResponse.json(
    { ok: false, error },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...(retryAfter ? { "Retry-After": String(retryAfter) } : {}),
      },
    }
  );
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

function clientAddress(request: Request): string {
  const forwarded =
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string, now: number) {
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return errorResponse("This chat request could not be accepted.", 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return errorResponse("The chat request was invalid.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return errorResponse("The message is too large.", 413);
  }

  const rateLimit = checkRateLimit(clientAddress(request), Date.now());
  if (!rateLimit.allowed) {
    return errorResponse(
      "Too many messages were sent. Please wait before trying again.",
      429,
      rateLimit.retryAfter
    );
  }

  let requestBody: string;
  try {
    requestBody = await request.text();
  } catch {
    return errorResponse("The chat request was invalid.", 400);
  }

  if (requestBody.length > MAX_REQUEST_BYTES) {
    return errorResponse("The message is too large.", 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(requestBody);
  } catch {
    return errorResponse("The chat request was invalid.", 400);
  }

  if (!isRecord(body)) {
    return errorResponse("The chat request was invalid.", 400);
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  const conversationId =
    typeof body.conversationId === "string" ? body.conversationId.trim() : "";

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return errorResponse(
      `Enter a message between 1 and ${MAX_MESSAGE_LENGTH} characters.`,
      400
    );
  }

  if (conversationId && !UUID_PATTERN.test(conversationId)) {
    return errorResponse("The conversation reference was invalid.", 400);
  }

  const publicKey = process.env.SUPERKUBA_WEBSITE_CHAT_PUBLIC_KEY;
  if (!publicKey) {
    console.error(
      "SuperKuba chat is unavailable: SUPERKUBA_WEBSITE_CHAT_PUBLIC_KEY is not configured."
    );
    return errorResponse(
      "Kuba is unavailable right now. Please contact info@realtegicworks.com.",
      503
    );
  }

  let providerResponse: Response;
  try {
    providerResponse = await fetch(SUPERKUBA_CHAT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        publicKey,
        message,
        conversationId: conversationId || undefined,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(45_000),
    });
  } catch (error) {
    console.error("SuperKuba chat request failed.", {
      error: error instanceof Error ? error.message : "Unknown network error",
    });
    return errorResponse("Kuba is unavailable right now. Please try again shortly.", 502);
  }

  let result: unknown;
  try {
    result = await providerResponse.json();
  } catch {
    return errorResponse("Kuba returned an invalid response.", 502);
  }

  if (!providerResponse.ok || !isRecord(result)) {
    console.error("SuperKuba rejected a website chat request.", {
      status: providerResponse.status,
    });
    return errorResponse("Kuba is unavailable right now. Please try again shortly.", 502);
  }

  const responseText =
    typeof result.response === "string" ? result.response.trim() : "";
  const returnedConversationId =
    typeof result.conversationId === "string" ? result.conversationId : "";

  if (!responseText || !UUID_PATTERN.test(returnedConversationId)) {
    return errorResponse("Kuba returned an invalid response.", 502);
  }

  return NextResponse.json(
    {
      ok: true,
      response: responseText,
      conversationId: returnedConversationId,
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
