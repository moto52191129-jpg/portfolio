import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  {
    ignores: [
      "**/.next/**",
      "node_modules/**",
      "google_api/**",
      "next-env.d.ts",
      "postcss.config.mjs",
      "tailwind.config.ts",
      "next.config.mjs"
    ]
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // JSON-LDで必要なため許可
      "react/no-danger": "off",
      "import/no-anonymous-default-export": "off"
    }
  }
];

