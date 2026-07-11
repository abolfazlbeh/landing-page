import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroAndReel from "@/components/sections/HeroAndReel";

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
        {/* Act 1 + Act 2 — unified hero → reel scroll sequence */}
        <HeroAndReel />
        {/* Act 3 — TapToPay               → coming next */}
        {/* Act 4 — StatementBreak         → coming next */}
        {/* Act 5 — PersonalFeatures       → coming next */}
        {/* Act 6 — PersonalClose          → coming next */}
      </main>
      <Footer />
    </>
  );
}
