"use client";

import * as React from "react";

import { Label as LabelPrimitive } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive>,
  React.ComponentProps<typeof LabelPrimitive>
>(({ className, ...props }, ref) => (
  <LabelPrimitive
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-primary file:px-4 file:py-1 file:font-medium file:rounded-md file:hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  />
));

Input.displayName = "Input";

export { Input };
