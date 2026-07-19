import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ImpactCarousel from "@/components/sections/ImpactCarousel";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import ForMerchants from "@/components/sections/ForMerchants";
import ForDevelopers from "@/components/sections/ForDevelopers";
import MultiChain from "@/components/sections/MultiChain";
import Security from "@/components/sections/Security";
import WalletSection from "@/components/sections/WalletSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "PayPax for Business — Accept Crypto Payments. No Middlemen.",
  description:
    "PayPax is the open payment gateway for merchants. Accept stablecoins with fees under 1%, instant settlement, and no chargebacks. Powered by WPGP.",
};

export default function BusinessPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <ImpactCarousel />
        <HowItWorks />
        <Pricing />
        <ForMerchants />
        <ForDevelopers />
        <MultiChain />
        <Security />
        <WalletSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
