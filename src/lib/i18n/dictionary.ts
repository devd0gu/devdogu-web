export type Locale = 'en' | 'tr';

export interface Translations {
  nav: {
    overview: string;
    cortex: string;
    projects: string;
    devlog: string;
    privacy: string;
    dashboard: string;
  };
  hero: {
    title: string;
    bio: string;
    github: string;
    playStore: string;
    contact: string;
  };
  focus: {
    tag: string;
    subtitle: string;
    status: string;
    description: string;
    specLink: string;
    privacyLink: string;
    startupLink: string;
    nodeMesh: string;
    nodeDesc: string;
  };
  projects: {
    title: string;
    allLink: string;
    details: string;
    playStore: string;
    catalogTitle: string;
    catalogDesc: string;
  };
  devlog: {
    title: string;
    allLink: string;
    readMore: string;
    pageTitle: string;
    pageDesc: string;
  };
  privacy: {
    hubTitle: string;
    hubDesc: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    noAccounts: string;
    noTrackers: string;
    noCloudProfiling: string;
    readText: string;
    legacyNotice: string;
    effectiveDate: string;
    contactNotice: string;
  };
  footer: {
    tagline: string;
    privacyEnd: string;
  };
}

export const dictionaries: Record<Locale, Translations> = {
  en: {
    nav: {
      overview: 'Overview',
      cortex: 'Cortex',
      projects: 'Projects',
      devlog: 'Devlog',
      privacy: 'Privacy',
      dashboard: 'Dashboard',
    },
    hero: {
      title: 'devd0gu',
      bio: "Independent Android developer. I build offline-first tools, quiet software, and Cortex—an on-device autonomous agent designed around Anthropic's Claude API.",
      github: 'GitHub',
      playStore: 'Google Play',
      contact: 'Email',
    },
    focus: {
      tag: 'Focus Project',
      subtitle: 'Autonomous Mobile Agent • Built with Claude API',
      status: 'Alpha',
      description:
        'Cortex connects Android accessibility services, notification daemons, and C++ JNI with Anthropic Claude 3.5 Sonnet / Haiku. It reads on-screen structure locally and executes multi-step phone workflows without cloud telemetry leakage. Prepared for the Claude for Startups program.',
      specLink: 'Read technical spec',
      privacyLink: 'Privacy Policy',
      startupLink: 'Claude for Startups',
      nodeMesh: '4-Node Agent Mesh',
      nodeDesc: 'Action • Memory • Screen • Decision',
    },
    projects: {
      title: 'Projects & Games',
      allLink: 'All projects',
      details: 'Details →',
      playStore: 'Play Store ↗',
      catalogTitle: 'Projects',
      catalogDesc:
        'Tools, games, and mobile prototypes. Built with an offline-first philosophy, zero advertising telemetry, and native performance.',
    },
    devlog: {
      title: 'Notes & Devlog',
      allLink: 'All entries →',
      readMore: 'Read devlog',
      pageTitle: 'Engineering Dispatches',
      pageDesc:
        'Behind-the-scenes engineering logs, autonomous mobile agent research, and architectural decisions behind devd0gu projects.',
    },
    privacy: {
      hubTitle: 'Privacy Policy Center',
      hubDesc:
        'Official, permanent privacy policies for all applications listed on the Google Play Store and distributed through devdogu.tr.',
      guaranteeTitle: 'Core Guarantee: Best Security is Collecting Zero Data',
      guaranteeDesc:
        'We reject the modern trend of harvesting background metrics. Our utility tools are constructed without internet access capabilities, ensuring your data never leaves your hardware.',
      noAccounts: 'No user accounts or logins',
      noTrackers: 'Zero ad-tracking SDKs',
      noCloudProfiling: 'No cloud database profiling',
      readText: 'Read Full Text',
      legacyNotice: 'Google Play Developer Console registered URLs remain fully compliant & active.',
      effectiveDate: 'Effective Date',
      contactNotice: 'Official Legal Contact',
    },
    footer: {
      tagline: 'Independent Android studio & lab',
      privacyEnd: 'All store privacy endpoints maintained.',
    },
  },
  tr: {
    nav: {
      overview: 'Genel Bakış',
      cortex: 'Cortex',
      projects: 'Projeler',
      devlog: 'Günlük',
      privacy: 'Gizlilik',
      dashboard: 'Yönetim',
    },
    hero: {
      title: 'devd0gu',
      bio: "Bağımsız Android geliştiricisi. Çevrimdışı öncelikli araçlar, sakin yazılımlar ve Anthropic'in Claude API mimarisi üzerine kurulu otonom mobil ajan Cortex'i geliştiriyorum.",
      github: 'GitHub',
      playStore: 'Google Play',
      contact: 'E-posta',
    },
    focus: {
      tag: 'Öne Çıkan Proje',
      subtitle: 'Otonom Mobil Ajan • Claude API ile Geliştirildi',
      status: 'Alfa',
      description:
        "Cortex; Android erişilebilirlik servislerini, bildirim arka plan süreçlerini ve C++ JNI altyapısını Anthropic Claude 3.5 Sonnet / Haiku ile buluşturur. Ekrandaki yapıyı yerel olarak okur ve kullanıcı verisini dışarı sızdırmadan çok adımlı telefon görevlerini tamamlar. Claude for Startups programı için hazırlandı.",
      specLink: 'Teknik mimariyi incele',
      privacyLink: 'Gizlilik Politikası',
      startupLink: 'Claude for Startups Programı',
      nodeMesh: '4 Düğümlü Ajan Ağı',
      nodeDesc: 'Eylem • Bellek • Ekran • Karar',
    },
    projects: {
      title: 'Projeler & Oyunlar',
      allLink: 'Tüm projeler',
      details: 'İncele →',
      playStore: 'Play Store ↗',
      catalogTitle: 'Projeler',
      catalogDesc:
        'Araçlar, oyunlar ve mobil prototipler. Çevrimdışı öncelikli mimari, sıfır reklam telemetrisi ve saf yerel performansla üretildi.',
    },
    devlog: {
      title: 'Notlar & Geliştirici Günlüğü',
      allLink: 'Tüm yazılar →',
      readMore: 'Yazıyı oku',
      pageTitle: 'Geliştirici Günlüğü & Notlar',
      pageDesc:
        'Otonom mobil ajan araştırmaları, mimari kararlar ve projelerin perde arkasındaki mühendislik süreçleri.',
    },
    privacy: {
      hubTitle: 'Gizlilik Politikaları Merkezi',
      hubDesc:
        'Google Play Store üzerinde kayıtlı ve devdogu.tr aracılığıyla dağıtılan tüm uygulamaların resmi, kalıcı gizlilik sözleşmeleri.',
      guaranteeTitle: 'Temel İlkemiz: En İyi Güvenlik, Hiç Veri Toplamamaktır',
      guaranteeDesc:
        'Kullanıcı verilerini arka planda toplama alışkanlığını reddediyoruz. Doküman ve sistem araçlarımız internet erişim izni dahi istemez; verileriniz cihazınızda kalır.',
      noAccounts: 'Kullanıcı hesabı veya giriş yok',
      noTrackers: 'Sıfır izleyici / reklam SDK',
      noCloudProfiling: 'Bulutta profil oluşturma yok',
      readText: 'Metni Oku',
      legacyNotice: 'Google Play Developer Console üzerinde kayıtlı eski URL bağlantıları tam uyumlu çalışır.',
      effectiveDate: 'Yürürlük Tarihi',
      contactNotice: 'Resmi Bildirimler',
    },
    footer: {
      tagline: 'Bağımsız Android stüdyosu & laboratuvarı',
      privacyEnd: 'Tüm mağaza gizlilik bağlantıları korunmaktadır.',
    },
  },
};
