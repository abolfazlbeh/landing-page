"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import HeroToggle from "@/components/ui/HeroToggle";

const metrics = [
  { label: "Platform Fee", value: "0.75%", sub: "BNB Chain" },
  { label: "Settlement", value: "< 5s", sub: "All chains" },
  { label: "Chargebacks", value: "Zero", sub: "Impossible by design" },
  { label: "Chains", value: "3", sub: "V2 launch" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient glows sit behind the dot grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-teal-deep/10 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-electric/6 blur-[100px]" />
      </div>

      {/* ── FLOATING PHOTO CLUSTER (right side, desktop only) ── */}
      <div
        className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10 pointer-events-none w-[380px] h-[520px]"
        aria-hidden="true"
      >
        {/* Main photo — merchant at checkout */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-0"
        >
          <div className="relative w-[210px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] border border-[var(--border)]">
            <Image
              src="/images/business/merchant.webp"
              alt="A café owner smiling behind their counter"
              fill
              sizes="210px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-6 bg-teal-bright text-abyss text-xs font-bold px-3 py-1.5 rounded-full shadow-glow-teal whitespace-nowrap">
            ✓ Settled in 3s
          </div>
        </motion.div>

        {/* Secondary photo — customer scanning QR */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-24 right-52"
        >
          <div className="relative w-[150px] aspect-square rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)] border border-[var(--border)]">
            <Image
              src="/images/business/scan-qr.webp"
              alt="Customer scanning a QR code with a smartphone to pay"
              fill
              sizes="150px"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-3 -right-3 chip-overlay text-teal-bright text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">
            WPGP
          </div>
        </motion.div>

        {/* Floating stat chip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-24 right-12 chip-overlay rounded-xl px-4 py-3 shadow-xl"
        >
          <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Saved vs Stripe</p>
          <p className="text-xl font-black font-mono text-mint">$2,100<span className="text-sm font-normal" style={{ color: "var(--text-muted)" }}>/mo</span></p>
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="container-narrow relative z-10 pt-[96px] pb-0">
        <div className="max-w-5xl mx-auto lg:mx-0 text-center lg:text-left lg:max-w-[600px]">
          {/* Audience toggle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <HeroToggle />
          </motion.div>

          {/* Protocol badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-bright/25 bg-teal-bright/[0.05] text-teal-bright text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-bright animate-pulse" />
              Powered by the WPGP Open Protocol
            </span>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <h1
            className="text-[40px] leading-[52px] md:text-[68px] md:leading-[78px] lg:text-[76px] lg:leading-[84px] font-black text-snow mb-6 tracking-tight"
            aria-label="Accept Crypto Payments. No Middlemen. No Delays."
          >
            <div className="block overflow-hidden">
              {"Accept Crypto Payments.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em]"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="block overflow-hidden mt-1">
              {"No Middlemen.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em] text-gradient-teal"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                >
                  {word}
                </motion.span>
              ))}
              {"No Delays.".split(" ").map((word, i) => (
                <motion.span
                  key={`d${i}`}
                  className="inline-block mr-[0.22em]"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.82 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-silver-mist leading-relaxed mb-10 max-w-lg"
          >
            PayPax is the payment gateway where every transaction settles
            directly between customer wallet and merchant wallet — in seconds,
            with fees under 1%.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-20"
          >
            <a href="https://docs.paypax.xyz" className="btn-primary text-base group">
              Start Accepting Payments
              <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#" className="btn-secondary text-base">
              <FileText size={18} aria-hidden="true" />
              Read the Overview
            </a>
          </motion.div>
        </div>
      </div>

      {/* Metrics strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 w-full backdrop-blur-sm"
        style={{
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        <div className="container-narrow">
          <dl className="grid grid-cols-2 lg:grid-cols-4" style={{ borderLeft: "none" }}>
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 px-4 md:px-8 text-center"
                style={{ borderRight: "1px solid var(--border)" }}
              >
                <dt className="text-xs text-pewter uppercase tracking-widest mb-1">{m.label}</dt>
                <dd className="text-2xl md:text-3xl font-black text-snow font-mono">{m.value}</dd>
                <dd className="text-xs text-pewter mt-1">{m.sub}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
