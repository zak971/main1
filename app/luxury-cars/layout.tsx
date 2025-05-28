import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Luxury Car Rental in Goa | Elegant Chauffeur Services for Weddings & Business",
  description: "Luxe travel in Goa: premium car rentals for weddings & corporate events. Arrive in style with top-tier vehicles and professional chauffeurs. Available 24/7.",
  keywords: "luxury car rental goa, premium car hire goa, high-end vehicles goa, mercedes rental goa, bmw rental goa, audi rental goa, luxury chauffeur service goa",
  openGraph: {
    title: "Luxury Car Rental in Goa | Premium & High-End Vehicles",
    description: "Experience luxury car rental in Goa with our premium fleet of high-end vehicles. Choose from Mercedes, BMW, Audi, and more. Professional chauffeur service available.",
    url: "https://goacarrental.in/luxury-cars",
    siteName: "Goa Car Rental",
    images: [
      {
        url: "/images/services/luxury.png",
        width: 1200,
        height: 630,
        alt: "Luxury Car Rental in Goa"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Rental in Goa | Premium & High-End Vehicles",
    description: "Experience luxury car rental in Goa with our premium fleet of high-end vehicles. Choose from Mercedes, BMW, Audi, and more. Professional chauffeur service available.",
    images: ["/images/services/luxury.png"],
  },
  alternates: {
    canonical: "https://goacarrental.in/luxury-cars"
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

export default function LuxuryCarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="luxury-cars-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Luxury Car Rental in Goa",
            "description": "Premium luxury car rental service in Goa offering high-end vehicles including Mercedes, BMW, and Audi. Professional chauffeur service available.",
            "provider": {
              "@type": "Organization",
              "name": "Goa Car Rental",
              "url": "https://goacarrental.in",
              "telephone": "+919307055218",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Goa",
                "addressRegion": "Goa",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Goa"
            },
            "serviceType": "Luxury Car Rental",
            "offers": {
              "@type": "Offer",
              "price": "5000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "url": "https://goacarrental.in/luxury-cars"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Luxury Car Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mercedes E-Class",
                    "description": "Luxury sedan with premium features and comfort"
                  },
                  "price": "5000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "BMW 5 Series",
                    "description": "Executive sedan with advanced technology"
                  },
                  "price": "5500",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Audi A6",
                    "description": "Premium sedan with quattro all-wheel drive"
                  },
                  "price": "6000",
                  "priceCurrency": "INR"
                }
              ]
            },
            "review": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "120",
              "bestRating": "5",
              "worstRating": "1",
              "itemReviewed": {
                "@type": "Service",
                "name": "Luxury Car Rental in Goa",
                "description": "Premium luxury car rental service in Goa offering high-end vehicles including Mercedes, BMW, and Audi. Professional chauffeur service available.",
                "provider": {
                  "@type": "Organization",
                  "name": "Goa Car Rental",
                  "url": "https://goacarrental.in"
                }
              }
            },
            "featureList": [
              "Premium Fleet",
              "Professional Chauffeurs",
              "24/7 Availability",
              "Flexible Duration",
              "Airport Transfer",
              "Corporate Events",
              "Wedding Services",
              "Sightseeing Tours"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Vehicle Brands",
                "value": "Mercedes, BMW, Audi, Range Rover"
              },
              {
                "@type": "PropertyValue",
                "name": "Service Types",
                "value": "Self-Drive, Chauffeur-Driven, Airport Transfer"
              },
              {
                "@type": "PropertyValue",
                "name": "Special Services",
                "value": "Wedding Cars, Corporate Events, VIP Transfer"
              },
              {
                "@type": "PropertyValue",
                "name": "Features",
                "value": "Premium Interiors, Advanced Technology, Climate Control"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
} 