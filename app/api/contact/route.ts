// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "eae061@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";


    if (!apiKey) {
      console.error("❌ RESEND_API_KEY is not set");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured on the server" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
  from: `Portfolio <${from}>`,
  to: [to],
  replyTo: email,
  subject: `Новое сообщение с сайта от ${name}`,
  html: `
    <h2>Новое сообщение с портфолио-сайта</h2>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Сообщение:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `,
});


    if (error) {
      console.error("❌ Resend send error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("❌ /api/contact unexpected error:", e);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
