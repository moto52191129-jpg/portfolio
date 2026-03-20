import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        surface2: "var(--color-surface-2)",
        primary: "var(--color-primary)",
        primaryGlow: "var(--color-primary-glow)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        white: "var(--color-white)"
      },
      boxShadow: {
        glow: "0 18px 60px -40px rgba(0,0,0,0.85)",
        neon: "0 0 30px rgba(0,194,255,0.5)"
      },
      maxWidth: {
        content: "1160px"
      }
    }
  },
  plugins: []
};

export default config;
