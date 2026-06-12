"use client";

import { useRef, useEffect, useState } from "react";
import QRCode from "@/components/ui/QRCode";

/* ─── Visual components ─── */

/** Card 1 — WooCommerce: giant "15m" stat */
function Visual15m({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <span
        style={{
          fontSize: "clamp(100px, 22vw, 160px)",
          fontWeight: 900,
          fontFamily: "JetBrains Mono, monospace",
          color: accent,
          opacity: 0.22,
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        15m
      </span>
      <span style={{ color: `${accent}99`, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 8 }}>
        setup time
      </span>
    </div>
  );
}

/** Card 2 — Shopify: animated SVG counter */
function VisualShopifyCounter({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-3">
      <svg width="220" height="80" viewBox="0 0 220 80" fill="none" aria-hidden="true">
        {/* Store shelf lines */}
        <rect x="10" y="60" width="200" height="3" rx="1.5" fill={accent} opacity="0.15"/>
        {/* Store icons */}
        {[0,1,2,3,4].map(j => (
          <g key={j} transform={`translate(${20 + j * 40}, 20)`}>
            <rect x="0" y="16" width="24" height="24" rx="3" fill={accent} opacity={0.1 + j * 0.06}/>
            <path d="M4 16 L12 4 L20 16" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7"/>
            <rect x="9" y="26" width="6" height="14" rx="1" fill={accent} opacity="0.5"/>
          </g>
        ))}
        {/* Animated count line */}
        <style>{`
          @keyframes _shopPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
          ._shopDot { animation: _shopPulse 1.8s ease-in-out infinite; }
        `}</style>
        <circle className="_shopDot" cx="195" cy="22" r="5" fill={accent}/>
      </svg>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "clamp(40px, 8vw, 64px)", fontWeight: 900, fontFamily: "JetBrains Mono, monospace", color: accent, opacity: 0.22, letterSpacing: "-0.04em" }}>
          4.4M
        </span>
        <span style={{ display: "block", color: `${accent}80`, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          stores supported
        </span>
      </div>
    </div>
  );
}

/** Card 3 — POS: real QR code pointing to a sample payment URL */
function VisualQR({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
      {/* Styled frame around the QR */}
      <div
        style={{
          padding: 16,
          borderRadius: 16,
          backgroundColor: "rgba(255,255,255,0.06)",
          border: `1px solid ${accent}30`,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <QRCode
          value="https://pay.demere.io/invoice/demo-abc123"
          size={130}
          color={accent}
          bgColor="transparent"
        />
        {/* Corner accent marks */}
        <span
          style={{
            fontSize: 10,
            fontFamily: "JetBrains Mono, monospace",
            color: `${accent}70`,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scan to pay
        </span>
      </div>
    </div>
  );
}

/** Card 4 — SDK: language tags in monospace */
function VisualSDKLangs({ accent }: { accent: string }) {
  const langs = ["TypeScript", "Python", "PHP", "Ruby", "Go"];
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-2">
      {langs.map((lang, i) => (
        <div
          key={lang}
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "clamp(14px, 2.5vw, 20px)",
            fontWeight: 700,
            color: accent,
            opacity: 0.15 + i * 0.12,
            letterSpacing: "0.04em",
            transition: "opacity 0.3s",
          }}
          aria-hidden="true"
        >
          {lang}
        </div>
      ))}
    </div>
  );
}

/** Card 5 — Settlement: animated SVG pulse circle */
function VisualPulse({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden="true">
        <style>{`
          @keyframes _pulse1 { 0%{r:28;opacity:0.5} 100%{r:62;opacity:0} }
          @keyframes _pulse2 { 0%{r:20;opacity:0.4} 100%{r:54;opacity:0} }
          @keyframes _checkDraw {
            0%{stroke-dashoffset:40}
            60%{stroke-dashoffset:0}
            100%{stroke-dashoffset:0}
          }
          ._p1 { animation: _pulse1 2s ease-out infinite; }
          ._p2 { animation: _pulse2 2s ease-out infinite 0.4s; }
          ._chk { stroke-dasharray:40; animation: _checkDraw 2s ease-out infinite; }
        `}</style>
        <circle className="_p1" cx="70" cy="70" r="28" fill={accent} opacity="0.5"/>
        <circle className="_p2" cx="70" cy="70" r="20" fill={accent} opacity="0.4"/>
        <circle cx="70" cy="70" r="24" fill={accent} opacity="0.9"/>
        <polyline
          className="_chk"
          points="56,70 65,79 84,60"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span style={{ color: `${accent}80`, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 8 }}>
        &lt; 5s settlement
      </span>
    </div>
  );
}

/** Card 6 — Tokens: big gold +WPGP */
function VisualTokens({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <span
        style={{
          fontSize: "clamp(48px, 12vw, 96px)",
          fontWeight: 900,
          fontFamily: "JetBrains Mono, monospace",
          background: `linear-gradient(135deg, ${accent}, #F59E0B)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: 0.75,
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
        aria-hidden="true"
      >
        +WPGP
      </span>
      <span style={{ color: `${accent}80`, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 12 }}>
        tokens earned every sale
      </span>
    </div>
  );
}

/* ─── Card definitions ─── */
const CARDS = [
  {
    id: 1,
    tag: "WooCommerce",
    title: "Live in 15 minutes.",
    body: "Install the plugin and start accepting crypto. WordPress powers 43% of the web.",
    bgDark:  "linear-gradient(160deg, #061520 0%, #0A2030 100%)",
    bgLight: "linear-gradient(160deg, #E0F7FA 0%, #B2EBF2 100%)",
    accent: "#06B6D4",
    Visual: Visual15m,
  },
  {
    id: 2,
    tag: "Shopify",
    title: "4.4 million stores, one integration.",
    body: "Native app. One-click setup. Payments land in your wallet, not Shopify's.",
    bgDark:  "linear-gradient(160deg, #061A10 0%, #0A2818 100%)",
    bgLight: "linear-gradient(160deg, #E0F2EE 0%, #B2DFDB 100%)",
    accent: "#22D3EE",
    Visual: VisualShopifyCounter,
  },
  {
    id: 3,
    tag: "Point of Sale",
    title: "QR. Tap. Done.",
    body: "Accept in-person payments on any phone or tablet. No card reader needed.",
    bgDark:  "linear-gradient(160deg, #12062A 0%, #1C0A3A 100%)",
    bgLight: "linear-gradient(160deg, #EDE7F6 0%, #D1C4E9 100%)",
    accent: "#A78BF6",
    Visual: VisualQR,
  },
  {
    id: 4,
    tag: "Developer SDK",
    title: "Any stack. Any language.",
    body: "TypeScript, Python, PHP, Ruby, Go. The ABI is public. No approval needed.",
    bgDark:  "linear-gradient(160deg, #060E20 0%, #0A1830 100%)",
    bgLight: "linear-gradient(160deg, #E3F2FD 0%, #BBDEFB 100%)",
    accent: "#38BDF8",
    Visual: VisualSDKLangs,
  },
  {
    id: 5,
    tag: "Settlement",
    title: "Funds arrive in seconds.",
    body: "Under 5 seconds to your wallet. No holding periods. No rolling reserves.",
    bgDark:  "linear-gradient(160deg, #061A14 0%, #0A2A1C 100%)",
    bgLight: "linear-gradient(160deg, #E8F5E9 0%, #C8E6C9 100%)",
    accent: "#34D399",
    Visual: VisualPulse,
  },
  {
    id: 6,
    tag: "Token Rewards",
    title: "Get paid to accept payments.",
    body: "Earn WPGP tokens on every transaction. Your effective fee shrinks as the token grows.",
    bgDark:  "linear-gradient(160deg, #1A1006 0%, #28180A 100%)",
    bgLight: "linear-gradient(160deg, #FFF8E1 0%, #FFECB3 100%)",
    accent: "#D4A853",
    Visual: VisualTokens,
  },
];

const N        = CARDS.length;
const STEP_VH  = 100;
const TOTAL_VH = 100 + STEP_VH * (N - 1);
const PEEK_PX  = 44;
const EASE     = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

export default function ForMerchants() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);

  // Track theme so cards swap bg/text colors
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tick = () => {
      const rect      = section.getBoundingClientRect();
      const maxScroll = section.offsetHeight - window.innerHeight;
      const raw       = Math.max(0, Math.min(1, -rect.top / maxScroll));
      const stepFloat = raw * (N - 1);
      const stepIndex = Math.floor(stepFloat);
      const stepP     = EASE(stepFloat - stepIndex);

      // Heading fades out as scroll begins
      if (headingRef.current) {
        const ho = Math.max(0, 1 - raw * 5);
        headingRef.current.style.opacity   = String(ho);
        headingRef.current.style.transform = `translateY(${-raw * 20}px)`;
      }

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        if (i < stepIndex) {
          // Buried — already pushed up by all completed steps + current in-progress
          const depth     = stepIndex - i;
          const restY     = depth * PEEK_PX + stepP * PEEK_PX;
          const scaleBack = Math.max(0.84, 1 - (depth + stepP) * 0.03);
          card.style.transform = `translateY(-${restY}px) scale(${scaleBack})`;
          card.style.zIndex    = String(i + 1);
          card.style.opacity   = depth > 3 ? "0" : "1";

        } else if (i === stepIndex) {
          // Top card — being pushed up in real-time
          const pushY     = stepP * PEEK_PX;
          const scaleBack = 1 - stepP * 0.03;
          card.style.transform = `translateY(-${pushY}px) scale(${scaleBack})`;
          card.style.zIndex    = String(i + 1);
          card.style.opacity   = "1";

        } else if (i === stepIndex + 1) {
          // Incoming card — slides up from 100% below
          const yPct = (1 - stepP) * 100;
          card.style.transform = `translateY(${yPct}%)`;
          card.style.zIndex    = String(i + 2);
          card.style.opacity   = "1";

        } else {
          // Not yet reached
          card.style.transform = `translateY(100%)`;
          card.style.zIndex    = String(i + 1);
          card.style.opacity   = "0";
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="merchants"
      style={{ height: `${TOTAL_VH}vh` }}
      aria-labelledby="merchants-heading"
    >
      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(6,182,212,0.06), transparent 65%)" }}
        />

        {/* Heading */}
        <div
          ref={headingRef}
          className="absolute top-0 left-0 right-0 z-30 pt-10 text-center pointer-events-none"
        >
          <p className="section-label">For Merchants</p>
          <h2
            id="merchants-heading"
            className="text-3xl md:text-4xl font-black"
            style={{ color: "var(--text-primary)" }}
          >
            Built for{" "}
            <span className="text-gradient-teal">every business</span>
          </h2>
        </div>

        {/* Card stack */}
        <div
          className="relative"
          style={{ width: "min(520px, 88vw)", height: "min(620px, 74vh)" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{
                borderRadius: 24,
                overflow: "hidden",
                background: isLight ? card.bgLight : card.bgDark,
                transform: i === 0 ? "translateY(0) scale(1)" : "translateY(100%)",
                zIndex: i + 1,
                willChange: "transform",
                boxShadow: isLight
                  ? "0 24px 60px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8) inset"
                  : "0 24px 60px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.05) inset",
              }}
              aria-label={card.title}
            >
              <div
                className="flex flex-col"
                style={{ height: "100%", padding: "36px 36px 28px" }}
              >
                {/* ── TOP: text ── */}
                <div style={{ flex: "0 0 auto" }}>
                  {/* Tag */}
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
                    style={{
                      color: card.accent,
                      backgroundColor: `${card.accent}${isLight ? "25" : "18"}`,
                      border: `1px solid ${card.accent}${isLight ? "55" : "35"}`,
                    }}
                  >
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-black leading-tight mb-3"
                    style={{
                      fontSize: "clamp(20px, 3.5vw, 28px)",
                      color: isLight ? "#0F172A" : "#ffffff",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Body */}
                  <p
                    style={{
                      fontSize: "clamp(13px, 1.8vw, 15px)",
                      color: isLight ? "rgba(15,23,42,0.62)" : "rgba(255,255,255,0.55)",
                      lineHeight: 1.65,
                    }}
                  >
                    {card.body}
                  </p>
                </div>

                {/* ── BOTTOM: creative visual ── */}
                <card.Visual accent={card.accent} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
