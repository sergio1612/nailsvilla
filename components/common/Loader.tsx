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
        "fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl"></div>

      <div className="relative flex w-[min(90vw,420px)] flex-col items-center rounded-4xl border border-white/70 bg-white/70 px-8 py-10 text-center shadow-2xl shadow-primary/10 backdrop-blur-xl">
        <div className="relative mb-7 h-28 w-28">
          <div className="absolute inset-0 rounded-full border border-primary/15"></div>
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-primary/30 animate-spin"></div>
          <div className="absolute inset-7 rounded-4xl bg-linear-to-br from-primary to-accent shadow-xl shadow-primary/25 animate-bottle-bounce">
            <div className="absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-t-xl bg-foreground"></div>
            <div className="absolute left-1/2 top-3 h-14 w-3 -translate-x-1/2 rounded-full bg-white/70"></div>
            <div className="absolute bottom-4 left-1/2 h-2 w-10 -translate-x-1/2 rounded-full bg-white/25"></div>
          </div>
          <div className="absolute right-3 top-4 h-3 w-3 rounded-full bg-accent animate-sparkle"></div>
          <div className="absolute bottom-5 left-4 h-2 w-2 rounded-full bg-primary animate-sparkle"></div>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Welcome to
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent font-display">
          Nails Villa
        </h1>
        <p className="mt-1 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          by Rutika
        </p>

        <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-primary/10">
          <div className="h-full w-1/2 rounded-full bg-linear-to-r from-primary via-accent to-primary animate-shimmer"></div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Preparing your nail glow-up experience...
        </p>
      </div>
    </div>
  )
}

