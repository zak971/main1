export const CDN_CONFIG = {
  // Base URL for assets (Vercel automatically handles CDN)
  baseUrl: '',

  // Asset paths
  paths: {
    images: '/images',
    fonts: '/fonts',
    scripts: '/scripts',
    styles: '/styles',
  },

  // Cache settings
  cache: {
    images: 'public, max-age=31536000, immutable',
    fonts: 'public, max-age=31536000, immutable',
    scripts: 'public, max-age=31536000, immutable',
    styles: 'public, max-age=31536000, immutable',
  },
}

// Helper function to get URL for an asset
export function getCdnUrl(path: string): string {
  return path
}

// Helper function to get URL for an image
export function getImageUrl(path: string): string {
  // If path is empty or undefined, return placeholder
  if (!path) {
    return '/images/car-placeholder.jpg'
  }
  
  // If path already starts with /images/, return it as is
  if (path.startsWith('/images/')) {
    return path
  }
  
  // If path starts with http:// or https://, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  // Otherwise, add /images/ prefix
  return `/images/${path.replace(/^\/+/, '')}`
}

// Helper function to get URL for a font
export function getFontUrl(path: string): string {
  return getCdnUrl(`${CDN_CONFIG.paths.fonts}${path}`)
}

// Helper function to get URL for a script
export function getScriptUrl(path: string): string {
  return getCdnUrl(`${CDN_CONFIG.paths.scripts}${path}`)
}

// Helper function to get URL for a style
export function getStyleUrl(path: string): string {
  return getCdnUrl(`${CDN_CONFIG.paths.styles}${path}`)
} 