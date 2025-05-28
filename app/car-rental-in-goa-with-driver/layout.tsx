import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Rental in Goa with Driver | Chauffeur-Driven Cars at Best Rates",
  description: "Hire a car in Goa with a professional driver. Our chauffeur-driven car rental service offers comfort, safety, and flexibility for airport transfers, sightseeing & more.",
  keywords: "chauffeur service goa, luxury car rental goa, private driver goa, professional chauffeur goa, car rental with driver goa",
  openGraph: {
    title: "Car Rental in Goa with Driver | Chauffeur-Driven Cars at Best Rates",
    description: "Hire a car in Goa with a professional driver. Our chauffeur-driven car rental service offers comfort, safety, and flexibility for airport transfers, sightseeing & more.",
    url: "https://www.goacarrental.in/car-rental-in-goa-with-driver",
    siteName: "Goa Car Rental",
    images: [
      {
        url: "/images/services/chaffeur.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Chauffeur Service in Goa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental in Goa with Driver | Chauffeur-Driven Cars at Best Rates",
    description: "Hire a car in Goa with a professional driver. Our chauffeur-driven car rental service offers comfort, safety, and flexibility for airport transfers, sightseeing & more.",
    images: ["/images/services/chaffeur.jpg"],
  },
  alternates: {
    canonical: "https://www.goacarrental.in/car-rental-in-goa-with-driver",
  },
  other: {
    "X-UA-Compatible": "IE=edge",
    "viewport": "width=device-width, initial-scale=1.0"
  }
}

export default function ChauffeurServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 