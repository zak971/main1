"use client"

import { useState } from "react"
import { ChevronDown, Phone } from "lucide-react"

const faqs = [
  {
    category: "Booking & Requirements",
    questions: [
      {
        question: "What documents do I need to rent a car in Goa?",
        answer: "You need a valid driving license, ID proof (Aadhar/Passport), and address proof. For international tourists, an International Driving Permit is required along with passport."
      },
      {
        question: "What is the minimum age to rent a car?",
        answer: "The minimum age to rent a car is 21 years. Drivers between 21-25 years may be subject to a young driver surcharge."
      },
      {
        question: "Can I book a car without a credit card?",
        answer: "Yes, we accept cash payments and other payment methods like UPI, net banking, and debit cards."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Free cancellation is available up to 24 hours before the rental start time. Cancellations made within 24 hours may be subject to a cancellation fee."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        question: "What is included in the rental price?",
        answer: "Our rental price includes comprehensive insurance, unlimited kilometers, 24/7 roadside assistance, and standard maintenance."
      },
      {
        question: "Is there a security deposit for car rentals?",
        answer: "Yes, we require a refundable security deposit of ₹5,000 for standard cars and ₹10,000 for premium vehicles, returned upon safe return of the vehicle."
      },
      {
        question: "Do you offer any discounts?",
        answer: "Yes, we offer discounts for long-term rentals (7+ days), early bookings, and off-season rentals. We also have special rates for corporate clients."
      }
    ]
  },
  {
    category: "Services & Support",
    questions: [
      {
        question: "Do you offer airport pickup and drop service?",
        answer: "Yes, we offer complimentary airport pickup and drop service with advance booking of our rental cars."
      },
      {
        question: "What happens if the car breaks down?",
        answer: "We provide 24/7 roadside assistance. In case of a breakdown, our support team will assist you immediately and arrange for a replacement vehicle if needed."
      },
      {
        question: "Do you provide GPS navigation?",
        answer: "Yes, GPS navigation is available as an optional add-on. We recommend it for first-time visitors to Goa."
      },
      {
        question: "Can I get a driver with the car?",
        answer: "Yes, we offer chauffeur services at an additional cost. Our drivers are professional, experienced, and familiar with Goa's roads and attractions."
      }
    ]
  },
  {
    category: "Vehicle Information",
    questions: [
      {
        question: "What types of cars do you offer?",
        answer: "We have a diverse fleet including economy cars, sedans, SUVs, and luxury vehicles. All our cars are well-maintained and regularly serviced."
      },
      {
        question: "Is fuel included in the rental?",
        answer: "No, fuel is not included. The car will be provided with a full tank, and you should return it with a full tank. We can provide fuel delivery service at an additional cost."
      },
      {
        question: "What if I damage the car?",
        answer: "All our cars come with comprehensive insurance. Minor damages are covered by the insurance, while major damages may require additional payment based on the assessment."
      }
    ]
  }
]

export function FAQSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <div className="w-full py-1">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Find answers to common questions about our car rental services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-6 py-3 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-semibold text-white">
                    {category.category}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform duration-200 ${
                      openCategory === category.category ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`transition-all duration-200 ease-in-out ${
                    openCategory === category.category
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-3 space-y-3">
                    {category.questions.map((faq, questionIndex) => (
                      <div
                        key={questionIndex}
                        className="bg-white/5 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(questionIndex)}
                          className="w-full px-4 py-2.5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                        >
                          <span className="text-lg font-medium text-white">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
                              openQuestion === questionIndex ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        <div
                          className={`px-4 transition-all duration-200 ease-in-out ${
                            openQuestion === questionIndex
                              ? "max-h-96 opacity-100 py-2.5"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-3">
              Still have questions? We're here to help!
            </p>
            <a
              href="tel:+919307055218"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: +91 9307055218
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 