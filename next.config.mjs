/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/openclaw-cloud',
  assetPrefix: '/openclaw-cloud/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
