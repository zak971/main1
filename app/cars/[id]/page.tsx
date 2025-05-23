import Link from "next/link"
import { notFound } from "next/navigation"
import { Car, Users, Fuel, Settings, Check, Phone, PhoneIcon as WhatsApp, ArrowLeft, Clock, Wallet, Shield, Star } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCar } from "@/lib/cars"
import { CarImageCarousel } from "@/components/car-image-carousel"
import { CarSchema } from "@/components/structured-data"

// Generate dynamic metadata for each car page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const car = await getCar(id);
  
  if (!car) {
    return {
      title: "Car Not Found",
      description: "The requested car could not be found.",
    };
  }
  
  return {
    title: `${car.name} - Rent in Goa | Self-Drive Car Rental`,
    description: car.description || `Rent the ${car.name} in Goa. ${car.seats} seater, ${car.transmission} transmission, ${car.fuelType} engine. Book now for the best rates!`,
    alternates: {
      canonical: `https://www.goacarrental.in/cars/${id}`,
    },
    openGraph: {
      title: `${car.name} - Premium Car Rental in Goa`,
      description: car.description || `Rent the ${car.name} in Goa. ${car.seats} seater, ${car.transmission} transmission, ${car.fuelType} engine. Book now for the best rates!`,
      images: [{ url: car.image ? `https://www.goacarrental.in${car.image}` : 'https://www.goacarrental.in/images/car-placeholder.jpg', width: 1200, height: 630, alt: car.name }],
    },
  };
}

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = await getCar(id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen relative">
      {/* Add Structured Data */}
      <CarSchema car={car} />
      
      {/* Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative px-4 pt-20 sm:pt-24 pb-12 sm:pb-16 mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6 sm:mb-8 text-white hover:text-gray-300 hover:bg-white/10">
          <Link href="/cars" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cars
          </Link>
        </Button>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <CarImageCarousel 
              images={car.images || [car.image || "/images/car-placeholder.jpg"]}
              carName={car.name}
            />
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{car.name}</h1>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-white">₹{car.price}<span className="text-base sm:text-lg font-normal text-gray-400 ml-1">/day</span></p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Seats</p>
                  <p className="text-sm sm:text-base font-medium text-white">{car.seats} Persons</p>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Transmission</p>
                  <p className="text-sm sm:text-base font-medium text-white">{car.transmission}</p>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Fuel Type</p>
                  <p className="text-sm sm:text-base font-medium text-white">{car.fuelType}</p>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Car className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Type</p>
                  <p className="text-sm sm:text-base font-medium text-white">{car.type}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] shadow-md"
              >
                <Link href="tel:+919307055218" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Call Now</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] shadow-md"
              >
                <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa" className="flex items-center space-x-2">
                  <WhatsApp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>WhatsApp Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm border border-white/20 h-14 sm:h-12 p-1.5 sm:p-1 rounded-lg shadow-md">
              <TabsTrigger 
                value="features" 
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors py-2.5 sm:py-2 text-sm sm:text-base rounded-md font-medium data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-orange-500"
              >
                Features
              </TabsTrigger>
              <TabsTrigger 
                value="terms" 
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors py-2.5 sm:py-2 text-sm sm:text-base rounded-md font-medium data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-orange-500"
              >
                Terms
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors py-2.5 sm:py-2 text-sm sm:text-base rounded-md font-medium data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-orange-500"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-5 sm:mt-6 animate-fadeIn">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white mb-4 sm:mb-5">Car Features</h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
                  {car.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 py-1.5">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="terms" className="mt-5 sm:mt-6 animate-fadeIn">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white mb-4 sm:mb-5">Rental Terms</h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white mb-1">Minimum Rental Period</h4>
                      <p className="text-sm text-gray-300">24 hours(10am-10am)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white mb-1">Security Deposit</h4>
                      <p className="text-sm text-gray-300">₹5,000 (refundable)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white mb-1">Insurance</h4>
                      <p className="text-sm text-gray-300">Comprehensive insurance included</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-5 sm:mt-6 animate-fadeIn">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white mb-4 sm:mb-5">Customer Reviews</h3>
                <div className="space-y-5">
                  {car.reviews && car.reviews.length > 0 ? (
                    car.reviews.map((review) => (
                      <div key={review.id} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <Star className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 mb-1.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                              />
                            ))}
                          </div>
                          <p className="text-base text-gray-300">"{review.comment}"</p>
                          <p className="text-sm text-gray-400 mt-1">- {review.userName}, {review.date}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">No reviews available for this car yet.</p>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
