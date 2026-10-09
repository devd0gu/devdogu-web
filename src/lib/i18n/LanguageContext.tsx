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
      return;
    }

    // First check browser language as immediate synchronous hint
    const browserLang = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
    if (browserLang.startsWith('tr')) {
      setLocaleState('tr');
    }

    // Then refine with server-side IP/geo header detection
    fetch('/api/geo')
      .then((res) => res.json())
      .then((data) => {
        if (!localStorage.getItem('devdogu_locale') && data?.locale) {
          setLocaleState(data.locale);
        }
      })
      .catch(() => {
        // Fallback already handled by browserLang
      });
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
