import type { CarType, Review } from "@/types/car"
import { generateSlug } from "@/lib/utils"

// Mock data for cars
const carsData: CarType[] = [
  {
    id: "1",
    name: "Toyota Innova Crysta",
    slug: generateSlug("Toyota Innova Crysta"),
    type: "SUV",
    carType: "SUV",
    image: "/images/innova/innova-crysta-2.jpg",
    alt: "Toyota Innova Crysta self drive car rental in Goa",
    images: ["/images/innova/innova-crysta-2.jpg","/images/innova/innova-3.jpg","/images/innova/innova-1.jpg"],
    price: 3000,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: "12-15 km/l",
    featured: false,
    description: "The Toyota Innova Crysta is a premium 7-seater MPV known for its comfort, reliability, and spacious cabin. Ideal for family road trips or group travel in Goa, it offers a smooth ride, powerful performance, and refined interiors for a truly luxurious travel experience.",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "First Aid Kit",
      "Spare Tire",
      "GPS Navigation",
      "Reverse Camera"
    ],
    reviews: [
      {
        id: "r1-1",
        rating: 5,
        comment: "Excellent service and the car was in perfect condition. Will definitely rent again!",
        userName: "John D.",
        date: "2 weeks ago"
      },
      {
        id: "r1-2",
        rating: 4,
        comment: "Very comfortable for our family trip. Great vehicle for Goa's roads.",
        userName: "Priya S.",
        date: "1 month ago"
      }
    ]
  },

  {
    id: "2",
    name: "Mahindra Thar ROXX Edition",
    slug: generateSlug("Mahindra Thar ROXX Edition"),
    type: "SUV",
    carType: "Suv",
    image: "/images/rox/thar-rox1.jpg",
    alt: "thar car for rent",
    images: ["/images/rox/thar-rox1.jpg","/images/rox/thar-rox2.jpg"],
    price: 7000,
    seats: 4,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "12-15 km/l",
    featured: true ,
    description: "The Mahindra Thar ROXX Edition is a rugged and stylish SUV designed for both off-road adventures and urban exploration. With its bold design, automatic transmission, and petrol engine, it's the perfect vehicle for thrill-seekers looking to explore Goa in style and comfort.",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "First Aid Kit",
      "Spare Tire",
      "All-Terrain Tyres",
      "Enhanced Suspension",
      "Roll Cage"
    ],
    reviews: [
      {
        id: "r2-1",
        rating: 5,
        comment: "Fuel efficient and perfect for city driving. Had a great experience.",
        userName: "Rahul M.",
        date: "3 weeks ago"
      },
      {
        id: "r2-2",
        rating: 4,
        comment: "Comfortable and easy to drive around Goa. Good value for money.",
        userName: "Sarah T.",
        date: "2 months ago"
      }
    ]
  },

  {
    id: "3",
    name: "Hyundai Creta SX",
    slug: generateSlug("Hyundai Creta SX"),
    type: "SUV",
    carType: "SUV",
    image: "/images/creta/creta1.jpg",
    alt: "Hyundai Creta SX car for rent in Goa",
    images: ["/images/creta/creta1.jpg","/images/creta/creta3.jpg","/images/creta/creta4.jpg"],
    price: 2000,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "17-21 km/l",
    featured: false,
    description: "The Hyundai Creta SX is a premium compact SUV that combines modern design, spacious interiors, and smooth automatic driving. Perfect for both city commutes and long drives along Goa's scenic routes, it offers a balanced blend of comfort and performance.",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      
      "First Aid Kit",
      "Spare Tire",
      "GPS Navigation",
      "Reverse Camera",
      "Sunroof"
    ],
    reviews: [
      {
        id: "r3-1",
        rating: 5,
        comment: "Amazing SUV with all premium features. Made our trip very comfortable.",
        userName: "Amit K.",
        date: "1 week ago"
      },
      {
        id: "r3-2",
        rating: 5,
        comment: "The car was spotless and drove beautifully. Highly recommend!",
        userName: "Linda J.",
        date: "3 weeks ago"
      }
    ]
  },






  {
    id: "4",
    name: "Maruti Suzuki Baleno Zeta",
    slug: generateSlug("Maruti Suzuki Baleno Zeta"),
    type: "Hatchback",
    carType: "Hatchback",
    image: "/images/baleno/baleno-7.jpg",
    alt: "Maruti Suzuki Baleno Zeta for rent in Goa",
    images: [
      "/images/baleno/baleno-7.jpg",
      "/images/baleno/baleno-4.jpg",
      
      "/images/baleno/baleno-6.jpg",
    ],
    price: 1300,
    seats: 5,
    transmission: "Manual",
    fuelType: "Petrol",
    mileage: "21-23 km/l",
    featured: true,
    available: true,
    description: "The Maruti Suzuki Baleno Zeta is a fuel-efficient premium hatchback ideal for Goa's city and coastal drives. With sleek styling, a spacious cabin, and modern infotainment, it delivers comfort and economy for every journey.",
    features: [
      "Air Conditioning",
      "Touchscreen Infotainment System",
      "Bluetooth Connectivity",
      "Apple CarPlay & Android Auto",
      "Power Steering",
      "Power Windows",
      "Dual Front Airbags",
      "ABS with EBD",
      "Rear Parking Sensors",
      "USB Port",
      "Central Locking",
      "Music System",
      "First Aid Kit",
      "Spare Tire",],
    reviews: [
      {
        id: "r4-1",
        rating: 5,
        comment: "Perfect for exploring off-road areas in Goa. Had a blast driving it!",
        userName: "Vikram S.",
        date: "1 month ago"
      }
    ]
  },





  {
    id: "5",
    name: "Maruti Suzuki Ertiga",
    slug: generateSlug("Maruti Suzuki Ertiga "),
    type: "MPV",
    carType: "Muv",
    image: "/images/ertiga/ertiga-11.jpg",
    alt: "Maruti Suzuki Ertiga ZXI Plus car for rent in Goa",
    images: [
      "/images/ertiga/ertiga-11.jpg",
      "/images/ertiga/ertiga-22.jpg",
      "/images/ertiga/ertiga-33.jpg"
    ],
    price: 1800,
    seats: 7,
    transmission: "Manual",
    fuelType: "Petrol",
    mileage: "20-21 km/l",
    featured: false,
    available: true,
    description: "The Maruti Suzuki Ertiga ZXI+ is a spacious and fuel-efficient 7-seater MPV, ideal for group trips, family vacations, or long drives across Goa. Enjoy superior comfort, reliable performance, and ample luggage space for all your travel needs.",
    features: [
      "Air Conditioning (Front & Rear)",
      "Touchscreen Infotainment System",
      "Bluetooth Connectivity",
      "Apple CarPlay & Android Auto",
      "Power Steering",
      "Power Windows",
      "Dual Front Airbags",
      "ABS with EBD",
      "Rear Parking Sensors",
      "Rear Camera",
      "USB Charging Ports",
      "Central Locking",
      "Foldable Third-Row Seats",
      "Music System",
      "First Aid Kit",
      "Spare Tire",],
    reviews: [
      {
        id: "r6-1",
        rating: 4,
        comment: "Great family car with plenty of space for luggage. Good service.",
        userName: "Deepak T.",
        date: "3 weeks ago"
      }
    ]
  },





  {
    id: "6",
    name: "Toyota Fortuner Legender 4x4 AT",
    slug: generateSlug("Toyota Fortuner Legender 4x4 AT"),
    type: "SUV",
    carType: "Suv",
    image: "/images/fortuner/fortuner-3.jpg",
    alt: "Toyota Fortuner Legender 4x4 top model for rent in Goa",
    images: [
      
      "/images/fortuner/fortuner-3.jpg",
      "/images/fortuner/fortuner-4.jpg"
    ],
    price: 8000,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: "13-14 km/l",
    featured: true,
    available: true,
    description: "The Toyota Fortuner Legender 4x4 AT is the top-end variant of the iconic SUV, delivering superior power, premium features, and off-road mastery. Perfect for luxury travelers and thrill-seekers exploring Goa in style and comfort.",
    features: [
      "Full-Time 4WD with Active Traction Control",
      "Premium Dual-Tone Leather Interiors",
      "Ventilated Front Seats",
      "Wireless Charging",
      "10.1-inch Touchscreen Infotainment System",
      "Apple CarPlay & Android Auto",
      "360-Degree Camera",
      "Connected Car Technology",
      "Dual-Zone Climate Control",
      "Power Tailgate with Memory Function",
      "8-Way Power Adjustable Driver Seat",
      "Ambient Interior Lighting",
      "7 Airbags",
      "Electronic Stability Program (ESP)",
      "Downhill Assist Control",
      "Cruise Control",
      "Premium JBL Sound System",
      "First Aid Kit",
      "Spare Tire"
    ],
    reviews: [
      {
        id: "r7-1",
        rating: 5,
        comment: "Luxury SUV in excellent condition. Powerful and comfortable.",
        userName: "Ramesh P.",
        date: "1 month ago"
      }
    ]
  },


 {
  id: "7",
  name: "Hyundai Venue",
  slug: generateSlug("Hyundai Venue"),
  type: "SUV",
  carType: "SUV",
  image: "/images/venue/venue-1.jpg",
  alt: "Hyundai Venue self drive car rental in Goa",
  images: ["/images/venue/venue-1.jpg","/images/venue/venue-2.jpg","/images/venue/venue-3.jpg",],
  price: 2500,
  seats: 5,
  transmission: "Manual",
  fuelType: "Petrol",
  mileage: "17-19 km/l",
  featured: false,
  available: true,
  description: "The Hyundai Venue is a stylish and compact SUV, perfectly suited for Goa's scenic drives and narrow streets. It features modern tech, reliable performance, and a comfortable cabin—making it an ideal choice for families, couples, and solo travelers looking for convenience and control on the road.",
  features: [
    "Air Conditioning",
    "Bluetooth Connectivity",
    "USB Port",
    "Power Steering",
    "Power Windows",
    "Central Locking",
    "Music System",
    "First Aid Kit",
    "Spare Tire"
  ],
  reviews: [
    {
      id: "r8-1",
      rating: 4,
      comment: "Compact SUV perfect for Goa's narrow roads. Overall good experience.",
      userName: "Neha V.",
      date: "2 weeks ago"
    }
  ]
},


