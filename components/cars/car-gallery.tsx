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
      />
    </div>
  )
} 