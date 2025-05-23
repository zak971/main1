"use client"

import { useEffect, useState } from 'react'
import Image from "next/image"

interface PlaceholderImageProps {
  className?: string
  alt?: string
}

export function PlaceholderImage({ className = "", alt = "Placeholder image" }: PlaceholderImageProps) {
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