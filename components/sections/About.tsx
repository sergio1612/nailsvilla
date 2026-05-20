"use client"

import Image from "next/image"
import { Award, CalendarDays, Heart, Home, MapPin, Sparkles } from "lucide-react"

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
        "Started 10 April 2021 and shaped through real client preferences and references.",
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
      className="relative overflow-hidden bg-cream py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-champagne/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-taupe/15 blur-3xl"></div>

      <div className="container relative mx-auto px-6 lg:px-10">
        {/* Editorial card — Meet Rutika */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative grid items-center gap-10 rounded-[2.5rem] border border-taupe/15 bg-ivory/60 p-8 sm:p-12 lg:p-16 backdrop-blur md:grid-cols-[1.2fr_1fr] elegant-shadow">
            {/* Text */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="section-eyebrow text-mocha/70 mb-3">
                ✦ &nbsp; Meet the artist &nbsp; ✦
              </p>

              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-foreground">
                Meet{" "}
                <span className="artist-signature text-7xl sm:text-8xl lg:text-9xl text-mocha block sm:inline">
                  Rutika
                </span>
              </h2>

              <div className="my-8 divider-ornament">
                <Sparkles className="h-4 w-4" />
              </div>

              <div className="space-y-5 font-serif text-lg sm:text-xl leading-relaxed text-foreground/75 text-pretty">
                <p>
                  My name is{" "}
                  <span className="artist-signature text-3xl text-mocha not-italic">
                    Rutika
                  </span>
                  , and I&apos;m the founder and certified nail technician behind
                  Nails Villa — a home-based studio dedicated to creating
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
                <p className="italic text-foreground/65">
                  Thank you for visiting — I can&apos;t wait to design your
                  perfect set.
                </p>
              </div>

              <div className="mt-8 text-center md:text-left">
                <p className="artist-signature text-5xl sm:text-6xl text-mocha">
                  xo, Rutika
                </p>
              </div>
            </div>

            {/* Portrait */}
            <div className="order-1 md:order-2 relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-champagne/40 to-transparent blur-2xl"></div>
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-[6px] border-ivory shadow-2xl shadow-mocha/20">
                <Image
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop&q=85"
                  alt="Rutika Chauhan, founder of Nails Villa"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-3 -right-3 flex h-24 w-24 items-center justify-center rounded-full bg-espresso text-ivory shadow-xl rotate-12">
                <div className="text-center leading-tight">
                  <p className="text-[9px] tracking-[0.2em] uppercase opacity-70">
                    Since
                  </p>
                  <p className="font-display text-2xl font-medium">2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facts strip */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-taupe/15 bg-taupe/15 sm:grid-cols-3">
            {facts.map((fact) => {
              const Icon = fact.icon
              return (
                <div
                  key={fact.label}
                  className="flex items-center gap-4 bg-cream p-6 sm:flex-col sm:gap-3 sm:text-center"
                >
                  <Icon className="h-6 w-6 text-mocha shrink-0" strokeWidth={1.4} />
                  <div className="sm:text-center">
                    <p className="section-eyebrow text-foreground/55">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-serif text-lg text-foreground">
                      {fact.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-taupe/15 bg-ivory/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:elegant-shadow"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-ivory">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 font-serif text-base leading-relaxed text-foreground/65">
                  {feature.description}
                </p>
                <p className="absolute right-6 top-6 font-display text-3xl font-light text-mocha/15">
                  0{index + 1}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
