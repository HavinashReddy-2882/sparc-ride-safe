import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import VideoShowcase from "@/components/VideoShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MarketOpportunity from "@/components/MarketOpportunity";
import CustomerSegments from "@/components/CustomerSegments";
import SDGImpact from "@/components/SDGImpact";
import Pricing from "@/components/Pricing";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import helmetBlueprint from "@/assets/helmet-blueprint.png";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate from -15deg to 15deg over the page scroll
  const rotation = -15 + (scrollY / (document.body.scrollHeight - window.innerHeight || 1)) * 30;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed helmet blueprint background with scroll rotation */}
      <div
        className="fixed inset-0 z-0 opacity-[0.07] dark:opacity-[0.07] pointer-events-none flex items-center justify-center"
      >
        <img
          src={helmetBlueprint}
          alt=""
          className="w-[80vw] max-w-3xl transition-transform duration-100 ease-out"
          style={{
            transform: `rotate(${rotation}deg) scale(1.2)`,
          }}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProblemStatement />
        <VideoShowcase />
        <Features />
        <HowItWorks />
        <MarketOpportunity />
        <CustomerSegments />
        <SDGImpact />
        <Pricing />
        <WaitlistCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
