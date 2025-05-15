"use client"

export default function AboutUs() {
  return (
    <div className="container relative px-4 sm:px-6 mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center px-4">
        <div className="inline-flex items-center justify-center px-5 py-2 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
          <span className="text-sm font-medium text-white tracking-wide uppercase">About Us</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight">
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
            At <span className="font-semibold text-white"><a href="https://www.goacarrental.in/">Goa Car Rental</a> </span>, we are committed to offering a seamless and dependable car rental experience for travelers and locals alike. 
            Whether you're exploring scenic beaches, vibrant markets, or hidden gems across Goa, our wide range of well-maintained rental cars ensures you do it in comfort and style.
          </p>
          
          <p>
            With a strong focus on customer satisfaction, transparent pricing, and 24/7 support, 
            we’ve earned the trust of thousands of happy customers. Whether it’s a quick weekend getaway or an extended stay,
            <a href="https://www.goacarrental.in/">Goa Car Rental</a> is your go-to choice for hassle-free car hire in Goa. 
          </p>
          
        </div>
      </div>
    </div>
  );
} 