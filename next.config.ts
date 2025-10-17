/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // se usar next/image
};
module.exports = nextConfig;

export default nextConfig;
