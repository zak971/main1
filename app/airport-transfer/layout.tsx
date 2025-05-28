import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Airport Transfer Goa – 24/7 Pickup & Drop at Dabolim & Mopa",
  description: "Get reliable airport transfers in Goa with on-time pickup & drop from Dabolim or Mopa Airport. Book now for fixed pricing and professional drivers.",
  keywords: "airport transfer Goa, airport pickup Goa, airport drop Goa, Goa airport transfer, reliable airport transfer, professional drivers Goa, premium vehicles Goa",
  openGraph: {
    title: "Airport Transfer Service in Goa | Professional Airport Pickup & Drop",
    description: "Professional airport transfer service in Goa with reliable drivers and premium vehicles. Enjoy stress-free airport pickup and drop with flight tracking, meet & greet service, and 24/7 availability.",
    url: "https://www.goacarrental.in/airport-transfer",
    siteName: "Goa Car Rental",
    images: [
      {
        url: "/images/services/airport.png",
        width: 1200,
        height: 630,
        alt: "Airport Transfer Service in Goa"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airport Transfer Service in Goa | Professional Airport Pickup & Drop",
    description: "Professional airport transfer service in Goa with reliable drivers and premium vehicles. Enjoy stress-free airport pickup and drop with flight tracking, meet & greet service, and 24/7 availability.",
    images: ["/images/services/airport.png"],
  },
  alternates: {
    canonical: "https://www.goacarrental.in/airport-transfer"
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
  verification: {
    google: "your-google-site-verification",
  },
}

export default function AirportTransferLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 