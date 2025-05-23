import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogBySlug, getBlogs } from "@/lib/blogs"
import { notFound } from "next/navigation"
import type { BlogType } from "@/types/blog"
import { BlogContent } from "@/components/blogs/blog-content"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"
import { BlogCard } from "@/components/blogs/blog-card"
import { BlogSchema } from "@/components/blogs/blog-schema"
import { Suspense } from 'react'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog: BlogType) => ({
    slug: blog.slug,
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: `${blog.title} | Goa Car Rental Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.goacarrental.in/blogs/${resolvedParams.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedAt,
      modifiedTime: blog.publishedAt,
      authors: ['Goa Car Rental'],
      images: [{ 
        url: `https://www.goacarrental.in${blog.coverImage}`, 
        width: 1200, 
        height: 630, 
        alt: blog.title 
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [`https://www.goacarrental.in${blog.coverImage}`],
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);
  const allBlogs = await getBlogs();
  const otherBlogs = allBlogs.filter(b => b.slug !== resolvedParams.slug).slice(0, 3);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogSchema blog={blog} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority={true}
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          
          {/* Back Button */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
            <Button 
              asChild
              className="bg-black/30 backdrop-blur-sm border-white/10 text-gray-200 hover:bg-black/50 hover:text-orange-400 transition-all"
            >
              <Link href="/blogs" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blogs</span>
              </Link>
            </Button>
          </div>
          
          {/* Blog Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 px-4 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {blog.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-orange-400" />
                  <span>{formatDate(blog.publishedAt)}</span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="relative py-12 sm:py-16 overflow-hidden">
          {/* Background Layers */}
          <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="container relative px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="p-6 sm:p-8 md:p-10">
                  <BlogContent content={blog.content} />
                  
                  <div className="mt-16 pt-8 border-t border-white/10">
                    <Button 
                      asChild
                      className="bg-black/30 backdrop-blur-sm border-white/10 text-gray-200 hover:bg-black/50 hover:text-orange-400 hover:border-orange-400/30 transition-all w-full sm:w-auto py-2.5 sm:py-2"
                    >
                      <Link href="/blogs" className="flex items-center justify-center sm:justify-start gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to All Articles</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/5 p-6 space-y-8">
                    {/* Search Box */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full bg-black/50 border border-white/5 rounded-lg px-4 py-2.5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                      />
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    {/* Other Articles */}
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-6 text-center">Other Articles</h2>
                      <div className="space-y-6">
                        {otherBlogs.map((otherBlog) => (
                          <div key={otherBlog.id} className="transform hover:scale-[1.02] transition-transform duration-200">
                            <BlogCard blog={otherBlog} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-lg p-6 border border-orange-500/10">
                      <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                      <p className="text-gray-300 text-sm mb-4">Get the latest travel tips and car rental updates directly in your inbox.</p>
                      <div className="space-y-3">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full bg-black/50 border border-white/5 rounded-lg px-4 py-2.5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                        />
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 