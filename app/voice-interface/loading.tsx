import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4 text-center">
        <Skeleton className="h-10 w-64 mx-auto" variant="wave" />
        <Skeleton className="h-4 w-96 mx-auto" variant="pulse" />
      </div>

      {/* Voice Interface UI */}
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-3">
          <Skeleton className="h-4 w-4 rounded-full" variant="pulse" />
          <Skeleton className="h-4 w-32" variant="wave" />
        </div>

        {/* Voice Controls */}
        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-16 rounded-full" variant="shimmer" />
          ))}
        </div>

        {/* Transcript Area */}
        <div className="space-y-4 p-6 rounded-xl border">
          <Skeleton className="h-6 w-32" variant="wave" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-4 w-full" variant="pulse" />
            ))}
          </div>
        </div>

        {/* Settings Panel */}
        <div className="space-y-4 p-6 rounded-xl border">
          <Skeleton className="h-6 w-24 mb-4" variant="wave" />
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <Skeleton className="h-4 w-32" variant="pulse" />
                <Skeleton className="h-6 w-12 rounded-full" variant="shimmer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 