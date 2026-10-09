import { Announcement } from '@/types';

export const announcements: Announcement[] = [
  {
    id: '1',
    slug: 'introducing-cortex-android-ai-agent',
    title: 'Introducing Cortex: Android AI Agent Architecture powered by Claude',
    date: 'October 2026',
    category: 'AI & Research',
    summary:
      'Designing an autonomous, privacy-conscious Android agent using Anthropic Claude models for cross-application orchestration.',
    content: [
      'We are officially unveiling Cortex, our exploratory autonomous agent designed for Android. By pairing Claude 3.5 Sonnet and Haiku with system-level Android accessibility and automation primitives, Cortex turns natural language intent into verified multi-step actions.',
      'Unlike cloud-dependent assistants that upload entire screen streams, Cortex uses a local privacy perimeter to parse on-screen structures and sanitize sensitive data before querying the Claude API.',
      'We are actively preparing our submission for the Anthropic Claude for Startups program to accelerate our inference pipeline and benchmark mobile agent reliability.',
    ],
    tags: ['Cortex', 'Claude API', 'Anthropic Startups', 'AI Agent', 'Android'],
    relatedProjectId: 'cortex',
  },
  {
    id: '2',
    slug: 'paper-launcher-newspaper-broadsheet-concept',
    title: 'Paper: Why we built a Newspaper Launcher for Android',
    date: 'October 2026',
    category: 'Devlog',
    summary:
      'Replacing addictive dopamine grids with the quiet, intentional typography of a daily morning broadsheet.',
    content: [
      'Modern smartphones have become casinos of notification pings and neon badges. With Paper, we replaced the home screen with an editorial layout inspired by historical newspapers.',
      'Paper features a Gothic blackletter masthead, natural notification headlines sorted with person-to-person messages first, an alphabetical index with instant search, and an ultra-contrast E-ink mode.',
      'Built with zero cloud synchronization, zero tracking libraries, and completely offline.',
    ],
    tags: ['Paper Launcher', 'Android', 'Design', 'Minimalism'],
    relatedProjectId: 'paper-launcher',
  },
  {
    id: '3',
    slug: 'all-file-opener-offline-pdf-suite-update',
    title: 'All File Opener v2.1: On-Device PDF Assembly and Encryption',
    date: 'September 2026',
    category: 'Update',
    summary:
      'Full PDF merging, splitting, reordering, and password protection executed strictly in device RAM.',
    content: [
      'All File Opener v2.1 introduces comprehensive PDF manipulation tools that operate without uploading a single byte to external servers.',
      'The application continues to declare zero internet permissions (android.permission.INTERNET), providing verifiable mathematical assurance that your contracts, statements, and documents never leak.',
    ],
    tags: ['All File Opener', 'PDF', 'Offline-First', 'Security'],
    relatedProjectId: 'allfileopener',
  },
];