{
  id: "8",
  name: "Hyundai i20",
  slug: generateSlug("Hyundai i20"),
  type: "Hatchback",
  carType: "Hatchback",
  image: "/images/i20/i20-1.jpg",
  alt: "Hyundai i20 self drive car rental in Goa",
  images: ["/images/i20/i20-1.jpg", "/images/i20/i20-2.jpg"],
  price: 1800,
  seats: 5,
  transmission: "Manual",
  fuelType: "Petrol",
  mileage: "20-22 km/l",
  featured: false,
  available: true,
  description: "A premium hatchback that blends sporty styling with advanced features. The Hyundai i20 is ideal for both city cruising and long drives, offering a smooth ride, fuel efficiency, and compact convenience for Goa's streets.",
  features: [
    "Air Conditioning",
    "Touchscreen Infotainment System",
    "Bluetooth Connectivity",
    "USB Port",
    "Power Steering",
    "Power Windows",
    "Rear Parking Sensors",
    "Central Locking",
    "Music System",
    "First Aid Kit",
    "Spare Tire"
  ],
  reviews: [
    {
      id: "r9-1",
      rating: 5,
      comment: "Super smooth and stylish ride! Perfect for couples exploring Goa.",
      userName: "Rahul D.",
      date: "1 week ago"
    }
  ]
},

