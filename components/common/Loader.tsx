"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

/**
 * Loader — "The Bloom"
 *
 * A 5-petal nail-tip flower blossoms from a glowing core. Each petal pops
 * out with a spring easing and a slight pre-rotation that settles, so the
 * flower feels alive. A faceted center jewel arrives last and breathes
 * gently. Sparkles dance in the gaps between petals. Beneath, the wordmark
 * rises and a calligraphic flourish hand-draws itself under "by Rutika."
 *
 * Total cycle: ~2.4s. Pure SVG + CSS keyframes (no JS animation libs).
 * Respects prefers-reduced-motion.
 */
export function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 2400)
    const removeTimer = setTimeout(() => setIsVisible(false), 2900)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) return null

  // Five petals arranged around the flower center, 72° apart.
  // Bloom is staggered by index so the flower opens in sequence.
  const petalAngles = [0, 72, 144, 216, 288]

  // Sparkles sit in the gaps BETWEEN petals (36° offset from petal angles),
  // at radius 78 from center (150,150). Each pops with its own delay.
  const sparkles = [
    { angle: 36,  size: 6, delay: "1.1s"  },
    { angle: 108, size: 7, delay: "1.25s" },
    { angle: 180, size: 5, delay: "1.4s"  },
    { angle: 252, size: 7, delay: "1.15s" },
    { angle: 324, size: 6, delay: "1.3s"  },
    // A couple of farther-out twinklers for extra delight
    { angle: 12,  size: 4, delay: "1.5s", radius: 122 },
    { angle: 196, size: 4, delay: "1.45s", radius: 120 },
  ].map((s) => {
    const radius = s.radius ?? 78
    const rad = (s.angle * Math.PI) / 180
    return {
      cx: 150 + radius * Math.sin(rad),
      cy: 150 - radius * Math.cos(rad),
      size: s.size,
      delay: s.delay,
    }
  })

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Nails Villa"
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-background transition-opacity duration-500",
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary/8 via-accent/10 to-transparent blur-3xl" />

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* ============ THE ARTWORK ============ */}
        <div className="relative h-60 w-60 sm:h-72 sm:w-72">
          <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-full w-full"
          >
            <defs>
              {/* Petal gradient — top is bright accent, base is deep primary */}
              <linearGradient id="petalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%"   stopColor="hsl(274 48% 42%)" />
                <stop offset="55%"  stopColor="hsl(310 60% 58%)" />
                <stop offset="100%" stopColor="hsl(340 78% 72%)" />
              </linearGradient>

              {/* Jewel gradient — faceted center with white core */}
              <radialGradient id="jewelGrad" cx="40%" cy="40%">
                <stop offset="0%"   stopColor="white" />
                <stop offset="35%"  stopColor="hsl(310 80% 88%)" />
                <stop offset="80%"  stopColor="hsl(274 60% 55%)" />
                <stop offset="100%" stopColor="hsl(274 48% 35%)" />
              </radialGradient>

              {/* Subtle aura behind the whole flower */}
              <radialGradient id="auraGrad">
                <stop offset="0%"  stopColor="hsl(310 70% 88%)" stopOpacity="0.75" />
                <stop offset="55%" stopColor="hsl(274 48% 70%)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(274 48% 48%)" stopOpacity="0" />
              </radialGradient>

              {/* Sparkle gradient */}
              <radialGradient id="sparkleGrad">
                <stop offset="0%"  stopColor="white" />
                <stop offset="55%" stopColor="hsl(340 75% 75%)" />
                <stop offset="100%" stopColor="hsl(310 60% 58%)" stopOpacity="0.5" />
              </radialGradient>

              {/* Dashed orbit ring */}
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="hsl(310 50% 80%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(274 50% 70%)" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* === Soft aura behind the flower === */}
            <circle
              cx="150" cy="150" r="135"
              fill="url(#auraGrad)"
              className="loader-aura"
            />

            {/* === Decorative orbit ring === */}
            <circle
              cx="150" cy="150" r="112"
              fill="none"
              stroke="url(#orbitGrad)"
              strokeWidth="1"
              strokeDasharray="2 5"
              opacity="0.55"
            />

            {/* === The flower — slow gentle rotation on the whole group === */}
            <g className="loader-flower-spin">
              {/* === PETALS === */}
              {petalAngles.map((angle, i) => (
                <g
                  key={i}
                  transform={`translate(150, 150) rotate(${angle})`}
                >
                  <g
                    className="loader-petal"
                    style={{ animationDelay: `${i * 0.09}s` }}
                  >
                    {/* Petal body — nail-tip silhouette pointing outward */}
                    <path
                      d="M -14,-18 Q -19,-55 -10,-92 Q 0,-110 10,-92 Q 19,-55 14,-18 Q 0,-10 -14,-18 Z"
                      fill="url(#petalGrad)"
                    />
                    {/* Inner highlight — gives the petal a glossy sheen */}
                    <path
                      d="M -3,-32 Q 4,-60 2,-90"
                      stroke="white"
                      strokeWidth="1.8"
                      fill="none"
                      opacity="0.5"
                      strokeLinecap="round"
                    />
                    {/* Petal tip glint */}
                    <circle cx="0" cy="-100" r="2.5" fill="white" opacity="0.85" />
                  </g>
                </g>
              ))}
            </g>

            {/* === CENTER JEWEL — faceted gem with white highlight === */}
            <g className="loader-jewel">
              {/* Outer halo */}
              <circle cx="150" cy="150" r="18" fill="white" opacity="0.35" />
              {/* Jewel body */}
              <circle cx="150" cy="150" r="13" fill="url(#jewelGrad)" />
              {/* Faceted top-left highlight */}
              <ellipse cx="146" cy="146" rx="4" ry="3" fill="white" opacity="0.8" />
              {/* Tiny inner sparkle */}
              <circle cx="144" cy="144" r="1.2" fill="white" />
            </g>

            {/* === SPARKLES — bloom in the gaps between petals ===
                Outer <g> positions, inner <g> animates — keeps SVG transform
                and CSS animation transform from clashing. */}
            {sparkles.map((s, i) => (
              <g key={i} transform={`translate(${s.cx}, ${s.cy})`}>
                <g
                  className="loader-sparkle"
                  style={{ animationDelay: s.delay }}
                >
                  {/* 4-pointed sparkle star */}
                  <path
                    d={`M 0,-${s.size} L ${s.size * 0.28},-${s.size * 0.28} L ${s.size},0 L ${s.size * 0.28},${s.size * 0.28} L 0,${s.size} L -${s.size * 0.28},${s.size * 0.28} L -${s.size},0 L -${s.size * 0.28},-${s.size * 0.28} Z`}
                    fill="url(#sparkleGrad)"
                  />
                  <circle cx="0" cy="0" r={s.size * 0.2} fill="white" opacity="0.9" />
                </g>
              </g>
            ))}
          </svg>
        </div>

        {/* ============ WORDMARK ============ */}
        <div className="loader-rise -mt-2">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.42em] text-primary/70">
            Welcome to
          </p>
          <h1 className="font-display text-4xl font-bold leading-none sm:text-5xl">
            <span className="bg-linear-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
              Nails Villa
            </span>
          </h1>
          <div className="mt-2 flex flex-col items-center">
            <p className="font-cursive text-3xl text-primary sm:text-4xl">
              by Rutika
            </p>
            {/* Calligraphic flourish — draws itself like a handwritten signature */}
            <svg
              viewBox="0 0 180 22"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="-mt-1 h-3 w-36 sm:w-44"
            >
              <defs>
                <linearGradient id="flourishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="hsl(274 48% 50%)" />
                  <stop offset="100%" stopColor="hsl(340 75% 65%)" />
                </linearGradient>
              </defs>
              <path
                d="M 8,12 Q 38,4 78,12 Q 110,18 138,8 Q 158,4 172,12"
                fill="none"
                stroke="url(#flourishGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                className="loader-flourish"
              />
            </svg>
          </div>
        </div>

        {/* ============ TAGLINE ============ */}
        <p className="loader-rise mt-4 max-w-xs text-sm text-muted-foreground" style={{ animationDelay: "0.15s" }}>
          Crafting beauty, one nail at a time…
        </p>

        {/* ============ PROGRESS BAR ============ */}
        <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-primary/10">
          <div className="loader-progress-bar h-full w-full rounded-full bg-linear-to-r from-primary via-purple-500 to-accent" />
        </div>
      </div>
    </div>
  )
}
