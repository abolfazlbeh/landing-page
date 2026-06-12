import { AlertTriangle, Clock, Lock, DollarSign } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ScrollTextHighlight from "@/components/ui/ScrollTextHighlight";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const painPoints = [
  { icon: DollarSign, text: "2.9% + $0.30 per transaction — taken before you see a cent" },
  { icon: Clock,      text: "2–7 business days to access your own money" },
  { icon: AlertTriangle, text: "Chargebacks up to 120 days after a sale" },
  { icon: Lock,       text: "Account frozen without warning, funds held indefinitely" },
  { icon: DollarSign, text: "Cross-border fees stacked on top of everything else" },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="section-padding bg-deep-sea relative"
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-coral/5 blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: text ── */}
          <div>
            <AnimateOnScroll>
              <p className="section-label">The Problem</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                id="problem-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-snow leading-tight mb-6"
              >
                Traditional Gateways Take Too Much and{" "}
                <span className="text-coral">Give Too Little</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <ScrollTextHighlight
                text="Every time a customer checks out, five different companies take a cut of your money. Then they hold your funds for days, reserve the right to freeze your account, and can reverse transactions 120 days later. You built the product. You earned the sale. But getting paid is someone else's decision."
                className="text-base leading-relaxed mb-8"
              />
            </AnimateOnScroll>

            <ul className="space-y-4" role="list">
              {painPoints.map((point, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.08}>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-sm bg-coral/10 flex items-center justify-center">
                      <point.icon size={16} className="text-coral" aria-hidden="true" />
                    </span>
                    <span className="text-silver-mist leading-relaxed">{point.text}</span>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: photo + chip overlays ── */}
          <AnimateOnScroll delay={0.2}>
            <div className="relative">

              {/* Main photo */}
              <PhotoPlaceholder
                hint="A frustrated business owner staring at a laptop, credit card receipts or a complex payment dashboard visible. Moody, real. OR: a clean flatlay of a credit card, coin, and receipt showing fees. Aspect 4:5. ~520×650px."
                className="w-full shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
                aspectRatio="aspect-[4/5]"
              />

              {/* Chip: waiting days */}
              <div className="absolute top-6 -left-6 chip-overlay rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Settlement delay</p>
                <p className="text-2xl font-black text-coral font-mono">7 days</p>
              </div>

              {/* Chip: fee */}
              <div className="absolute bottom-20 -right-4 chip-overlay rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Average fee</p>
                <p className="text-2xl font-black text-coral font-mono">2.9%<span className="text-sm font-normal" style={{ color: "var(--text-muted)" }}> +$0.30</span></p>
              </div>

              {/* Chip: DeMere comparison */}
              <div className="absolute bottom-4 left-4 bg-teal-bright text-abyss text-xs font-bold px-3 py-2 rounded-full shadow-glow-teal whitespace-nowrap">
                DeMere: 0.75% · instant
              </div>

            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
