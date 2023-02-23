import { createContext, useEffect, useState } from "react";
import en from "../lang/en.json";
import es from "../lang/es.json";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

const messages: Record<string, Record<string, string>> = {
  en,
  es,
};
const DEFAULT_LOCALE = "en";
export const LangContext = createContext({
  currentLang: DEFAULT_LOCALE,
  changeLang: (locale: string) => {},
});

interface I18nWrapperProps {
  children: React.ReactNode;
}

export default function I18nWrapper({ children }: I18nWrapperProps) {
  const [currentLang, setCurrentLang] = useState(DEFAULT_LOCALE);
  const changeLang = (locale: string) => {
    setCurrentLang(locale);
  };
  useEffect(() => {
    if (navigator.language) {
      setCurrentLang(navigator?.language.split("-")[0] || DEFAULT_LOCALE);
    }
  }, []);
  return (
    <LangContext.Provider value={{ currentLang, changeLang }}>
      <IntlProvider
        locale={currentLang}
        messages={messages[currentLang]}
        key={currentLang}
        defaultLocale={DEFAULT_LOCALE}
      >
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
}
