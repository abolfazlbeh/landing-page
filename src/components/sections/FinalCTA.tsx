import { ArrowRight, Download } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-night-teal via-abyss to-abyss pointer-events-none"
        aria-hidden="true"
      />
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-teal-deep/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-cyan-electric/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10 text-center">
        <AnimateOnScroll>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-bright/20 bg-teal-bright/[0.05] text-teal-bright text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-bright animate-pulse" />
            Powered by WPGP
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2
            id="cta-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-black text-snow mb-6 max-w-3xl mx-auto leading-tight"
          >
            Ready to Accept Payments{" "}
            <span className="text-gradient-teal">Without the Middlemen?</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-lg text-silver-mist mb-12 max-w-xl mx-auto">
            Join the protocol. Start in minutes.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.demere.io"
              className="btn-primary text-base px-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#wallet" className="btn-secondary text-base px-8">
              <Download size={18} aria-hidden="true" />
              Download DeMere Wallet
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
