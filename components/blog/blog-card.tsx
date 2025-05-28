"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import type { BlogType } from "@/types/blog"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  blog: BlogType
}

export function BlogCard({ blog }: BlogCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <article className="group h-full bg-black/30 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden flex flex-col transition-all duration-300 hover:border-orange-500/30">
        {/* Image Container with Fixed Aspect Ratio */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {!imageError ? (
            <Image
              src={blog.coverImage}
              alt={`${blog.title} - Featured image for blog post about ${blog.title.toLowerCase()} in Goa`}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isLoading ? 'blur-sm' : 'blur-0'}`}
              onLoad={() => setIsLoading(false)}
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <PlaceholderImage
              width={400}
              height={240}
              alt={`${blog.title} placeholder`}
              className="w-full h-60 object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        </div>

        {/* Content Container with Flex Grow */}
        <div className="flex flex-col flex-grow p-6">
          <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
            {blog.title}
          </h2>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
            {blog.excerpt}
          </p>
          
          {/* Metadata Footer */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mt-auto pt-4 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              <span>{formatDate(blog.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime} min read</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
} 