import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar/Navbar';
import { audiowide, inter } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'BMU Marketing – Build Your Brand’s Universe',
  description:
    'Bengaluru’s all-in-one digital growth studio: strategic marketing, design and digital experiences built to drive growth.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${audiowide.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
