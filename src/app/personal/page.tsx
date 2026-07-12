import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroAndReel from "@/components/sections/HeroAndReel";
import TapToPay from "@/components/sections/TapToPay";
import StatementBreak from "@/components/sections/StatementBreak";
import PersonalFeaturesBento from "@/components/sections/PersonalFeaturesBento";
import PersonalClose from "@/components/sections/PersonalClose";

export const metadata = {
  title: "PayPax Wallet — Pay Anywhere. Zero Gas. Full Custody.",
  description:
    "Pay crypto merchants in seconds with PayPax Wallet. No gas fees, no complexity. USDC and USDT straight from your wallet — your keys, always yours.",
};

export default function PersonalPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Act 1 + 2 — hero → life reel */}
        <HeroAndReel />
        {/* Act 3 — scroll-scrubbed payment moment */}
        <TapToPay />
        {/* Act 4 — cinematic statement break */}
        <StatementBreak />
        {/* Act 5 — felt-benefit feature bento grid */}
        <PersonalFeaturesBento />
        {/* Act 6 — emotional close + counters + CTAs */}
        <PersonalClose />
      </main>
      <Footer />
    </>
  );
}
