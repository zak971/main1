"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import { Suspense, lazy } from "react"

// Lazy load motion components
const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.div })))
const MotionH1 = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.h1 })))

// Animation variants - simplified for better performance
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function HeroCarousel() {
  // Respect user's motion preferences
  const prefersReducedMotion = useReducedMotion()

  // Simplified animation if user prefers reduced motion
  const shouldAnimate = !prefersReducedMotion

  return (
    <section className="relative w-full h-[90vh] md:h-[100vh]">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/TRY1.jpg"
          alt="Premium luxury car rental service in Goa - Experience the best car rental service with Goa Car Rentals"
          fill
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02LjY2OjY2Njo2NjY6Ojo6Pz8/P0dHR0dHR0dHR0dHR0f/2wBDARUXFyAeIB4gHh4gIiAdIB0gHR0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="100vw"
          quality={90}
          className="object-cover transform-gpu"
          style={{
            objectPosition: 'center center',
            transform: 'scale(1.01)',
            willChange: 'transform',
          }}
          onLoadingComplete={(img) => {
            img.classList.add('opacity-100')
            img.classList.remove('opacity-0')
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-[0.07] mix-blend-overlay" />
      </div>

      {/* Static Content */}
      <div className="absolute inset-0 z-20">
        <Suspense fallback={
          <div className="container relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-2 sm:mb-3 leading-tight text-left">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Explore Goa with Ease<br /></span>
              <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"> Affordable Self-Drive<br/>Car Rentals</span>
            </h1>
          </div>
        }>
          <MotionDiv 
            className="container relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 mx-auto"
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={shouldAnimate ? staggerContainer : {}}
          >
            {/* Main Heading */}
            <MotionH1 
              variants={shouldAnimate ? fadeInUp : {}}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-2 sm:mb-3 leading-tight text-left"
            >
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Explore Goa with Ease<br /></span>
              <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"> Affordable Self-Drive<br/>Car Rentals</span>
            </MotionH1>

            {/* Subheading */}
            <MotionDiv 
              variants={shouldAnimate ? fadeInUp : {}}
              className="w-full overflow-hidden mb-3 sm:mb-5"
            >
              <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white leading-tight font-semibold tracking-wide drop-shadow-lg inline-flex items-center flex-wrap gap-2">
                <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">Affordable Prices</span>
                <span className="text-amber-300">•</span>
                <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">No Hidden Charges</span>
                <span className="text-amber-300">•</span>
                <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">Doorstep Delivery</span>
              </h2>
            </MotionDiv>

            {/* CTA Button */}
            <MotionDiv variants={shouldAnimate ? fadeInUp : {}}>
              <Button 
                asChild
                size="lg" 
                className="group bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] shadow-xl active:scale-95 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 rounded-xl border-2 border-amber-300/30 text-xs xs:text-sm sm:text-base md:text-lg"
              >
                <Link href="/cars" className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <span className="hidden sm:inline">Book Now – Start Your Journey Today</span>
                  <span className="sm:hidden">VIEW FLEET</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 flex-shrink-0" />
                </Link>
              </Button>
            </MotionDiv>
          </MotionDiv>
        </Suspense>
      </div>
    </section>
  )
} 