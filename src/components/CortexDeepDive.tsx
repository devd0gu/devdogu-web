'use client';

import React from 'react';
import { Terminal, Shield, Cpu, Zap, EyeOff, Radio, Smartphone, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CortexDeepDive() {
  const { locale } = useLanguage();
  const isTr = locale === 'tr';

  return (
    <div className="space-y-10 pt-6 border-t border-[var(--border-light)]">
      {/* Interactive / Aesthetic Console Session */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-clay)] uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>{isTr ? 'Örnek Oturum Akışı & Karar Katmanı' : 'Sample Session & Decision Pipeline'}</span>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-subtle)]">dev.cortex.agent v0.1.0</span>
        </div>

        <div className="rounded-xl overflow-hidden border border-[var(--border-warm)] bg-[#171411] text-[#ede7de] font-mono text-xs sm:text-sm shadow-md">
          {/* Mac/Terminal Titlebar */}
          <div className="px-4 py-2.5 bg-[#201c17] border-b border-[#2d2720] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e85f5c]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0ad4e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5cb85c]" />
            </div>
            <span className="text-[11px] text-[#9a9184]">cortex-daemon ~ Galaxy S24 Ultra (JNI/OpenCL)</span>
            <span className="text-[10px] text-[#5cb85c] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5cb85c] animate-pulse" />
              <span>ONLINE</span>
            </span>
          </div>

          {/* Console Body */}
          <div className="p-4 sm:p-6 space-y-4 text-xs sm:text-sm leading-relaxed">
            {/* Command 1 */}
            <div className="space-y-1">
              <div className="text-[#e8944f] flex items-center gap-2">
                <span className="text-[#857c6e] select-none">&gt;</span>
                <span className="font-semibold">{isTr ? 'sesi 1 tık artır' : 'turn up the volume'}</span>
              </div>
              <div className="pl-4 border-l border-[#3a3229] space-y-0.5 text-[#9a9184]">
                <div className="text-[11px] text-[#857c6e] flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#f0ad4e]" />
                  <span>[Privileged Path • Wireless ADB Daemon] No screen-read, zero model cost</span>
                </div>
                <div className="text-[#ede7de] font-medium">media volume 3 → 4 <span className="text-[#5cb85c]">✓ state verified</span></div>
              </div>
            </div>

            {/* Command 2 */}
            <div className="space-y-1">
              <div className="text-[#e8944f] flex items-center gap-2">
                <span className="text-[#857c6e] select-none">&gt;</span>
                <span className="font-semibold">{isTr ? 'bunu ingilizceye çevir: toplantı saat beşte' : 'translate to Turkish: meeting is at five'}</span>
              </div>
              <div className="pl-4 border-l border-[#3a3229] space-y-0.5 text-[#9a9184]">
                <div className="text-[11px] text-[#857c6e] flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-[#5cb85c]" />
                  <span>[Capability Router] Dedicated translation module, 100% on-device</span>
                </div>
                <div className="text-[#ede7de] font-medium">{isTr ? '"Meeting is at five o\'clock"' : '"Toplantı saat beşte"'}</div>
              </div>
            </div>

            {/* Command 3 */}
            <div className="space-y-1">
              <div className="text-[#e8944f] flex items-center gap-2">
                <span className="text-[#857c6e] select-none">&gt;</span>
                <span className="font-semibold">{isTr ? 'nasılsın botçuk' : 'how are you doing?'}</span>
              </div>
              <div className="pl-4 border-l border-[#3a3229] space-y-0.5 text-[#9a9184]">
                <div className="text-[11px] text-[#857c6e] flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-[#337ab7]" />
                  <span>[FastPath Chit-chat] Instant response, zero token overhead</span>
                </div>
                <div className="text-[#ede7de]">{isTr ? 'Gayet iyiyim! Telefonunda ne yapmak istersin?' : "Doing great! What can I help you do on your phone today?"}</div>
              </div>
            </div>

            {/* Command 4 */}
            <div className="space-y-1">
              <div className="text-[#e8944f] flex items-center gap-2">
                <span className="text-[#857c6e] select-none">&gt;</span>
                <span className="font-semibold">{isTr ? 'uçak biletini bul ve takvime ekle' : 'find the flight ticket email and add it to calendar'}</span>
              </div>
              <div className="pl-4 border-l border-[#3a3229] space-y-0.5 text-[#9a9184]">
                <div className="text-[11px] text-[#857c6e] flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-[#e8944f]" />
                  <span>[SwitchableEngine • Optional Claude 3.5 Sonnet] PII regex masked locally</span>
                </div>
                <div className="text-[#ede7de]">{isTr ? 'Çok adımlı görev planlandı: PII maskelendi → Görev adımları AccessibilityService ile yürütülüyor.' : 'Multi-step plan synthesized: PII masked locally → Execution dispatched via AccessibilityService.'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Flow Diagram */}
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-[var(--text-main)]">
          {isTr ? 'Mimari Karar Akışı: "LLM Son Çare, İlk Çare Değil"' : 'Decision Hierarchy: "LLM is the Last Resort"'}
        </h2>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {isTr
            ? 'Çoğu mobil yapay zeka asistanı ekrana bakıp tahmin yürütmeye çalışır. Cortex ise pil ve bağlam (context) tasarrufu için deterministik yolları önceleyen 4 aşamalı hiyerarşik bir yönlendirici kullanır:'
            : 'Most mobile agents burn battery by blindly screenshotting the screen. Cortex inverts this with a four-tier hierarchical execution pipeline:'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-light)] space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[var(--accent-clay)]">01. FastPath & Privileged ADB</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-sage-soft)] text-[var(--accent-sage)]">0 tokens</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {isTr
                ? 'Wi-Fi, Bluetooth, ses, parlaklık ve DND doğrudan kablosuz ADB daemon üzerinden değiştirilir ve doğrulanır. Ekran açılmaz, model çağrılmaz.'
                : 'System toggles execute straight through Wireless Debugging ADB shell with state read-back verification. Screen stays off.'}
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-light)] space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[var(--accent-clay)]">02. Capability Router</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-sage-soft)] text-[var(--accent-sage)]">Deterministic</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {isTr
                ? 'Sohbet, çeviri ve kullanıcı tanımlı makrolar özel mikro modüllere yönlendirilir. Ağır planlayıcıya girmeden sonuca ulaşılır.'
                : 'Chit-chat, translation, and user macros route to targeted lightweight handlers without invoking heavy agent reasoning.'}
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-light)] space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[var(--accent-clay)]">03. On-Device llama.cpp</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-light)]">100% Local</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {isTr
                ? 'JNI ve Adreno OpenCL hızlandırmalı Qwen2.5-3B GGUF. GBNF grameriyle çıktı garanti edilir; veri asla cihazdan çıkmaz.'
                : 'Qwen2.5-3B loaded via native JNI with OpenCL GPU acceleration. Strict GBNF grammars constrain model output to valid phone actions.'}
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-light)] space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[var(--accent-clay)]">04. Optional Claude API</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-light)]">Keystore Encrypted</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {isTr
                ? 'Karmaşık çok adımlı görevler için Claude 3.5 Sonnet / Haiku. Hassas veriler (telefon, e-posta, kimlik no) gönderilmeden önce cihazda maskelenir.'
                : 'Deep multi-step reasoning via Claude 3.5 Sonnet. PII is regex-masked locally; API key stored in Android hardware Keystore.'}
            </p>
          </div>
        </div>
      </div>

      {/* Codebase & Engineering Numbers */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
          {isTr ? 'Mühendislik Metrikleri & Repo Özeti' : 'Engineering Metrics & Repository Audit'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-[var(--border-light)] bg-[var(--bg-subtle)]">
            <div className="text-[var(--text-subtle)]">Kotlin Core:</div>
            <div className="font-bold text-[var(--text-main)] text-sm mt-0.5">~28,000 Lines</div>
            <div className="text-[10px] text-[var(--text-subtle)]">230+ Source Files</div>
          </div>
          <div className="p-3 rounded-lg border border-[var(--border-light)] bg-[var(--bg-subtle)]">
            <div className="text-[var(--text-subtle)]">Unit Tests:</div>
            <div className="font-bold text-[var(--accent-sage)] text-sm mt-0.5">553 Passing</div>
            <div className="text-[10px] text-[var(--text-subtle)]">6,600+ test LoC</div>
          </div>
          <div className="p-3 rounded-lg border border-[var(--border-light)] bg-[var(--bg-subtle)]">
            <div className="text-[var(--text-subtle)]">Native Bridge:</div>
            <div className="font-bold text-[var(--text-main)] text-sm mt-0.5">llama.cpp JNI</div>
            <div className="text-[10px] text-[var(--text-subtle)]">Adreno OpenCL GPU</div>
          </div>
          <div className="p-3 rounded-lg border border-[var(--border-light)] bg-[var(--bg-subtle)]">
            <div className="text-[var(--text-subtle)]">Target Platform:</div>
            <div className="font-bold text-[var(--text-main)] text-sm mt-0.5">Android 8.0+</div>
            <div className="text-[10px] text-[var(--text-subtle)]">API 26 • No Root</div>
          </div>
        </div>
      </div>

      {/* Source Repo Link Callout */}
      <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-light)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-serif font-bold text-sm sm:text-base text-[var(--text-main)]">
            {isTr ? 'Açık Kaynak Kod & Mimari Dokümantasyonu' : 'Open Source Repository & Technical Documentation'}
          </h4>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            {isTr
              ? 'Tüm teknik tasarım ARCHITECTURE.md, MASTER_TODO ve eğitim hattı kodlarıyla GitHub üzerinde incelenebilir.'
              : 'Inspect the complete system design, ARCHITECTURE.md specs, and training pipeline on GitHub.'}
          </p>
        </div>
        <a
          href="https://github.com/devd0gu/cortex"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-[var(--accent-clay)] text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
        >
          <span>github.com/devd0gu/cortex ↗</span>
        </a>
      </div>
    </div>
  );
}
