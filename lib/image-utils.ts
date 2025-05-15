interface OptimizedImage {
  src: string
  alt: string
  width: number
  height: number
  quality?: number
  priority?: boolean
  placeholder?: string
}

export function optimizeImage(image: OptimizedImage): OptimizedImage {
  return {
    ...image,
    quality: image.quality || 75,
    priority: image.priority || false
  }
}

export const imageSizes = {
  thumbnail: {
    width: 150,
    height: 150,
  },
  small: {
    width: 300,
    height: 200,
  },
  medium: {
    width: 600,
    height: 400,
  },
  large: {
    width: 1200,
    height: 800,
  },
}

export function getImageSizes(breakpoint: keyof typeof imageSizes) {
  return imageSizes[breakpoint]
}

export function generateImageUrl(
  imagePath: string,
  width: number,
  height: number,
  quality = 75
): string {
  // In production, use a CDN or image optimization service
  if (process.env.NODE_ENV === "production") {
    // Example: Using a CDN service
    return `https://your-cdn.com/${imagePath}?w=${width}&h=${height}&q=${quality}&fit=cover`
  }
  
  // In development, use the local image
  return imagePath
}

export function getResponsiveImageSizes(
  imagePath: string,
  aspectRatio: number = 16/9
): OptimizedImage {
  const sizes = Object.entries(imageSizes).map(([size, dimensions]) => {
    const height = Math.round(dimensions.width / aspectRatio)
    return {
      size,
      url: generateImageUrl(imagePath, dimensions.width, height),
      width: dimensions.width,
      height,
    }
  })

  return {
    src: sizes[0].url, // Default to smallest size
    width: sizes[0].width,
    height: sizes[0].height,
    placeholder: "blur",
    alt: "Image" // Default alt text
  }
}

export function getImageDimensions(
  imagePath: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      })
    }
    img.onerror = reject
    img.src = imagePath
  })
} 