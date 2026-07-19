"use client";

import { useEffect, useRef } from "react";

/*
 * Act 4 — "Made for Real Life"
 * Full-bleed cinematic statement break.
 *
 * Effects:
 *   - Parallax: bg layer scrolls at 0.4x, text at 1x (native)
 *   - Ken Burns: bg scales 1.0 → 1.08 + drifts slightly as section scrolls
 *   - Scrim reveal: text rises + fades in once section crosses 30% viewport
 *
 * To swap in a real photo, replace the `background` on `.sb-bg` with:
 *   backgroundImage: "url('/images/personal/statement.webp')"
 *   backgroundSize: "cover"
 *   backgroundPosition: "center"
 * and remove the gradient / accent-overlay divs.
 */

export default function StatementBreak() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const textRef     = useRef<HTMLDivElement>(null);
  const rafRef      = useRef<number>(0);
  const revealedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const bg      = bgRef.current;
    const text    = textRef.current;
    if (!section || !bg || !text) return;

    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── Scrim / text reveal via IntersectionObserver ── */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.28 && !revealedRef.current) {
          revealedRef.current = true;
          text.style.opacity   = "1";
          text.style.transform = "translateY(0)";
        }
      },
      { threshold: [0, 0.28, 1] }
    );
    observer.observe(section);

    if (prefersReduce) return () => observer.disconnect();

    /* ── Parallax + Ken Burns via RAF ── */
    const tick = () => {
      const rect    = section.getBoundingClientRect();
      const vh      = window.innerHeight;
      /* progress: -1 (above viewport) → 0 (centered) → 1 (below) */
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
      const clamped  = Math.max(-1, Math.min(1, progress));

      /* Parallax — bg moves at 0.4× scroll speed relative to section */
      const bgY = clamped * rect.height * 0.18;     /* ≈ 0.4× of what 1x would be */
      /* Ken Burns — scale 1.0 → 1.08 as section scrolls through */
      const scale = 1 + Math.abs(clamped) * 0.08;
      /* Subtle horizontal drift — pan left as section scrolls up */
      const bgX = clamped * 12;

      bg.style.transform = `translate(${bgX}px, ${bgY}px) scale(${scale})`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="statement"
      data-theme="dark"
      className="relative overflow-hidden"
      style={{ minHeight: "85vh" }}
      aria-labelledby="statement-heading"
    >
      {/* ── Background layer (parallax + Ken Burns) ── */}
      <div
        ref={bgRef}
        className="absolute will-change-transform"
        style={{
          /* Oversized so Ken Burns + parallax never expose edges */
          inset:    "-10%",
          backgroundImage: "url('/images/personal/statement.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformOrigin: "center center",
        }}
        aria-hidden="true"
      />

      {/* ── Gold hairline top ── */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] z-10"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
        aria-hidden="true"
      />

      {/* ── Legibility scrim — darkens bottom ── */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to top, rgba(6,6,18,0.88) 0%, rgba(6,6,18,0.30) 55%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* ── Text layer (reveals on scroll entry) ── */}
      <div
        ref={textRef}
        className="relative z-20 flex flex-col justify-end h-full min-h-[85vh] px-8 md:px-16 lg:px-24 pb-16 md:pb-24"
        style={{
          opacity:    0,
          transform:  "translateY(24px)",
          transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <h2
          id="statement-heading"
          className="font-black text-snow leading-[1.05] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
        >
          Money should move{" "}
          <br className="hidden md:block" />
          as freely{" "}
          <span style={{ color: "var(--gold)" }}>as you do.</span>
        </h2>

        <p
          className="mt-5 max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(15px,1.4vw,19px)" }}
        >
          Across borders, chains, and coffee counters —{" "}
          <br className="hidden md:block" />
          your money keeps up.
        </p>
      </div>
    </section>
  );
}
