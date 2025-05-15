"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BlogCard } from "@/components/blogs/blog-card"
import type { BlogType } from "@/types/blog"

interface BlogSearchProps {
  blogs: BlogType[]
}

export function BlogSearch({ blogs }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true // Show all blogs if search is empty
    
    return (
      blog.title.toLowerCase().includes(query) || 
      blog.excerpt.toLowerCase().includes(query)
    )
  })

  return (
    <>
      {/* Search Filter */}
      <div className="w-full max-w-lg mt-6 sm:mt-8 mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 py-6 focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 shadow-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto mt-12">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-300">No articles found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </>
  )
} 