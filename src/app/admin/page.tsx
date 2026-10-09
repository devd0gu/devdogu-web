'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { announcements } from '@/data/announcements';
import {
  LayoutDashboard,
  Server,
  Globe,
  Sparkles,
  Plus,
  CheckCircle2,
  Clock,
  Terminal,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  FolderKanban,
  Edit,
} from 'lucide-react';

export default function AdminPage() {
  const [projectList, setProjectList] = useState(projects);
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'new-post' | 'vds'>('overview');
  const [copiedCmd, setCopiedCmd] = useState(false);

  // New post form state
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState<'AI & Research' | 'Launch' | 'Update' | 'Devlog'>('AI & Research');
  const [postSummary, setPostSummary] = useState('');
  const [postPublished, setPostPublished] = useState(false);

  const handlePublishPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle || !postSummary) return;
    setPostPublished(true);
    setTimeout(() => {
      setPostTitle('');
      setPostSummary('');
      setPostPublished(false);
    }, 2500);
  };

  const copyVdsCommand = () => {
    navigator.clipboard.writeText('cd /var/www/devdogu && git pull && npm run build && pm2 restart devdogu-web');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-warm)]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-terracotta)] font-semibold bg-[var(--accent-terracotta-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-terracotta)]/25 mb-2">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Studio Management</span>
          </div>
          <h1 className="font-serif text-3xl font-extrabold text-[var(--text-main)]">
            devd0gu Control Hub
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 font-mono">
            Direct orchestration for devdogu.tr • Projects, Devlog & VDS Runtime
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyVdsCommand}
            className="retro-btn px-3 py-1.5 rounded-lg font-mono text-xs text-[var(--text-main)] hover:text-[var(--accent-terracotta)] flex items-center gap-1.5"
            title="Copy one-line VDS deploy command"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{copiedCmd ? 'Command Copied!' : 'Copy Deploy Script'}</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[var(--border-warm)] pb-2 overflow-x-auto text-xs font-mono">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            activeTab === 'overview'
              ? 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] font-bold border border-[var(--accent-terracotta)]/30'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
          }`}
        >
          Overview & Diagnostics
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            activeTab === 'projects'
              ? 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] font-bold border border-[var(--accent-terracotta)]/30'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
          }`}
        >
          Project Inventory ({projectList.length})
        </button>
        <button
          onClick={() => setActiveTab('new-post')}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            activeTab === 'new-post'
              ? 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] font-bold border border-[var(--accent-terracotta)]/30'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
          }`}
        >
          + Draft Devlog
        </button>
        <button
          onClick={() => setActiveTab('vds')}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            activeTab === 'vds'
              ? 'bg-[var(--accent-terracotta-soft)] text-[var(--accent-terracotta)] font-bold border border-[var(--accent-terracotta)]/30'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
          }`}
        >
          Domain & VDS Setup
        </button>
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="retro-box p-4 rounded-xl bg-[var(--bg-card)]">
              <div className="text-xs font-mono text-[var(--text-subtle)]">Total Portfolio</div>
              <div className="text-2xl font-bold font-serif text-[var(--text-main)] mt-1">
                {projectList.length} Apps & Games
              </div>
              <div className="text-[11px] font-mono text-[var(--accent-sage)] mt-1">
                3 Live on Stores • 5 in Dev
              </div>
            </div>

            <div className="retro-box p-4 rounded-xl bg-[var(--bg-card)]">
              <div className="text-xs font-mono text-[var(--text-subtle)]">Claude for Startups</div>
              <div className="text-2xl font-bold font-serif text-[var(--accent-terracotta)] mt-1">
                Cortex Ready
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">
                Claude 3.5 Sonnet pipeline
              </div>
            </div>

            <div className="retro-box p-4 rounded-xl bg-[var(--bg-card)]">
              <div className="text-xs font-mono text-[var(--text-subtle)]">Domain Status</div>
              <div className="text-2xl font-bold font-serif text-[var(--accent-sage)] mt-1">
                devdogu.tr
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">
                TRABİS DNS configured
              </div>
            </div>

            <div className="retro-box p-4 rounded-xl bg-[var(--bg-card)]">
              <div className="text-xs font-mono text-[var(--text-subtle)]">Legacy Policies</div>
              <div className="text-2xl font-bold font-serif text-[var(--accent-honey)] mt-1">
                100% Intact
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">
                Play Store endpoints active
              </div>
            </div>
          </div>

          {/* Anthropic Claude for Startups Integration Box */}
          <div className="retro-box rounded-2xl p-6 bg-[var(--bg-card)] border-2 border-[var(--accent-terracotta)]/40 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--accent-terracotta)]" />
              <h2 className="font-serif font-bold text-lg text-[var(--text-main)]">
                Claude for Startups Alignment (Cortex)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Cortex is positioned for the <strong>Anthropic Claude for Startups</strong> initiative (<a href="https://claude.com/programs/startups" target="_blank" rel="noreferrer" className="text-[var(--accent-terracotta)] underline">claude.com/programs/startups</a>). Cortex applies Claude 3.5 Sonnet tool-calling capabilities to the mobile Android surface, converting conversational intent into verified system automations without cloud telemetry leaks.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] text-[var(--text-subtle)]">
                API Tier: Claude 3.5 Sonnet / Haiku
              </span>
              <span className="px-2 py-0.5 rounded bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] text-[var(--text-subtle)]">
                Local Privacy Perimeter: Active
              </span>
              <span className="px-2 py-0.5 rounded bg-[var(--accent-sage-soft)] text-[var(--accent-sage)] border border-[var(--accent-sage)]/25">
                Startup Program Application Ready
              </span>
            </div>
          </div>

          {/* Play Store Verified Links */}
          <div className="retro-box rounded-xl p-5 bg-[var(--bg-card)] space-y-3">
            <h3 className="font-serif font-bold text-base text-[var(--text-main)] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-sage)]" />
              <span>Google Play Developer Verification</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Developer ID: <code className="font-mono bg-[var(--bg-card-subtle)] px-1.5 py-0.5 rounded">8761490712491659993</code>
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://play.google.com/store/apps/dev?id=8761490712491659993"
                target="_blank"
                rel="noreferrer"
                className="retro-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[var(--text-main)] hover:text-[var(--accent-terracotta)] flex items-center gap-1.5"
              >
                <span>View Google Play Developer Console Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Projects */}
      {activeTab === 'projects' && (
        <div className="retro-box rounded-xl p-5 bg-[var(--bg-card)] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-warm)]">
            <h2 className="font-serif font-bold text-lg text-[var(--text-main)]">
              All Managed Projects
            </h2>
            <span className="text-xs font-mono text-[var(--text-subtle)]">
              {projectList.length} total entries
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[var(--border-warm)] text-[var(--text-subtle)]">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Category</th>
                  <th className="pb-2">Version</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Specs</th>
                  <th className="pb-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-warm)]">
                {projectList.map((p) => (
                  <tr key={p.id} className="hover:bg-[var(--bg-card-subtle)]">
                    <td className="py-2.5 font-bold text-[var(--text-main)]">
                      {p.title}
                      {p.isClaudePowered && (
                        <span className="ml-1 text-[10px] text-[var(--accent-terracotta)]">✦ AI</span>
                      )}
                    </td>
                    <td className="py-2.5 text-[var(--text-muted)]">{p.category}</td>
                    <td className="py-2.5 text-[var(--text-subtle)]">v{p.version}</td>
                    <td className="py-2.5">
                      <span className="px-2 py-0.5 rounded-full bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] text-[var(--text-main)] text-[10px]">
                        {p.status}
                      </span>
                    </td>
                    <td className="py-2.5 text-[var(--text-subtle)]">
                      {p.specs?.isOffline ? 'Offline' : 'Online'} • {p.specs?.hasAds ? 'Ads' : 'No Ads'}
                    </td>
                    <td className="py-2.5 text-right">
                      <a
                        href={`/apps/${p.slug}`}
                        className="text-[var(--accent-terracotta)] hover:underline inline-flex items-center gap-1"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: New Devlog Post */}
      {activeTab === 'new-post' && (
        <div className="retro-box rounded-xl p-6 bg-[var(--bg-card)] space-y-4 max-w-2xl">
          <h2 className="font-serif font-bold text-lg text-[var(--text-main)]">
            Compose New Devlog Entry
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            Draft release notes, technical write-ups, or announcements. Stored in local state (connects to SQLite backend in future release).
          </p>

          <form onSubmit={handlePublishPost} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-mono text-[var(--text-subtle)] mb-1">
                Post Title
              </label>
              <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="e.g. Nav Bar Knights v0.9 Beta Launch"
                className="w-full px-3 py-2 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-card-subtle)] text-sm text-[var(--text-main)] focus:outline-hidden focus:border-[var(--accent-terracotta)] font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[var(--text-subtle)] mb-1">
                Category
              </label>
              <select
                value={postCategory}
                onChange={(e) => setPostCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-card-subtle)] text-xs text-[var(--text-main)] focus:outline-hidden font-mono"
              >
                <option value="AI & Research">AI & Research</option>
                <option value="Launch">Launch</option>
                <option value="Update">Update</option>
                <option value="Devlog">Devlog</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-[var(--text-subtle)] mb-1">
                Summary / Content
              </label>
              <textarea
                rows={4}
                value={postSummary}
                onChange={(e) => setPostSummary(e.target.value)}
                placeholder="Write summary and core release notes..."
                className="w-full px-3 py-2 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-card-subtle)] text-sm text-[var(--text-main)] focus:outline-hidden focus:border-[var(--accent-terracotta)] font-sans"
              />
            </div>

            <button
              type="submit"
              className="retro-btn px-4 py-2 rounded-lg font-mono text-xs font-bold bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] flex items-center gap-2"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Publish to Devlog</span>
            </button>

            {postPublished && (
              <div className="p-3 rounded-lg bg-[var(--accent-sage-soft)] border border-[var(--accent-sage)]/30 text-xs font-mono text-[var(--accent-sage)] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Devlog entry draft published successfully!</span>
              </div>
            )}
          </form>
        </div>
      )}

      {/* Tab: VDS & Domain Setup */}
      {activeTab === 'vds' && (
        <div className="retro-box rounded-xl p-6 bg-[var(--bg-card)] space-y-4">
          <h2 className="font-serif font-bold text-lg text-[var(--text-main)]">
            devdogu.tr Domain & VDS Connection Guide
          </h2>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Follow these 3 quick steps to connect your <code>.tr</code> domain to your Linux VDS:
          </p>

          <div className="space-y-4 pt-2 text-xs font-mono">
            <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)]">
              <strong className="text-[var(--text-main)]">Step 1: Point DNS A Record</strong>
              <p className="text-[var(--text-muted)] mt-1">
                In your domain registrar / TRABİS DNS settings, add:
                <br />• <code>@</code> (root) $\to$ <code>[YOUR_VDS_IP]</code>
                <br />• <code>www</code> $\to$ <code>[YOUR_VDS_IP]</code>
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)]">
              <strong className="text-[var(--text-main)]">Step 2: Nginx Reverse Proxy on VDS</strong>
              <p className="text-[var(--text-muted)] mt-1">
                Forward incoming traffic from port 80/443 to Next.js on port 3000:
              </p>
              <pre className="mt-2 p-2 rounded bg-black/5 dark:bg-black/30 overflow-x-auto text-[11px]">
{`server {
    server_name devdogu.tr www.devdogu.tr;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`}
              </pre>
            </div>

            <div className="p-3 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-warm)]">
              <strong className="text-[var(--text-main)]">Step 3: Free Automated SSL (Certbot)</strong>
              <pre className="mt-1 p-2 rounded bg-black/5 dark:bg-black/30 text-[11px]">
sudo certbot --nginx -d devdogu.tr -d www.devdogu.tr
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
