"use client"

import Image from "next/image"
import { Award, CalendarDays, Heart, Home, MapPin, Sparkles } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Owner-Led Care",
      description:
        "Rutika personally guides each appointment, from design choice to final finish.",
    },
    {
      icon: Award,
      title: "Built Over Time",
      description:
        "Started on 10 April 2021 and shaped through real client preferences.",
    },
    {
      icon: Home,
      title: "Appointment Choice",
      description:
        "Choose Rutika's home setup or ask for a home visit when available.",
    },
  ]

  const facts = [
    { icon: CalendarDays, label: "Founded", value: "10 April 2021" },
    { icon: MapPin, label: "Location", value: "Ahmedabad" },
    { icon: Home, label: "Model", value: "Home-based + home service" },
  ]

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-background">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div className="relative order-2 mx-auto w-full max-w-xl lg:order-1">
            <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/70 p-3 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="relative h-[300px] overflow-hidden rounded-3xl sm:h-[360px] lg:h-[420px] xl:h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&h=1100&fit=crop&q=85"
                  alt="Home-based nail service setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2a171d]/55 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/88 p-4 shadow-2xl backdrop-blur sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Founder-led
                </p>
                <h3 className="mt-2 text-xl font-bold font-display text-foreground sm:text-2xl">
                  Nails Villa by Rutika
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Home-based nail services in Ahmedabad with home visits on request.
                </p>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 hidden rounded-3xl bg-primary px-5 py-4 text-primary-foreground shadow-xl shadow-primary/20 sm:block">
              <p className="text-xs uppercase tracking-[0.25em] opacity-80">Since</p>
              <p className="text-2xl font-bold font-display">2021</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">About Nails Villa by Rutika</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 font-display text-balance">
              A home-grown nail brand owned by <span className="text-primary">Rutika Chauhan</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
              Nails Villa by Rutika began on 10 April 2021 as Rutika Chauhan&apos;s
              personal nail practice for clients who wanted neat work, honest
              guidance, and designs that felt wearable.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              There is no physical studio at the moment. Appointments are handled
              from Rutika&apos;s home setup, with home visits available on request
              depending on service, location, and timing.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {facts.map((fact) => {
                const Icon = fact.icon
                return (
                  <div key={fact.label} className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
                    <Icon className="mb-4 h-5 w-5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {fact.value}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/75 border border-white/70 backdrop-blur hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-display">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
