import { Skeleton, TableRowSkeleton, DashboardStatsSkeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" variant="wave" />
          <Skeleton className="h-4 w-64" variant="pulse" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32 rounded-full" variant="shimmer" />
          <Skeleton className="h-10 w-32 rounded-full" variant="shimmer" />
        </div>
      </div>

      {/* Stats Overview */}
      <DashboardStatsSkeleton />

      {/* Farmers List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-6 w-32" variant="wave" />
          <Skeleton className="h-8 w-48 rounded-lg" variant="pulse" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <TableRowSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-6">
        <Skeleton className="h-10 w-32 rounded-full" variant="pulse" />
      </div>
    </div>
  )
} 