import React from 'react';
import Link from 'next/link';
import PixelAvatar from './PixelAvatar';
import { Mail, Shield, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-warm)] bg-[var(--bg-parchment)] transition-colors mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <PixelAvatar size={28} />
              <span className="font-serif font-bold text-base text-[var(--text-main)]">
                devd0gu.tr
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
              Independent Android engineering, Claude-powered autonomous agents, and zero-bloat mobile tools. Built with an offline-first philosophy and strict respect for user privacy.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-sage)] bg-[var(--accent-sage-soft)] px-2.5 py-1 rounded-md border border-[var(--accent-sage)]/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-sage)] animate-pulse" />
              <span>All systems & store endpoints verified</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5 text-sm">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent-terracotta)] transition-colors">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/apps" className="hover:text-[var(--accent-terracotta)] transition-colors">
                  Projects & Games
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="hover:text-[var(--accent-terracotta)] transition-colors">
                  Devlog & AI Research
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[var(--accent-terracotta)] transition-colors">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--accent-terracotta)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Store Links */}
          <div className="space-y-2.5 text-sm">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
              Legal & Stores
            </div>
            <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
              <li>
                <Link href="/privacy" className="hover:text-[var(--accent-terracotta)] transition-colors flex items-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
                  <span>Privacy Hub</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/dev?id=8761490712491659993"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent-terracotta)] transition-colors flex items-center gap-1"
                >
                  <span>Google Play Developer Page</span>
                  <ExternalLink className="w-3 h-3 text-[var(--text-subtle)]" />
                </a>
              </li>
              <li>
                <Link href="/privacy/allfileopener" className="hover:text-[var(--accent-terracotta)] transition-colors">
                  All File Opener Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy/multibrowser" className="hover:text-[var(--accent-terracotta)] transition-colors">
                  MultiBrowser Policy
                </Link>
              </li>
              <li>
                <a
                  href="/googleplaygizliliksozlesmesi.html"
                  className="hover:text-[var(--accent-terracotta)] transition-colors text-[var(--text-subtle)]"
                  title="Legacy Store HTML Policy"
                >
                  Legacy Play Store URL ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border-warm)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-subtle)] font-mono">
          <div className="flex items-center gap-1">
            <span>© 2026 devd0gu.tr</span>
            <span>•</span>
            <span>Handcrafted indie studio</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:iletisim@devdogu.tr"
              className="flex items-center gap-1 hover:text-[var(--accent-terracotta)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>iletisim@devdogu.tr</span>
            </a>
            <a
              href="https://github.com/devd0gu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[var(--accent-terracotta)] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
