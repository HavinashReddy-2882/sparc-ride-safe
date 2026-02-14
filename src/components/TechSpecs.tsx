import { motion } from "framer-motion";
import { Cpu, Camera, Speaker, Mic, Wifi, RefreshCw } from "lucide-react";

const leftSpecs = [
  { icon: Cpu, label: "ESP32 CAM Module" },
  { icon: Cpu, label: "Raspberry Pi Controller" },
  { icon: Camera, label: "HD Camera System" },
  { icon: Speaker, label: "Integrated Speakers" },
  { icon: Mic, label: "Noise-canceling Mic" },
];

const rightSpecs = [
  { icon: Cpu, label: "AI Object Detection" },
  { icon: Mic, label: "Voice Recognition" },
  { icon: RefreshCw, label: "Real-time Processing" },
  { icon: Wifi, label: "Cloud Connectivity" },
  { icon: RefreshCw, label: "OTA Updates" },
];

const TechSpecs = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Powered by <span className="italic gradient-text-cyan">Advanced</span> Technology
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[leftSpecs, rightSpecs].map((specs, col) => (
            <motion.div
              key={col}
              initial={{ opacity: 0, x: col === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong p-8 space-y-5"
            >
              <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
                {col === 0 ? "Hardware" : "Software"}
              </h3>
              {specs.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sparc-cyan/10 flex items-center justify-center shrink-0">
                    <s.icon size={18} className="text-sparc-cyan" />
                  </div>
                  <span className="text-sm">{s.label}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
