import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Self Drive Car Rentals in Goa | Affordable Car Rentals",
  description: "Explore our Affordable premium fleet of self-drive cars in Goa. From luxury sedans to spacious SUVs, find the perfect rental car for your Goa adventure. Competitive rates, no hidden charges, and doorstep delivery available.",
  keywords: "car rental Goa, self-drive cars Goa, luxury car rental, SUV rental Goa, car hire Goa, self-drive car hire, Goa car rental service",
}

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 