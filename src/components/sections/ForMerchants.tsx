import {
  ShoppingBag,
  Store,
  Tablet,
  Code2,
  Zap,
  Coins,
} from "lucide-react";
import StickyFeaturePanel, {
  FeatureItem,
} from "@/components/ui/StickyFeaturePanel";

const features: FeatureItem[] = [
  {
    number: "01",
    icon: <ShoppingBag size={18} className="text-teal-bright" aria-hidden="true" />,
    title: "WooCommerce Plugin",
    body: "Install and accept payments in 15 minutes. WordPress powers 43% of the web — reach every merchant running it.",
    tag: "15 min setup",
    tagColor: "teal",
  },
  {
    number: "02",
    icon: <Store size={18} className="text-teal-bright" aria-hidden="true" />,
    title: "Shopify App",
    body: "Native integration for 4.4M+ Shopify stores. One-click setup. Payments hit your wallet, not Shopify's.",
    tag: "4.4M+ stores",
    tagColor: "teal",
  },
  {
    number: "03",
    icon: <Tablet size={18} className="text-teal-bright" aria-hidden="true" />,
    title: "POS Device SDK",
    body: "Accept in-person payments via QR codes and NFC. Works on tablets and phones. No dedicated hardware required.",
    tag: "QR + NFC",
    tagColor: "teal",
  },
  {
    number: "04",
    icon: <Code2 size={18} className="text-teal-bright" aria-hidden="true" />,
    title: "Developer SDKs",
    body: "TypeScript, Python, PHP, Ruby, Go. Custom integration in hours, not weeks. The ABI is public — no approval needed.",
    tag: "5 languages",
    tagColor: "teal",
  },
  {
    number: "05",
    icon: <Zap size={18} className="text-teal-bright" aria-hidden="true" />,
    title: "Instant Settlement",
    body: "Funds arrive in your wallet within seconds. No holding periods. No rolling reserves. Your money, immediately.",
    tag: "< 5 seconds",
    tagColor: "mint",
  },
  {
    number: "06",
    icon: <Coins size={18} className="text-gold-warm" aria-hidden="true" />,
    title: "Token Rewards",
    body: "Earn WPGP tokens on every payment processed. Your effective fee decreases as the token grows in value.",
    tag: "WPGP tokens",
    tagColor: "gold",
  },
];

export default function ForMerchants() {
  return (
    <section
      id="merchants"
      className="relative bg-deep-sea"
      aria-labelledby="merchants-heading"
    >
      {/* Glow is clipped inside its own wrapper so it doesn't break sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-deep/6 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <StickyFeaturePanel
          sectionLabel="For Merchants"
          headline={
            <>
              <span id="merchants-heading">
                Built for{" "}
                <span className="text-gradient-teal">Every Business</span>
              </span>
            </>
          }
          features={features}
        />
      </div>
    </section>
  );
}
