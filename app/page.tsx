"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Phone, PhoneIcon as WhatsApp, Mail, ChevronRight, MapPin, Car, Clock, Shield, CheckCircle, ArrowRight, Facebook, Instagram, Twitter, Check, Users, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { FeaturedCars } from "@/components/featured-cars"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactForm from "@/components/contact-form"
import { HeroCarousel } from "@/components/hero-carousel"
import { FAQSchema } from "@/components/structured-data"
import AboutUs from "@/components/about-us"
import { FAQSection } from "@/components/faq-section"
import { ServicesSection } from "@/components/services-section"

// FAQ data for structured data
const faqs = [
  {
    question: "What documents do I need to rent a car in Goa?",
    answer: "You need a valid driving license, ID proof (Aadhar/Passport), and address proof. For international tourists, an International Driving Permit is required along with passport."
  },
  {
    question: "Is there a security deposit for car rentals?",
    answer: "Yes, we require a refundable security deposit of ₹5,000 for standard cars and ₹10,000 for premium vehicles, returned upon safe return of the vehicle."
  },
  {
    question: "Do you offer airport pickup and drop service?",
    answer: "Yes, we offer complimentary airport pickup and drop service with advance booking of our rental cars."
  },
  {
    question: "What is included in the rental price?",
    answer: "Our rental price includes comprehensive insurance, unlimited kilometers, 24/7 roadside assistance, and standard maintenance."
  },
  {
    question: "Can I book a car without a credit card?",
    answer: "Yes, we accept cash payments and other payment methods like UPI, net banking, and debit cards."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
}

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Goa Car Rental",
            "url": "https://goacarrental.in",
            "logo": "https://goacarrental.in/images/rename.png",
            "description": "Premium car rental services in Goa offering self-drive cars, airport transfers, and chauffeur services.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Goa",
              "addressRegion": "Goa",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919307055218",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi", "Konkani"]
            },
            "sameAs": [
              "https://facebook.com/yourpage",
              "https://instagram.com/yourpage",
              "https://twitter.com/yourpage"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Car Rental Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Self Drive Cars",
                    "description": "Rent a car for self-drive in Goa. Wide range of vehicles available.",
                    "url": "https://goacarrental.in/self-drive-cars"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Airport Transfer",
                    "description": "Professional airport pickup and drop service in Goa.",
                    "url": "https://goacarrental.in/airport-transfer"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Chauffeur Service",
                    "description": "Professional chauffeur service with luxury vehicles in Goa.",
                    "url": "https://goacarrental.in/chauffeur-service"
                  }
                }
              ]
            },
            "review": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500"
            },
            "areaServed": {
              "@type": "City",
              "name": "Goa"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "priceRange": "₹₹",
            "paymentAccepted": ["Cash", "Credit Card", "UPI", "Bank Transfer"],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Service Areas",
                "value": "All of Goa"
              },
              {
                "@type": "PropertyValue",
                "name": "Vehicle Types",
                "value": "Sedan, SUV, Luxury, Premium"
              },
              {
                "@type": "PropertyValue",
                "name": "Languages",
                "value": "English, Hindi, Konkani"
              }
            ]
          })
        }}
      />

      {/* Add FAQSchema for structured data */}
      <FAQSchema faqs={faqs} />
    
    <div className="flex flex-col min-h-screen">
      {/* Main Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section - Wrap image in a proper container */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src="/images/hero/hero1.jpg"
            alt="Car rental in Goa"
            fill
            priority
            quality={75}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <HeroCarousel />
        </section>

        

        {/* Services Section */}

        
        <ServicesSection />

         {/* Section Divider */}
         <div className="container mx-auto px-4 ">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Featured Cars Section */}
        <section className="relative py-8 sm:py-12 overflow-hidden">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-8 text-center px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 leading-tight font-montserrat">
               Top-Rated Self-Drive Cars in Goa
              </h2>
              <p className="max-w-1xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                Explore Goa effortlessly with our most booked Goa car rental options.
              </p>
            </div>

            {/* Featured Cars Grid */}
            <div className="max-w-7xl mx-auto">
              <FeaturedCars />
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center justify-center mt-6 sm:mt-8 mb-6 sm:mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-8 py-3 rounded-xl"
              >
                <Link href="/self-drive-cars" className="flex items-center space-x-2">
                  <Car className="w-4 h-4" />
                  <span>View All Cars</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* About Us Section */}
        <section id="about" className="relative py-8 sm:py-12 overflow-hidden">
          <AboutUs />
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="relative py-8 sm:py-12 overflow-hidden">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mb-8 text-center px-4"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
              >
                Experience the Difference
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed"
              >
                More than Just a Car Rental in Goa — It's a Reliable Service You Can Trust
              </motion.p>
            </motion.div>

            {/* Features Grid - Simplified */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-6"
            >
              {/* Premium Fleet */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-3"
                >
                  <Car className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Premium Fleet</h3>
                <p className="text-sm text-gray-400">Affordable vehicles maintained to the highest standards for a premium driving experience.</p>
              </motion.div>

              {/* Easy Booking */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-3"
                >
                  <WhatsApp className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Easy Booking</h3>
                <p className="text-sm text-gray-400">Simple WhatsApp booking with quick confirmation and no complicated forms.</p>
              </motion.div>

              {/* Free Delivery */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
                className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-3"
                >
                  <MapPin className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Delivery</h3>
                <p className="text-sm text-gray-400">Complimentary doorstep delivery anywhere in Goa with no extra charges.</p>
              </motion.div>

              {/* 24/7 Support */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
                className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.7 }}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-3"
                >
                  <Shield className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-400">Round-the-clock assistance with prompt response and roadside emergency support.</p>
              </motion.div>
            </motion.div>
            
            {/* Stats Section - Simplified */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-black/40 to-neutral-900/40 rounded-2xl border border-white/5 p-4 mb-6"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
              >
                {[
                  { value: "1200+", label: "Happy Customers" },
                  { value: "4.8", label: "Average Rating" },
                  { value: "50+", label: "Premium Cars" },
                  { value: "24/7", label: "Customer Support" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.9 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
              className="flex justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-6 py-2 rounded-xl"
              >
                <Link href="/self-drive-cars" className="flex items-center space-x-2">
                  <Car className="w-4 h-4" />
                  <span>View Fleet</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="relative py-8 sm:py-10 overflow-hidden">  
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-6 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
                What Our Customers Say
              </h2>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                Genuine Stories from Happy Travelers Who Explored Goa with Ease – No Hassles, Just Memorable Journeys.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        

        
        {/* Contact Section */}
        <section id="contact" className="relative py-8 sm:py-10 overflow-hidden">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Get In Touch
              </h2>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                Have questions? Contact us for more information about our best car rental services
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Contact Info */}
                <div className="space-y-6">
                  {/* Contact Information Card */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h3>

                      <div className="space-y-6">
                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <MapPin className="w-6 h-6 text-neutral-300" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-semibold text-white mb-1">Address</p>
                            <p className="text-base text-neutral-300">Fatorda, Margao, South Goa, 403602</p>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <Phone className="w-6 h-6 text-neutral-300" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-semibold text-white mb-1">Phone</p>
                            <Link
                              href="tel:+919307055218"
                              className="text-base text-neutral-300 hover:text-white transition-colors"
                            >
                              +91 9307055218
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <Mail className="w-6 h-6 text-neutral-300" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-semibold text-white mb-1">Email</p>
                            <Link
                              href="mailto:info@goacarrentals.com"
                              className="text-base text-neutral-300 hover:text-white transition-colors"
                            >
                              info@goacarrentals.com
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <WhatsApp className="w-6 h-6 text-neutral-300" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-semibold text-white mb-1">WhatsApp</p>
                            <Link
                              href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa"
                              className="text-base text-neutral-300 hover:text-white transition-colors"
                            >
                              +91 9307055218
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h3>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative py-8 sm:py-12">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Book Your Goa Ride Now – Quick, Easy & Affordable!
              </h2>
              <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                Explore Goa in Comfort with Our Wide Range of Self-Drive Cars.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/self-drive-cars" 
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] shadow-xl active:scale-95 px-6 py-4 rounded-xl border-2 border-amber-300/30 text-base overflow-hidden"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Car className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </motion.div>
                  <span className="mx-2">Book Your Car Now</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/30 to-amber-400/0"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <Clock className="w-6 h-6 text-white mb-3" />
                <h3 className="text-base font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-400">Round-the-clock assistance for all your needs</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <WhatsApp className="w-6 h-6 text-white mb-3" />
                <h3 className="text-base font-semibold text-white mb-2">Easy Booking</h3>
                <p className="text-sm text-gray-400">Simple WhatsApp booking with quick confirmation</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <MapPin className="w-6 h-6 text-white mb-3" />
                <h3 className="text-base font-semibold text-white mb-2">Doorstep Delivery</h3>
                <p className="text-sm text-gray-400">Free delivery anywhere in Goa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faq" className="relative py-4 sm:py-6 overflow-hidden">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                Find answers to common questions about our car rental services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
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
                          <div className="px-6 py-4 bg-black/30">
                            <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
