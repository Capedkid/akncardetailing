/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Simplified image optimization for speed
    formats: ['image/webp'],
    // Minimal device sizes for faster loading
    deviceSizes: [640, 1080, 1920],
    // Minimal image sizes
    imageSizes: [16, 32, 48, 64, 96, 128],
    // Image quality settings (required for Next.js 16+)
    qualities: [50, 75, 85, 100],
    // Shorter cache time for faster updates
    minimumCacheTTL: 60 * 60 * 24, // 1 day
  },
  
  // Performance optimizations
  experimental: {
    // Modern bundling optimizations
  },
  
  // Compression
  compress: true,
  
  // Enable static optimization
  trailingSlash: false,
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
