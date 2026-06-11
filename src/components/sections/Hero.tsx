"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const metrics = [
  { label: "Platform Fee", value: "0.75%", sub: "BNB Chain" },
  { label: "Settlement", value: "< 5s", sub: "All chains" },
  { label: "Chargebacks", value: "Zero", sub: "Impossible by design" },
  { label: "Supported Chains", value: "3", sub: "V2 launch" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-teal-deep/10 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-electric/8 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container-narrow relative z-10 pt-[96px] pb-0">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Protocol tag */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-bright/20 bg-teal-bright/[0.05] text-teal-bright text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-bright animate-pulse" />
              Powered by the WPGP Open Protocol
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] lg:text-[80px] lg:leading-[88px] font-black text-snow mb-6 tracking-tight"
          >
            Accept Crypto Payments.{" "}
            <span className="text-gradient-teal">No Middlemen.</span>{" "}
            No Delays.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-silver-mist leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            DeMere is the payment gateway where every transaction settles
            directly between customer wallet and merchant wallet — in seconds,
            with fees under 1%.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a href="https://docs.demere.io" className="btn-primary text-base">
              Start Accepting Payments
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#" className="btn-secondary text-base">
              <FileText size={18} aria-hidden="true" />
              Read the Overview
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Metrics strip */}
      <div className="relative z-10 w-full border-t border-white/[0.06] bg-deep-sea/60 backdrop-blur-sm">
        <div className="container-narrow">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="py-6 px-6 md:px-8 text-center first:pl-0 last:pr-0"
              >
                <dt className="text-xs text-pewter uppercase tracking-widest mb-1">
                  {m.label}
                </dt>
                <dd className="text-2xl md:text-3xl font-black text-snow font-mono">
                  {m.value}
                </dd>
                <dd className="text-xs text-pewter mt-1">{m.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
