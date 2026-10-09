import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import AppIcon from '@/components/AppIcon';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects • devd0gu',
  description:
    'Complete catalog of independent Android applications, offline-first tools, games, and autonomous AI agents.',
};

export default function AppsPage() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto py-6">
      {/* Quiet Header */}
      <div className="space-y-2 border-b border-[var(--border-light)] pb-6">
        <h1 className="font-serif text-3xl font-normal text-[var(--text-main)] tracking-tight">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Tools, games, and mobile prototypes. Built with an offline-first philosophy, zero advertising telemetry, and native performance.
        </p>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-[var(--border-light)]">
        {projects.map((proj) => (
          <article
            key={proj.id}
            className="py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
          >
            <div className="flex items-start gap-4">
              <AppIcon id={proj.id} size={42} />
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h2 className="font-serif font-bold text-lg text-[var(--text-main)] group-hover:text-[var(--accent-clay)] transition-colors">
                    <Link href={`/apps/${proj.slug}`}>{proj.title}</Link>
                  </h2>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-muted)] border border-[var(--border-light)]">
                    {proj.status}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-subtle)]">
                    v{proj.version}
                  </span>
                </div>
                <p className="text-xs font-medium text-[var(--accent-clay)]">
                  {proj.tagline}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
                  {proj.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono shrink-0 pl-14 sm:pl-0 pt-1 sm:pt-1">
              {proj.links.playStore && (
                <a
                  href={proj.links.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text-subtle)] hover:text-[var(--text-main)] inline-flex items-center gap-1"
                >
                  <span>Play Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <Link
                href={`/apps/${proj.slug}`}
                className="text-[var(--accent-clay)] hover:underline inline-flex items-center gap-1"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
