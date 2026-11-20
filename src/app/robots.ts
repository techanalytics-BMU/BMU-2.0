import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { SITEMAP_IDS } from '@/lib/pseo/catalog';

// Everything is open to search engines – and deliberately to AI assistants' crawlers too, since
// being recommended by ChatGPT, Claude and Perplexity is part of what BMU sells. To keep one out,
// add a rule for it with `disallow: '/'`. /api/ answers the site's own scripts, not readers.
// SEO-tool and scraper crawlers are kept out: with thousands of pages they use up the hosting
// allowance and bring no visitors. Ahrefs and Semrush stay open – BMU uses them on its own site.
const BLOCKED = [
  'MJ12bot',
  'DotBot',
  'DataForSeoBot',
  'BLEXBot',
  'PetalBot',
  'Bytespider',
  'SeekportBot',
  'serpstatbot',
  'Barkrowler',
  'MegaIndex',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
        disallow: '/api/',
      },
      { userAgent: BLOCKED, disallow: '/' },
    ],
    sitemap: SITEMAP_IDS.map((id) => `${site.url}/sitemap/${id}.xml`),
    host: site.url,
  };
}
