"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/constants/site";

export function Gallery() {
  const [cat, setCat] = useState<GalleryCategory>("All");

  const items = useMemo(() => {
    if (cat === "All") return GALLERY;
    return GALLERY.filter((g) => g.categories.includes(cat));
  }, [cat]);

  return (
    <section id="gallery" className="section bg-surface">
      <div className="container-app">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="h2 text-white [font-family:var(--font-dm-sans)]">
              制作実績（デモギャラリー）
            </h2>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              実際の導入イメージが伝わるよう、サンプル/デモを用意しています（必要に応じて個別にお見せします）。
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={[
                  "rounded-[4px] px-4 py-2 text-xs font-semibold transition border focus-ring",
                  "[font-family:var(--font-dm-sans)] tracking-[0.08em]",
                  active
                    ? "bg-primary text-bg border-primary"
                    : "bg-transparent text-muted border-border hover:text-white hover:border-primary"
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div key={cat} className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((g) => (
            <article
              key={g.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface2"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-border">
                {g.previewImage ? (
                  <Image
                    src={g.previewImage}
                    alt={`${g.title} のプレビュー`}
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="h-full w-full bg-[radial-gradient(900px_520px_at_35%_15%,rgba(0,194,255,0.12),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />
                )}
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-bg opacity-40" />
                <div className="absolute inset-0 border border-primaryGlow" />
              </div>

              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold [font-family:var(--font-dm-sans)] text-[18px]">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{g.description}</p>
                  </div>
                  {g.href ? (
                    <a
                      href={g.href}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 inline-flex items-center justify-center rounded-[4px] border border-primaryGlow bg-primaryGlow p-2 text-primary hover:bg-primaryGlow transition focus-ring"
                      aria-label="デモを見る"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {g.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border bg-bg px-2.5 py-1 text-[11px] text-white/70 opacity-80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {g.href ? (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {g.href.endsWith(".pptx") ? (
                      <a
                        href="/works/AI_Services_Slides.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-90 transition focus-ring rounded-sm"
                      >
                        サイト内でスライドを見る <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                    <a
                      href={g.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-white transition focus-ring rounded-sm"
                    >
                      ファイルを開く（DL）{" "}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

