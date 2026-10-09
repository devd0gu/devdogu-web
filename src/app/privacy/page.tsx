import React from 'react';
import Link from 'next/link';
import { privacyPolicies } from '@/data/privacyPolicies';
import { Shield, ShieldCheck, ArrowRight, ExternalLink, Lock, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & Legal Hub • devd0gu',
  description:
    'Official privacy policies, permissions breakdown, and legal disclosures for all devd0gu applications.',
};

export default function PrivacyHubPage() {
  const policyList = Object.values(privacyPolicies);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[var(--border-warm)]">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-sage)] font-semibold bg-[var(--accent-sage-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-sage)]/25">
          <Shield className="w-3.5 h-3.5" />
          <span>Transparency & Legal Integrity</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
          Privacy Policy Center
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Official, permanent privacy policies for all applications listed on the Google Play Store and distributed through devd0gu.tr.
        </p>
      </div>

      {/* Manifesto */}
      <div className="retro-box rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border-2 border-[var(--border-warm)] space-y-4">
        <div className="flex items-center gap-2 font-serif font-bold text-xl text-[var(--text-main)]">
          <Lock className="w-5 h-5 text-[var(--accent-terracotta)]" />
          <span>Core Guarantee: Best Security is Collecting Zero Data</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          We reject the modern trend of harvesting background metrics. Our utility tools (All File Opener, Paper Launcher, Nav Bar Knights) are constructed without internet access capabilities, ensuring your data never leaves your hardware.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center gap-2 text-xs font-mono">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-sage)] shrink-0" />
            <span>No user accounts or logins</span>
          </div>
          <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center gap-2 text-xs font-mono">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-sage)] shrink-0" />
            <span>Zero ad-tracking SDKs</span>
          </div>
          <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center gap-2 text-xs font-mono">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-sage)] shrink-0" />
            <span>No cloud database profiling</span>
          </div>
        </div>
      </div>

      {/* Policy List */}
      <div className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[var(--text-main)]">
          Application Policies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policyList.map((doc) => (
            <div
              key={doc.id}
              className="retro-box rounded-xl p-5 bg-[var(--bg-card)] flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-sage-soft)] text-[var(--accent-sage)] border border-[var(--accent-sage)]/25 font-semibold">
                    Current
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-subtle)]">
                    {doc.lastUpdated}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-[var(--text-main)]">
                  {doc.appName}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {doc.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-warm)] mt-4">
                <Link
                  href={`/privacy/${doc.id}`}
                  className="retro-btn px-3 py-1.5 rounded-lg font-mono text-xs font-medium text-[var(--text-main)] hover:text-[var(--accent-terracotta)] flex items-center justify-between w-full"
                >
                  <span>Read Full Text</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backward-compatibility notice */}
      <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--text-subtle)] font-mono">
        <div>
          <span>Google Play Developer Console registered URLs remain fully compliant & active.</span>
        </div>
        <a
          href="/googleplaygizliliksozlesmesi.html"
          className="text-[var(--accent-terracotta)] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>Legacy HTML Route ↗</span>
        </a>
      </div>
    </div>
  );
}
