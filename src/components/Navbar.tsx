'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.overview },
    { href: '/apps', label: t.nav.projects },
    { href: '/announcements', label: t.nav.devlog },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-parchment)]/90 border-b border-[var(--border-light)] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-serif font-bold text-base text-[var(--text-main)] hover:text-[var(--accent-clay)] transition-colors tracking-tight flex items-center gap-1.5"
        >
          <span>devd0gu</span>
          <span className="font-mono text-xs text-[var(--accent-clay)]">.tr</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-5 text-sm">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  active
                    ? 'text-[var(--text-main)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Language Switcher + Theme Toggle */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1 text-[var(--text-muted)] ml-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[var(--border-light)] bg-[var(--bg-parchment)] px-4 py-3 space-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
