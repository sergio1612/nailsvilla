"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Calendar, Instagram, Heart } from "lucide-react"

export function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
    { icon: Calendar, value: 5, suffix: "+", label: "Years of Practice" },
    { icon: Heart, value: 8, suffix: "+", label: "Core Services" },
    { icon: Instagram, value: 700, suffix: "+", label: "Instagram Family" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) setHasAnimated(true)
        })
      },
      { threshold: 0.3 }
    )
    const section = sectionRef.current
    if (section) observer.observe(section)
    return () => {
      if (section) observer.unobserve(section)
    }
  }, [hasAnimated])

  return (
    <section ref={sectionRef} id="stats" className="relative bg-espresso py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <StatCounter
                key={index}
                icon={Icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                hasAnimated={hasAnimated}
                delay={index * 200}
                isLast={index === stats.length - 1}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

interface StatCounterProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  value: number
  suffix: string
  label: string
  hasAnimated: boolean
  delay: number
  isLast: boolean
}

function StatCounter({
  icon: Icon,
  value,
  suffix,
  label,
  hasAnimated,
  delay,
  isLast,
}: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!hasAnimated) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps
    let currentStep = 0
    let intervalId: NodeJS.Timeout | null = null
    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        currentStep++
        const next = Math.min(Math.floor(increment * currentStep), value)
        setCount(next)
        if (currentStep >= steps || next >= value) {
          setCount(value)
          if (intervalId) clearInterval(intervalId)
        }
      }, stepDuration)
    }, delay)
    return () => {
      clearTimeout(timer)
      if (intervalId) clearInterval(intervalId)
    }
  }, [hasAnimated, value, delay])

  return (
    <div
      className={`flex flex-col items-center justify-center text-center px-6 py-10 lg:py-12 ${
        !isLast ? "lg:border-r border-ivory/10" : ""
      } ${"border-ivory/10"}`}
    >
      <Icon
        className="h-7 w-7 text-champagne/80 mb-4"
        strokeWidth={1.3}
      />
      <div className="flex items-baseline gap-0.5">
        <span className="font-display text-5xl sm:text-6xl font-light text-ivory tracking-tight">
          {count}
        </span>
        <span className="font-display text-3xl font-light text-champagne">
          {suffix}
        </span>
      </div>
      <p className="mt-3 section-eyebrow text-ivory/60">{label}</p>
    </div>
  )
}
