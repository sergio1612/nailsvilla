"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Calendar, Instagram } from "lucide-react"

export function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Happy Nail Clients",
      color: "text-primary",
    },
    {
      icon: Calendar,
      value: 8,
      suffix: "+",
      label: "Core Nail Services",
      color: "text-accent",
    },
    {
      icon: Instagram,
      value: 700,
      suffix: "+",
      label: "Instagram Family",
      color: "text-primary",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    )

    const section = sectionRef.current

    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [hasAnimated])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-16 sm:py-20 xl:py-24 bg-linear-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <StatCounter
                key={index}
                icon={Icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                color={stat.color}
                hasAnimated={hasAnimated}
                delay={index * 200} // Stagger animation
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

interface StatCounterProps {
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  color: string
  hasAnimated: boolean
  delay: number
}

function StatCounter({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  hasAnimated,
  delay,
}: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!hasAnimated) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let currentStep = 0
    let intervalId: NodeJS.Timeout | null = null

    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        currentStep++
        const nextValue = Math.min(
          Math.floor(increment * currentStep),
          value
        )
        setCount(nextValue)

        if (currentStep >= steps || nextValue >= value) {
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
    <div className="text-center p-6 rounded-3xl bg-white/75 border border-white/70 backdrop-blur hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 ${color} mb-5`}>
        <Icon className="h-7 w-7" />
      </div>
      <div className="mb-3 flex items-baseline justify-center gap-1">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary leading-none">
          {suffix}
        </span>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground font-medium">
        {label}
      </p>
    </div>
  )
}

