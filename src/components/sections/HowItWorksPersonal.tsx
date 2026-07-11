import { QrCode, Wallet, Coins } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import MagneticCard from "@/components/ui/MagneticCard";
import SplitTextReveal from "@/components/ui/SplitTextReveal";

const steps = [
  {
    number: "01",
    icon: QrCode,
    title: "Scan or Tap",
    body: "At checkout, scan a QR code or tap a deep link. The merchant's payment request loads instantly in PayPax Wallet — amount, token, and merchant name all verified.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Approve in One Tap",
    body: "Review and approve the payment. No gas fees — PayPax covers them. No BNB or ETH balance required. Just USDC or USDT in your wallet.",
  },
  {
    number: "03",
    icon: Coins,
    title: "Done. Plus You Earn.",
    body: "The smart contract settles directly to the merchant in seconds. You receive a WPGP token reward for every payment — building value as you spend.",
  },
];

export default function HowItWorksPersonal() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden"
      aria-labelledby="how-it-works-personal-heading"
    >
      {/* Gold ambient glow — matches hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-warm/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            {/* Override section-label accent with gold via inline style */}
            <p className="section-label" style={{ color: "var(--gold)" }}>How It Works</p>
          </AnimateOnScroll>
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-snow mt-2">
            <SplitTextReveal
              as="h2"
              text="Scan. Approve. Done."
              delay={100}
              stagger={70}
              className="leading-tight"
            />
          </div>
          <span className="sr-only" id="how-it-works-personal-heading">
            How It Works: Scan. Approve. Done.
          </span>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.12}>
              <MagneticCard strength={8}>
                <div className="card group relative overflow-hidden h-full cursor-default">
                  <span
                    className="absolute top-4 right-6 text-7xl font-black select-none pointer-events-none"
                    style={{ color: "var(--border-strong)" }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    {/* Icon box — gold tint using Tailwind tokens */}
                    <div className="w-12 h-12 rounded-lg bg-gold-warm/10 border border-gold-warm/25 flex items-center justify-center mb-6 group-hover:border-gold-warm/40 transition-colors">
                      <step.icon size={22} className="text-gold-warm" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-snow mb-3">{step.title}</h3>
                    <p className="text-silver-mist leading-relaxed text-sm">{step.body}</p>
                  </div>
                </div>
              </MagneticCard>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Flow diagram — customer perspective */}
        <AnimateOnScroll delay={0.3}>
          <div
            className="card overflow-x-auto"
            style={{ backgroundColor: "var(--bg-secondary)" }}
            aria-label="Customer payment flow diagram"
          >
            <div className="flex items-center justify-center gap-0 min-w-[520px] py-4">

              {/* Customer wallet */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-gold-warm/10 border border-gold-warm/30 flex items-center justify-center">
                  <Wallet size={20} className="text-gold-warm" aria-hidden="true" />
                </div>
                <span className="text-xs text-silver-mist font-medium">Your Wallet</span>
              </div>

              {/* Arrow 1 */}
              <div className="flex flex-col items-center gap-1 px-3">
                <div className="h-0.5 w-16 bg-gradient-to-r from-gold-warm/50 to-gold-warm" />
                <span className="text-[10px] text-pewter font-mono">Zero gas</span>
              </div>

              {/* Smart contract */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-16 rounded-xl bg-gold-warm/5 border border-gold-warm/35 flex flex-col items-center justify-center gap-1 px-2">
                  <span className="text-[10px] text-gold-warm font-mono text-center leading-tight">WPGP Smart Contract</span>
                  <span className="text-[9px] text-pewter font-mono">Verifies</span>
                </div>
                <span className="text-xs text-silver-mist font-medium">On-chain</span>
              </div>

              {/* Arrow 2 */}
              <div className="flex flex-col items-center gap-1 px-3">
                <div className="h-0.5 w-16 bg-gradient-to-r from-gold-warm to-honey" />
                <span className="text-[10px] text-pewter font-mono">Settles</span>
              </div>

              {/* Merchant wallet */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-teal-bright/10 border border-teal-bright/30 flex items-center justify-center">
                  <Wallet size={20} className="text-teal-bright" aria-hidden="true" />
                </div>
                <span className="text-xs text-silver-mist font-medium">Merchant Wallet</span>
              </div>

              {/* Token reward */}
              <div className="ml-6 flex flex-col items-center gap-2">
                <div className="px-4 py-2 rounded-lg bg-gold-warm/10 border border-gold-warm/30 flex items-center gap-2">
                  <Coins size={14} className="text-gold-warm" aria-hidden="true" />
                  <span className="text-sm font-mono font-bold text-gold-warm">+WPGP</span>
                </div>
                <span className="text-[10px] text-pewter">Token reward to you</span>
              </div>

            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
