import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import VideoShowcase from "@/components/VideoShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TechSpecs from "@/components/TechSpecs";
import MarketOpportunity from "@/components/MarketOpportunity";
import CustomerSegments from "@/components/CustomerSegments";
import SDGImpact from "@/components/SDGImpact";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
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
      <TechSpecs />
      <MarketOpportunity />
      <CustomerSegments />
      <SDGImpact />
      <Pricing />
      <Team />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default Index;
