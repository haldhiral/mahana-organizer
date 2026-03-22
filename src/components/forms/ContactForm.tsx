"use client";

import type {
  ChangeEvent,
  FormEvent,
  ReactNode,
} from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/Button";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import type {
  ContactField,
  ContactFieldErrors,
  ContactFormData,
} from "@/lib/validations";
import { validateContactPayload } from "@/lib/validations";

const initialState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventLocation: "",
  message: "",
};

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  function updateField(field: ContactField, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateContactPayload(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const result = (await response.json()) as {
        success: boolean;
        errors?: ContactFieldErrors;
      };

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setStatus("error");
        return;
      }

      setFormData(initialState);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const statusMessage =
    status === "success"
      ? t("success")
      : status === "error"
        ? t("genericError")
        : "";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2.2rem]"
      noValidate
    >
      <PremiumSectionShell className="rounded-[2.2rem] p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            field="name"
            label={t("labels.name")}
            value={formData.name}
            onChange={updateField}
            placeholder={t("placeholders.name")}
            error={renderError("name", errors, t)}
          />
          <Field
            field="email"
            type="email"
            label={t("labels.email")}
            value={formData.email}
            onChange={updateField}
            placeholder={t("placeholders.email")}
            error={renderError("email", errors, t)}
          />
          <Field
            field="phone"
            label={t("labels.phone")}
            value={formData.phone}
            onChange={updateField}
            placeholder={t("placeholders.phone")}
            error={renderError("phone", errors, t)}
          />
          <Field
            field="eventDate"
            type="date"
            label={t("labels.eventDate")}
            value={formData.eventDate}
            onChange={updateField}
            error={renderError("eventDate", errors, t)}
          />
        </div>

        <div className="mt-6 grid gap-6">
          <Field
            field="eventLocation"
            label={t("labels.eventLocation")}
            value={formData.eventLocation}
            onChange={updateField}
            placeholder={t("placeholders.eventLocation")}
            error={renderError("eventLocation", errors, t)}
          />
          <Field
            field="message"
            label={t("labels.message")}
            value={formData.message}
            onChange={updateField}
            placeholder={t("placeholders.message")}
            error={renderError("message", errors, t)}
            multiline
          />
        </div>

        <div className="mt-8">
          <span className="gold-divider mb-6 block" aria-hidden="true" />
          <Button type="submit" size="lg" disabled={status === "loading"} fullWidth>
            {status === "loading" ? t("submitting") : t("submit")}
          </Button>
          {statusMessage ? (
            <p
              className={`mt-4 rounded-[1.2rem] border px-4 py-3 text-sm leading-7 ${status === "success" ? "border-success/30 bg-success/5 text-success" : "border-[#9b4c4c]/30 bg-[#9b4c4c]/5 text-[#9b4c4c]"}`}
              aria-live="polite"
              role="status"
            >
              {statusMessage}
            </p>
          ) : null}
        </div>
      </PremiumSectionShell>
    </form>
  );
}

function renderError(
  field: ContactField,
  errors: ContactFieldErrors,
  t: ReturnType<typeof useTranslations<"contactForm">>,
) {
  const error = errors[field];

  if (!error) {
    return null;
  }

  return (
    <p id={`${field}-error`} className="mt-2 text-sm text-[#9b4c4c]">
      {t(`errors.${error}`)}
    </p>
  );
}

type FieldProps = {
  field: ContactField;
  label: string;
  value: string;
  onChange: (field: ContactField, value: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  error?: ReactNode;
};

function Field({
  field,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  error,
}: FieldProps) {
  const sharedProps = {
    id: field,
    name: field,
    value,
    placeholder,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${field}-error` : undefined,
    className:
      "w-full rounded-[1.5rem] border border-border-strong/60 bg-white/80 px-5 py-4 text-foreground shadow-[0_10px_24px_rgba(80,59,43,0.04)] outline-none transition-all duration-250 focus:border-primary/70 focus:bg-white focus:shadow-[0_18px_38px_rgba(80,59,43,0.1)] focus:ring-1 focus:ring-primary/20",
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(field, event.target.value),
  };

  return (
    <label className="block">
      <span className="mb-2.5 block text-sm font-semibold uppercase tracking-[0.1em] text-foreground/80">{label}</span>
      {multiline ? (
        <textarea {...sharedProps} rows={6} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      {error}
    </label>
  );
}

