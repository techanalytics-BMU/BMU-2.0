import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { catalog, SITEMAP_IDS } from '@/lib/pseo/catalog';
import { sortedPosts } from '@/lib/work';

// One sitemap per page category – /sitemap/pages.xml, /sitemap/hubs.xml, /sitemap/service-industry.xml…
// – so Search Console reports indexing for each category separately. Only indexable pages are
// listed: pages outside the current launch batch (src/data/pseo/launch.ts) stay out.

export async function generateSitemaps() {
  return SITEMAP_IDS.map((id) => ({ id }));
}

const url = (path: string) => `${site.url}${path === '/' ? '' : path}`;

export default async function sitemap(props: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;

  if (id === 'pages') {
    return [
      ...['/', '/about', '/services', '/industries', '/work', '/team', '/contact'].map((path) => ({
        url: url(path),
        changeFrequency: 'monthly' as const,
        priority: path === '/' ? 1 : 0.8,
      })),
      ...sortedPosts.map((post) => ({
        url: url(`/work/${post.slug}`),
        lastModified: post.date,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
      })),
    ];
  }

  return catalog()
    .filter((entry) => entry.group === id && entry.indexable)
    .map((entry) => ({
      url: url(entry.path),
      changeFrequency: 'monthly' as const,
      priority: entry.group === 'hubs' ? 0.8 : 0.6,
    }));
}
