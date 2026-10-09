import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'cortex',
    slug: 'cortex',
    title: 'Cortex',
    titleTr: 'Cortex',
    tagline: 'On-Device Android Phone Assistant & Hybrid Dual-Engine Agent',
    taglineTr: 'Cihaz İçi Android Asistanı & Hibrit Çift Motorlu Otonom Ajan',
    shortDescription:
      'An on-device phone assistant built with llama.cpp (Qwen2.5) and optional Claude API. Privileged ADB path and Capability Router first, screen-reading as fallback.',
    shortDescriptionTr:
      'llama.cpp (Qwen2.5) ve opsiyonel Claude API ile çalışan cihaz içi telefon asistanı. Ekran okumayı son çareye bırakan Privileged ADB ve Yetenek Yönlendiricisi mimarisi.',
    fullDescription:
      'Cortex is an on-device Android assistant that executes system actions in your own language—preferably without ever looking at the screen. System settings (Wi-Fi, Bluetooth, volume, DND) run directly through a Privileged ADB daemon with state read-back verification. A local GGUF model (Qwen2.5 family via llama.cpp JNI and OpenCL on Adreno) uses GBNF grammars to guarantee valid execution with zero data leaving the phone. For complex multi-step reasoning, an optional Claude API fallback can be engaged with automatic local PII masking.',
    fullDescriptionTr:
      'Cortex, verdiğiniz komutları kendi dilinizde doğrudan yerine getiren ve ekrana bakmayı en son çareye bırakan cihaz içi bir Android asistanıdır. Sistem ayarları (Wi-Fi, Bluetooth, ses, rahatsız etme modu), kablosuz ADB arka plan süreci ve gerçek durum teyidi ile ekrana dokunmadan değiştirilir. Cihaz içi GGUF modeli (llama.cpp JNI & Adreno OpenCL hızlandırmalı Qwen2.5), GBNF gramer kurallarıyla telefonunuzu terk etmeyen güvenli bir döngüde çalışır. İleri düzey çok adımlı görevler için yerel PII maskelemesi içeren opsiyonel Claude API motoru devreye alınabilir.',
    category: 'AI Agent',
    tags: ['Android', 'On-Device LLM', 'llama.cpp', 'Qwen2.5', 'Claude API', 'ADB Shell', 'No Root'],
    status: 'In Development',
    statusTr: 'Geliştiriliyor',
    version: '0.1.0-alpha',
    updatedAt: 'October 2026',
    packageId: 'dev.cortex.agent',
    iconName: 'cortex',
    accentColor: '#D9653B',
    isFlagship: true,
    isClaudePowered: true,
    links: {
      privacy: '/apps/cortex/privacy',
      gitHub: 'https://github.com/devd0gu/cortex',
    },
    features: [
      'Privileged Path: ADB over Wi-Fi daemon toggles settings with read-back verification',
      'Local Engine: Qwen2.5-3B via llama.cpp JNI & OpenCL acceleration with GBNF grammar constraints',
      'Capability Router: FastPath chit-chat, offline translation, and macro replay without model overhead',
      'Optional Claude Fallback: SwitchableEngine with Android Keystore encryption & on-device PII masking',
      'Screen-reading fallback: AccessibilityService pipeline for navigating legacy and third-party apps',
      'Dedicated training pipeline: LoRA fine-tuning for AndroidControl datasets in training/',
    ],
    featuresTr: [
      'Privileged Path: Ekranı açmadan Wi-Fi ADB üzerinden ayar değiştirme ve teyit okuma',
      'Yerel Motor: llama.cpp JNI & OpenCL hızlandırmalı Qwen2.5-3B ve GBNF gramer sınırlaması',
      'Capability Router: Model çalıştırmadan sohbet, çeviri ve makro oynatan hızlı yol (FastPath)',
      'Opsiyonel Claude Motoru: Cihaz içi PII maskelemesi ve Android Keystore şifrelemeli SwitchableEngine',
      'Erişilebilirlik Yedeği: Üçüncü parti uygulamaları tıklamak ve kaydırmak için son çare AccessibilityService',
      'Özel Eğitim Hattı: training/ altında AndroidControl verisiyle Qwen2.5 LoRA fine-tuning pipeline',
    ],
    specs: {
      isOffline: true,
      hasAds: false,
      hasAnalytics: false,
      aiModel: 'Qwen2.5-3B GGUF + Claude 3.5 Fallback',
      permissionCount: 3,
    },
  },
  {
    id: 'paper-launcher',
    slug: 'paper-launcher',
    title: 'Paper – Newspaper Launcher',
    titleTr: 'Kâğıt – Gazete Launcher',
    tagline: 'A Calm Home Screen Set Like a Broadsheet Newspaper',
    taglineTr: 'Gazete gibi dizilmiş sakin bir ana ekran',
    shortDescription:
      'No icon grids, no notification badges, no digital clutter. Just typography, fine rules, and quiet editorial pages turned like a book.',
    shortDescriptionTr:
      'Simge ızgarası yok, bildirim rozetleri yok, kalabalık yok. Yalnızca yazı, ince çizgiler ve gazete gibi çevrilen sakin sayfalar.',
    fullDescription:
      'Paper transforms your smartphone into a daily broadsheet newspaper. Features a classic blackletter masthead, editorial serif headlines for important messages, and an alphabetical index with instant accent-aware search. Includes an ultra-low power E-ink mode and 5 archival paper palettes.',
    fullDescriptionTr:
      'Kâğıt, telefonunuzu sabah gazetesinin ön sayfasına dönüştürür. Gotik gazete başlığı, bildirimleri haber gibi dizen manşet sistemi ve Türkçe harflere duyarlı fihrist araması içerir. Düşük güç tüketen E-ink modu ve 5 editoryal renk paleti mevcuttur.',
    category: 'Android',
    tags: ['Android', 'Launcher', 'Minimalism', 'E-Ink', 'Zero Ads', 'Offline'],
    status: 'In Development',
    statusTr: 'Geliştiriliyor',
    version: '1.0.0-rc1',
    updatedAt: 'October 2026',
    packageId: 'com.d0gu.paperlauncher',
    iconName: 'paper-launcher',
    accentColor: '#B85834',
    links: {
      privacy: '/privacy/paper-launcher',
      playStore: 'https://play.google.com/store/apps/dev?id=8761490712491659993',
    },
    features: [
      'Front-page headlines summarizing notifications with human-first sorting',
      'Alphabetical index drawer with learning search & arithmetic evaluation',
      'Dedicated E-ink mode: zero animation, pure high-contrast monochrome',
      '5 editorial themes: Newsprint, Sepia, Night, B&W, and Auto-ambient',
      'Zero advertising, zero tracking, no accounts or cloud dependencies',
    ],
    featuresTr: [
      'Kişilerden gelen mesajları önceleyen akıllı manşet bildirimleri',
      'Hesap yapabilen ve en çok açılanları öğrenen alfabetik fihrist',
      'Saf siyah-beyaz, animasyonsuz yüksek kontrastlı E-ink modu',
      '5 editoryal tema: Gazete Kâğıdı, Sepya, Gece, Siyah-Beyaz, Otomatik',
      'Sıfır reklam, sıfır izleyici, hesap veya bulut bağımlılığı yok',
    ],
    specs: {
      isOffline: true,
      hasAds: false,
      hasAnalytics: false,
      permissionCount: 2,
    },
  },
  {
    id: 'nav-bar-knights',
    slug: 'nav-bar-knights',
    title: 'Nav Bar Knights',
    titleTr: 'Nav Bar Knights',
    tagline: 'Idle Retro RPG Running Inside Your Android Navigation Bar',
    taglineTr: 'Android Gezinme Çubuğunda Yaşayan Retro Idle RPG',
    shortDescription:
      'Micro-heroes battle monsters and gather legendary loot along the bottom edge of your screen while you use other apps.',
    shortDescriptionTr:
      'Siz günlük uygulamalarınızı kullanırken ekranın altındaki dock çubuğunda canavarlarla savaşan ve eşya toplayan piksel kahramanlar.',
    fullDescription:
      'Nav Bar Knights is an ambient idle role-playing game that resides directly inside the Android system navigation bar. Engineered with a custom zero-allocation 2D rendering pipeline to ensure negligible battery impact. Features a 10-tier item rarity matrix (from Common up to Cosmic), a 9-to-1 alchemy cube system, and gem socketing.',
    fullDescriptionTr:
      'Nav Bar Knights, doğrudan Android gezinme çubuğunun içinde çalışan ortam tabanlı bir idle RPG oyunudur. Pil tüketimini ve GC takılmalarını sıfırlayan özel 2D render motoruna sahiptir. 10 kademeli eşya sistemi, 9-to-1 simya küpü ve soketlenebilir mücevherler barındırır.',
    category: 'Game',
    tags: ['Android', 'Idle RPG', 'System Overlay', 'Pixel Art', 'Zero-GC Engine'],
    status: 'In Development',
    statusTr: 'Geliştiriliyor',
    version: '0.8.4',
    updatedAt: 'October 2026',
    previewImage: '/images/projects/navbarknights_preview.png',
    iconName: 'nav-bar-knights',
    accentColor: '#D48C2E',
    links: {
      privacy: '/privacy/nav-bar-knights',
    },
    features: [
      'Runs as an ultra-lightweight overlay along the bottom system dock',
      '10-tier rarity itemization with socketed gems and secondary affixes',
      'Zero-allocation game loop preventing Android GC stutters',
      'Hero-dric alchemy cube for synthesis and gear progression',
    ],
    featuresTr: [
      'Gezinme çubuğunda çalışan ultra hafif katman mimarisi',
      'Common\'dan Cosmic\'e 10 kademeli eşya ve soketleme mekaniği',
      'Takılmaları önleyen sıfır-tahsisli (zero-allocation) döngü',
      'Eşya sentezi ve geliştirme için Hero-dric simya küpü',
    ],
    specs: {
      isOffline: true,
      hasAds: false,
      hasAnalytics: false,
    },
  },
  {
    id: 'web-destroyer',
    slug: 'web-destroyer',
    title: 'Web Destroyer',
    titleTr: 'Web Destroyer',
    tagline: 'Twin-Stick Arcade Combat Across Live Web Pages',
    taglineTr: 'Canlı Web Sayfalarında Twin-Stick Arcade Savaşı',
    shortDescription:
      'Turn Wikipedia entries, articles, and websites into interactive destructible battlefields with fast twin-stick arcade controls.',
    shortDescriptionTr:
      'Wikipedia sayfalarını, makaleleri ve siteleri parçalanabilir etkileşimli bir arcade savaş alanına dönüştürün.',
    fullDescription:
      'Web Destroyer renders live HTML and web content as a destructible canvas. Players pilot agile fighter crafts directly on top of parsed web layouts, blasting headlines, blasting ads, and destroying DOM nodes into dynamic physics debris.',
    fullDescriptionTr:
      'Web Destroyer, canlı web içeriklerini parçalanabilir bir tuval olarak işler. Oyuncular çevik savaş gemilerini web sayfalarının üzerinde uçurarak manşetleri, reklamları ve DOM düğümlerini dinamik fizik parçacıklarına dönüştürür.',
    category: 'Game',
    tags: ['Android', 'Arcade Game', 'Twin-Stick', 'Physics', 'LibGDX'],
    status: 'In Development',
    statusTr: 'Geliştiriliyor',
    version: '0.7.1',
    updatedAt: 'October 2026',
    previewImage: '/images/projects/webdestroyer_preview.png',
    iconName: 'web-destroyer',
    accentColor: '#E3744B',
    links: {
      privacy: '/privacy/web-destroyer',
    },
    features: [
      'Twin-stick responsive touch controls with dynamic projectile physics',
      'Interactive DOM parser transforming page elements into destructible targets',
      'Custom sound effects engine with retro synthesized audio',
      'Offline playable with cached article scenarios',
    ],
    featuresTr: [
      'Dinamik mermi fiziği içeren duyarlı twin-stick kontroller',
      'Sayfa elemanlarını vurulabilir hedeflere çeviren DOM ayrıştırıcı',
      'Retro sentezlenmiş ses efektleri motoru',
      'Önbelleğe alınan makalelerle tamamen çevrimdışı oynanabilirlik',
    ],
    specs: {
      isOffline: true,
      hasAds: false,
      hasAnalytics: false,
    },
  },
  {
    id: 'tg-drive',
    slug: 'tg-drive',
    title: 'Unofficial TG Drive',
    titleTr: 'Unofficial TG Drive',
    tagline: 'Minimalist Cloud Storage Powered by Private Telegram Storage',
    taglineTr: 'Özel Telegram Depolamasını Kullanan Minimalist Bulut Sürücüsü',
    shortDescription:
      'A clean, bloat-free Android cloud drive client using your own Telegram account and private channels as personal unlimited storage.',
    shortDescriptionTr:
      'Kendi Telegram hesabınızı ve özel kanallarınızı sınırsız kişisel bulut alanı olarak kullanan temiz, hafif Android istemcisi.',
    fullDescription:
      'Unofficial TG Drive provides a clean, folder-based storage interface over Telegram private channels. Uses client-side chunking, direct media streaming, and zero third-party intermediate servers. Requires your own Telegram API credentials.',
    fullDescriptionTr:
      'TG Drive, özel Telegram kanalları üzerinde klasör tabanlı temiz bir depolama arayüzü sunar. İstemci tarafında parçalama, doğrudan medya akışı ve sıfır üçüncü taraf sunucu mimarisi kullanır.',
    category: 'Tool',
    tags: ['Android', 'Cloud Storage', 'Telegram API', 'No Bloat', 'Open Architecture'],
    status: 'In Development',
    statusTr: 'Geliştiriliyor',
    version: '0.5.2',
    updatedAt: 'October 2026',
    iconName: 'tg-drive',
    accentColor: '#4E7D63',
    links: {
      privacy: '/privacy/tg-drive',
      gitHub: 'https://github.com/devd0gu',
    },
    features: [
      'Pure Android client communicating directly with Telegram MTProto endpoints',
      'Folder hierarchy and file categorization for arbitrary payloads',
      'In-app media player and streaming without local file duplication',
      'Zero intermediary telemetry or metadata storage',
    ],
    featuresTr: [
      'Doğrudan Telegram MTProto uçlarıyla iletişim kuran saf Android istemcisi',
      'Klasör hiyerarşisi ve dosya kategorilendirme',
      'Cihazda dosya çoğaltmadan doğrudan uygulama içi medya oynatımı',
      'Sıfır aracı telemetri veya metaveri kaydı',
    ],
    specs: {
      isOffline: false,
      hasAds: false,
      hasAnalytics: false,
    },
  },
  {
    id: 'allfileopener',
    slug: 'allfileopener',
    title: 'All File Opener',
    titleTr: 'All File Opener',
    tagline: '100% Offline, Ad-Free Document Viewer & PDF Utility',
    taglineTr: '%100 Çevrimdışı, Reklamsız Doküman & PDF Yöneticisi',
    shortDescription:
      'View, organize, split, merge, encrypt, and sign documents locally on your device without granting internet permissions.',
    shortDescriptionTr:
      'İnternet izni vermeden belgelerinizi cihazınızda görüntüleyin, düzenleyin, sayfaları ayırın, birleştirin ve imzalayın.',
    fullDescription:
      'All File Opener is a free, privacy-first offline document and PDF tool suite. Built without the internet permission (android.permission.INTERNET), ensuring your sensitive documents, contracts, and spreadsheets never leave your hardware.',
    fullDescriptionTr:
      'All File Opener, internet izni talep etmeyen (%100 çevrimdışı) ücretsiz ve gizlilik odaklı bir PDF/belge aracıdır. Belgeleriniz fiziksel cihazınızı asla terk etmez.',
    category: 'Android',
    tags: ['Android', 'PDF Suite', '100% Offline', 'Zero Ads', 'Strict Privacy'],
    status: 'Live',
    statusTr: 'Yayında',
    version: '2.1.0',
    updatedAt: 'September 2026',
    packageId: 'com.d0gu.allfileopener',
    iconName: 'allfileopener',
    accentColor: '#D9653B',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.d0gu.allfileopener',
      privacy: '/privacy/allfileopener',
    },
    features: [
      'PDF page reordering, merging, splitting, and password encryption',
      'On-device highlighting, annotation, and biometric signature placement',
      'Universal format viewer: PDF, DOCX, XLSX, PPTX, Markdown, Archives',
      'No internet permission declared; zero analytics or third-party SDKs',
    ],
    featuresTr: [
      'PDF sayfa sıralama, birleştirme, bölme ve parola koruması',
      'Cihaz içi metin vurgulama, not alma ve el yazısı ile imzalama',
      'PDF, Word, Excel, PowerPoint, Markdown ve arşiv formatı desteği',
      'Sıfır internet yetkisi; telemetri veya izleyici SDK içermez',
    ],
    specs: {
      isOffline: true,
      hasAds: false,
      hasAnalytics: false,
      permissionCount: 1,
    },
  },
  {
    id: 'multibrowser',
    slug: 'multibrowser',
    title: 'MultiBrowser',
    titleTr: 'MultiBrowser',
    tagline: 'Isolated Profiles & Privacy-Focused Multi-Session Web Browser',
    taglineTr: 'İzole Profilli, Gizlilik Odaklı Çoklu Oturum Tarayıcısı',
    shortDescription:
      'Independent cookie jars, custom per-profile proxies, and encrypted local keystore storage for compartmentalized browsing.',
    shortDescriptionTr:
      'Her profil için bağımsız çerezler, özel proxy ayarları ve şifreli yerel kasa sunan güvenli mobil web tarayıcısı.',
    fullDescription:
      'MultiBrowser isolates work, personal, and research sessions into clean sandboxes. Each profile maintains its own cookies, session storage, and optional SOCKS/HTTP proxy. Passwords and credentials are encrypted inside the Android hardware keystore.',
    fullDescriptionTr:
      'MultiBrowser; iş, kişisel ve anonim gezintilerinizi birbirinden tamamen soyutlayan çok profilli bir tarayıcıdır. Profiller bağımsız çerezlere ve özel proxy yapılandırmalarına sahiptir. Veriler Android donanım kasasında şifrelenir.',
    category: 'Android',
    tags: ['Android', 'Privacy Browser', 'Proxy Support', 'Isolated Profiles'],
    status: 'Live',
    statusTr: 'Yayında',
    version: '1.4.2',
    updatedAt: 'September 2026',
    packageId: 'com.d0gu.multibrowser',
    iconName: 'multibrowser',
    accentColor: '#4E7D63',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.d0gu.multibrowser',
      privacy: '/privacy/multibrowser',
    },
    features: [
      'Isolated session containers with dedicated cookie jars and history',
      'Custom proxy configuration per profile (SOCKS5 / HTTP)',
      'Hardware-backed keystore encryption for credentials',
      'Zero remote tracking, zero telemetry, zero analytics',
    ],
    featuresTr: [
      'Ayrılmış çerez ve oturum alanlarına sahip izole profil konteynerleri',
      'Profil bazında bağımsız SOCKS5 / HTTP proxy yapılandırması',
      'Donanım destekli Android Keystore şifrelemesi',
      'Geliştiriciye veri göndermeyen sıfır telemetri politikası',
    ],
    specs: {
      isOffline: false,
      hasAds: false,
      hasAnalytics: false,
      permissionCount: 2,
    },
  },
  {
    id: 'animal48',
    slug: 'animal48',
    title: 'Animal : 48',
    titleTr: 'Animal : 48',
    tagline: 'Charming Pixel-Art Casual Mobile Puzzle Game',
    taglineTr: 'Piksel Sanatıyla Tasarlanmış Sevimli Mobil Bulmaca Oyunu',
    shortDescription:
      'A delightful mobile puzzle experience featuring retro pixel art characters and smooth casual mechanics.',
    shortDescriptionTr:
      'Retro piksel hayvan karakterleriyle tasarlanmış, dinlendirici ve akıcı bir mobil bulmaca deneyimi.',
    fullDescription:
      'Animal : 48 is an independent puzzle game built in Unity, designed with clean retro pixel aesthetic and relaxing brain-teasing gameplay.',
    fullDescriptionTr:
      'Animal : 48, Unity ile geliştirilen sevimli piksel grafiklere ve zeka bulmacası mekaniklerine sahip bağımsız bir mobil oyundur.',
    category: 'Game',
    tags: ['Unity', 'Mobile Game', 'Pixel Art', 'Casual Puzzle'],
    status: 'Live',
    statusTr: 'Yayında',
    version: '1.0.8',
    updatedAt: 'March 2026',
    iconName: 'gamepad',
    accentColor: '#D48C2E',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.d0gu.animal48',
      privacy: '/privacy/animal48',
    },
    features: [
      'Handcrafted pixel art aesthetics and nostalgic sound design',
      'Progressive puzzle levels with smooth difficulty curve',
      'Optimized battery footprint and fast startup',
    ],
    featuresTr: [
      'Özgün piksel sanatı çizimler ve nostaljik ses tasarımı',
      'Akıcı zorluk eğrisine sahip ilerlemeli bulmaca bölümleri',
      'Hafif boyut ve optimize edilmiş pil performansı',
    ],
    specs: {
      isOffline: true,
      hasAds: true,
      hasAnalytics: true,
    },
  },
];
