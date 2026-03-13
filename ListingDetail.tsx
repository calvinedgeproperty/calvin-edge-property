import { useParams, Link } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { t, convertPrice, formatPrice } from "@/lib/i18n";
import { LISTING_HOUSES } from "@/lib/houses";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ListingDetail = () => {
  const { id } = useParams();
  const { language, currency } = useApp();
  const house = LISTING_HOUSES.find((h) => h.id === id);

  if (!house) {
    return (
      <div className="ce-section ce-container text-center">
        <p className="text-6xl font-bold text-foreground mb-4">404</p>
        <p className="ce-body mb-6">This property listing could not be found.</p>
        <Link
          to="/listings"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Listings
        </Link>
      </div>
    );
  }

  const price = convertPrice(house.priceUSD, currency);

  return (
    <section className="ce-section">
      <div className="ce-container">
        <Link to="/listings" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Listings
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
            <img src={house.imageUrl} alt={house.name} className="w-full h-full object-cover" />
            {house.location && (
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {house.location}
              </div>
            )}
          </div>

          <div>
            <p className="ce-label mb-2">{house.style}</p>
            <h1 className="ce-heading-lg text-foreground mb-2">{house.name}</h1>
            <p className="text-2xl font-bold text-primary mb-6">{formatPrice(price, currency)}</p>
            <p className="ce-body mb-8">{house.description}</p>

            <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-border">
              {[
                { label: t("config.area", language), value: `${house.floorArea} ${t("common.sqm", language)}` },
                { label: t("config.land", language), value: `${house.landSize} ${t("common.sqm", language)}` },
                { label: t("listings.beds", language), value: house.bedrooms },
                { label: t("listings.baths", language), value: house.bathrooms },
                { label: t("config.floors", language), value: house.floors },
                { label: t("config.time", language), value: `${house.buildTimeMonths} ${t("common.months", language)}` },
                { label: "Modules", value: house.modules },
                { label: t("config.material", language), value: house.materialGrade },
              ].map((item) => (
                <div key={item.label}>
                  <p className="ce-label">{item.label}</p>
                  <p className="text-sm font-semibold mt-1 text-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity">
                Request Quote
              </button>
              <Link
                to="/configurator"
                className="block w-full text-center border border-border py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Customize This Design
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListingDetail;
