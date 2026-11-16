import { site } from '@/data/site';
import { SITEMAP_IDS } from '@/lib/pseo/catalog';

// The sitemap index – one address listing every sitemap (/sitemap/pages.xml, /sitemap/hubs.xml…),
// served at /sitemap.xml too (a rewrite in next.config.ts). The address search engines and SEO
// tools try first, and the one to submit in Search Console. Built once, at build time.
export const dynamic = 'force-static';

export function GET() {
  const entries = SITEMAP_IDS.map(
    (id) => `  <sitemap>\n    <loc>${site.url}/sitemap/${id}.xml</loc>\n  </sitemap>`
  ).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
