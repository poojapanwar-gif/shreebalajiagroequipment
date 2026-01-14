/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Avoid failing builds due to missing TypeScript in ESLint parser
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Force non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.modxcomputers.com',
          },
        ],
        destination: 'https://modxcomputers.com/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemaps/product:page(\\d+).xml',
        destination: '/sitemaps/product/:page',
      },
    ];
  },
    trailingSlash: true,
  images: {
    remotePatterns: [
      
      {
        protocol: "https",
        hostname: "img.modxcomputers.com",
        pathname: "**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
      {
        source: "/(.*)", // match all routes
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
