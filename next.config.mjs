/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: '**.fal.ai',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'http',
        hostname: 'museaiwrite.eduhk.hk',
      },
      {
        protocol: 'https',
        hostname: 'museaiwrite.eduhk.hk',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // 确保模块解析正确
    config.resolve = {
      ...config.resolve,
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    }
    return config
  },
}

export default nextConfig
