/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/songs/the-cybergenix-conspiracy',
        destination: '/songs/biomechanoid-prototype',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
