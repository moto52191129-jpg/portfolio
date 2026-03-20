"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SITE } from "@/constants/site";

const contactSchema = z.object({
  name: z.string().min(1, "お名前は必須です。"),
  company: z.string().optional(),
  email: z.string().email("メールアドレスの形式が正しくありません。"),
  phone: z.string().optional(),
  type: z.enum(["無料相談", "スライド自動生成", "図解デザイン生成", "電話営業自動化", "その他"]),
  message: z.string().min(10, "内容は10文字以上で入力してください。")
});

type ContactValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const defaultValues = useMemo<ContactValues>(
    () => ({
      name: "",
      company: "",
      email: "",
      phone: "",
      type: "無料相談",
      message: ""
    }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues
  });

  const onSubmit = async (values: ContactValues) => {
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values)
        });
        if (!res.ok) throw new Error("送信に失敗しました。");
      } else {
        await new Promise((r) => setTimeout(r, 650));
      }

      setSubmitted(true);
      reset(defaultValues);
    } catch {
      setSubmitted(false);
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">お問い合わせ</h2>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              まずは無料相談で、課題とゴールを整理します。内容が固まっていなくても大丈夫です。
            </p>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-primaryGlow bg-primaryGlow p-5 text-sm text-white/85">
                送信ありがとうございます。内容を確認し、通常1営業日以内にご連絡します。
              </div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="お名前（必須）" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    className="w-full rounded-[4px] bg-surface border border-border px-4 py-3 text-text placeholder:text-muted focus-ring"
                    placeholder="山田 太郎"
                    autoComplete="name"
                  />
                </Field>
                <Field label="会社名" error={errors.company?.message}>
                  <input
                    {...register("company")}
                    className="w-full rounded-[4px] bg-surface border border-border px-4 py-3 text-text placeholder:text-muted focus-ring"
                    placeholder="株式会社〇〇"
                    autoComplete="organization"
                  />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="メール（必須）" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    className="w-full rounded-[4px] bg-surface border border-border px-4 py-3 text-text placeholder:text-muted focus-ring"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </Field>
                <Field label="電話番号" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    className="w-full rounded-[4px] bg-surface border border-border px-4 py-3 text-text placeholder:text-muted focus-ring"
                    placeholder="090-1234-5678"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <Field label="お問い合わせ種別" error={errors.type?.message}>
                <select
                  {...register("type")}
                  className="w-full rounded-[4px] bg-surface border border-border px-4 py-3 text-text focus-ring"
                >
                  <option value="無料相談">無料相談</option>
                  <option value="スライド自動生成">スライド自動生成</option>
                  <option value="図解デザイン生成">図解デザイン生成</option>
                  <option value="電話営業自動化">電話営業自動化</option>
                  <option value="その他">その他</option>
                </select>
              </Field>

              <Field label="内容（必須）" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  className="min-h-[140px] w-full rounded-[4px] bg-surface border border-border px-4 py-3 text-text placeholder:text-muted focus-ring"
                  placeholder="現状の課題、やりたいこと、希望納期など（箇条書きでもOK）"
                />
              </Field>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                {isSubmitting ? "送信中..." : "送信する"}
              </button>

              <p className="text-xs text-muted leading-relaxed">
                ※ 送信先（Formspreeなど）は `NEXT_PUBLIC_FORMSPREE_ENDPOINT` で設定できます。未設定の場合はデモ挙動になります。
              </p>
            </form>
          </div>

          <aside className="card2 p-6 h-fit">
            <div className="text-white font-semibold [font-family:var(--font-dm-sans)]">
              連絡先
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>
                <span className="text-muted">Email:</span> {SITE.contactEmail}
              </p>
              <p>
                <span className="text-muted">X:</span> {SITE.sns.x}
              </p>
              <p>
                <span className="text-muted">GitHub:</span> {SITE.sns.github}
              </p>
              <p>
                <span className="text-muted">LinkedIn:</span> {SITE.sns.linkedin}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-bg p-4 text-sm text-muted leading-relaxed opacity-80">
              価格は要件により変わります。まずは課題とゴールを確認し、費用対効果が高い構成でご提案します。
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/85">{label}</span>
      {children}
      {error ? <span className="text-xs text-primary">{error}</span> : null}
    </label>
  );
}
