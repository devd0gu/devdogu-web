import React from 'react';
import { announcements } from '@/data/announcements';
import { Calendar, Tag, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Devlog & Announcements • devd0gu',
  description:
    'Technical dispatches, release notes, and research updates on Android agents, launchers, and offline tools.',
};

export default function AnnouncementsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[var(--border-warm)]">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-sage)] font-semibold bg-[var(--accent-sage-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-sage)]/25">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Devlog & Release Notes</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
          Engineering Dispatches
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Behind-the-scenes engineering logs, autonomous mobile agent research, and architectural decisions behind devd0gu projects.
        </p>
      </div>

      {/* Announcements List */}
      <div className="space-y-8">
        {announcements.map((item) => (
          <article
            key={item.id}
            id={item.slug}
            className="retro-box rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border-2 border-[var(--border-warm)] scroll-mt-24 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--border-warm)]">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] border border-[var(--accent-terracotta)]/25 font-semibold">
                {item.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-subtle)]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
              {item.title}
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {item.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border-warm)] flex items-center gap-2 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-[var(--text-subtle)]" />
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-card-subtle)] text-[var(--text-subtle)] border border-[var(--border-warm)]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
