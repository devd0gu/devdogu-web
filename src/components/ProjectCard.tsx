import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import AppIcon from './AppIcon';
import { ExternalLink, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const getStatusBadge = () => {
    switch (project.status) {
      case 'Live':
        return 'bg-[var(--accent-sage-soft)] text-[var(--accent-sage)] border-[var(--accent-sage)]/25';
      case 'In Development':
        return 'bg-[var(--accent-honey-soft)] text-[var(--accent-honey)] border-[var(--accent-honey)]/30';
      default:
        return 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] border-[var(--accent-terracotta)]/25';
    }
  };

  return (
    <div
      className={`retro-box rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all group ${
        featured || project.isFlagship
          ? 'border-[var(--accent-terracotta)]/50 bg-[var(--bg-card)] ring-1 ring-[var(--accent-terracotta)]/20'
          : 'bg-[var(--bg-card)]'
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <AppIcon id={project.id} size={42} />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg text-[var(--text-main)] group-hover:text-[var(--accent-terracotta)] transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs font-mono text-[var(--text-subtle)]">
                v{project.version} • {project.category}
              </p>
            </div>
          </div>

          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold shrink-0 ${getStatusBadge()}`}
          >
            {project.status}
          </span>
        </div>

        {/* Flagship / Claude badge */}
        {project.isClaudePowered && (
          <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF0E6] dark:bg-[#2A1F17] border border-[#E0D5C3] dark:border-[#3D2E20] text-[11px] font-mono font-medium text-[var(--accent-terracotta)]">
            <Sparkles className="w-3 h-3" />
            <span>Anthropic Claude API • Claude for Startups</span>
          </div>
        )}

        {/* Optional preview screenshot */}
        {project.previewImage && (
          <div className="mb-3 rounded-lg overflow-hidden border border-[var(--border-warm)] max-h-36 bg-black/5">
            <img
              src={project.previewImage}
              alt={project.title}
              className="w-full h-36 object-cover object-top hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Tagline */}
        <p className="text-sm font-medium text-[var(--accent-clay)] mb-2">
          {project.tagline}
        </p>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-1.5 mb-5 text-xs text-[var(--text-muted)]">
          {project.features.slice(0, 3).map((feat, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[var(--accent-terracotta)] font-bold mt-0.5">✦</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-card-subtle)] text-[var(--text-subtle)] border border-[var(--border-warm)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[var(--border-warm)] flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          {project.links.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noreferrer"
              className="retro-btn px-2.5 py-1 rounded-lg font-mono font-medium text-[var(--text-main)] hover:text-[var(--accent-terracotta)] flex items-center gap-1.5 text-xs"
            >
              <span>Play Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <Link
            href={project.links.privacy}
            className="px-2 py-1 rounded-lg text-[var(--text-subtle)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] transition-colors flex items-center gap-1 font-mono text-xs"
            title="Privacy Policy"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-sage)]" />
            <span>Privacy</span>
          </Link>
        </div>

        <Link
          href={`/apps/${project.slug}`}
          className="font-mono text-[var(--accent-terracotta)] font-medium hover:underline flex items-center gap-1 ml-auto text-xs"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
