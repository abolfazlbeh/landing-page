"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import MagneticCard from "@/components/ui/MagneticCard";
import SplitTextReveal from "@/components/ui/SplitTextReveal";

const chains = [
  {
    name: "Base",
    icon: "/images/chains/base.svg",
    iconBg: "transparent",
    fee: "0.30%",
    settlement: "~2 seconds",
    bestFor: "Coinbase ecosystem, developers",
    gradientFrom: "rgba(0,82,255,0.08)",
    gradientTo: "rgba(0,82,255,0.03)",
    borderColor: "rgba(0,82,255,0.2)",
    borderHover: "rgba(0,82,255,0.4)",
    labelColor: "#6B8FF7",
  },
  {
    name: "BNB Chain",
    icon: "/images/chains/bnb.svg",
    iconBg: "transparent",
    fee: "0.75%",
    settlement: "~3 seconds",
    bestFor: "General commerce",
    gradientFrom: "rgba(243,186,47,0.08)",
    gradientTo: "rgba(243,186,47,0.03)",
    borderColor: "rgba(243,186,47,0.2)",
    borderHover: "rgba(243,186,47,0.4)",
    labelColor: "#F3BA2F",
  },
  {
    name: "Polygon",
    icon: "/images/chains/polygon.svg",
    iconBg: "transparent",
    fee: "0.30%",
    settlement: "~2 seconds",
    bestFor: "High volume, lowest cost",
    gradientFrom: "rgba(130,71,229,0.08)",
    gradientTo: "rgba(130,71,229,0.03)",
    borderColor: "rgba(130,71,229,0.2)",
    borderHover: "rgba(130,71,229,0.4)",
    labelColor: "#A78BF6",
  },
];

export default function MultiChain() {
  return (
    <section
      id="multi-chain"
      className="section-padding relative overflow-hidden"
      aria-labelledby="multi-chain-heading"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-teal-deep/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="section-label">Multi-Chain</p>
          </AnimateOnScroll>
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-snow mt-2">
            <SplitTextReveal
              as="h2"
              text="One Protocol. Multiple Chains. Your Choice."
              delay={80}
              stagger={65}
              className="leading-tight"
            />
          </div>
          <span className="sr-only" id="multi-chain-heading">
            Multi-Chain: One Protocol. Multiple Chains. Your Choice.
          </span>
        </div>

        {/* Chain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {chains.map((chain, i) => (
            <AnimateOnScroll key={chain.name} delay={i * 0.1}>
              <MagneticCard strength={10} className="h-full">
                <div
                  className="card group h-full cursor-default transition-all duration-400"
                  style={{
                    background: `linear-gradient(to bottom, ${chain.gradientFrom}, ${chain.gradientTo})`,
                    border: `1px solid ${chain.borderColor}`,
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = chain.borderHover)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = chain.borderColor)
                  }
                >
                  {/* Chain logo row */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: chain.iconBg }}
                    >
                      <Image
                        src={chain.icon}
                        alt={`${chain.name} logo`}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>

                    {/* Active badge */}
                    <span
                      className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        color: chain.labelColor,
                        backgroundColor: `${chain.labelColor}18`,
                        border: `1px solid ${chain.labelColor}35`,
                      }}
                    >
                      Active
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-snow mb-6">{chain.name}</h3>

                  <dl className="space-y-4">
                    <div
                      className="flex justify-between items-center pb-3"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <dt className="text-xs text-pewter uppercase tracking-widest">Fee</dt>
                      <dd
                        className="text-2xl font-black font-mono"
                        style={{ color: chain.labelColor }}
                      >
                        {chain.fee}
                      </dd>
                    </div>
                    <div
                      className="flex justify-between items-center pb-3"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <dt className="text-xs text-pewter uppercase tracking-widest">Settlement</dt>
                      <dd className="text-sm font-mono text-mint font-semibold">
                        {chain.settlement}
                      </dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="text-xs text-pewter uppercase tracking-widest">Best For</dt>
                      <dd className="text-sm text-silver-mist text-right max-w-[55%]">
                        {chain.bestFor}
                      </dd>
                    </div>
                  </dl>
                </div>
              </MagneticCard>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.35}>
          <p className="text-center text-sm text-silver-mist max-w-2xl mx-auto">
            Same smart contract architecture. Same SDK. Same merchant experience.
            Choose the chain that fits your business.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
