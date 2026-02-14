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
  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed helmet blueprint background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url(${helmetBlueprint})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
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
