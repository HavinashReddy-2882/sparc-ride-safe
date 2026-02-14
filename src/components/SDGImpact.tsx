import { motion } from "framer-motion";
import { Heart, Lightbulb } from "lucide-react";

const sdgs = [
  { icon: Heart, num: "SDG 3", title: "Good Health & Well-being", desc: "Reducing road traffic deaths and injuries through preventive technology" },
  { icon: Lightbulb, num: "SDG 9", title: "Industry, Innovation & Infrastructure", desc: "Promoting inclusive and sustainable industrialization through innovation" },
];

const SDGImpact = () => {
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
            Committed to <span className="italic gradient-text-purple">Sustainable</span> Development
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            SPARC contributes to reducing road traffic accidents and promoting innovative safety technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-green-500/10 flex items-center justify-center mb-4">
                <sdg.icon size={28} className="text-green-400" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-2 block">{sdg.num}</span>
              <h3 className="font-heading font-semibold text-lg mb-2">{sdg.title}</h3>
              <p className="text-sm text-muted-foreground">{sdg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGImpact;
