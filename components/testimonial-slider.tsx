"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"

type Testimonial = {
  id: number
  name: string
  location: string
  image: string
  rating: number
  text: string
  role?: string
  date?: string
}

// Added more testimonials to demonstrate pagination
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John",
    role: "Business Traveler",
    location: "Delhi",
    rating: 5,
    image: "/images/testi.jpg",
    text: "Exceptional service and an outstanding car. This made my trip to Goa absolutely seamless.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Tourist",
    location: "Mumbai",
    rating: 5,
    image: "/images/testi.jpg",
    text: "Rented a car for 3 days and had zero complaints. Smooth, efficient, and stylish!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Family Vacation",
    location: "UK",
    rating: 4,
    image: "/images/testi.jpg",
    text: "Perfect vehicle for our family road trip across Goa. Spacious and clean!",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Solo Traveler",
    location: "Bangalore",
    rating: 5,
    image: "/images/testi.jpg",
    text: "The car was in perfect condition and the service was top-notch. Highly recommend!",
    date: "1 month ago"
  },
  {
    id: 5,
    name: "Robert Chen",
    role: "Honeymoon Trip",
    location: "Singapore",
    rating: 5,
    image: "/images/testi.jpg",
    text: "Made our honeymoon in Goa special. The car was luxurious and delivery was on time.",
    date: "3 months ago"
  },
  {
    id: 6,
    name: "Aditya Patel",
    role: "Local Resident",
    location: "Goa",
    rating: 4,
    image: "/images/testi.jpg",
    text: "Even as a local, I prefer their rentals when I need a car. Reliable and professional.",
    date: "2 weeks ago"
  },
  {
    id: 7,
    name: "Emma Wilson",
    role: "Corporate Event",
    location: "Australia",
    rating: 5,
    image: "/images/testi.jpg",
    text: "Arranged multiple cars for our corporate retreat. The service was impeccable.",
    date: "1 month ago"
  },
  {
    id: 8,
    name: "Raj Malhotra",
    role: "Weekend Getaway",
    location: "Pune",
    rating: 5,
    image: "/images/testi.jpg",
    text: "Quick booking, clean car, and transparent pricing. Will rent again!",
    date: "3 weeks ago"
  },
  {
    id: 9,
    name: "Liu Yang",
    role: "International Tourist",
    location: "China",
    rating: 4,
    image: "/images/testi.jpg",
    text: "The WhatsApp booking made it so easy as a foreign visitor. Great experience!",
    date: "2 months ago"
  }
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Navigation functions
  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  
  // Auto-slide effect - but pause it on mobile to avoid disrupting user experience
  useEffect(() => {
    // Only auto-play on larger screens
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="max-w-6xl mx-auto pb-0">
      {/* Mobile Navigation Dots - visible only on small screens */}
      
      
      {/* Testimonial Slider - optimized for mobile */}
      <div className="relative overflow-hidden px-1 sm:px-2 md:px-8 mb-0">
        <div className="relative h-[340px] sm:h-[320px] md:h-[300px]">
          {/* Center track - provides reference positioning */}
          <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center">
            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => {
              // Calculate the position relative to active card
              const distance = (index - activeIndex + testimonials.length) % testimonials.length;
              // Normalize so we get values like -2, -1, 0, 1, 2 instead of large numbers
              const normalizedDistance = distance > testimonials.length / 2 
                ? distance - testimonials.length 
                : distance;
                
              // Define the visual properties based on position - optimized for mobile
              let opacity = 0;
              let scale = 1;
              let zIndex = 0;
              let transform = "translateX(0)";
              let brightness = 100;
              let blur = "blur(0px)";
              let pointerEvents: "none" | "auto" = "none";
              
              // Mobile-optimized positioning
              switch(normalizedDistance) {
                case -1: // Left
                  opacity = 0.5;
                  scale = 0.8;
                  zIndex = 2;
                  // Less offset on mobile
                  transform = "translateX(-70%)";
                  brightness = 85;
                  break;
                case 0: // Active/Center
                  opacity = 1;
                  scale = 1;
                  zIndex = 3;
                  transform = "translateX(0)";
                  brightness = 100;
                  pointerEvents = "auto";
                  break;
                case 1: // Right
                  opacity = 0.5;
                  scale = 0.8;
                  zIndex = 2;
                  // Less offset on mobile
                  transform = "translateX(70%)";
                  brightness = 85;
                  break;
                default:
                  opacity = 0;
                  scale = 0.5;
                  zIndex = 0;
                  break;
              }
              
              // Only render visible testimonials (efficiency)
              if (Math.abs(normalizedDistance) > 1) {
                return null;
              }
              
              // Custom styles for precise control
              const cardStyle = {
                opacity,
                transform: `${transform} scale(${scale})`,
                zIndex,
                filter: `brightness(${brightness}%) ${blur}`,
                pointerEvents
              };
              
              return (
              <div
                key={testimonial.id}
                  className="absolute top-0 left-0 right-0 mx-auto w-full max-w-[280px] sm:max-w-sm transform-gpu transition-all duration-700 ease-out"
                  style={cardStyle}
                >
                  <div className="group relative bg-gradient-to-br from-black/95 via-neutral-900/95 to-neutral-800/95 backdrop-blur-lg rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-700/80 transition-all duration-300 hover:border-neutral-600/90 hover:shadow-xl p-4 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 h-full flex flex-col items-center text-center justify-center">
                      {/* Quote icon */}
                      <div className="absolute top-1 right-1 text-3xl text-neutral-700/50 font-serif">"</div>
                      
                      {/* Testimonial text */}
                      <p className="text-neutral-100 text-sm sm:text-base mb-4 relative z-10 flex-grow font-medium">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Rating */}
                      <div className="flex mb-3 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-neutral-500"}`} 
                          />
                        ))}
                      </div>
                      
                      {/* Profile */}
                      <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-800">
                          {testimonial.image ? (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              sizes="(max-width: 768px) 40px, 40px"
                              className="object-cover"
                              loading="lazy"
                              quality={75}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          ) : (
                            <PlaceholderImage
                              width={40}
                              height={40}
                              alt={`${testimonial.name}'s profile picture`}
                              className="rounded-full"
                            />
                          )}
                        </div>
                        <div className="text-left">
                          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                          <p className="text-neutral-400 text-xs">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="mt-2 text-xs text-neutral-300">{testimonial.date}</div>
                    </div>
                  </div>
                </div>
              );
            })}
              </div>
          </div>

        {/* Navigation Controls - Positioned for better mobile touch */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-1">
            <Button
            onClick={handlePrev}
            variant="outline"
              size="icon"
            className="w-8 h-8 rounded-full bg-black/40 border border-neutral-700/50 text-white hover:bg-black/60 z-40 touch-manipulation"
            >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
            </Button>
          
            <Button
            onClick={handleNext}
            variant="outline"
              size="icon"
            className="w-8 h-8 rounded-full bg-black/40 border border-neutral-700/50 text-white hover:bg-black/60 z-40 touch-manipulation"
            >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
            </Button>
        </div>
      </div>
      
      {/* Empty space - minimal */}
      <div className="flex justify-center"></div>
    </div>
  )
}
