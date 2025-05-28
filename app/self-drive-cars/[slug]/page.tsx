"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import { Car, Users, Fuel, Settings, Check, Phone, PhoneIcon as WhatsApp, ArrowLeft, Clock, Wallet, Shield, MapPin, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import type { CarType } from "@/types/car"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCarBySlug } from "@/lib/cars"
import { CarSchema } from "@/components/structured-data"
import { CarReviews } from "@/components/cars/car-reviews"
import { Loading } from "@/components/ui/loading"

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [car, setCar] = useState<CarType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState("")
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const handleBackClick = () => {
    console.log('Back button clicked')
    router.push('/self-drive-cars')
  }

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await getCarBySlug(params.slug)
        if (carData) {
          setCar(carData)
          setSelectedImage(carData.images?.[0] || carData.image || "/images/car-placeholder.jpg")
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
    notFound()
  }

  const images = (car.images || [car.image]).filter((img): img is string => Boolean(img))

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
      <div className="container relative mx-auto px-4 py-6 pt-24 sm:pt-28">
        

        {/* Car Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Image Gallery */}
          <div className="space-y-4">
            {isLoading ? (
              <Loading variant="image" className="w-full" />
            ) : (
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={`${car.name} - ${car.type} car rental in Goa with ${car.seats} seats, ${car.transmission} transmission, and ${car.fuelType} fuel type`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-video rounded-lg overflow-hidden ${
                    selectedImage === image ? "ring-2 ring-orange-400" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${car.name} - ${car.type} car rental in Goa - ${index === 0 ? 'Front view' : index === 1 ? 'Side view' : index === 2 ? 'Rear view' : `View ${index + 1}`}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Info */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="space-y-4">
                <Loading variant="card" />
                <Loading variant="card" />
              </div>
            ) : (
              <>
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
                      <p className="text-gray-400">Type</p>
                      <p className="text-white font-medium">{car.type}</p>
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
                        <Check className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rental Terms and Conditions */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-white mb-6 pt-6">Rental Terms & Conditions</h2>
                  
                  <div className="space-y-1">
                    {[
                      {
                        title: "Eligibility Requirements",
                        items: [
                          "Valid driving license (minimum 1 year old)",
                          "Minimum age: 21 years (25 years for luxury vehicles)",
                          "Valid ID proof (Aadhar Card/PAN Card)"
                        ]
                      },
                      {
                        title: "Booking & Payment",
                        items: [
                          "Advance booking recommended (especially during peak season)",
                          "Security deposit required at the time of pickup",
                          "Fuel charges as per actual usage"
                        ]
                      },
                      {
                        title: "Usage & Restrictions",
                        items: [
                          "Unlimited kilometers within Goa",
                          "No smoking allowed in the vehicle",
                          "Vehicle must be returned in the same condition"
                        ]
                      },
                      {
                        title: "Insurance & Coverage",
                        items: [
                          "Comprehensive insurance coverage included",
                          "24/7 roadside assistance available",
                          "Zero depreciation coverage available at extra cost"
                        ]
                      }
                    ].map((section, index) => (
                      <div 
                        key={index} 
                        className="border-b border-white/10 last:border-0"
                      >
                        <button
                          onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                          className="w-full py-3 flex items-center justify-between text-left group"
                          aria-expanded={openAccordion === index}
                          aria-controls={`accordion-content-${index}`}
                        >
                          <h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">
                            {section.title}
                          </h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-orange-400 transition-transform duration-200 ${
                              openAccordion === index ? 'transform rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        <div 
                          id={`accordion-content-${index}`}
                          className={`grid transition-all duration-200 ease-in-out ${
                            openAccordion === index 
                              ? 'grid-rows-[1fr] opacity-100' 
                              : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="space-y-2 py-2 text-gray-300">
                              {section.items.map((item, itemIndex) => (
                                <li 
                                  key={itemIndex} 
                                  className="flex items-center space-x-2"
                                >
                                  <Check 
                                    className="w-4 h-4 text-orange-400 flex-shrink-0" 
                                    aria-hidden="true"
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Link href="tel:+919307055218">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact for Booking
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    className="flex-1 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/20"
                  >
                    <Link 
                      href={`https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20${car.name}%20in%20Goa`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsApp className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 