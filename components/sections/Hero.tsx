"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/common/Button"
import { Home, Sparkles, Star } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&h=900&fit=crop&q=85",
      alt: "Glossy gel polish nail finish",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=700&h=900&fit=crop&q=85",
      alt: "Detailed nail art service",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=700&h=900&fit=crop&q=85",
      alt: "Elegant manicure and nail care",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=700&h=900&fit=crop&q=85",
      alt: "Clean nail extension look",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-112 w-md rounded-full bg-accent/25 blur-3xl"></div>
        <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full border border-primary/15"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80"
          alt="Nail art background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-primary shadow-sm backdrop-blur mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Home-based Ahmedabad nail artist since 2021</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display text-balance">
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Nails that make
              </span>
              <br />
              <span className="text-foreground">people notice</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Rutika Chauhan creates glossy gel polish, elegant extensions,
              overlays, refills, and removals from home, with home service
              available across Ahmedabad on request.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={scrollToContact} className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-xl shadow-primary/20">
                Book Your Nail Glow-Up
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("pricing")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-white/60 backdrop-blur"
              >
                View Price List
              </Button>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Founded on 10 April 2021</span>
              </div>
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur">
                <Home className="h-4 w-4 text-primary" />
                Home-based + home service
              </div>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="max-w-md mx-auto lg:max-w-lg w-full">
            <div className="relative rounded-4xl overflow-hidden border border-white/70 bg-white/40 p-3 shadow-2xl shadow-primary/15 backdrop-blur">
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
                      className="object-cover rounded-3xl"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-20 rounded-2xl bg-white/82 p-4 text-left shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  New price list
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  Gel polish starts at ₹499
                </p>
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

