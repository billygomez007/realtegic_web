import {
  createContactAcknowledgementEmail,
  createContactNotificationEmail,
  type ContactEmailData,
} from "@/emails/contactEmails";

export const runtime = "nodejs";

export function GET(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return new Response("Not Found", { status: 404 });
  }

  const url = new URL(request.url);
  const escapingSample = url.searchParams.get("escaping") === "true";
  const sampleData: ContactEmailData = {
    name: escapingSample ? "Michael <script>alert('name')</script>" : "Michael Mensah",
    email: "michael@example.com",
    company: url.searchParams.get("company") === "none" ? "" : "Example Company Ltd.",
    country: "Ghana",
    categoryLabel: "Technology Infrastructure",
    message: escapingSample
      ? "<script>alert('message')</script> Please keep <strong>this text</strong> safe."
      : "We would like to discuss a secure digital platform for our organization and understand how Realtegic could support the project.",
    submittedAt: "2026-08-25T15:30:00.000Z",
    source: "/contact",
  };
  const email =
    url.searchParams.get("template") === "notification"
      ? createContactNotificationEmail(sampleData)
      : createContactAcknowledgementEmail(sampleData);

  return new Response(email.html, {
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
