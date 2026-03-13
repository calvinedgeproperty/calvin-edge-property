import { useApp } from "@/contexts/AppContext";
import { t } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const FAQS = [
  {
    q: "What is modular housing?",
    a: "Modular housing involves building home sections (modules) in a controlled factory environment, then assembling them on-site. This approach is faster, more precise, and often more cost-effective than traditional construction.",
  },
  {
    q: "How long does it take to build a modular home?",
    a: "Build times vary based on size and complexity, typically ranging from 3 to 14 months. Our configurator provides estimated timelines for each design.",
  },
  {
    q: "Can I customize my modular home?",
    a: "Absolutely. Our configurator allows you to select land size, bedrooms, floors, architectural style, and material quality. Each configuration generates unique concept designs tailored to your specifications.",
  },
  {
    q: "Do you deliver internationally?",
    a: "Yes. Calvin Edge Property serves clients globally. Shipping and logistics are coordinated from our Shanghai headquarters. Contact us for details on international delivery.",
  },
  {
    q: "What currencies do you support?",
    a: "We support USD, IDR (Indonesian Rupiah), CNY (Chinese Yuan), GBP (British Pound), EUR (Euro), and RUB (Russian Ruble). Prices update dynamically on our website.",
  },
];

const Support = () => {
  const { language } = useApp();

  return (
    <div>
      <section className="ce-section border-b border-border">
        <div className="ce-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="ce-label mb-3">{t("support.title", language)}</p>
            <h1 className="ce-heading-lg text-foreground mb-4">{t("support.subtitle", language)}</h1>
            <p className="ce-body max-w-2xl">Get in touch with our team for any questions about our modular housing solutions, pricing, or delivery.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact info */}
      <section className="ce-section">
        <div className="ce-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Mail,
                title: t("support.email", language),
                detail: "customerservice@calvinedgeproperty.com",
              },
              {
                icon: MapPin,
                title: t("support.address", language),
                detail: "288 Century Avenue, Pudong New Area, Shanghai 200120, China",
              },
              {
                icon: Phone,
                title: "Call Us",
                detail: "+86 21 5888 0000",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border p-6">
                <item.icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div>
            <p className="ce-label mb-3">{t("support.faq", language)}</p>
            <h2 className="ce-heading-md text-foreground mb-8">Frequently Asked Questions</h2>

            <div className="space-y-0 border-t border-border">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group border-b border-border">
                  <summary className="flex items-center justify-between py-5 cursor-pointer text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {faq.q}
                    <span className="ml-4 text-muted-foreground group-open:rotate-45 transition-transform text-lg">+</span>
                  </summary>
                  <p className="pb-5 text-sm text-muted-foreground leading-relaxed pr-8">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
