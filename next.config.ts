import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wsrv.nl',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.cube.nl',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
      }
    }
  }
};

export default nextConfig;
