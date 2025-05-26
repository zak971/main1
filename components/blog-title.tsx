"use client"

import { motion } from "framer-motion"

interface BlogTitleProps {
  title: string
  className?: string
}

export function BlogTitle({ title, className = "" }: BlogTitleProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
    </div>
  )
} 