import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { LocalBusinessSchema } from "@/components/structured-data"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700', '800'],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  title: "Goa Car Rentals | Affordable Self-Drive & Luxury Cars in Goa",
  description: "Experience premium and affordable car rental services in Goa with our extensive fleet of self-drive and chauffeur-driven vehicles. From luxury sedans to spacious SUVs, we offer 24/7 support, competitive rates, and easy online booking. Perfect for tourists and locals alike.",
  keywords: "car rental goa, self drive car goa, luxury car rental goa, car hire goa, best car rental in goa, affordable car rental in goa, goa car rental, goa car hire, goa car rental service",
  metadataBase: process.env.NODE_ENV === 'development' 
    ? new URL('https://localhost:3000') 
    : new URL('https://www.goacarrental.in'),
  alternates: {
    canonical: "https://www.goacarrental.in",
    languages: {
      'en-IN': 'https://www.goacarrental.in',
      'en-US': 'https://www.goacarrental.in',
      'en-GB': 'https://www.goacarrental.in',
    },
  },
  openGraph: {
    title: "Goa Car Rentals | Self-Drive & Affordable Car Hire in Goa",
    description: "Experience premium and affordable car rental services in Goa with our extensive fleet of self-drive and chauffeur-driven vehicles. From luxury sedans to spacious SUVs, we offer 24/7 support, competitive rates, and easy online booking. Perfect for tourists and locals alike.",
    images: [
      {
        url: "https://www.goacarrental.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goa Car Rentals"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Car Rentals | Self-Drive & Luxury Car Hire in Goa",
    description: "Experience premium car rental services in Goa with our extensive fleet of self-drive and chauffeur-driven vehicles. From luxury sedans to spacious SUVs, we offer 24/7 support and competitive rates.",
    images: ["https://goacarrental.in/images/twitter-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Single set of preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Use correct font preloading */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/images/TRY1.jpg"
          fetchPriority="high"
        />
        
        {/* Prefetch other critical resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
        <LocalBusinessSchema />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
