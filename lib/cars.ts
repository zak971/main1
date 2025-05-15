import type { CarType, Review } from "@/types/car"

// Mock data for cars
const carsData: CarType[] = [
  {
    id: "1",
    name: "Toyota Innova Crysta",
    type: "SUV",
    carType: "SUV",
    image: "/images/innovaf.png",
    images: ["/images/innovaf.png", "/images/in-side.jpg", "/images/Innova.jpeg", "/images/innova2.jpg"],
    price: 3000,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: "12-15 km/l",
    featured: true,
    description: "Spacious and comfortable SUV perfect for family trips",
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
    name: "Maruti Swift Dzire",
    type: "Sedan",
    carType: "Sedan",
    image: "/images/s-f.png",
    images: ["/images/s-f.png"],
    price: 1500,
    seats: 4,
    transmission: "Manual",
    fuelType: "Petrol",
    mileage: "22-24 km/l",
    featured: false,
    description: "Fuel-efficient sedan perfect for city driving",
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
      "Spare Tire"
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
    name: "Hyundai Creta",
    type: "SUV",
    carType: "SUV",
    image: "/images/creta.jpg",
    images: ["/images/creta.jpg"],
    price: 2000,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "17-21 km/l",
    featured: true,
    description: "Premium SUV with modern features and comfort",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "Child Seat",
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
    name: "Mahindra Thar",
    type: "SUV",
    carType: "SUV",
    image: "/images/t-f.png",
    images: ["/images/t-f.png"],
    price: 3000,
    seats: 4,
    transmission: "Manual",
    fuelType: "Diesel",
    mileage: "15-17 km/l",
    featured: false,
    description: "Off-road SUV with rugged design and powerful performance",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "Child Seat",
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
    name: "Honda City",
    type: "Sedan",
    carType: "Sedan",
    image: "/images/hondc.png",
    images: ["/images/hondc.png"],
    price: 1800,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "18-20 km/l",
    featured: false,
    reviews: [
      {
        id: "r5-1",
        rating: 4,
        comment: "Smooth drive and good condition. Ideal for city travel in Goa.",
        userName: "Michael R.",
        date: "2 months ago"
      }
    ]
  },

  {
    id: "6",
    name: "Maruti Ertiga Manual",
    type: "MPV",
    carType: "MPV",
    image: "/images/e-f.png",
    images: ["/images/e-f.png"],
    price: 2000,
    seats: 7,
    transmission: "Manual",
    fuelType: "Petrol",
    mileage: "20-21 km/l",
    featured: false,
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
    id: "7",
    name: "Toyota Fortuner",
    type: "SUV",
    carType: "SUV",
    image: "/images/f-f.png",
    images: ["/images/f-f.png"],
    price: 5000,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: "11-14 km/l",
    featured: true,
    description: "Luxury SUV with modern features and comfortable interiors",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "Child Seat",
      "First Aid Kit",
      "Spare Tire",
      "GPS Navigation",
      "Reverse Camera",
      "Sunroof"
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
    id: "8",
    name: "Hyundai Venue",
    type: "SUV",
    carType: "SUV",
    image: "/images/v-f.png",
    images: ["/images/v-f.png"],
    price: 3000,
    seats: 5,
    transmission: "Manual",
    fuelType: "Petrol",
    mileage: "17-19 km/l",
    featured: false,
    description: "Compact SUV with modern features and comfortable interiors",
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
    id: "9",
    name: "Kia Seltos",
    type: "SUV",
    carType: "SUV",
    image: "/images/kia.png",
    images: ["/images/kia.png"],
    price: 3500,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "17-21 km/l",
    featured: false,
    reviews: [
      {
        id: "r9-1",
        rating: 5,
        comment: "Modern SUV with great features. Made our trip very comfortable.",
        userName: "Aditya G.",
        date: "3 weeks ago"
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
