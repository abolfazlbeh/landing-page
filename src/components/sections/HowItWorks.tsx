import { KeyRound, Wallet, Zap } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import MagneticCard from "@/components/ui/MagneticCard";
import SplitTextReveal from "@/components/ui/SplitTextReveal";

const steps = [
  {
    number: "01",
    icon: KeyRound,
    title: "Merchant Signs",
    body: "Your backend signs a payment intent — amount, token, and invoice ID. This authorizes your wallet to receive payment.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Customer Pays",
    body: "Customer approves in their wallet. For stablecoins, a bundler submits the transaction — the customer pays zero gas.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Instant Settlement",
    body: "The smart contract verifies, splits fees, and sends funds directly to your wallet. Done in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-teal-deep/8 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        {/* Heading with Chromia-style split reveal */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="section-label">How It Works</p>
          </AnimateOnScroll>
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-snow mt-2">
            <SplitTextReveal
              as="h2"
              text="Three Steps. Direct Settlement. No Middle."
              delay={100}
              stagger={70}
              className="leading-tight"
            />
          </div>
          <span className="sr-only" id="how-it-works-heading">
            How It Works: Three Steps. Direct Settlement. No Middle.
          </span>
        </div>

        {/* Steps — magnetic cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.12}>
              <MagneticCard strength={8}>
                <div className="card group relative overflow-hidden h-full cursor-default">
                  {/* Step number bg */}
                  <span
                    className="absolute top-4 right-6 text-7xl font-black select-none pointer-events-none"
                    style={{ color: "var(--border-strong)" }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-teal-bright/10 border border-teal-bright/20 flex items-center justify-center mb-6 group-hover:border-teal-bright/40 transition-colors">
                      <step.icon
                        size={22}
                        className="text-teal-bright"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-snow mb-3">
                      {step.title}
                    </h3>
                    <p className="text-silver-mist leading-relaxed text-sm">
                      {step.body}
                    </p>
                  </div>
                </div>
              </MagneticCard>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Animated flow diagram */}
        <AnimateOnScroll delay={0.3}>
          <div
            className="card overflow-x-auto"
            style={{ backgroundColor: "var(--bg-secondary)" }}
            aria-label="Payment flow diagram"
          >
            <div className="flex items-center justify-center gap-0 min-w-[520px] py-4">
              {/* Customer wallet */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-teal-bright/10 border border-teal-bright/30 flex flex-col items-center justify-center">
                  <Wallet size={20} className="text-teal-bright" aria-hidden="true" />
                </div>
                <span className="text-xs text-silver-mist font-medium">Customer Wallet</span>
              </div>
              {/* Arrow 1 */}
              <div className="flex flex-col items-center gap-1 px-3">
                <div className="h-0.5 w-16 bg-gradient-to-r from-teal-bright/50 to-teal-bright" />
                <span className="text-[10px] text-pewter font-mono">Signs tx</span>
              </div>
              {/* Smart contract */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-16 rounded-xl bg-teal-bright/5 border border-teal-bright/40 flex flex-col items-center justify-center gap-1 px-2">
                  <span className="text-[10px] text-teal-bright font-mono text-center leading-tight">WPGP Smart Contract</span>
                  <span className="text-[9px] text-pewter font-mono">Verifies</span>
                </div>
                <span className="text-xs text-silver-mist font-medium">On-chain</span>
              </div>
              {/* Arrow 2 */}
              <div className="flex flex-col items-center gap-1 px-3">
                <div className="h-0.5 w-16 bg-gradient-to-r from-teal-bright to-cyan-electric" />
                <span className="text-[10px] text-pewter font-mono">Settles</span>
              </div>
              {/* Merchant wallet */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-teal-bright/10 border border-teal-bright/30 flex flex-col items-center justify-center">
                  <Wallet size={20} className="text-teal-bright" aria-hidden="true" />
                </div>
                <span className="text-xs text-silver-mist font-medium">Merchant Wallet</span>
              </div>
              {/* Timer */}
              <div className="ml-6 flex flex-col items-center gap-2">
                <div className="px-4 py-2 rounded-lg bg-mint/10 border border-mint/30 flex items-center gap-2">
                  <Zap size={14} className="text-mint" aria-hidden="true" />
                  <span className="text-sm font-mono font-bold text-mint">&lt; 5 seconds</span>
                </div>
                <span className="text-[10px] text-pewter">Settlement time</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
