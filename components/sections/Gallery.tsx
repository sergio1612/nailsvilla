"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/common/Button"
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ArrowRight,
} from "lucide-react"
import { galleryImages, type GalleryImage } from "@/lib/photos"
import { handleNavClick, NAV_ITEMS } from "@/lib/navigation"
import { useCarouselAutoplay } from "@/lib/useCarouselAutoplay"

const contactItem = NAV_ITEMS.find((item) => item.sectionId === "contact")!

function GalleryStyleCard({
  image,
  index,
  onOpen,
  layout,
}: {
  image: GalleryImage
  index: number
  onOpen: () => void
  layout: "carousel" | "grid"
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-carousel-index={layout === "carousel" ? index : undefined}
      className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        layout === "carousel"
          ? "w-[85vw] max-w-sm shrink-0 snap-center"
          : "w-full"
      }`}
    >
      <div className="relative aspect-4/5 overflow-hidden bg-linear-to-br from-primary/5 to-accent/10">
        <Image
          src={image.src}
          alt={image.alt}
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
          {image.title}
        </p>
        <p className="mt-0.5 text-xs text-white/75 sm:text-sm">{image.category}</p>
      </div>
    </button>
  )
}

export function Gallery() {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { carouselRef } = useCarouselAutoplay({
    itemCount: galleryImages.length,
    currentIndex: activeIndex,
    paused: selectedImage !== null,
    onIndexChange: setActiveIndex,
  })

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const items = carousel.querySelectorAll<HTMLElement>("[data-carousel-index]")
    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = Number(entry.target.getAttribute("data-carousel-index"))
            if (!Number.isNaN(index)) setActiveIndex(index)
          }
        })
      },
      { root: carousel, threshold: [0.5, 0.75, 1] }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [carouselRef])

  const openModal = (index: number) => setSelectedImage(index)
  const closeModal = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      )
    }
  }

  const bookThisLook = () => {
    closeModal()
    handleNavClick(contactItem, pathname, router)
  }

  const downloadImage = async (
    imageSrc: string,
    imageAlt: string,
    e?: React.MouseEvent
  ) => {
    if (e) e.stopPropagation()

    try {
      const response = await fetch(imageSrc)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${imageAlt.replace(/\s+/g, "-").toLowerCase()}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading image:", error)
      window.open(imageSrc, "_blank")
    }
  }

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden py-16 sm:py-20 xl:py-24 bg-background"
      >
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
          <div className="text-center mb-10 sm:mb-16" data-section-eyebrow>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 font-display">
              Nail Art <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore hand-painted designs by Rutika — gel polish, extensions,
              overlays, bridal sets, and custom nail art.
            </p>
          </div>

          <p className="mb-6 text-center text-sm text-muted-foreground sm:mb-8">
            Auto-plays on mobile · Tap any design to view full detail
          </p>

          {/* Mobile carousel */}
          <div
            ref={carouselRef}
            className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-none sm:hidden"
          >
            {galleryImages.map((image, index) => (
              <GalleryStyleCard
                key={image.id}
                image={image}
                index={index}
                layout="carousel"
                onOpen={() => openModal(index)}
              />
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <GalleryStyleCard
                key={image.id}
                image={image}
                index={index}
                layout="grid"
                onOpen={() => openModal(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                downloadImage(
                  galleryImages[selectedImage].src,
                  galleryImages[selectedImage].alt
                )
              }}
              className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-primary"
              aria-label="Download image"
              title="Download image"
            >
              <Download className="h-6 w-6" />
            </button>
            <button
              onClick={closeModal}
              className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-primary"
              aria-label="Close gallery"
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
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:text-primary"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="relative flex w-full max-w-4xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/5 max-h-[70vh] w-full sm:aspect-3/4">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="rounded-2xl object-contain"
                sizes="90vw"
                priority
              />
            </div>

            <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="font-display text-xl font-bold text-white">
                  {galleryImages[selectedImage].title}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {galleryImages[selectedImage].alt}
                </p>
                <p className="mt-2 text-sm font-medium text-[#ffd8ef]">
                  {galleryImages[selectedImage].category} · Hand-painted by Rutika
                </p>
              </div>
              <Button
                size="lg"
                onClick={bookThisLook}
                className="mt-4 w-full shrink-0 rounded-full bg-white text-foreground hover:bg-white hover:text-primary hover:opacity-100 sm:mt-0 sm:w-auto"
              >
                Book this look
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
