import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Goa Car Rental Blog | Expert Travel Guides & Tips",
  description: "Explore our comprehensive collection of travel guides, car rental tips, and local insights for Goa. From best beaches to scenic drives, discover everything you need to know about exploring Goa with our expert advice.",
  metadataBase: new URL('https://www.goacarrental.in'),
  alternates: {
    canonical: "https://www.goacarrental.in/blogs",
  },
  openGraph: {
    title: "Goa Car Rental Blog | Expert Travel Guides & Tips",
    description: "Explore our comprehensive collection of travel guides, car rental tips, and local insights for Goa. From best beaches to scenic drives, discover everything you need to know about exploring Goa with our expert advice.",
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.goacarrental.in/blogs',
    siteName: 'GoaCarRental.in',
    images: [{
      url: 'https://www.goacarrental.in/images/front.jpg',
      width: 1200,
      height: 630,
      alt: 'Goa Car Rental Blog | Expert Travel Guides & Tips'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Goa Car Rental Blog | Expert Travel Guides & Tips",
    description: "Explore our comprehensive collection of travel guides, car rental tips, and local insights for Goa. From best beaches to scenic drives, discover everything you need to know about exploring Goa with our expert advice.",
    images: ['https://www.goacarrental.in/images/front.jpg']
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
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  }
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 