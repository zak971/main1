"use client"

import Link from "next/link"
import Image from "next/image"
import { Car, Users, Fuel, Settings, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { CarType } from "@/types/car"
import { getImageUrl } from "@/lib/cdn-config"

interface LuxuryCarCardProps {
  car: CarType
}

export function LuxuryCarCard({ car }: LuxuryCarCardProps) {
  return (
    <Link 
      href={`/luxury-cars/${car.id}`}
      className="group relative bg-gray/100 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2 hover:border-white/20 active:scale-[0.98] transform-gpu"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={car.image ? getImageUrl(car.image) : getImageUrl('/car-placeholder.jpg')}
          alt={`${car.name} - ${car.type} car rental in Goa`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
          quality={75}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = getImageUrl('/car-placeholder.jpg')
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{car.name}</h3>
            <p className="text-sm text-gray-400">{car.type}</p>
          </div>
          <div className="text-right">
            <p className="text-lg sm:text-xl font-bold text-orange-400">₹{car.price}</p>
            <p className="text-sm text-gray-400">per day</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
            <div className="p-2 sm:p-3 bg-orange-500/20 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm ring-1 ring-orange-500/20">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-300">{car.seats} Seats</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
            <div className="p-2 sm:p-3 bg-orange-500/20 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm ring-1 ring-orange-500/20">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-300">{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
            <div className="p-2 sm:p-3 bg-orange-500/20 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm ring-1 ring-orange-500/20">
              <Fuel className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-300">{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
            <div className="p-2 sm:p-3 bg-orange-500/20 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm ring-1 ring-orange-500/20">
              <Car className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-300">{car.mileage}</span>
          </div>
        </div>

        {/* View Details Button */}
        <Button 
          asChild
          className="w-full mt-6 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 font-medium transition-all duration-300 hover:shadow-lg shadow-sm py-2.5 sm:py-3 group-hover:-translate-y-0.5 text-sm sm:text-base relative overflow-hidden border border-orange-500/20"
        >
          <div className="flex items-center justify-center relative z-10">
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-2" />
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </div>
        </Button>
      </div>
    </Link>
  )
} 