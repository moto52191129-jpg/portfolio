export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "presentation" | "diagram" | "phone" | "automation";
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  highlightSuffix?: boolean;
};

export type CaseStudy = {
  tag: string;
  before: string;
  after: string;
  resultNumber: string;
  resultLabel: string;
  tech: string[];
};

export type GalleryCategory = "All" | "AI Agent" | "Automation" | "Chatbot" | "Consulting";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  categories: GalleryCategory[];
  tech: string[];
  href?: string;
  previewImage?: string;
};

export type Testimonial = {
  name: string;
  company: string;
  role?: string;
  comment: string;
  stars: 5;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = { q: string; a: string };

export const SITE = {
  name: "[YOUR_NAME]",
  contactEmail: "[CONTACT_EMAIL]",
  sns: {
    x: "[SNS_X_URL]",
    github: "[SNS_GITHUB_URL]",
    linkedin: "[SNS_LINKEDIN_URL]"
  }
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
    id: "calls",
    number: "03",
    title: "電話営業自動化",
    description:
      "AIエージェントが架電〜会話〜記録まで自動化。月1,000件規模の架電を、追加人員なしで実現します。",
    bullets: ["日本語音声に最適化", "録音/要約/CRM連携", "最短14日で立ち上げ"],
    icon: "phone"
  },
  {
    id: "automation",
    number: "04",
    title: "AI業務自動化（設計/伴走）",
    description:
      "“何から自動化すべきか”の棚卸しから、n8n/Makeなどでの実装、運用設計まで。最短2週間で効果を出す設計をします。",
    bullets: ["現場ヒアリング→要件化", "小さく作って早く回す", "非エンジニア向け運用設計"],
    icon: "automation"
  }
];

export const STATS: Stat[] = [
  { label: "導入実績", value: 30, suffix: "社+" },
  { label: "コスト削減率", value: 47, suffix: "%", highlightSuffix: true },
  { label: "顧客満足度", value: 98, suffix: "%", highlightSuffix: true },
  { label: "平均納期", value: 14, suffix: "日", highlightSuffix: true }
];

export const CASES: CaseStudy[] = [
  {
    tag: "人材紹介会社",
    before: "提案書作成に毎回3〜4時間かかる",
    after: "AIスライド自動生成で平均20分に短縮、月40時間以上の工数削減",
    resultNumber: "20分",
    resultLabel: "平均作成時間",
    tech: ["Slides", "LLM", "Template"]
  },
  {
    tag: "ITスタートアップ",
    before: "投資家向け説明資料の図解が属人化",
    after: "図解を自動生成し、資料作成コスト70%削減・調達成功",
    resultNumber: "70%",
    resultLabel: "作成コスト削減",
    tech: ["Design", "LLM", "Figma"]
  },
  {
    tag: "不動産会社",
    before: "架電スタッフ3名の人件費と管理コストが大きい",
    after: "AIエージェントが月1,000件架電を自動化、営業コスト60%削減",
    resultNumber: "60%",
    resultLabel: "営業コスト削減",
    tech: ["Vapi", "Twilio", "CRM"]
  }
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "AI Agent",
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
    href: "/works/AI_Services_Slides_v4.pptx",
    previewImage: "/works/AI_Services_Slides_v4.pptx.png"
  },
  {
    id: "g2",
    title: "業務フロー図解ジェネレーター",
    description: "業務手順を入力すると、分かりやすいフロー図を自動生成（PNG/SVG）。",
    categories: ["All", "Automation", "Consulting"],
    tech: ["Figma", "SVG", "LLM"],
    href: "#contact"
  },
  {
    id: "g3",
    title: "架電AIエージェント・PoC",
    description: "会話→要約→CRM記録までを自動化する最小構成のデモ。",
    categories: ["All", "AI Agent", "Automation"],
    tech: ["Voice", "Twilio", "LLM"],
    href: "#contact"
  },
  {
    id: "g4",
    title: "Webサイト内チャットボット",
    description: "FAQ/資料を学習したチャットボットで問い合わせ対応を自動化。",
    categories: ["All", "Chatbot", "Automation"],
    tech: ["RAG", "Vector DB", "Next.js"],
    href: "#contact"
  },
  {
    id: "g5",
    title: "営業リスト整形・自動化",
    description: "スプレッドシートから重複排除/分類/優先順位付けまでを自動化。",
    categories: ["All", "Automation"],
    tech: ["n8n", "Make", "Sheets"],
    href: "#contact"
  },
  {
    id: "g6",
    title: "提案前診断（無料）",
    description: "30分で“どこから自動化すべきか”を整理し、効果の出やすい順に提案します。",
    categories: ["All", "Consulting"],
    tech: ["Workshop", "Roadmap"],
    href: "#contact"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "A.K.",
    company: "人材紹介（営業責任者）",
    comment:
      "提案書作成のボトルネックが一気に解消しました。資料品質が上がり、作成時間も大幅に短縮。商談数の最大化に集中できています。",
    stars: 5
  },
  {
    name: "M.S.",
    company: "ITスタートアップ（CEO）",
    comment:
      "図解のクオリティが想像以上で、投資家説明の説得力が上がりました。意思決定が早くなり、調達までのスピードも改善しました。",
    stars: 5
  },
  {
    name: "T.N.",
    company: "不動産（営業企画）",
    comment:
      "架電の記録や要約まで自動化され、管理が楽になりました。人件費だけでなく、属人化の解消にも効いています。",
    stars: 5
  }
];

export const PROCESS: ProcessStep[] = [
  { title: "無料相談", description: "オンラインMTGにて課題・ゴールをヒアリング", icon: "💬" },
  { title: "ご提案", description: "最適なAIソリューションと概算費用を提示", icon: "📋" },
  { title: "契約・着手", description: "合意後、設計・開発をスタート", icon: "✍️" },
  { title: "テスト・確認", description: "デモ環境で動作確認・フィードバック反映", icon: "🔍" },
  { title: "納品・運用サポート", description: "本番リリース後も継続サポート対応", icon: "🚀" }
];

export const FAQ: FaqItem[] = [
  {
    q: "スライド自動生成は既存のPowerPoint／Googleスライドに対応していますか？",
    a: "はい。pptx形式・Googleスライド形式どちらにも出力対応しています。既存テンプレへの当て込みも可能です。"
  },
  {
    q: "図解デザイン生成はどんな形式で納品されますか？",
    a: "PNG / SVG / PDF形式に対応しています。Figmaファイルでの納品も可能です。"
  },
  {
    q: "電話営業自動化は日本語に対応していますか？",
    a: "はい。日本語に最適化した音声モデル/設定で、自然な会話を実現します。"
  },
  {
    q: "既存のCRMやSFAと連携できますか？",
    a: "Salesforce・HubSpot・Notionなど主要ツールとのAPI連携に対応しています（要件に応じて設計）。"
  },
  {
    q: "非エンジニアでも運用できますか？",
    a: "はい。操作マニュアルと導入後サポートを用意し、必要に応じて運用フローも整備します。"
  },
  {
    q: "納期はどのくらいですか？",
    a: "要件確定後、スライド生成・図解は最短3日、電話営業自動化は最短14日での納品実績があります。"
  },
  {
    q: "価格はどのように決まりますか？",
    a: "スコープ（枚数/点数/連携有無）・納期・カスタム度で変わります。まずは無料相談でゴールを確認し、最適な形でお見積りします。"
  },
  {
    q: "小さくPoCから始められますか？",
    a: "可能です。効果検証→拡張の順に、最短距離で成果が出る設計を提案します。"
  }
];

