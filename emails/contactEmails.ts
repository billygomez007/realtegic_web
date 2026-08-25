import { siteConfig } from "@/lib/site";

const LOGO_URL = `${siteConfig.url}/logos/realtegic-logo-2026-white.png`;
const MAX_ACKNOWLEDGEMENT_MESSAGE_LENGTH = 800;

export interface ContactEmailData {
  name: string;
  email: string;
  company: string;
  country: string;
  categoryLabel: string;
  message: string;
  submittedAt: string;
  source: string;
}

export interface ContactEmail {
  subject: string;
  html: string;
  text: string;
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character
  );
}

function htmlMessage(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name.trim();
}

function singleLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function acknowledgementMessage(message: string): string {
  if (message.length <= MAX_ACKNOWLEDGEMENT_MESSAGE_LENGTH) {
    return message;
  }

  return `${message.slice(0, MAX_ACKNOWLEDGEMENT_MESSAGE_LENGTH).trimEnd()}...`;
}

function emailDocument(content: string, preheader: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Realtegic</title>
    <style>
      @media only screen and (max-width: 640px) {
        .email-shell { width: 100% !important; }
        .email-padding { padding-left: 24px !important; padding-right: 24px !important; }
        .email-heading { font-size: 30px !important; line-height: 38px !important; }
        .email-button { display: block !important; text-align: center !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f3f4f6;color:#111111;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f3f4f6;border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:32px 12px;">
          <table role="presentation" width="620" cellspacing="0" cellpadding="0" border="0" class="email-shell" style="width:100%;max-width:620px;background:#ffffff;border:1px solid #e5e7eb;border-collapse:collapse;">
            ${content}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function header(label: string, heading: string): string {
  return `<tr>
    <td class="email-padding" style="padding:36px 44px 40px;background:#090a0c;">
      <img src="${LOGO_URL}" width="168" alt="Realtegic" style="display:block;width:168px;max-width:100%;height:auto;border:0;margin:0 0 42px;">
      <p style="margin:0 0 14px;color:#c7c9ce;font-size:11px;line-height:16px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${escapeHtml(label)}</p>
      <h1 class="email-heading" style="margin:0;color:#ffffff;font-size:36px;line-height:44px;font-weight:600;letter-spacing:-0.6px;">${escapeHtml(heading)}</h1>
    </td>
  </tr>`;
}

function detailRow(label: string, value: string, multiline = false): string {
  return `<tr>
    <td style="padding:0 0 18px;">
      <p style="margin:0 0 6px;color:#6b7280;font-size:11px;line-height:16px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">${escapeHtml(label)}</p>
      <p style="margin:0;color:#16181d;font-size:15px;line-height:24px;">${multiline ? htmlMessage(value) : escapeHtml(value)}</p>
    </td>
  </tr>`;
}

function footer(): string {
  return `<tr>
    <td class="email-padding" style="padding:32px 44px;background:#111216;">
      <img src="${LOGO_URL}" width="152" alt="Realtegic" style="display:block;width:152px;max-width:100%;height:auto;border:0;margin:0 0 16px;">
      <p style="margin:0 0 22px;color:#d1d5db;font-size:13px;line-height:20px;">Building the Technology Behind What Comes Next.</p>
      <p style="margin:0;color:#9ca3af;font-size:12px;line-height:20px;">
        ${escapeHtml(siteConfig.officeAddress[0])}<br>
        ${escapeHtml(siteConfig.officeAddress[1])}<br>
        ${escapeHtml(siteConfig.phoneNumbers[0].number)} &nbsp;|&nbsp; ${escapeHtml(siteConfig.phoneNumbers[1].number)}<br>
        <a href="${siteConfig.url}" style="color:#ffffff;text-decoration:none;">www.realtegicworks.com</a>
      </p>
    </td>
  </tr>`;
}

export function createContactAcknowledgementEmail(data: ContactEmailData): ContactEmail {
  const greetingName = firstName(data.name);
  const summaryMessage = acknowledgementMessage(data.message);
  const companyRow = data.company
    ? detailRow("Company / Organization", data.company)
    : "";

  const content = `${header("Message received", "We've received your enquiry.")}
  <tr>
    <td class="email-padding" style="padding:42px 44px 20px;">
      <h2 style="margin:0 0 18px;color:#111111;font-size:22px;line-height:30px;font-weight:600;">Thank you, ${escapeHtml(greetingName)}.</h2>
      <p style="margin:0 0 16px;color:#4b5563;font-size:15px;line-height:25px;">Thank you for getting in touch with Realtegic.</p>
      <p style="margin:0;color:#4b5563;font-size:15px;line-height:25px;">Your message has been received successfully and has been forwarded to the appropriate team. A member of our team will review your enquiry and get back to you as soon as possible.</p>
    </td>
  </tr>
  <tr>
    <td class="email-padding" style="padding:22px 44px 18px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f7f7f8;border:1px solid #e5e7eb;border-collapse:collapse;">
        <tr>
          <td style="padding:26px 28px 8px;">
            <p style="margin:0 0 22px;color:#111111;font-size:12px;line-height:18px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Your enquiry</p>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
              ${detailRow("Area of interest", data.categoryLabel)}
              ${companyRow}
              ${detailRow("Message", summaryMessage, true)}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td class="email-padding" style="padding:24px 44px 42px;">
      <p style="margin:0 0 12px;color:#111111;font-size:12px;line-height:18px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Explore Realtegic</p>
      <p style="margin:0 0 24px;color:#4b5563;font-size:15px;line-height:25px;">Realtegic builds digital infrastructure and intelligent platforms designed to power businesses, developers and institutions.</p>
      <a href="${siteConfig.url}" class="email-button" style="display:inline-block;padding:14px 24px;background:#111111;color:#ffffff;font-size:13px;line-height:18px;font-weight:700;text-decoration:none;">Visit Realtegic</a>
      <p style="margin:34px 0 0;padding-top:24px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:13px;line-height:22px;">Need to add something? Simply reply to this email or contact <a href="mailto:${siteConfig.email}" style="color:#111111;font-weight:700;text-decoration:none;">${siteConfig.email}</a>.</p>
    </td>
  </tr>
  ${footer()}
  <tr>
    <td class="email-padding" style="padding:20px 44px;background:#f7f7f8;color:#6b7280;font-size:11px;line-height:18px;text-align:center;">This is an automated acknowledgement confirming that we received your enquiry.</td>
  </tr>`;

  const text = [
    "WE'VE RECEIVED YOUR MESSAGE",
    "",
    `Thank you, ${greetingName}.`,
    "",
    "Thank you for getting in touch with Realtegic.",
    "",
    "Your message has been received successfully and has been forwarded to the appropriate team. A member of our team will review your enquiry and get back to you as soon as possible.",
    "",
    "YOUR ENQUIRY",
    `Area of interest: ${data.categoryLabel}`,
    data.company ? `Company / Organization: ${data.company}` : null,
    "Message:",
    summaryMessage,
    "",
    "EXPLORE REALTEGIC",
    "Realtegic builds digital infrastructure and intelligent platforms designed to power businesses, developers and institutions.",
    siteConfig.url,
    "",
    `Need to add something? Reply to this email or contact ${siteConfig.email}.`,
    "",
    "REALTEGIC",
    "Building the Technology Behind What Comes Next.",
    ...siteConfig.officeAddress,
    siteConfig.phoneNumbers.map(({ number }) => number).join(" | "),
    "www.realtegicworks.com",
    "",
    "This is an automated acknowledgement confirming that we received your enquiry.",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return {
    subject: "We've received your message | Realtegic",
    html: emailDocument(content, "Realtegic has received your enquiry."),
    text,
  };
}

export function createContactNotificationEmail(data: ContactEmailData): ContactEmail {
  const companyRow = data.company
    ? detailRow("Company / Organization", data.company)
    : "";
  const replyUrl = `mailto:${escapeHtml(data.email)}`;

  const content = `${header("New website enquiry", `${data.categoryLabel} enquiry`)}
  <tr>
    <td class="email-padding" style="padding:42px 44px 24px;">
      <p style="margin:0 0 28px;color:#4b5563;font-size:15px;line-height:25px;">A new enquiry was submitted through the Realtegic website.</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f7f7f8;border:1px solid #e5e7eb;border-collapse:collapse;">
        <tr>
          <td style="padding:26px 28px 8px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
              ${detailRow("Name", data.name)}
              ${detailRow("Email", data.email)}
              ${companyRow}
              ${detailRow("Country", data.country)}
              ${detailRow("Area of interest", data.categoryLabel)}
              ${detailRow("Message", data.message, true)}
              ${detailRow("Submitted at", data.submittedAt)}
              ${detailRow("Source page", data.source)}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td class="email-padding" style="padding:0 44px 42px;">
      <a href="${replyUrl}" class="email-button" style="display:inline-block;padding:14px 24px;background:#111111;color:#ffffff;font-size:13px;line-height:18px;font-weight:700;text-decoration:none;">Reply to ${escapeHtml(firstName(data.name))}</a>
    </td>
  </tr>
  ${footer()}`;

  const text = [
    "NEW WEBSITE ENQUIRY",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company / Organization: ${data.company}` : null,
    `Country: ${data.country}`,
    `Area of interest: ${data.categoryLabel}`,
    `Submitted at: ${data.submittedAt}`,
    `Source page: ${data.source}`,
    "",
    "Message:",
    data.message,
    "",
    `Reply to ${data.name}: ${data.email}`,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return {
    subject: `New website enquiry: ${data.categoryLabel} - ${singleLine(data.name)}`,
    html: emailDocument(content, `New website enquiry from ${data.name}.`),
    text,
  };
}
