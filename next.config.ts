import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'conceptrailindia.com',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig
