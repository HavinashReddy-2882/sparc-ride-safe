import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { id: "2300080213", name: "Member 1" },
  { id: "2300080223", name: "Member 2" },
  { id: "2300080081", name: "Member 3" },
  { id: "2300080267", name: "Member 4" },
  { id: "2300080338", name: "Member 5" },
];

const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Meet the <span className="italic gradient-text-purple">Innovators</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-sparc-cyan/30 to-sparc-purple/30 flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-lg">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">{member.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">ID: {member.id}</p>
              <button className="text-muted-foreground hover:text-sparc-cyan transition-colors">
                <Linkedin size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
