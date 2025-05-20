"use client"

import { useState, useEffect } from "react"
import { CarCard } from "@/components/cars/car-card"
import { getCars } from "@/lib/cars"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { CarType } from "@/types/car"
import { Shield, Clock, CheckCircle, MapPin } from "lucide-react"

export default function CarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cars, setCars] = useState<CarType[]>([])
  const [isLoading, setIsLoading] = useState(true)

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
      {/* Hero Section - Optimized */}
     

      {/* Cars Grid Section - Optimized */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers - Optimized */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
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
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
             Self Drive Car Rental Goa
            </h1>
            <p className="mt-4 max-w-4xl text-base sm:text-lg text-gray-300 leading-relaxed">
              Looking for a hassle-free self-drive car rental in Goa? Our fleet offers everything from compact hatchbacks to luxury SUVs, perfect for exploring Goa at your own pace. Whether you're arriving at Goa Airport or staying at a beach resort, we provide doorstep delivery and 24/7 support. Book online and enjoy the freedom of driving across Goa's scenic roads with our reliable, sanitized, and affordable rental cars.
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

          {/* Featured Cars Section */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Featured Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredCars.filter(car => car.featured).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
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
          <section className="mt-20 mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Common Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our car rental services in Goa</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button 
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => {
                    const content = document.getElementById('faq-1-content');
                    content?.classList.toggle('hidden');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">How much does it cost to rent a self-drive car in Goa?</h3>
                    <span className="text-orange-400 text-xl">+</span>
                  </div>
                </button>
                <div id="faq-1-content" className="hidden px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">The cost ranges from ₹999 to ₹3,000 per day depending on the car type and season. We offer special discounts for weekly and monthly rentals. All our prices include insurance, 24/7 roadside assistance, and free delivery to major locations.</p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button 
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => {
                    const content = document.getElementById('faq-2-content');
                    content?.classList.toggle('hidden');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Can I get the car delivered to Goa Airport or my hotel?</h3>
                    <span className="text-orange-400 text-xl">+</span>
                  </div>
                </button>
                <div id="faq-2-content" className="hidden px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">Yes, we offer free delivery to Goa Airport, railway stations, and major hotels across the state. For other locations, a nominal delivery charge may apply. Our team ensures a smooth handover process with a thorough vehicle inspection.</p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button 
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => {
                    const content = document.getElementById('faq-3-content');
                    content?.classList.toggle('hidden');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">What documents are required for renting a car?</h3>
                    <span className="text-orange-400 text-xl">+</span>
                  </div>
                </button>
                <div id="faq-3-content" className="hidden px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">You'll need a valid driving license and one government-issued ID proof (Aadhar Card, PAN Card, or Passport). International travelers need a valid international driving permit along with their passport. All documents should be valid for the entire rental period.</p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button 
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => {
                    const content = document.getElementById('faq-4-content');
                    content?.classList.toggle('hidden');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">What is included in the rental price?</h3>
                    <span className="text-orange-400 text-xl">+</span>
                  </div>
                </button>
                <div id="faq-4-content" className="hidden px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">Our rental prices include comprehensive insurance, 24/7 roadside assistance, free delivery to major locations, and unlimited kilometers. Additional services like GPS and child seats are available at extra cost.</p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button 
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => {
                    const content = document.getElementById('faq-5-content');
                    content?.classList.toggle('hidden');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">What is your cancellation policy?</h3>
                    <span className="text-orange-400 text-xl">+</span>
                  </div>
                </button>
                <div id="faq-5-content" className="hidden px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">Free cancellation is available up to 24 hours before the rental start time. Cancellations made within 24 hours may incur a small fee. In case of no-show, the full rental amount will be charged. We recommend booking early during peak season to ensure availability.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Experience the Best Car Rental Service in Goa</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">We're committed to providing you with the best car rental experience in Goa</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fully Insured</h3>
                <p className="text-gray-400">All our vehicles come with comprehensive insurance coverage for your peace of mind.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-400">Round-the-clock customer support and roadside assistance whenever you need it.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Well-Maintained Fleet</h3>
                <p className="text-gray-400">Regularly serviced and sanitized vehicles for a safe and comfortable ride.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Doorstep Delivery</h3>
                <p className="text-gray-400">Free delivery to airport, railway stations, and major hotels across Goa.</p>
              </div>
            </div>
          </section>

          {/* Rental Terms Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Rental Terms</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Simple and Transparent Rental Terms</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to know about renting a car with us</p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Rental Duration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Minimum rental period: 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Weekly and monthly rentals available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Flexible pickup and drop-off times</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Pricing & Payments</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Starting from ₹999 per day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Security deposit: ₹5,000 (refundable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Multiple payment options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a 
              href="tel:+919307055218" 
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
