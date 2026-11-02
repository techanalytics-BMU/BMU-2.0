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
  // The service worker (public/sw.js – the fallback page when a page can't load): never cached,
  // so a new version reaches visitors straight away
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
      // Articles moved from /work/<slug> to /blog/<slug> – old links keep working
      { source: '/work/:slug', destination: '/blog/:slug', permanent: true },
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
};

export default nextConfig;
