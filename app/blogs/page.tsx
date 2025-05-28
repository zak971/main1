import { Metadata } from "next"
import { Suspense } from "react"
import { BlogCard } from "@/components/blog/blog-card"
import { getBlogs } from "@/lib/blogs"
import { BlogSkeleton } from "@/components/blog/blog-skeleton"

export const metadata: Metadata = {
  title: "Goa Travel Guides & Tips | Explore Goa",
  description: "Discover travel tips, hidden gems, and destination guides for exploring Goa. Get insights on the best routes, attractions, and car rental tips for your Goa adventure.",
  keywords: "goa travel guide, goa car rental tips, goa road trip, goa travel blog, goa tourist spots",
  openGraph: {
    title: "Goa Car Rental Travel Guides & Tips | Explore Goa",
    description: "Discover travel tips, hidden gems, and destination guides for exploring Goa. Get insights on the best routes, attractions, and car rental tips for your Goa adventure.",
    url: "https://goacarrental.in/blogs",
    images: [
      {
        url: "https://goacarrental.in/images/blog-cover.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Car Rental Travel Guides & Tips | Explore Goa",
    description: "Discover travel tips, hidden gems, and destination guides for exploring Goa. Get insights on the best routes, attractions, and car rental tips for your Goa adventure.",
    images: ["https://goacarrental.in/images/blog-cover.jpg"],
  },
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-10 overflow-hidden">
        {/* Background Layers */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto pt-20 sm:pt-24">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 animate-fade-in">
            Explore Goa with Us <br/> Car Rental Tips, Travel Guides & Local Insights
            </h1>
            <p className="mt-1 max-w-4xl text-base sm:text-lg text-gray-300 leading-relaxed animate-fade-in-delay">
            Stay informed with expert advice on self-drive rentals, chauffeur services, and the best ways to explore Goa.
            </p>
          </div>

          {/* Blog Grid */}
          <Suspense fallback={<BlogSkeleton />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delay-3">
              {blogs.map((blog) => (
                <div 
                  key={blog.id}
                  className="transform hover:scale-[1.02] transition-all duration-300"
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </Suspense>

          {/* Newsletter Section */}
          <div className="mt-16 max-w-2xl mx-auto text-center animate-fade-in-delay-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6">Get the latest travel tips and car rental updates directly in your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 