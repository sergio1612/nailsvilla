"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Star,
  Instagram,
  ChevronDown,
} from "lucide-react"

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1800&h=1200&fit=crop&q=90",
      alt: "Glossy gel polish nail finish",
      caption: "Gel Polish",
    },
    {
      src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=1800&h=1200&fit=crop&q=90",
      alt: "Custom nail art",
      caption: "Custom Nail Art",
    },
    {
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1800&h=1200&fit=crop&q=90",
      alt: "Elegant manicure",
      caption: "Extensions",
    },
    {
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1800&h=1200&fit=crop&q=90",
      alt: "Premium nail set",
      caption: "Soft Glam",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="relative isolate flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden"
    >
      {/* Full-bleed image stack */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.caption}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover scale-105"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark overlays for legibility */}
      <div className="absolute inset-0 -z-10 bg-espresso/55"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/80"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/30 via-transparent to-espresso/30"></div>

      {/* Top utility bar inside the hero */}
      <div className="relative z-10 hidden pt-24 md:block lg:pt-28 shrink-0">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-ivory/65">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60"></span>
              <span>Vol. 01 &nbsp;·&nbsp; Est. 10 April 2021</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-sparkle"></span>
              Now booking — April / May
            </div>
          </div>
        </div>
      </div>

      {/* Main content — centered, takes remaining space */}
      <div className="relative z-10 flex flex-1 items-center justify-center min-h-0 px-6 pt-24 pb-24 md:pt-6 md:pb-20 lg:px-10">
        <div className="container mx-auto text-center">
          <p className="section-eyebrow text-[10px] text-champagne/85 animate-fade-up">
            ✦ &nbsp; Welcome to &nbsp; ✦
          </p>

          <h1 className="mt-4 font-display font-light leading-[0.85] tracking-tight text-ivory animate-fade-up">
            <span className="block text-[clamp(3.5rem,11vw,7rem)]">
              Nails
            </span>
            <span className="block text-[clamp(3.5rem,11vw,7rem)] font-serif italic">
              Villa
            </span>
          </h1>

          <p className="artist-signature mt-2 text-[clamp(2.5rem,6vw,4rem)] text-champagne animate-fade-up">
            by Rutika
          </p>

          {/* Ornament divider */}
          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-champagne/50"></span>
            <span className="text-champagne text-[10px]">✦</span>
            <span className="h-px w-10 bg-champagne/50"></span>
          </div>

          {/* Tagline */}
          <p className="mx-auto max-w-xl font-serif text-base sm:text-lg leading-relaxed text-ivory/85 italic text-balance">
            A home-based luxury nail studio in Ahmedabad — bespoke gel,
            extensions, and editorial nail art.
          </p>

          {/* Meta strip */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] tracking-[0.22em] uppercase text-ivory/65">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-2.5 w-2.5 fill-champagne text-champagne"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span>500+ Clients</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-ivory/40"></span>
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="h-2.5 w-2.5" strokeWidth={1.5} />
              Ahmedabad
            </div>
            <span className="h-1 w-1 rounded-full bg-ivory/40"></span>
            <a
              href="https://instagram.com/nailsvilla__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-champagne transition-colors"
            >
              <Instagram className="h-2.5 w-2.5" strokeWidth={1.5} />
              @nailsvilla__
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase text-espresso transition-all hover:bg-champagne hover:gap-3"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Book Appointment
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 bg-transparent px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase text-ivory transition-all hover:bg-ivory/10"
            >
              View Price List
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar — slide caption + thumbnails + scroll indicator */}
      <div className="relative z-10 pb-5 sm:pb-6 shrink-0">
        <div className="container mx-auto px-6 lg:px-10">
          {/* Slide thumbnails */}
          <div className="hidden lg:flex items-end justify-between gap-6">
            {/* Caption */}
            <div className="text-ivory">
              <p className="section-eyebrow text-champagne/70 text-[9px] mb-1">
                Now featuring
              </p>
              <p className="font-display text-lg font-light">
                {slides[currentImage].caption}
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-ivory/55 mt-0.5">
                0{currentImage + 1} &nbsp;/&nbsp; 0{slides.length}
              </p>
            </div>

            {/* Thumbnail nav */}
            <div className="flex gap-2.5">
              {slides.map((slide, idx) => (
                <button
                  key={slide.caption}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative h-14 w-11 overflow-hidden rounded-lg border transition-all ${
                    idx === currentImage
                      ? "border-champagne scale-110"
                      : "border-ivory/20 opacity-50 hover:opacity-90"
                  }`}
                  aria-label={`Show ${slide.caption}`}
                >
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>

            {/* Scroll cue */}
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-1 text-ivory/65 transition-colors hover:text-ivory"
              aria-label="Scroll to about"
            >
              <span className="text-[9px] tracking-[0.28em] uppercase">
                Discover
              </span>
              <ChevronDown
                className="h-3.5 w-3.5 animate-bottle-bounce"
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Mobile compact bar */}
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <p className="font-display text-sm font-light text-ivory">
              {slides[currentImage].caption}
            </p>
            <div className="flex gap-1.5">
              {slides.map((slide, idx) => (
                <button
                  key={slide.caption}
                  onClick={() => setCurrentImage(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === currentImage
                      ? "w-6 bg-ivory"
                      : "w-1.5 bg-ivory/40"
                  }`}
                  aria-label={`Show ${slide.caption}`}
                />
              ))}
            </div>
            <button
              onClick={scrollToAbout}
              className="text-ivory/65 transition-colors hover:text-ivory"
              aria-label="Scroll to about"
            >
              <ChevronDown
                className="h-4 w-4 animate-bottle-bounce"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
