"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { STATS } from "@/constants/site";

type StatRef = HTMLDivElement | null;

export function Stats() {
  const refs = useRef<StatRef[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = refs.current[0];
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const [e] = entries;
        if (e?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const countupOptions = useMemo(
    () => ({
      duration: 2.5,
      easingFn: (t: number, b: number, c: number, d: number) => {
        // easeOutExpo
        return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
      }
    }),
    []
  );

  useEffect(() => {
    if (!started) return;
    STATS.forEach((s, idx) => {
      const node = refs.current[idx];
      if (!node) return;
      const target = node.querySelector("[data-count]") as HTMLElement | null;
      if (!target) return;
      const cu = new CountUp(target, s.value, countupOptions);
      cu.start();
    });
  }, [started, countupOptions]);

  return (
    <section id="stats" className="section border-y border-border bg-bg">
      <div className="container-app">
        <div className="flex items-center justify-between gap-6">
          <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">数字で見る実績</h2>
          <p className="hidden md:block max-w-xl text-sm text-muted leading-relaxed">
            “結果”で語る。導入前後の変化を、数値でわかりやすく提示します。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              ref={(node) => {
                refs.current[idx] = node;
              }}
              className="relative"
            >
              <div className="flex items-end gap-2">
                <div
                  data-count
                  className="text-white [font-family:var(--font-dm-sans)] font-extrabold leading-none tracking-[-0.04em] text-[40px] md:text-[56px] xl:text-[64px]"
                >
                  {started ? "0" : "0"}
                </div>
                {s.suffix ? (
                  <div
                    className={[
                      "mb-1 text-[18px] md:text-[22px] xl:text-[28px] leading-none",
                      s.highlightSuffix ? "text-primary" : "text-white/90",
                      "[font-family:var(--font-dm-sans)] font-bold"
                    ].join(" ")}
                  >
                    {s.suffix}
                  </div>
                ) : null}
              </div>

              <div className="mt-3 text-[13px] tracking-[0.05em] text-muted leading-relaxed">
                {s.label}
              </div>

              {idx < STATS.length - 1 ? (
                <div className="hidden md:block absolute right-[-12px] top-3 h-[60px] w-px bg-[linear-gradient(transparent,rgba(0,194,255,1),transparent)] opacity-35" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

