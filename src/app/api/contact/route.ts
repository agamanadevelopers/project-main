import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Receives a contact-form submission and emails it via Web3Forms.
 * Set WEB3FORMS_ACCESS_KEY (from web3forms.com) in the environment.
 * If the key is missing, returns `notConfigured` so the client can fall back
 * to a mailto: link instead of erroring.
 */
export async function POST(req: Request) {
  let body: {
    name?: string;
    phone?: string;
    email?: string;
    interest?: string;
    message?: string;
    company?: string; // honeypot
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, interest, message, company } = body;

  // Honeypot — bots fill hidden fields. Pretend success, send nothing.
  if (company) return NextResponse.json({ ok: true });

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, notConfigured: true }, { status: 200 });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: `New enquiry from ${name} — Agamana Projects`,
        from_name: "Agamana Projects Website",
        replyto: email || undefined,
        Name: name,
        Phone: phone,
        Email: email || "Not provided",
        "I am a": interest === "own-land" ? "Land owner" : "Developer",
        Message: message || "-",
      }),
    });
    const data = (await res.json()) as { success?: boolean };
    if (!data?.success) {
      return NextResponse.json({ ok: false, error: "Couldn’t send. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
