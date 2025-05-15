"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroCarousel() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/TRY1.avif?v=1"
            alt="Premium luxury car rental service in Goa - Experience the best car rental service with Goa Car Rentals"
            fill
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02LjY2OjY2Njo2NjY6Ojo6Pz8/P0dHR0dHR0dHR0dHR0f/2wBDARUXFyAeIB4gHh4gIiAdIB0gHR0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
            quality={85}
            className="object-cover w-full h-full opacity-0 transition-opacity duration-500"
            style={{
              objectPosition: 'center bottom',
              objectFit: 'cover',
              willChange: 'transform',
            }}
            onLoadingComplete={(img) => {
              img.classList.add('opacity-100')
              img.classList.remove('opacity-0')
            }}
          />
        </div>
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, rgba(17,24,39,0.2) 0%, rgba(31,41,55,0.1) 50%, rgba(17,24,39,0.25) 100%)',
            backdropFilter: 'blur(2px)',
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
            <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white leading-tight font-semibold tracking-wide drop-shadow-lg inline-flex items-center flex-wrap gap-2">
              <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">Affordable Prices</span>
              <span className="text-amber-300">•</span>
              <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">No Hidden Charges</span>
              <span className="text-amber-300">•</span>
              <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">Doorstep Delivery</span>
            </h2>
          </div>
          <div className="animate-fade-in-up">
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
          </div>
        </div>
      </div>
    </section>
  )
} 