/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
