"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BlogContentProps {
  content: string
  className?: string
}

export function BlogContent({ content, className }: BlogContentProps) {
  return (
    <div 
      className={cn(
        // Base styling
        "prose prose-invert max-w-none",
        // Size and spacing
        "lg:prose-lg",
        // Headings
        "prose-headings:font-bold prose-headings:tracking-tight",
        "prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6",
        "prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:text-white prose-h3:mt-8 prose-h3:mb-4",
        "prose-h4:text-lg prose-h4:sm:text-xl prose-h4:text-white prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-3",
        // Paragraphs and text
        "prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-4",
        "prose-strong:text-white prose-strong:font-semibold",
        // Lists
        "prose-ul:text-gray-300 prose-ul:my-6 prose-ul:pl-6",
        "prose-ol:text-gray-300 prose-ol:my-6 prose-ol:pl-6",
        "prose-li:my-2 prose-li:pl-2",
        // Links
        "prose-a:text-orange-400 prose-a:no-underline prose-a:transition-colors prose-a:duration-300 prose-a:hover:text-orange-300",
        // Images
        "prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full prose-img:h-auto prose-img:object-cover",
        // Custom classes
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
} 