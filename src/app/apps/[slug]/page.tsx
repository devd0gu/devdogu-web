import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import {
  ExternalLink,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Lock,
  WifiOff,
  EyeOff,
  Sparkles,
  Cpu,
} from 'lucide-react';
import type { Metadata } from 'next';
import AppIcon from '@/components/AppIcon';
import CortexDeepDive from '@/components/CortexDeepDive';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} • devd0gu`,
    description: project.tagline,
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-10">
      {/* Back button */}
      <Link
        href="/apps"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-subtle)] hover:text-[var(--accent-terracotta)] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Project Catalog</span>
      </Link>

      {/* Main Container */}
      <div className="clean-card p-6 sm:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[var(--border-light)]">
          <div className="flex items-start gap-4">
            <AppIcon id={project.id} size={56} />
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-sage-soft)] text-[var(--accent-sage)] border border-[var(--accent-sage)]/25 font-semibold">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-[var(--text-subtle)]">
                  v{project.version} • {project.category}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
                {project.title}
              </h1>
              <p className="font-medium text-base text-[var(--accent-clay)] mt-1">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="retro-btn px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] flex items-center gap-2"
              >
                <span>Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              href={`/apps/${project.slug}/privacy`}
              className="px-3.5 py-1.5 rounded-lg font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-subtle)] border border-[var(--border-light)] hover:border-[var(--border-warm)] transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-sage)]" />
              <span>Privacy Policy</span>
            </Link>
          </div>
        </div>

        {/* Claude for Startups Callout */}
        {project.isClaudePowered && (
          <div className="p-4 rounded-xl bg-[#FAF0E6] dark:bg-[#2A1F17] border border-[#E0D5C3] dark:border-[#3D2E20] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent-terracotta)]">
              <Sparkles className="w-4 h-4" />
              <span>Anthropic Claude API & Claude for Startups Integration</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Cortex leverages Claude 3.5 Sonnet / Haiku to orchestrate system-level intent. Built for the Anthropic Claude for Startups program (<a href="https://claude.com/programs/startups" target="_blank" rel="noreferrer" className="underline font-medium">claude.com/programs/startups</a>).
            </p>
          </div>
        )}

        {/* Screenshot showcase if present */}
        {project.previewImage && (
          <div className="rounded-xl overflow-hidden border border-[var(--border-warm)] bg-black/5 max-h-96">
            <img
              src={project.previewImage}
              alt={`${project.title} live interface preview`}
              className="w-full object-cover object-top max-h-96"
            />
          </div>
        )}

        {/* Overview Description */}
        <div className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[var(--text-main)]">
            Architecture & Purpose
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-4 pt-4 border-t border-[var(--border-warm)]">
          <h2 className="font-serif text-xl font-bold text-[var(--text-main)]">
            Core Specifications & Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-sage)] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[var(--text-main)]">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs & Privacy Audit */}
        {project.specs && (
          <div className="pt-4 border-t border-[var(--border-warm)] space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
              Privacy Perimeter & Runtime Verification
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-parchment)]">
                <div className="text-[var(--text-subtle)]">Network Profile:</div>
                <div className="font-bold text-[var(--accent-sage)] mt-1 flex items-center gap-1">
                  <WifiOff className="w-3.5 h-3.5" />
                  <span>{project.specs.isOffline ? '100% Offline' : 'API Network'}</span>
                </div>
              </div>
              <div className="p-3 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-parchment)]">
                <div className="text-[var(--text-subtle)]">Commercial Ads:</div>
                <div className="font-bold text-[var(--text-main)] mt-1">
                  {project.specs.hasAds ? 'Standard Ads' : 'Zero Ads'}
                </div>
              </div>
              <div className="p-3 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-parchment)]">
                <div className="text-[var(--text-subtle)]">Telemetry Trackers:</div>
                <div className="font-bold text-[var(--accent-sage)] mt-1 flex items-center gap-1">
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>{project.specs.hasAnalytics ? 'Game Analytics' : 'Zero Trackers'}</span>
                </div>
              </div>
              <div className="p-3 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-parchment)]">
                <div className="text-[var(--text-subtle)]">Package / Engine:</div>
                <div className="font-bold text-[var(--text-main)] mt-1 truncate">
                  {project.specs.aiModel || project.packageId || 'Android Kotlin'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deep Dive Architecture & Console for Cortex */}
        {project.id === 'cortex' && <CortexDeepDive />}
      </div>
    </div>
  );
}
