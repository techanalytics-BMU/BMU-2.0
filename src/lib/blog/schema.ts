import { site } from '@/data/site';
import { breadcrumbSchema, businessSchema, faqSchema } from '@/lib/pseo/schema';
import type { BlogPost, BlogPostSummary } from '@/types/blog';
import { wordCount } from './text';

// Structured data (JSON-LD) for the blog – the article, its FAQs and breadcrumb, and the /blog page.
// The publisher is the same business record as the rest of the site (src/lib/pseo/schema.ts).

const absolute = (path: string) => `${site.url}${path}`;

/** The picture shown when a post is shared: its cover, or a branded card with its title */
export function shareImageOf(post: Pick<BlogPost, 'title' | 'cover_image_url'>) {
  return post.cover_image_url ?? `/blog/share-image?title=${encodeURIComponent(post.title)}`;
}

const publisher = () => ({
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: { '@type': 'ImageObject', url: absolute('/images/common/bmu-logo-light.webp') },
});

/** Everything Google needs about one article: the post, its FAQs and its breadcrumb */
export function blogPostSchema(post: BlogPost) {
  const url = absolute(`/blog/${post.slug}`);
  const image = shareImageOf(post);
  const isTeam = /\bteam\b/i.test(post.author_name);

  const graph: object[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: url,
      url,
      headline: post.title,
      description: post.meta_description || post.excerpt,
      image: image.startsWith('http') ? image : absolute(image),
      datePublished: post.published_at ?? post.created_at,
      dateModified: post.updated_at,
      author: isTeam
        ? { '@id': `${site.url}/#organization` }
        : { '@type': 'Person', name: post.author_name },
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en-IN',
      wordCount: wordCount(post.content, post.faqs),
      ...(post.category ? { articleSection: post.category } : {}),
      ...(post.main_keyword || post.tags.length
        ? { keywords: [post.main_keyword, ...post.tags].filter(Boolean).join(', ') }
        : {}),
    },
    publisher(),
    breadcrumbSchema([
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: post.title, href: `/blog/${post.slug}` },
    ]),
  ];

  if (post.faqs.length) {
    graph.push(faqSchema(post.faqs.map((faq) => ({ q: faq.question, a: faq.answer }))));
  }
  return graph;
}

/** The /blog page: the blog and its newest posts */
export function blogIndexSchema(posts: BlogPostSummary[]) {
  return [
    {
      '@type': 'Blog',
      '@id': absolute('/blog#blog'),
      url: absolute('/blog'),
      name: `${site.name} Blog`,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en-IN',
      blogPost: posts.slice(0, 20).map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: absolute(`/blog/${post.slug}`),
        ...(post.published_at ? { datePublished: post.published_at } : {}),
      })),
    },
    publisher(),
    businessSchema(),
    breadcrumbSchema([
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ]),
  ];
}
