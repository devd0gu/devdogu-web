'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--bg-parchment)] transition-colors mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[var(--text-subtle)]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm text-[var(--text-main)]">devd0gu.tr</span>
            <span>•</span>
            <span>{t.footer.tagline}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/apps" className="hover:text-[var(--text-main)] transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="/privacy" className="hover:text-[var(--text-main)] transition-colors">
              {t.nav.privacy}
            </Link>
            <a
              href="https://play.google.com/store/apps/dev?id=8761490712491659993"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-1"
            >
              <span>Play Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/devd0gu"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-1"
            >
              <GithubIcon className="w-3 h-3" />
              <span>GitHub</span>
            </a>
            <Link href="/admin" className="hover:text-[var(--text-main)] transition-colors">
              {t.nav.dashboard}
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[var(--text-subtle)] border-t border-[var(--border-subtle)] pt-4">
          <div>© 2026 devd0gu. {t.footer.privacyEnd}</div>
          <a href="mailto:iletisim@devdogu.tr" className="hover:text-[var(--text-main)]">
            iletisim@devdogu.tr
          </a>
        </div>
      </div>
    </footer>
  );
}
