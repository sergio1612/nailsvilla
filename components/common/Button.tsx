"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          // Universal hover feel: smooth all-property transition + tiny lift on hover.
          // Disabled buttons skip the lift via `disabled:pointer-events-none`.
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium cursor-pointer transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
          {
            // `hover:bg-primary/90` darkens just the background on hover instead of
            // the old `hover:opacity-90` which faded the entire button (including
            // text) and looked disabled when overrides changed the background.
            "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/35":
              variant === "default",
            "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-primary/30 hover:shadow-lg hover:shadow-primary/15":
              variant === "outline",
            "hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-primary/15":
              variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

