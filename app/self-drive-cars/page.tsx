"use client"

import { useState, useEffect } from "react"
import { CarCard } from "@/components/cars/car-card"
import { getCars } from "@/lib/cars"
import Image from "next/image"
import { Search, ChevronDown, Shield, Clock, CheckCircle, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { CarType } from "@/types/car"

export default function SelfDriveCarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cars, setCars] = useState<CarType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Fetch cars data on component mount
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getCars()
        setCars(carsData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching cars:", error)
        setIsLoading(false)
      }
    }
    
    fetchCars()
  }, [])

  // Filter cars based on search query
  const filteredCars = cars.filter((car) => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true // Show all cars if search is empty
    
    return (
      car.name.toLowerCase().includes(query) || 
      car.type.toLowerCase().includes(query)
    )
  })

  return (
    <div className="min-h-screen">
      {/* Cars Grid Section - Optimized */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers - Optimized */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements - Optimized */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header - Optimized */}
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center pt-10">
            <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Our Fleet</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-2">
              Book a Self Drive Car in Goa <br /> Affordable & Reliable
            </h1>
            <p className="mt-1 max-w-4xl text-base sm:text-lg text-gray-300 leading-relaxed px-4">
              Looking for a self-drive car rental in Goa? Choose from hatchbacks to SUVs with doorstep delivery and 24/7 support. Book now to explore Goa at your own pace with clean, affordable rental cars.
            </p>

            {/* Search Filter */}
            <div className="w-full max-w-lg mt-6 sm:mt-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search by car name or type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 py-6 focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* All Cars Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">All Cars</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
              </div>
            ) : filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-300">No cars found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Common Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about self-drive car rentals</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "What documents do I need for self-drive car rental?",
                  answer: "You'll need a valid driving license, ID proof (Aadhar Card/PAN Card), and address proof. International tourists need a valid international driving permit along with their passport."
                },
                {
                  question: "What is the minimum age requirement?",
                  answer: "The minimum age requirement is 21 years with a valid driving license. For luxury vehicles, the minimum age is 25 years."
                },
                {
                  question: "What is included in the rental price?",
                  answer: "The rental price includes comprehensive insurance, 24/7 roadside assistance, unlimited kilometers, and basic maintenance. Additional services like GPS and child seats are available at extra cost."
                },
                
                {
                  question: "What happens in case of an accident?",
                  answer: "In case of an accident, please contact our 24/7 support team immediately. We provide comprehensive insurance coverage, and our team will guide you through the process."
                },
                {
                  question: "Can I extend my rental period?",
                  answer: "Yes, you can extend your rental period subject to vehicle availability. Please contact us at least 24 hours before your scheduled return time."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-48 opacity-100 py-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-20 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Experience the Best Car Rental Service in Goa
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                We're committed to providing you with the best car rental experience in Goa
              </p>
              <p className="text-gray-400 mb-6">
                Need assistance with your self-drive car rental?
              </p>
              <a 
                href="tel:+919307055218" 
                className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300 text-lg font-medium"
              >
                Contact Support
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
} 