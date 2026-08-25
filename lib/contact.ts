export const contactCategories = [
  { value: "products", label: "Realtegic Products" },
  { value: "ai-automation", label: "AI & Automation" },
  { value: "platform", label: "Digital Platform" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "general", label: "General Inquiry" },
] as const;

export type ContactCategory = (typeof contactCategories)[number]["value"];

export interface ContactFields {
  name: string;
  email: string;
  company: string;
  country: string;
  category: ContactCategory | "";
  message: string;
}

export interface ContactSubmission extends ContactFields {
  hp: string;
  startedAt: number;
  submittedAt: number;
  submissionId: string;
  source: string;
}

export interface ValidatedContactSubmission extends Omit<ContactSubmission, "category"> {
  category: ContactCategory;
}

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;

export const CONTACT_LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  country: 100,
  messageMin: 20,
  messageMax: 2000,
  source: 500,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMISSION_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const categoryValues = new Set<string>(contactCategories.map(({ value }) => value));

export function validateContactFields(values: ContactFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const company = values.company.trim();
  const country = values.country.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = name ? "Name must be at least 2 characters." : "Please enter your name.";
  } else if (name.length > CONTACT_LIMITS.name) {
    errors.name = `Name must be no more than ${CONTACT_LIMITS.name} characters.`;
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (email.length > CONTACT_LIMITS.email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (company.length > CONTACT_LIMITS.company) {
    errors.company = `Company must be no more than ${CONTACT_LIMITS.company} characters.`;
  }

  if (!country) {
    errors.country = "Please enter your country.";
  } else if (country.length > CONTACT_LIMITS.country) {
    errors.country = `Country must be no more than ${CONTACT_LIMITS.country} characters.`;
  }

  if (!values.category || !categoryValues.has(values.category)) {
    errors.category = "Please select what you'd like help with.";
  }

  if (!message) {
    errors.message = "Please tell us a little about your project.";
  } else if (message.length < CONTACT_LIMITS.messageMin) {
    errors.message = `Message should be at least ${CONTACT_LIMITS.messageMin} characters.`;
  } else if (message.length > CONTACT_LIMITS.messageMax) {
    errors.message = `Message should be no more than ${CONTACT_LIMITS.messageMax} characters.`;
  }

  return errors;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function parseContactSubmission(
  input: unknown,
  now = Date.now()
):
  | { success: true; data: ValidatedContactSubmission }
  | { success: false; errors?: ContactFieldErrors; spam?: true } {
  if (!isRecord(input)) {
    return { success: false };
  }

  const category = stringValue(input.category);
  const data: ContactSubmission = {
    name: stringValue(input.name).trim(),
    email: stringValue(input.email).trim().toLowerCase(),
    company: stringValue(input.company).trim(),
    country: stringValue(input.country).trim(),
    category: categoryValues.has(category) ? (category as ContactCategory) : "",
    message: stringValue(input.message).trim(),
    hp: stringValue(input.hp).trim(),
    startedAt: typeof input.startedAt === "number" ? input.startedAt : 0,
    submittedAt: typeof input.submittedAt === "number" ? input.submittedAt : 0,
    submissionId: stringValue(input.submissionId),
    source: stringValue(input.source).trim(),
  };

  if (data.hp || !data.startedAt || now - data.startedAt < 1500) {
    return { success: false, spam: true };
  }

  if (
    data.startedAt > now ||
    now - data.startedAt > 24 * 60 * 60 * 1000 ||
    data.submittedAt < data.startedAt ||
    data.submittedAt > now + 60 * 1000 ||
    now - data.submittedAt > 24 * 60 * 60 * 1000 ||
    !SUBMISSION_ID_PATTERN.test(data.submissionId) ||
    !data.source.startsWith("/") ||
    data.source.length > CONTACT_LIMITS.source
  ) {
    return { success: false };
  }

  const errors = validateContactFields(data);
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: { ...data, category: data.category as ContactCategory },
  };
}

export function getContactCategoryLabel(category: ContactCategory): string {
  return contactCategories.find((option) => option.value === category)?.label ?? category;
}
