import type { Metadata } from 'next';
import { site } from '@/data/site';
import { albertSans, audiowide } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  // canonical and Open Graph URLs are resolved against the live domain
  metadataBase: new URL(site.url),
  title: 'BMU Marketing – Build Your Brand’s Universe',
  description:
    'Bengaluru’s all-in-one digital growth studio: strategic marketing, design and digital experiences built to drive growth.',
};

// Shared by every page: fonts and base styles. Each group of pages adds its own frame –
// (site) the navbar, footer and lead popup; (auth) the login card backdrop; (dashboard) the staff area.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${audiowide.variable}`}>
      <body>{children}</body>
    </html>
  );
}
