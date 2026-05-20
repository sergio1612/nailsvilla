"use client"

import Image from "next/image"
import { Sparkles, Heart, Palette, Gem, ArrowUpRight } from "lucide-react"

export function Services() {
  const services = [
    {
      number: "01",
      icon: Sparkles,
      title: "Gel Polish",
      description:
        "High-shine gel colour with a clean, fresh, long-lasting finish for everyday wear.",
      features: ["Nail prep & shaping", "Smooth colour application", "Glossy top coat", "2–3 week wear"],
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop&q=85",
    },
    {
      number: "02",
      icon: Heart,
      title: "Extensions",
      description:
        "Temporary and permanent extensions sculpted to your preferred length and shape.",
      features: ["Custom length", "Natural-looking shape", "Event ready", "Refill compatible"],
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=600&fit=crop&q=85",
    },
    {
      number: "03",
      icon: Palette,
      title: "Custom Nail Art",
      description:
        "Minimal, bridal, glam, or playful designs crafted around your reference.",
      features: ["Bespoke designs", "Chrome & holo", "Glitter accents", "Statement sets"],
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&h=600&fit=crop&q=85",
    },
    {
      number: "04",
      icon: Gem,
      title: "Overlays & Care",
      description:
        "Gentle overlays, refills, and removal — keeping your natural nails healthy and polished.",
      features: ["Gel overlays", "Refill service", "Safe removal", "Aftercare guidance"],
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&h=600&fit=crop&q=85",
    },
  ]

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <p className="section-eyebrow text-mocha/70 mb-4">
            ✦ &nbsp; The Menu &nbsp; ✦
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-foreground">
            Services with an{" "}
            <span className="font-serif italic">editorial</span> finish
          </h2>
          <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/65 italic">
            Choose the finish you want — colour, length, art, or care. Every
            appointment is kept focused, calm, and clear.
          </p>
        </div>

        {/* Services grid — editorial layout */}
        <div className="mx-auto max-w-6xl space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const reversed = index % 2 === 1
            return (
              <div
                key={service.number}
                className={`group grid items-center gap-0 overflow-hidden rounded-[2rem] border border-taupe/15 bg-cream elegant-shadow transition-all duration-500 hover:-translate-y-1 md:grid-cols-2 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream/95 backdrop-blur">
                    <Icon className="h-5 w-5 text-mocha" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-12">
                  <p className="font-display text-7xl font-light text-mocha/15 leading-none">
                    {service.number}
                  </p>
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 font-serif text-lg leading-relaxed text-foreground/70">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/65"
                      >
                        <span className="h-1 w-1 rounded-full bg-mocha"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] uppercase text-foreground/75 border-b border-foreground/25 pb-1 transition-all hover:text-foreground hover:border-foreground hover:gap-3"
                  >
                    Enquire about this service
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
