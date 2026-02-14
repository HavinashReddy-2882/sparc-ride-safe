import { motion } from "framer-motion";
import { Eye, Mic, Navigation, AlertTriangle, CloudSun, Smartphone } from "lucide-react";

const features = [
  { icon: Eye, title: "AI Vision", desc: "Real-time blind-spot detection using advanced computer vision algorithms" },
  { icon: Mic, title: "Voice Commands", desc: "Hands-free operation with natural language voice recognition" },
  { icon: Navigation, title: "Navigation", desc: "Integrated turn-by-turn navigation with audio guidance" },
  { icon: AlertTriangle, title: "Real-time Alerts", desc: "Instant haptic and audio warnings for detected hazards" },
  { icon: CloudSun, title: "Weather Updates", desc: "Live weather conditions and road safety advisories" },
  { icon: Smartphone, title: "Smart Connectivity", desc: "Seamless phone integration for calls and notifications" },
];

const Features = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The <span className="italic gradient-text-cyan">Smart Helmet</span> Revolution
          </h2>
          <p className="text-muted-foreground text-lg">AI-Powered Safety Features</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 hover:-translate-y-2 hover:glow-cyan transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sparc-cyan/10 flex items-center justify-center mb-4 group-hover:bg-sparc-cyan/20 transition-colors">
                <f.icon size={24} className="text-sparc-cyan" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
