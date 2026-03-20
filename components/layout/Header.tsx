"use client";

import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "サービス", href: "#services" },
      { label: "実績", href: "#stats" },
      { label: "事例", href: "#cases" },
      { label: "制作実績", href: "#gallery" },
      { label: "FAQ", href: "#faq" },
      { label: "プロフィール", href: "#profile" }
    ],
    []
  );

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled
          ? "bg-[rgba(6,13,26,0.73)] backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      ].join(" ")}
    >
      <div className="container-app h-16 md:h-[72px] flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-3 focus-ring">
          <span className="h-[6px] w-[6px] bg-primary" />
          <span className="[font-family:var(--font-dm-sans)] font-bold tracking-tight text-white">
            AI Portfolio
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm text-muted hover:text-white transition focus-ring rounded-sm"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-[4px] border border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-bg focus-ring"
          >
            無料相談
          </a>
        </div>
      </div>
    </header>
  );
}

