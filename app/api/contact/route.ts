import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactPayloadSchema } from "@/lib/contact_schema";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "メール送信が未設定です。RESEND_API_KEY と CONTACT_TO_EMAIL を .env.local に設定してください。"
      },
      { status: 503 }
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const parsed = contactPayloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "入力内容を確認してください。" },
      { status: 400 }
    );
  }

  const body = parsed.data;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || "Portfolio <onboarding@resend.dev>";

  const text = [
    "ポートフォリオサイトからお問い合わせがありました。",
    "",
    `お名前: ${body.name}`,
    `会社名: ${body.company ?? "（なし）"}`,
    `メール: ${body.email}`,
    `電話: ${body.phone ?? "（なし）"}`,
    `種別: ${body.type}`,
    "",
    "内容:",
    body.message
  ].join("\n");

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: body.email,
    subject: `[お問い合わせ] ${body.type} / ${body.name}`,
    text
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json({ ok: false, error: "送信に失敗しました。" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
