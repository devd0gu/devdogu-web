import { PrivacyDocument } from '@/types';

export const privacyPolicies: Record<string, PrivacyDocument> = {
  allfileopener: {
    id: 'allfileopener',
    appName: 'All File Opener',
    packageId: 'com.d0gu.allfileopener',
    lastUpdated: 'September 28, 2026',
    summary:
      'All File Opener is a free, ad-free, 100% offline document viewer and PDF utility. It collects zero personal information and has no internet access capability.',
    sections: [
      {
        title: '1. Data We Collect: None',
        content:
          'All File Opener does not collect, transmit, sell, or share any personal information. There are no user accounts, no sign-ins, and no cloud synchronization services. The developer has no access to any data you view or create with the app.',
      },
      {
        title: '2. 100% Offline by Design',
        content:
          'The application does not request or declare internet permissions (android.permission.INTERNET). Because the app has no internet access capability, your documents, files, and activity never leave your physical device.',
      },
      {
        title: '3. On-Device File Processing',
        content:
          'All document reading and processing (PDF, Word, Excel, PowerPoint, Text, Markdown, HTML, images, and archives) occurs entirely on your device using local libraries:',
        bullets: [
          'When you open or edit a document, the data is processed in local device memory.',
          'Features such as PDF page reordering, splitting, merging, password protection, text highlighting, and signature annotations save output files directly to your device storage.',
          'Recent files and bookmarks are stored only in the app local private cache on your device.',
        ],
      },
      {
        title: '4. Permissions',
        content:
          'The app requests storage permissions (MANAGE_EXTERNAL_STORAGE / READ_EXTERNAL_STORAGE) solely to function as a document viewer and file manager.',
      },
      {
        title: '5. Third-Party Services and Analytics',
        content:
          'The app contains NO third-party advertisements, NO analytics tools (e.g. Firebase, Google Analytics), and NO tracking SDKs of any kind.',
      },
      {
        title: '6. Children',
        content:
          'Because the app does not collect any personal data from any user, it does not knowingly collect information from children under the age of 13.',
      },
      {
        title: '7. Contact Us',
        content:
          'If you have any questions or feedback regarding this Privacy Policy, please contact us at: iletisim@devdogu.tr',
      },
    ],
  },
  multibrowser: {
    id: 'multibrowser',
    appName: 'MultiBrowser',
    packageId: 'com.d0gu.multibrowser',
    lastUpdated: 'September 27, 2026',
    summary:
      'MultiBrowser is a free, privacy-focused multi-profile web browser. It features zero telemetry, isolated sessions, and local hardware-encrypted storage.',
    sections: [
      {
        title: '1. Data We Collect: None',
        content:
          'MultiBrowser has no accounts and no analytics. The app does not send any personal data to the developer. Nothing you browse is seen, collected or stored by the developer.',
      },
      {
        title: '2. Data Stored on Your Device',
        content:
          'The following is stored only in the app private on-device storage and never leaves your device:',
        bullets: [
          'The profiles you create and their settings (device, language, time zone, proxy details)',
          'Cookies, sessions and site data (per profile, for browsing to work)',
          'Bookmarks and browsing history',
          'Any site logins you choose to save (encrypted in the device secure keystore)',
        ],
      },
      {
        title: '3. Network and Proxies',
        content:
          'Page traffic goes only to the websites you visit and, if configured, through your proxy. The app itself sends your data nowhere else, and contains no third-party ads or analytics.',
      },
      {
        title: '4. Contact',
        content:
          'For questions or support, contact: iletisim@devdogu.tr',
      },
    ],
  },
  animal48: {
    id: 'animal48',
    appName: 'Animal : 48',
    lastUpdated: 'March 17, 2026',
    summary:
      'Animal : 48 is a free casual mobile puzzle game built with Unity.',
    sections: [
      {
        title: '1. Information Collection and Use',
        content:
          'The Application collects basic technical telemetry when you download and use it (such as device IP, OS version, session duration) through third-party game services.',
      },
      {
        title: '2. Third-Party Service Providers',
        content:
          'The application uses third-party services that may collect information used to identify you:',
        bullets: [
          'Google Play Services',
          'Unity Analytics',
          'Unity Ads',
        ],
      },
      {
        title: '3. Contact Us',
        content:
          'If you have questions about this policy, contact us at iletisim@devdogu.tr',
      },
    ],
  },
  cortex: {
    id: 'cortex',
    appName: 'Cortex (Android AI Agent)',
    lastUpdated: 'October 2026',
    summary:
      'Cortex processes contextual queries using Anthropic Claude models with a strict local privacy perimeter.',
    sections: [
      {
        title: '1. Architecture & Privacy Perimeter',
        content:
          'Cortex operates on an explicit-consent basis. Screen elements and user requests are pre-processed and anonymized locally on-device before relevant prompt tokens are transmitted to the Anthropic Claude API for reasoning.',
      },
      {
        title: '2. API Interactions',
        content:
          'Requests are sent exclusively to the Anthropic API. No user data is stored, retained, or utilized for commercial model training by devd0gu.',
      },
      {
        title: '3. Contact',
        content:
          'Inquiries regarding Cortex architecture and data handling: iletisim@devdogu.tr',
      },
    ],
  },
  'paper-launcher': {
    id: 'paper-launcher',
    appName: 'Paper – Newspaper Launcher',
    packageId: 'com.d0gu.paperlauncher',
    lastUpdated: 'October 2026',
    summary:
      'Paper is an offline-first Android launcher. Zero ads, zero tracking, no account, no cloud servers.',
    sections: [
      {
        title: '1. Data Collection',
        content:
          'Paper collects NO data. It does not connect to the internet, does not use analytics SDKs, and stores app arrangement and notification headers solely in device RAM / SQLite.',
      },
      {
        title: '2. Permissions',
        content:
          'The app requests notification listener access only to display your headlines on the front page, and package query permissions to list installed apps in the alphabetical index.',
      },
      {
        title: '3. Contact',
        content:
          'Reach out via iletisim@devdogu.tr',
      },
    ],
  },
  'nav-bar-knights': {
    id: 'nav-bar-knights',
    appName: 'Nav Bar Knights',
    lastUpdated: 'October 2026',
    summary:
      'Nav Bar Knights is an idle RPG running in the Android navigation bar with offline-first local progression.',
    sections: [
      {
        title: '1. Local Storage',
        content:
          'Hero stats, alchemy cube items, and progress are saved in device private storage. The game has zero tracking and zero telemetry.',
      },
      {
        title: '2. Contact',
        content:
          'For feedback: iletisim@devdogu.tr',
      },
    ],
  },
  'web-destroyer': {
    id: 'web-destroyer',
    appName: 'Web Destroyer',
    lastUpdated: 'October 2026',
    summary:
      'Web Destroyer is an arcade action game. Offline gameplay with zero telemetry.',
    sections: [
      {
        title: '1. Data Handling',
        content:
          'Web Destroyer loads web pages strictly within a local sandbox for gameplay. No browsing history or data is recorded or transmitted.',
      },
      {
        title: '2. Contact',
        content:
          'Support: iletisim@devdogu.tr',
      },
    ],
  },
  'tg-drive': {
    id: 'tg-drive',
    appName: 'Unofficial TG Drive',
    lastUpdated: 'October 2026',
    summary:
      'Unofficial TG Drive connects your Android device directly to Telegram servers without intermediary tracking.',
    sections: [
      {
        title: '1. Direct Telegram Protocol',
        content:
          'The app acts as a direct MTProto client. Credentials and files pass solely between your device and official Telegram infrastructure.',
      },
      {
        title: '2. Contact',
        content:
          'Direct all inquiries to iletisim@devdogu.tr',
      },
    ],
  },
};
