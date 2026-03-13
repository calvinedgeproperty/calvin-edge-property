import { Link } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { t, convertPrice, formatPrice } from "@/lib/i18n";
import { FEATURED_HOUSES } from "@/lib/houses";
import { HouseCard } from "@/components/HouseCard";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const GLOBAL_LOCATIONS = [
  { city: "Dubai", country: "UAE", properties: "45+" },
  { city: "Shanghai", country: "China", properties: "120+" },
  { city: "London", country: "UK", properties: "35+" },
  { city: "Singapore", country: "Singapore", properties: "28+" },
  { city: "Sydney", country: "Australia", properties: "22+" },
  { city: "Jakarta", country: "Indonesia", properties: "60+" },
  { city: "Moscow", country: "Russia", properties: "18+" },
  { city: "Berlin", country: "Germany", properties: "15+" },
];

const Index = () => {
  const { language, currency } = useApp();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern modular home" className="w-full h-full object-cover opacity-15" />
        </div>

        <div className="ce-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="ce-label mb-6">Calvin Edge Property</p>
            <h1 className="ce-heading-xl text-foreground mb-6">
              {t("hero.title", language)}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              {t("hero.subtitle", language)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/configurator"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                {t("hero.cta", language)}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/listings"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                {t("hero.explore", language)}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="ce-section border-t border-border">
        <div className="ce-container">
          <div className="text-center mb-14">
            <p className="ce-label mb-3">Global Presence</p>
            <h2 className="ce-heading-lg text-foreground mb-4">The Best Properties in the World's Greatest Cities</h2>
            <p className="ce-body max-w-2xl mx-auto">
              From the gleaming towers of Dubai to the vibrant districts of Shanghai, we deliver premium modular homes across the world's most sought-after locations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-border p-5 text-center hover:border-primary transition-colors group"
              >
                <MapPin className="w-4 h-4 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <h3 className="text-sm font-semibold text-foreground">{loc.city}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{loc.country}</p>
                <p className="text-lg font-bold text-primary mt-2">{loc.properties}</p>
                <p className="ce-label">Properties</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="ce-section border-t border-border">
        <div className="ce-container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="ce-label mb-3">Featured Models</p>
              <h2 className="ce-heading-lg text-foreground">Modular Concepts</h2>
            </div>
            <Link to="/listings" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_HOUSES.map((house, i) => (
              <HouseCard key={house.id} house={house} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Configurator preview */}
      <section className="ce-section bg-secondary/50 border-t border-border">
        <div className="ce-container text-center">
          <p className="ce-label mb-3">Modular Configurator</p>
          <h2 className="ce-heading-lg text-foreground mb-4">Build Your Custom Home</h2>
          <p className="ce-body max-w-xl mx-auto mb-10">
            Select your land size, bedrooms, floors, architectural style, and material quality. Our system generates 20+ unique modular concepts instantly.
          </p>
          <Link
            to="/configurator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            {t("hero.cta", language)}
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border">
            {[
              { value: `${formatPrice(convertPrice(62000, currency), currency)}`, label: "Starting Price" },
              { value: "24+", label: "Concepts Generated" },
              { value: "8+", label: "Countries" },
              { value: "3–14", label: "Months Build Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="ce-label mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
