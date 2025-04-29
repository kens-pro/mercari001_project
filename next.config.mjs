/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',        // ←これを追加
  assetPrefix: './',
}

export default nextConfig



