import { Resend } from "resend";

// Update these two values before going live:
// FROM_ADDRESS: a verified sender in your Resend account (use onboarding@resend.dev for testing)
// TO_ADDRESS:   your personal email where messages should land
const FROM_ADDRESS = "Portfolio <onboarding@resend.dev>";
const TO_ADDRESS = "su.h.latt3@gmail.com";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email service not configured." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" || name.trim().length === 0 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" || message.trim().length === 0
  ) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Portfolio message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email}\n\nMessage:\n${message.trim()}`,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
