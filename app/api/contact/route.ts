import { NextResponse } from "next/server";

import { validateContactPayload } from "@/lib/validations";

export const runtime = "nodejs";

async function sendContactLead(
  payload: ReturnType<typeof validateContactPayload>["data"],
) {
  // TODO: Connect SMTP or a third-party email provider here once delivery
  // requirements and credentials are finalized.
  console.info("[contact-inquiry]", {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    eventDate: payload.eventDate,
    eventLocation: payload.eventLocation,
    message: payload.message,
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON payload.",
      },
      { status: 400 },
    );
  }

  const validation = validateContactPayload(
    typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {},
  );

  if (!validation.isValid) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed.",
        errors: validation.errors,
      },
      { status: 400 },
    );
  }

  await sendContactLead(validation.data);

  return NextResponse.json({
    success: true,
  });
}
