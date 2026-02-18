"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/common/Button"
import { Sparkles, Star } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=800&fit=crop&q=80",
      alt: "Nail art design 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop&q=80",
      alt: "Nail art design 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop&q=80",
      alt: "Nail art design 3 by Rutika",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1608248543803-ba4f8c7e9d3a?w=600&h=800&fit=crop&q=80",
      alt: "Nail art design 4",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-accent overflow-hidden pt-20 sm:pt-0"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1920&q=80"
          alt="Nail art background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Premium Nail Artistry by Rutika</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Beautiful Nails,
              </span>
              <br />
              <span className="text-foreground">Beautiful You</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your nails into works of art. Experience premium nail care
              services tailored to your style and personality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={scrollToContact} className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("services")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                View Services
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 from 200+ clients</span>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="max-w-md mx-auto lg:max-w-lg w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[450px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover rounded-2xl"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-primary"
                        : "w-2 bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

