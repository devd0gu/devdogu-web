import React from 'react';
import Image from 'next/image';

interface AppIconProps {
  id: string;
  size?: number;
  className?: string;
}

export default function AppIcon({ id, size = 48, className = '' }: AppIconProps) {
  switch (id) {
    case 'cortex':
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-xl overflow-hidden bg-[#241B15] border border-[#E8863C]/30 shadow-xs flex items-center justify-center p-1.5 shrink-0 ${className}`}
        >
          <img
            src="/images/logos/cortex.webp"
            alt="Cortex Logo"
            className="w-full h-full object-contain"
          />
        </div>
      );

    case 'multibrowser':
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-xl overflow-hidden bg-[#1E2421] border border-[#4E7D63]/30 shadow-xs flex items-center justify-center p-1.5 shrink-0 ${className}`}
        >
          <img
            src="/images/logos/multibrowser.png"
            alt="MultiBrowser Logo"
            className="w-full h-full object-contain"
          />
        </div>
      );

    case 'nav-bar-knights':
      return (
        <div
          style={{ width: size, height: size }}
          className={`relative rounded-xl overflow-hidden bg-[#2D2418] border border-[#D48C2E]/40 shadow-xs flex items-center justify-center p-1 shrink-0 ${className}`}
        >
          <img
            src="/images/logos/navbarknights_crest.png"
            alt="Nav Bar Knights Crest"
            className="w-full h-full object-contain pixelated"
          />
        </div>
      );

    case 'paper-launcher':
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl bg-[#F7F4EB] dark:bg-[#201D1A] border border-[#DCD5C5] dark:border-[#38332C] shadow-xs flex items-center justify-center p-2 shrink-0 ${className}`}
        >
          <svg viewBox="0 0 108 108" className="w-full h-full" fill="none">
            {/* Masthead rule */}
            <rect x="22" y="24" width="64" height="4" fill="#2B2520" className="dark:fill-[#ECE7E0]" />
            <rect x="22" y="31" width="64" height="1.5" fill="#2B2520" className="dark:fill-[#ECE7E0]" />
            {/* Headline bar */}
            <rect x="22" y="38" width="64" height="8" fill="#B85834" />
            {/* Left column */}
            <rect x="22" y="52" width="30" height="2" fill="#6B6359" />
            <rect x="22" y="57" width="30" height="2" fill="#6B6359" />
            <rect x="22" y="62" width="30" height="2" fill="#6B6359" />
            <rect x="22" y="67" width="22" height="2" fill="#6B6359" />
            {/* Right column */}
            <rect x="56" y="52" width="30" height="2" fill="#6B6359" />
            <rect x="56" y="57" width="30" height="2" fill="#6B6359" />
            <rect x="56" y="62" width="30" height="2" fill="#6B6359" />
            <rect x="56" y="67" width="18" height="2" fill="#6B6359" />
          </svg>
        </div>
      );

    case 'tg-drive':
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl bg-[#1C2721] border border-[#4E7D63]/30 shadow-xs flex items-center justify-center p-2 shrink-0 ${className}`}
        >
          <svg viewBox="0 0 108 108" className="w-full h-full" fill="none">
            {/* Folder tab */}
            <path
              d="M32 36h14a3 3 0 012.3 1.1l3 3.9H29v-2a3 3 0 013-3z"
              fill="#ECE7E0"
            />
            {/* Folder body */}
            <rect x="26" y="41" width="56" height="34" rx="4" fill="#ECE7E0" />
            {/* Upload arrow */}
            <path
              d="M54 48l10 10.5h-6.5V70h-7v-11.5H44L54 48z"
              fill="#4E7D63"
            />
          </svg>
        </div>
      );

    case 'web-destroyer':
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl bg-[#231818] border border-[#E3744B]/40 shadow-xs flex items-center justify-center p-2 shrink-0 ${className}`}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#E3744B]" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
            <path d="M12 7v10M7 12h10" />
            <circle cx="12" cy="12" r="3" fill="#E3744B" />
          </svg>
        </div>
      );

    case 'allfileopener':
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl bg-[#FAF0E6] dark:bg-[#261E18] border border-[#D9653B]/30 shadow-xs flex items-center justify-center p-2 shrink-0 ${className}`}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#D9653B]" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="13" y2="17" />
          </svg>
        </div>
      );

    default:
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-warm)] flex items-center justify-center p-2 shrink-0 ${className}`}
        >
          <span className="font-serif font-bold text-sm text-[var(--accent-terracotta)]">✦</span>
        </div>
      );
  }
}
