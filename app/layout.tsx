import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["300", "400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Portfolio",
    template: "%s | AI Portfolio"
  },
  description:
    "AIで業務を自動化し、あなたの時間を取り戻す。スライド自動生成・図解デザイン生成・電話営業自動化など、現場の成果に直結するAI導入を支援します。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "AI Portfolio",
    description:
      "AIで業務を自動化し、あなたの時間を取り戻す。スライド自動生成・図解デザイン生成・電話営業自動化など、現場の成果に直結するAI導入を支援します。",
    siteName: "AI Portfolio",
    locale: "ja_JP"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Portfolio",
    description:
      "AIで業務を自動化し、あなたの時間を取り戻す。スライド自動生成・図解デザイン生成・電話営業自動化など、現場の成果に直結するAI導入を支援します。"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${dmSans.variable} ${notoSansJP.variable}`}>
      <body className="min-h-screen antialiased [font-family:var(--font-noto-sans-jp),system-ui,sans-serif]">
        {children}
      </body>
    </html>
  );
}
