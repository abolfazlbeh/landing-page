"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import HeroToggle from "@/components/ui/HeroToggle";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

/* ── 3-layer parallax speeds ───────────────────────────────────────
   Layer 0 — background glow    0.2x  (farthest, slowest)
   Layer 1 — phone card         0.5x  (mid-depth)
   Layer 2 — "Paid" badge       0.8x  (closest, fastest)
────────────────────────────────────────────────────────────────── */
const SPEEDS = [0.2, 0.5, 0.8] as const;

export default function HeroPersonal() {
  const layerRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tick = () => {
      const y = window.scrollY;
      layerRefs.forEach((ref, i) => {
        if (ref.current)
          ref.current.style.transform = `translateY(${y * SPEEDS[i]}px)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero — Personal"
    >

      {/* ── Layer 0: ambient glow (0.2x) ─────────────────────── */}
      <div
        ref={layerRefs[0]}
        className="absolute inset-0 pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gold-warm/10 blur-[180px]" />
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-[88px]">

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <HeroToggle />
        </motion.div>

        {/* Headline — one thought, full weight */}
        <h1
          className="text-[52px] leading-[60px] md:text-[80px] md:leading-[88px] lg:text-[96px] lg:leading-[104px] font-black text-snow tracking-tight max-w-3xl"
          aria-label="Pay anywhere. Feel nothing."
        >
          <div className="overflow-hidden">
            {"Pay anywhere.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.2em]"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%",   opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="overflow-hidden">
            {"Feel nothing.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.2em] text-gradient-gold"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%",   opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a href="#" className="btn-premium text-base">
            <Download size={17} aria-hidden="true" />
            Download PayPax Wallet
          </a>
        </motion.div>

        {/* ── Layer 1: phone card (0.5x) ── */}
        <div
          ref={layerRefs[1]}
          className="relative mt-16 will-change-transform"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card shell — phone-card proportion */}
            <div
              className="relative w-[300px] md:w-[360px] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
              style={{
                border: "1px solid rgba(var(--gold-rgb),0.18)",
                background: "var(--bg-elevated)",
              }}
            >
              {/* Gold accent hairline */}
              <div
                className="absolute top-0 inset-x-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
              />

              <PhotoPlaceholder
                hint="Person holding a phone at a café checkout, screen glowing with a confirmed payment. Warm light, candid. Portrait 9:16 — 360×640px WebP."
                className="w-full !rounded-none border-0"
                aspectRatio="aspect-[9/16]"
              />
            </div>

            {/* Gold bloom behind card */}
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] blur-[80px] scale-90"
              style={{ background: "rgba(var(--gold-rgb),0.14)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Layer 2: floating "Paid" badge (0.8x) ─────────────── */}
      <div
        ref={layerRefs[2]}
        className="absolute bottom-[18%] left-1/2 z-20 pointer-events-none will-change-transform"
        style={{ transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1,   y: 0   }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-abyss font-bold text-sm shadow-glow-gold whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))" }}
          >
            <span className="w-2 h-2 rounded-full bg-abyss/40" aria-hidden="true" />
            Paid · 3s · $0 gas
          </div>
        </motion.div>
      </div>

    </section>
  );
}
