"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Car } from "lucide-react"

export function HeroCarousel() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/hero/hero1.jpg"
            alt="Premium car rental services in Goa - Self drive cars, airport transfers, and chauffeur services"
            fill
            priority
            loading="eager"
            sizes="100vw"
            quality={100}
            className="object-cover w-full h-full opacity-0 transition-opacity duration-500"
            style={{
              objectPosition: 'center bottom',
              objectFit: 'cover',
            }}
            onLoad={(e) => {
              const img = e.target as HTMLImageElement;
              img.classList.add('opacity-100');
              img.classList.remove('opacity-0');
            }}
          />
        </div>
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, rgba(17,24,39,0.2) 0%, rgba(31,41,55,0.1) 50%, rgba(17,24,39,0.25) 100%)',
            backdropFilter: 'blur(8px)',
            zIndex: 10,
          }}
        />
      </div>

      {/* Static Content */}
      <div className="absolute inset-0 z-20">
        <div className="container relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 mx-auto">
          <h1 className="animate-fade-in-up text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-2 sm:mb-3 leading-tight text-left">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Explore Goa with Ease<br /></span>
            <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"> Affordable Self-Drive<br/>Car Rentals</span>
          </h1>
          <div className="animate-fade-in-up w-full overflow-hidden mb-3 sm:mb-5">
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-tight font-semibold tracking-wide drop-shadow-lg flex flex-col items-start gap-3 sm:gap-4">
              <span className="group flex items-center whitespace-nowrap transition-all duration-300 hover:scale-105">
                <span className="text-orange-400 mr-2 text-base sm:text-lg md:text-xl">✓</span>
                Affordable Prices
              </span>
              <span className="group flex items-center whitespace-nowrap transition-all duration-300 hover:scale-105">
                <span className="text-orange-400 mr-2 text-base sm:text-lg md:text-xl">✓</span>
                No Hidden Charges
              </span>
              <span className="group flex items-center whitespace-nowrap transition-all duration-300 hover:scale-105">
                <span className="text-orange-400 mr-2 text-base sm:text-lg md:text-xl">✓</span>
                Doorstep Delivery
              </span>
            </h2>
          </div>
          <div className="animate-fade-in-up">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/self-drive-cars" 
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] shadow-xl active:scale-95 py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 md:px-6 rounded-xl border-2 border-amber-300/30 text-sm sm:text-base md:text-lg overflow-hidden"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                </motion.div>
                <span className="mx-2 hidden sm:inline">Book Now – Start Your Journey Today</span>
                <span className="mx-2 sm:hidden">VIEW FLEET</span>
                <motion.div
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/30 to-amber-400/0"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 