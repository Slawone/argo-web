/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: process.env.BUILD_DIR || 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
