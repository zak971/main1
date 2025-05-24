"use client"

export default function AboutUs() {
  return (
    <div className="container relative px-4 sm:px-6 mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center px-4">
        <div className="inline-flex items-center justify-center px-5 py-2 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
          <span className="text-sm font-medium text-white tracking-wide uppercase">About Us</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
          Your Trusted Car Rental Partner in Goa
        </h2>

        <p className="max-w-1xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
        5+ Years of Experience | 50+ Vehicles | 1200+ Happy Customers Across Goa
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed text-gray-300 text-center">
          <p>
          At <a href="/" target="_blank" rel="noopener noreferrer"><strong>Goa Car Rental</strong> </a>, we specialize in providing dependable, affordable, and convenient <a href="/self-drive-cars" target="_blank" rel="noopener noreferrer"><strong>self-drive</strong> </a>
          and <a href="luxary-cars" target="_blank" rel="noopener noreferrer"><strong>Luxary car rental</strong> </a>services across Goa. Whether you're visiting Goa’s stunning beaches, vibrant markets, or offbeat destinations, 
          our fleet of well-maintained vehicles — from fuel-efficient hatchbacks to premium SUVs — ensures you travel in comfort and style.
          </p>
          
          <p>
             Enjoy <strong>transparent pricing</strong>, <strong>easy online booking</strong>, <strong>doorstep delivery</strong>, and <strong>24/7 support</strong> 
              for a completely hassle-free rental experience. Trusted by locals and tourists alike, Goa Car Rental is the preferred choice for 
            <strong>car hire in Goa</strong> — whether it’s a quick weekend escape or an extended stay.
          </p>
          
        </div>
      </div>
    </div>
  );
} 