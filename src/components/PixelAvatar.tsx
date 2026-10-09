'use client';

import React from 'react';

export default function PixelAvatar({ size = 40 }: { size?: number }) {
  // A cute 16x16 pixel-art puppy / indie developer mascot in pure SVG
  return (
    <div
      style={{ width: size, height: size }}
      className="inline-flex items-center justify-center rounded-lg bg-[#FAF0E6] dark:bg-[#2A231C] border border-[#E0D5C3] dark:border-[#3D3328] shadow-xs select-none p-1"
      title="devd0gu mascot"
    >
      <svg
        viewBox="0 0 16 16"
        className="w-full h-full pixelated"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ears */}
        <rect x="2" y="2" width="3" height="4" fill="#D9653B" />
        <rect x="11" y="2" width="3" height="4" fill="#D9653B" />
        {/* Head Base */}
        <rect x="3" y="4" width="10" height="8" fill="#E89B6C" />
        {/* Face / Cheeks */}
        <rect x="4" y="6" width="8" height="6" fill="#FCEBD9" />
        {/* Eyes */}
        <rect x="5" y="7" width="2" height="2" fill="#251C17" />
        <rect x="9" y="7" width="2" height="2" fill="#251C17" />
        {/* Eye Sparkles */}
        <rect x="5" y="7" width="1" height="1" fill="#FFFFFF" />
        <rect x="9" y="7" width="1" height="1" fill="#FFFFFF" />
        {/* Snout & Nose */}
        <rect x="7" y="9" width="2" height="1" fill="#251C17" />
        <rect x="7" y="10" width="2" height="1" fill="#D9653B" />
        {/* Cute blush cheeks */}
        <rect x="3" y="9" width="1" height="1" fill="#E87A5D" opacity="0.8" />
        <rect x="12" y="9" width="1" height="1" fill="#E87A5D" opacity="0.8" />
        {/* Paws */}
        <rect x="4" y="12" width="3" height="2" fill="#E89B6C" />
        <rect x="9" y="12" width="3" height="2" fill="#E89B6C" />
      </svg>
    </div>
  );
}
