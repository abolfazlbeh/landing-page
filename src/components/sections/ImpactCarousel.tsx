"use client";

import { useRef, useEffect, useState } from "react";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const GOLD = "#D4A853";

const SLIDES = [
  {
    id: 1,
    headline: "Settled in 3 seconds.",
    subline: "A sale completes. Money moves. No waiting, no middleman, no delay.",
    stat: "3s",
    statLabel: "settlement",
    tag: "For merchants",
    accent: "#06B6D4",
    photoHint: "Close-up of a smartphone screen showing a green confirmed payment notification, soft warm light, shallow depth of field. Landscape 16:9 ~800x450px WebP.",
  },
  {
    id: 2,
    headline: "Fees that don't eat your business.",
    subline: "0.75% and nothing else. Every dollar saved stays with you.",
    stat: "0.75%",
    statLabel: "total fee",
    tag: "Keep more",
    accent: "#22D3EE",
    photoHint: "Flatlay of a calculator, coins, and a receipt on a clean desk, minimal and warm light. Landscape 16:9 ~800x450px WebP.",
  },
  {
    id: 3,
    headline: "Pay without thinking about gas.",
    subline: "Customers tap once and go. No ETH balance required. Just a clean checkout.",
    stat: "0 gas",
    statLabel: "for customers",
    tag: "Frictionless",
    accent: "#0891B2",
    photoHint: "Hand tapping a phone to a QR code payment terminal, motion blur on the hand. Square 1:1 ~600x600px WebP.",
  },
  {
    id: 4,
    headline: "Live in an afternoon.",
    subline: "One SDK. Any backend. No approval process. Your integration, your rules.",
    stat: "4h",
    statLabel: "to go live",
    tag: "For developers",
    accent: "#06B6D4",
    photoHint: "Terminal window on a dark monitor showing a successful deploy output with green text. Landscape 16:9 ~800x450px WebP.",
  },
  {
    id: 5,
    headline: "Every sale. Every time. Instant.",
    subline: "100% settlement rate across BNB, Base and Polygon. The contract never fails.",
    stat: "100%",
    statLabel: "settlement rate",
    tag: "Reliable",
    accent: "#22D3EE",
    photoHint: "Overhead view of a busy market stall with a tablet POS device in frame, vibrant colours, natural daylight. Landscape 16:9 ~800x450px WebP.",
  },
];

const N = SLIDES.length;
// Card 0 starts at INITIAL_SCALE (fills viewport) and zooms to scale(1).
// All cards share the same natural size — no height mismatch on transition.
const INITIAL_SCALE = 1.62;
const ZOOM_VH = 130;
const STEP_VH = 110;
const TOTAL_VH = ZOOM_VH + STEP_VH * (N - 1);
const EASE = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

