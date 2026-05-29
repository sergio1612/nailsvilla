"use client"

import Image from "next/image"
import {
  Award,
  CalendarDays,
  Heart,
  Home,
  MapPin,
  Sparkles,
} from "lucide-react"
import { aboutArtistPhoto } from "@/lib/photos"

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Owner-led care",
      description:
        "Rutika personally guides each appointment, from design choice to final finish.",
    },
    {
      icon: Award,
      title: "Built since 2021",
      description:
        "Started 10 April 2021 and shaped by real client preferences and references.",
    },
    {
      icon: Home,
      title: "Your choice of setup",
      description:
        "Visit Rutika's home studio or request a home visit anywhere in Ahmedabad.",
    },
  ]

  const facts = [
    { icon: CalendarDays, label: "Founded", value: "10 April 2021" },
    { icon: MapPin, label: "Location", value: "Ahmedabad, IN" },
    { icon: Home, label: "Format", value: "Home Studio + Visits" },
  ]

  return (
    <section
      id="about"
      className="relative flex min-h-svh items-center overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      {/* Soft ambient glows */}
      <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 hidden lg:block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section eyebrow */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em]">
              About the Studio
            </span>
          </div>
        </div>

        {/* SINGLE UNIFIED CARD — everything lives inside */}
        <div className="luxury-surface relative mx-auto max-w-6xl overflow-hidden rounded-4xl border border-white/70">
          {/* Decorative inner glows */}
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div>

          {/* TOP — Portrait + Editorial letter */}
          <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 xl:p-12">
            {/* Portrait */}
            <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center md:order-1 xl:max-w-[320px]">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-accent/45 via-primary/25 to-transparent blur-2xl"></div>
              <div className="absolute -inset-3 rounded-full border border-primary/15"></div>
              <div className="absolute -inset-6 rounded-full border border-primary/8"></div>
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-[6px] border-white shadow-2xl shadow-primary/25">
                <Image
                  src={aboutArtistPhoto}
                  alt="Rutika Chauhan, founder of NailsVilla"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="340px"
                />
              </div>
              {/* "Since 2021" badge */}
              <div className="absolute -bottom-2 -right-2 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/35">
                <div className="text-center leading-tight">
                  <p className="text-[9px] tracking-[0.22em] uppercase opacity-75">
                    Since
                  </p>
                  <p className="font-display text-xl font-bold">2021</p>
                </div>
              </div>
            </div>

            {/* Letter content */}
            <div className="text-center md:order-2 md:text-left">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
                Meet{" "}
                <span className="font-cursive text-6xl text-primary sm:text-7xl xl:text-8xl">
                  Rutika
                </span>
              </h2>

              {/* Ornament divider */}
              <div className="my-5 flex items-center justify-center gap-3 md:justify-start">
                <span className="h-px w-10 bg-primary/30"></span>
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="h-px w-10 bg-primary/30"></span>
              </div>

              <div className="space-y-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  My name is{" "}
                  <span className="font-cursive text-3xl text-primary sm:text-4xl">
                    Rutika
                  </span>
                  , and I&apos;m the founder and certified nail artist
                  behind NailsVilla — a home-based studio dedicated to creating
                  beautiful, lasting nail designs that enhance your style and
                  confidence.
                </p>
                <p>
                  I specialize in classic manicures, gel extensions, and custom
                  nail art tailored to your reference, outfit, and lifestyle.
                  Whether you&apos;re new to nail enhancements or a dedicated
                  client, I&apos;m here to make your experience elegant,
                  seamless, and stunning.
                </p>
                <p className="italic text-foreground/70">
                  Thank you for visiting — I can&apos;t wait to design your
                  perfect set.
                </p>
              </div>

              <p className="mt-5">
                <span className="font-display italic text-foreground/55 mr-1">xo,</span>
                <span className="font-cursive text-5xl text-primary sm:text-6xl">
                  Rutika
                </span>
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="relative px-8 sm:px-12 lg:px-16">
            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>

          {/* MIDDLE — Features (the why) */}
          <div className="relative grid gap-px bg-primary/10 sm:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="relative bg-white/48 p-5 backdrop-blur transition-colors hover:bg-white/70 sm:p-6"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <p className="absolute right-5 top-5 font-display text-2xl font-bold text-primary/12">
                    0{index + 1}
                  </p>
                </div>
              )
            })}
          </div>

          {/* DIVIDER */}
          <div className="relative px-8 sm:px-12 lg:px-16">
            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>

          {/* BOTTOM — Facts strip */}
          <div className="relative grid gap-px bg-primary/10 sm:grid-cols-3">
            {facts.map((fact) => {
              const Icon = fact.icon
              return (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 bg-white/38 p-5 backdrop-blur sm:justify-center sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-0.5 font-display text-sm font-semibold text-foreground sm:text-base">
                      {fact.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
