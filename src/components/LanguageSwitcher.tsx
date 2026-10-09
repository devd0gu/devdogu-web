'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-0.5 text-xs font-mono">
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2 py-0.5 rounded transition-all ${
          locale === 'en'
            ? 'bg-[var(--accent-clay)] text-white font-bold'
            : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('tr')}
        className={`px-2 py-0.5 rounded transition-all ${
          locale === 'tr'
            ? 'bg-[var(--accent-clay)] text-white font-bold'
            : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
        }`}
        aria-label="Türkçe"
      >
        TR
      </button>
    </div>
  );
}
