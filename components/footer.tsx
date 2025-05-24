import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"
import { CarLinksFooter } from "@/components/car-links-footer"

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative px-4 sm:px-6 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="Goa Car Rentals - Premium Car Rental Service in Goa"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-bold text-white">Goa Car Rentals</h3>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Your trusted partner for premium car rentals in Goa. Experience luxury, comfort, and reliability with our exceptional service.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  className="group p-2 bg-neutral-800/50 rounded-full hover:bg-neutral-700/50 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  className="group p-2 bg-neutral-800/50 rounded-full hover:bg-neutral-700/50 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.twitter.com"
                  className="group p-2 bg-neutral-800/50 rounded-full hover:bg-neutral-700/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Quick Links and Popular Cars Container */}
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/self-drive-cars"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      Our Cars
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/luxury-cars"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      Luxury Cars
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Popular Cars */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Popular Cars</h3>
                <CarLinksFooter />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-neutral-300 mt-1" />
                  <span className="text-neutral-300">
                    Fatorda, Margao, South Goa, 403602
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-neutral-300 mt-1" />
                  <Link
                    href="tel:+919307055218"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    +91 9307055218
                  </Link>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-neutral-300 mt-1" />
                  <Link
                    href="mailto:info@goacarrentals.com"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    info@goacarrentals.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Business Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-neutral-300">Monday-Friday:</span>
                  <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-neutral-300">Saturday:</span>
                  <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-neutral-300">Sunday:</span>
                  <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neutral-400 text-sm">
                © {new Date().getFullYear()} Goa Car Rentals. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <span className="text-neutral-400 text-sm">
                  Privacy Policy
                </span>
                <span className="text-neutral-400 text-sm">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
