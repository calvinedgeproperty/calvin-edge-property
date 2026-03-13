import { useApp } from "@/contexts/AppContext";
import { t } from "@/lib/i18n";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

const About = () => {
  const { language } = useApp();

  return (
    <div>
      {/* Hero */}
      <section className="ce-section border-b border-border">
        <div className="ce-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="ce-label mb-3">{t("about.title", language)}</p>
            <h1 className="ce-heading-lg text-foreground mb-4">{t("about.mission", language)}</h1>
            <p className="ce-body max-w-2xl">{t("about.founded", language)}</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="ce-section">
        <div className="ce-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="ce-label mb-3">Our Story</p>
              <h2 className="ce-heading-md text-foreground mb-6">Modular Innovation Since 2018</h2>
              <div className="space-y-4 ce-body">
                <p>Calvin Edge Property was founded in 2018 in Shanghai, China, with a clear mission: to revolutionize how people build and live in homes through modular construction technology.</p>
                <p>Our modular housing systems combine precision engineering with architectural design excellence, creating homes that are faster to build, more sustainable, and fully customizable to individual needs.</p>
                <p>From our headquarters at 288 Century Avenue in Pudong New Area, we serve clients across global markets, delivering modular solutions that range from compact studios to expansive multi-floor residences.</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-48 h-48 border border-border flex items-center justify-center">
                <Logo size={96} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="ce-section border-t border-border bg-secondary/30">
        <div className="ce-container">
          <div className="max-w-2xl">
            <p className="ce-label mb-3">{t("about.founder", language)}</p>
            <h2 className="ce-heading-md text-foreground mb-6">Juan Huang</h2>
            <div className="space-y-4 ce-body">
              <p>Juan Huang is the founder and visionary behind Calvin Edge Property. A graduate of Business Administration from Hong Kong University, Juan brings a unique blend of business acumen and forward-thinking innovation to the modular housing industry.</p>
              <p>In 2018, Juan founded Calvin Edge Property with the vision of creating modern modular housing systems that are efficient, customizable, and accessible for global markets. Under Juan's leadership, the company has grown from a Shanghai-based startup into a recognized name in modular construction technology.</p>
              <p>Juan's approach combines cutting-edge manufacturing processes with architectural design principles, ensuring every Calvin Edge home meets the highest standards of quality and livability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ce-section border-t border-border">
        <div className="ce-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2018", label: "Year Founded" },
              { value: "5+", label: "Countries Served" },
              { value: "200+", label: "Homes Delivered" },
              { value: "50+", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="ce-label mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
