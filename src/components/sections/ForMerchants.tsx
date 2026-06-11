import {
  ShoppingBag,
  Store,
  Tablet,
  Code2,
  Zap,
  Coins,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const features = [
  {
    icon: ShoppingBag,
    title: "WooCommerce Plugin",
    body: "Install and accept payments in 15 minutes. WordPress powers 43% of the web.",
    accent: "teal",
  },
  {
    icon: Store,
    title: "Shopify App",
    body: "Native integration for 4.4M+ Shopify stores. One-click setup.",
    accent: "teal",
  },
  {
    icon: Tablet,
    title: "POS Device SDK",
    body: "Accept in-person payments via QR codes and NFC. Works on tablets and phones.",
    accent: "teal",
  },
  {
    icon: Code2,
    title: "Developer SDKs",
    body: "TypeScript, Python, PHP, Ruby, Go. Custom integration in hours, not weeks.",
    accent: "teal",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    body: "Funds arrive in your wallet within seconds. No holding periods. No rolling reserves.",
    accent: "teal",
  },
  {
    icon: Coins,
    title: "Token Rewards",
    body: "Earn WPGP tokens on every payment. Your effective fee decreases as the token grows.",
    accent: "gold",
  },
];

export default function ForMerchants() {
  return (
    <section
      id="merchants"
      className="section-padding relative overflow-hidden"
      aria-labelledby="merchants-heading"
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-deep/6 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="section-label">For Merchants</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2
              id="merchants-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black text-snow"
            >
              Built for{" "}
              <span className="text-gradient-teal">Every Business</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.title} delay={i * 0.08}>
              <div
                className={`card group h-full ${
                  f.accent === "gold"
                    ? "border-gold-warm/10 hover:border-gold-warm/30 hover:shadow-glow-gold"
                    : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors ${
                    f.accent === "gold"
                      ? "bg-gold-warm/10 border border-gold-warm/20 group-hover:border-gold-warm/40"
                      : "bg-teal-bright/10 border border-teal-bright/20 group-hover:border-teal-bright/40"
                  }`}
                >
                  <f.icon
                    size={22}
                    className={
                      f.accent === "gold" ? "text-gold-warm" : "text-teal-bright"
                    }
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-snow mb-2">
                  {f.title}
                </h3>
                <p className="text-silver-mist text-sm leading-relaxed">
                  {f.body}
                </p>
                {f.accent === "gold" && (
                  <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full bg-gold-warm/10 text-gold-warm border border-gold-warm/20">
                    Premium
                  </span>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
