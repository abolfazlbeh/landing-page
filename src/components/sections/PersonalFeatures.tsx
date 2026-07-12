"use client";

import {
  Fuel,
  Key,
  Globe,
  Zap,
  Coins,
  Unlock,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import MagneticCard from "@/components/ui/MagneticCard";

/*
 * Act 5 — "Why It Feels Different"
 *
 * Six felt-benefit cards rendered as a sticky-left / scrolling-right layout,
 * matching the StickyFeaturePanel pattern but with gold accent throughout.
 * MagneticCard wraps each card for the perspective-tilt 3D beat.
 *
 * Rather than using StickyFeaturePanel directly (which is teal-accented),
 * we replicate its layout here with gold tokens so the personal page stays
 * visually distinct from the business page's Security section.
 */

const FEATURES = [
  {
    number: "01",
    icon:   Fuel,
    title:  "Never pay to pay.",
    body:   "Gas fees are covered by PayPax. You only need USDC or USDT — no BNB, no ETH, no second coin sitting in your wallet just in case.",
    tag:    "Zero gas",
  },
  {
    number: "02",
    icon:   Key,
    title:  "Your keys. Your money.",
    body:   "PayPax Wallet is fully non-custodial. No company holds your funds. Your seed phrase is yours alone — no one can freeze, pause, or touch your balance.",
    tag:    "Self-custody",
  },
  {
    number: "03",
    icon:   Globe,
    title:  "One wallet, every chain.",
    body:   "BNB Chain, Base, Polygon — the same wallet, the same experience. You never think about which chain you're on. It just works.",
    tag:    "Multi-chain",
  },
  {
    number: "04",
    icon:   Zap,
    title:  "Faster than tapping a card.",
    body:   "Scan a QR, approve once, done. Settlement hits the merchant in under five seconds. No loading spinner, no declined, no retry.",
    tag:    "One tap",
  },
  {
    number: "05",
    icon:   Coins,
    title:  "Every payment pays you back.",
    body:   "WPGP token rewards arrive silently after every transaction. Spend at a café, earn a little back. The more you use it, the more it accumulates.",
    tag:    "Token rewards",
  },
  {
    number: "06",
    icon:   Unlock,
    title:  "Pay any PayPax merchant.",
    body:   "The protocol is open. Any merchant running PayPax accepts your wallet — no integration needed on your side, no app to download for each store.",
    tag:    "Open network",
  },
];

export default function PersonalFeatures() {
  return (
    <section
      id="features"
      className="relative"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      aria-labelledby="features-heading"
    >
      {/* Gold ambient glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[700px] rounded-full bg-gold-warm/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-0">

          {/* ── LEFT sticky panel ── */}
          <div className="lg:w-[38%] lg:sticky lg:top-24 lg:self-start pt-16 lg:pt-[120px] pb-8 lg:pb-[120px] lg:pr-12">
            <AnimateOnScroll>
              <p className="section-label" style={{ color: "var(--gold)" }}>
                Why it feels different
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2
                id="features-heading"
                className="text-3xl md:text-4xl font-black leading-tight mt-2"
                style={{ color: "var(--text-primary)" }}
              >
                Built for people,{" "}
                <span className="text-gradient-gold">not wallets.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.18}>
              <p className="text-silver-mist text-sm leading-relaxed mt-4 max-w-xs">
                Six things that make PayPax Wallet feel different from every
                crypto wallet you&apos;ve tried before.
              </p>
            </AnimateOnScroll>
          </div>

          {/* ── RIGHT scrolling cards ── */}
          <div className="lg:w-[62%] flex flex-col gap-5 pt-0 lg:pt-[120px] pb-16 lg:pb-[120px]">
            {FEATURES.map((f, i) => (
              <AnimateOnScroll key={f.number} delay={i * 0.06}>
                <MagneticCard strength={6}>
                  <div
                    className="relative overflow-hidden rounded-lg p-8 transition-all duration-[400ms] group"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border:          "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "rgba(var(--gold-rgb), 0.30)";
                      el.style.boxShadow   = "0 8px 32px rgba(var(--gold-rgb), 0.10)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "var(--border)";
                      el.style.boxShadow   = "none";
                    }}
                  >
                    {/* Left accent bar — visible on hover via group */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to bottom, var(--gold), var(--gold-light))" }}
                      aria-hidden="true"
                    />

                    <div className="flex items-start gap-5">
                      {/* Step number */}
                      <span
                        className="text-5xl font-black font-mono select-none flex-shrink-0 w-10 leading-none pt-1"
                        style={{ color: "var(--border-strong)" }}
                        aria-hidden="true"
                      >
                        {f.number}
                      </span>

                      <div className="flex-1 min-w-0">
                        {/* Icon + tag */}
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:border-gold-warm/40"
                            style={{
                              background: "rgba(var(--gold-rgb), 0.08)",
                              border:     "1px solid rgba(var(--gold-rgb), 0.18)",
                            }}
                          >
                            <f.icon
                              size={18}
                              className="text-gold-warm transition-colors duration-300"
                              aria-hidden="true"
                            />
                          </div>
                          <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{
                              background: "rgba(var(--gold-rgb), 0.10)",
                              border:     "1px solid rgba(var(--gold-rgb), 0.20)",
                              color:      "var(--gold)",
                            }}
                          >
                            {f.tag}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-snow mb-2">{f.title}</h3>
                        <p className="text-silver-mist text-sm leading-relaxed">{f.body}</p>
                      </div>
                    </div>
                  </div>
                </MagneticCard>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
