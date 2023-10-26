/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000/',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
