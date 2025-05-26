"use client"

import { motion } from "framer-motion"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
}

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
}

const textVariants = {
  hidden: { 
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.8
    }
  }
}

const highlightVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
}

export default function AboutUs() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="container relative px-4 sm:px-6 mx-auto"
    >
      {/* Section Header */}
      <motion.div 
        variants={titleVariants}
        className="flex flex-col items-center mb-12 text-center px-4"
      >
        <motion.h2 
          variants={titleVariants}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Your Trusted Car Rental Partner in Goa
        </motion.h2>

        <motion.p 
          variants={textVariants}
          className="max-w-1xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed"
        >
        5+ Years of Experience | 50+ Vehicles | 1200+ Happy Customers Across Goa
        </motion.p>
      </motion.div>

      {/* About Content */}
      <motion.div 
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-6 text-lg leading-relaxed text-gray-300 text-center">
          <motion.p
            variants={textVariants}
            className="relative"
          >
            At <motion.span variants={highlightVariants} className="inline-block"><a href="/" target="_blank" rel="noopener noreferrer"><strong>Goa Car Rental</strong></a></motion.span>, we specialize in providing dependable, affordable, and convenient <motion.span variants={highlightVariants} className="inline-block"><a href="/self-drive-cars" target="_blank" rel="noopener noreferrer"><strong>self-drive</strong></a></motion.span>
            and <motion.span variants={highlightVariants} className="inline-block"><a href="luxary-cars" target="_blank" rel="noopener noreferrer"><strong>Luxary car rental</strong></a></motion.span> services across Goa. Whether you're visiting Goa's stunning beaches, vibrant markets, or offbeat destinations, 
          our fleet of well-maintained vehicles — from fuel-efficient hatchbacks to premium SUVs — ensures you travel in comfort and style.
          </motion.p>
          
          <motion.p
            variants={textVariants}
            className="relative"
          >
            Enjoy <motion.span variants={highlightVariants} className="inline-block"><strong>transparent pricing</strong></motion.span>, <motion.span variants={highlightVariants} className="inline-block"><strong>easy online booking</strong></motion.span>, <motion.span variants={highlightVariants} className="inline-block"><strong>doorstep delivery</strong></motion.span>, and <motion.span variants={highlightVariants} className="inline-block"><strong>24/7 support</strong></motion.span> 
              for a completely hassle-free rental experience. Trusted by locals and tourists alike, Goa Car Rental is the preferred choice for 
            <motion.span variants={highlightVariants} className="inline-block"><strong>car hire in Goa</strong></motion.span> — whether it's a quick weekend escape or an extended stay.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
} 