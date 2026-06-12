import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Theme-aware background tokens ──
        // These read from CSS variables, so they flip when data-theme changes.
        // Dark:  abyss=#08090F   | Light: abyss=#F8FAFC  (page bg)
        // Dark:  deep-sea=#0D1021 | Light: deep-sea=#F1F5F9 (section bg)
        // Dark:  slate-deep=#131628 | Light: slate-deep=#E8EEF6
        "abyss":      "var(--bg-primary)",
        "deep-sea":   "var(--bg-secondary)",
        "slate-deep": "var(--bg-tertiary)",
        "night-teal": "var(--bg-elevated)",

        // ── Theme-aware text tokens ──
        // Dark: snow=#F0F2F5  | Light: snow=#0F172A
        // Dark: silver-mist=#94A3B8 | Light: silver-mist=#475569
        // Dark: pewter=#64748B | Light: pewter=#94A3B8
        "snow":         "var(--text-primary)",
        "silver-mist":  "var(--text-secondary)",
        "pewter":       "var(--text-muted)",

        // ── Accent — cyan-teal (midpoint between original teal and blue) ──
        "teal-bright":   "#06B6D4",   // Tailwind cyan-500 — the sweet spot
        "teal-deep":     "#0891B2",   // cyan-600 — gradient start, deeper
        "cyan-electric": "#22D3EE",   // cyan-400 — gradient end, lighter highlight

        // ── Gold (unchanged) ──
        "gold-warm": "#D4A853",
        "amber":     "#D4A853",
        "honey":     "#F59E0B",

        // ── Utility ──
        "mint":  "#34D399",
        "coral": "#F87171",

        // ── Glow tokens ──
        "glow-teal": "rgba(14,165,233,0.08)",
        "glow-gold": "rgba(212,168,83,0.06)",
      },
      fontFamily: {
        sans: ["Satoshi", "General Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, #0891B2, #22D3EE)",
        "gradient-gold": "linear-gradient(135deg, #D4A853, #F59E0B)",
        "gradient-bg":   "linear-gradient(180deg, var(--bg-secondary), var(--bg-primary))",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      spacing: {
        section: "120px",
        "section-mobile": "64px",
        container: "1200px",
      },
      animation: {
        "fade-up": "fadeUp 600ms cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      boxShadow: {
        "glow-teal": "0 0 40px rgba(6,182,212,0.20)",
        "glow-gold": "0 0 40px rgba(212,168,83,0.15)",
        "card-hover": "0 8px 32px rgba(6,182,212,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
