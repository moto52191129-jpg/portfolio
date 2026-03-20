import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Cases } from "@/components/sections/Cases";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Profile } from "@/components/sections/Profile";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "[YOUR_NAME]",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    sameAs: ["[SNS_X_URL]", "[SNS_GITHUB_URL]", "[SNS_LINKEDIN_URL]"],
    jobTitle: "AI活用・業務自動化 / プロトタイピング",
    offers: {
      "@type": "OfferCatalog",
      name: "AIサービス",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "スライド自動生成" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "図解デザイン生成" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "電話営業自動化" } }
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
      <Stats />
      <Cases />
      <Gallery />
      <Testimonials />
      <Process />
      <Faq />
      <Profile />
      <Contact />
      <Footer />
    </main>
  );
}

