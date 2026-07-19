"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   Act 3 — "The Tap"
   Scroll-scrubbed payment. Every visual is a pure function of t.

   Beat map:
     0.00 – 0.17   SCAN       QR on screen, gold laser sweeps down
     0.17 – 0.34   LIFT       phone tilts from flat to upright
     0.34 – 0.50   RECOGNISE  merchant info blooms, NFC ripple
     0.50 – 0.67   HOLD       gold arc sweeps 0→360° (direct scrub)
     0.67 – 0.83   SETTLE     particles converge to checkmark center
     0.83 – 1.00   CONFIRMED  checkmark, receipt chip, reward chip
─────────────────────────────────────────────────────────────────── */

const SECTION_VH = 600;

const EASE    = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const lerp    = (a: number, b: number, t: number) => a + (b - a) * t;

const N_PARTICLES = 72;
const PARTICLES = Array.from({ length: N_PARTICLES }, (_, i) => {
  const angle  = (i / N_PARTICLES) * Math.PI * 2;
  const radius = 180 + ((i * 37) % 80);
  return {
    ox:    Math.cos(angle) * radius,
    oy:    Math.sin(angle) * radius,
    size:  2 + (i % 3),
    delay: (i % 5) * 0.04,
  };
});

export default function TapToPay() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const phoneRef     = useRef<HTMLDivElement>(null);

  /* SCAN beat */
  const qrScreenRef  = useRef<HTMLDivElement>(null);
  const laserRef     = useRef<HTMLDivElement>(null);
  const scanLabelRef = useRef<HTMLDivElement>(null);

  /* RECOGNISE beat */
  const screenRef    = useRef<HTMLDivElement>(null);
  const rippleRef    = useRef<HTMLDivElement>(null);

  /* HOLD beat */
  const arcRef       = useRef<SVGCircleElement>(null);
  const arcSvgRef    = useRef<SVGSVGElement>(null);

  /* SETTLE beat */
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* CONFIRMED beat */
  const checkRef     = useRef<HTMLDivElement>(null);
  const receiptRef   = useRef<HTMLDivElement>(null);
  const rewardRef    = useRef<HTMLDivElement>(null);

  /* Copy */
  const entryRef     = useRef<HTMLParagraphElement>(null);
  const exitRef      = useRef<HTMLParagraphElement>(null);

  const rafRef = useRef<number>(0);
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) { setStaticMode(true); return; }

    const section = sectionRef.current;
    if (!section) return;

    const ARC_CIRC = arcRef.current
      ? 2 * Math.PI * parseFloat(arcRef.current.getAttribute("r") ?? "54")
      : 339.3;

    const tick = () => {
      const rect      = section.getBoundingClientRect();
      const maxScroll = section.offsetHeight - window.innerHeight;
      const t         = clamp01(-rect.top / maxScroll);

      /* ── SCAN  (0.00 → 0.17) ── */
      const scanP = EASE(clamp01(t / 0.17));

      /* QR screen fades in at start, fades out as LIFT begins */
      const qrVisible = t < 0.17 ? scanP : Math.max(0, 1 - EASE(clamp01((t - 0.17) / 0.08)));
      if (qrScreenRef.current) {
        qrScreenRef.current.style.opacity = String(qrVisible);
      }

      /* Laser line sweeps top → bottom of QR area (scrubbed 1:1) */
      if (laserRef.current) {
        /* 0% = top of QR box, 100% = bottom; scanP drives it */
        laserRef.current.style.top    = `${scanP * 100}%`;
        laserRef.current.style.opacity = String(qrVisible * 0.9);
      }

      /* "Scanning…" label under phone */
      if (scanLabelRef.current) {
        scanLabelRef.current.style.opacity = String(qrVisible * 0.7);
      }

      /* ── LIFT  (0.17 → 0.34) ── */
      const liftP = EASE(clamp01((t - 0.17) / 0.17));
      if (phoneRef.current) {
        const rotX = lerp(30, 0, liftP);
        const ty   = lerp(40, 0, liftP);
        phoneRef.current.style.transform =
          `perspective(900px) rotateX(${rotX}deg) translateY(${ty}px)`;
        /* During SCAN phase keep phone slightly tilted; full opacity from LIFT start */
        const baseOp = t < 0.17 ? 0.55 : lerp(0.55, 1, liftP);
        phoneRef.current.style.opacity = String(baseOp);
      }

      /* ── RECOGNISE  (0.34 → 0.50) ── */
      const recP = EASE(clamp01((t - 0.34) / 0.16));
      if (screenRef.current) {
        screenRef.current.style.opacity   = String(recP);
        screenRef.current.style.transform = `scale(${lerp(0.92, 1, recP)})`;
      }
      if (rippleRef.current) {
        const rScale = 1 + recP * 2.2;
        const rOp    = recP < 0.5
          ? recP * 2
          : Math.max(0, 1 - (recP - 0.5) * 2);
        rippleRef.current.style.transform = `translate(-50%, -50%) scale(${rScale})`;
        rippleRef.current.style.opacity   = String(rOp * 0.7);
      }

      /* ── HOLD  (0.50 → 0.67) — direct 1:1 scrub, no ease ── */
      const holdP = clamp01((t - 0.50) / 0.17);
      if (arcRef.current) {
        arcRef.current.style.strokeDashoffset = String(ARC_CIRC * (1 - holdP));
      }
      if (arcSvgRef.current) {
        const showArc = holdP > 0 && t < 0.67;
        const fadeOut = EASE(clamp01((t - 0.67) / 0.06));
        arcSvgRef.current.style.opacity = showArc
          ? "1"
          : holdP === 0 ? "0" : String(1 - fadeOut);
      }

      /* ── SETTLE  (0.67 → 0.83) ── */
      const settleP = EASE(clamp01((t - 0.67) / 0.16));
      PARTICLES.forEach((p, i) => {
        const el = particleRefs.current[i];
        if (!el) return;
        const localT = clamp01((settleP - p.delay) / (1 - p.delay));
        const eT     = EASE(localT);
        const op     = localT < 0.8
          ? Math.min(1, localT * 1.5)
          : Math.max(0, 1 - (localT - 0.8) * 5);
        el.style.transform = `translate(calc(-50% + ${lerp(p.ox, 0, eT)}px), calc(-50% + ${lerp(p.oy, 0, eT)}px))`;
        el.style.opacity   = String(op);
      });

      /* ── CONFIRMED  (0.83 → 1.00) ── */
      const confP = EASE(clamp01((t - 0.83) / 0.17));
      if (checkRef.current) {
        checkRef.current.style.opacity   = String(confP);
        checkRef.current.style.transform = `translate(-50%, -50%) scale(${lerp(0.6, 1, confP)})`;
      }
      if (receiptRef.current) {
        const rp = EASE(clamp01((t - 0.86) / 0.14));
        receiptRef.current.style.opacity   = String(rp);
        receiptRef.current.style.transform = `translateX(-50%) translateY(${lerp(24, 0, rp)}px)`;
      }
      if (rewardRef.current) {
        const rwp = EASE(clamp01((t - 0.89) / 0.11));
        rewardRef.current.style.opacity   = String(rwp);
        rewardRef.current.style.transform = `translateY(${lerp(16, 0, rwp)}px) translateX(${lerp(10, 0, rwp)}px)`;
      }

      /* ── Copy cues ── */
      if (entryRef.current) {
        entryRef.current.style.opacity = String(Math.max(0, 1 - t / 0.10));
      }
      if (exitRef.current) {
        exitRef.current.style.opacity = String(EASE(clamp01((t - 0.88) / 0.08)));
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── Reduced-motion / touch ── */
  if (staticMode) {
    return (
      <section id="tap-to-pay" className="section-padding" aria-label="How paying works">
        <div className="container-narrow">
          <p className="section-label" style={{ color: "var(--gold)" }}>The payment</p>
          <h2 className="text-3xl md:text-5xl font-black text-theme-primary mb-16 leading-tight">
            Scan. Tap. <span style={{ color: "var(--gold)" }}>Rewarded.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "01", title: "Scan the QR", body: "Point your camera at the merchant's QR code. Amount and merchant name load instantly — no app-switching." },
              { n: "02", title: "Phone tilts up", body: "PayPax Wallet opens the payment request. Merchant and amount verified on-chain before you touch anything." },
              { n: "03", title: "One tap to confirm", body: "Approve in PayPax Wallet. Smart contract verifies and settles in under 5 seconds. Zero gas from you." },
              { n: "04", title: "Paid. Plus you earned.", body: "Funds reach the merchant directly. A WPGP token reward lands silently in your wallet." },
            ].map((f) => (
              <div key={f.n} className="card relative overflow-hidden">
                <span className="absolute top-4 right-6 text-7xl font-black select-none"
                  style={{ color: "var(--border-strong)" }} aria-hidden="true">{f.n}</span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center"
                    style={{ background: "rgba(var(--gold-rgb),0.12)", border: "1px solid rgba(var(--gold-rgb),0.25)" }}>
                    <span className="text-gold-warm font-black text-sm">{f.n}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-theme-primary mb-2">{f.title}</h3>
                  <p className="text-silver-mist text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-black text-theme-primary mt-16">
            That&apos;s it. <span style={{ color: "var(--gold)" }}>You just paid.</span>
          </p>
        </div>
      </section>
    );
  }

  /* ── Interactive ── */
  return (
    <section
      ref={sectionRef}
      id="tap-to-pay"
      style={{ height: `${SECTION_VH}vh` }}
      aria-label="The payment experience"
    >
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-warm/8 blur-[160px] pointer-events-none" aria-hidden="true" />

        {/* ── Phone rig ── */}
        <div
          ref={phoneRef}
          className="relative will-change-transform"
          style={{ transform: "perspective(900px) rotateX(30deg) translateY(40px)", opacity: 0.55, width: "320px", zIndex: 3 }}
        >
          {/* Phone shell */}
          <div
            className="relative rounded-[2.2rem] overflow-visible"
            style={{
              background:    "var(--bg-elevated)",
              border:        "1px solid rgba(var(--gold-rgb),0.20)",
              boxShadow:     "0 32px 80px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(var(--gold-rgb),0.08)",
              paddingBottom: "calc(100% * 17 / 9)",
            }}
          >
            {/* ── SCAN screen — QR code ── */}
            <div
              ref={qrScreenRef}
              className="absolute inset-3 rounded-[1.6rem] overflow-hidden flex flex-col items-center justify-center gap-4 px-6"
              style={{ background: "var(--bg-tertiary)", opacity: 0 }}
            >
              <p className="text-pewter text-[10px] uppercase tracking-widest">Scan to pay</p>

              {/* QR code — SVG grid approximation */}
              <div className="relative" style={{ width: "120px", height: "120px" }}>
                <svg viewBox="0 0 120 120" width="120" height="120" aria-label="QR code placeholder">
                  {/* Outer border squares */}
                  <rect x="4"  y="4"  width="32" height="32" rx="3" fill="none" stroke="var(--gold)" strokeWidth="3" />
                  <rect x="84" y="4"  width="32" height="32" rx="3" fill="none" stroke="var(--gold)" strokeWidth="3" />
                  <rect x="4"  y="84" width="32" height="32" rx="3" fill="none" stroke="var(--gold)" strokeWidth="3" />
                  {/* Inner fill squares */}
                  <rect x="12" y="12" width="16" height="16" rx="1" fill="var(--gold)" opacity="0.9" />
                  <rect x="92" y="12" width="16" height="16" rx="1" fill="var(--gold)" opacity="0.9" />
                  <rect x="12" y="92" width="16" height="16" rx="1" fill="var(--gold)" opacity="0.9" />
                  {/* Data dots — deterministic pattern */}
                  {[
                    [44,4],[52,4],[60,4],[68,4],[44,12],[60,12],[44,20],[52,20],[68,20],
                    [44,28],[52,28],[60,28],[44,36],[68,36],[4,44],[12,44],[28,44],
                    [44,44],[60,44],[68,44],[76,44],[84,44],[4,52],[28,52],[44,52],
                    [60,52],[76,52],[92,52],[108,52],[4,60],[12,60],[20,60],[44,60],
                    [52,60],[76,60],[84,60],[100,60],[4,68],[20,68],[36,68],[52,68],
                    [68,68],[84,68],[100,68],[44,76],[60,76],[68,76],[76,76],[92,76],
                    [44,84],[52,92],[60,84],[68,92],[76,84],[92,84],[100,84],[108,84],
                    [44,100],[60,100],[76,100],[92,100],[44,108],[52,108],[68,108],
                  ].map(([x, y], i) => (
                    <rect key={i} x={x} y={y} width="6" height="6" rx="1"
                      fill="var(--gold)" opacity={0.55 + (i % 4) * 0.1} />
                  ))}
                </svg>

                {/* Laser line — sweeps top → bottom */}
                <div
                  ref={laserRef}
                  className="absolute left-0 right-0 h-[2px] pointer-events-none"
                  style={{
                    top:       "0%",
                    opacity:   0,
                    background: "linear-gradient(90deg, transparent, var(--gold), var(--gold), transparent)",
                    boxShadow:  "0 0 8px rgba(var(--gold-rgb),0.9), 0 0 20px rgba(var(--gold-rgb),0.4)",
                  }}
                  aria-hidden="true"
                />
              </div>

              <p className="text-gold-warm text-[10px] font-semibold tracking-widest">Café Noma · $24.50 USDC</p>
            </div>

            {/* ── RECOGNISE screen — merchant + confirm ── */}
            <div
              ref={screenRef}
              className="absolute inset-3 rounded-[1.6rem] overflow-hidden flex flex-col items-center justify-center gap-3 px-5"
              style={{ background: "var(--bg-tertiary)", opacity: 0 }}
            >
              <div className="text-center">
                <p className="text-pewter text-[10px] uppercase tracking-widest mb-1">Payment to</p>
                <p className="text-theme-primary font-bold text-sm">Café Noma</p>
              </div>
              <div className="rounded-xl px-5 py-3 text-center"
                style={{ background: "rgba(var(--gold-rgb),0.10)", border: "1px solid rgba(var(--gold-rgb),0.20)" }}>
                <p className="text-2xl font-black font-mono text-theme-primary">$24.50</p>
                <p className="text-[10px] text-pewter mt-0.5">USDC · Base</p>
              </div>
              <div className="w-full text-center text-xs font-bold py-2.5 rounded-xl text-abyss"
                style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))" }}>
                Confirm payment
              </div>
            </div>

            {/* NFC ripple */}
            <div
              ref={rippleRef}
              className="absolute w-16 h-16 rounded-full pointer-events-none"
              style={{
                top: "-8px", left: "50%",
                transform: "translate(-50%, -50%) scale(1)", opacity: 0,
                background: "radial-gradient(circle, rgba(var(--gold-rgb),0.6) 0%, transparent 70%)",
                border: "1.5px solid rgba(var(--gold-rgb),0.5)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* "Scanning…" label */}
        <div
          ref={scanLabelRef}
          className="mt-4 flex items-center gap-2 pointer-events-none"
          style={{ opacity: 0, zIndex: 3 }}
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-warm animate-pulse" />
          <span className="text-gold-warm text-xs font-semibold uppercase tracking-widest">Scanning QR</span>
        </div>

        {/* ── Arc ring (HOLD) ── */}
        <svg
          ref={arcSvgRef}
          className="absolute pointer-events-none"
          style={{ opacity: 0, zIndex: 5 }}
          width="180" height="180" viewBox="0 0 180 180"
          aria-hidden="true"
        >
          <circle cx="90" cy="90" r="54" fill="none" stroke="rgba(var(--gold-rgb),0.12)" strokeWidth="3" />
          <circle
            ref={arcRef}
            cx="90" cy="90" r="54" fill="none"
            stroke="var(--gold)" strokeWidth="3" strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 54}`}
            strokeDashoffset={`${2 * Math.PI * 54}`}
            transform="rotate(-90 90 90)"
            style={{ filter: "drop-shadow(0 0 6px rgba(var(--gold-rgb),0.8))" }}
          />
        </svg>

        {/* ── Particle field (SETTLE) ── */}
        <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{ zIndex: 4 }} aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <div key={i} ref={(el) => { particleRefs.current[i] = el; }}
              className="absolute rounded-full will-change-transform"
              style={{
                width: `${p.size}px`, height: `${p.size}px`,
                background: "var(--gold)", boxShadow: "0 0 4px rgba(var(--gold-rgb),0.8)",
                opacity: 0, top: "0", left: "0",
                transform: `translate(calc(-50% + ${p.ox}px), calc(-50% + ${p.oy}px))`,
              }}
            />
          ))}
        </div>

        {/* ── Checkmark (CONFIRMED) ── */}
        <div ref={checkRef} className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{ transform: "translate(-50%,-50%) scale(0.6)", opacity: 0, zIndex: 6, width: "72px", height: "72px" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="34" fill="rgba(var(--gold-rgb),0.15)" stroke="var(--gold)" strokeWidth="2" />
            <path d="M20 36 L31 47 L52 25" stroke="var(--gold)" strokeWidth="3.5"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 8px rgba(var(--gold-rgb),0.9))" }} />
          </svg>
        </div>

        {/* ── Receipt chip ── */}
        <div ref={receiptRef} className="absolute chip-overlay rounded-2xl px-6 py-4 pointer-events-none"
          style={{ bottom: "18%", left: "50%", transform: "translateX(-50%) translateY(24px)", opacity: 0, zIndex: 7, minWidth: "220px", textAlign: "center" }}
          aria-hidden="true"
        >
          <p className="text-pewter text-[10px] uppercase tracking-widest mb-1">Payment confirmed</p>
          <p className="text-theme-primary font-black font-mono text-2xl">$24.50</p>
          <p className="text-mint text-xs mt-1">✓ Settled · 2s · Base</p>
        </div>

        {/* ── WPGP reward chip ── */}
        <div ref={rewardRef} className="absolute chip-overlay rounded-full px-4 py-2 pointer-events-none flex items-center gap-2"
          style={{ top: "28%", right: "calc(50% - 160px)", opacity: 0, zIndex: 7, transform: "translateY(16px) translateX(10px)" }}
          aria-hidden="true"
        >
          <span className="text-lg">✦</span>
          <div>
            <p className="text-[10px] text-pewter leading-none mb-0.5">Earned</p>
            <p className="text-sm font-black font-mono text-gold-warm">+2.5 WPGP</p>
          </div>
        </div>

        {/* ── Copy cues ── */}
        <p ref={entryRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-pewter tracking-widest uppercase pointer-events-none"
          style={{ zIndex: 8 }} aria-hidden="true">
          Scroll to pay.
        </p>
        <p ref={exitRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-black text-xl md:text-3xl tracking-tight pointer-events-none whitespace-nowrap"
          style={{ zIndex: 8, opacity: 0, color: "var(--text-primary)" }} aria-hidden="true">
          That&apos;s it.{" "}
          <span style={{ color: "var(--gold)" }}>You just paid.</span>
        </p>

      </div>
    </section>
  );
}
