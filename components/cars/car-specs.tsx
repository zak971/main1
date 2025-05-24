"use client"

import { Car, Users, Fuel, Settings2 } from "lucide-react"
import type { CarType } from "@/types/car"

interface CarSpecsProps {
  car: CarType
}

export function CarSpecs({ car }: CarSpecsProps) {
  const specs = [
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
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Car Specifications
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {specs.map((spec, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <spec.icon className="w-6 h-6 text-blue-600 mb-2" />
            <span className="text-sm text-gray-600">{spec.label}</span>
            <span className="font-medium text-gray-900">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 