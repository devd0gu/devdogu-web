import React from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Layers, Shield, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apps & Experiments • devd0gu',
  description:
    'Complete portfolio of independent Android applications, offline-first tools, games, and autonomous AI agents.',
};

export default function AppsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[var(--border-warm)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-terracotta)] font-semibold bg-[var(--accent-terracotta-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-terracotta)]/25 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Project Catalog</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
              Applications & Games
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed mt-1">
              Every project follows a simple rule: respect user agency, eliminate background tracking, and keep execution clean on device.
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/dev?id=8761490712491659993"
            target="_blank"
            rel="noreferrer"
            className="retro-btn px-4 py-2 rounded-xl text-xs font-mono font-medium text-[var(--text-main)] hover:text-[var(--accent-terracotta)] flex items-center gap-2 shrink-0"
          >
            <span>Google Play Store</span>
            <ExternalLink className="w-3.5 h-3.5 text-[var(--text-subtle)]" />
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      {/* Engineering note */}
      <div className="retro-box rounded-xl p-6 bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] space-y-2">
        <div className="flex items-center gap-2 text-sm font-serif font-bold text-[var(--text-main)]">
          <Shield className="w-4 h-4 text-[var(--accent-sage)]" />
          <span>Local Perimeter & Zero-Bloat Standards</span>
        </div>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          From the LibGDX game loop of Web Destroyer and the zero-allocation dock renderer in Nav Bar Knights, to the offline PDF engine of All File Opener and the Claude-powered inference pipeline in Cortex: everything is optimized for minimum battery footprint and zero ad-network telemetry.
        </p>
      </div>
    </div>
  );
}
