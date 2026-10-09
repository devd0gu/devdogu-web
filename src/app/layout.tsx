import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'devd0gu • Independent Android Studio & Mobile Lab',
  description:
    'Official portfolio of devdogu.tr: Offline-first Android utilities, Newspaper Launcher, Nav Bar Knights, and Cortex — autonomous mobile agents powered by Claude API.',
  keywords: [
    'devd0gu',
    'devdogu.tr',
    'Cortex',
    'Claude API',
    'Claude for Startups',
    'Android Paper Launcher',
    'Nav Bar Knights',
    'Web Destroyer',
    'All File Opener',
    'MultiBrowser',
    'indie developer',
    'privacy policy',
  ],
  authors: [{ name: 'devd0gu', url: 'https://devdogu.tr' }],
  metadataBase: new URL('https://devdogu.tr'),
  openGraph: {
    title: 'devd0gu • Independent Android Studio & Mobile Lab',
    description:
      'Quiet tools, playful games, and autonomous mobile agents powered by Anthropic Claude API.',
    url: 'https://devdogu.tr',
    siteName: 'devd0gu.tr',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
