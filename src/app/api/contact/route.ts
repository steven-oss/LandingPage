import { site } from "@/content/site";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const subject = typeof raw.subject === "string" ? raw.subject.trim() : "";
  const messageBody = typeof raw.body === "string" ? raw.body.trim() : "";

  if (!name || !email || !subject || !messageBody) {
    return NextResponse.json({ ok: false, error: "請填寫所有必填欄位" }, { status: 400 });
  }

  if (!email.includes("@") || email.length < 5) {
    return NextResponse.json({ ok: false, error: "請填寫有效的 Email" }, { status: 400 });
  }

  const MIN_BODY = 5;
  if (messageBody.length < MIN_BODY) {
    return NextResponse.json(
      { ok: false, error: `需求說明至少 ${MIN_BODY} 個字（目前 ${messageBody.length} 字）` },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "郵件服務尚未設定，請直接 Email 聯絡。" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const from =
    process.env.RESEND_FROM?.trim() || `${site.name} <onboarding@resend.dev>`;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[網站聯絡] ${subject}`,
    text: [
      `姓名：${name}`,
      `Email：${email}`,
      `主旨：${subject}`,
      "",
      "需求說明：",
      messageBody,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "信件送出失敗，請稍後再試或直接 Email 聯絡。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
