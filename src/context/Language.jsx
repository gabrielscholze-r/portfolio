import { createContext, useState, useContext, useEffect } from "react";
import Cookie from "js-cookie";
import strings from "../i18n/strings.js";

const LanguageContext = createContext(undefined);

const SUPPORTED = ["en", "pt"];

// a saved choice wins; otherwise the first supported language in the browser's
// preference list (which usually follows the system language)
function detectLanguage() {
  const saved = Cookie.get("lang");
  if (SUPPORTED.includes(saved)) return saved;

  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const pref of prefs) {
    const base = pref?.toLowerCase().split("-")[0];
    if (SUPPORTED.includes(base)) return base;
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
  }, [lang]);

  const setLang = (newLang) => {
    if (!SUPPORTED.includes(newLang)) return;
    setLangState(newLang);
    Cookie.set("lang", newLang, { expires: 365 });
  };

  const t = (key) => strings[lang][key] ?? strings.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
