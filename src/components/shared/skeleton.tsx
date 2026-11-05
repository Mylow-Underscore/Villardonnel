"use client";

import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-muted",
        className
      )}
      {...props}
    />
  );
}

export function SkeletonText({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-4 w-full bg-muted rounded",
        className
      )}
    />
  );
}
