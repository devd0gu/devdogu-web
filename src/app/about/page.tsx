import React from 'react';
import PixelAvatar from '@/components/PixelAvatar';
import { Terminal, Shield, Sparkles, Heart, Coffee, Cpu, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkında & Vizyon • devd0gu',
  description: 'devd0gu hakkında bilgi, bağımsız geliştirici felsefesi ve gizlilik odaklı yazılım manifestosu.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-[var(--border-warm)]">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-terracotta)] font-semibold bg-[var(--accent-terracotta-soft)] px-2.5 py-0.5 rounded-full border border-[var(--accent-terracotta)]/25">
          <Terminal className="w-3.5 h-3.5" />
          <span>Hakkında & Felsefe</span>
        </div>
        <div className="flex items-center gap-4">
          <PixelAvatar size={56} />
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
              devd0gu kimdir?
            </h1>
            <p className="text-sm font-mono text-[var(--accent-clay)] mt-0.5">
              bağımsız yazılımcı • mobil geliştirici • oyun tasarımcısı
            </p>
          </div>
        </div>
      </div>

      {/* Narrative */}
      <div className="space-y-6 text-base text-[var(--text-muted)] leading-relaxed">
        <p>
          Merhaba! <strong className="text-[var(--text-main)] font-semibold">devd0gu</strong>, sade, hızlı ve kullanıcı gizliliğine tavizsiz saygı duyan bağımsız yazılımlar üretmek amacıyla hayata geçmiş kişisel bir geliştirici markasıdır.
        </p>

        <p>
          Mobil dünyada kullanıcıların her dokunuşunun takip edildiği, basit bir hesap makinesinin veya PDF okuyucunun bile yüzlerce MB boyutlara ulaşıp sunuculara telemetri gönderdiği bir dönemdeyiz. devd0gu tam olarak buna alternatif olmak için var.
        </p>

        <div className="retro-box rounded-2xl p-6 bg-[var(--bg-card)] border-2 border-[var(--border-warm)] space-y-4 my-8">
          <h2 className="font-serif text-xl font-bold text-[var(--text-main)] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[var(--accent-sage)]" />
            <span>devd0gu Geliştirme Manifestosu</span>
          </h2>
          <ul className="space-y-3 text-sm text-[var(--text-main)]">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[var(--accent-terracotta)] shrink-0 mt-0.5" />
              <span><strong>Çevrimdışı Öncelik (Offline-First):</strong> Bir dosya yöneticisi ya da okuyucu çalışmak için internete ihtiyaç duymamalıdır.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[var(--accent-terracotta)] shrink-0 mt-0.5" />
              <span><strong>Sıfır Telemetri:</strong> Kullanıcının ne yaptığı, ne okuduğu veya ne gezindiği yalnızca kendisini ilgilendirir.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[var(--accent-terracotta)] shrink-0 mt-0.5" />
              <span><strong>Şeffaf ve Açık:</strong> Sözleşmeler karmaşık hukuk labirentleri yerine anlaşılır dille yazılır.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[var(--accent-terracotta)] shrink-0 mt-0.5" />
              <span><strong>Tatlı & Keyifli:</strong> İşlevsellik kadar görsel estetik, hafif retro dokunuşlar ve kullanıcı deneyimi de önemlidir.</span>
            </li>
          </ul>
        </div>

        <h2 className="font-serif text-2xl font-bold text-[var(--text-main)] pt-4">
          Nelerle Geliştiriyorum?
        </h2>
        <p>
          Mobil uygulamalarımda modern <strong>Android / Kotlin</strong> ekosistemi, hafif yerel SQLite motorları ve performans odaklı C++/Rust kütüphaneleri kullanıyorum. Oyun projelerimde ise <strong>Unity</strong> motoru ve özel piksel sanatı çizimleri ile çalışıyorum.
        </p>
      </div>
    </div>
  );
}
