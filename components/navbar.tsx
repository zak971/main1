"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, PhoneIcon as WhatsApp, ChevronRight, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scroll position
      setLastScrollY(currentScrollY)
      
      // Keep navbar always visible
        setIsVisible(true)
      
      // Update scrolled state for background effect
      setIsScrolled(currentScrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/self-drive-cars", label: "Our Fleet" },
    { href: "/luxury-cars", label: "Luxury Cars" },
    { href: "/blogs", label: "Blogs" },
  ]

  const serviceLinks = [
    { href: "/self-drive-cars", label: "Self Drive Cars" },
    { href: "/airport-transfer", label: "Airport Transfers" },
    { href: "/car-rental-in-goa-with-driver", label: "Chauffeur Service" },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-md bg-black/50`}
    >
      <div className="relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50" />
        
        <div className="container mx-auto relative">
          <div className="flex items-center justify-between h-16 sm:h-20 px-2 sm:px-6 pt-2">
            
            <Link 
              href="/" 
              className="hidden md:flex items-center transition-all duration-300 hover:scale-105 pr-8"
            >
              <Image
                src="/images/rename.png"
                alt="Goa Car Rentals Logo"
                width={400}
                height={400}
                className="h-28 w-auto sm:h-32"
                priority
              />
            </Link>

            {/* Mobile Header - Logo and Menu Button */}
            <div className="flex md:hidden items-center justify-between w-full">
              <Link 
                href="/" 
                className="flex items-center pt-1 -ml-2"
              >
                <Image
                  src="/images/rename.png"
                  alt="Goa Car Rentals Logo"
                  width={300}
                  height={300}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="h-8 w-8 p-0 hover:bg-black/20 relative flex items-center justify-center text-white hover:text-white focus:text-white active:text-white bg-transparent border-none outline-none"
                    style={{ color: 'white' }}
                  >
                    <Menu 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                      style={{ color: 'white', stroke: 'white' }}
                    />
                    <X 
                      className={`w-5 h-5 absolute transition-transform duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                      style={{ color: 'white', stroke: 'white' }}
                    />
                    <span className="sr-only">Toggle menu</span>
                  </button>
                </SheetTrigger>

                {/* Mobile Menu Content */}
                <SheetContent 
                  side="right" 
                  className="w-[280px] sm:w-[320px] bg-gradient-to-br from-black via-neutral-900 to-neutral-800 p-0 border-l border-neutral-800"
                >
                  <div className="flex flex-col h-full">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                     

                      {/* Close Button */}
                      <SheetClose
                        className="inline-flex items-center justify-center h-9 w-9 rounded-md p-2 text-white hover:bg-neutral-800/50 transition-colors duration-200"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" />
                      </SheetClose>
                    </div>
                    
                    <nav className="flex-1 p-4 overflow-y-auto">
                      <ul className="space-y-1">
                        {navLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center justify-between py-3 px-4 text-sm sm:text-base font-medium text-gray-200 hover:text-orange-500 hover:bg-neutral-800/50 rounded-lg transition-all duration-200"
                            >
                              <span>{link.label}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                            </Link>
                          </li>
                        ))}
                        <li>
                          <div className="py-3 px-4 text-sm sm:text-base font-medium text-gray-200">
                            <span className="flex items-center justify-between">
                              Services
                              <ChevronRight className="w-4 h-4" />
                            </span>
                            <ul className="mt-2 space-y-1 pl-4">
                              {serviceLinks.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center justify-between py-2 px-4 text-sm text-gray-300 hover:text-orange-500 hover:bg-neutral-800/50 rounded-lg transition-all duration-200"
                                  >
                                    <span>{link.label}</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </nav>
                    
                    <div className="p-4 border-t border-neutral-800 bg-black/20">
                      <div className="flex flex-col space-y-3">
                        <Link
                          href="tel:+919307055218"
                          className="group flex items-center justify-center space-x-2 py-3 px-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-black/60 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <Phone className="w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:rotate-12" />
                          <span className="text-base font-medium text-white">Call Us</span>
                        </Link>
                        <Link
                          href="https://wa.me/919307055218"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <WhatsApp className="w-5 h-5 text-white" />
                          <span className="text-base font-medium text-white">WhatsApp</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center justify-center space-x-3 ml-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group px-2 py-2 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:text-orange-500 relative"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger className="group px-2 py-2 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:text-orange-500 relative flex items-center space-x-1">
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border border-neutral-800">
                    {serviceLinks.map((link) => (
                      <DropdownMenuItem key={link.href} asChild>
                        <Link
                          href={link.href}
                          className="text-white hover:text-orange-500 hover:bg-neutral-800/50 cursor-pointer"
                        >
                          {link.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden md:flex items-center justify-end space-x-3 sm:space-x-4">
              <Link 
                href="tel:+919307055218" 
                className="group flex items-center space-x-2 sm:space-x-3 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-black/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-sm sm:text-base text-white font-medium">Call Us</span>
              </Link>
              <Link 
                href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa" 
                className="group flex items-center space-x-2 sm:space-x-3 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300"
              >
                <WhatsApp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-sm sm:text-base text-white font-medium">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
