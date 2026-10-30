import type { Metadata } from 'next';
import { site } from '@/data/site';
import type { PseoPage } from '@/types/pseo';

// Title, description, canonical URL and Open Graph tags for a programmatic page. Pages outside the
// current launch batch get "noindex, follow": they can be previewed and pass links on, but stay
// out of Google until their batch goes live.
export const pageMetadata = (page: PseoPage): Metadata => ({
  title: { absolute: page.title },
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: page.title,
    description: page.description,
    url: page.path,
    locale: 'en_IN',
  },
  robots: page.indexable ? { index: true, follow: true } : { index: false, follow: true },
});
