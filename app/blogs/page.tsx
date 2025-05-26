import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import { getBlogs } from "@/lib/blogs"
import { BlogSearch } from "@/components/blogs/blog-search.client"

export default async function Page() {
  const blogs = await getBlogs()

  return (
    <>
      <Head>
        <title>Goa Car Rental Travel Guides & Tips | Explore Goa</title>
        <meta name="description" content="Discover travel tips, hidden gems, and destination guides for exploring Goa. Get insights on the best routes, attractions, and car rental tips for your Goa adventure." />
        <meta name="keywords" content="goa travel guide, goa car rental tips, goa road trip, goa travel blog, goa tourist spots" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blogs" />
        <meta property="og:title" content="Goa Car Rental Travel Guides & Tips | Explore Goa" />
        <meta property="og:description" content="Discover travel tips, hidden gems, and destination guides for exploring Goa. Get insights on the best routes, attractions, and car rental tips for your Goa adventure." />
        <meta property="og:image" content="/images/rename.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/blogs" />
        <meta property="twitter:title" content="Goa Car Rental Travel Guides & Tips | Explore Goa" />
        <meta property="twitter:description" content="Discover travel tips, hidden gems, and destination guides for exploring Goa. Get insights on the best routes, attractions, and car rental tips for your Goa adventure." />
        <meta property="twitter:image" content="/images/rename.png" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Goa Car Rentals" />
        <link rel="canonical" href="https://yourdomain.com/blogs" />
      </Head>

      {/* JSON-LD Structured Data */}
      <Script
        id="blogs-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Goa Car Rental Travel Guides & Tips",
            "description": "Discover travel tips, hidden gems, and destination guides for exploring Goa. Get insights on the best routes, attractions, and car rental tips for your Goa adventure.",
            "url": "https://yourdomain.com/blogs",
            "publisher": {
              "@type": "Organization",
              "name": "Goa Car Rentals",
              "url": "https://yourdomain.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/images/rename.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://yourdomain.com/blogs"
            },
            "blogPost": blogs.map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.excerpt,
              "image": blog.coverImage,
              "datePublished": blog.publishedAt,
              "dateModified": blog.publishedAt,
              "author": {
                "@type": "Organization",
                "name": "Goa Car Rentals"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Goa Car Rentals",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourdomain.com/images/rename.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://yourdomain.com/blogs/${blog.slug}`
              }
            })),
            "about": {
              "@type": "Thing",
              "name": "Goa Travel Guide",
              "description": "Comprehensive travel guides and tips for exploring Goa by car"
            },
            "keywords": [
              "goa travel guide",
              "goa car rental tips",
              "goa road trip",
              "goa tourist spots",
              "goa travel blog"
            ]
          })
        }}
      />

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
            <div className="flex flex-col items-center mb-8 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
                Goa Car Rental Travel Guides & Tips
              </h1>
              <p className="mt-1 max-w-4xl text-base sm:text-lg text-gray-300 leading-relaxed px-12">
                Discover travel tips, hidden gems, and destination guides — all designed to inspire your next road trip with the perfect rental car.
              </p>
            </div>
            
            {/* Search Component with Blog Grid */}
            <BlogSearch blogs={blogs} />
          </div>
        </section>
      </div>
    </>
  )
} 