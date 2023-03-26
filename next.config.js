/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['https://d1jt5eir8qi0yi.cloudfront.net'],
  }
}


module.exports = nextConfig
