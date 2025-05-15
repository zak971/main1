"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Car, Users, Fuel, Settings, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { CarType } from "@/types/car"
import { getCars } from "@/lib/cars"
import { getImageUrl } from "@/lib/cdn-config"
import { motion, AnimatePresence } from "framer-motion"

// Animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 1,
    y: 0,
    scale: 1
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

export function FeaturedCars() {
  const [cars, setCars] = useState<CarType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCars = async () => {
      try {
        const allCars = await getCars(true)
        setCars(allCars)
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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <Skeleton className="w-full h-72" />
            <div className="p-6">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/2 mb-6" />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-10" />
                ))}
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No featured cars available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <motion.div
          key={car.id} 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="h-full"
        >
          <Link 
            href={`/cars/${car.id}`}
            className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:border-gray-300 active:scale-[0.98] transform-gpu"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={getImageUrl(car.image || '')}
                alt={car.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = getImageUrl('/car-placeholder.jpg')
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
              {/* Featured Badge */}
              {car.featured && (
                <Badge className="absolute top-3 right-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 px-2 py-0.5 text-xs sm:text-sm font-medium backdrop-blur-sm border border-gray-600/30 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <Star className="w-3 h-3 mr-1 inline-block" />
                  Featured
                </Badge>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 bg-white">
            <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors">
                {car.name}
              </h3>
                <div className="flex items-baseline space-x-1 sm:space-x-2">
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹{car.price}
                </p>
                  <span className="text-sm sm:text-base font-normal text-gray-600">/day</span>
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
      ))}
    </div>
  )
}
