"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Car, Phone, MapPin, Clock, Shield, CheckCircle, ArrowRight, Star, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Script from "next/script"

export default function ChauffeurServicePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="chauffeur-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Chauffeur Service in Goa",
            "description": "Professional chauffeur service in Goa with luxury vehicles and experienced drivers. Available for all your transportation needs.",
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
            "serviceType": "Chauffeur Service",
            "offers": {
              "@type": "Offer",
              "price": "2500",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "url": "https://goacarrental.in/chauffeur-service"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Chauffeur Service Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hourly Rental",
                    "description": "Professional chauffeur service with minimum 4 hours booking"
                  },
                  "price": "800",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "800",
                    "priceCurrency": "INR",
                    "unitCode": "HUR",
                    "unitText": "per hour"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Half Day Package",
                    "description": "6 hours of chauffeur service with premium vehicles"
                  },
                  "price": "2500",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Day Package",
                    "description": "12 hours of chauffeur service with luxury vehicles"
                  },
                  "price": "4500",
                  "priceCurrency": "INR"
                }
              ]
            },
            "review": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "200"
            },
            "featureList": [
              "Professional Chauffeurs",
              "Luxury Vehicles",
              "Flexible Packages",
              "24/7 Availability",
              "Business & Leisure",
              "Special Occasions"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Minimum Booking",
                "value": "4 hours"
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
              }
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
            src="/images/services/chaffeur.jpg"
            alt="Professional Chauffeur Service in Goa"
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
                Professional Chauffeur Car Rental in Goa
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed"
              >
                Enjoy a stress-free travel experience with our trained chauffeurs and premium vehicles
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
                    <span>Book a Chauffeur</span>
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
        <section className="relative py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Why Choose Us */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">Why Choose Our Chauffeur Service?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Experience luxury travel with our premium chauffeur service, designed to make your journey in Goa exceptional
                </p>
              </motion.div>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { 
                      icon: <Car className="w-8 h-8" />, 
                      title: "Premium Fleet", 
                      description: "Luxury and comfort in every ride",
                      highlight: "Top Cars"
                    },
                    { 
                      icon: <CheckCircle className="w-8 h-8" />, 
                      title: "Flexible Packages", 
                      description: "Hourly, half-day, and full-day options",
                      highlight: "Customizable"
                    },
                    { 
                      icon: <Shield className="w-8 h-8" />, 
                      title: "Professional Drivers", 
                      description: "Experienced and verified chauffeurs",
                      highlight: "100% Safe"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-black/30 backdrop-blur-sm p-10 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <div className="relative">
                        <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
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
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Plans */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 font-montserrat">Service Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    title: "Hourly Rental",
                    price: "₹800/hour",
                    features: ["4 hours minimum", "Fuel included", "Toll charges extra"]
                  },
                  {
                    title: "Half Day",
                    price: "₹2,500",
                    features: ["6 hours", "Fuel included", "Toll charges extra"]
                  },
                  {
                    title: "Full Day",
                    price: "₹4,500",
                    features: ["12 hours", "Fuel included", "Toll charges extra"]
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/5"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
                    <p className="text-2xl font-bold text-orange-400 mb-4">{plan.price}</p>
                    <ul className="space-y-2 text-left">
                      {plan.features.map((feature, i) => (
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

            {/* Testimonials */}
           

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mt-16">
              {/* Section Divider */}
              <div className="container mx-auto px-2 py-4">
                <div className="max-w-4xl mx-auto">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                </div>
              </div>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our chauffeur services</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: "Do chauffeurs speak English?",
                    answer: "Yes, all our chauffeurs are fluent in English and local languages. They are well-trained professionals who can communicate effectively to ensure a smooth and comfortable journey for you."
                  },
                  {
                    question: "Are tolls included?",
                    answer: "Toll charges are not included in the base price and will be added to your final bill. This ensures transparency in pricing and allows you to see exactly what you're paying for."
                  },
                  {
                    question: "What is the minimum booking duration?",
                    answer: "The minimum booking duration is 4 hours. This ensures we can provide the best service quality and allows for proper scheduling of our chauffeurs."
                  },
                  {
                    question: "Do you provide child seats?",
                    answer: "Yes, we provide child seats upon request. Please mention this requirement during booking to ensure availability."
                  },
                  {
                    question: "What types of vehicles are available?",
                    answer: "We offer a range of vehicles including sedans, SUVs, and luxury cars. All vehicles are clean, well-maintained, and suitable for chauffeur services."
                  },
                  {
                    question: "Can I change my booking?",
                    answer: "Yes, you can modify your booking up to 24 hours before the scheduled time. Changes are subject to availability. Please contact us for any modifications to your reservation."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
            <div className="text-center mt-10">
              <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">Your Private Driver Awaits!</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Book our chauffeur service now and enjoy a luxurious journey across Goa
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-8 py-6 text-lg rounded-xl"
              >
                <Link href="tel:+919307055218" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Now with Chauffeur</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 