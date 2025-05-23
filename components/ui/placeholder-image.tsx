"use client"

import Image from "next/image"

interface PlaceholderImageProps {
  width?: number
  height?: number
  className?: string
  alt?: string
}

export function PlaceholderImage({ 
  width, 
  height, 
  className = "", 
  alt = "Placeholder image" 
}: PlaceholderImageProps) {
  if (width && height) {
    return (
      <Image
        src="/images/placeholder.jpg"
        alt={alt}
        width={width}
        height={height}
        className={className}
        quality={75}
      />
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/placeholder.jpg"
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
        quality={75}
      />
    </div>
  )
} 