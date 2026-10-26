import { Albert_Sans, Audiowide } from 'next/font/google';

// Fonts are downloaded at build time and self-hosted – no request to Google at runtime.
// The CSS variables below are used in src/styles/variables.css.

// Body text: navbar, paragraphs, buttons, cards
export const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
});

// Display headings (Hero)
export const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
  display: 'swap',
});
