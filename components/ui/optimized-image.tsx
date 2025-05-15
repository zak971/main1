"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("object-cover", className)}
      fill
      priority={priority}
      sizes={sizes}
    />
  )
} 