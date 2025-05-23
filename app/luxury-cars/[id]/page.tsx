"use client"

import { useState, useEffect } from "react"
import { getLuxuryCarById } from "@/lib/luxury-cars"
import type { CarType } from "@/types/car"
import Image from "next/image"
import { Star, Shield, Clock, CheckCircle, MapPin, ArrowLeft, Users, Settings, Fuel, Car } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LuxuryCarDetailsPage({ params }: { params: { id: string } }) {
  const [car, setCar] = useState<CarType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState("")

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await getLuxuryCarById(params.id)
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
  }, [params.id])

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
      <div className="container mx-auto px-4 py-6 pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <div className="mb-4 flex justify-start">
          <Link 
            href="/luxury-cars" 
            className="group flex items-center gap-2 text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Luxury Cars</span>
          </Link>
        </div>

        {/* Car Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt={car.alt || car.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {(car.images || [car.image]).map((image, index) => (
                image && (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-video rounded-lg overflow-hidden ${
                      selectedImage === image ? "ring-2 ring-orange-400" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${car.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
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

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-orange-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-400">
                {car.reviews?.length || 0} reviews
              </span>
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

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Reviews</h2>
              <div className="space-y-4">
                {car.reviews?.map((review) => (
                  <div key={review.id} className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-orange-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-white font-medium">{review.userName}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{review.date}</span>
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Premium Service Features */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Premium Service</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Luxury Car Rental Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience premium service with our luxury car rentals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-400"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Insurance</h3>
              <p className="text-gray-400">Comprehensive coverage for our luxury vehicles</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Concierge</h3>
              <p className="text-gray-400">Dedicated luxury car support team</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Fleet</h3>
              <p className="text-gray-400">Regularly maintained luxury vehicles</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Delivery</h3>
              <p className="text-gray-400">Luxury car delivery service</p>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need assistance with your luxury car rental?</p>
          <a 
            href="tel:+919307055218" 
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300"
          >
            Contact Luxury Support
          </a>
        </div>
      </div>
    </div>
  )
} 