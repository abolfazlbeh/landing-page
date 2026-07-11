"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const competitors = [
  {
    name: "Coinbase Commerce",
    fee: "1%",
    settlement: "Minutes–Hours",
    custody: "Custodial",
    hiddenFees: "Withdrawal fees",
    accountRisk: "Can freeze",
    openProtocol: false,
    tokenRewards: false,
    highlight: false,
  },
  {
    name: "BitPay",
    fee: "1%",
    settlement: "1 day",
    custody: "Custodial",
    hiddenFees: "FX spread + min invoice",
    accountRisk: "Can freeze",
    openProtocol: false,
    tokenRewards: false,
    highlight: false,
  },
  {
    name: "NOWPayments",
    fee: "0.5%",
    settlement: "Minutes",
    custody: "Custodial",
    hiddenFees: "Network fees",
    accountRisk: "Can freeze",
    openProtocol: false,
    tokenRewards: false,
    highlight: false,
  },
  {
    name: "PayPax (BNB)",
    fee: "0.75%",
    settlement: "Seconds",
    custody: "Non-custodial",
    hiddenFees: "None",
    accountRisk: "None",
    openProtocol: true,
    tokenRewards: true,
    highlight: true,
  },
  {
    name: "PayPax (Base/Polygon)",
    fee: "0.2%",
    settlement: "Seconds",
    custody: "Non-custodial",
    hiddenFees: "None",
    accountRisk: "None",
    openProtocol: true,
    tokenRewards: true,
    highlight: true,
  },
];

function BoolCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check
        size={16}
        className="text-mint mx-auto"
        aria-label="Yes"
      />
    ) : (
      <X size={16} className="text-coral/60 mx-auto" aria-label="No" />
    );
  }
  return <span>{value}</span>;
}

export default function Pricing() {
  const [volume, setVolume] = useState(10000);

  const coinbaseMonthly = volume * 0.01;
  const paypaxMonthly = volume * 0.002; // Base/Polygon rate
  const savings = coinbaseMonthly - paypaxMonthly;

  return (
    <section
      id="pricing"
      className="section-padding bg-deep-sea relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal-deep/6 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="section-label">Pricing</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black text-snow"
            >
              Pay Less. Keep More.{" "}
              <span className="text-gradient-teal">No Surprises.</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Comparison table */}
        <AnimateOnScroll delay={0.15}>
          <div className="overflow-x-auto mb-12 rounded-lg" style={{ border: "1px solid var(--border)" }}>
            <table className="w-full text-sm" aria-label="Payment gateway fee comparison">
              <thead>
                <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                  <th className="text-left px-4 py-4 text-pewter font-medium min-w-[160px]">
                    Gateway
                  </th>
                  <th className="text-center px-4 py-4 text-pewter font-medium">
                    Fee
                  </th>
                  <th className="text-center px-4 py-4 text-pewter font-medium">
                    Settlement
                  </th>
                  <th className="text-center px-4 py-4 text-pewter font-medium">
                    Custody
                  </th>
                  <th className="text-center px-4 py-4 text-pewter font-medium">
                    Hidden Fees
                  </th>
                  <th className="text-center px-4 py-4 text-pewter font-medium">
                    Account Risk
                  </th>
                  <th className="text-center px-4 py-4 text-pewter font-medium">
                    Open Protocol
                  </th>
                  <th className="text-center px-4 py-4 text-pewter font-medium">
                    Token Rewards
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr
                    key={c.name}
                    className={`border-b ${
                      c.highlight ? "bg-teal-bright/[0.04]" : i % 2 === 0 ? "" : ""
                    }`}
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: c.highlight
                        ? "rgba(var(--accent-rgb), 0.04)"
                        : "transparent",
                    }}
                  >
                    <td
                      className={`px-4 py-4 font-semibold ${
                        c.highlight ? "text-snow" : "text-silver-mist"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {c.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-bright flex-shrink-0" />
                        )}
                        {c.name}
                      </span>
                    </td>
                    <td
                      className={`text-center px-4 py-4 font-mono font-bold ${
                        c.highlight ? "text-teal-bright" : "text-silver-mist"
                      }`}
                    >
                      {c.fee}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${
                        c.highlight ? "text-mint" : "text-silver-mist"
                      }`}
                    >
                      {c.settlement}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${
                        c.highlight ? "text-mint" : "text-coral/80"
                      }`}
                    >
                      {c.custody}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${
                        c.hiddenFees === "None"
                          ? "text-mint"
                          : "text-silver-mist"
                      }`}
                    >
                      {c.hiddenFees}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${
                        c.accountRisk === "None" ? "text-mint" : "text-coral/80"
                      }`}
                    >
                      {c.accountRisk}
                    </td>
                    <td className="text-center px-4 py-4">
                      <BoolCell value={c.openProtocol} />
                    </td>
                    <td className="text-center px-4 py-4">
                      <BoolCell value={c.tokenRewards} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>

        {/* Fee calculator */}
        <AnimateOnScroll delay={0.2}>
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-snow mb-6">
              Fee Calculator
            </h3>
            <div className="mb-8">
              <label
                htmlFor="volume-slider"
                className="flex items-center justify-between mb-3"
              >
                <span className="text-sm text-silver-mist">
                  Monthly payment volume
                </span>
                <span className="text-xl font-black font-mono text-snow">
                  ${volume.toLocaleString()}
                </span>
              </label>
              <input
                id="volume-slider"
                type="range"
                min={1000}
                max={500000}
                step={1000}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-teal-bright"
                style={{ backgroundColor: "var(--border-strong)" }}
                aria-label={`Monthly payment volume: $${volume.toLocaleString()}`}
              />
              <div className="flex justify-between text-xs text-pewter mt-1">
                <span>$1,000</span>
                <span>$500,000</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-coral/5 border border-coral/20 rounded-lg p-4 text-center">
                <p className="text-xs text-coral uppercase tracking-widest mb-2">
                  Coinbase Commerce
                </p>
                <p className="text-2xl font-black font-mono text-coral">
                  ${coinbaseMonthly.toLocaleString()}
                </p>
                <p className="text-xs text-pewter mt-1">per month in fees</p>
              </div>
              <div className="bg-teal-bright/5 border border-teal-bright/20 rounded-lg p-4 text-center">
                <p className="text-xs text-teal-bright uppercase tracking-widest mb-2">
                  PayPax (Base/Polygon)
                </p>
                <p className="text-2xl font-black font-mono text-teal-bright">
                  ${paypaxMonthly.toLocaleString()}
                </p>
                <p className="text-xs text-pewter mt-1">per month in fees</p>
              </div>
            </div>
            {savings > 0 && (
              <div className="mt-4 p-3 rounded-lg bg-mint/5 border border-mint/20 text-center">
                <p className="text-sm text-mint font-semibold">
                  You&apos;d save{" "}
                  <span className="text-xl font-black font-mono">
                    ${savings.toLocaleString()}
                  </span>{" "}
                  per month with PayPax
                </p>
              </div>
            )}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.25}>
          <p className="text-center text-xs text-pewter mt-8 max-w-xl mx-auto">
            Fee is capped at $100 max per transaction. Non-custodial means your
            funds are never held by PayPax or any third party — ever.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
