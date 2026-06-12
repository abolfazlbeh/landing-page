import { Fuel, Key, Globe, QrCode, Coins, Unlock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

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

          {/* ── RIGHT: phone photo + UI overlays ── */}
          <AnimateOnScroll delay={0.3} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">

              {/* Main phone photo */}
              <PhotoPlaceholder
                hint="A hand holding a smartphone showing a clean mobile wallet / payment confirmation screen. Dark phone, glowing UI on screen. Portrait orientation, natural hold. Aspect 3:4. ~420×560px."
                className="w-full shadow-[0_32px_80px_rgba(212,168,83,0.15)]"
                aspectRatio="aspect-[3/4]"
              />

              {/* Balance chip */}
              <div className="absolute top-6 -left-4 chip-overlay rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Balance</p>
                <p className="text-xl font-black font-mono" style={{ color: "var(--text-primary)" }}>$1,247<span className="text-sm font-normal" style={{ color: "var(--text-muted)" }}>.50</span></p>
                <p className="text-xs text-mint mt-0.5">↑ USDC · USDT</p>
              </div>

              {/* "Gasless" chip */}
              <div className="absolute top-10 -right-4 bg-teal-bright text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-glow-teal whitespace-nowrap">
                ⚡ Zero gas fees
              </div>

              {/* Token reward chip */}
              <div className="absolute bottom-8 -left-4 chip-overlay rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-warm/20 border border-gold-warm/40 flex items-center justify-center flex-shrink-0">
                  <Coins size={14} className="text-gold-warm" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Tokens earned</p>
                  <p className="text-sm font-black text-gold-warm font-mono">+2.5 WPGP</p>
                </div>
              </div>

            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
