"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Network, PhoneCall, Presentation } from "lucide-react";
import { SERVICES } from "@/constants/site";

function ServiceIcon({ icon }: { icon: (typeof SERVICES)[number]["icon"] }) {
  const common = "h-5 w-5 text-primary";
  switch (icon) {
    case "presentation":
      return <Presentation className={common} />;
    case "diagram":
      return <Network className={common} />;
    case "phone":
      return <PhoneCall className={common} />;
    case "automation":
      return <Bot className={common} />;
  }
}

export function Services() {
  return (
    <section id="services" className="section bg-surface">
      <div className="container-app">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-10 w-[3px] bg-primary" />
              <span className="text-xs tracking-[0.2em] text-muted [font-family:var(--font-dm-sans)] font-semibold">
                SERVICE
              </span>
            </div>
            <h2 className="h2 mt-3 text-white [font-family:var(--font-dm-sans)]">
              サービス紹介
            </h2>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              “使えるAI”に落とし込み、現場の成果に直結する形で導入します。価格はスコープにより変動するため、
              まずは無料相談で最適なご提案をします。
            </p>
          </div>
        </div>

        <motion.div
          initial="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.id}
              variants={{
                hidden: { opacity: 1, y: 0 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface2 p-6 transition will-change-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,194,255,0.15)] hover:border-primary"
            >
              <div className="absolute right-4 top-1 text-[64px] leading-none font-extrabold text-border [font-family:var(--font-dm-sans)] select-none opacity-70">
                {s.number}
              </div>

              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primaryGlow bg-primaryGlow">
                  <ServiceIcon icon={s.icon} />
                </div>
                <h3 className="mt-4 text-[18px] md:text-[22px] font-semibold [font-family:var(--font-dm-sans)] text-white leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{s.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-text/90">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-white/80 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-90 transition focus-ring rounded-sm"
                >
                  詳しく見る <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

