import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { announcements } from '@/data/announcements';
import ProjectCard from '@/components/ProjectCard';
import AnnouncementCard from '@/components/AnnouncementCard';
import PixelAvatar from '@/components/PixelAvatar';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Cpu,
  Layers,
  Smartphone,
  Flame,
} from 'lucide-react';

export default function HomePage() {
  const flagship = projects.find((p) => p.id === 'cortex');
  const otherProjects = projects.filter((p) => p.id !== 'cortex');

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-12 pb-4">
        <div className="flex flex-col items-start gap-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] border border-[var(--accent-terracotta)]/25 text-xs font-mono font-medium shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Independent Android Studio & Mobile Lab</span>
            <span className="text-[var(--text-subtle)]">•</span>
            <span className="text-[var(--accent-sage)]">devdogu.tr</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
            <PixelAvatar size={76} />
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
                Quiet tools, playful games, and autonomous mobile agents.
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed">
                I build Android software with an offline-first philosophy: broadsheet newspaper launchers, idle navigation bar RPGs, and <strong className="text-[var(--text-main)] font-semibold">Cortex</strong> — an autonomous mobile agent powered by Anthropic's Claude API.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-2">
            <Link
              href="/apps"
              className="retro-btn px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] shadow-sm flex items-center gap-2"
            >
              <span>Explore Projects ({projects.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://play.google.com/store/apps/dev?id=8761490712491659993"
              target="_blank"
              rel="noreferrer"
              className="retro-btn px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] flex items-center gap-2"
            >
              <span>Google Play Developer Page</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-subtle)]" />
            </a>

            <Link
              href="/privacy"
              className="px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-[var(--accent-sage)]" />
              <span>Privacy Hub</span>
            </Link>
          </div>

          {/* Hard metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-8 pt-6 border-t border-[var(--border-warm)]">
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="font-mono text-2xl font-bold text-[var(--accent-terracotta)]">8</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">Projects in Lab</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="font-mono text-2xl font-bold text-[var(--accent-sage)]">Claude 3.5</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">Anthropic Agent Engine</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="font-mono text-2xl font-bold text-[var(--accent-honey)]">0 B</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">Ad Telemetry Sold</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="font-mono text-2xl font-bold text-[var(--text-main)]">.tr</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">Verified Domain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Section: Cortex & Claude for Startups */}
      {flagship && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--accent-terracotta)]" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-terracotta)] font-semibold">
              Flagship Innovation • Anthropic Claude for Startups
            </h2>
          </div>

          <div className="retro-box rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border-2 border-[var(--accent-terracotta)]/40 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-honey-soft)] text-[var(--accent-honey)] border border-[var(--accent-honey)]/30 font-semibold">
                    {flagship.status}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-subtle)]">
                    v{flagship.version}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
                  {flagship.title} — {flagship.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {flagship.shortDescription} Designed to utilize Claude 3.5 Sonnet and Haiku via API, Cortex links Android system accessibility with natural language intent while maintaining an uncompromising local privacy perimeter.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono pt-2">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center gap-2">
                    <span className="text-[var(--accent-terracotta)] font-bold">✦</span>
                    <span>Claude API Reasoning Engine</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center gap-2">
                    <span className="text-[var(--accent-sage)] font-bold">✦</span>
                    <span>Zero Background Telemetry</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center gap-2">
                    <span className="text-[var(--accent-honey)] font-bold">✦</span>
                    <span>Android System Automation</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center gap-2">
                    <span className="text-[var(--text-main)] font-bold">✦</span>
                    <span>Prepped for Claude for Startups</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link
                    href={`/apps/${flagship.slug}`}
                    className="retro-btn px-4 py-2 rounded-xl font-mono text-xs font-bold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] flex items-center gap-2"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://claude.com/programs/startups"
                    target="_blank"
                    rel="noreferrer"
                    className="retro-btn px-4 py-2 rounded-xl font-mono text-xs font-medium bg-[var(--bg-card-subtle)] text-[var(--text-main)] hover:bg-[var(--bg-card)] flex items-center gap-1.5"
                  >
                    <span>Anthropic Startups Program</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-subtle)]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-[var(--border-warm)]">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent-terracotta)] font-semibold">
              Project Showcase
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
              Selected Works & Experiments
            </h2>
          </div>
          <Link
            href="/apps"
            className="text-xs font-mono text-[var(--accent-terracotta)] font-medium hover:underline flex items-center gap-1"
          >
            <span>View All ({projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.slice(0, 6).map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>

      {/* Devlog & Updates */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-[var(--border-warm)]">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent-sage)] font-semibold">
              Engineering Devlog
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
              Recent Dispatches
            </h2>
          </div>
          <Link
            href="/announcements"
            className="text-xs font-mono text-[var(--accent-sage)] font-medium hover:underline flex items-center gap-1"
          >
            <span>All Articles ({announcements.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Verified Privacy & Legal Continuity */}
      <section className="retro-box rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border-2 border-[var(--border-warm)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-sage)] font-semibold bg-[var(--accent-sage-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-sage)]/25">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Store & Legal Continuity</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-main)]">
              Store verification URLs remain active and backward-compatible
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Every historical privacy policy URL referenced in the Google Play Console (All File Opener, MultiBrowser, Animal: 48) continues to resolve perfectly on <code>devdogu.tr</code>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/privacy"
              className="retro-btn px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] text-center flex items-center justify-center gap-2"
            >
              <span>Explore Privacy Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/admin"
              className="retro-btn px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] text-center"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
