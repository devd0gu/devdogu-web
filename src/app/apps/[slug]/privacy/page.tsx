import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { privacyPolicies } from '@/data/privacyPolicies';
import { projects } from '@/data/projects';
import { ArrowLeft, Calendar, Mail, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(privacyPolicies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = privacyPolicies[slug];
  if (!policy) return { title: 'Privacy Policy Not Found' };

  return {
    title: `${policy.appName} — Privacy Policy • devd0gu`,
    description: policy.summary,
  };
}

export default async function AppPrivacyPage({ params }: Props) {
  const { slug } = await params;
  const policy = privacyPolicies[slug];
  const project = projects.find((p) => p.slug === slug);

  if (!policy) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto py-4">
      {/* Back button to app details */}
      <Link
        href={project ? `/apps/${project.slug}` : '/apps'}
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-subtle)] hover:text-[var(--accent-clay)] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>← {project ? project.title : 'Back to Apps'}</span>
      </Link>

      {/* Main Document Box */}
      <article className="clean-card p-6 sm:p-10 space-y-6">
        {/* Header */}
        <div className="pb-6 border-b border-[var(--border-light)] space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-subtle)]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Effective: {policy.lastUpdated}</span>
            </span>
            {policy.packageId && (
              <>
                <span>•</span>
                <span className="text-[var(--accent-clay)]">{policy.packageId}</span>
              </>
            )}
            <span>•</span>
            <span className="flex items-center gap-1 text-[var(--accent-sage)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Policy</span>
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
            {policy.appName}
          </h1>
          <p className="font-mono text-xs text-[var(--text-subtle)]">Privacy Policy / Gizlilik Politikası</p>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-2">
            {policy.summary}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 text-sm leading-relaxed text-[var(--text-main)]">
          {policy.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h2 className="font-serif font-bold text-base sm:text-lg text-[var(--text-main)] pt-2 border-b border-[var(--border-light)] pb-1">
                {sec.title}
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed">{sec.content}</p>
              {sec.bullets && (
                <ul className="list-disc pl-5 space-y-1 text-[var(--text-muted)]">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="pt-6 border-t border-[var(--border-light)] bg-[var(--bg-subtle)] -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 rounded-b-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Mail className="w-4 h-4 text-[var(--accent-clay)]" />
            <span>Official Legal Contact: <strong className="text-[var(--text-main)]">iletisim@devdogu.tr</strong></span>
          </div>
          <a
            href="mailto:iletisim@devdogu.tr"
            className="text-[var(--accent-clay)] font-mono hover:underline"
          >
            iletisim@devdogu.tr ↗
          </a>
        </div>
      </article>
    </div>
  );
}
