/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Dodajemy domeny dla obrazów hostowanych poza naszą stroną, jeśli będą potrzebne
  }
}

module.exports = nextConfig 