import { Download, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

/*
 * Act 6 — "Your Money, Your Life"
 * Emotional close. Lifetime-impact counters + closing statement + CTAs.
 *
 * Counter values are illustrative platform-level estimates — not personal.
 * They count up as the section enters view via AnimatedCounter.
 */

const COUNTERS = [
  {
    prefix:  "$",
    to:      1_240_000,
    suffix:  "",
    label:   "gas saved by users",
    sub:     "and counting",
  },
  {
    prefix:  "",
    to:      4_800_000,
    suffix:  "s",
    label:   "seconds not waited",
    sub:     "instant settlement",
  },
  {
    prefix:  "",
    to:      2_900_000,
    suffix:  "",
    label:   "WPGP tokens earned",
    sub:     "rewarded to payers",
  },
];

/* Format large numbers with locale separators in the counter display */
function formatCounterTo(n: number) {
  if (n >= 1_000_000) return { to: parseFloat((n / 1_000_000).toFixed(1)), suffix: "M" };
  if (n >= 1_000)     return { to: parseFloat((n / 1_000).toFixed(0)),     suffix: "K" };
  return { to: n, suffix: "" };
}

export default function PersonalClose() {
  return (
    <section
      id="personal-close"
      className="relative overflow-hidden section-padding"
      aria-labelledby="personal-close-heading"
    >
      {/* Gold gradient background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(var(--gold-rgb), 0.12) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle edge glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full bg-gold-warm/8 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-honey/6 blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Gold hairline top */}
      <div
        className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(var(--gold-rgb),0.40), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10 text-center">

        {/* Badge */}
        <AnimateOnScroll>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-10"
            style={{
              border:     "1px solid rgba(var(--gold-rgb), 0.25)",
              background: "rgba(var(--gold-rgb), 0.06)",
              color:      "var(--gold)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-warm animate-pulse" />
            Powered by WPGP
          </span>
        </AnimateOnScroll>

        {/* Closing statement */}
        <AnimateOnScroll delay={0.08}>
          <h2
            id="personal-close-heading"
            className="font-black text-snow leading-tight tracking-tight mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            Money that finally{" "}
            <span style={{ color: "var(--gold)" }}>feels like yours.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.14}>
          <p className="text-silver-mist text-lg leading-relaxed max-w-xl mx-auto mb-14">
            Join the network. Pay without friction. Earn without thinking about it.
          </p>
        </AnimateOnScroll>

        {/* CTAs */}
        <AnimateOnScroll delay={0.20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a href="#" className="btn-premium text-base">
              <Download size={17} aria-hidden="true" />
              Download PayPax Wallet
            </a>
            <a href="/business" className="btn-secondary text-base group">
              Explore for Business
              <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </AnimateOnScroll>

        {/* Lifetime-impact counter strip */}
        <AnimateOnScroll delay={0.26}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <dl className="grid grid-cols-1 sm:grid-cols-3">
              {COUNTERS.map((c, i) => {
                const { to, suffix: fmt } = formatCounterTo(c.to);
                return (
                  <div
                    key={c.label}
                    className="py-8 px-6 text-center relative"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderRight: i < COUNTERS.length - 1
                        ? "1px solid var(--border)"
                        : undefined,
                    }}
                  >
                    {/* Subtle gold glow behind each counter */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-24 rounded-full bg-gold-warm/8 blur-[40px] pointer-events-none"
                      aria-hidden="true"
                    />
                    <dt className="text-xs text-pewter uppercase tracking-widest mb-3 relative z-10">
                      {c.label}
                    </dt>
                    <dd
                      className="font-black font-mono relative z-10"
                      style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "var(--gold)", lineHeight: 1 }}
                    >
                      {c.prefix}
                      <AnimatedCounter
                        to={to}
                        suffix={fmt + c.suffix}
                        decimals={fmt === "M" ? 1 : 0}
                      />
                    </dd>
                    <dd className="text-xs text-pewter mt-2 relative z-10">{c.sub}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </AnimateOnScroll>

        {/* Footer note */}
        <AnimateOnScroll delay={0.32}>
          <p className="text-pewter text-sm leading-relaxed mt-10 max-w-lg mx-auto">
            PayPax Wallet is the best way to pay a PayPax merchant — but never
            the only one.{" "}
            <span style={{ color: "var(--text-secondary)" }}>
              The network is open. Any compatible wallet works.
            </span>
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
