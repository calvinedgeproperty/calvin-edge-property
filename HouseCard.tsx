import { HouseModel } from "@/lib/houses";
import { convertPrice, formatPrice } from "@/lib/i18n";
import { useApp } from "@/contexts/AppContext";
import { t } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const HouseCard = ({ house, index = 0 }: { house: HouseModel; index?: number }) => {
  const { currency, language } = useApp();
  const price = convertPrice(house.priceUSD, currency);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group border border-border bg-card overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
        <img
          src={house.imageUrl}
          alt={house.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {house.location && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 text-[10px] font-medium text-foreground">
            <MapPin className="w-3 h-3 text-primary" />
            {house.location}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">{house.name}</h3>
            <p className="ce-label mt-0.5">{house.style}</p>
          </div>
          <span className="text-sm font-bold text-primary">{formatPrice(price, currency)}</span>
        </div>

        <div className="grid grid-cols-3 gap-3 py-3 border-t border-border">
          <div>
            <p className="ce-label">{t("config.area", language)}</p>
            <p className="text-sm font-medium mt-0.5">{house.floorArea} {t("common.sqm", language)}</p>
          </div>
          <div>
            <p className="ce-label">{t("listings.beds", language)}</p>
            <p className="text-sm font-medium mt-0.5">{house.bedrooms}</p>
          </div>
          <div>
            <p className="ce-label">{t("config.time", language)}</p>
            <p className="text-sm font-medium mt-0.5">{house.buildTimeMonths} {t("common.months", language)}</p>
          </div>
        </div>

        <Link
          to={`/listings/${house.id}`}
          className="block mt-3 text-center text-xs font-semibold uppercase tracking-widest py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {t("common.viewDetails", language)}
        </Link>
      </div>
    </motion.div>
  );
};
