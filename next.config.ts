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
  // Locality aliases from the pSEO sheet (LOCALITY_ALIASES): one place, one set of pages
  async redirects() {
    return [
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
