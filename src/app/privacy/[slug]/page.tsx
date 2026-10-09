import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { privacyPolicies } from '@/data/privacyPolicies';
import { ArrowLeft, Calendar, Mail } from 'lucide-react';
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

export default async function PolicyDetailPage({ params }: Props) {
  const { slug } = await params;
  const policy = privacyPolicies[slug];

  if (!policy) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Back button */}
      <Link
        href="/privacy"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-subtle)] hover:text-[var(--accent-terracotta)] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Privacy Hub</span>
      </Link>

      {/* Main Document Box */}
      <article className="retro-box rounded-2xl p-6 sm:p-10 bg-[var(--bg-card)] border-2 border-[var(--border-warm)] space-y-6">
        {/* Header */}
        <div className="pb-6 border-b border-[var(--border-warm)] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-subtle)]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Effective Date: {policy.lastUpdated}</span>
            {policy.packageId && (
              <>
                <span>•</span>
                <span className="font-semibold text-[var(--accent-clay)]">{policy.packageId}</span>
              </>
            )}
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
            {policy.appName} — Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pt-1">
            {policy.summary}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 text-sm leading-relaxed text-[var(--text-main)]">
          {policy.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h2 className="font-serif font-bold text-lg text-[var(--text-main)] pt-2 border-b border-[var(--border-warm)] pb-1">
                {sec.title}
              </h2>
              <p className="text-[var(--text-muted)]">{sec.content}</p>
              {sec.bullets && (
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--text-muted)]">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="pt-6 border-t border-[var(--border-warm)] bg-[var(--bg-card-subtle)] -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 rounded-b-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Mail className="w-4 h-4 text-[var(--accent-terracotta)]" />
            <span>Official Legal Contact: <strong>iletisim@devdogu.tr</strong></span>
          </div>
          <a
            href="mailto:iletisim@devdogu.tr"
            className="text-[var(--accent-terracotta)] font-mono font-medium hover:underline"
          >
            Send Email Inquiries ↗
          </a>
        </div>
      </article>
    </div>
  );
}
