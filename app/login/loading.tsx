import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Left side */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600 to-green-800 animate-gradient" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-8 h-8 rounded-lg animate-pulse" />
            <Skeleton className="w-24 h-6 rounded animate-wave" />
          </div>
        </div>
        <div className="relative z-20 mt-auto">
          <div className="space-y-4">
            <Skeleton className="w-32 h-6 rounded animate-pulse" />
            <Skeleton className="w-48 h-4 rounded animate-wave" />
            <div className="space-y-2">
              <Skeleton className="w-full h-16 rounded animate-shimmer" />
              <Skeleton className="w-2/3 h-4 rounded animate-wave" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Skeleton className="w-48 h-8 mx-auto rounded animate-pulse" />
            <Skeleton className="w-64 h-4 mx-auto rounded animate-wave" />
          </div>
          <div className="space-y-4">
            <Skeleton className="w-full h-10 rounded-lg animate-shimmer" />
            <Skeleton className="w-full h-10 rounded-lg animate-pulse" />
            <Skeleton className="w-full h-10 rounded-lg animate-wave" />
          </div>
          <Skeleton className="w-48 h-4 mx-auto rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
} 