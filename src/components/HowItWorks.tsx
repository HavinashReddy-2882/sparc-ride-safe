import { motion } from "framer-motion";
import { Brain, Bell, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Brain, num: "01", title: "AI Detection", desc: "Computer vision analyzes surroundings in real-time" },
  { icon: Bell, num: "02", title: "Alert System", desc: "Instant audio and haptic feedback warns the rider" },
  { icon: ShieldCheck, num: "03", title: "Safe Riding", desc: "Rider makes informed decisions with full awareness" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Simple. <span className="italic gradient-text-purple">Intelligent.</span> Life-Saving.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-sparc-cyan/40 to-transparent" />
              )}
              <div className="text-5xl font-heading font-bold gradient-text-cyan opacity-30 mb-4">
                {step.num}
              </div>
              <div className="w-16 h-16 mx-auto rounded-2xl glass flex items-center justify-center mb-4 glow-cyan">
                <step.icon size={28} className="text-sparc-cyan" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
