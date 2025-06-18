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
        <Skeleton className="h-10 w-32 rounded-full" variant="shimmer" />
      </div>

      {/* Stats Overview */}
      <DashboardStatsSkeleton />

      {/* Recent Buyers */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-32 mb-6" variant="wave" />
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
