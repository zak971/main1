/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-slot',
      '@radix-ui/react-toast'
    ],
    serverActions: true,
    serverComponentsExternalPackages: [],
    optimizeServerReact: true,
  },
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
