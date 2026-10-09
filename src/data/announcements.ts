import { Announcement } from '@/types';

export const announcements: Announcement[] = [
  {
    id: '1',
    slug: 'introducing-cortex-android-ai-agent',
    title: 'Introducing Cortex: Android AI Agent Architecture powered by Claude',
    titleTr: 'Cortex Karşınızda: Claude Destekli Android Otonom Yapay Zeka Ajanı',
    date: 'October 2026',
    dateTr: 'Ekim 2026',
    category: 'AI & Research',
    categoryTr: 'Yapay Zeka & Araştırma',
    summary:
      'Designing an autonomous, privacy-conscious Android agent using Anthropic Claude models for cross-application orchestration.',
    summaryTr:
      "Anthropic Claude modellerini kullanarak uygulamalar arası görevleri yürüten, gizlilik odaklı bir Android otonom ajan mimarisi.",
    content: [
      'We are officially unveiling Cortex, our exploratory autonomous agent designed for Android. By pairing Claude 3.5 Sonnet and Haiku with system-level Android accessibility and automation primitives, Cortex turns natural language intent into verified multi-step actions.',
      'Unlike cloud-dependent assistants that upload entire screen streams, Cortex uses a local privacy perimeter to parse on-screen structures and sanitize sensitive data before querying the Claude API.',
      'We are actively preparing our submission for the Anthropic Claude for Startups program to accelerate our inference pipeline and benchmark mobile agent reliability.',
    ],
    contentTr: [
      "Android için tasarladığımız deneysel otonom asistan Cortex'i duyuruyoruz. Claude 3.5 Sonnet ve Haiku'yu sistem seviyesinde erişilebilirlik ve otomasyon mekanizmalarıyla birleştiren Cortex, doğal dil isteklerini doğrulanmış telefon eylemlerine dönüştürüyor.",
      "Tüm ekran görüntüsünü buluta yükleyen asistanların aksine Cortex, ekrandaki hiyerarşiyi cihaz içinde ayrıştırır ve hassas verileri ayıkladıktan sonra Claude API'ye sorgu gönderir.",
      "Mobil ajanımızın güvenilirliğini ve çıkarım hızını artırmak amacıyla Anthropic Claude for Startups programı başvurusunu hazırlıyoruz.",
    ],
    tags: ['Cortex', 'Claude API', 'Anthropic Startups', 'AI Agent', 'Android'],
    relatedProjectId: 'cortex',
  },
  {
    id: '2',
    slug: 'paper-launcher-newspaper-broadsheet-concept',
    title: 'Paper: Why we built a Newspaper Launcher for Android',
    titleTr: 'Kâğıt: Neden Android İçin Bir Gazete Launcher Geliştirdik?',
    date: 'October 2026',
    dateTr: 'Ekim 2026',
    category: 'Devlog',
    categoryTr: 'Geliştirici Günlüğü',
    summary:
      'Replacing addictive dopamine grids with the quiet, intentional typography of a daily morning broadsheet.',
    summaryTr:
      'Dopamin tuzağı simge ızgaralarını, sabah gazetesinin sakin ve bilinçli editoryal tipografisiyle değiştirmek.',
    content: [
      'Modern smartphones have become casinos of notification pings and neon badges. With Paper, we replaced the home screen with an editorial layout inspired by historical newspapers.',
      'Paper features a Gothic blackletter masthead, natural notification headlines sorted with person-to-person messages first, an alphabetical index with instant search, and an ultra-contrast E-ink mode.',
      'Built with zero cloud synchronization, zero tracking libraries, and completely offline.',
    ],
    contentTr: [
      'Modern akıllı telefonlar sürekli bildirim çalan dijital kumarhanelere dönüştü. Kâğıt ile ana ekranı tarihi gazetelerin mizanpajından ilham alan sakin bir editoryal tasarıma çevirdik.',
      'Gotik gazete başlığı, kişisel mesajları öne alan manşet bildirimleri, alfabetik fihrist ve yüksek kontrastlı E-ink modu içerir.',
      'Sıfır bulut eşitlemesi, sıfır izleme kütüphanesi ve tamamen çevrimdışı.',
    ],
    tags: ['Paper Launcher', 'Android', 'Design', 'Minimalism'],
    relatedProjectId: 'paper-launcher',
  },
  {
    id: '3',
    slug: 'all-file-opener-offline-pdf-suite-update',
    title: 'All File Opener v2.1: On-Device PDF Assembly and Encryption',
    titleTr: 'All File Opener v2.1: Tamamen Cihaz İçi PDF Yönetimi ve Şifreleme',
    date: 'September 2026',
    dateTr: 'Eylül 2026',
    category: 'Update',
    categoryTr: 'Güncelleme',
    summary:
      'Full PDF merging, splitting, reordering, and password protection executed strictly in device RAM.',
    summaryTr:
      'İnternete tek bir bayt yüklemeden, doğrudan cihaz belleğinde çalışan PDF birleştirme, bölme ve şifreleme özellikleri.',
    content: [
      'All File Opener v2.1 introduces comprehensive PDF manipulation tools that operate without uploading a single byte to external servers.',
      'The application continues to declare zero internet permissions (android.permission.INTERNET), providing verifiable mathematical assurance that your contracts, statements, and documents never leak.',
    ],
    contentTr: [
      'All File Opener v2.1, belgelerinizi harici sunuculara göndermeden doğrudan telefon işlemcinizle çalışan PDF düzenleme araçlarını kullanıma sunuyor.',
      'Uygulama sıfır internet izni (android.permission.INTERNET) kuralını koruyarak sözleşme ve hassas evraklarınızın asla dışarı sızmayacağını garanti ediyor.',
    ],
    tags: ['All File Opener', 'PDF', 'Offline-First', 'Security'],
    relatedProjectId: 'allfileopener',
  },
];
