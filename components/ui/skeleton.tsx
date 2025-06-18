import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "shimmer" | "pulse" | "wave"
}

export function Skeleton({ className, variant = "shimmer" }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800",
        {
          "animate-shimmer bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-[length:400%_100%]":
            variant === "shimmer",
          "animate-pulse": variant === "pulse",
        },
        className
      )}
    >
      {variant === "wave" && (
        <div className="absolute inset-0 -translate-x-full animate-wave bg-gradient-to-r from-transparent via-white to-transparent" />
      )}
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="w-full space-y-8 overflow-hidden rounded-2xl bg-white shadow-lg p-8">
      <div className="flex justify-between items-start">
        <div className="space-y-4 w-1/2">
          <Skeleton className="h-12 w-3/4" variant="wave" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-10 w-32 rounded-full" variant="pulse" />
            <Skeleton className="h-10 w-32 rounded-full" variant="pulse" />
          </div>
        </div>
        <Skeleton className="h-64 w-96 rounded-xl" variant="shimmer" />
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl border p-6 space-y-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <Skeleton className="h-6 w-1/3" variant="wave" />
      <Skeleton className="h-24 w-full rounded-lg" variant="shimmer" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex justify-between items-center pt-4">
        <Skeleton className="h-8 w-24 rounded-full" variant="pulse" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  )
}

export function ProductSkeleton() {
  return (
    <div className="group rounded-xl border p-4 space-y-4 bg-white hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Skeleton className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-2/3" variant="wave" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-6 w-1/3" variant="pulse" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function ProfileSkeleton() {
  return (
    <div className="space-y-8 p-6 bg-white rounded-2xl shadow-sm">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Skeleton className="h-24 w-24 rounded-full" variant="pulse" />
          <Skeleton className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-4 border-white" />
        </div>
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-48" variant="wave" />
          <Skeleton className="h-4 w-32" />
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center p-4 rounded-lg border">
            <Skeleton className="h-8 w-12 mx-auto mb-2" variant="shimmer" />
            <Skeleton className="h-4 w-16 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function TableRowSkeleton() {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white hover:bg-gray-50 transition-colors rounded-lg">
      <Skeleton className="h-12 w-12 rounded-lg" variant="pulse" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" variant="wave" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <Skeleton className="h-8 w-24 rounded-full" />
    </div>
  )
}

export function DashboardStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" variant="wave" />
              <Skeleton className="h-8 w-24" variant="pulse" />
            </div>
            <Skeleton className="h-12 w-12 rounded-full" variant="shimmer" />
          </div>
          <div className="mt-4">
            <Skeleton className="h-2 w-full rounded-full" variant="wave" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function NavigationSkeleton() {
  return (
    <div className="space-y-2 p-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center space-x-4 p-2">
          <Skeleton className="h-6 w-6 rounded" variant="pulse" />
          <Skeleton className="h-4 w-24" variant="wave" />
        </div>
      ))}
    </div>
  )
}
