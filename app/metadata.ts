import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Goa Car Rental | Self Drive & Chauffeur Driven Cars in Goa",
  description: "Rent cars in Goa with GoaCarRental.in. Choose from our wide range of self-drive and chauffeur-driven cars. Best rates, 24/7 support, and easy booking process. Book your perfect ride for exploring Goa!",
  metadataBase: new URL('https://www.goacarrental.in'),
  alternates: {
    canonical: "https://www.goacarrental.in",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.goacarrental.in',
    siteName: 'GoaCarRental.in',
    title: "Goa Car Rental | Self Drive & Chauffeur Driven Cars in Goa",
    description: "Rent cars in Goa with GoaCarRental.in. Choose from our wide range of self-drive and chauffeur-driven cars. Best rates, 24/7 support, and easy booking process.",
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
    title: "Goa Car Rental | Self Drive & Chauffeur Driven Cars in Goa",
    description: "Rent cars in Goa with GoaCarRental.in. Choose from our wide range of self-drive and chauffeur-driven cars. Best rates, 24/7 support, and easy booking process.",
    images: '/images/twitter-image.jpg'
  }
} 