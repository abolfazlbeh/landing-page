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
        // Backgrounds
        abyss: "#080B10",
        "deep-sea": "#0D1117",
        "slate-deep": "#151C25",
        "night-teal": "#0F2027",
        // Text
        snow: "#F0F2F5",
        "silver-mist": "#94A3B8",
        pewter: "#64748B",
        // Accents
        "teal-bright": "#14B8A6",
        "gold-warm": "#D4A853",
        "teal-deep": "#0D9488",
        "cyan-electric": "#06B6D4",
        amber: "#D4A853",
        honey: "#F59E0B",
        // Utility
        mint: "#34D399",
        coral: "#F87171",
        frost: "rgba(240,242,245,0.03)",
        "glow-teal": "rgba(20,184,166,0.08)",
        "glow-gold": "rgba(212,168,83,0.06)",
      },
      fontFamily: {
        sans: ["Satoshi", "General Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["72px", { lineHeight: "80px", fontWeight: "900" }],
        "display-mobile": ["40px", { lineHeight: "48px", fontWeight: "900" }],
      },
      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, #0D9488, #06B6D4)",
        "gradient-gold": "linear-gradient(135deg, #D4A853, #F59E0B)",
        "gradient-bg": "linear-gradient(180deg, #0D1117, #080B10)",
        "gradient-hero-ambient":
          "radial-gradient(ellipse at 30% 50%, rgba(13,148,136,0.08), transparent 60%)",
        "gradient-card-border":
          "linear-gradient(135deg, rgba(240,242,245,0.06), rgba(240,242,245,0.01))",
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
        "counter": "counter 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
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
        "glow-teal": "0 0 40px rgba(20,184,166,0.15)",
        "glow-gold": "0 0 40px rgba(212,168,83,0.15)",
        "card-hover": "0 8px 32px rgba(20,184,166,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
