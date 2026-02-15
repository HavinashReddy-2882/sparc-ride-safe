import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold gradient-text-cyan">SPARC</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Ride Safe. Ride Smart. Ride SPARC.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#problem" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-foreground transition-colors">Team</a></li>
              <li><a href="#waitlist" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-sparc-cyan transition-colors"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
