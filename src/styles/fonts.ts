import { Albert_Sans, Audiowide } from 'next/font/google';

// Fonts are downloaded at build time and self-hosted – no request to Google at runtime.
// The CSS variables below are used in src/styles/variables.css.

// The site's typeface: headings, body text, navbar, buttons, cards – on every page
export const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
});

// Only for the big faded brand words (the footer's "BMU MARKETING", the contact page's "CONTACT")
export const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
  display: 'swap',
});
