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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
