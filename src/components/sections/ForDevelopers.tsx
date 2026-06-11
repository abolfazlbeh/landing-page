import { ExternalLink, Terminal } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const integrationPaths = [
  {
    label: "TypeScript SDK",
    tag: "@wpgp/business-sdk",
    description: "Full-featured SDK for Node.js and browser environments.",
  },
  {
    label: "Direct Contract Call",
    tag: "ABI is public",
    description: "Call the smart contract directly. No SDK required.",
  },
  {
    label: "Deep Link / QR Code",
    tag: "Protocol standard",
    description: "Generate payment links for any wallet without SDK setup.",
  },
];

const codeSnippet = `import { WPGPClient } from "@wpgp/business-sdk";

const client = new WPGPClient({
  merchantAddress: "0xYourWalletAddress",
  chain: "bnb", // or "base" | "polygon"
});

// Create a payment intent
const intent = await client.createPaymentIntent({
  amount: "50.00",
  token: "USDC",
  invoiceId: "inv_abc123",
});

// Share intent.paymentUrl with your customer
console.log(intent.paymentUrl);`;

export default function ForDevelopers() {
  return (
    <section
      id="developers"
      className="section-padding bg-deep-sea relative overflow-hidden"
      aria-labelledby="developers-heading"
    >
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-electric/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <AnimateOnScroll>
              <p className="section-label">For Developers</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                id="developers-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-snow mb-6"
              >
                Open Protocol.{" "}
                <span className="text-gradient-teal">Build Anything.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <p className="text-silver-mist leading-relaxed mb-8">
                DeMere is powered by the WPGP open protocol. Any wallet, any
                frontend, any backend can integrate. No API keys. No approval
                process. The smart contract is the standard.
              </p>
            </AnimateOnScroll>

            {/* Integration paths */}
            <div className="space-y-4 mb-10">
              {integrationPaths.map((path, i) => (
                <AnimateOnScroll key={path.label} delay={0.2 + i * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-deep border border-white/[0.04] hover:border-teal-bright/20 transition-colors">
                    <div className="w-8 h-8 rounded-md bg-teal-bright/10 border border-teal-bright/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Terminal
                        size={14}
                        className="text-teal-bright"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-snow">
                        {path.label}
                      </p>
                      <p className="text-xs font-mono text-teal-bright mb-1">
                        {path.tag}
                      </p>
                      <p className="text-xs text-silver-mist">
                        {path.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* CTAs */}
            <AnimateOnScroll delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://docs.demere.io"
                  className="btn-primary text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Documentation
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/wpgp"
                  className="btn-secondary text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: code snippet */}
          <AnimateOnScroll delay={0.25}>
            <div
              className="rounded-xl overflow-hidden border border-white/[0.06] bg-slate-deep"
              aria-label="Code snippet example"
            >
              {/* Editor header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-abyss/50">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-coral/60" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-honey/60" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-mint/60" aria-hidden="true" />
                </div>
                <span className="text-xs text-pewter font-mono">
                  integration.ts
                </span>
                <span className="text-xs text-pewter font-mono opacity-0 select-none">
                  —
                </span>
              </div>
              {/* Code */}
              <pre className="p-6 overflow-x-auto text-xs font-mono leading-relaxed">
                <code>
                  {codeSnippet.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line
                        .split(
                          /(import|from|const|await|async|"[^"]*"|\/\/[^\n]*)/g
                        )
                        .map((part, j) => {
                          if (
                            part === "import" ||
                            part === "from" ||
                            part === "const" ||
                            part === "await" ||
                            part === "async"
                          ) {
                            return (
                              <span key={j} className="text-cyan-electric">
                                {part}
                              </span>
                            );
                          }
                          if (part.startsWith('"') && part.endsWith('"')) {
                            return (
                              <span key={j} className="text-mint">
                                {part}
                              </span>
                            );
                          }
                          if (part.startsWith("//")) {
                            return (
                              <span key={j} className="text-pewter">
                                {part}
                              </span>
                            );
                          }
                          return (
                            <span key={j} className="text-snow/80">
                              {part}
                            </span>
                          );
                        })}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
