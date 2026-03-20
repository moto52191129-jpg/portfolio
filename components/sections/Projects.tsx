"use client";

type Project = {
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "LLMを用いたドキュメント要約システム",
    description:
      "社内ドキュメントを自動要約し、検索・Q&Aができるシステムを構築。業務ナレッジの共有効率を大幅に改善しました。",
    tech: ["Python", "LLM API", "Next.js", "Vector DB"]
  },
  {
    title: "画像認識による異常検知パイプライン",
    description:
      "製造ラインの画像から異常を検知するモデルと推論基盤を構築。アラート自動化により検査工数を削減しました。",
    tech: ["PyTorch", "FastAPI", "Docker", "AWS"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-app">
        <h2 className="h2">主要プロジェクト</h2>
        <div className="mt-8 grid gap-4">
          {projects.map((p) => (
            <article key={p.title} className="card p-6">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-line bg-white/5 px-2.5 py-1 text-xs text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

