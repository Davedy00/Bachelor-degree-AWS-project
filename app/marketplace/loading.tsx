import { ProductSkeleton, Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Search Bar */}
        <div className="w-full md:w-96">
          <Skeleton className="h-12 w-full rounded-full" variant="pulse" />
        </div>
        
        {/* Filter Buttons */}
        <div className="flex gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              className="h-10 w-24 rounded-full"
              variant="wave"
            />
          ))}
        </div>
      </div>

      {/* Categories Scroll */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-none">
              <Skeleton className="h-24 w-40 rounded-xl" variant="shimmer" />
              <Skeleton className="h-4 w-20 mt-2 mx-auto" variant="pulse" />
            </div>
          ))}
        </div>
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Products Grid */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="group">
              <ProductSkeleton />
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <Skeleton className="h-12 w-40 rounded-full" variant="pulse" />
      </div>

      {/* Scrollbar Styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
} 