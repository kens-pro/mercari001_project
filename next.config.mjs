/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',        // ← 追加ここ！
  assetPrefix: './',
}

export default nextConfig


