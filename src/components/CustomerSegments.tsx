import { motion } from "framer-motion";
import { Bike, Package, Map, Zap } from "lucide-react";

const segments = [
  { icon: Bike, title: "Daily Commuters", desc: "Everyday riders navigating city traffic" },
  { icon: Package, title: "Delivery Partners", desc: "Zomato, Swiggy & e-commerce riders" },
  { icon: Map, title: "Bike Tourers", desc: "Long-distance and adventure riders" },
  { icon: Zap, title: "Rapido Captains", desc: "Ride-sharing and taxi bike operators" },
];

const CustomerSegments = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Built for <span className="italic gradient-text-cyan">Every</span> Rider
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-sparc-purple/10 flex items-center justify-center mb-4">
                <seg.icon size={28} className="text-sparc-purple" />
              </div>
              <h3 className="font-heading font-semibold mb-1">{seg.title}</h3>
              <p className="text-xs text-muted-foreground">{seg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
