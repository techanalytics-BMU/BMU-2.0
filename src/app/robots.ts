import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { SITEMAP_IDS } from '@/lib/pseo/catalog';

// Everything is open to search engines – and deliberately to AI assistants' crawlers too, since
// being recommended by ChatGPT, Claude and Perplexity is part of what BMU sells. To keep one out,
// add a rule for it with `disallow: '/'`.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: SITEMAP_IDS.map((id) => `${site.url}/sitemap/${id}.xml`),
    host: site.url,
  };
}
