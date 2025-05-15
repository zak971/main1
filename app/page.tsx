import Link from "next/link"
import Image from "next/image"
import { Phone, PhoneIcon as WhatsApp, Mail, ChevronRight, MapPin, Car, Clock, Shield, CheckCircle, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedCars } from "@/components/featured-cars"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactForm from "@/components/contact-form"
import { HeroCarousel } from "@/components/hero-carousel"
import { FAQSchema } from "@/components/structured-data"
import AboutUs from "@/components/about-us"
import { FAQSection } from "@/components/faq-section"

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

export default function Home() {
  return (
    <>
      {/* Add FAQSchema for structured data */}
      <FAQSchema faqs={faqs} />
    
    <div className="flex flex-col min-h-screen">
      {/* Main Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section - Wrap image in a proper container */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src="/images/TRY1.jpg"
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

        {/* Featured Cars Section */}
        <section className="relative py-8 sm:py-12 overflow-hidden">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-16 text-center px-4">
              <div className="inline-flex items-center justify-center px-5 py-2 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-sm font-medium text-white tracking-wide uppercase">Featured Cars</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight transform transition-all duration-500 hover:scale-105 hover:text-amber-400 shadow-lg hover:shadow-xl">
              Top-Rated Rental Cars in Goa
              </h1>


              <p className="max-w-1xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
               Explore Goa effortlessly with our most booked Goa car rental options.
              </p>
            </div>

            {/* Featured Cars Grid */}
            <div className="max-w-7xl mx-auto">
              <FeaturedCars />
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center justify-center mt-8 sm:mt-12 mb-8 sm:mb-12">
              <Button 
                asChild 
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-8 py-3 rounded-xl"
              >
                <Link href="/cars" className="flex items-center space-x-2">
                  <Car className="w-4 h-4" />
                  <span>View All Cars</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* About Us Section */}
        <section id="about" className="relative py-6 sm:py-8 overflow-hidden mt-0">
          <AboutUs />
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="relative py-8 sm:py-12 overflow-hidden mt-0 sm:mt-0">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12 text-center px-4">
              <div className="inline-flex items-center justify-center px-5 py-2 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-sm font-medium text-white tracking-wide uppercase">Why Choose Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight">
                Experience the Difference
              </h2>

              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                More than Just a Car Rental in Goa — It's a Reliable Service You Can Trust
              </p>
            </div>

            {/* Features Grid - Simplified */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {/* Premium Fleet */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Premium Fleet</h3>
                <p className="text-sm text-gray-400">Affordable vehicles maintained to the highest standards for a premium driving experience.</p>
              </div>

              {/* Easy Booking */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                  <WhatsApp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Easy Booking</h3>
                <p className="text-sm text-gray-400">Simple WhatsApp booking with quick confirmation and no complicated forms.</p>
              </div>

              {/* Free Delivery */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Delivery</h3>
                <p className="text-sm text-gray-400">Complimentary doorstep delivery anywhere in Goa with no extra charges.</p>
              </div>

              {/* 24/7 Support */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:shadow-lg">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-400">Round-the-clock assistance with prompt response and roadside emergency support.</p>
              </div>
            </div>
            
            {/* Stats Section - Simplified */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-black/40 to-neutral-900/40 rounded-2xl border border-white/5 p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-white mb-1">1200+</span>
                  <span className="text-sm text-gray-400">Happy Customers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-white mb-1">4.8</span>
                  <span className="text-sm text-gray-400">Average Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-white mb-1">50+</span>
                  <span className="text-sm text-gray-400">Premium Cars</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-white mb-1">24/7</span>
                  <span className="text-sm text-gray-400">Customer Support</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 px-8 py-3 rounded-xl"
              >
                <Link href="/cars" className="flex items-center space-x-2">
                  <Car className="w-4 h-4" />
                  <span>View Fleet</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="relative py-8 sm:py-10 overflow-hidden mt-0">  
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-sm font-medium text-white tracking-wide uppercase">Testimonials</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
               Genuine Stories from Happy Travelers Who Explored Goa with Ease – No Hassles, Just Memorable Journeys.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="relative py-8 sm:py-10 overflow-hidden mt-0">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-14 text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-sm font-medium text-white tracking-wide uppercase">Contact Us</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Get In Touch
              </h2>
              <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                Have questions? Contact us for more information about our best car rental services
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Contact Info */}
                <div className="space-y-8">
                  {/* Contact Information Card */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>

                      <div className="space-y-8">
                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <MapPin className="w-7 h-7 text-neutral-300" />
                          </div>
                          <div className="ml-6">
                            <p className="text-lg font-semibold text-white mb-1">Address</p>
                            <p className="text-lg text-neutral-300">Fatorda, Margao, South Goa, 403602</p>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <Phone className="w-7 h-7 text-neutral-300" />
                          </div>
                          <div className="ml-6">
                            <p className="text-lg font-semibold text-white mb-1">Phone</p>
                            <Link
                              href="tel:+919307055218"
                              className="text-lg text-neutral-300 hover:text-white transition-colors"
                            >
                              +91 9307055218
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <Mail className="w-7 h-7 text-neutral-300" />
                          </div>
                          <div className="ml-6">
                            <p className="text-lg font-semibold text-white mb-1">Email</p>
                            <Link
                              href="mailto:info@goacarrentals.com"
                              className="text-lg text-neutral-300 hover:text-white transition-colors"
                            >
                              info@goacarrentals.com
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <WhatsApp className="w-7 h-7 text-neutral-300" />
                          </div>
                          <div className="ml-6">
                            <p className="text-lg font-semibold text-white mb-1">WhatsApp</p>
                            <Link
                              href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa"
                              className="text-lg text-neutral-300 hover:text-white transition-colors"
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
                <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Send Us a Message</h3>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative py-16 sm:py-20">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12 text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-sm font-medium text-white tracking-wide uppercase">Ready to Explore</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6">
               Book Your Goa Ride Now – Quick, Easy & Affordable!
              </h2>
              <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
              Explore Goa in Comfort with Our Wide Range of Self-Drive Cars.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button 
                asChild
                size="lg"
                className="group bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] shadow-xl active:scale-95 px-8 py-6 rounded-xl border-2 border-amber-300/30 text-lg"
              >
                <Link href="/cars" className="flex items-center space-x-3">
                  <Car className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Book Your Car Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-400">Round-the-clock assistance for all your needs</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <WhatsApp className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Easy Booking</h3>
                <p className="text-sm text-gray-400">Simple WhatsApp booking with quick confirmation and no complicated forms.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Doorstep Delivery</h3>
                <p className="text-sm text-gray-400">Free delivery anywhere in Goa</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faq" className="relative py-12 sm:py-16 overflow-hidden">
          <FAQSection />
        </section>
      </div>
    </div>
    </>
  )
}