export default function ImpactCarousel() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const photoWrapRef  = useRef<HTMLDivElement>(null);  // photo scales
  const textWrapRef   = useRef<HTMLDivElement>(null);  // counter-scaled so text stays same size
  const trackRef      = useRef<HTMLDivElement>(null);
  const headingRef    = useRef<HTMLDivElement>(null);
  const hintRef       = useRef<HTMLDivElement>(null);
  const dotRefs       = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef        = useRef<number>(0);
  const prevActive    = useRef(-1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const activateCard = (idx: number) => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const on   = i === idx;
        const stat = card.querySelector<HTMLElement>(".cs-stat");
        const body = card.querySelector<HTMLElement>(".cs-body");
        const bar  = card.querySelector<HTMLElement>(".cs-bar");
        const ov   = card.querySelector<HTMLElement>(".cs-overlay");
        if (stat) { stat.style.opacity = on ? "1" : "0"; stat.style.transform = on ? "translateY(0)" : "translateY(18px)"; }
        if (body) { body.style.opacity = on ? "1" : "0.15"; body.style.transform = on ? "translateY(0)" : "translateY(14px)"; }
        if (bar)  { bar.style.transform = on ? "scaleX(1)" : "scaleX(0)"; }
        if (ov)   {
          ov.style.background = on
            ? "linear-gradient(to top,rgba(6,6,18,0.92) 0%,rgba(6,6,18,0.28) 55%,rgba(6,6,18,0.04) 100%)"
            : "linear-gradient(to top,rgba(6,6,18,0.72) 0%,rgba(6,6,18,0.46) 55%,rgba(6,6,18,0.16) 100%)";
        }
      });
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.width = i === idx ? "24px" : "8px";
        dot.style.backgroundColor = i === idx ? SLIDES[i].accent : "rgba(148,163,184,0.35)";
      });
    };

    // Activate card 0 immediately after mount
    const initRaf = requestAnimationFrame(() => activateCard(0));

    const tick = () => {
      const rect      = section.getBoundingClientRect();
      const maxScroll = section.offsetHeight - window.innerHeight;
      const raw       = Math.max(0, Math.min(1, -rect.top / maxScroll));
      const zoomF     = ZOOM_VH / TOTAL_VH;
      const zoomP     = EASE(Math.min(1, raw / zoomF));

      // Card 0: starts at INITIAL_SCALE (oversized, fills viewport), zooms to scale(1)
      const scaleVal = INITIAL_SCALE - (INITIAL_SCALE - 1) * zoomP;
      const radVal   = 20 * zoomP;
      if (photoWrapRef.current) {
        photoWrapRef.current.style.transform    = `scale(${scaleVal})`;
        photoWrapRef.current.style.borderRadius = `${radVal}px`;
      }
      // Counter-scale the text so it visually stays at natural size
      // Text moves with the scaled card, but font stays unscaled
      if (textWrapRef.current) {
        const invScale = 1 / scaleVal;
        textWrapRef.current.style.transform = `scale(${invScale})`;
        textWrapRef.current.style.transformOrigin = "left bottom";
      }

      // Heading fades in during zoom phase
      if (headingRef.current) {
        const ho = Math.min(1, zoomP * 2);
        headingRef.current.style.opacity   = String(ho);
        headingRef.current.style.transform = `translateY(${(1 - ho) * -12}px)`;
      }

      // Horizontal translate
      const phase2 = Math.max(0, (raw - zoomF) / (1 - zoomF));
      const vw     = window.innerWidth;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-phase2 * (N - 1) * vw}px)`;
      }

      // Active index change
      const newActive = Math.min(N - 1, Math.round(phase2 * (N - 1)));
      if (newActive !== prevActive.current) {
        prevActive.current = newActive;
        setActiveIndex(newActive);
        activateCard(newActive);
      }

      // Scroll hint
      if (hintRef.current) {
        hintRef.current.style.opacity = phase2 < 0.06 ? "1" : "0";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(initRaf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      style={{ height: `${TOTAL_VH}vh` }}
      aria-label="Product impact"
    >
      <div
        className="sticky top-0 h-screen"
        style={{ overflow: "hidden", backgroundColor: "var(--bg-primary)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse at 50% 70%, rgba(6,182,212,0.07), transparent 65%)" }}
        />

        {/* Heading */}
        <div
          ref={headingRef}
          className="absolute top-0 left-0 right-0 z-20 pt-10 text-center pointer-events-none"
          style={{ opacity: 0 }}
        >
          <p className="section-label">Real Impact</p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--text-primary)" }}>
            How PayPax changes{" "}
            <span className="text-gradient-teal">everyday life</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4" role="tablist">
            {SLIDES.map((s, i) => (
              <span
                key={s.id}
                ref={(el) => { dotRefs.current[i] = el; }}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Story ${i + 1}`}
                style={{
                  display: "inline-block",
                  height: 8,
                  borderRadius: 4,
                  width: i === 0 ? 24 : 8,
                  backgroundColor: i === 0 ? SLIDES[0].accent : "rgba(148,163,184,0.35)",
                  transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), background-color 0.35s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Card track */}
        <div className="absolute inset-0 flex items-center" style={{ paddingTop: "150px" }}>
          <div
            ref={trackRef}
            style={{ display: "flex", width: `${N * 100}vw`, willChange: "transform" }}
          >
            {SLIDES.map((slide, i) => (
              <div
                key={slide.id}
                style={{
                  width: "100vw",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/*
                  Card 0: outer container is 100vw x 100vh (fills screen).
                  photoWrapRef scales the photo+overlay independently.
                  Text sits OUTSIDE the scale wrapper — absolute over the full container.
                  This means text never scales with the photo.
                */}
                {i === 0 ? (
                  <div
                    ref={(el) => { cardRefs.current[0] = el; }}
                    style={{
                      position: "relative",
                      width: "min(900px, 90vw)",
                      height: "min(calc(100vh - 190px), 580px)",
                    }}
                    aria-label={slide.headline}
                  >
                    {/* photoWrapRef: same size as card, starts at INITIAL_SCALE */}
                    <div
                      ref={photoWrapRef}
                      style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        borderRadius: "0px",
                        transformOrigin: "center center",
                        willChange: "transform",
                        transform: `scale(${INITIAL_SCALE})`,
                      }}
                    >
                      {/* Photo */}
                      <div className="absolute inset-0">
                        <PhotoPlaceholder
                          hint={slide.photoHint}
                          className="w-full h-full !rounded-none"
                          aspectRatio="aspect-auto"
                        />
                      </div>

                      {/* Overlay */}
                      <div
                        className="cs-overlay absolute inset-0"
                        style={{
                          background: "linear-gradient(to top,rgba(6,6,18,0.92) 0%,rgba(6,6,18,0.28) 55%,rgba(6,6,18,0.04) 100%)",
                          transition: "background 0.6s ease",
                        }}
                        aria-hidden="true"
                      />

                      {/* Accent bar */}
                      <div
                        className="cs-bar absolute top-0 left-0 right-0"
                        style={{
                          height: 3,
                          backgroundColor: slide.accent,
                          transformOrigin: "left",
                          transform: "scaleX(1)",
                          transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s",
                        }}
                        aria-hidden="true"
                      />

                      {/* Context tag */}
                      <div
                        className="absolute top-6 right-6"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "6px 14px",
                          borderRadius: 99,
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          backgroundColor: `${slide.accent}22`,
                          border: `1px solid ${slide.accent}44`,
                          color: slide.accent,
                        }}
                      >
                        {slide.tag}
                      </div>

                      {/* Text — counter-scaled to INITIAL_SCALE so font reads at natural size */}
                      <div
                        ref={textWrapRef}
                        className="absolute bottom-0 left-0 right-0 px-10 pb-10"
                        style={{
                          transformOrigin: "left bottom",
                          transform: `scale(${1 / INITIAL_SCALE})`,
                        }}
                      >
                        <div
                          className="cs-stat mb-5 flex items-baseline gap-3"
                          style={{
                            opacity: 0,
                            transform: "translateY(18px)",
                            transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s",
                          }}
                        >
                          <span className="font-black font-mono leading-none" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: GOLD }}>
                            {slide.stat}
                          </span>
                          <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                            {slide.statLabel}
                          </span>
                        </div>
                        <div
                          className="cs-body"
                          style={{
                            opacity: 0,
                            transform: "translateY(14px)",
                            transition: "opacity 0.55s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.2s",
                          }}
                        >
                          <h3 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#ffffff" }}>
                            {slide.headline}
                          </h3>
                          <p className="leading-relaxed max-w-lg" style={{ fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.62)" }}>
                            {slide.subline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Cards 1–4: normal card, no scale trick needed */
                  <div
                    ref={(el) => { cardRefs.current[i] = el; }}
                    aria-label={slide.headline}
                    style={{
                      position: "relative",
                      width: "min(900px, 90vw)",
                      height: "min(calc(100vh - 190px), 580px)",
                      overflow: "hidden",
                      borderRadius: 16,
                      flexShrink: 0,
                    }}
                  >
                    <div className="absolute inset-0">
                      <PhotoPlaceholder
                        hint={slide.photoHint}
                        className="w-full h-full !rounded-none"
                        aspectRatio="aspect-auto"
                      />
                    </div>
                    <div
                      className="cs-overlay absolute inset-0"
                      style={{
                        background: "linear-gradient(to top,rgba(6,6,18,0.72) 0%,rgba(6,6,18,0.46) 55%,rgba(6,6,18,0.16) 100%)",
                        transition: "background 0.6s ease",
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="cs-bar absolute top-0 left-0 right-0"
                      style={{
                        height: 3,
                        backgroundColor: slide.accent,
                        transformOrigin: "left",
                        transform: "scaleX(0)",
                        transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s",
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-6 right-6"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "6px 14px",
                        borderRadius: 99,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        backgroundColor: `${slide.accent}22`,
                        border: `1px solid ${slide.accent}44`,
                        color: slide.accent,
                        opacity: 0.4,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      {slide.tag}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-10 pb-10">
                      <div
                        className="cs-stat mb-5 flex items-baseline gap-3"
                        style={{
                          opacity: 0,
                          transform: "translateY(18px)",
                          transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s",
                        }}
                      >
                        <span className="font-black font-mono leading-none" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: GOLD }}>
                          {slide.stat}
                        </span>
                        <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                          {slide.statLabel}
                        </span>
                      </div>
                      <div
                        className="cs-body"
                        style={{
                          opacity: 0.15,
                          transform: "translateY(14px)",
                          transition: "opacity 0.55s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.2s",
                        }}
                      >
                        <h3 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#ffffff" }}>
                          {slide.headline}
                        </h3>
                        <p className="leading-relaxed max-w-lg" style={{ fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.62)" }}>
                          {slide.subline}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
          style={{ transform: "translateX(-50%)", transition: "opacity 0.4s ease" }}
          aria-hidden="true"
        >
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5" style={{ borderColor: "var(--border-strong)" }}>
            <style>{`@keyframes _sb{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}._sb{animation:_sb 1.4s ease-in-out infinite}`}</style>
            <div className="_sb w-1 h-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
