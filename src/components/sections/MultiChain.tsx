import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const chains = [
  {
    name: "BNB Chain",
    symbol: "BNB",
    fee: "0.75%",
    settlement: "~3 seconds",
    bestFor: "General commerce",
    color: "from-yellow-400/10 to-yellow-400/5",
    borderColor: "border-yellow-400/20 hover:border-yellow-400/40",
    labelColor: "text-yellow-400",
    bg: "#F3BA2F",
  },
  {
    name: "Base",
    symbol: "BASE",
    fee: "0.2%",
    settlement: "~2 seconds",
    bestFor: "Coinbase ecosystem, developers",
    color: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    labelColor: "text-blue-400",
    bg: "#0052FF",
  },
  {
    name: "Polygon",
    symbol: "POL",
    fee: "0.2%",
    settlement: "~2 seconds",
    bestFor: "High volume, lowest cost",
    color: "from-purple-500/10 to-purple-500/5",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
    labelColor: "text-purple-400",
    bg: "#8247E5",
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
          <AnimateOnScroll delay={0.1}>
            <h2
              id="multi-chain-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black text-snow"
            >
              One Protocol.{" "}
              <span className="text-gradient-teal">Multiple Chains.</span> Your
              Choice.
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Chain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {chains.map((chain, i) => (
            <AnimateOnScroll key={chain.name} delay={i * 0.1}>
              <div
                className={`card group bg-gradient-to-b ${chain.color} border ${chain.borderColor} transition-all duration-400 h-full`}
              >
                {/* Chain logo placeholder */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-abyss font-black text-sm"
                    style={{ backgroundColor: chain.bg }}
                    aria-hidden="true"
                  >
                    {chain.symbol}
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${chain.labelColor}`}
                  >
                    Active
                  </span>
                </div>

                <h3 className="text-xl font-bold text-snow mb-6">
                  {chain.name}
                </h3>

                <dl className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
                    <dt className="text-xs text-pewter uppercase tracking-widest">
                      Fee
                    </dt>
                    <dd
                      className={`text-2xl font-black font-mono ${chain.labelColor}`}
                    >
                      {chain.fee}
                    </dd>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
                    <dt className="text-xs text-pewter uppercase tracking-widest">
                      Settlement
                    </dt>
                    <dd className="text-sm font-mono text-mint font-semibold">
                      {chain.settlement}
                    </dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-xs text-pewter uppercase tracking-widest">
                      Best For
                    </dt>
                    <dd className="text-sm text-silver-mist text-right max-w-[55%]">
                      {chain.bestFor}
                    </dd>
                  </div>
                </dl>
              </div>
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
