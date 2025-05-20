import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Goa Car Rentals | Affordable Self-Drive & Luxury Cars in Goa",
  description: "Experience premium and affordable car rental services in Goa with our extensive fleet of self-drive and chauffeur-driven vehicles.",
  metadataBase: new URL('https://www.goacarrental.in'),
  alternates: {
    canonical: "https://www.goacarrental.in",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.goacarrental.in',
    siteName: 'GoaCarRental.in',
    title: "Goa Car Rentals | Affordable Self-Drive & Luxury Cars in Goa",
    description: "Experience premium and affordable car rental services in Goa with our extensive fleet of self-drive and chauffeur-driven vehicles.",
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
    site: '@yourtwitterhandle',
    title: "Goa Car Rentals | Affordable Self-Drive & Luxury Cars in Goa",
    description: "Experience premium and affordable car rental services in Goa with our extensive fleet of self-drive and chauffeur-driven vehicles.",
    images: '/images/twitter-image.jpg'
  }
} 