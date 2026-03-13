import { Link } from "react-router-dom";
import { LogoFull } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="ce-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <LogoFull />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Modern modular homes designed for contemporary living. Founded 2018, Shanghai, China.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-foreground">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-foreground">Products</h4>
            <div className="flex flex-col gap-2">
              <Link to="/configurator" className="text-sm text-muted-foreground hover:text-primary transition-colors">Configurator</Link>
              <Link to="/listings" className="text-sm text-muted-foreground hover:text-primary transition-colors">Listings</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>customerservice@calvinedgeproperty.com</span>
              <span>288 Century Avenue</span>
              <span>Pudong New Area, Shanghai 200120</span>
              <span>China</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Calvin Edge Property. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Designed for the future of living.</p>
        </div>
      </div>
    </footer>
  );
};
