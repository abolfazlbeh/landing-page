"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface FeatureItem {
  number: string;
  title: string;
  body: string;
  tag?: string;
  tagColor?: "teal" | "gold" | "mint";
  icon: React.ReactNode;
}

interface StickyFeaturePanelProps {
  features: FeatureItem[];
  sectionLabel: string;
  headline: React.ReactNode;
}

const tagStyles: Record<string, string> = {
  teal: "bg-teal-bright/10 text-teal-bright border border-teal-bright/20",
  gold: "bg-gold-warm/10 text-gold-warm border border-gold-warm/20",
  mint: "bg-mint/10 text-mint border border-mint/20",
};

export default function StickyFeaturePanel({
  features,
  sectionLabel,
  headline,
}: StickyFeaturePanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        },
        {
          // Trigger when card centre crosses the middle band of viewport
          rootMargin: "-35% 0px -35% 0px",
          threshold: 0,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToCard = (idx: number) => {
    cardRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    /*
     * Key layout rules that make sticky work:
     * - outer: position relative, no overflow hidden
     * - inner: flex row, items-start (NOT items-stretch)
     * - left col: sticky top-24, self-start, fixed width
     * - right col: flex-1, its natural height drives the scroll container
     */
    <div className="container-narrow relative">
      <div className="flex flex-col lg:flex-row lg:items-start gap-0">

        {/* ── LEFT: sticky panel ────────────────────────────── */}
        <div className="lg:w-[38%] lg:sticky lg:top-24 lg:self-start pt-16 lg:pt-[120px] pb-8 lg:pb-[120px] pr-0 lg:pr-12">
          {sectionLabel && (
            <p className="section-label">{sectionLabel}</p>
          )}
          <div className="text-3xl md:text-4xl font-black leading-tight mb-10" style={{ color: "var(--text-primary)" }}>
            {headline}
          </div>

          {/* Progress nav — desktop only */}
          <nav
            className="hidden lg:flex flex-col gap-2"
            aria-label="Feature navigation"
          >
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className="flex items-center gap-3 text-left py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded"
                aria-label={`Jump to ${f.title}`}
                aria-current={i === activeIndex ? "true" : "false"}
              >
                {/* Line indicator */}
                <span
                  className="flex-shrink-0 h-px rounded-full transition-all duration-400"
                  style={{
                    width: i === activeIndex ? 32 : 16,
                    backgroundColor: i === activeIndex
                      ? "var(--accent)"
                      : "var(--border-strong)",
                  }}
                />
                <span
                  className="text-sm font-medium transition-colors duration-300"
                  style={{
                    color: i === activeIndex ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                >
                  {f.title}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* ── RIGHT: scrolling cards ────────────────────────── */}
        <div className="lg:w-[62%] flex flex-col gap-5 pt-0 lg:pt-[120px] pb-16 lg:pb-[120px]">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <motion.div
                animate={{
                  opacity: i === activeIndex ? 1 : 0.5,
                  scale: i === activeIndex ? 1 : 0.985,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-lg p-8 transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: i === activeIndex
                    ? "1px solid rgba(var(--accent-rgb), 0.25)"
                    : "1px solid var(--border)",
                  boxShadow: i === activeIndex ? "var(--shadow-card)" : "none",
                }}
              >
                {/* Active left accent bar */}
                {i === activeIndex && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r"
                    style={{ background: "linear-gradient(to bottom, var(--accent-deep), var(--accent-light))" }}
                  />
                )}

                <div className="flex items-start gap-5">
                  {/* Faint step number */}
                  <span
                    className="text-5xl font-black font-mono select-none flex-shrink-0 w-10 leading-none pt-1"
                    style={{ color: "var(--border-strong)" }}
                    aria-hidden="true"
                  >
                    {feature.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Icon + tag */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <div
                        className={[
                          "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                          i === activeIndex
                            ? "bg-teal-bright/15 border border-teal-bright/30"
                            : "",
                        ].join(" ")}
                        style={i !== activeIndex ? {
                          backgroundColor: "var(--border)",
                          border: "1px solid var(--border-strong)",
                        } : {}}
                      >
                        {feature.icon}
                      </div>
                      {feature.tag && (
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            tagStyles[feature.tagColor ?? "teal"]
                          }`}
                        >
                          {feature.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-snow mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-silver-mist text-sm leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
