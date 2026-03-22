export type ContactField =
  | "name"
  | "email"
  | "phone"
  | "eventDate"
  | "eventLocation"
  | "message";

export type ValidationCode =
  | "required"
  | "invalidEmail"
  | "invalidPhone"
  | "invalidDate"
  | "tooShort"
  | "tooLong";

export type ContactFormData = Record<ContactField, string>;
export type ContactFieldErrors = Partial<Record<ContactField, ValidationCode>>;

export type ContactValidationResult = {
  data: ContactFormData;
  errors: ContactFieldErrors;
  isValid: boolean;
};

const limits: Record<ContactField, { min?: number; max: number }> = {
  name: { min: 2, max: 80 },
  email: { max: 120 },
  phone: { min: 8, max: 24 },
  eventDate: { max: 10 },
  eventLocation: { min: 2, max: 120 },
  message: { min: 24, max: 1200 },
};

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function isIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const parsedDate = new Date(`${value}T00:00:00`);

  return !Number.isNaN(parsedDate.getTime());
}

export function validateContactPayload(
  payload: Partial<ContactFormData> | Record<string, unknown>,
): ContactValidationResult {
  const data: ContactFormData = {
    name: normalizeValue(payload.name),
    email: normalizeValue(payload.email).toLowerCase(),
    phone: normalizeValue(payload.phone),
    eventDate: normalizeValue(payload.eventDate),
    eventLocation: normalizeValue(payload.eventLocation),
    message: normalizeValue(payload.message),
  };

  const errors: ContactFieldErrors = {};

  if (!data.name) {
    errors.name = "required";
  } else if (data.name.length < (limits.name.min ?? 0)) {
    errors.name = "tooShort";
  } else if (data.name.length > limits.name.max) {
    errors.name = "tooLong";
  }

  if (!data.email) {
    errors.email = "required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "invalidEmail";
  } else if (data.email.length > limits.email.max) {
    errors.email = "tooLong";
  }

  const normalizedPhoneDigits = data.phone.replace(/[^\d+]/g, "");
  if (!data.phone) {
    errors.phone = "required";
  } else if (
    normalizedPhoneDigits.replace(/\D/g, "").length < (limits.phone.min ?? 0)
  ) {
    errors.phone = "invalidPhone";
  } else if (data.phone.length > limits.phone.max) {
    errors.phone = "tooLong";
  }

  if (!data.eventDate) {
    errors.eventDate = "required";
  } else if (!isIsoDate(data.eventDate)) {
    errors.eventDate = "invalidDate";
  }

  if (!data.eventLocation) {
    errors.eventLocation = "required";
  } else if (data.eventLocation.length < (limits.eventLocation.min ?? 0)) {
    errors.eventLocation = "tooShort";
  } else if (data.eventLocation.length > limits.eventLocation.max) {
    errors.eventLocation = "tooLong";
  }

  if (!data.message) {
    errors.message = "required";
  } else if (data.message.length < (limits.message.min ?? 0)) {
    errors.message = "tooShort";
  } else if (data.message.length > limits.message.max) {
    errors.message = "tooLong";
  }

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
