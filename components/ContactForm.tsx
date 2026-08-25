"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import {
  CONTACT_LIMITS,
  contactCategories,
  validateContactFields,
  type ContactFieldErrors,
  type ContactFields,
} from "@/lib/contact";

interface FormValues extends ContactFields {
  hp: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  country: "",
  category: "",
  message: "",
  hp: "",
};

type FormErrors = ContactFieldErrors;
type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [submittedAt, setSubmittedAt] = useState<number | null>(null);
  const [submissionId, setSubmissionId] = useState(() => crypto.randomUUID());

  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const countryId = useId();
  const categoryId = useId();
  const messageId = useId();
  const hpId = useId();
  const statusId = useId();

  function updateField(field: keyof ContactFields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (submittedAt !== null) {
      setSubmittedAt(null);
      setSubmissionId(crypto.randomUUID());
    }
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactFields(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");

      const fieldOrder: (keyof ContactFields)[] = [
        "name",
        "email",
        "company",
        "country",
        "category",
        "message",
      ];
      const fieldIds: Record<string, string> = {
        name: nameId,
        email: emailId,
        company: companyId,
        country: countryId,
        category: categoryId,
        message: messageId,
      };
      const firstInvalidField = fieldOrder.find((field) => nextErrors[field]);
      if (firstInvalidField) {
        const element = document.getElementById(fieldIds[firstInvalidField]);
        element?.focus();
      }
      return;
    }

    setStatus("submitting");
    const submissionTime = submittedAt ?? Date.now();
    setSubmittedAt(submissionTime);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          startedAt,
          submittedAt: submissionTime,
          submissionId,
          source: window.location.pathname,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        fieldErrors?: ContactFieldErrors;
      };

      if (!response.ok || !result.ok) {
        if (result.fieldErrors) {
          setErrors(result.fieldErrors);
        }
        setStatus("error");
        return;
      }

      setValues(initialValues);
      setErrors({});
      setStartedAt(Date.now());
      setSubmittedAt(null);
      setSubmissionId(crypto.randomUUID());
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const messageLength = values.message.trim().length;
  const isSubmitting = status === "submitting";

  return (
    <form
      className="contact-form-new"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
    >
      <div className="contact-form-title">
        <span>01</span>
        <strong>Tell us about your project</strong>
      </div>

      {/* Honeypot field: hidden from sighted and keyboard users, left for bots. */}
      <div className="contact-form-hp" aria-hidden="true">
        <label htmlFor={hpId}>Leave this field empty</label>
        <input
          type="text"
          id={hpId}
          name="hp_company_site"
          tabIndex={-1}
          autoComplete="off"
          value={values.hp}
          onChange={(event) =>
            setValues((previous) => ({ ...previous, hp: event.target.value }))
          }
        />
      </div>

      <div className="contact-form-row">
        <label
          className={errors.name ? "contact-form-field--error" : undefined}
          htmlFor={nameId}
        >
          <span>Name *</span>
          <input
            type="text"
            id={nameId}
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
            maxLength={CONTACT_LIMITS.name}
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
          />
          {errors.name ? (
            <span className="contact-form-error-text" id={`${nameId}-error`} role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.name}
            </span>
          ) : null}
        </label>

        <label
          className={errors.email ? "contact-form-field--error" : undefined}
          htmlFor={emailId}
        >
          <span>Email *</span>
          <input
            type="email"
            id={emailId}
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
            maxLength={CONTACT_LIMITS.email}
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
          />
          {errors.email ? (
            <span className="contact-form-error-text" id={`${emailId}-error`} role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <div className="contact-form-row">
        <label
          className={errors.company ? "contact-form-field--error" : undefined}
          htmlFor={companyId}
        >
          <span>Company</span>
          <input
            type="text"
            id={companyId}
            name="company"
            placeholder="Company name"
            autoComplete="organization"
            maxLength={CONTACT_LIMITS.company}
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${companyId}-error` : undefined}
          />
          {errors.company ? (
            <span className="contact-form-error-text" id={`${companyId}-error`} role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.company}
            </span>
          ) : null}
        </label>

        <label
          className={errors.country ? "contact-form-field--error" : undefined}
          htmlFor={countryId}
        >
          <span>Country *</span>
          <input
            type="text"
            id={countryId}
            name="country"
            placeholder="Your country"
            autoComplete="country-name"
            required
            maxLength={CONTACT_LIMITS.country}
            value={values.country}
            onChange={(event) => updateField("country", event.target.value)}
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? `${countryId}-error` : undefined}
          />
          {errors.country ? (
            <span className="contact-form-error-text" id={`${countryId}-error`} role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.country}
            </span>
          ) : null}
        </label>
      </div>

      <label
        className={errors.category ? "contact-form-field--error" : undefined}
        htmlFor={categoryId}
      >
        <span>What can we help you with? *</span>
        <select
          id={categoryId}
          name="category"
          value={values.category}
          onChange={(event) => {
            const selected = contactCategories.find(
              (option) => option.value === event.target.value
            );
            updateField("category", selected?.value ?? "");
          }}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={errors.category ? `${categoryId}-error` : undefined}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          {contactCategories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.category ? (
          <span className="contact-form-error-text" id={`${categoryId}-error`} role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.category}
          </span>
        ) : null}
      </label>

      <label
        className={errors.message ? "contact-form-field--error" : undefined}
        htmlFor={messageId}
      >
        <span>Message *</span>
        <textarea
          id={messageId}
          name="message"
          rows={6}
          placeholder="Tell us what you are building..."
          required
          minLength={CONTACT_LIMITS.messageMin}
          maxLength={CONTACT_LIMITS.messageMax}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${messageId}-error ${messageId}-count` : `${messageId}-count`
          }
        />
        <span className="contact-form-counter" id={`${messageId}-count`}>
          {messageLength}/{CONTACT_LIMITS.messageMax} characters (minimum{" "}
          {CONTACT_LIMITS.messageMin})
        </span>
        {errors.message ? (
          <span className="contact-form-error-text" id={`${messageId}-error`} role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.message}
          </span>
        ) : null}
      </label>

      <p className="contact-form-privacy-note">
        By submitting this form, you agree that Realtegic may use the information provided to
        respond to your enquiry. Read our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 size={17} className="contact-form-spinner" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>
            Send message
            <ArrowRight size={17} aria-hidden="true" />
          </>
        )}
      </button>

      <div className="contact-form-status" id={statusId} role="status" aria-live="polite">
        {status === "success" ? (
          <span className="contact-form-status--success">
            <CheckCircle2 size={16} aria-hidden="true" />
            Thank you. Your message has been sent to Realtegic.
          </span>
        ) : null}
        {status === "error" ? (
          <span className="contact-form-status--error">
            We couldn&apos;t send your message right now. Please try again or email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </span>
        ) : null}
      </div>
    </form>
  );
}
