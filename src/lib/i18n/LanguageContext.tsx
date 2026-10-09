'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, Translations, dictionaries } from './dictionary';

interface LanguageContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: dictionaries.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('devdogu_locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'tr')) {
      setLocaleState(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('tr')) {
        setLocaleState('tr');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('devdogu_locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
