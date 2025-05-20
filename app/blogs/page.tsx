import Image from "next/image"
import { getBlogs } from "@/lib/blogs"
import { BlogSearch } from "@/components/blogs/blog-search.client"

export default async function Page() {
  const blogs = await getBlogs()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto pt-10">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-4 sm:mb-6 text-center">
            <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Our Latest Articles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
             Goa Car Rental Travel Guides & Tips.
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            Discover travel tips, hidden gems, and destination guides — all designed to inspire your next road trip with the perfect rental car.
            </p>
          </div>
          
          {/* Search Component with Blog Grid */}
          <BlogSearch blogs={blogs} />
        </div>
      </section>
    </div>
  )
} 