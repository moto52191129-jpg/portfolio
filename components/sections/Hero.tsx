"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch(() => {
        if (!cancelled) setReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const particlesOptions = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 40, density: { enable: true } },
        color: { value: "#00C2FF" },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.5, direction: "none", outModes: { default: "out" } },
        links: { enable: true, color: "#00C2FF", opacity: 0.08, distance: 120, width: 1 }
      },
      detectRetina: true
    }),
    []
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[100vh] flex items-center"
      style={{
        background:
          "radial-gradient(900px 520px at 85% 12%, rgba(0,194,255,0.06), transparent 60%)"
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-30 [transform:perspective(900px)_rotateX(58deg)] origin-center" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_520px_at_70%_18%,rgba(0,194,255,0.08),transparent_60%)]" />
      {ready ? (
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <Particles id="heroParticles" options={particlesOptions} />
        </div>
      ) : null}

      <div className="relative container-app pt-24 md:pt-28 pb-16">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="[font-family:var(--font-dm-sans)] text-white font-extrabold leading-[1.0] tracking-[-0.03em] text-[40px] md:text-[72px] xl:text-[92px]">
            数時間の作業を、
            <br />
            <span className="text-primary [text-shadow:0_0_40px_rgba(0,194,255,0.38)]">
              数分で。
            </span>
          </h1>

          <TypewriterSubcopy />

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-primary focus-ring">
              無料相談する
            </a>
            <a href="#gallery" className="btn-secondary focus-ring">
              実績を見る
            </a>
          </div>
        </motion.div>

        <div className="absolute left-1/2 bottom-8 -translate-x-1/2">
          <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent animate-[scrollLine_1.6s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            opacity: 0.15;
            transform: translateY(-8px);
          }
          50% {
            opacity: 0.9;
            transform: translateY(0px);
          }
          100% {
            opacity: 0.15;
            transform: translateY(8px);
          }
        }
      `}</style>
    </section>
  );
}

function TypewriterSubcopy() {
  const full =
    "AIで業務を自動化し、あなたの時間を取り戻す。— 村上元春";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const t = window.setInterval(() => {
      i += 1;
      setText(full.slice(0, i));
      if (i >= full.length) window.clearInterval(t);
    }, 22);
    return () => window.clearInterval(t);
  }, []);

  return (
    <p className="mt-6 text-muted leading-[1.8] tracking-[0.08em] text-[16px] md:text-[20px] font-light">
      {text}
      <span className="inline-block w-[10px] align-baseline text-primary opacity-80 animate-pulse">
        |
      </span>
    </p>
  );
}
