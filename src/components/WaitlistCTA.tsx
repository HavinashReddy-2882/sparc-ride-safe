import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const WaitlistCTA = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", riderType: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-sparc-orange/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-sparc-cyan/10 blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Ready to Ride <span className="italic gradient-text-orange">Safer</span>?
          </h2>
          <p className="text-muted-foreground text-lg">Join 5,000+ riders on our waitlist</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto glass-strong p-8"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-heading font-semibold text-xl mb-2">You're on the list!</h3>
              <p className="text-muted-foreground text-sm">We'll notify you when SPARC launches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl bg-muted/50 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sparc-cyan/50"
              />
              <input
                type="email"
                required
                maxLength={255}
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl bg-muted/50 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sparc-cyan/50"
              />
              <input
                type="tel"
                maxLength={15}
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl bg-muted/50 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sparc-cyan/50"
              />
              <select
                value={form.riderType}
                onChange={(e) => setForm({ ...form, riderType: e.target.value })}
                className="w-full rounded-xl bg-muted/50 border border-white/10 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sparc-cyan/50"
              >
                <option value="" className="bg-background">Select Rider Type</option>
                <option value="commuter" className="bg-background">Daily Commuter</option>
                <option value="delivery" className="bg-background">Delivery Partner</option>
                <option value="tourer" className="bg-background">Bike Tourer</option>
                <option value="rideshare" className="bg-background">Ride-share Captain</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-xl bg-sparc-orange py-4 font-semibold text-primary-foreground flex items-center justify-center gap-2 transition-transform hover:scale-105 glow-orange"
              >
                Join the Revolution
                <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
