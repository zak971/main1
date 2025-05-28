"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Car, Phone, MapPin, Clock, Shield, CheckCircle, ArrowRight, Star, ChevronDown, Users, CarFront, Sparkles, Crown, Briefcase, Heart, Cog, Fuel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { LuxuryCarCard } from "@/components/cars/luxury-car-card"
import { getLuxuryCars } from "@/lib/luxury-cars"
import type { CarType } from "@/types/car"

export default function LuxuryCarsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [cars, setCars] = useState<CarType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getLuxuryCars();
        setCars(carsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/luxury/hero.jpg"
          alt="Luxury Car Rental in Goa"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-12 sm:py-16 md:py-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Service
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 font-montserrat tracking-tight leading-tight"
            >
              Luxury Car Rental in Goa  Arrive in Style
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed"
            >
              Chauffeur-driven premium cars for weddings, corporate events, and VIP transfers. Experience the comfort, class, and confidence of arriving in a luxury car.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-6 py-3 text-lg rounded-xl"
              >
                <Link href="tel:+919307055218" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Now</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-6 py-3 text-lg rounded-xl"
              >
                <Link href="#fleet" className="flex items-center space-x-2">
                  <Car className="w-5 h-5" />
                  <span>View Fleet</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { icon: <Clock className="w-4 h-4" />, text: "24/7 Support" },
                { icon: <Shield className="w-4 h-4" />, text: "Verified Chauffeurs" },
                { icon: <CarFront className="w-4 h-4" />, text: "Premium Fleet" }
              ].map((badge, index) => (
                <span key={index} className="inline-flex items-center px-4 py-2 bg-white/5 text-white text-sm rounded-full">
                  {badge.icon}
                  <span className="ml-2">{badge.text}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Experience Premium Luxury</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover why we're Goa's top choice for high-end chauffeur-driven vehicles.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Professional Chauffeurs",
                  description: "Expert drivers with extensive experience in luxury service",
                  features: [
                    "Background verified",
                    "Professional training",
                    "Local expertise"
                  ]
                },
                {
                  icon: <CarFront className="w-8 h-8" />,
                  title: "Premium Fleet",
                  description: "Exclusive collection of luxury vehicles",
                  features: [
                    "Mercedes & BMW",
                    "Audi & Range Rover",
                    "Regular maintenance"
                  ]
                },
                {
                  icon: <Crown className="w-8 h-8" />,
                  title: "Specialized Services",
                  description: "Tailored packages for every occasion",
                  features: [
                    "Wedding services",
                    "Corporate events",
                    "VIP transfers"
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
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300 font-montserrat tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base mb-6 font-medium">
                      {feature.description}
                    </p>
                    <ul className="space-y-3 text-left">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-sm font-medium">
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                          <span className="tracking-wide">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Luxury Fleet Section */}
      <section id="fleet" className="py-2 sm:py-4 md:py-6">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                  <CarFront className="w-4 h-4 mr-2" />
                  Our Fleet
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Premium Luxury Fleet</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Choose from our exclusive collection of luxury vehicles
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {isLoading ? (
                <div className="col-span-full flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
                </div>
              ) : (
                cars.map((car) => (
                  <LuxuryCarCard key={car.id} car={car} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-black/30 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative h-[400px] md:h-[600px]">
                  <Image
                    src="/images/luxury/weeding-car.jpg"
                    alt="Wedding Car Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 sm:p-10 md:p-12">
                  <div className="inline-block mb-4">
                    <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                      <Heart className="w-4 h-4 mr-2" />
                      Wedding Service
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">Make Your Grand Entrance</h2>
                  <p className="text-gray-400 text-lg mb-6">
                    Create unforgettable memories with our premium wedding car service
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Customized flower/ribbon decor",
                      "Chauffeur in formal attire",
                      "Early arrival & coordination",
                      "Professional photography support",
                      "Flexible booking options"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300"
                  >
                    <Link href="tel:+919307055218" className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Book Wedding Car</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-black/30 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="p-8 sm:p-10 md:p-12 order-2 md:order-1">
                  <div className="inline-block mb-4">
                    <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Business Service
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">Premium Business Travel, Done Right</h2>
                  <p className="text-gray-400 text-lg mb-6">
                    Elevate your business travel with our executive car service
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Wi-Fi enabled vehicles",
                      "Flight tracking & punctuality",
                      "Corporate billing support",
                      "Onboard refreshment kit",
                      "Professional chauffeurs"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300"
                  >
                    <Link href="tel:+919307055218" className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Book Business Car</span>
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[400px] md:h-[600px] order-1 md:order-2">
                  <Image
                    src="/images/luxury/download1.jpg"
                    alt="Business Car Service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      

      {/* FAQ Section */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full">
                    <ChevronDown className="w-4 h-4 mr-2" />
                    FAQ
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">Frequently Asked Questions</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Find answers to common questions about our luxury car service
                </p>
              </motion.div>
            </div>
            <div className="space-y-6">
              {[
                {
                  question: "What's included in the rental?",
                  answer: "Our luxury car rental includes a professional chauffeur, fuel, and basic insurance. Additional services like airport pickup, wedding decorations, and refreshments can be arranged upon request."
                },
                {
                  question: "Can I customize wedding decor?",
                  answer: "Yes, we offer customized wedding car decorations including flowers, ribbons, and other decorative elements. Our team will work with you to create the perfect look for your special day."
                },
                {
                  question: "Do you offer airport pickup/drop in luxury cars?",
                  answer: "Yes, we provide luxury airport transfer services to both Dabolim and Mopa airports. Our chauffeurs track flight status and ensure timely pickup and drop-off."
                },
                {
                  question: "Are chauffeurs trained and background-verified?",
                  answer: "All our chauffeurs undergo thorough background verification, professional training, and regular assessments to ensure the highest standards of service and safety."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-48 opacity-100 py-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/30 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl border border-white/5"
            >
              <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
                Ready to Ride in Style?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Book your luxury car now and experience premium service in Goa. Available 24/7 with instant confirmation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-8 py-4 text-lg rounded-xl"
                >
                  <Link href="tel:+919307055218" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Book Now</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-8 py-4 text-lg rounded-xl"
                >
                  <Link 
                    href="https://wa.me/919307055218?text=Hi,%20I'm%20interested%20in%20booking%20a%20luxury%20car%20in%20Goa.%20Please%20provide%20more%20information%20about%20your%20service." 
                    className="flex items-center space-x-2"
                  >
                    <span>WhatsApp Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="text-gray-400 text-sm">Available 24/7</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">Instant Confirmation</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">WhatsApp Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 