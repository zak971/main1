"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Car, Phone, MapPin, Clock, Shield, CheckCircle, ArrowRight, Star, ChevronDown, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Script from "next/script"

export default function AirportTransferPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="airport-transfer-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Airport Transfer Service in Goa",
            "description": "Professional airport transfer service in Goa with reliable drivers and comfortable vehicles. Available 24/7 for Goa International Airport transfers.",
            "provider": {
              "@type": "Organization",
              "name": "Goa Car Rental",
              "url": "https://goacarrental.in",
              "telephone": "+919307055218",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Goa",
                "addressRegion": "Goa",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Goa"
            },
            "serviceType": "Airport Transfer",
            "offers": {
              "@type": "Offer",
              "price": "1500",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "url": "https://goacarrental.in/airport-transfer"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Airport Transfer Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sedan Airport Transfer",
                    "description": "Comfortable sedan for 2-3 passengers with luggage"
                  },
                  "price": "1500",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SUV Airport Transfer",
                    "description": "Spacious SUV for 4-6 passengers with extra luggage space"
                  },
                  "price": "2500",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Luxury Airport Transfer",
                    "description": "Premium sedan for business travelers and special occasions"
                  },
                  "price": "3500",
                  "priceCurrency": "INR"
                }
              ]
            },
            "review": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            },
            "featureList": [
              "Professional Drivers",
              "Flight Tracking",
              "Meet & Greet Service",
              "24/7 Availability",
              "Clean & Comfortable Vehicles",
              "Fixed Pricing"
            ]
          })
        }}
      />

      <div className="min-h-screen">
        {/* Background Layers */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
          <Image
            src="/images/services/airport.png"
            alt="Airport Transfer Service in Goa"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 py-8 sm:py-12 md:py-16 max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 font-montserrat tracking-tight leading-tight"
              >
                Professional Airport Transfer Service in Goa
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed"
              >
                Enjoy a stress-free airport transfer with our professional drivers and premium vehicles
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-xl w-full sm:w-auto"
                >
                  <Link href="tel:+919307055218" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Book Airport Transfer</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-xl w-full sm:w-auto"
                >
                  <Link href="https://wa.me/919307055218" className="flex items-center justify-center space-x-2">
                    <span>Check Availability</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-2 sm:px-4 md:px-6">
            {/* Why Choose Us */}
            <div className="text-center mb-10 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 font-montserrat">Why Choose Our Airport Transfer?</h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                  Experience the most reliable and comfortable airport transfer service in Goa
                </p>
              </motion.div>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { 
                      icon: <Clock className="w-8 h-8" />, 
                      title: "On-Time Pickup & Drop-off", 
                      description: "Punctual service with real-time flight tracking",
                      highlight: "Always On Time"
                    },
                    { 
                      icon: <Car className="w-8 h-8" />, 
                      title: "Wide Range of Vehicles", 
                      description: "From sedans to SUVs for all group sizes",
                      highlight: "Premium Fleet"
                    },
                    { 
                      icon: <Shield className="w-8 h-8" />, 
                      title: "Sanitized & Air-Conditioned", 
                      description: "Clean, comfortable, and well-maintained cars",
                      highlight: "100% Clean"
                    },
                    { 
                      icon: <MapPin className="w-8 h-8" />, 
                      title: "Meet & Greet Service", 
                      description: "Driver with name board at arrival gate",
                      highlight: "Easy to Find"
                    },
                    { 
                      icon: <CheckCircle className="w-8 h-8" />, 
                      title: "Suitable for All Travelers", 
                      description: "Perfect for solo, family, or group travel",
                      highlight: "Flexible"
                    },
                    { 
                      icon: <Phone className="w-8 h-8" />, 
                      title: "Easy Online Booking", 
                      description: "Simple booking and instant confirmation",
                      highlight: "Hassle-free"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <div className="relative">
                        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                            {feature.highlight}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Vehicles */}
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8 font-montserrat">Available Vehicles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
                {[
                  {
                    type: "Sedan",
                    capacity: "2-3 passengers",
                    features: ["Air-conditioned", "Spacious boot", "Comfortable seats"]
                  },
                  {
                    type: "SUV",
                    capacity: "4-6 passengers",
                    features: ["Extra luggage space", "Premium comfort", "Family friendly"]
                  },
                  {
                    type: "Luxury",
                    capacity: "2-4 passengers",
                    features: ["Premium sedan", "Extra comfort", "Business class"]
                  }
                ].map((vehicle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/5"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{vehicle.type}</h3>
                    <p className="text-orange-400 font-medium mb-4">{vehicle.capacity}</p>
                    <ul className="space-y-2 text-left">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-center">
                          <span className="text-orange-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-2xl mx-auto mt-8 sm:mt-12">
              {/* Section Divider */}
              <div className="container mx-auto px-2 py-2 sm:py-4">
                <div className="max-w-2xl mx-auto">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                </div>
              </div>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">Find answers to common questions about airport transfer services</p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                {[
                  {
                    question: "Can I cancel after booking?",
                    answer: "Yes, you can cancel your booking up to 24 hours before the scheduled pickup time. Cancellations made within 24 hours may be subject to a cancellation fee."
                  },
                  {
                    question: "What if my flight is delayed?",
                    answer: "We track your flight in real-time and adjust the pickup time accordingly. There are no extra charges for flight delays. Your chauffeur will wait for you at the airport."
                  },
                  {
                    question: "Will the driver wait with a placard?",
                    answer: "Yes, our chauffeur will meet you at the arrival gate with a name board displaying your name. They will also assist with your luggage."
                  },
                  {
                    question: "Do you offer child seats?",
                    answer: "Yes, we provide child seats upon request. Please mention this requirement during booking to ensure availability."
                  },
                  {
                    question: "What types of vehicles do you offer?",
                    answer: "We offer a range of vehicles including sedans, SUVs, and luxury cars. All vehicles are clean, well-maintained, and suitable for airport transfers."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                    >
                      <h3 className="text-base font-semibold text-white pr-4">{faq.question}</h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                          openIndex === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 py-3">
                            <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-10 sm:mt-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 font-montserrat">Book Your Airport Transfer Now!</h2>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Experience hassle-free airport transfers with our premium service
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-6 py-4 text-base rounded-xl w-full sm:w-auto"
              >
                <Link href="tel:+919307055218" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Airport Transfer</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 