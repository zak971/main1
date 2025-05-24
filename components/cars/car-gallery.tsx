"use client"

import Image from "next/image"
import type { CarType } from "@/types/car"

interface CarGalleryProps {
  car: CarType
}

export function CarGallery({ car }: CarGalleryProps) {
  if (!car.image) return null

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <Image
        src={car.image}
        alt={car.name}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  )
} 