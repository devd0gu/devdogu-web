'use client';

import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { announcements } from '@/data/announcements';
import AppIcon from '@/components/AppIcon';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function HomePage() {
  const { locale, t } = useLanguage();
  const cortex = projects.find((p) => p.id === 'cortex');
  const otherProjects = projects.filter((p) => p.id !== 'cortex');

  return (
    <div className="space-y-16 max-w-3xl mx-auto py-6">
      {/* Quiet Intro */}
      <section className="space-y-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-main)] tracking-tight">
          {t.hero.title}
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          {locale === 'tr' ? (
            <>
              Bağımsız Android geliştiricisi. Çevrimdışı öncelikli araçlar, sakin yazılımlar ve{' '}
              <Link href="/apps/cortex" className="text-[var(--accent-clay)] hover:underline font-medium">
                Cortex
              </Link>
              —Anthropic'in Claude API mimarisi üzerine kurulu otonom mobil asistanı geliştiriyorum.
            </>
          ) : (
            <>
              Independent Android developer. I build offline-first tools, quiet software, and{' '}
              <Link href="/apps/cortex" className="text-[var(--accent-clay)] hover:underline font-medium">
                Cortex
              </Link>
              —an on-device autonomous agent designed around Anthropic's Claude API.
            </>
          )}
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-subtle)] pt-1">
          <a
            href="https://github.com/devd0gu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>{t.hero.github}</span>
          </a>
          <span>/</span>
          <a
            href="https://play.google.com/store/apps/dev?id=8761490712491659993"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <span>{t.hero.playStore}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>/</span>
          <a
            href="mailto:iletisim@devdogu.tr"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            iletisim@devdogu.tr
          </a>
        </div>
      </section>

      {/* Featured: Cortex */}
      {cortex && (
        <section className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
            {t.focus.tag}
          </div>
          <div className="clean-card p-5 sm:p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <AppIcon id="cortex" size={44} />
                <div>
                  <h2 className="font-serif font-bold text-lg text-[var(--text-main)]">
                    <Link href="/apps/cortex" className="hover:text-[var(--accent-clay)]">
                      Cortex
                    </Link>
                  </h2>
                  <p className="text-xs font-mono text-[var(--text-subtle)]">
                    {t.focus.subtitle}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-muted)] border border-[var(--border-light)]">
                {t.focus.status}
              </span>
            </div>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t.focus.description}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono pt-1">
              <Link
                href="/apps/cortex"
                className="text-[var(--accent-clay)] hover:underline flex items-center gap-1"
              >
                <span>{t.focus.specLink}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/privacy/cortex"
                className="text-[var(--text-subtle)] hover:text-[var(--text-main)]"
              >
                {t.focus.privacyLink}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Projects List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
            {t.projects.title}
          </div>
          <Link
            href="/apps"
            className="text-xs font-mono text-[var(--accent-clay)] hover:underline"
          >
            {t.projects.allLink} ({projects.length}) →
          </Link>
        </div>

        <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
          {otherProjects.map((proj) => {
            const title = locale === 'tr' && proj.titleTr ? proj.titleTr : proj.title;
            const desc =
              locale === 'tr' && proj.shortDescriptionTr
                ? proj.shortDescriptionTr
                : proj.shortDescription;
            const status = locale === 'tr' && proj.statusTr ? proj.statusTr : proj.status;

            return (
              <article
                key={proj.id}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <AppIcon id={proj.id} size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-base text-[var(--text-main)] group-hover:text-[var(--accent-clay)] transition-colors">
                        <Link href={`/apps/${proj.slug}`}>{title}</Link>
                      </h3>
                      <span className="text-[10px] font-mono text-[var(--text-subtle)]">
                        {status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono shrink-0 pl-11 sm:pl-0 pt-1 sm:pt-0">
                  {proj.links.playStore && (
                    <a
                      href={proj.links.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--text-subtle)] hover:text-[var(--text-main)]"
                    >
                      Play Store ↗
                    </a>
                  )}
                  <Link
                    href={`/apps/${proj.slug}`}
                    className="text-[var(--accent-clay)] hover:underline"
                  >
                    {t.projects.details}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Devlog Entries */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
            {t.devlog.title}
          </div>
          <Link
            href="/announcements"
            className="text-xs font-mono text-[var(--accent-clay)] hover:underline"
          >
            {t.devlog.allLink}
          </Link>
        </div>

        <div className="space-y-2">
          {announcements.map((item) => {
            const title = locale === 'tr' && item.titleTr ? item.titleTr : item.title;
            const date = locale === 'tr' && item.dateTr ? item.dateTr : item.date;

            return (
              <div
                key={item.id}
                className="flex items-baseline justify-between gap-4 py-2 text-sm border-b border-[var(--border-subtle)]"
              >
                <Link
                  href={`/announcements#${item.slug}`}
                  className="text-[var(--text-main)] hover:text-[var(--accent-clay)] transition-colors leading-snug"
                >
                  {title}
                </Link>
                <span className="text-xs font-mono text-[var(--text-subtle)] shrink-0">
                  {date}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
