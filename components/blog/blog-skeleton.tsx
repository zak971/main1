export function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-[#0d0d0d] rounded-xl overflow-hidden shadow-lg border border-gray-800/50"
        >
          {/* Image Skeleton */}
          <div className="w-full h-60 bg-gray-800/50 animate-pulse" />

          {/* Content Skeleton */}
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="h-8 bg-gray-800/50 rounded animate-pulse" />
              <div className="h-4 bg-gray-800/50 rounded animate-pulse" />
              <div className="h-4 bg-gray-800/50 rounded animate-pulse w-3/4" />
            </div>

            {/* Button Skeleton */}
            <div className="pt-2 flex justify-center">
              <div className="h-10 w-32 bg-gray-800/50 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 