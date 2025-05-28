export interface CarType {
  id: string
  name: string
  slug: string
  type: string
  carType: string
  image: string
  alt: string
  images: string[]
  price: number
  seats: number
  transmission: string
  fuelType: string
  mileage: string
  featured: boolean
  available: boolean
  description: string
  features: string[]
  reviews?: {
    id: string
    rating: number
    comment: string
    userName: string
    date: string
  }[]
}

export type Review = {
  id: string
  rating: number
  comment: string
  userName: string
  date: string
}
