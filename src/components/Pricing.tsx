import { motion } from "framer-motion";
import { Check } from "lucide-react";

const perks = [
  "AI Blind-Spot Detection",
  "Voice Assistant",
  "Real-time Navigation",
  "Weather Alerts",
  "1-Year Warranty",
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Early Bird <span className="italic gradient-text-orange">Special</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto glass-strong p-10 text-center hover:glow-orange transition-all duration-500"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sparc-orange">SPARC Smart Helmet</span>
          <div className="mt-4 mb-1">
            <span className="text-5xl font-heading font-bold">₹4,999</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">Launch Price</p>

          <ul className="space-y-4 text-left mb-10">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-sparc-cyan/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-sparc-cyan" />
                </div>
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#waitlist"
            className="block w-full rounded-xl bg-sparc-orange py-4 font-semibold text-primary-foreground transition-transform hover:scale-105 glow-orange"
          >
            Reserve Now — 50% Off
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
