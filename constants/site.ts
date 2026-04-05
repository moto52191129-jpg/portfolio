export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "presentation" | "diagram" | "automation";
};

export type GalleryCategory = "All" | "Automation" | "Chatbot" | "Consulting";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  categories: GalleryCategory[];
  tech: string[];
  href?: string;
  previewImage?: string;
  previewPdf?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: string;
};

export const SITE = {
  name: "[YOUR_NAME]",
  contactEmail: "moto52191129@gmail.com",
  /** 表示用 */
  contactTel: "080-4550-4218",
  /** 友だち追加URL */
  lineUrl: "https://line.me/ti/p/SPWF06aKSY"
} as const;

export const SERVICES: Service[] = [
  {
    id: "slides",
    number: "01",
    title: "スライド自動生成",
    description:
      "テキストやデータを入力するだけで、提案資料・社内資料を“伝わるデザイン”のスライドに変換。最短3日で納品します。",
    bullets: ["Googleスライド / PPTX出力", "テンプレ最適化・ブランド適用", "ストーリー構成も支援"],
    icon: "presentation"
  },
  {
    id: "diagrams",
    number: "02",
    title: "図解デザイン生成",
    description:
      "複雑な概念や業務フローを、瞬時に分かりやすい図解へ。外部向け・社内向けどちらにも対応します。",
    bullets: ["PNG / SVG / PDF / Figma対応", "フロー / 構造図 / 比較図", "説明資料の説得力を底上げ"],
    icon: "diagram"
  },
  {
    id: "automation",
    number: "03",
    title: "チャットbot付HP作成",
    description:
      "ホームページ制作とチャットbot導入をワンストップで提供。問い合わせ対応の自動化とCV向上を同時に実現します。",
    bullets: ["FAQ/資料連携チャットbot", "問い合わせ導線の最適化", "公開後の改善運用まで伴走"],
    icon: "automation"
  }
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Automation",
  "Chatbot",
  "Consulting"
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "AI提案スライド・実例（v4）",
    description:
      "実際にAIで作成した提案スライドです。テキスト入力から構成・デザイン反映までの成果物をそのまま確認できます。",
    categories: ["All", "Consulting", "Automation"],
    tech: ["PowerPoint", "LLM", "Slides Automation"],
    href: "/works/ai_services_slides_v4.pptx",
    previewImage: "/works/ai_services_slides_v4.pptx.png"
  },
  {
    id: "g2",
    title: "業務フロー図解ジェネレーター",
    description:
      "業務手順を入力すると、分かりやすいフロー図を自動生成します（PNG/SVG/PDF）。デモ成果物のPDFを確認できます。",
    categories: ["All", "Automation", "Consulting"],
    tech: ["Figma", "SVG", "PDF", "LLM"],
    href: "/works/diagram_merit.pdf",
    previewPdf: "/works/diagram_merit.pdf"
  },
  {
    id: "g4",
    title: "Webサイト内チャットボット",
    description: "FAQ/資料を学習したチャットボットで問い合わせ対応を自動化。",
    categories: ["All", "Chatbot", "Automation"],
    tech: ["RAG", "Vector DB", "Next.js"],
    href: "#contact"
  }
];

export const PROCESS: ProcessStep[] = [
  { title: "無料相談", description: "オンラインMTGにて課題・ゴールをヒアリング", icon: "💬" },
  { title: "ご提案", description: "最適なAIソリューションと概算費用を提示", icon: "📋" },
  { title: "契約・着手", description: "合意後、設計・開発をスタート", icon: "✍️" },
  { title: "テスト・確認", description: "デモ環境で動作確認・フィードバック反映", icon: "🔍" },
  { title: "納品・運用サポート", description: "本番リリース後も継続サポート対応", icon: "🚀" }
];
