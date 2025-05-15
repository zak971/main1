import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rent a Car in Goa | Self-Drive & Luxury Vehicles Available",
  description: "Browse our premium fleet of self-drive and chauffeur-driven cars in Goa. Choose from luxury sedans, spacious SUVs, and economy cars. All vehicles are well-maintained, fully insured, and come with 24/7 roadside assistance. Book online for instant confirmation.",
  metadataBase: new URL('https://www.goacarrental.in'),
  alternates: {
    canonical: "https://www.goacarrental.in/cars",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.goacarrental.in/cars',
    siteName: 'GoaCarRental.in',
    title: "Rent a Car in Goa | Self-Drive & Luxury Vehicles Available",
    description: "Browse our premium fleet of self-drive and chauffeur-driven cars in Goa. Choose from luxury sedans, spacious SUVs, and economy cars. All vehicles are well-maintained and fully insured.",
    images: [{
      url: 'https://www.goacarrental.in/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'Car Rental in Goa | Self-Drive & Luxury Vehicles Available'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    title: "Rent a Car in Goa | Self-Drive & Luxury Vehicles Available",
    description: "Browse our premium fleet of self-drive and chauffeur-driven cars in Goa. Choose from luxury sedans, spacious SUVs, and economy cars. All vehicles are well-maintained and fully insured.",
    images: '/images/twitter-image.jpg'
  }
}