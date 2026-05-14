"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loader after page loads
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Brand Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
          Nails Villa
        </h1>
        
        {/* Simple Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}

