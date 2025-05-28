"use client"

import { useState, useEffect } from "react"
import { getLuxuryCarBySlug } from "@/lib/luxury-cars"
import type { CarType } from "@/types/car"
import Image from "next/image"
import { Star, Shield, Clock, CheckCircle, MapPin, ArrowLeft, Users, Settings, Fuel, Car, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LuxuryCarDetailPage({ params }: { params: { slug: string } }) {
  const [car, setCar] = useState<CarType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState("")
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await getLuxuryCarBySlug(params.slug)
        if (carData) {
          setCar(carData)
          setSelectedImage(carData.images?.[0] || carData.image || "")
        }
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching car:", error)
        setIsLoading(false)
      }
    }

    fetchCar()
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    )
  }

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white mb-4">Car not found</h1>
        <Link 
          href="/luxury-cars"
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
        >
          Back to Luxury Cars
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
      <div className="container relative mx-auto px-4 py-6 pt-20 sm:pt-24">
        {/* Car Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              {imageError ? (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-400">Image not available</p>
                </div>
              ) : (
              <Image
                  src={selectedImage || car.image}
                alt={car.alt || car.name}
                fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
                  unoptimized
                  onError={() => {
                    setImageError(true)
                    console.error(`Failed to load image: ${selectedImage || car.image}`)
                  }}
              />
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {(car.images || [car.image]).map((image, index) => (
                image && (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(image)
                      setImageError(false)
                    }}
                    className={`relative aspect-video rounded-lg overflow-hidden ${
                      selectedImage === image ? "ring-2 ring-orange-400" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${car.name} - Image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 11vw"
                      className="object-cover"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/images/car-placeholder.jpg'
                        console.error(`Failed to load image: ${image}`)
                      }}
                    />
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Car Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{car.name}</h1>
              <p className="text-gray-400">{car.type}</p>
            </div>

            <div className="text-3xl font-bold text-white">
              ₹{car.price.toLocaleString()} <span className="text-lg text-gray-400">/day</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center space-x-3 hover:bg-black/50 transition-all duration-300">
                <div className="p-2.5 bg-orange-500/20 rounded-lg ring-1 ring-orange-500/20">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400">Seats</p>
                  <p className="text-white font-medium">{car.seats}</p>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center space-x-3 hover:bg-black/50 transition-all duration-300">
                <div className="p-2.5 bg-orange-500/20 rounded-lg ring-1 ring-orange-500/20">
                  <Settings className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400">Transmission</p>
                  <p className="text-white font-medium">{car.transmission}</p>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center space-x-3 hover:bg-black/50 transition-all duration-300">
                <div className="p-2.5 bg-orange-500/20 rounded-lg ring-1 ring-orange-500/20">
                  <Fuel className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400">Fuel Type</p>
                  <p className="text-white font-medium">{car.fuelType}</p>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center space-x-3 hover:bg-black/50 transition-all duration-300">
                <div className="p-2.5 bg-orange-500/20 rounded-lg ring-1 ring-orange-500/20">
                  <Car className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400">Mileage</p>
                  <p className="text-white font-medium">{car.mileage}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{car.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {car.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Contact for Booking
              </Button>
              <Button className="flex-1 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/20">
                <WhatsApp className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 