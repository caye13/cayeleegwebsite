import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '*.cayelee.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'cayelee.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: '*.vercel.app',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
}

export default nextConfig;
