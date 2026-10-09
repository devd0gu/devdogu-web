'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PixelAvatar from './PixelAvatar';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Sparkles, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Showcase' },
    { href: '/apps', label: 'Apps & Games' },
    { href: '/announcements', label: 'Devlog' },
    { href: '/privacy', label: 'Privacy Hub' },
    { href: '/admin', label: 'Dashboard' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-parchment)]/90 border-b border-[var(--border-warm)] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <PixelAvatar size={34} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-bold font-serif text-lg tracking-tight text-[var(--text-main)] group-hover:text-[var(--accent-terracotta)] transition-colors">
              <span>devd0gu</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-sm bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] font-semibold border border-[var(--accent-terracotta)]/20">
                .tr
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-subtle)] -mt-1 hidden sm:inline">
              indie studio & mobile lab
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  active
                    ? 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] font-semibold border border-[var(--accent-terracotta)]/30'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-warm)] bg-[var(--bg-parchment)] px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  active
                    ? 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] font-semibold'
                    : 'text-[var(--text-muted)] hover:bg-[var(--bg-card-subtle)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
