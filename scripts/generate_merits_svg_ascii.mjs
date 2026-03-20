import { writeFile } from "node:fs/promises";
import path from "node:path";

// SVGの文字列が環境依存で文字化けすることがあるため、
// ここでは「日本語文字を数値文字参照（&#x....;）」に変換してASCIIのみのSVGを生成する。

const toNumericEntities = (s) => {
  return Array.from(s)
    .map((ch) => `&#x${ch.codePointAt(0).toString(16).toUpperCase()};`)
    .join("");
};

const title = "図解デザインのメリット";

const leftRoute = ["情報を受け取る", "読む（遅い）", "理解（あいまい）", "止まる"];
const rightRoute = ["情報を受け取る", "見る（瞬時）", "理解（明確）", "動く"];

const insightLead = "図解は『読む → 理解する』の";
const insightKey = "摩擦をなくし、理解を行動につなげる";

const effects = [
  { icon: "⏱", value: "60%短縮", label: "説明時間" },
  { icon: "🧠", value: "2倍", label: "記憶定着率" },
  { icon: "✅", value: "スピードが上がる", label: "意思決定" }
];

const note = "※実数値が揃い次第、データ可視化型（棒グラフ）を下部に追加予定。";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="tealGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00C2FF" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#00E5A0" stop-opacity="0.45"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <style>
      .bg { fill: #060D1A; }
      .card { fill: #0D1F35; stroke: #1A3354; stroke-width: 2; }
      .card2 { fill: #112844; stroke: #1A3354; stroke-width: 2; }
      .title { font: 800 44px sans-serif; fill: #E8F0FE; letter-spacing: -0.02em; }
      .boxText { font: 700 28px sans-serif; fill: #E8F0FE; }
      .boxTextFaded { font: 700 28px sans-serif; fill: #E8F0FE; opacity: 0.55; }
      .midText { font: 700 28px sans-serif; fill: #E8F0FE; }
      .midKey { font: 900 28px sans-serif; fill: #00C2FF; }
      .note { font: 600 18px sans-serif; fill: rgba(232,240,254,0.65); }
      .bottomIcon { font: 800 46px sans-serif; fill: #00C2FF; }
      .bottomValue { font: 900 34px sans-serif; fill: #00C2FF; letter-spacing: -0.03em; }
      .bottomLabel { font: 800 26px sans-serif; fill: #E8F0FE; opacity: 0.92; }
    </style>
  </defs>

  <rect class="bg" x="0" y="0" width="1600" height="900"/>

  <!-- Title -->
  <text x="80" y="110" class="title">${toNumericEntities(title)}</text>
  <path d="M80 130 H520" stroke="url(#tealGlow)" stroke-width="6" opacity="0.8" filter="url(#softGlow)"/>

  <!-- Comparison (Upper) -->
  <g transform="translate(80,170)">
    <!-- Left dashed route -->
    <rect class="card2" x="0" y="0" width="600" height="92" rx="10"/>
    <text x="30" y="60" class="boxText">${toNumericEntities(leftRoute[0])}</text>

    <rect class="card2" x="0" y="125" width="600" height="92" rx="10"/>
    <text x="30" y="185" class="boxText">${toNumericEntities(leftRoute[1])}</text>

    <rect class="card2" x="0" y="250" width="600" height="92" rx="10"/>
    <text x="30" y="310" class="boxText">${toNumericEntities(leftRoute[2])}</text>

    <rect x="0" y="375" width="600" height="92" rx="10" fill="#112844" stroke="#1A3354" stroke-width="2" opacity="0.35"/>
    <text x="30" y="435" class="boxTextFaded">${toNumericEntities(leftRoute[3])}</text>

    <!-- dotted arrows -->
    <line x1="300" y1="92" x2="300" y2="125" stroke="#7A93B4" stroke-width="8" stroke-dasharray="18 14" opacity="0.85"/>
    <line x1="300" y1="217" x2="300" y2="250" stroke="#7A93B4" stroke-width="8" stroke-dasharray="18 14" opacity="0.85"/>
    <line x1="300" y1="342" x2="300" y2="375" stroke="#7A93B4" stroke-width="8" stroke-dasharray="18 14" opacity="0.65"/>

    <!-- arrowheads -->
    <path d="M300 114 L278 102 L322 102 Z" fill="#7A93B4" opacity="0.85"/>
    <path d="M300 239 L278 227 L322 227 Z" fill="#7A93B4" opacity="0.85"/>
    <path d="M300 364 L278 352 L322 352 Z" fill="#7A93B4" opacity="0.65"/>
  </g>

  <g transform="translate(920,170)">
    <!-- Right solid route -->
    <rect class="card2" x="0" y="0" width="600" height="92" rx="10"/>
    <text x="30" y="60" class="boxText">${toNumericEntities(rightRoute[0])}</text>

    <rect class="card2" x="0" y="125" width="600" height="92" rx="10"/>
    <text x="30" y="185" class="boxText">${toNumericEntities(rightRoute[1])}</text>

    <rect class="card2" x="0" y="250" width="600" height="92" rx="10"/>
    <text x="30" y="310" class="boxText">${toNumericEntities(rightRoute[2])}</text>

    <rect class="card2" x="0" y="375" width="600" height="92" rx="10"/>
    <text x="30" y="435" class="boxText">${toNumericEntities(rightRoute[3])}</text>

    <!-- solid arrows -->
    <line x1="300" y1="92" x2="300" y2="125" stroke="#00C2FF" stroke-width="10" opacity="0.95"/>
    <line x1="300" y1="217" x2="300" y2="250" stroke="#00C2FF" stroke-width="10" opacity="0.95"/>
    <line x1="300" y1="342" x2="300" y2="375" stroke="#00C2FF" stroke-width="10" opacity="0.95"/>

    <path d="M300 114 L278 102 L322 102 Z" fill="#00C2FF" opacity="0.95" filter="url(#softGlow)"/>
    <path d="M300 239 L278 227 L322 227 Z" fill="#00C2FF" opacity="0.95" filter="url(#softGlow)"/>
    <path d="M300 364 L278 352 L322 352 Z" fill="#00C2FF" opacity="0.95" filter="url(#softGlow)"/>
  </g>

  <!-- Middle (Insight) -->
  <g transform="translate(170,520)">
    <rect x="0" y="0" width="1260" height="160" rx="18" fill="#112844" opacity="0.9" stroke="#1A3354" stroke-width="2"/>
    <text x="50" y="70" class="midText">${toNumericEntities(insightLead)}</text>
    <text x="50" y="118" class="midKey">${toNumericEntities(insightKey)}</text>
  </g>

  <!-- Bottom (List cards) -->
  <g transform="translate(120,700)">
    <rect x="0" y="0" width="1360" height="120" rx="18" fill="rgba(13,31,53,0.35)" stroke="#1A3354" stroke-width="2" opacity="0.5"/>

    ${effects
      .map((e, idx) => {
        const baseX = 40 + idx * 430;
        return `
    <g transform="translate(${baseX},18)">
      <rect x="0" y="0" width="420" height="84" rx="14" fill="#0D1F35"/>
      <text x="40" y="33" class="bottomIcon">${toNumericEntities(e.icon)}</text>
      <text x="150" y="42" class="bottomValue">${toNumericEntities(e.value)}</text>
      <text x="150" y="72" class="bottomLabel">${toNumericEntities(e.label)}</text>
    </g>`;
      })
      .join("")}

    <text x="40" y="115" class="note">${toNumericEntities(note)}</text>
  </g>
</svg>
`;

const outPath = path.resolve("public/works/diagram-design-merits.svg");
await mkdirP(path.dirname(outPath));
await writeFile(outPath, svg, { encoding: "utf8" });
console.log(`Wrote: ${outPath}`);

async function mkdirP(p) {
  // eslint-disable-next-line no-constant-condition
  if (!p) return;
  const fs = await import("node:fs/promises");
  await fs.mkdir(p, { recursive: true });
}

