"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CASES } from "@/constants/site";

export function Cases() {
  return (
    <section id="cases" className="section">
      <div className="container-app">
        <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">導入事例</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          業種や課題に合わせて“現場で使える形”に落とし込み、数字で改善を出します。
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {CASES.map((c) => (
            <motion.article
              key={c.tag}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="card p-6 hover:border-primary transition"
            >
              <div className="inline-flex items-center rounded-sm bg-primaryGlow px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-primary [font-family:var(--font-dm-sans)] font-semibold">
                {c.tag}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5">
                <div>
                  <div className="text-xs text-muted tracking-[0.1em] [font-family:var(--font-dm-sans)] font-semibold">
                    BEFORE
                  </div>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{c.before}</p>
                </div>

                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-xs tracking-[0.12em] [font-family:var(--font-dm-sans)] font-semibold">
                    AFTER
                  </span>
                </div>

                <div className="grid grid-cols-[1fr_auto] items-start gap-4">
                  <p className="text-sm text-white/80 leading-relaxed">{c.after}</p>
                  <div className="text-right">
                    <div className="text-success [font-family:var(--font-dm-sans)] font-extrabold text-[44px] leading-none">
                      {c.resultNumber}
                    </div>
                    <div className="mt-1 text-xs text-muted">{c.resultLabel}</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border bg-bg px-2.5 py-1 text-[11px] text-white/75 opacity-80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

