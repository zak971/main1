import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Self Drive Car Rental in Goa | Book Affordable & Reliable Cars",
  description: "Looking for a self-drive car rental in Goa? Choose from hatchbacks to SUVs with doorstep delivery and 24/7 support. Book now to explore Goa at your own pace with clean, affordable rental cars.",
  keywords: [
    "self drive car rental goa",
    "car rental goa",
    "rent a car goa",
    "goa car hire",
    "self drive cars goa",
    "car rental service goa",
    "affordable car rental goa",
    "luxury car rental goa",
    "car rental near me",
    "best car rental goa"
  ],
  openGraph: {
    title: "Self Drive Car Rental in Goa | Book Affordable & Reliable Cars",
    description: "Looking for a self-drive car rental in Goa? Choose from hatchbacks to SUVs with doorstep delivery and 24/7 support. Book now to explore Goa at your own pace with clean, affordable rental cars.",
    url: "https://yourdomain.com/self-drive-cars",
    siteName: "Goa Car Rental",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goa Car Rental - Self Drive Cars"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Drive Car Rental in Goa | Book Affordable & Reliable Cars",
    description: "Looking for a self-drive car rental in Goa? Choose from hatchbacks to SUVs with doorstep delivery and 24/7 support. Book now to explore Goa at your own pace with clean, affordable rental cars.",
    images: ["/images/og-image.jpg"],
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
} 