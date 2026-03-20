"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/constants/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-app">
        <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">よくある質問</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          はじめてのAI導入でも安心できるよう、よくある不安を先回りして解消します。
        </p>

        <div className="mt-10 grid gap-3">
          {FAQ.map((it, idx) => {
            const isOpen = open === idx;
            return (
              <div key={it.q} className="rounded-xl border border-border bg-surface2">
                <button
                  type="button"
                  onClick={() => setOpen((v) => (v === idx ? null : idx))}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left focus-ring rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold leading-snug">
                    {it.q}
                  </span>
                  <ChevronDown
                    className={[
                      "h-5 w-5 text-primary transition",
                      isOpen ? "rotate-180" : "rotate-0"
                    ].join(" ")}
                  />
                </button>
                <div
                  className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                      {it.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

