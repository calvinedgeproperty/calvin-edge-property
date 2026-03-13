import { useApp } from "@/contexts/AppContext";
import { t } from "@/lib/i18n";
import { LISTING_HOUSES } from "@/lib/houses";
import { HouseCard } from "@/components/HouseCard";
import { motion } from "framer-motion";

const Listings = () => {
  const { language } = useApp();

  return (
    <section className="ce-section">
      <div className="ce-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="ce-label mb-3">{t("listings.title", language)}</p>
          <h1 className="ce-heading-lg text-foreground">{t("listings.subtitle", language)}</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LISTING_HOUSES.map((house, i) => (
            <HouseCard key={house.id} house={house} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
