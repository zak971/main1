const CDN_ENABLED = process.env.NODE_ENV === 'production'
const CDN_DOMAIN = 'https://www.goacarrental.in'

export function getCdnUrl(path: string): string {
  if (!path) return ''
  
  // If it's already a full URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  // In production, use CDN URL
  if (CDN_ENABLED) {
    return `${CDN_DOMAIN}/${cleanPath}`
  }

  // In development, use local path
  return `/${cleanPath}`
}

export function getOptimizedImageUrl(
  path: string,
  {
    width,
    quality = 75,
    format = 'webp'
  }: {
    width: number
    quality?: number
    format?: 'webp' | 'avif' | 'jpg'
  }
): string {
  const baseUrl = getCdnUrl(path)
  
  if (!CDN_ENABLED) return baseUrl

  // Add image optimization parameters
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    f: format
  })

  return `${baseUrl}?${params.toString()}`
}

// Helper function to determine if an image should be preloaded
export function shouldPreloadImage(path: string): boolean {
  const criticalImages = [
    '/images/TRY1.jpg',
    '/images/logo.png',
    '/images/hero-bg.jpg'
  ]
  return criticalImages.includes(path)
}

// Get responsive image sizes based on viewport
export function getResponsiveSizes(type: 'hero' | 'thumbnail' | 'gallery' = 'thumbnail'): string {
  switch (type) {
    case 'hero':
      return '100vw'
    case 'thumbnail':
      return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
    case 'gallery':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    default:
      return '100vw'
  }
} 