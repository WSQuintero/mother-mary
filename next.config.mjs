/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      's3-alpha-sig.figma.com',
      'images.unsplash.com',
      'rickandmortyapi.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com'
      }
    ]
  }
}

export default nextConfig
