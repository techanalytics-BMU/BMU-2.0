import type { Metadata } from 'next';
import { site } from '@/data/site';
import { albertSans } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  // canonical and Open Graph URLs are resolved against the live domain
  metadataBase: new URL(site.url),
  // Each page sets its own name ("About", "Our Work"); the tab reads "About | BMU Marketing".
  // Two logos, in the files next to this one. The tab uses icon.svg: the BMU mark on nothing, white
  // letters on dark browser themes, navy on light ones. favicon.ico and apple-icon.png are the
  // mark on a solid dark square – what Google shows beside results, on a white circle that white
  // letters would vanish into – and phone home screens use.
  title: {
    default: 'BMU Marketing – Build Your Brand’s Universee',
    template: `%s | ${site.name}`,
  },
  description:
    'Bengaluru’s all-in-one digital growth studio: strategic marketing, design and digital experiences built to drive growth.',
  openGraph: { type: 'website', siteName: site.name, locale: 'en_IN' },
};

// Shared by every page: fonts and base styles.
// Each group of pages adds its own frame – (site) the navbar, footer and lead popup; (auth) the
// login card backdrop; (dashboard) the staff area.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
