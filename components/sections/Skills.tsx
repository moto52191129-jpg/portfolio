"use client";

const skills = [
  {
    title: "Machine Learning",
    items: [
      "Python (PyTorch / TensorFlow)",
      "大規模言語モデル(LLM)の活用・微調整",
      "MLOps / モデルデプロイ"
    ]
  },
  {
    title: "Web & Backend",
    items: ["TypeScript / Next.js / React", "Node.js API開発", "REST / GraphQL"]
  },
  {
    title: "Tools",
    items: ["Docker / GitHub Actions", "AWS / GCP", "SQL / NoSQL"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-app">
        <h2 className="h2">スキルセット</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {skills.map((c) => (
            <div key={c.title} className="card p-5">
              <h3 className="text-sm font-semibold text-white/85">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {c.items.map((it) => (
                  <li key={it} className="leading-relaxed">
                    ・{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

