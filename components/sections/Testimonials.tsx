"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-app">
        <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">お客さまの声</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          “導入して終わり”ではなく、運用で成果が出るところまで伴走します。
        </p>

        <motion.div
          initial="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name + t.company}
              variants={{
                hidden: { opacity: 1, y: 0 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="card p-6"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary" />
                ))}
              </div>

              <div className="relative mt-4">
                <div className="absolute -left-1 -top-6 text-[64px] leading-none text-border/70 select-none">
                  “
                </div>
                <blockquote className="relative text-sm text-white/80 leading-relaxed">
                  {t.comment}
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-border bg-surface2" />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-muted">{t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

