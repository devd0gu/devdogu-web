'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'iletisim@devdogu.tr';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[var(--border-warm)]">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-terracotta)] font-semibold bg-[var(--accent-terracotta-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-terracotta)]/25">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Inquiries</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
          For collaboration inquiries, bug reports, Claude for Startups discussion, or questions regarding my Android tools and games.
        </p>
      </div>

      {/* Direct Contact Card */}
      <div className="retro-box rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border-2 border-[var(--border-warm)] space-y-6">
        <h2 className="font-serif text-xl font-bold text-[var(--text-main)]">
          Contact Channels
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Box */}
          <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-subtle)]">
              <Mail className="w-4 h-4 text-[var(--accent-terracotta)]" />
              <span>Official Email</span>
            </div>
            <div className="font-mono text-sm font-semibold text-[var(--text-main)] break-all">
              {email}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${email}`}
                className="retro-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[var(--text-main)] hover:text-[var(--accent-terracotta)]"
              >
                Send Email ↗
              </a>
              <button
                onClick={copyEmail}
                type="button"
                className="p-1.5 rounded-lg border border-[var(--border-warm)] hover:bg-[var(--bg-card)] text-[var(--text-subtle)] hover:text-[var(--text-main)] transition-colors flex items-center gap-1 text-xs font-mono"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent-sage)]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* GitHub Box */}
          <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-subtle)]">
              <GithubIcon className="w-4 h-4 text-[var(--accent-sage)]" />
              <span>Source Repositories</span>
            </div>
            <div className="font-mono text-sm font-semibold text-[var(--text-main)]">
              github.com/devd0gu
            </div>
            <div className="pt-2">
              <a
                href="https://github.com/devd0gu"
                target="_blank"
                rel="noreferrer"
                className="retro-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[var(--text-main)] hover:text-[var(--accent-terracotta)] inline-block"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>
        </div>

        {/* Google Play Profile Card */}
        <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div>
            <div className="text-[var(--text-subtle)]">Google Play Developer Console Profile:</div>
            <div className="font-bold text-[var(--text-main)] mt-0.5">devd0gu (ID: 8761490712491659993)</div>
          </div>
          <a
            href="https://play.google.com/store/apps/dev?id=8761490712491659993"
            target="_blank"
            rel="noreferrer"
            className="retro-btn px-3 py-1.5 rounded-lg text-[var(--accent-terracotta)] font-bold flex items-center gap-1 shrink-0"
          >
            <span>Play Store Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Note */}
        <div className="pt-4 border-t border-[var(--border-warm)] text-xs text-[var(--text-muted)] font-mono flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-honey)] shrink-0" />
          <span>Responses typically dispatched within 24 to 48 hours directly by the developer.</span>
        </div>
      </div>
    </div>
  );
}
