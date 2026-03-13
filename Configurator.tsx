import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { t, convertPrice, formatPrice } from "@/lib/i18n";
import { generateConcepts, HouseModel } from "@/lib/houses";
import { HouseCard } from "@/components/HouseCard";
import { motion } from "framer-motion";

const STYLES = ["Minimalist", "Contemporary", "Industrial", "Scandinavian", "Japanese"];
const MATERIALS = ["Standard", "Premium", "Luxury"];
const LAND_SIZES = [100, 150, 200, 250, 300, 400, 500];

const Configurator = () => {
  const { language, currency } = useApp();
  const [landSize, setLandSize] = useState(200);
  const [bedrooms, setBedrooms] = useState(3);
  const [floors, setFloors] = useState(2);
  const [style, setStyle] = useState("Minimalist");
  const [material, setMaterial] = useState("Premium");
  const [results, setResults] = useState<HouseModel[]>([]);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const concepts = generateConcepts({ landSize, bedrooms, floors, style, material });
    setResults(concepts);
    setGenerated(true);
  };

  const OptionButton = ({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 text-sm font-medium border transition-colors ${
        selected
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-background text-foreground border-border hover:border-foreground"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div>
      {/* Config panel */}
      <section className="ce-section border-b border-border">
        <div className="ce-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="ce-label mb-3">{t("config.title", language)}</p>
            <h1 className="ce-heading-lg text-foreground mb-2">{t("config.subtitle", language)}</h1>
            <p className="ce-body mb-12">Configure your preferences below and generate unique modular concepts.</p>

            <div className="grid gap-10">
              {/* Land Size */}
              <div>
                <label className="ce-label mb-3 block">{t("config.land", language)} (m²)</label>
                <div className="flex flex-wrap gap-2">
                  {LAND_SIZES.map((s) => (
                    <OptionButton key={s} selected={landSize === s} onClick={() => setLandSize(s)}>
                      {s} m²
                    </OptionButton>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="ce-label mb-3 block">{t("config.bedrooms", language)}</label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6].map((b) => (
                    <OptionButton key={b} selected={bedrooms === b} onClick={() => setBedrooms(b)}>
                      {b}
                    </OptionButton>
                  ))}
                </div>
              </div>

              {/* Floors */}
              <div>
                <label className="ce-label mb-3 block">{t("config.floors", language)}</label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((f) => (
                    <OptionButton key={f} selected={floors === f} onClick={() => setFloors(f)}>
                      {f}
                    </OptionButton>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div>
                <label className="ce-label mb-3 block">{t("config.style", language)}</label>
                <div className="flex flex-wrap gap-2">
                  {STYLES.map((s) => (
                    <OptionButton key={s} selected={style === s} onClick={() => setStyle(s)}>
                      {s}
                    </OptionButton>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <label className="ce-label mb-3 block">{t("config.material", language)}</label>
                <div className="flex flex-wrap gap-2">
                  {MATERIALS.map((m) => (
                    <OptionButton key={m} selected={material === m} onClick={() => setMaterial(m)}>
                      {m}
                    </OptionButton>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                className="self-start bg-primary text-primary-foreground px-10 py-3.5 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                {t("config.generate", language)}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      {generated && (
        <section className="ce-section">
          <div className="ce-container">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="ce-label mb-2">{t("config.results", language)}</p>
                <h2 className="ce-heading-md text-foreground">{results.length} Concepts Generated</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {results.map((house, i) => (
                <HouseCard key={house.id} house={house} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Configurator;
