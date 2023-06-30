/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
  async rewrites(){
    return [
      {
        source: '/ingest/:path*',
        destination: "https://app.posthog.com/:path*"
      }
    ]
  }
}

export default nextConfig
