"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import HeroToggle from "@/components/ui/HeroToggle";

/* ─────────────────────────────────────────────────────────────────
   Scroll timeline
   t = 0      : Hero — headline centered top-half, card at bottom
   t 0→ZF     : Card zooms up from bottom to full-bleed
                Headline words scatter outward + fade out
   t ZF→1     : Full-bleed reel pans through 4 life moments
─────────────────────────────────────────────────────────────────── */

const SLIDES = [
  {
    id: 1, tag: "Morning coffee", stat: "3s", statLabel: "to settle",
    line: "Tap to pay. Done before you pocket your phone.",
    bg: "linear-gradient(160deg, #0D1A14 0%, #060E09 100%)",
    accent: "rgba(var(--gold-rgb), 0.14)",
  },
  {
    id: 2, tag: "Corner shop", stat: "$0", statLabel: "gas, ever",
    line: "Scan the QR. No gas prompt. No second coin to buy.",
    bg: "linear-gradient(160deg, #0A1020 0%, #060810 100%)",
    accent: "rgba(var(--gold-rgb), 0.10)",
  },
  {
    id: 3, tag: "Split with friends", stat: "1 tap", statLabel: "to send",
    line: "Send your share of dinner in USDC, right from the table.",
    bg: "linear-gradient(160deg, #130B1A 0%, #0A0710 100%)",
    accent: "rgba(var(--gold-rgb), 0.12)",
  },
  {
    id: 4, tag: "End of week", stat: "+18", statLabel: "WPGP earned",
    line: "Every payment quietly pays you back.",
    bg: "linear-gradient(160deg, #1A1200 0%, #0F0A00 100%)",
    accent: "rgba(var(--gold-rgb), 0.18)",
  },
];

const N         = SLIDES.length;
const ZOOM_VH  = 120;
const PAN_VH   = 110;
const TOTAL_VH = ZOOM_VH + PAN_VH * (N - 1);
const ZF       = ZOOM_VH / TOTAL_VH;

/* Card at rest — sits in bottom third, clearly below the headline */
const CARD_W    = 560;
const CARD_H    = 300;
const R_REST    = 18;
/* How many px the card is pushed down from viewport center at rest.
   vh * (0.5 - CARD_BOTTOM/100) - CARD_H/2  ≈ positions bottom edge at CARD_BOTTOM vh */
const OFFSET_Y  = 220;  /* px — pushes card into lower third, clear of CTA */

const EASE    = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const WORDS = [
  { text: "Pay",       gold: false, dx: -260, dy: -100, line: 0 },
  { text: "anywhere.", gold: false, dx:  260, dy:  -80, line: 0 },
  { text: "Feel",      gold: true,  dx: -220, dy:  110, line: 1 },
  { text: "nothing.",  gold: true,  dx:  240, dy:  130, line: 1 },
];

