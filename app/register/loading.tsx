import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Left side */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-green-700/40 to-green-900/90 animate-gradient" />
          <Skeleton className="absolute inset-0 animate-pulse opacity-50" />
        </div>
        
        {/* Logo */}
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-8 h-8 rounded-lg animate-float" />
            <Skeleton className="w-24 h-6 rounded animate-wave" />
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-20 mt-auto">
          <div className="space-y-4">
            <Skeleton className="w-40 h-7 rounded animate-pulse" />
            <Skeleton className="w-56 h-5 rounded animate-wave" />
            <div className="space-y-3">
              <Skeleton className="w-full h-20 rounded animate-shimmer" />
              <Skeleton className="w-3/4 h-4 rounded animate-wave" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Skeleton className="w-56 h-8 mx-auto rounded animate-pulse" />
            <Skeleton className="w-72 h-4 mx-auto rounded animate-wave" />
          </div>
          
          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name Fields */}
            <div className="grid gap-4 grid-cols-2">
              <Skeleton className="w-full h-10 rounded-lg animate-shimmer" />
              <Skeleton className="w-full h-10 rounded-lg animate-shimmer" />
            </div>
            
            {/* Other Fields */}
            <Skeleton className="w-full h-10 rounded-lg animate-pulse" />
            <Skeleton className="w-full h-10 rounded-lg animate-wave" />
            <Skeleton className="w-full h-10 rounded-lg animate-shimmer" />
            
            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <Skeleton className="w-4 h-4 rounded animate-pulse" />
              <Skeleton className="flex-1 h-4 rounded animate-wave" />
            </div>
            
            {/* Submit Button */}
            <Skeleton className="w-full h-10 rounded-lg animate-pulse" />
          </div>
          
          {/* Sign In Link */}
          <Skeleton className="w-48 h-4 mx-auto rounded animate-wave" />
        </div>
      </div>
    </div>
  )
} 