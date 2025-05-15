"use client"

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedHeroProps {
  src: string
  alt: string
  children?: React.ReactNode
}

export function OptimizedHero({ src, alt, children }: OptimizedHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fallback background color */}
      <div className="absolute inset-0 bg-gray-900" />
      
      {/* Hero image with loading state */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={85}
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Loading spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      {children}
    </section>
  )
} 