"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-champagne/25 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-taupe/20 blur-3xl"></div>

      <div className="relative flex flex-col items-center text-center">
        <p className="section-eyebrow text-mocha/70 mb-3">
          ✦ &nbsp; Welcome to &nbsp; ✦
        </p>
        <h1 className="font-display text-6xl sm:text-7xl font-light tracking-tight text-foreground">
          Nails Villa
        </h1>
        <p className="artist-signature text-4xl text-mocha mt-1">by Rutika</p>

        <div className="mt-10 h-px w-48 overflow-hidden bg-taupe/25">
          <div className="h-full w-1/3 bg-foreground animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}
