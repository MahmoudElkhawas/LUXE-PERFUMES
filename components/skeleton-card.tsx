export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-muted animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-muted rounded-lg animate-pulse w-3/4" />
          <div className="h-4 bg-muted rounded-lg animate-pulse w-1/2" />
        </div>

        {/* Price Skeleton */}
        <div className="h-6 bg-muted rounded-lg animate-pulse w-1/4" />

        {/* Button Skeleton */}
        <div className="h-10 bg-muted rounded-lg animate-pulse w-full" />
      </div>
    </div>
  );
}

export function SkeletonProductGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
