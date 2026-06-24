"use client"

import { useState } from "react"
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
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react"
import { pressOnPhotos, type PressOnPhoto } from "@/lib/photos"
import { scrollToSection } from "@/lib/navigation"

const steps = [
  {
    num: "01",
    icon: Ruler,
    title: "Share your size kit",
    body: "Rutika sends you a sizing guide. You pick your fit from home, no appointment needed for this step.",
  },
  {
    num: "02",
    icon: Paintbrush,
    title: "Choose your design",
    body: "Send a reference, pick a colour palette, or describe your vibe. Each set is hand painted to order.",
  },
  {
    num: "03",
    icon: PackageCheck,
    title: "Receive your set",
    body: "Your custom press on set arrives ready to wear. Glue and application guide included.",
  },
  {
    num: "04",
    icon: RefreshCw,
    title: "Reuse & reorder",
    body: "Remove gently, clean, and wear again. Most sets last 3 to 5 wears. Reorder the same design anytime.",
  },
]

const features = [
  { icon: ShieldCheck, label: "Zero nail damage" },
  { icon: Clock, label: "Ready in minutes" },
  { icon: Heart, label: "Custom fitted" },
  { icon: Star, label: "Reusable sets" },
  { icon: Sparkles, label: "Hand painted art" },
  { icon: RefreshCw, label: "Easy removal" },
]

function PressOnStyleCard({
  photo,
  onOpen,
  layout,
}: {
  photo: PressOnPhoto
  onOpen: () => void
  layout: "carousel" | "grid"
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        layout === "carousel"
          ? "w-[85vw] max-w-sm shrink-0 snap-center"
          : "w-full"
      }`}
    >
      <div className="relative aspect-4/5 overflow-hidden bg-linear-to-br from-primary/5 to-accent/10">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            layout === "carousel"
              ? "85vw"
              : "(max-width: 1024px) 50vw, 33vw"
          }
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
          <ZoomIn className="h-3.5 w-3.5" />
          View detail
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-display text-base font-bold text-white sm:text-lg">
          {photo.title}
        </p>
        <p className="mt-0.5 text-xs text-white/75 sm:text-sm">From ₹399</p>
      </div>
    </button>
  )
}

export function PressOnNails() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const scrollToContact = () => scrollToSection("contact")

  const openModal = (index: number) => setSelectedImage(index)
  const closeModal = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % pressOnPhotos.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? pressOnPhotos.length - 1 : selectedImage - 1
      )
    }
  }

  const orderSelectedStyle = () => {
    closeModal()
    scrollToContact()
  }

  return (
    <>
      <section
        id="press-on-nails"
        className="relative overflow-hidden py-16 sm:py-20 xl:py-24 bg-muted"
      >
        {/* Ambient glows */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">

          {/* — Header — */}
          <div className="mx-auto mb-14 max-w-2xl text-center" data-section-eyebrow>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Peel. Press. Slay.</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">
              Press On <span className="text-primary">Nails</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Salon quality nail art without the salon visit. Each set is custom sized,
              hand painted by Rutika, and designed to last, then wear again.
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

          {/* — Press on styles — */}
          <div className="mb-14">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Press on styles
            </p>
            <p className="mb-6 text-center text-sm text-muted-foreground sm:mb-8">
              Swipe to browse on mobile · Tap any set to view full detail
            </p>

            {/* Mobile carousel */}
            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-none sm:hidden">
              {pressOnPhotos.map((photo, index) => (
                <PressOnStyleCard
                  key={photo.id}
                  photo={photo}
                  layout="carousel"
                  onOpen={() => openModal(index)}
                />
              ))}
            </div>

            {/* Desktop grid */}
            <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {pressOnPhotos.map((photo, index) => (
                <PressOnStyleCard
                  key={photo.id}
                  photo={photo}
                  layout="grid"
                  onOpen={() => openModal(index)}
                />
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
                  Share your size and inspo. Rutika will paint a set custom made
                  for your nails, ready for your next event, vacation, or everyday glam.
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

      {/* Detail lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={closeModal}
              className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-primary"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:text-primary"
            aria-label="Previous style"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:text-primary"
            aria-label="Next style"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="relative flex w-full max-w-4xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/5 max-h-[70vh] w-full sm:aspect-3/4">
              <Image
                src={pressOnPhotos[selectedImage].src}
                alt={pressOnPhotos[selectedImage].alt}
                fill
                className="rounded-2xl object-contain"
                sizes="90vw"
                priority
              />
            </div>

            <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="font-display text-xl font-bold text-white">
                  {pressOnPhotos[selectedImage].title}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {pressOnPhotos[selectedImage].alt}
                </p>
                <p className="mt-2 text-sm font-medium text-[#ffd8ef]">
                  From ₹399 · Custom sized to order
                </p>
              </div>
              <Button
                size="lg"
                onClick={orderSelectedStyle}
                className="mt-4 w-full shrink-0 rounded-full bg-white text-foreground hover:bg-white hover:text-primary hover:opacity-100 sm:mt-0 sm:w-auto"
              >
                Order this style
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
