"use client"

import Link from "next/link"
import Image from "next/image"
import { Car, Users, Fuel, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { CarType } from "@/types/car"
import { getImageUrl } from "@/lib/cdn-config"
import { motion } from "framer-motion"

interface CarCardProps {
  car: CarType
}

// Animation variants
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <Link 
        href={`/self-drive-cars/${car.slug}`}
        className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:border-gray-300 active:scale-[0.98] transform-gpu"
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={car.image ? getImageUrl(car.image) : getImageUrl('/car-placeholder.jpg')}
            alt={`${car.name} - ${car.type} car available for rent in Goa with ${car.seats} seats and ${car.transmission} transmission`}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors">
              {car.name}
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline space-x-1 sm:space-x-2">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹{car.price}
                </p>
                <span className="text-sm sm:text-base font-normal text-gray-600">/day</span>
            </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6 mb-6">
            <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{car.seats} Seats</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{car.transmission}</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm">
                <Fuel className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{car.fuelType}</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300 shadow-sm">
                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{car.mileage}</span>
            </div>
          </div>

          {/* View Details Button */}
          <Button 
            asChild
            className="w-full mt-auto bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-medium transition-all duration-300 hover:shadow-lg shadow-sm py-2.5 sm:py-3 group-hover:-translate-y-0.5 text-sm sm:text-base relative overflow-hidden border border-gray-700/30"
          >
            <div className="flex items-center justify-center relative z-10">
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-2" />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
          </Button>
        </div>
      </Link>
    </motion.div>
  )
} 