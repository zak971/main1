import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
  title: "Goa Car Rental | Premium Self-Drive Cars at Low Rates",
  description: "Explore Goa your way! Rent premium self-drive cars at affordable rates. 24/7 support, airport pickup, and instant booking – hassle-free travel starts here!",
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
    title: "Goa Car Rental | Premium Self-Drive Cars at Low Rates",  
    description: "Explore Goa your way! Rent premium self-drive cars at affordable rates. 24/7 support, airport pickup, and instant booking – hassle-free travel starts here!",
    images: [
      {
        url: "https://www.goacarrental.in/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Goa Car Rentals",
        type: "image/png"
      }
    ],
    locale: "en_IN",
    type: "website",
    siteName: "Goa Car Rental"
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Car Rental | Self-Drive & Luxury Car Hire in Goa",
    description: "Rent a self-drive car in Goa at unbeatable rates! Airport delivery, 24/7 support, wide car selection & easy online booking. Drive your Goa adventure today!",
    images: ["https://www.goacarrental.in/images/logo.png"],
    creator: "@goacarrental",
    site: "@goacarrental"
  },
  other: {
    'image': 'https://www.goacarrental.in/images/logo.png',
    'og:image': 'https://www.goacarrental.in/images/logo.png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'Goa Car Rentals',
    'twitter:image': 'https://www.goacarrental.in/images/logo.png',
    'twitter:image:alt': 'Goa Car Rentals',
    'robots': 'index, follow, max-image-preview:large',
    'googlebot': 'index, follow, max-image-preview:large'
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
          href="/images/TRY1.avif"
          fetchPriority="high"
          imageSizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
          imageSrcSet="/images/TRY1.avif?w=640 640w, /images/TRY1.avif?w=750 750w, /images/TRY1.avif?w=828 828w, /images/TRY1.avif?w=1080 1080w"
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
