/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  basePath: '/mehul-portfolio',
  assetPrefix: '/mehul-portfolio/',
};
module.exports = nextConfig;
