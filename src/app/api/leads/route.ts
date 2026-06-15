import { type NextRequest } from "next/server";

// Always run at request time; never cache lead submissions.
export const dynamic = "force-dynamic";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  clinicType?: string;
  budget?: string;
  message?: string;
  // Honeypot: real users never fill this. Bots often do.
  company?: string;
};

const CLINIC_TYPES = ["Aesthetics", "IVF", "Dental", "Other"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept so bots think they succeeded, but drop the lead.
  if (clean(body.company)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const clinicType = clean(body.clinicType, 40);
  const budget = clean(body.budget, 120);
  const message = clean(body.message, 4000);

  // Validation — Name, Email, Phone are required.
  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  if (!email || !EMAIL_RE.test(email)) errors.push("A valid email is required.");
  if (!phone) errors.push("Phone is required.");
  if (clinicType && !CLINIC_TYPES.includes(clinicType)) errors.push("Invalid clinic type.");

  if (errors.length > 0) {
    return Response.json({ ok: false, error: errors.join(" ") }, { status: 400 });
  }

  const webhookUrl = process.env.LEADS_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("LEADS_SHEET_WEBHOOK_URL is not configured.");
    return Response.json(
      { ok: false, error: "Form is not configured yet. Please email us directly." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        clinicType: clinicType || "—",
        budget: budget || "—",
        message: message || "—",
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script redirects to script.googleusercontent.com; follow it.
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("Sheet webhook responded with status", res.status);
      return Response.json(
        { ok: false, error: "Something went wrong. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Failed to forward lead to sheet:", err);
    return Response.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
