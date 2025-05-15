import React from 'react'
import type { CarType } from '@/types/car'

interface CarSchemaProps {
  car: CarType
}

interface LocalBusinessSchemaProps {
  name?: string
  description?: string
  telephone?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  latitude?: number
  longitude?: number
  ratingValue?: number
  reviewCount?: number
  priceRange?: string
}

// Schema for individual car listings
export function CarSchema({ car }: CarSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: car.name,
    description: car.description,
    vehicleConfiguration: car.features?.join(', ') || '',
    image: car.image,
    vehicleTransmission: car.transmission,
    fuelType: car.fuelType,
    seatingCapacity: car.seats,
    offers: {
      '@type': 'Offer',
      price: car.price,
      priceCurrency: 'INR',
      availability: car.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

// Schema for car rental business information
export function LocalBusinessSchema({
  name = 'Goa Car Rental',
  description = 'Premium car rental service in Goa offering self-drive cars at best rates',
  telephone = '+91XXXXXXXXXX',
  addressLocality = 'Panaji',
  addressRegion = 'Goa',
  postalCode = '403001',
  latitude = 15.4909,
  longitude = 73.8278,
  ratingValue = 4.8,
  reviewCount = 150,
  priceRange = '₹₹-₹₹₹'
}: LocalBusinessSchemaProps) {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    telephone,
    url: 'https://goacarrental.in',
    logo: 'https://goacarrental.in/images/logo.png',
    image: 'https://goacarrental.in/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude
    },
    priceRange,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: 5
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  )
}

// Schema for FAQ page
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
} 