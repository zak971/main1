import type { CarType } from "@/types/car"
import { generateSlug } from "@/lib/utils"

// Luxury cars data
export const luxuryCars: CarType[] = [
  {
    id: "luxury-2",
    name: "BMW 7 Series",
    slug: "bmw-7-series",
    type: "Luxury",
    carType: "Luxury Sedan",
    price: 15000,
    seats: 4,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "11–13 km/l",
    image: "/images/luxury/bmw.jpg",
    alt: "BMW 7 Series luxury car rental in Goa",
    images: [
      "/images/luxury/bmw.jpg"
    ],
    featured: true,
    description: "Indulge in unmatched elegance and performance with our BMW 7 Series, the pinnacle of German automotive luxury. Designed for discerning travelers, this executive sedan delivers a smooth, commanding drive with state-of-the-art innovation, exquisite craftsmanship, and comfort that redefines premium travel in Goa.",
    available: true,
    features: [
      "Ventilated leather seats",
  "Panoramic sunroof",
  "Driver assist tech",
  "B&W surround sound",
  "Rear entertainment",
  "Air suspension",
  "Heads-up display",
  "360° camera"
    ]
  },

  {
    id: "luxury-3",
    name: "Audi A8",
    slug: "audi-a8",
    type: "Luxury",
    carType: "Luxury Sedan",
    price: 16000,
    seats: 4,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "10-12 km/l",
    image: "/images/luxury/audi-a8.jpg",
    alt: "Audi A8 luxury car rental in Goa",
    images: [
      "/images/luxury/audi-a8.jpg"
    ],
    featured: true,
    description: "Drive the future of luxury with our Audi A8. This sophisticated sedan combines cutting-edge technology with elegant design, offering a premium driving experience that's second to none.",
    available: true,
    features: [
      "Virtual cockpit",
      "Massage seats",
      "Bang & Olufsen sound system",
      "Matrix LED headlights",
      "Air suspension",
      "Gesture control",
      "Premium leather interior",
      "Advanced safety features"
    ]
  },
  {
    id: "luxury-4",
    name: "BMW 3 Series",
    slug: "bmw-3-series",
    type: "Luxury",
    carType: "Luxury Sedan",
    price: 12500,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: "16-18 km/l",
    image: "/images/luxury/bmw3se.jpg",
    alt: "BMW 3 Series Gran Limousine 320LD luxury car rental in Goa",
    images: [
      "/images/luxury/bmw3se.jpg"
    ],
    featured: true,
    description:
      "Experience long-wheelbase luxury in the BMW 3 Series Gran Limousine 320LD. With extra legroom, executive styling, and exceptional ride comfort, it's the perfect choice for business clients and elite travellers in Goa.",
    available: true,
    features: [
      "Long wheelbase for extra rear legroom",
      "Panoramic sunroof",
      "BMW iDrive system with touchscreen",
      "Harman Kardon sound system",
      "Ambient interior lighting",
      "Wireless Apple CarPlay & Android Auto",
      "Rear AC vents with digital control",
      "Advanced safety features"
    ]
  }
]

// In a real application, these functions would interact with a database
export async function getLuxuryCars(featuredOnly = false): Promise<CarType[]> {
  if (featuredOnly) {
    return luxuryCars.filter((car) => car.featured)
  }
  return luxuryCars
}

export async function getLuxuryCarBySlug(slug: string): Promise<CarType | null> {
  return luxuryCars.find((car) => car.slug === slug) || null
} 