import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/constants/site";

export default function HomePage() {
  const lineSameAs = SITE.lineUrl.startsWith("http") ? [SITE.lineUrl] : [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ...(lineSameAs.length ? { sameAs: lineSameAs } : {}),
    jobTitle: "AI活用・業務自動化 / プロトタイピング",
    offers: {
      "@type": "OfferCatalog",
      name: "AIサービス",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "スライド自動生成" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "図解デザイン生成" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "チャットbot付HP作成" } }
      ]
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

