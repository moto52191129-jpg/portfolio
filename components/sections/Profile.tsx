"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { SITE } from "@/constants/site";

const skills = [
  { label: "ChatGPT / Claude API", value: 88 },
  { label: "Python / Automation", value: 82 },
  { label: "n8n / Make", value: 78 },
  { label: "Vapi / ElevenLabs / Twilio", value: 70 },
  { label: "Next.js / TypeScript", value: 72 },
  { label: "Figma / PowerPoint自動化", value: 76 }
];

const career = [
  { year: "2023–", text: "AI活用の業務自動化・プロトタイプ開発を提供" },
  { year: "2021–2023", text: "プロダクト開発（要件定義〜実装〜運用）" },
  { year: "2019–2021", text: "業務改善・データ活用支援" }
];

export function Profile() {
  return (
    <section id="profile" className="section bg-surface">
      <div className="container-app">
        <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">プロフィール</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">
          <div className="card2 p-6">
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-full border border-border bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.18),transparent_60%)]" />
              <div>
                <div className="text-white text-xl font-bold [font-family:var(--font-dm-sans)]">
                  {SITE.name}
                </div>
                <div className="mt-1 text-sm text-muted">
                  AI活用・業務自動化 / プロトタイピング
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-white">想い</div>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                AIは“魔法”ではなく、現場の制約の中で成果を出すための道具です。非エンジニアの方にもわかりやすく、
                小さく作って早く回すアプローチで、費用対効果の高い導入を支援します。
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.sns.x}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-border bg-bg text-muted hover:text-white hover:border-primary transition focus-ring opacity-80"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SITE.sns.github}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-border bg-bg text-muted hover:text-white hover:border-primary transition focus-ring opacity-80"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SITE.sns.linkedin}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-border bg-bg text-muted hover:text-white hover:border-primary transition focus-ring opacity-80"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="card p-6">
              <div className="text-white font-semibold [font-family:var(--font-dm-sans)]">
                経歴
              </div>
              <div className="mt-4 space-y-4">
                {career.map((c) => (
                  <div key={c.year} className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="text-xs text-muted tracking-[0.08em] [font-family:var(--font-dm-sans)] font-semibold">
                      {c.year}
                    </div>
                    <div className="text-sm text-white/80 leading-relaxed">{c.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div className="text-white font-semibold [font-family:var(--font-dm-sans)]">
                スキル
              </div>
              <div className="mt-5 space-y-4">
                {skills.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/85">{s.label}</span>
                      <span className="text-muted [font-family:var(--font-dm-sans)] font-semibold">
                        {s.value}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-bg/30 border border-border overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary opacity-80"
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

