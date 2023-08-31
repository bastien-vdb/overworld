/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  },
}

module.exports = nextConfig
