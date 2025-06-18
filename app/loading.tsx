import { HeroSkeleton, CardSkeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-12 pb-8">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8">
        <HeroSkeleton />
      </div>

      {/* Featured Section */}
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="h-8 w-56 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="group aspect-square relative overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-shimmer" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-white/80 rounded animate-pulse" />
                  <div className="h-3 w-16 bg-white/60 rounded animate-wave" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 