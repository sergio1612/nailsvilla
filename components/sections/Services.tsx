"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/Card"
import { Sparkles, Heart, Palette, Gem, CheckCircle2 } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Gel Polish",
      description:
        "High-shine gel colour for a clean, fresh, long-lasting finish.",
      features: ["Nail Prep", "Smooth Colour", "Gloss Finish", "Everyday Chic"],
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&h=520&fit=crop&q=85",
    },
    {
      icon: Heart,
      title: "Extensions",
      description:
        "Temporary and permanent extensions shaped to your style and comfort.",
      features: ["Custom Length", "Natural Shape", "Event Ready", "Refill Friendly"],
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=700&h=520&fit=crop&q=85",
    },
    {
      icon: Palette,
      title: "Nail Art",
      description:
        "Minimal, glam, bridal, or playful designs made around your inspiration.",
      features: ["Custom Designs", "Wedding Glitters", "Vacation Vibes", "Birthday Glam"],
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&h=520&fit=crop&q=85",
    },
    {
      icon: Gem,
      title: "Overlays & Care",
      description:
        "Overlay, refill, and removal services to keep nails healthy and polished.",
      features: ["Gel Overlays", "Refilling", "Gentle Removal", "Aftercare Guidance"],
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=700&h=520&fit=crop&q=85",
    },
  ]

  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-20 xl:py-24 bg-muted">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the finish you need: colour, length, strength, art, refill,
            or safe removal. Each service is kept focused and easy to understand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden group rounded-3xl border-white/70 bg-white/75 backdrop-blur"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-display">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

