import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import SmoothScroll from '@/components/layout/SmoothScroll/SmoothScroll';
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${audiowide.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
