"use client";

import { PROCESS } from "@/constants/site";

export function Process() {
  return (
    <section id="process" className="section bg-surface">
      <div className="container-app">
        <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">導入の流れ</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          5ステップで最短距離。要件確定から最短2週間で成果の出る形まで持っていきます。
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {PROCESS.map((s, idx) => (
            <div
              key={s.title}
              className="relative rounded-xl border border-border bg-surface2 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg border border-primaryGlow bg-primaryGlow flex items-center justify-center text-xl">
                  {s.icon}
                </div>
                <div className="text-border [font-family:var(--font-dm-sans)] font-extrabold text-[28px] opacity-70">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-white font-semibold [font-family:var(--font-dm-sans)]">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.description}</p>
              </div>

              {idx < PROCESS.length - 1 ? (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 h-px w-4 bg-primaryGlow" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

