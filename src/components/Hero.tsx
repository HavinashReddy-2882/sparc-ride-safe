import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import heroHelmet from "@/assets/hero-helmet.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sparc-cyan/10 blur-[120px] animate-pulse_glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-sparc-purple/10 blur-[120px] animate-pulse_glow" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">System Status: Active Detection</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-balance"
          >
            Building India's Safest{" "}
            <span className="italic gradient-text-cyan">Riding</span>{" "}
            Experience
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            SPARC is revolutionizing motorcycle safety with AI-powered blind-spot detection
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sparc-orange px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105 glow-orange"
            >
              Join Waitlist
              <ChevronRight size={18} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-foreground transition-all hover:bg-white/5"
            >
              <Play size={18} />
              Watch Demo
            </a>
          </motion.div>

          {/* Floating helmet image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <div className="animate-float-slow">
              <img
                src={heroHelmet}
                alt="SPARC AI-Powered Smart Helmet with holographic HUD display"
                className="w-full max-w-2xl rounded-3xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
