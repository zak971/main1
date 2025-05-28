"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getCars } from "@/lib/cars"
import type { CarType } from "@/types/car"

export function CarLinksFooter() {
  const [cars, setCars] = useState<CarType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCars = async () => {
      try {
        const allCars = await getCars()
        // Take only first 5 cars
        setCars(allCars.slice(0, 4))
      } catch (error) {
        console.error("Error loading cars:", error)
      } finally {
        setLoading(false)
      }
    }
    loadCars()
  }, [])

  if (loading) {
    return (
      <ul className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <li key={i}>
            <div className="h-4 w-32 bg-neutral-800/50 animate-pulse rounded" />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-3">
      {cars.map((car) => (
        <li key={car.id}>
          <Link
            href={`/self-drive-cars/${car.slug}`}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            {car.name}
          </Link>
        </li>
      ))}
    </ul>
  )
} 