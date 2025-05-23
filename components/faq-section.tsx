"use client"

import { useState, Suspense } from "react"
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { faqs } from '@/data/faqs'

// Dynamically import icons
const Phone = dynamic(() => import('lucide-react').then(mod => mod.Phone), {
  ssr: false,
  loading: () => <span className="w-5 h-5" />
})

const ChevronDown = dynamic(() => import('lucide-react').then(mod => mod.ChevronDown), {
  ssr: false,
  loading: () => <span className="w-5 h-5" />
})

// Loading component for FAQ section
const FAQLoading = () => (
  <div className="w-full py-1">
    <div className="container px-4 sm:px-6 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
            <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Loading FAQs...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

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
    <Suspense fallback={<FAQLoading />}>
      <div className="w-full py-1">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Common Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Find answers to common questions about our car rental services in Goa
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleCategory(category.category)}
                    className="w-full px-6 py-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {category.category}
                      </h3>
                      <span className="text-orange-400 text-xl">+</span>
                    </div>
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
                          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleQuestion(questionIndex)}
                            className="w-full px-4 py-3 text-left focus:outline-none"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-medium text-white">
                                {faq.question}
                              </span>
                              <span className="text-orange-400 text-xl">+</span>
                            </div>
                          </button>
                          
                          <div
                            className={`px-4 transition-all duration-200 ease-in-out ${
                              openQuestion === questionIndex
                                ? "max-h-96 opacity-100 py-3"
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
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Still have questions?</p>
              <a
                href="tel:+919307055218"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: +91 9307055218
              </a>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
} 