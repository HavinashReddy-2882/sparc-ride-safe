import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { prefix: "USD ", value: 786.8, suffix: "M", label: "Market Size by 2030", decimals: 1 },
  { prefix: "", value: 6.8, suffix: "% CAGR", label: "Growth Rate (2022-2030)", decimals: 1 },
  { prefix: "", value: 45, suffix: "M+", label: "Target Riders in India", decimals: 0 },
];

const MarketOpportunity = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The <span className="italic gradient-text-purple">Future</span> of Rider Safety
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text-orange mb-2">
                {inView ? (
                  <CountUp
                    prefix={stat.prefix}
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2.5}
                  />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
