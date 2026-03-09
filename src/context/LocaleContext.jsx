import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { languageRegionOptions } from "../data/languageRegionOptions";
import { translations } from "../data/translations";

const STORAGE_KEY = "coinbase_clone_locale_id";
const DEFAULT_LOCALE_ID = "en-global";

const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const [selectedLocaleId, setSelectedLocaleId] = useState(DEFAULT_LOCALE_ID);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const exists = languageRegionOptions.some((option) => option.id === saved);
    if (exists) setSelectedLocaleId(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, selectedLocaleId);
  }, [selectedLocaleId]);

  const selectedLocale =
    languageRegionOptions.find((option) => option.id === selectedLocaleId) || languageRegionOptions[0];

  const filteredOptions = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) return languageRegionOptions;
    return languageRegionOptions.filter((option) => {
      return (
        option.language.toLowerCase().includes(normalized) ||
        option.region.toLowerCase().includes(normalized)
      );
    });
  }, [searchTerm]);

  const t = (key) => {
    const localeMap = translations[selectedLocale.langCode] || translations.en;
    return localeMap[key] || translations.en[key] || key;
  };

  const value = {
    selectedLocale,
    selectedLocaleId,
    setSelectedLocaleId,
    searchTerm,
    setSearchTerm,
    filteredOptions,
    t,
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
};
