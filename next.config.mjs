/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/monkeAgent',
  assetPrefix: '/monkeAgent/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
