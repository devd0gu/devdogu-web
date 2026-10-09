import React from 'react';
import Link from 'next/link';
import { Announcement } from '@/types';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function AnnouncementCard({ item }: { item: Announcement }) {
  const getBadgeStyle = (cat: string) => {
    switch (cat) {
      case 'AI & Research':
        return 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] border-[var(--accent-terracotta)]/30';
      case 'Launch':
        return 'bg-[var(--accent-sage-soft)] text-[var(--accent-sage)] border-[var(--accent-sage)]/30';
      case 'Update':
        return 'bg-[var(--accent-honey-soft)] text-[var(--accent-honey)] border-[var(--accent-honey)]/30';
      default:
        return 'bg-[var(--bg-card-subtle)] text-[var(--text-muted)] border-[var(--border-warm)]';
    }
  };

  return (
    <article className="retro-box rounded-xl p-5 sm:p-6 bg-[var(--bg-card)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${getBadgeStyle(
              item.category
            )}`}
          >
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-subtle)]">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.date}</span>
          </div>
        </div>

        <h3 className="font-serif font-bold text-base sm:text-lg text-[var(--text-main)] mb-2 hover:text-[var(--accent-terracotta)] transition-colors">
          <Link href={`/announcements#${item.slug}`}>{item.title}</Link>
        </h3>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
          {item.summary}
        </p>
      </div>

      <div className="pt-3 border-t border-[var(--border-warm)] flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-subtle)] font-mono">
          <Tag className="w-3 h-3" />
          <span>{item.tags.slice(0, 2).join(', ')}</span>
        </div>

        <Link
          href={`/announcements#${item.slug}`}
          className="text-xs font-mono text-[var(--accent-terracotta)] hover:underline flex items-center gap-1"
        >
          <span>Read devlog</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}
