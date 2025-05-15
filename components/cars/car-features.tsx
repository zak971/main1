"use client"

import { Car, Users, Fuel, Settings2 } from "lucide-react"
import type { CarType } from "@/types/car"

interface CarFeaturesProps {
  car: CarType
}

export function CarFeatures({ car }: CarFeaturesProps) {
  const features = [
    {
      icon: Car,
      label: "Type",
      value: car.carType
    },
    {
      icon: Users,
      label: "Seats",
      value: `${car.seats} seats`
    },
    {
      icon: Fuel,
      label: "Fuel",
      value: car.fuelType
    },
    {
      icon: Settings2,
      label: "Transmission",
      value: car.transmission
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <feature.icon className="w-6 h-6 mb-2 text-gray-600 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{feature.label}</span>
          <span className="font-medium">{feature.value}</span>
        </div>
      ))}
    </div>
  )
} 