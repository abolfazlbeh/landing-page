"use client";

import { useRef, useEffect, useState } from "react";

interface ScrollTextHighlightProps {
  text: string;
  className?: string;
}

/**
 * Chromia-style word-by-word text highlight driven by scroll progress.
 * Words start at --text-muted and brighten to --text-primary as the user scrolls.
 * Reads computed CSS variable values so it works in both dark and light themes.
 */
export default function ScrollTextHighlight({
  text,
  className = "",
}: ScrollTextHighlightProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  // Read current theme's muted/primary colors from CSS variables
  const getMutedColor = () =>
    getComputedStyle(document.documentElement)
      .getPropertyValue("--text-muted")
      .trim() || "#64748B";
  const getPrimaryColor = () =>
    getComputedStyle(document.documentElement)
      .getPropertyValue("--text-primary")
      .trim() || "#F0F2F5";

  const [mutedColor, setMutedColor] = useState("#64748B");
  const [primaryColor, setPrimaryColor] = useState("#F0F2F5");

  useEffect(() => {
    setMutedColor(getMutedColor());
    setPrimaryColor(getPrimaryColor());

    // Re-read on theme change
    const observer = new MutationObserver(() => {
      setMutedColor(getMutedColor());
      setPrimaryColor(getPrimaryColor());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.8;
      const end = windowH * 0.15;
      const total = rect.height + (start - end);
      const current = start - rect.top;
      setProgress(Math.min(Math.max(current / total, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p ref={containerRef} className={className} aria-label={text}>
      {words.map((word, i) => {
        const wordThreshold = i / words.length;
        const wordEnd = (i + 1) / words.length;
        const localProgress = Math.min(
          Math.max((progress - wordThreshold) / (wordEnd - wordThreshold), 0),
          1
        );

        // Interpolate between muted and primary color using opacity trick
        // Works with any hex color pair
        const opacity = 0.35 + localProgress * 0.65;

        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              color: localProgress > 0.5 ? primaryColor : mutedColor,
              opacity: localProgress > 0.5 ? 1 : opacity + 0.1,
              transition: "color 0.2s ease, opacity 0.2s ease",
              marginRight: "0.28em",
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
