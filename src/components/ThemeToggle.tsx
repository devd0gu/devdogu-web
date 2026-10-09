'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    if (nextState) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-card)] opacity-50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-1.5 rounded-lg border border-[var(--border-warm)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus:outline-hidden"
      aria-label="Tema Değiştir"
      title={isDark ? 'Açık Kağıt Modu' : 'Koyu Gece Modu'}
    >
      {isDark ? <Sun className="w-4 h-4 text-[#E5A149]" /> : <Moon className="w-4 h-4 text-[#D9653B]" />}
    </button>
  );
}
