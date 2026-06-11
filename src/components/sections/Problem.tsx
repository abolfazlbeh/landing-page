import { AlertTriangle, Clock, Lock, DollarSign } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const painPoints = [
  {
    icon: DollarSign,
    text: "2.9% + $0.30 per transaction — taken before you see a cent",
  },
  {
    icon: Clock,
    text: "2–7 business days to access your own money",
  },
  {
    icon: AlertTriangle,
    text: "Chargebacks up to 120 days after a sale",
  },
  {
    icon: Lock,
    text: "Account frozen without warning, funds held indefinitely",
  },
  {
    icon: DollarSign,
    text: "Cross-border fees stacked on top of everything else",
  },
];

const traditionalSteps = [
  "Issuing Bank",
  "Card Network",
  "Processor",
  "Gateway",
  "Acquiring Bank",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="section-padding bg-deep-sea relative overflow-hidden"
      aria-labelledby="problem-heading"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-coral/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <AnimateOnScroll>
              <p className="section-label">The Problem</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                id="problem-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-snow leading-tight mb-8"
              >
                Traditional Gateways Take Too Much and{" "}
                <span className="text-coral">Give Too Little</span>
              </h2>
            </AnimateOnScroll>
            <ul className="space-y-4" role="list">
              {painPoints.map((point, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.08}>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-sm bg-coral/10 flex items-center justify-center">
                      <point.icon
                        size={16}
                        className="text-coral"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-silver-mist leading-relaxed">
                      {point.text}
                    </span>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>

          {/* Right: visual comparison */}
          <AnimateOnScroll delay={0.2} className="space-y-6">
            {/* Traditional flow */}
            <div className="card" aria-label="Traditional payment flow">
              <p className="text-xs font-semibold text-coral uppercase tracking-widest mb-4">
                Traditional Payment — 5 Intermediaries
              </p>
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-md bg-coral/10 border border-coral/20 flex items-center justify-center">
                    <span className="text-coral text-xs font-mono">You</span>
                  </div>
                  <span className="text-[10px] text-pewter">Customer</span>
                </div>
                {traditionalSteps.map((step) => (
                  <div key={step} className="flex items-center gap-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-2 h-0.5 bg-coral/40" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-md bg-deep-sea border border-coral/20 flex items-center justify-center relative">
                        <span className="text-coral text-[9px] font-mono text-center leading-tight px-1">
                          {step.split(" ")[0]}
                        </span>
                        {/* Fee chip */}
                        <span className="absolute -top-2 -right-2 bg-coral text-[8px] text-abyss font-bold rounded px-1 py-0.5">
                          -$
                        </span>
                      </div>
                      <span className="text-[9px] text-pewter text-center max-w-[48px] leading-tight">
                        {step}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-1">
                  <div className="w-2 h-0.5 bg-coral/40" aria-hidden="true" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-md bg-coral/10 border border-coral/20 flex items-center justify-center">
                      <span className="text-coral text-xs font-mono">You</span>
                    </div>
                    <span className="text-[10px] text-pewter">Merchant</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-coral/80 mt-4 font-mono">
                Result: 2–7 days. 2.9%+ fee. Risk of freeze.
              </p>
            </div>

            {/* WPGP flow */}
            <div
              className="card border-teal-bright/20 bg-teal-bright/[0.03]"
              aria-label="DeMere / WPGP payment flow"
            >
              <p className="text-xs font-semibold text-teal-bright uppercase tracking-widest mb-4">
                DeMere / WPGP — Direct Settlement
              </p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-lg bg-teal-bright/10 border border-teal-bright/30 flex items-center justify-center">
                    <span className="text-teal-bright text-xs font-mono">
                      Wallet
                    </span>
                  </div>
                  <span className="text-[10px] text-pewter">Customer</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full h-0.5 bg-gradient-to-r from-teal-bright/40 to-teal-bright/40 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-deep-sea border border-teal-bright/30 rounded px-2 py-0.5">
                      <span className="text-[9px] text-teal-bright font-mono">
                        Smart Contract
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-lg bg-teal-bright/10 border border-teal-bright/30 flex items-center justify-center">
                    <span className="text-teal-bright text-xs font-mono">
                      Wallet
                    </span>
                  </div>
                  <span className="text-[10px] text-pewter">Merchant</span>
                </div>
              </div>
              <p className="text-xs text-teal-bright/80 mt-4 font-mono">
                Result: &lt; 5 seconds. 0.75% fee. No freeze possible.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
