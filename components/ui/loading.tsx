import { cn } from "@/lib/utils"

interface LoadingProps {
  variant?: "card" | "image" | "form" | "button"
  className?: string
}

export function Loading({ variant = "card", className }: LoadingProps) {
  if (variant === "card") {
    return (
      <div className={cn("animate-pulse", className)}>
        <div className="bg-neutral-800/50 rounded-lg overflow-hidden">
          <div className="aspect-video bg-neutral-700/50" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-neutral-700/50 rounded w-3/4" />
            <div className="h-4 bg-neutral-700/50 rounded w-1/2" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-8 bg-neutral-700/50 rounded" />
              <div className="h-8 bg-neutral-700/50 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "image") {
    return (
      <div className={cn("animate-pulse bg-neutral-800/50 rounded-lg overflow-hidden", className)}>
        <div className="aspect-video bg-neutral-700/50" />
      </div>
    )
  }

  if (variant === "form") {
    return (
      <div className={cn("animate-pulse space-y-4", className)}>
        <div className="space-y-2">
          <div className="h-4 bg-neutral-700/50 rounded w-1/4" />
          <div className="h-10 bg-neutral-700/50 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-neutral-700/50 rounded w-1/4" />
          <div className="h-10 bg-neutral-700/50 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-neutral-700/50 rounded w-1/4" />
          <div className="h-32 bg-neutral-700/50 rounded" />
        </div>
        <div className="h-10 bg-neutral-700/50 rounded" />
      </div>
    )
  }

  if (variant === "button") {
    return (
      <div className={cn("animate-pulse h-10 bg-neutral-700/50 rounded", className)} />
    )
  }

  return null
} 