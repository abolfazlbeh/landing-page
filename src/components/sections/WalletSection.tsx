import { Fuel, Key, Globe, Coins } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const features = [
  { icon: Fuel,   text: "Zero gas fees — PayPax covers them." },
  { icon: Key,    text: "Self-custody. Your keys, always yours." },
  { icon: Globe,  text: "One wallet for Base, BNB Chain, and Polygon." },
  { icon: Coins,  text: "Earn WPGP tokens on every payment." },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: text ── */}
          <div>
            <AnimateOnScroll>
              <p className="section-label" style={{ color: "#D4A853" }}>
                PayPax Wallet
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2
                id="wallet-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-snow leading-tight mb-5"
              >
                The wallet that makes
                crypto feel{" "}
                <span className="text-gradient-gold">invisible.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-silver-mist leading-relaxed mb-8 max-w-sm">
                Tap once, pay in seconds. No gas, no complexity — just
                a clean checkout experience on any chain.
              </p>
            </AnimateOnScroll>

            {/* 4 one-line features */}
            <AnimateOnScroll delay={0.2}>
              <ul className="space-y-3 mb-10" role="list">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "rgba(212,168,83,0.12)",
                        border: "1px solid rgba(212,168,83,0.25)",
                      }}
                    >
                      <f.icon size={13} className="text-gold-warm" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-silver-mist">{f.text}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* CTAs */}
            <AnimateOnScroll delay={0.35}>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-premium text-sm">
                  Download for iOS
                </a>
                <a href="#" className="btn-secondary text-sm">
                  Android
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* ── RIGHT: phone photo + overlays ── */}
          <AnimateOnScroll delay={0.25} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">

              <PhotoPlaceholder
                hint="A hand holding a smartphone showing a clean mobile wallet payment confirmation screen. Dark phone, glowing UI. Portrait 3:4. ~420×560px WebP."
                className="w-full shadow-[0_32px_80px_rgba(212,168,83,0.15)]"
                aspectRatio="aspect-[3/4]"
              />

              {/* Balance chip */}
              <div className="absolute top-6 -left-4 chip-overlay rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Balance</p>
                <p className="text-xl font-black font-mono" style={{ color: "var(--text-primary)" }}>
                  $1,247
                  <span className="text-sm font-normal" style={{ color: "var(--text-muted)" }}>.50</span>
                </p>
                <p className="text-xs text-mint mt-0.5">↑ USDC · USDT</p>
              </div>

              {/* Zero gas chip */}
              <div className="absolute top-10 -right-4 bg-teal-bright text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-glow-teal whitespace-nowrap">
                ⚡ Zero gas fees
              </div>

              {/* Token chip */}
              <div className="absolute bottom-8 -left-4 chip-overlay rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gold-warm/20 border border-gold-warm/40 flex items-center justify-center flex-shrink-0">
                  <Coins size={12} className="text-gold-warm" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Earned</p>
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
