import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import ForMerchants from "@/components/sections/ForMerchants";
import ForDevelopers from "@/components/sections/ForDevelopers";
import MultiChain from "@/components/sections/MultiChain";
import Security from "@/components/sections/Security";
import WalletSection from "@/components/sections/WalletSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Problem />
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
