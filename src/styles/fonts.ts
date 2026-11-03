import { Albert_Sans } from 'next/font/google';

// Fonts are downloaded at build time and self-hosted – no request to Google at runtime.
// The CSS variable below is used in src/styles/variables.css.

// The site's one typeface: headings, body text, navbar, buttons, cards, form fields, the
// footer's big wordmark – on every page
export const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
});
