/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: 'http://localhost:3100',
    HLS_PATH_NEWS:'/hls/news'
  }
}

module.exports = nextConfig
