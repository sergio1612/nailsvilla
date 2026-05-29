"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/common/Button"
import { ArrowRight, Sparkles } from "lucide-react"
import { heroSlides } from "@/lib/photos"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = heroSlides

  const serviceHighlights = ["Gel polish", "Extensions", "Custom art", "Press-ons"]

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
      className="relative isolate overflow-hidden px-0 pt-24 pb-10 sm:pt-28 sm:pb-12 xl:pt-24"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-foreground shadow-2xl shadow-primary/15">
          <div className="absolute inset-0 md:hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover opacity-35"
                  priority={index === 0}
                  sizes="92vw"
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 right-0 hidden w-[54%] overflow-hidden md:block md:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="640px"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-foreground/25"></div>
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-foreground via-foreground/92 to-foreground/20"></div>
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/35 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-accent/20 blur-3xl"></div>

          <div className="relative z-10 grid min-h-[430px] items-center md:grid-cols-[1fr_0.9fr] lg:min-h-[460px]">
            <div className="px-5 py-10 text-center text-white sm:px-8 lg:px-12 lg:py-12 lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 shadow-xl backdrop-blur">
                <Sparkles className="h-4 w-4 text-[#ffd8ef]" />
                <span className="text-sm font-medium">Signature nails by Rutika</span>
              </div>

              <h1 className="mb-5 max-w-2xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
                Your nails,
                <span className="block text-[#ffd8ef]">ready for the spotlight</span>
              </h1>

              <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-white/76 sm:text-lg lg:mx-0">
                Polished gel finishes, extensions, and custom nail art designed
                around your event, outfit, and everyday style.
              </p>

              <div className="mb-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                {serviceHighlights.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/16 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group rounded-full bg-white px-6 py-5 text-base text-foreground shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary hover:opacity-100 hover:shadow-2xl hover:shadow-primary/40 sm:px-7"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById("pricing")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="rounded-full border-white/25 bg-white/10 px-6 py-5 text-base text-white backdrop-blur hover:bg-white hover:text-foreground sm:px-7"
                >
                  View Price List
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center gap-2 lg:inset-x-auto lg:right-5 lg:justify-end">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-7 bg-white"
                    : "w-2 bg-white/45 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

