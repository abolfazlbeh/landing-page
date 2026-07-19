"use client";

import { Fuel, Globe, Zap, Coins, Unlock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/*
 * Act 5 — "Why It Feels Different" (Bento Grid)
 * All card backgrounds use CSS variables defined in globals.css so they
 * adapt correctly between dark and light themes.
 */

export default function PersonalFeaturesBento() {
  return (
    <section
      id="features"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      aria-labelledby="features-heading"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[600px] rounded-full bg-gold-warm/6 blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-honey/4 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <AnimateOnScroll className="mb-12">
          <p className="section-label" style={{ color: "var(--gold)" }}>Why it feels different</p>
          <h2 id="features-heading" className="text-3xl md:text-5xl font-black text-snow leading-tight mt-2 max-w-xl">
            Built for people,{" "}
            <span style={{ color: "var(--gold)" }}>not wallets.</span>
          </h2>
        </AnimateOnScroll>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ── 1. GAS — col-span-2, green ── */}
          <AnimateOnScroll delay={0.00} className="md:col-span-2">
            <div
              className="relative overflow-hidden rounded-2xl p-8 min-h-[280px] md:min-h-[320px] flex flex-col justify-between group cursor-default transition-all duration-400"
              style={{
                background: "var(--bento-gas-bg)",
                border:     "1px solid var(--bento-gas-border)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(52,211,153,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bento-gas-border)"; }}
            >
              <div className="absolute -right-8 -bottom-8 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500" aria-hidden="true">
                <Fuel size={200} strokeWidth={1} className="text-mint" />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mint/8 blur-[80px] pointer-events-none" aria-hidden="true" />

              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.25)", color: "#059669" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" style={{ backgroundColor: "#059669" }} />
                  Zero gas
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-snow leading-[1.0] tracking-tight mb-3">
                  Never pay<br />to pay.
                </h3>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--bento-text-body)" }}>
                  Gas fees are covered by PayPax. You only need USDC or USDT — no ETH for gas, no second coin sitting in your wallet just in case.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── 2. CUSTODY — col-span-1, near-black / white ── */}
          <AnimateOnScroll delay={0.07} className="md:col-span-1">
            <div
              className="relative overflow-hidden rounded-2xl p-8 min-h-[280px] md:min-h-[320px] flex flex-col justify-between group cursor-default transition-all duration-400"
              style={{
                background: "var(--bento-custody-bg)",
                border:     "1px solid rgba(var(--gold-rgb),0.14)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(var(--gold-rgb),0.32)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(var(--gold-rgb),0.14)"; }}
            >
              {/* Background photo */}
              <img
                src="/images/personal/bento-custody.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 gap-3 z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>Self-custody</span>
                <h3 className="text-3xl font-black text-snow leading-tight">Your keys.<br />Your money.</h3>
                <p className="text-sm leading-relaxed max-w-[200px]" style={{ color: "var(--bento-text-small)" }}>No one can freeze, pause, or touch your balance.</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── 3. CHAIN — col-span-1, blue ── */}
          <AnimateOnScroll delay={0.12} className="md:col-span-1">
            <div
              className="relative overflow-hidden rounded-2xl p-8 min-h-[240px] flex flex-col justify-between group cursor-default transition-all duration-400"
              style={{
                background: "var(--bento-chain-bg)",
                border:     "1px solid var(--bento-chain-border)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,130,220,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bento-chain-border)"; }}
            >
              {/* Background photo */}
              <img
                src="/images/personal/bento-chain.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500"
              />
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-35 transition-opacity duration-500" aria-hidden="true">
                <Globe size={90} strokeWidth={0.8} style={{ color: "#6382DC" }} />
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none"
                style={{ background: "rgba(99,130,220,0.10)" }} aria-hidden="true" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 gap-3 z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#4F6DC8" }}>Multi-chain</span>
                <h3 className="text-3xl font-black text-snow leading-tight">One wallet,<br />every chain.</h3>
                <p className="text-sm leading-relaxed max-w-[200px]" style={{ color: "var(--bento-text-body)" }}>
                  Base, BNB Chain, Polygon. Same wallet, same experience.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── 4. TAP — col-span-1, rose/pink ── */}
          <AnimateOnScroll delay={0.17} className="md:col-span-1">
            <div
              className="relative overflow-hidden rounded-2xl p-8 min-h-[240px] flex flex-col justify-between group cursor-default transition-all duration-400"
              style={{
                background: "var(--bento-tap-bg)",
                border:     "1px solid var(--bento-tap-border)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(236,72,153,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bento-tap-border)"; }}
            >
              <div className="absolute -top-4 -right-3 font-black font-mono leading-none select-none pointer-events-none opacity-[0.10] group-hover:opacity-[0.18] transition-opacity duration-500"
                style={{ fontSize: "clamp(100px,18vw,160px)", color: "#EC4899" }} aria-hidden="true">
                5s
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[70px] pointer-events-none"
                style={{ background: "rgba(236,72,153,0.10)" }} aria-hidden="true" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(236,72,153,0.12)", border: "1px solid rgba(236,72,153,0.25)" }}>
                  <Zap size={15} style={{ color: "#EC4899" }} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#C2185B" }}>One tap</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-snow leading-tight mb-1.5">Faster than<br />tapping a card.</h3>
                <p className="text-xs" style={{ color: "var(--bento-text-small)" }}>Scan, approve, settled. No loading spinner.</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── 5. REWARDS — col-span-1, amber ── */}
          <AnimateOnScroll delay={0.22} className="md:col-span-1">
            <div
              className="relative overflow-hidden rounded-2xl p-8 min-h-[240px] flex flex-col justify-between group cursor-default transition-all duration-400"
              style={{
                background: "var(--bento-rewards-bg)",
                border:     "1px solid rgba(var(--gold-rgb),0.18)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(var(--gold-rgb),0.40)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(var(--gold-rgb),0.18)"; }}
            >
              <div className="absolute top-0 right-0 w-36 h-36 rounded-full blur-[50px] pointer-events-none"
                style={{ background: "rgba(var(--gold-rgb),0.22)" }} aria-hidden="true" />

              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(var(--gold-rgb),0.15)", border: "1px solid rgba(var(--gold-rgb),0.30)" }}>
                  <Coins size={22} className="text-gold-warm" aria-hidden="true" />
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-2" style={{ color: "var(--gold)" }}>Token rewards</span>
                <h3 className="text-2xl font-black leading-tight mb-1.5" style={{ color: "var(--gold)" }}>Every payment<br />pays you back.</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--bento-text-body)" }}>
                  WPGP rewards arrive silently after every transaction. Spend at a café, earn a little back.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── 6. OPEN — col-span-3, purple ── */}
          <AnimateOnScroll delay={0.28} className="md:col-span-3">
            <div
              className="relative overflow-hidden rounded-2xl p-8 md:p-10 min-h-[160px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group cursor-default transition-all duration-400"
              style={{
                background: "var(--bento-open-bg)",
                border:     "1px solid var(--bento-open-border)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(109,40,217,0.30)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bento-open-border)"; }}
            >
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(109,40,217,0.07), transparent 65%)" }} aria-hidden="true" />

              <div className="relative z-10 flex items-center gap-4 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(109,40,217,0.14)", border: "1px solid rgba(109,40,217,0.28)" }}>
                  <Unlock size={22} style={{ color: "#7C3AED" }} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>Open network</span>
              </div>

              <h3 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-black text-snow leading-tight flex-1 md:text-center">
                Pay any PayPax merchant,{" "}
                <span style={{ color: "#7C3AED" }}>anywhere.</span>
              </h3>

              <p className="relative z-10 text-sm leading-relaxed max-w-xs md:text-right flex-shrink-0" style={{ color: "var(--bento-text-body)" }}>
                The protocol is open. No integration needed on your side — if they run PayPax, you can pay.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
