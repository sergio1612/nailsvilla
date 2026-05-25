"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

/**
 * Loader — "Hello, Smile"
 *
 * A minimal, sleek welcome: a soft halo breathes, the face ring strokes
 * itself in, two eyes blink open, and the smile curve draws last as the
 * hero moment. The wordmark fades up beneath.
 *
 * Total cycle: ~1.6s. Pure SVG + CSS. Respects prefers-reduced-motion.
 */
export function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 1700)
    const removeTimer = setTimeout(() => setIsVisible(false), 2200)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading NailsVilla"
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-background transition-opacity duration-500",
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Soft ambient halo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vmin] w-[50vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary/12 via-accent/12 to-transparent blur-3xl loader-halo" />

      <div className="relative flex flex-col items-center">
        {/* ============ THE SMILE ============ */}
        <div className="relative h-28 w-28 sm:h-32 sm:w-32 loader-face">
          <svg
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-full w-full"
          >
            <defs>
              <linearGradient id="smileStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="hsl(274 48% 48%)" />
                <stop offset="100%" stopColor="hsl(319 70% 62%)" />
              </linearGradient>
            </defs>

            {/* Face ring — draws itself */}
            <circle
              cx="60"
              cy="60"
              r="46"
              fill="none"
              stroke="url(#smileStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={100}
              className="loader-ring"
            />

            {/* Eyes — blink open after the ring is on its way */}
            <circle
              cx="46"
              cy="52"
              r="3.5"
              fill="hsl(274 48% 42%)"
              className="loader-eye loader-eye-left"
            />
            <circle
              cx="74"
              cy="52"
              r="3.5"
              fill="hsl(274 48% 42%)"
              className="loader-eye loader-eye-right"
            />

            {/* Smile curve — the hero, draws last */}
            <path
              d="M 40 68 Q 60 88 80 68"
              fill="none"
              stroke="url(#smileStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={100}
              className="loader-smile"
            />
          </svg>
        </div>

        {/* ============ WORDMARK ============ */}
        <div className="loader-rise mt-7 text-center">
          <h1 className="font-display text-2xl font-bold leading-none sm:text-3xl">
            <span className="bg-linear-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
              NailsVilla
            </span>
          </h1>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            by Rutika
          </p>
        </div>
      </div>
    </div>
  )
}
