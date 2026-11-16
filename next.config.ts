import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Serve every optimized image as WebP
    formats: ['image/webp'],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      // Images stored in Supabase Storage
      { protocol: 'https', hostname: '*.supabase.co', pathname: '/storage/v1/object/public/**' },
    ],
  },
  // The retired service worker (public/sw.js – it removes the old offline page from visitors'
  // browsers): never cached, so browsers pick it up on their next visit
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'" },
        ],
      },
    ];
  },
  // Locality aliases from the pSEO sheet (LOCALITY_ALIASES): one place, one set of pages
  async redirects() {
    return [
      // One address for the whole site, the one Google lists (site.url in src/data/site.ts)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bmumarketing.in' }],
        destination: 'https://www.bmumarketing.in/:path*',
        permanent: true,
      },
      // Articles moved from /work/<slug> to /blog/<slug> – old links keep working
      { source: '/work/:slug', destination: '/blog/:slug', permanent: true },
      // Addresses from the old site that Google still lists (Search Console, Nov 2026) – each to its
      // nearest page today, so what they earned isn't lost
      { source: '/store/:path*', destination: '/services', permanent: true },
      { source: '/products/:path*', destination: '/services', permanent: true },
      { source: '/bundles', destination: '/services', permanent: true },
      { source: '/partners', destination: '/about', permanent: true },
      { source: '/case-studies', destination: '/work', permanent: true },
      { source: '/industries/education', destination: '/industries/education-and-schools', permanent: true },
      { source: '/industries/hotels-resorts', destination: '/industries/hospitality-and-hotels', permanent: true },
      { source: '/industries/healthcare', destination: '/industries/healthcare-and-hospitals', permanent: true },
      { source: '/services/social-content', destination: '/services/social-and-personal-brand', permanent: true },
      { source: '/services/seo-local-search', destination: '/services/local-seo', permanent: true },
      {
        source: '/services/marketing-and-visibility/digital-marketing',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/services/content-and-production/business-video-shoots',
        destination: '/services/video-production',
        permanent: true,
      },
      // …and any other old /services/<group>/<offer> address, to its group's page
      { source: '/services/:group/:offer', destination: '/services/:group', permanent: true },
      {
        source: '/:service/bengaluru/krishnarajapuram',
        destination: '/:service/bengaluru/kr-puram',
        permanent: true,
      },
      {
        source: '/industries/:industry/bengaluru/krishnarajapuram',
        destination: '/industries/:industry/bengaluru/kr-puram',
        permanent: true,
      },
    ];
  },
  // /sitemap.xml is the sitemap index (src/app/sitemap-index.xml) – checked before the app's own
  // routes, so it never meets the split sitemaps
  async rewrites() {
    return {
      beforeFiles: [{ source: '/sitemap.xml', destination: '/sitemap-index.xml' }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
