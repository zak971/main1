"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  loading?: "lazy" | "eager"
}

export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
  quality = 75,
  loading = "lazy",
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("object-cover", className)}
      fill
      priority={priority}
      sizes={sizes}
      quality={quality}
      loading={loading}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = '/images/placeholder.jpg'
      }}
    />
  )
} 