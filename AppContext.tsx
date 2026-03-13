import { createContext, useContext, useState, ReactNode } from "react";
import { Language, Currency } from "@/lib/i18n";

interface AppState {
  language: Language;
  currency: Currency;
  setLanguage: (l: Language) => void;
  setCurrency: (c: Currency) => void;
}

const AppContext = createContext<AppState>({
  language: "en",
  currency: "USD",
  setLanguage: () => {},
  setCurrency: () => {},
});

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <AppContext.Provider value={{ language, currency, setLanguage, setCurrency }}>
      {children}
    </AppContext.Provider>
  );
};
