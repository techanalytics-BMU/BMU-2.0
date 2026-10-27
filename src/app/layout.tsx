import type { Metadata } from 'next';
// Footer is hidden on all pages for now – to bring it back, uncomment this import and <Footer /> below
// import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import SmoothScroll from '@/components/layout/SmoothScroll/SmoothScroll';
import { albertSans, audiowide, instrumentSerif, roboto } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'BMU Marketing – Build Your Brand’s Universe',
  description:
    'Bengaluru’s all-in-one digital growth studio: strategic marketing, design and digital experiences built to drive growth.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${audiowide.variable} ${instrumentSerif.variable} ${roboto.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
