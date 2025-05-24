import type { Metadata } from "next"
import { getCarBySlug } from "@/lib/cars"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = await getCarBySlug(params.slug)
  
  if (!car) {
    return {
      title: "Car Not Found",
      description: "The requested car could not be found."
    }
  }

  return {
    title: `${car.name} - Self Drive Car Rental in Goa | ₹${car.price}/day`,
    description: `Rent ${car.name} in Goa for just ₹${car.price}/day. ${car.type} with ${car.seats} seats, ${car.transmission} transmission, and ${car.fuelType} fuel type. Book now for the best self-drive car rental experience in Goa.`,
    keywords: [
      `${car.name} rental goa`,
      `${car.type} rental goa`,
      "self drive car rental goa",
      "car rental goa",
      `${car.name} price`,
      `${car.type} price`,
      "goa car hire",
      "self drive cars goa"
    ],
    openGraph: {
      title: `${car.name} - Self Drive Car Rental in Goa | ₹${car.price}/day`,
      description: `Rent ${car.name} in Goa for just ₹${car.price}/day. ${car.type} with ${car.seats} seats, ${car.transmission} transmission, and ${car.fuelType} fuel type. Book now for the best self-drive car rental experience in Goa.`,
      url: `https://yourdomain.com/self-drive-cars/${car.slug}`,
      siteName: "Goa Car Rental",
      images: [
        {
          url: car.image || "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${car.name} - Goa Car Rental`
        }
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${car.name} - Self Drive Car Rental in Goa | ₹${car.price}/day`,
      description: `Rent ${car.name} in Goa for just ₹${car.price}/day. ${car.type} with ${car.seats} seats, ${car.transmission} transmission, and ${car.fuelType} fuel type. Book now for the best self-drive car rental experience in Goa.`,
      images: [car.image || "/images/og-image.jpg"],
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
  }
} 