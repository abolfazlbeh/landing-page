import {
  Vault,
  ScanLine,
  ShieldCheck,
  Atom,
  Code2,
  Network,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const trustPoints = [
  {
    icon: Vault,
    title: "Non-Custodial",
    body: "No one holds your funds. Ever. Direct wallet-to-wallet settlement.",
  },
  {
    icon: ScanLine,
    title: "On-Chain Verification",
    body: "Every payment is cryptographically verified by the smart contract.",
  },
  {
    icon: ShieldCheck,
    title: "Replay Protected",
    body: "Unique nonces prevent duplicate charges. Impossible to double-spend.",
  },
  {
    icon: Atom,
    title: "Atomic Transactions",
    body: "Either everything succeeds, or nothing changes. No partial states.",
  },
  {
    icon: Code2,
    title: "Open Source",
    body: "Every line of contract code is public and auditable.",
  },
  {
    icon: Network,
    title: "Permissionless Bundlers",
    body: "No single point of failure. If one bundler is down, another picks up.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="section-padding bg-deep-sea relative overflow-hidden"
      aria-labelledby="security-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-mint/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="section-label">Security</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2
              id="security-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black text-snow"
            >
              Transparent, Auditable,{" "}
              <span className="text-gradient-teal">Unstoppable</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Trust grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 0.08}>
              <div className="card group h-full">
                <div className="w-12 h-12 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center mb-5 transition-colors group-hover:border-mint/40">
                  <point.icon
                    size={22}
                    className="text-mint"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-snow mb-2">
                  {point.title}
                </h3>
                <p className="text-silver-mist text-sm leading-relaxed">
                  {point.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
