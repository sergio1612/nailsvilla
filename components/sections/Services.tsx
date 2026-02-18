"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/Card"
import { Sparkles, Heart, Palette, Gem, CheckCircle2 } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Manicure",
      description:
        "Classic and gel manicures to keep your nails looking polished and healthy.",
      features: ["Cuticle Care", "Nail Shaping", "Polish Application", "Hand Massage"],
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    },
    {
      icon: Heart,
      title: "Pedicure",
      description:
        "Relaxing pedicures that pamper your feet and leave them feeling refreshed.",
      features: ["Foot Soak", "Exfoliation", "Nail Care", "Moisturizing"],
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    },
    {
      icon: Palette,
      title: "Nail Art",
      description:
        "Creative and custom nail art designs to express your unique personality.",
      features: ["Custom Designs", "3D Art", "Gradient Nails", "Stamping"],
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    },
    {
      icon: Gem,
      title: "Gel Extensions",
      description:
        "Long-lasting gel extensions for beautiful, durable nails that last weeks.",
      features: ["Natural Look", "Durable", "Custom Length", "Easy Maintenance"],
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c7e9d3a?w=600&q=80",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium nail care services designed to make
            you look and feel amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/90 text-primary-foreground backdrop-blur-sm">
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
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
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

