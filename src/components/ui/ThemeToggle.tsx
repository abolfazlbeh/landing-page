"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        relative w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]
        hover:bg-[var(--accent)]/10
        border border-[var(--border)]
      `}
    >
      {/* Sun — visible in dark mode (clicking switches to light) */}
      <Sun
        size={17}
        className={`absolute transition-all duration-300 text-[var(--text-secondary)]
          ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
        aria-hidden="true"
      />
      {/* Moon — visible in light mode (clicking switches to dark) */}
      <Moon
        size={17}
        className={`absolute transition-all duration-300 text-[var(--text-secondary)]
          ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
        aria-hidden="true"
      />
    </button>
  );
}
