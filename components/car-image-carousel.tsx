"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'
import { getImageUrl } from "@/lib/cdn-config"

interface CarImageCarouselProps {
  images: string[]
  carName: string
  onThumbnailClick?: (index: number) => void
}

export function CarImageCarousel({ images, carName, onThumbnailClick }: CarImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'center',
    skipSnaps: false,
    inViewThreshold: 0.7,
    dragThreshold: 10
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (emblaApi && onThumbnailClick) {
      onThumbnailClick(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi, onThumbnailClick])

  useEffect(() => {
    if (emblaApi) {
      onSelect()
      emblaApi.on('select', onSelect)
      return () => {
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi, onSelect])

  const carouselImages = images.length > 0 ? images : [getImageUrl('/car-placeholder.jpg')]

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselImages.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
                <Image
                  src={image}
                  alt={`${carName} - ${index === 0 ? 'Front view' : `View ${index + 1}`} - Car rental in Goa`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  quality={85}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/70 border-none text-white backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:-translate-x-1" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/70 border-none text-white backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  )
} 