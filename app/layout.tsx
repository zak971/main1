import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from "next/script"

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

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://goacarrental.in"),
  title: {
    default: "Goa Car Rental - Self Drive Cars, Airport Transfer & Chauffeur Service",
    template: "%s | Goa Car Rental"
  },
  description: "Premium car rental services in Goa offering self-drive cars, airport transfers, and chauffeur services. Book your ride now!",
  keywords: ["car rental goa", "self drive cars goa", "airport transfer goa", "chauffeur service goa"],
  authors: [{ name: "Goa Car Rental" }],
  creator: "Goa Car Rental",
  publisher: "Goa Car Rental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://goacarrental.in",
    siteName: "Goa Car Rental",
    title: "Goa Car Rental - Self Drive Cars, Airport Transfer & Chauffeur Service",
    description: "Premium car rental services in Goa offering self-drive cars, airport transfers, and chauffeur services. Book your ride now!",
    images: [
      {
        url: "/images/rename.png",
        width: 1200,
        height: 630,
        alt: "Goa Car Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Car Rental - Self Drive Cars, Airport Transfer & Chauffeur Service",
    description: "Premium car rental services in Goa offering self-drive cars, airport transfers, and chauffeur services. Book your ride now!",
    images: ["/images/rename.png"],
    creator: "@goacarrental",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
 
  },
  alternates: {
    canonical: "https://goacarrental.in",
    languages: {
      'en-IN': 'https://goacarrental.in',
    },
  },
  icons: {
    icon: [
      { url: '/tablogo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: '/tablogo.png'
  },
  category: 'car rental',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
    'format-detection': 'telephone=no',
    'viewport': 'width=device-width, initial-scale=1.0',
    'X-UA-Compatible': 'IE=edge',
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XHX74KBMKL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XHX74KBMKL');
          `}
        </Script>
        {/* Single set of preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Prefetch other critical resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/tablogo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/tablogo.png" />
        <meta name="msapplication-TileImage" content="/tablogo.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
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
