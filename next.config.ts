import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'example.com',
      'framerusercontent.com',
      'media.licdn.com',
      'images.crunchbase.com',
      'seeklogo.com',
      'i0.wp.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'whitepaper.playmind.ai',
        pathname: '/~gitbook/image', // allow access to this Gitbook image proxy
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
};

export default nextConfig;
