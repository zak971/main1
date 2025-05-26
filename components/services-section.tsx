"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export function ServicesSection() {
  return (
    <section className="relative py-8 sm:py-12 overflow-hidden">

       
        
      <div className="container relative px-4 sm:px-6 mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 leading-tight font-montserrat"
          >
            Car Rental Services in Goa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed"
          >
            Discover hassle-free self-drive and chauffeur car rentals with 24/7 support across Goa.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {/* Self Drive */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-black/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/images/services/self-drive.jpg"
                alt="Self Drive Cars"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Self Drive Cars</h3>
                <p className="text-gray-300 text-sm">Freedom to explore at your own pace</p>
              </div>
            </div>
            <div className="p-6">
              <p className="relative text-gray-400 mb-4">Choose from our wide range of self-drive cars for the ultimate freedom to explore Goa at your own pace.</p>
              <ul className="relative space-y-2 mb-6">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Flexible rental periods</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">No hidden charges</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Doorstep delivery</span>
                </motion.li>
              </ul>
              <Link 
                href="/self-drive-cars" 
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group/link"
              >
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Chauffeur Service */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-black/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/images/services/chaffeur.jpg"
                alt="Chauffeur Service"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Chauffeur Service</h3>
                <p className="text-gray-300 text-sm">Professional drivers for a comfortable journey</p>
              </div>
            </div>
            <div className="p-6">
              <p className="relative text-gray-400 mb-4">Professional chauffeurs for a comfortable and hassle-free travel experience across Goa.</p>
              <ul className="relative space-y-2 mb-6">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Experienced drivers</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Local knowledge</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">24/7 availability</span>
                </motion.li>
              </ul>
              <Link 
                href="/chauffeur-service" 
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group/link"
              >
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Airport Transfer */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-black/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/images/services/airport.png"
                alt="Airport Transfer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Airport Transfer</h3>
                <p className="text-gray-300 text-sm">Seamless airport pickup and drop service</p>
              </div>
            </div>
            <div className="p-6">
              <p className="relative text-gray-400 mb-4">Seamless airport pickup and drop service for a stress-free start to your Goa vacation.</p>
              <ul className="relative space-y-2 mb-6">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Flight tracking</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Meet & greet service</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center text-gray-300 group/item"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Fixed rates</span>
                </motion.li>
              </ul>
              <Link 
                href="/airport-transfer" 
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group/link"
              >
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 