"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/constants/site";

export function Gallery() {
  const [cat, setCat] = useState<GalleryCategory>("All");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const items = useMemo(() => {
    if (cat === "All") return GALLERY;
    return GALLERY.filter((g) => g.categories.includes(cat));
  }, [cat]);

  const getOfficeViewerUrl = (href: string) => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_SITE_URL ?? "";
    const absoluteUrl = href.startsWith("http") ? href : `${origin}${href}`;
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      absoluteUrl
    )}`;
  };

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

        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((g) => (
            <article
              key={g.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface2"
            >
              <div className="aspect-[16/10] bg-[radial-gradient(900px_520px_at_35%_15%,rgba(0,194,255,0.12),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />

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
                      <button
                        type="button"
                        onClick={() => {
                          if (!g.href) return;
                          setPreviewUrl(getOfficeViewerUrl(g.href));
                        }}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-90 transition focus-ring rounded-sm"
                      >
                        サイト内でスライドを見る <ExternalLink className="h-4 w-4" />
                      </button>
                    ) : null}
                    <a
                      href={g.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-white transition focus-ring rounded-sm"
                    >
                      ファイルを開く <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      {previewUrl ? (
        <div className="fixed inset-0 z-[80] bg-black/70 p-4 md:p-8">
          <div className="mx-auto h-full w-full max-w-6xl rounded-xl border border-border bg-surface2 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h3 className="text-sm md:text-base text-white font-semibold">
                AIスライド実例プレビュー
              </h3>
              <button
                type="button"
                onClick={() => setPreviewUrl(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted hover:text-white transition focus-ring"
                aria-label="プレビューを閉じる"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <iframe
              title="AIスライド実例"
              src={previewUrl}
              className="h-[calc(100%-57px)] w-full rounded-b-xl bg-black"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