export default function HeroAndReel() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const cardRef       = useRef<HTMLDivElement>(null);
  const trackRef      = useRef<HTMLDivElement>(null);
  const heroLayerRef  = useRef<HTMLDivElement>(null);  // toggle + headline + CTA
  const toggleRef     = useRef<HTMLDivElement>(null);
  const ctaRef        = useRef<HTMLAnchorElement>(null);
  const wordRefs      = useRef<(HTMLSpanElement | null)[]>([]);
  const slideTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hintRef       = useRef<HTMLDivElement>(null);
  const glowRef       = useRef<HTMLDivElement>(null);
  const rafRef        = useRef<number>(0);
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) { setStaticMode(true); return; }

    const section = sectionRef.current;
    if (!section) return;

    const tick = () => {
      const rect      = section.getBoundingClientRect();
      const maxScroll = section.offsetHeight - window.innerHeight;
      const raw       = clamp01(-rect.top / maxScroll);

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      /* ── Phase A: zoom ── */
      const zoomRaw = clamp01(raw / ZF);
      const zoomP   = EASE(zoomRaw);

      /* Card starts centered but pushed down by OFFSET_Y.
         As zoom progresses: scale fills viewport, offset returns to 0.
         transformOrigin 50% 50% → grows equally in all directions → no clipping. */
      const sx     = vw / CARD_W;
      const sy     = vh / CARD_H;
      const s      = 1 + (Math.max(sx, sy) - 1) * zoomP;
      const r      = R_REST * (1 - zoomP);
      const offsetY = OFFSET_Y * (1 - zoomP);   // slides back to 0 as card fills screen

      if (cardRef.current) {
        cardRef.current.style.transform    = `translate(-50%, calc(-50% + ${offsetY}px)) scale(${s})`;
        cardRef.current.style.borderRadius = `${r}px`;
        cardRef.current.style.borderColor  = `rgba(var(--gold-rgb), ${0.22 * (1 - zoomP)})`;
      }

      /* ── Phase B: pan ── */
      const phase2 = clamp01((raw - ZF) / (1 - ZF));
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-phase2 * (N - 1) * CARD_W}px)`;
      }

      /* ── Hero layer: scatter words, then hide the whole layer ── */
      const hs = EASE(clamp01(zoomRaw * 1.2));
      WORDS.forEach((w, i) => {
        const el = wordRefs.current[i];
        if (el) {
          el.style.transform = `translate(${w.dx * hs}px, ${w.dy * hs}px)`;
          el.style.opacity   = String(Math.max(0, 1 - hs * 1.6));
        }
      });

      /* Fade toggle + CTA; once invisible, hide from pointer events AND
         set visibility:hidden so they can never bleed through the slides */
      const uiFade = Math.max(0, 1 - EASE(clamp01(zoomRaw * 1.8)));
      const hidden = uiFade < 0.02;
      if (toggleRef.current) {
        toggleRef.current.style.opacity    = String(uiFade);
        toggleRef.current.style.visibility = hidden ? "hidden" : "visible";
      }
      if (ctaRef.current) {
        ctaRef.current.style.opacity    = String(uiFade);
        ctaRef.current.style.visibility = hidden ? "hidden" : "visible";
      }
      /* Hide the whole hero layer once zoom is complete */
      if (heroLayerRef.current) {
        heroLayerRef.current.style.visibility = zoomP > 0.98 ? "hidden" : "visible";
      }

      /* Glow */
      if (glowRef.current) {
        glowRef.current.style.opacity = String(Math.max(0, 1 - zoomP * 0.8));
      }

      /* Scroll hint */
      if (hintRef.current) {
        hintRef.current.style.opacity = raw < 0.02 ? "1" : "0";
      }

      /* Reel slide text — active slide visible only after zoom complete */
      const active = Math.round(phase2 * (N - 1));
      slideTextRefs.current.forEach((el, i) => {
        if (!el) return;
        const on = i === active && zoomP > 0.98;
        el.style.opacity   = on ? "1" : "0";
        el.style.transform = on ? "translateY(0)" : "translateY(18px)";
        el.style.visibility = zoomP > 0.98 ? "visible" : "hidden";
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── Reduced-motion / touch fallback ── */
  if (staticMode) {
    return (
      <section id="hero" aria-label="Hero — Personal">
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gold-warm/10 blur-[160px] pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-center pt-[88px]">
            <div className="mb-10"><HeroToggle /></div>
            <h1 className="font-black text-snow tracking-tight max-w-3xl" style={{ fontSize: "clamp(44px,7vw,96px)", lineHeight: 1.1 }}>
              Pay anywhere.{" "}
              <span style={{ color: "var(--gold)" }}>Feel nothing.</span>
            </h1>
            <a href="#" className="btn-premium text-base mt-10">
              <Download size={17} aria-hidden="true" />
              Download PayPax Wallet
            </a>
          </div>
        </div>
        <div data-theme="dark" className="container-narrow py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SLIDES.map((s) => (
            <div key={s.id} className="relative rounded-2xl overflow-hidden min-h-[260px] flex items-end p-8"
              style={{ background: s.bg, border: "1px solid var(--border)" }}>
              <div className="absolute inset-0 rounded-2xl" style={{ background: s.accent }} aria-hidden="true" />
              <div className="relative z-10">
                <p className="text-gold-warm text-xs font-semibold uppercase tracking-widest mb-3">{s.tag}</p>
                <p className="font-black font-mono text-snow mb-1" style={{ fontSize: "clamp(36px,4vw,56px)" }}>
                  {s.stat} <span className="text-sm font-normal text-white/55">{s.statLabel}</span>
                </p>
                <p className="text-sm text-white/65 max-w-xs">{s.line}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ── Interactive scroll sequence ── */
  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{ height: `${TOTAL_VH}vh` }}
      aria-label="Hero — Personal"
    >
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)" }}>

        {/* Gold glow — behind everything */}
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[480px] rounded-full bg-gold-warm/10 blur-[160px] pointer-events-none"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />

        {/* ── Card / reel  (z: 10) ─────────────────────────────
            Sits at the bottom third at rest.
            transformOrigin: bottom-center → grows upward on scroll.
        ────────────────────────────────────────────────────── */}
        <div
          ref={cardRef}
          data-theme="dark"
          className="absolute will-change-transform overflow-hidden"
          style={{
            width:           `${CARD_W}px`,
            height:          `${CARD_H}px`,
            top:             "50%",
            left:            "50%",
            /* Initial transform: centered + pushed down by OFFSET_Y */
            transform:       `translate(-50%, calc(-50% + ${OFFSET_Y}px)) scale(1)`,
            transformOrigin: "50% 50%",   /* grows equally in all directions — no clipping */
            borderRadius:    `${R_REST}px`,
            border:          "1px solid rgba(var(--gold-rgb),0.22)",
            boxShadow:       "0 24px 60px rgba(0,0,0,0.50)",
            zIndex:          10,
          }}
          aria-hidden="true"
        >
          {/* Gold accent hairline top */}
          <div className="absolute top-0 inset-x-0 h-[2px] z-10"
            style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />

          {/* Slide track */}
          <div
            ref={trackRef}
            className="absolute inset-0 flex will-change-transform"
            style={{ width: `${N * CARD_W}px` }}
          >
            {SLIDES.map((slide) => (
              <div key={slide.id} className="relative flex-shrink-0"
                style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, background: slide.bg }}>
                <div className="absolute inset-0" style={{ background: slide.accent }} aria-hidden="true" />
                {/* Bottom scrim — keeps slide text readable once photos replace bg */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(6,6,18,0.80) 0%, transparent 60%)" }}
                  aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Slide text  (z: 20, outside scaled card) ─────────── */}
        <div data-theme="dark" className="absolute inset-0 pointer-events-none" style={{ zIndex: 20 }} aria-hidden="true">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              ref={(el) => { slideTextRefs.current[i] = el; }}
              className="absolute left-0 right-0 px-10 md:px-20"
              style={{
                bottom:     "8vh",
                opacity:    0,
                visibility: "hidden",
                transform:  "translateY(18px)",
                transition: "opacity 0.45s ease, transform 0.45s ease",
              }}
            >
              <p className="text-gold-warm text-xs font-semibold uppercase tracking-widest mb-3">{slide.tag}</p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-black font-mono text-snow"
                  style={{ fontSize: "clamp(52px, 7vw, 96px)", lineHeight: 1 }}>
                  {slide.stat}
                </span>
                <span className="text-base text-white/50">{slide.statLabel}</span>
              </div>
              <p className="text-white/65 leading-relaxed max-w-lg"
                style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}>
                {slide.line}
              </p>
            </div>
          ))}
        </div>

        {/* ── Hero text  (z: 30, always on top while visible) ──── */}
        <div
          ref={heroLayerRef}
          className="absolute inset-0 flex flex-col items-center text-center px-6 pointer-events-none"
          style={{
            zIndex:         30,
            justifyContent: "flex-start",
            paddingTop:     "clamp(88px, 14vh, 160px)",
          }}
        >
          {/* Toggle */}
          <div ref={toggleRef} className="mb-8 pointer-events-auto will-change-transform">
            <HeroToggle />
          </div>

          {/* Headline — words scatter independently */}
          <h1
            className="font-black text-snow tracking-tight"
            style={{ fontSize: "clamp(44px,7vw,96px)", lineHeight: 1.1 }}
            aria-label="Pay anywhere. Feel nothing."
          >
            <span className="block" aria-hidden="true">
              {WORDS.filter(w => w.line === 0).map((w) => {
                const idx = WORDS.indexOf(w);
                return (
                  <span key={idx} ref={(el) => { wordRefs.current[idx] = el; }}
                    className={`inline-block mr-[0.18em] will-change-transform ${w.gold ? "text-gradient-gold" : ""}`}>
                    {w.text}
                  </span>
                );
              })}
            </span>
            <span className="block" aria-hidden="true">
              {WORDS.filter(w => w.line === 1).map((w) => {
                const idx = WORDS.indexOf(w);
                return (
                  <span key={idx} ref={(el) => { wordRefs.current[idx] = el; }}
                    className={`inline-block mr-[0.18em] will-change-transform ${w.gold ? "text-gradient-gold" : ""}`}>
                    {w.text}
                  </span>
                );
              })}
            </span>
          </h1>

          {/* CTA */}
          <a ref={ctaRef} href="#"
            className="btn-premium text-base mt-10 pointer-events-auto will-change-transform">
            <Download size={17} aria-hidden="true" />
            Download PayPax Wallet
          </a>
        </div>

        {/* ── Scroll hint  (z: 40) ── */}
        <div ref={hintRef}
          className="absolute bottom-6 left-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ transform: "translateX(-50%)", zIndex: 40, transition: "opacity 0.4s ease" }}
          aria-hidden="true"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase text-pewter">Scroll to begin</span>
          <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "var(--border-strong)" }}>
            <style>{`@keyframes _hb{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}._hb{animation:_hb 1.4s ease-in-out infinite}`}</style>
            <div className="_hb w-1 h-2 rounded-full bg-gold-warm" />
          </div>
        </div>

      </div>
    </section>
  );
}
