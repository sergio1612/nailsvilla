"use client"

import Image from "next/image"
import { Heart, Award, Users, Sparkles } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description:
        "We pour our heart into every nail design, ensuring each client leaves feeling beautiful and confident.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Using only the finest products and techniques to deliver long-lasting, stunning results.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your satisfaction is our priority. We listen, understand, and create designs that reflect your unique style.",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                alt="Nail artist at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
              About <span className="text-primary">NailsVilla by Rutika</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to NailsVilla by Rutika, where artistry meets elegance. We are
              dedicated to providing exceptional nail care services that enhance
              your natural beauty. With years of experience and a passion for
              perfection, we create stunning nail designs that make you feel
              confident and beautiful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rutika brings her artistic vision and attention to detail to every
              appointment, ensuring that each client receives personalized care
              and leaves with nails that are not just beautiful, but a true
              reflection of their style.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-display">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

