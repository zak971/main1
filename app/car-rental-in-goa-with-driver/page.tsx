"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Car, Phone, Shield, CheckCircle, ArrowRight, ChevronDown, Sparkles, Users, CarFront, Star, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Script from "next/script"

export default function ChauffeurServicePage() {
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
        id="chauffeur-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Car Rental in Goa with Driver",
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
              "url": "https://goacarrental.in/car-rental-in-goa-with-driver"
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
              "reviewCount": "200",
              "bestRating": "5",
              "worstRating": "1",
              "itemReviewed": {
                "@type": "Service",
                "name": "Car Rental in Goa with Driver",
                "description": "Professional chauffeur service in Goa with luxury vehicles and experienced drivers. Available for all your transportation needs.",
                "provider": {
                  "@type": "Organization",
                  "name": "Goa Car Rental",
                  "url": "https://goacarrental.in"
                }
              }
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
                Car Rental in Goa with Driver
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed"
              >
                Looking for a reliable car rental in Goa with driver? Our chauffeur-driven cars offer the perfect blend of comfort, convenience, and safety for your travel needs in Goa.
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
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                  <Star className="w-4 h-4 mr-2" />
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Why Choose Our Chauffeur Service?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Experience seamless and luxurious travel across Goa with our premium car rental service with professional drivers.
                Whether you're a tourist, business traveler, or a local looking for hassle-free transportation,
                we provide chauffeur-driven cars tailored to your needs.
                </p>
              </motion.div>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { 
                    icon: <CarFront className="w-8 h-8" />, 
                      title: "Premium Fleet", 
                      description: "Luxury and comfort in every ride",
                    highlight: "Top Cars",
                    features: [
                      "Well-maintained vehicles",
                      "Regular safety checks",
                      "Premium comfort features"
                    ]
                    },
                    { 
                    icon: <Clock className="w-8 h-8" />, 
                      title: "Flexible Packages", 
                      description: "Hourly, half-day, and full-day options",
                    highlight: "Customizable",
                    features: [
                      "Hourly rental available",
                      "Half-day packages",
                      "Full-day services"
                    ]
                    },
                    { 
                      icon: <Shield className="w-8 h-8" />, 
                      title: "Professional Drivers", 
                      description: "Experienced and verified chauffeurs",
                    highlight: "100% Safe",
                    features: [
                      "Licensed professionals",
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
                <Car className="w-6 h-6" />
              </span>
            </div>
          </div>

          {/* Premium Fleet Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium Selection
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Top Cars – Premium Fleet</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Enjoy a ride in our top-rated fleet of sedans, SUVs, and luxury cars, all maintained to the highest standards. Each car is equipped for comfort, safety, and style.
              </p>
            </motion.div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <CarFront className="w-8 h-8" />,
                    title: "Clean & Comfortable",
                    description: "Clean, air-conditioned vehicles for a pleasant journey",
                    features: [
                      "Regular sanitization",
                      "Premium air conditioning",
                      "Comfortable seating"
                    ]
                  },
                  {
                    icon: <Car className="w-8 h-8" />,
                    title: "Variety of Options",
                    description: "Options from budget to luxury to suit your needs",
                    features: [
                      "Sedans & SUVs",
                      "Luxury vehicles",
                      "Budget-friendly options"
                    ]
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Perfect for Everyone",
                    description: "Ideal for families, couples, solo travelers, or executives",
                    features: [
                      "Family-friendly vehicles",
                      "Business class options",
                      "Solo traveler packages"
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
                <Clock className="w-6 h-6" />
              </span>
            </div>
          </div>

          {/* Customizable Packages Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  Flexible Options
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Customizable Packages – Flexible Booking Options</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Whether you need a car for a few hours or the whole day, we offer flexible rental plans that fit your schedule and travel needs.
              </p>
            </motion.div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "Flexible Duration",
                    description: "Choose from various rental periods",
                    features: [
                      "Hourly rentals",
                      "Half-day packages",
                      "Full-day services"
                    ]
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8" />,
                    title: "Easy Booking",
                    description: "Simple and convenient booking process",
                    features: [
                      "Online booking available",
                      "Quick confirmation",
                      "24/7 support"
                    ]
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Special Events",
                    description: "Tailored packages for special occasions",
                    features: [
                      "Wedding services",
                      "Corporate events",
                      "Group bookings"
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
                <Shield className="w-6 h-6" />
              </span>
            </div>
          </div>

          {/* Driver Safety Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                  <Shield className="w-4 h-4 mr-2" />
                  Safety First
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">100% Safe – Verified Professional Drivers</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Your safety is our top priority. Every ride includes a trained and background-verified chauffeur who knows Goa's routes inside and out.
              </p>
            </motion.div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Experienced Drivers",
                    description: "Professional chauffeurs with years of experience",
                    features: [
                      "Background verified",
                      "Extensive training",
                      "Safety certified"
                    ]
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Professional Service",
                    description: "Polite, punctual, and well-groomed drivers",
                    features: [
                      "Well-mannered staff",
                      "Always on time",
                      "Professional appearance"
                    ]
                  },
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Local Expertise",
                    description: "In-depth knowledge of Goa's routes",
                    features: [
                      "Best route selection",
                      "Sightseeing guidance",
                      "Traffic management"
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
                <Star className="w-6 h-6" />
              </span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
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

          

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our chauffeur services</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                  question: "Is fuel included in the chauffeur service?",
                  answer: "Yes, all listed packages include fuel costs. Toll and parking are charged separately."
                },
                {
                  question: "Are your drivers experienced?",
                  answer: "Absolutely! All our chauffeurs are background-verified and professionally trained."
                  },
                  {
                  question: "Can I book a car with driver for airport pickup?",
                  answer: "Yes, we offer airport transfers with chauffeur service. You can book in advance via our website or call us directly."
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

          
          </div>
        </section>
    </main>
  )
} 