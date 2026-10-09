import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { announcements } from '@/data/announcements';
import ProjectCard from '@/components/ProjectCard';
import AnnouncementCard from '@/components/AnnouncementCard';
import AppIcon from '@/components/AppIcon';
import PixelAvatar from '@/components/PixelAvatar';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  const flagship = projects.find((p) => p.id === 'cortex');
  const otherProjects = projects.filter((p) => p.id !== 'cortex');

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="pt-4 sm:pt-10 pb-4">
        <div className="flex flex-col items-start gap-4">
          {/* Subtle Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] border border-[var(--accent-terracotta)]/25 text-xs font-mono font-medium shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-terracotta)] animate-pulse" />
            <span>indie developer & mobile lab</span>
            <span className="text-[var(--text-subtle)]">•</span>
            <span className="text-[var(--text-muted)]">devdogu.tr</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
            <PixelAvatar size={74} />
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
                Offline tools, playful games, and autonomous Android agents.
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed">
                Hi, I'm <strong className="text-[var(--text-main)] font-semibold">devd0gu</strong>.
                I build software for myself first: broadsheet newspaper launchers, idle navigation bar RPGs, and <strong className="text-[var(--accent-terracotta)] font-semibold">Cortex</strong> — an autonomous mobile agent built on Anthropic's Claude API.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-2">
            <Link
              href="/apps"
              className="retro-btn px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] shadow-sm flex items-center gap-2"
            >
              <span>Explore Projects ({projects.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://play.google.com/store/apps/dev?id=8761490712491659993"
              target="_blank"
              rel="noreferrer"
              className="retro-btn px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] flex items-center gap-2"
            >
              <span>Google Play Developer Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-subtle)]" />
            </a>

            <Link
              href="/privacy"
              className="px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-[var(--accent-sage)]" />
              <span>Privacy Hub</span>
            </Link>
          </div>

          {/* Genuine engineering facts ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-8 pt-6 border-t border-[var(--border-warm)] font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="text-[var(--text-subtle)]">Agent Core</div>
              <div className="text-base font-bold text-[var(--accent-terracotta)] mt-0.5">Claude 3.5 API</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Sonnet & Haiku</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="text-[var(--text-subtle)]">Network Policy</div>
              <div className="text-base font-bold text-[var(--accent-sage)] mt-0.5">Zero Telemetry</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">No analytics SDKs</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="text-[var(--text-subtle)]">Active Codebase</div>
              <div className="text-base font-bold text-[var(--accent-honey)] mt-0.5">Kotlin & C++ JNI</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">+ Flutter & LibGDX</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-warm)]">
              <div className="text-[var(--text-subtle)]">Ecosystem</div>
              <div className="text-base font-bold text-[var(--text-main)] mt-0.5">Play Store Verified</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">ID: 87614907124916...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship: Cortex & Claude for Startups Showcase */}
      {flagship && (
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-terracotta)]" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-terracotta)] font-semibold">
                Flagship Project • Anthropic Claude for Startups
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--text-subtle)]">dev.cortex</span>
          </div>

          <div className="retro-box rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border-2 border-[var(--accent-terracotta)]/40 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                {/* Real Cortex Logo and title */}
                <div className="flex items-center gap-4">
                  <AppIcon id="cortex" size={60} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-honey-soft)] text-[var(--accent-honey)] border border-[var(--accent-honey)]/30 font-semibold">
                        {flagship.status}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-subtle)]">
                        v{flagship.version}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-0.5">
                      Cortex — Autonomous Android AI Agent
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  Cortex bridges Android system-level accessibility, notification interception, and JNI services with Anthropic's Claude 3.5 Sonnet and Haiku. Rather than leaking full screen recordings to the cloud, Cortex evaluates on-screen UI hierarchies locally, scrubs personal tokens, and sends verified structured requests to the Claude API.
                </p>

                {/* Technical highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono pt-2">
                  <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-start gap-2.5">
                    <span className="text-[var(--accent-terracotta)] font-bold mt-0.5">✦</span>
                    <div>
                      <strong className="text-[var(--text-main)]">Claude 3.5 Tool-Calling:</strong>
                      <p className="text-[var(--text-subtle)] text-[11px] mt-0.5">Multi-step task breakdown and execution routing.</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-start gap-2.5">
                    <span className="text-[var(--accent-sage)] font-bold mt-0.5">✦</span>
                    <div>
                      <strong className="text-[var(--text-main)]">Local Privacy Perimeter:</strong>
                      <p className="text-[var(--text-subtle)] text-[11px] mt-0.5">On-device semantic parsing without remote telemetry.</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-start gap-2.5">
                    <span className="text-[var(--accent-honey)] font-bold mt-0.5">✦</span>
                    <div>
                      <strong className="text-[var(--text-main)]">Floating Bubble & Daemon:</strong>
                      <p className="text-[var(--text-subtle)] text-[11px] mt-0.5">Instant overlay trigger across any native app.</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-start gap-2.5">
                    <span className="text-[var(--text-main)] font-bold mt-0.5">✦</span>
                    <div>
                      <strong className="text-[var(--text-main)]">Claude for Startups:</strong>
                      <p className="text-[var(--text-subtle)] text-[11px] mt-0.5">Tailored for the Anthropic ecosystem grant.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href="/apps/cortex"
                    className="retro-btn px-4 py-2 rounded-xl font-mono text-xs font-bold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] flex items-center gap-2"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://claude.com/programs/startups"
                    target="_blank"
                    rel="noreferrer"
                    className="retro-btn px-4 py-2 rounded-xl font-mono text-xs font-medium bg-[var(--bg-card-subtle)] text-[var(--text-main)] hover:bg-[var(--bg-card)] flex items-center gap-1.5"
                  >
                    <span>Claude for Startups Program</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-subtle)]" />
                  </a>
                </div>
              </div>

              {/* Cortex 4-Node Network Diagram Badge */}
              <div className="hidden lg:flex flex-col items-center justify-center p-6 rounded-xl bg-[#FAF0E6] dark:bg-[#201813] border border-[#E0D5C3] dark:border-[#3D2E20] shrink-0 self-center">
                <img
                  src="/images/logos/cortex.webp"
                  alt="Cortex Mark"
                  className="w-32 h-32 object-contain"
                />
                <span className="text-[11px] font-mono font-bold text-[var(--accent-terracotta)] mt-3">
                  4-Node Agent Mesh
                </span>
                <span className="text-[10px] font-mono text-[var(--text-subtle)]">
                  Action • Memory • Screen • Decision
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-[var(--border-warm)]">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent-terracotta)] font-semibold">
              Project Showcase
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
              Active Builds & Prototypes
            </h2>
          </div>
          <Link
            href="/apps"
            className="text-xs font-mono text-[var(--accent-terracotta)] font-medium hover:underline flex items-center gap-1"
          >
            <span>View All ({projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.slice(0, 6).map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>

      {/* Devlog & Updates */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-[var(--border-warm)]">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent-sage)] font-semibold">
              Engineering Devlog
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
              Recent Dispatches
            </h2>
          </div>
          <Link
            href="/announcements"
            className="text-xs font-mono text-[var(--accent-sage)] font-medium hover:underline flex items-center gap-1"
          >
            <span>All Articles ({announcements.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Verified Privacy & Legal Continuity */}
      <section className="retro-box rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border-2 border-[var(--border-warm)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-sage)] font-semibold bg-[var(--accent-sage-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-sage)]/25">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Store & Legal Continuity</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-main)]">
              Store verification URLs remain active and backward-compatible
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Every historical privacy policy URL referenced in the Google Play Console (All File Opener, MultiBrowser, Animal: 48) continues to resolve perfectly on <code>devdogu.tr</code>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/privacy"
              className="retro-btn px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] text-center flex items-center justify-center gap-2"
            >
              <span>Explore Privacy Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/admin"
              className="retro-btn px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] text-center"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
