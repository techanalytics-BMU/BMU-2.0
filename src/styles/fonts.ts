import { Audiowide, Inter } from 'next/font/google';

// Fonts are downloaded at build time and self-hosted – no request to Google at runtime.
// The CSS variables below are used in src/styles/variables.css.

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
  display: 'swap',
});
