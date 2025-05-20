import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Self Drive Car Rental in Goa | Premium Car Fleet",
  description: "Explore our premium fleet of self-drive cars in Goa. From compact hatchbacks to luxury SUVs, find the perfect rental car for your Goa adventure. Book online with doorstep delivery.",
  alternates: {
    canonical: "https://www.goacarrental.in/cars",
  },
  openGraph: {
    title: "Self Drive Car Rental in Goa | Premium Car Fleet",
    description: "Explore our premium fleet of self-drive cars in Goa. From compact hatchbacks to luxury SUVs, find the perfect rental car for your Goa adventure. Book online with doorstep delivery.",
    images: [{ url: "https://www.goacarrental.in/images/cars-hero.jpg", width: 1200, height: 630, alt: "Goa Car Rental Fleet" }],
  },
}

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 