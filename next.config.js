/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const pwaConfig = {
  pwa: {
    dest: 'public',
    sw: 'service-worker.js'
  }
}

const nextConfig = {
  reactStrictMode: true,
}

if (process.env.DEV == 'true')
  module.exports = nextConfig;

else
  module.exports = withPWA({
    ...nextConfig,
    ...pwaConfig
  });