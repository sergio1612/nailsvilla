"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Download, Instagram } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&h=1100&fit=crop&q=85",
      alt: "Glossy blush gel polish",
      category: "Gel Polish",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&h=900&fit=crop&q=85",
      alt: "Clean extension shape",
      category: "Extensions",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&h=1200&fit=crop&q=85",
      alt: "Detailed nail art application",
      category: "Nail Art",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&h=900&fit=crop&q=85",
      alt: "Fresh manicure care",
      category: "Care",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?w=900&h=1100&fit=crop&q=85",
      alt: "Minimal nude nail styling",
      category: "Minimal",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&h=900&fit=crop&q=85",
      alt: "Polished colour selection",
      category: "Gel Manicure",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&h=1100&fit=crop&q=85",
      alt: "Beauty essentials and nail care",
      category: "Nail Care",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&h=900&fit=crop&q=85",
      alt: "Elegant finished nail set",
      category: "Premium",
    },
  ]

  const openModal = (index: number) => setSelectedImage(index)
  const closeModal = () => setSelectedImage(null)
  const nextImage = () => {
    if (selectedImage !== null)
      setSelectedImage((selectedImage + 1) % galleryImages.length)
  }
  const prevImage = () => {
    if (selectedImage !== null)
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      )
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
        className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32"
      >
        <div className="container mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="section-eyebrow text-mocha/70 mb-4">
              ✦ &nbsp; The Portfolio &nbsp; ✦
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-foreground">
              Recent{" "}
              <span className="font-serif italic">nail stories</span>
            </h2>
            <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/65 italic">
              A curated selection of designs — soft glam, minimal, bridal, and
              everything in between.
            </p>
          </div>

          {/* Masonry gallery */}
          <div className="mx-auto max-w-6xl columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-3xl bg-foreground elegant-shadow transition-all duration-500 hover:-translate-y-1 sm:mb-5 ${
                  index % 5 === 0
                    ? "aspect-[3/4]"
                    : index % 3 === 0
                    ? "aspect-[4/5]"
                    : "aspect-square"
                }`}
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <button
                    onClick={(e) => downloadImage(image.src, image.alt, e)}
                    className="absolute top-3 right-3 rounded-full bg-ivory/20 p-2 text-ivory backdrop-blur transition-all hover:bg-ivory/35"
                    aria-label="Download image"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="section-eyebrow text-ivory/80 mb-1">
                      0{index + 1}
                    </p>
                    <p className="font-serif text-lg text-ivory">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://instagram.com/nailsvilla__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-4 text-[12px] font-medium tracking-[0.22em] uppercase text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
              See more on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 backdrop-blur-sm p-4"
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
              className="rounded-full bg-ivory/15 p-2.5 text-ivory backdrop-blur transition-all hover:bg-ivory/25"
              aria-label="Download image"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={closeModal}
              className="rounded-full bg-ivory/15 p-2.5 text-ivory backdrop-blur transition-all hover:bg-ivory/25"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 z-50 rounded-full bg-ivory/15 p-3 text-ivory backdrop-blur transition-all hover:bg-ivory/25"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 z-50 rounded-full bg-ivory/15 p-3 text-ivory backdrop-blur transition-all hover:bg-ivory/25"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-4xl h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain rounded-2xl"
              sizes="90vw"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-espresso/80 to-transparent rounded-b-2xl">
              <p className="section-eyebrow text-champagne/80 mb-2">
                {galleryImages[selectedImage].category}
              </p>
              <p className="font-serif text-xl text-ivory">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