{
  id: "9",
  name: "Maruti Suzuki Fronx",
  slug: generateSlug("Maruti Suzuki Fronx"),
  type: "Crossover",
  carType: "SUV",
  image: "/images/fronxx/fronx-1.jpg",
  alt: "Maruti Fronx self drive car rental in Goa",
  images: ["/images/fronxx/fronx-1.jpg", "/images/fronxx/fronx-2.jpg"],
  price: 2000,
  seats: 5,
  transmission: "Automatic",
  fuelType: "Petrol",
  mileage: "20-22 km/l",
  featured: false,
  available: true,
  description: "Stylish and compact crossover designed for the urban explorer. The Maruti Fronx offers a premium feel, smart tech, and efficient performance — making it ideal for self-drive trips in Goa.",
  features: [
    "Air Conditioning",
    "Touchscreen Infotainment System",
    "Bluetooth & USB Connectivity",
    "Rear View Camera",
    "Cruise Control",
    "Power Windows",
    "Power Steering",
    "Keyless Entry",
    "ABS with EBD",
    "First Aid Kit",
    "Spare Tire"
  ],
  reviews: [
    {
      id: "r10-1",
      rating: 4.5,
      comment: "Loved the sporty look and comfy drive. Great for Goa's roads!",
      userName: "Amit P.",
      date: "5 days ago"
    }
  ]
},




]

// In a real application, these functions would interact with a database
export async function getCars(featuredOnly = false): Promise<CarType[]> {
  if (featuredOnly) {
    return carsData.filter((car) => car.featured)
  }
  return carsData
}

export async function getCar(id: string): Promise<CarType | null> {
  const car = carsData.find((car) => car.id === id)
  return car || null
}

export async function addCar(car: Omit<CarType, "id">): Promise<CarType> {
  const newCar = {
    ...car,
    id: Math.random().toString(36).substring(2, 9),
  }

  carsData.push(newCar)
  return newCar
}

export async function updateCar(id: string, car: Partial<CarType>): Promise<CarType> {
  const index = carsData.findIndex((c) => c.id === id)

  if (index === -1) {
    throw new Error("Car not found")
  }

  carsData[index] = { ...carsData[index], ...car }
  return carsData[index]
}

export async function deleteCar(id: string): Promise<void> {
  const index = carsData.findIndex((c) => c.id === id)

  if (index === -1) {
    throw new Error("Car not found")
  }

  carsData.splice(index, 1)
}

export async function getCarBySlug(slug: string): Promise<CarType | null> {
  const car = carsData.find((car) => car.slug === slug)
  return car || null
}
