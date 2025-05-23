import type { CarType, Review } from "@/types/car"

// Luxury cars data
export const luxuryCars: CarType[] = [
  {
    id: "luxury-1",
    name: "Mercedes-Benz S-Class",
    type: "Luxury Sedan",
    carType: "Luxury Sedan",
    price: 15000,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "8-10 km/l",
    image: "/images/luxary/merc1.webp",
    alt: "Mercedes-Benz S-Class luxury car rental in Goa",
    images: [
      "/images/luxary/merc1.webp",
      "/images/luxary/merc2.webp",
      "/images/luxary/merc4.webp",
      
    ],
    featured: true,
    description: "Experience ultimate luxury with the Mercedes-Benz S-Class. This flagship sedan offers unparalleled comfort, advanced technology, and sophisticated styling. Perfect for those seeking the pinnacle of automotive luxury in Goa.",
    available: true,
    features: [
      "Premium Leather Interior",
      "Panoramic Sunroof",
      "Advanced Driver Assistance",
      "Premium Sound System",
      "Ambient Lighting",
      "Massage Seats",
      "Air Suspension",
      "Night Vision Camera",
      "Wireless Charging",
      "250 km/h Top Speed",
      "76L Fuel Tank",
      "550L Boot Space"
    ],
    reviews: [
      
    ]
  },
  
]

// Function to get all luxury cars
export async function getLuxuryCars(): Promise<CarType[]> {
  // In a real application, this would fetch from an API
  return luxuryCars
}

// Function to get a specific luxury car by ID
export async function getLuxuryCarById(id: string): Promise<CarType | undefined> {
  return luxuryCars.find(car => car.id === id)
} 