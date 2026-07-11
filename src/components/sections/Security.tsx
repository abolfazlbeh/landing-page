import {
  Vault,
  ScanLine,
  ShieldCheck,
  Atom,
  Code2,
  Network,
} from "lucide-react";
import StickyFeaturePanel, {
  FeatureItem,
} from "@/components/ui/StickyFeaturePanel";
import ScrollTextHighlight from "@/components/ui/ScrollTextHighlight";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const trustFeatures: FeatureItem[] = [
  {
    number: "01",
    icon: <Vault size={18} className="text-mint" aria-hidden="true" />,
    title: "Non-Custodial",
    body: "No one holds your funds. Ever. Direct wallet-to-wallet settlement means no third party ever controls your money.",
    tag: "Your keys",
    tagColor: "mint",
  },
  {
    number: "02",
    icon: <ScanLine size={18} className="text-mint" aria-hidden="true" />,
    title: "On-Chain Verification",
    body: "Every payment is cryptographically verified by the smart contract. No backend database to trust or tamper with.",
    tag: "Trustless",
    tagColor: "mint",
  },
  {
    number: "03",
    icon: <ShieldCheck size={18} className="text-mint" aria-hidden="true" />,
    title: "Replay Protected",
    body: "Unique nonces prevent duplicate charges. Impossible to double-spend or replay a past transaction.",
    tag: "Nonce-based",
    tagColor: "teal",
  },
  {
    number: "04",
    icon: <Atom size={18} className="text-mint" aria-hidden="true" />,
    title: "Atomic Transactions",
    body: "Either everything succeeds, or nothing changes. No partial states, no stuck funds, no manual reconciliation.",
    tag: "All or nothing",
    tagColor: "teal",
  },
  {
    number: "05",
    icon: <Code2 size={18} className="text-mint" aria-hidden="true" />,
    title: "Open Source",
    body: "Every line of contract code is public and auditable. Anyone can verify the protocol is exactly what we claim.",
    tag: "Fully public",
    tagColor: "mint",
  },
  {
    number: "06",
    icon: <Network size={18} className="text-mint" aria-hidden="true" />,
    title: "Permissionless Bundlers",
    body: "No single point of failure. If one bundler is down, another picks up the transaction automatically.",
    tag: "Decentralized",
    tagColor: "mint",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="relative bg-deep-sea"
      aria-labelledby="security-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-mint/5 blur-[120px]" />
      </div>

      {/* Scroll highlight teaser above the panel */}
      <div className="container-narrow pt-16 md:pt-[120px] pb-0">
        <AnimateOnScroll>
          <p className="section-label">Security</p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <h2
            id="security-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Transparent, Auditable,{" "}
            <span className="text-gradient-teal">Unstoppable</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <ScrollTextHighlight
            text="Every payment on PayPax is governed entirely by open-source smart contract code. There is no company database, no backend server, and no human operator that stands between your customer's wallet and yours. The protocol enforces every rule automatically, on-chain, in real time."
            className="text-lg leading-relaxed max-w-2xl mb-0"
          />
        </AnimateOnScroll>
      </div>

      <div className="relative z-10">
        {/* Override StickyFeaturePanel to skip its own section label/heading — only show cards */}
        <StickyFeaturePanel
          sectionLabel=""
          headline={
            <span style={{ color: "var(--text-primary)" }} className="text-xl font-semibold">
              Six properties that make WPGP{" "}
              <span className="text-gradient-teal">independently secure</span>
            </span>
          }
          features={trustFeatures}
        />
      </div>
    </section>
  );
}
