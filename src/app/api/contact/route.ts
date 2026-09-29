import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, subject, body: messageBody } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof messageBody !== "string"
  ) {
    return NextResponse.json({ ok: false, error: "缺少必填欄位" }, { status: 400 });
  }

  if (!email.includes("@") || name.length < 1 || subject.length < 1 || messageBody.length < 10) {
    return NextResponse.json({ ok: false, error: "請檢查欄位內容" }, { status: 400 });
  }

  // TODO: 串接 Resend、SendGrid 或寫入資料庫。目前僅記錄於 server log。
  console.info("[contact]", { name, email, subject, messageBody: messageBody.slice(0, 500) });

  return NextResponse.json({ ok: true });
}
