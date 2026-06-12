"use client"

import Image from "next/image"
import { Button } from "@/components/common/Button"
import {
  ArrowRight,
  Sparkles,
  Ruler,
  Paintbrush,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Clock,
  Heart,
  Star,
} from "lucide-react"
import { pressOnPhotos } from "@/lib/photos"

const steps = [
  {
    num: "01",
    icon: Ruler,
    title: "Share your size kit",
    body: "Rutika sends you a sizing guide. You pick your fit from home — no appointment needed for this step.",
  },
  {
    num: "02",
    icon: Paintbrush,
    title: "Choose your design",
    body: "Send a reference, pick a colour palette, or describe your vibe. Each set is hand-painted to order.",
  },
  {
    num: "03",
    icon: PackageCheck,
    title: "Receive your set",
    body: "Your custom press-on set arrives ready to wear. Glue and application guide included.",
  },
  {
    num: "04",
    icon: RefreshCw,
    title: "Reuse & reorder",
    body: "Remove gently, clean, and wear again. Most sets last 3–5 wears. Reorder the same design anytime.",
  },
]

const features = [
  { icon: ShieldCheck, label: "Zero nail damage" },
  { icon: Clock, label: "Ready in minutes" },
  { icon: Heart, label: "Custom-fitted" },
  { icon: Star, label: "Reusable sets" },
  { icon: Sparkles, label: "Hand-painted art" },
  { icon: RefreshCw, label: "Easy removal" },
]

export function PressOnNails() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="press-on-nails"
      className="relative overflow-hidden py-16 sm:py-20 xl:py-24 bg-muted"
    >
      {/* Ambient glows */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">

        {/* — Header — */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Custom to order</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">
            Press-On <span className="text-primary">Nails</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Salon-quality nail art without the salon visit. Each set is custom-sized,
            hand-painted by Rutika, and designed to last — then wear again.
          </p>
        </div>

        {/* — Feature pills — */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur"
            >
              <Icon className="h-4 w-4 text-primary shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* — How it works — */}
        <div className="mb-14">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            How it works
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map(({ num, icon: Icon, title, body }) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute right-4 top-4 font-display text-4xl font-bold text-primary/8">
                  {num}
                </div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* — Photo strip — */}
        <div className="mb-14">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Press-on styles
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {pressOnPhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/60 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>

        {/* — Pricing + CTA card — */}
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-foreground via-purple-900 to-primary text-white shadow-2xl shadow-primary/25">
          {/* decorative blobs */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/8 blur-3xl pointer-events-none" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center xl:p-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-medium backdrop-blur">
                <Sparkles className="h-4 w-4 text-[#ffd8ef]" />
                Starting at ₹399
              </div>
              <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl mb-4">
                Ready to wear your{" "}
                <span className="text-[#ffd8ef]">dream set?</span>
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
                Share your size and inspo. Rutika will paint a set custom-made
                for your nails — ready for your next event, vacation, or everyday glam.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
                {[
                  "Glue & guide included",
                  "Ships across India",
                  "Custom art on request",
                ].map((note) => (
                  <span
                    key={note}
                    className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 backdrop-blur"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#ffd8ef]" />
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group rounded-full bg-white px-7 py-5 text-base text-foreground shadow-xl shadow-black/20 hover:bg-white hover:text-primary hover:opacity-100"
              >
                Order your set
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-xs text-white/50 lg:text-right">
                Prior booking required · WhatsApp orders
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
