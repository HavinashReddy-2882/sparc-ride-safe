import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section id="demo" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            See <span className="italic gradient-text-cyan">SPARC</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch how SPARC detects vehicles in blind spots with simple voice commands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Prototype Demo", desc: "See our AI detection module in action" },
            { title: "Use Case Scenario", desc: "Real-world blind spot detection" },
          ].map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-strong overflow-hidden group"
            >
              <div className="aspect-video relative bg-sparc-surface flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sparc-cyan/5 to-sparc-purple/5" />
                <button className="relative z-10 w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform glow-cyan">
                  <Play size={24} className="text-sparc-cyan ml-1" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-1">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
