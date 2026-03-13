import { Link, useLocation } from "react-router-dom";
import { LogoFull } from "./Logo";
import { useApp } from "@/contexts/AppContext";
import { LANGUAGES, CURRENCIES, Language, Currency } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const { language, currency, setLanguage, setCurrency } = useApp();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: t("nav.home", language) },
    { to: "/configurator", label: t("nav.configurator", language) },
    { to: "/listings", label: t("nav.listings", language) },
    { to: "/about", label: t("nav.about", language) },
    { to: "/careers", label: t("nav.careers", language) },
    { to: "/support", label: t("nav.support", language) },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="ce-container flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0">
          <LogoFull />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop controls */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative group">
            <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1">
              {LANGUAGES.find((l) => l.code === language)?.nativeLabel}
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 bg-background border border-border rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px]">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code as Language)}
                  className={`block w-full text-left px-3 py-2 text-xs hover:bg-secondary transition-colors ${
                    language === l.code ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {l.nativeLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="w-px h-4 bg-border" />

          <div className="relative group">
            <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1">
              {currency}
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 bg-background border border-border rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[160px]">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code as Currency)}
                  className={`block w-full text-left px-3 py-2 text-xs hover:bg-secondary transition-colors ${
                    currency === c.code ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {c.symbol} {c.code} — {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="ce-container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-1 ${
                  isActive(item.to) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3 border-t border-border">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="text-xs bg-secondary px-2 py-1 rounded-sm border-0 text-foreground"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>{l.nativeLabel}</option>
                ))}
              </select>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="text-xs bg-secondary px-2 py-1 rounded-sm border-0 text-foreground"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
