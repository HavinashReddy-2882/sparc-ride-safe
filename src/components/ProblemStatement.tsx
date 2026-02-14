import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 1.35, suffix: " Cr", label: "Annual Accidents", decimals: 2 },
  { value: 65, suffix: "%", label: "Blind-Spot Related", decimals: 0 },
  { value: 3000, suffix: "+", label: "Lives Lost Daily", decimals: 0 },
];

const ProblemStatement = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="problem" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The <span className="italic gradient-text-purple">Blind Spot</span> Crisis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Regular motorcycle helmets create dangerous blind spots during U-turns, lane changes, and overtaking — leading to thousands of preventable accidents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-strong p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold gradient-text-cyan mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
