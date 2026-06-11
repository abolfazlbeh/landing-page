import { Fuel, Key, Globe, QrCode, Coins, Unlock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const walletFeatures = [
  {
    icon: Fuel,
    title: "Gasless Payments",
    body: "Pay with USDC or USDT without holding BNB or ETH. DeMere covers the gas.",
  },
  {
    icon: Key,
    title: "Non-Custodial",
    body: "HD wallet with full self-custody. Your keys, your funds. Always.",
  },
  {
    icon: Globe,
    title: "Multi-Chain",
    body: "Works on BNB Chain, Base, and Polygon. One wallet, any merchant.",
  },
  {
    icon: QrCode,
    title: "QR & Deep Link",
    body: "Scan a QR code at checkout, approve in one tap, done.",
  },
  {
    icon: Coins,
    title: "Token Rewards",
    body: "Earn WPGP tokens on every payment. Build value just by paying.",
  },
  {
    icon: Unlock,
    title: "Open Ecosystem",
    body: "Any ERC-4337 compatible wallet can pay DeMere merchants. DeMere Wallet is the best experience, but never the only option.",
  },
];

export default function WalletSection() {
  return (
    <section
      id="wallet"
      className="section-padding relative overflow-hidden"
      aria-labelledby="wallet-heading"
    >
      {/* Gold ambient glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[600px] rounded-full bg-gold-warm/8 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <AnimateOnScroll>
              <p className="section-label" style={{ color: "#D4A853" }}>
                DeMere Wallet
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                id="wallet-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-snow mb-6"
              >
                The Wallet Your Customers{" "}
                <span className="text-gradient-gold">Already Love</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <p className="text-silver-mist leading-relaxed mb-10">
                DeMere Wallet is the non-custodial mobile wallet built for the
                WPGP payment experience. Customers pay merchants in seconds —
                no gas fees, no complexity, full custody of their funds.
              </p>
            </AnimateOnScroll>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {walletFeatures.map((f, i) => (
                <AnimateOnScroll key={f.title} delay={0.2 + i * 0.06}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-gold-warm/10 border border-gold-warm/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon
                        size={14}
                        className="text-gold-warm"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-snow mb-1">
                        {f.title}
                      </p>
                      <p className="text-xs text-silver-mist leading-relaxed">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Download CTAs */}
            <AnimateOnScroll delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-premium text-sm">
                  Download for iOS
                </a>
                <a href="#" className="btn-secondary text-sm">
                  Download for Android
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: phone mockup placeholder */}
          <AnimateOnScroll delay={0.3} className="flex justify-center lg:justify-end">
            <div
              className="relative w-72 h-[560px] rounded-[40px] border-2 border-gold-warm/20 bg-gradient-to-b from-slate-deep to-abyss flex flex-col overflow-hidden shadow-glow-gold"
              aria-label="DeMere Wallet app mockup"
              role="img"
            >
              {/* Phone notch */}
              <div className="h-8 flex items-center justify-center flex-shrink-0">
                <div className="w-20 h-4 rounded-full bg-abyss border border-white/[0.06]" aria-hidden="true" />
              </div>
              {/* Screen content */}
              <div className="flex-1 px-6 py-4 flex flex-col gap-4">
                {/* Balance */}
                <div className="text-center py-4">
                  <p className="text-xs text-pewter mb-1">Total Balance</p>
                  <p className="text-4xl font-black text-snow">$1,247.50</p>
                  <p className="text-xs text-mint mt-1">↑ USDC · USDT</p>
                </div>
                {/* Payment card */}
                <div className="bg-gold-warm/10 border border-gold-warm/30 rounded-2xl p-4">
                  <p className="text-xs text-pewter mb-2">Pay to</p>
                  <p className="text-sm font-semibold text-snow mb-1">
                    Coffee & Co.
                  </p>
                  <p className="text-xs font-mono text-gold-warm mb-3">
                    0xA1b2...C3d4
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-snow">$4.50</span>
                    <span className="text-xs text-mint bg-mint/10 px-3 py-1 rounded-full">
                      Gasless
                    </span>
                  </div>
                </div>
                {/* Confirm button */}
                <div className="btn-premium text-sm text-center rounded-xl cursor-default select-none">
                  Confirm Payment
                </div>
                {/* Token reward */}
                <div className="flex items-center gap-2 text-xs text-gold-warm bg-gold-warm/5 border border-gold-warm/20 rounded-lg px-3 py-2">
                  <Coins size={12} aria-hidden="true" />
                  +2.5 WPGP tokens earned
                </div>
              </div>
              {/* Bottom bar */}
              <div className="h-8 flex items-center justify-center">
                <div className="w-28 h-1 rounded-full bg-white/10" aria-hidden="true" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
