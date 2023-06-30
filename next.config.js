/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['en', 'ms'],
  //   defaultLocale: 'en',
  // },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en',
      },
    ]
  },
}

module.exports = nextConfig
