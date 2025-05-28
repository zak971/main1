"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Car, Phone, MapPin, Clock, Shield, CheckCircle, ArrowRight, Star, ChevronDown, Plane, Users, CarFront } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Script from "next/script"

export default function AirportTransferPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
      {/* JSON-LD Structured Data */}
      <Script
        id="airport-transfer-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Airport Transfer Service in Goa",
            "description": "Professional airport transfer service in Goa with reliable drivers and premium vehicles. Available 24/7 for Goa International Airport (Dabolim) and Mopa Airport transfers.",
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
              "reviewCount": "150",
              "itemReviewed": {
                "@type": "Service",
                "name": "Airport Transfer Service in Goa"
              }
            },
            "featureList": [
              "Professional Drivers",
              "Flight Tracking",
              "Meet & Greet Service",
              "24/7 Availability",
              "Clean & Comfortable Vehicles",
              "Fixed Pricing",
              "Both Airports Covered",
              "Luggage Assistance"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Airports Served",
                "value": "Dabolim International Airport, Mopa International Airport"
              },
              {
                "@type": "PropertyValue",
                "name": "Languages",
                "value": "English, Hindi, Konkani"
              },
              {
                "@type": "PropertyValue",
                "name": "Vehicle Types",
                "value": "Sedan, SUV, Luxury"
              },
              {
                "@type": "PropertyValue",
                "name": "Service Features",
                "value": "Flight Tracking, Meet & Greet, 24/7 Support"
              }
            ]
          })
        }}
      />

        {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
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
              Trusted Airport Transfer in Goa – Pickup & Drop from Dabolim & Mopa
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
                <Link 
                  href="https://wa.me/919307055218?text=Hi,%20I'm%20interested%20in%20booking%20an%20airport%20transfer%20in%20Goa.%20Please%20provide%20more%20information%20about%20your%20service." 
                  className="flex items-center space-x-2"
                >
                    <span>Check Availability</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
            {/* Why Choose Us */}
          <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                  <Star className="w-4 h-4 mr-2" />
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Why Choose Our Airport Transfer?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We offer the most dependable Goa airport transfer service with features designed for your comfort and peace of mind:
                </p>
              </motion.div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { 
                      icon: <Clock className="w-8 h-8" />, 
                    title: "On-Time Service", 
                    description: "Punctual pickup and drop-off with flight tracking",
                    highlight: "Always On Time",
                    features: [
                      "Real-time flight tracking",
                      "Early arrival guarantee",
                      "No waiting charges"
                    ]
                    },
                    { 
                    icon: <CarFront className="w-8 h-8" />, 
                    title: "Premium Fleet", 
                    description: "Clean and comfortable vehicles for all needs",
                    highlight: "Top Cars",
                    features: [
                      "Sedans & SUVs available",
                      "Air-conditioned vehicles",
                      "Regular sanitization"
                    ]
                    },
                    { 
                      icon: <Shield className="w-8 h-8" />, 
                    title: "Professional Drivers", 
                    description: "Experienced and verified chauffeurs",
                    highlight: "100% Safe",
                    features: [
                      "Background verified",
                      "Local expertise",
                      "24/7 availability"
                    ]
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <div className="relative">
                        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                      <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                            {feature.highlight}
                          </span>
                        </div>
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                      <p className="text-gray-400 leading-relaxed text-lg mb-4">
                          {feature.description}
                        </p>
                      <ul className="space-y-2 text-left">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          {/* Section Divider */}
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black/30 backdrop-blur-sm px-4 text-orange-400">
                <Plane className="w-6 h-6" />
              </span>
            </div>
          </div>

          {/* Service Features */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Service Features
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Premium Airport Transfer Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Enjoy a seamless airport transfer experience with our comprehensive service features
              </p>
            </motion.div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Meet & Greet",
                    description: "Professional meet and greet service at the airport",
                    features: [
                      "Name board display",
                      "Flight tracking",
                      "Luggage assistance"
                    ]
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Group Transfers",
                    description: "Perfect for families and groups of all sizes",
                    features: [
                      "Multiple vehicle options",
                      "Extra luggage space",
                      "Group discounts"
                    ]
                  },
                  {
                    icon: <Phone className="w-8 h-8" />,
                    title: "Easy Booking",
                    description: "Simple and convenient booking process",
                    features: [
                      "Online booking",
                      "Instant confirmation",
                      "24/7 support"
                    ]
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative">
                      <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                    <ul className="space-y-2 text-left">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              </div>
            </div>

              {/* Section Divider */}
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black/30 backdrop-blur-sm px-4 text-orange-400">
                <Car className="w-6 h-6" />
              </span>
                </div>
              </div>

          {/* CTA Section */}
          <section className="relative py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-black/30 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-white/5"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-montserrat">
                    Book Your Airport Transfer in Goa
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Book your airport transfer in Goa now for a smooth and hassle-free journey. No hidden charges, no delays – just premium service from start to finish.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-6 py-3 text-base rounded-xl"
                    >
                      <Link href="tel:+919307055218" className="flex items-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>Book Now</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-6 py-3 text-base rounded-xl"
                    >
                      <Link 
                        href="https://wa.me/919307055218?text=Hi,%20I'm%20interested%20in%20booking%20an%20airport%20transfer%20in%20Goa.%20Please%20provide%20more%20information%20about%20your%20service." 
                        className="flex items-center space-x-2"
                      >
                        <span>Check Availability</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our airport transfer service</p>
              </div>

            <div className="space-y-4">
                {[
                  {
                  question: "How do I book an airport transfer?",
                  answer: "You can book through our website, WhatsApp, or by calling us directly. We recommend booking in advance to ensure availability."
                  },
                  {
                  question: "Do you track flight delays?",
                  answer: "Yes, we track all flights and adjust pickup times accordingly. There are no extra charges for flight delays."
                },
                {
                  question: "What types of vehicles are available?",
                  answer: "We offer sedans, SUVs, and luxury vehicles. All vehicles are air-conditioned and well-maintained."
                  },
                  {
                  question: "Is the price fixed or metered?",
                  answer: "All our airport transfers have fixed prices with no hidden charges. The price includes fuel and driver charges."
                  },
                  {
                  question: "Do you provide child seats?",
                  answer: "Yes, we provide child seats upon request. Please mention this requirement during booking."
                  },
                  {
                  question: "What if my flight is delayed?",
                  answer: "We monitor flight status and adjust pickup times automatically. Our drivers will wait for you at no extra cost."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                    >
                      <h3 className="text-base font-semibold text-white pr-4">{faq.question}</h3>
                      <ChevronDown 
                      className={`w-4 h-4 text-orange-400 transition-transform duration-300 ${
                          openIndex === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                  <div 
                    className={`px-4 transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-48 opacity-100 py-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                          </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">Ready for Your Airport Transfer?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Book your airport transfer now and enjoy a comfortable journey to or from Goa International Airport
              </p>
              <Button
                asChild
                size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-8 py-6 text-lg rounded-xl"
              >
                <Link href="tel:+919307055218" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Airport Transfer</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </main>
  )
} 