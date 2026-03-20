"use client";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-app py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="[font-family:var(--font-dm-sans)] font-bold text-white tracking-tight">
              AI Portfolio
            </div>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              AIで業務を自動化し、あなたの時間を取り戻す。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a href="#services" className="text-muted hover:text-white transition focus-ring rounded-sm">
              サービス
            </a>
            <a href="#cases" className="text-muted hover:text-white transition focus-ring rounded-sm">
              事例
            </a>
            <a href="#contact" className="text-muted hover:text-white transition focus-ring rounded-sm">
              お問い合わせ
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          © {new Date().getFullYear()} [YOUR_NAME]. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

