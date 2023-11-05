/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        API_URL: process.env.REACT_APP_API_URL,
      }
}

module.exports = nextConfig
