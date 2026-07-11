"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import HeroToggle from "@/components/ui/HeroToggle";

const metrics = [
  { label: "Gas Fees",      value: "Zero",  sub: "PayPax covers them" },
  { label: "Payment Time",  value: "< 5s",  sub: "All chains"         },
  { label: "Self-Custody",  value: "100%",  sub: "Your keys, always"  },
  { label: "Token Rewards", value: "WPGP",  sub: "Earn on every pay"  },
];

export default function HeroPersonal() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — Personal"
    >
      {/* Ambient glows — gold palette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-gold-warm/8 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[100px]" />
      </div>

      {/* ── FLOATING PHOTO CLUSTER (right side, desktop only) ── */}
      <div
        className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10 pointer-events-none w-[380px] h-[520px]"
        aria-hidden="true"
      >
        {/* Main photo */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-0"
        >
          <PhotoPlaceholder
            hint="Person smiling while using a smartphone to pay at a café, candid moment, warm natural lighting, portrait orientation. Recommended: 400×530px WebP."
            className="w-[210px] shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            aspectRatio="aspect-[3/4]"
          />
          <div className="absolute -bottom-4 -left-6 text-abyss text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-glow-gold bg-gradient-gold">
            ⚡ Paid in 3s
          </div>
        </motion.div>

        {/* Secondary photo */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-24 right-52"
        >
          <PhotoPlaceholder
            hint="Close-up of a phone screen showing a green payment confirmed screen, dark UI, glowing confirmation. Square crop. Recommended: 200×200px WebP."
            className="w-[150px] shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            aspectRatio="aspect-square"
          />
          <div className="absolute -top-3 -right-3 chip-overlay text-gold-warm text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">
            WPGP
          </div>
        </motion.div>

        {/* Floating token reward chip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-24 right-12 chip-overlay rounded-xl px-4 py-3 shadow-xl"
        >
          <p className="text-xs mb-0.5 text-pewter">Tokens earned</p>
          <p className="text-xl font-black font-mono text-gold-warm">
            +12.5 <span className="text-sm font-normal text-pewter">WPGP</span>
          </p>
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

          {/* Protocol badge — gold */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-warm/25 bg-gold-warm/[0.05] text-gold-warm text-xs font-semibold tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-warm animate-pulse" />
              Powered by the WPGP Open Protocol
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="text-[40px] leading-[52px] md:text-[68px] md:leading-[78px] lg:text-[76px] lg:leading-[84px] font-black text-snow mb-6 tracking-tight"
            aria-label="Pay Anywhere. Zero Gas. Full Custody."
          >
            <div className="block overflow-hidden">
              {"Pay Anywhere.".split(" ").map((word, i) => (
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
              {"Zero Gas.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em] text-gradient-gold"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                >
                  {word}
                </motion.span>
              ))}
              {"Full Custody.".split(" ").map((word, i) => (
                <motion.span
                  key={`fc${i}`}
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
            PayPax Wallet lets you pay crypto merchants in seconds — no gas fees,
            no complexity. USDC and USDT straight from your wallet. Your keys,
            always yours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-20"
          >
            <a href="#" className="btn-premium text-base group">
              <Download size={18} aria-hidden="true" />
              Download PayPax Wallet
            </a>
            <a href="#how-it-works" className="btn-secondary text-base group">
              See How It Works
              <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
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
          <dl className="grid grid-cols-2 lg:grid-cols-4">
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
                <dd className="text-2xl md:text-3xl font-black font-mono text-gold-warm">{m.value}</dd>
                <dd className="text-xs text-pewter mt-1">{m.sub}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
