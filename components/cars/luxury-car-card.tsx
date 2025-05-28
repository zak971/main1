"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import type { CarType } from "@/types/car"

export function LuxuryCarCard({ car }: { car: CarType }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-[#0d0d0d] text-white rounded-xl overflow-hidden shadow-lg border border-gray-800/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/20"
      >
        {/* Image Container */}
      <div className="relative">
        {!imageError ? (
          <Image
            src={car.image}
            alt={`${car.name} - Premium luxury car rental in Goa with ${car.seats} seats, ${car.transmission} transmission, and premium features`}
            width={400}
            height={240}
            className={`w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105 ${isLoading ? 'blur-sm' : 'blur-0'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <PlaceholderImage
            width={400}
            height={240}
            alt={`${car.name} placeholder`}
            className="w-full h-60 object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {car.name}
          </h3>
        </div>

        {/* Features List */}
        <ul className="text-gray-200 space-y-3">
          {car.features?.slice(0, 4).map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start gap-3 text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center mt-0.5">
                <span className="text-amber-400 text-xs">✓</span>
              </span>
              <span className="font-medium tracking-wide leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <div className="pt-2 flex justify-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-2 rounded-lg font-medium hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30"
          >
            <Link href={`/luxury-cars/${car.slug}`} className="flex items-center space-x-2">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
} 