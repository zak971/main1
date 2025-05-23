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
  title: "Self Drive Car Rental in Goa | Affordable & Easy Booking",
  description: "Explore Goa on your terms with affordable self-drive car rentals. Choose from a wide range of well-maintained cars with 24/7 service. No hidden charges – only at GoaCarRental.in!",
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
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.goacarrental.in',
    siteName: 'GoaCarRental.in',
    title: "Self Drive Car Rental in Goa | Affordable & Easy Booking",
    description: "Explore Goa on your terms with affordable self-drive car rentals. Choose from a wide range of well-maintained cars with 24/7 service. No hidden charges – only at GoaCarRental.in!",
    images: [{
      url: 'https://www.goacarrental.in/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'Goa Car Rental - Your Trusted Car Rental Partner',
      type: 'image/png'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@goacarrental',
    title: "Affordable Self Drive Car Rental in Goa | No Hidden Charges | GoaCarRental.in",
    description: "Explore Goa on your terms with affordable self-drive car rentals. Choose from a wide range of well-maintained cars with 24/7 service. No hidden charges – only at GoaCarRental.in!",
    images: ['https://www.goacarrental.in/images/logo.png'],
    creator: '@goacarrental'
  },
  other: {
    'image': 'https://www.goacarrental.in/images/logo.png',
    'og:image': 'https://www.goacarrental.in/images/logo.png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'Goa Car Rental - Your Trusted Car Rental Partner',
    'twitter:image': 'https://www.goacarrental.in/images/logo.png',
    'twitter:image:alt': 'Goa Car Rental - Your Trusted Car Rental Partner',
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
        
        {/* Prefetch other critical resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-neutral-900/10 to-transparent opacity-10 mix-blend-overlay" />
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
