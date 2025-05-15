import Image from "next/image"
import Link from "next/link"
import type { BlogType } from "@/types/blog"
import { CalendarDays, Clock } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  blog: BlogType
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link 
      href={`/blogs/${blog.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 hover:shadow-orange-500/10 hover:border-orange-400/20 hover:scale-[1.02]"
    >
      {/* Image Container */}
      <div className="group bg-black/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/5 overflow-hidden hover:bg-black/50 transition-all duration-300 h-full">
        <div className="relative aspect-video w-full">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-4 sm:p-6 space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-white line-clamp-2 group-hover:text-orange-400 transition-colors">
            {blog.title}
          </h3>
          
          <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
            <span>{formatDate(blog.publishedAt)}</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 