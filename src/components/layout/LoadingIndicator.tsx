import React from 'react'
import { Loader2 } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from "@/lib/utils"

interface LoadingIndicatorProps {
  type?: 'spinner' | 'skeleton' | 'combined'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LoadingIndicator({ 
  type = 'combined', 
  size = 'md', 
  className 
}: LoadingIndicatorProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  const containerClasses = cn(
    "flex flex-col items-center justify-center space-y-4 p-4",
    className
  )

  const renderSpinner = () => (
    <Loader2 className={cn(sizeClasses[size], "animate-spin")} />
  )

  const renderSkeleton = () => (
    <div className="space-y-2 w-full max-w-sm">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )

  return (
    <div className={containerClasses}>
      {(type === 'spinner' || type === 'combined') && renderSpinner()}
      {(type === 'skeleton' || type === 'combined') && renderSkeleton()}
      <span className="sr-only">Loading...</span>
    </div>
  )
}