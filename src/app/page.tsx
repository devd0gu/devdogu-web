import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { announcements } from '@/data/announcements';
import AppIcon from '@/components/AppIcon';
import { ExternalLink, ArrowRight, Shield } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function HomePage() {
  const cortex = projects.find((p) => p.id === 'cortex');
  const otherProjects = projects.filter((p) => p.id !== 'cortex');

  return (
    <div className="space-y-16 max-w-3xl mx-auto py-6">
      {/* Quiet Intro */}
      <section className="space-y-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-main)] tracking-tight">
          devd0gu
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          Independent Android developer. I build offline-first tools, quiet software, and{' '}
          <Link href="/apps/cortex" className="text-[var(--accent-clay)] hover:underline font-medium">
            Cortex
          </Link>
          —an on-device autonomous agent designed around Anthropic's Claude API.
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-subtle)] pt-1">
          <a
            href="https://github.com/devd0gu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>/</span>
          <a
            href="https://play.google.com/store/apps/dev?id=8761490712491659993"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <span>Google Play</span>
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
            Focus Project
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
                    Autonomous Mobile Agent • Built with Claude API
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-muted)] border border-[var(--border-light)]">
                Alpha
              </span>
            </div>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Cortex connects Android accessibility services, notification daemons, and C++ JNI with Anthropic Claude 3.5 Sonnet / Haiku. It reads on-screen structure locally and executes multi-step phone workflows without cloud telemetry leakage. Prepared for the{' '}
              <a
                href="https://claude.com/programs/startups"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent-clay)] hover:underline"
              >
                Claude for Startups
              </a>{' '}
              program.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono pt-1">
              <Link
                href="/apps/cortex"
                className="text-[var(--accent-clay)] hover:underline flex items-center gap-1"
              >
                <span>Read technical spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/privacy/cortex"
                className="text-[var(--text-subtle)] hover:text-[var(--text-main)]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Projects List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
            Projects & Games
          </div>
          <Link
            href="/apps"
            className="text-xs font-mono text-[var(--accent-clay)] hover:underline"
          >
            All projects ({projects.length}) →
          </Link>
        </div>

        <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
          {otherProjects.map((proj) => (
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
                      <Link href={`/apps/${proj.slug}`}>{proj.title}</Link>
                    </h3>
                    <span className="text-[10px] font-mono text-[var(--text-subtle)]">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5 leading-relaxed">
                    {proj.shortDescription}
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
                  Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Devlog Entries */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
            Notes & Devlog
          </div>
          <Link
            href="/announcements"
            className="text-xs font-mono text-[var(--accent-clay)] hover:underline"
          >
            All entries →
          </Link>
        </div>

        <div className="space-y-2">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="flex items-baseline justify-between gap-4 py-2 text-sm border-b border-[var(--border-subtle)]"
            >
              <Link
                href={`/announcements#${item.slug}`}
                className="text-[var(--text-main)] hover:text-[var(--accent-clay)] transition-colors leading-snug"
              >
                {item.title}
              </Link>
              <span className="text-xs font-mono text-[var(--text-subtle)] shrink-0">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
