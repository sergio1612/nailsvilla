"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, X, ChevronLeft, ChevronRight, Download } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&h=900&fit=crop&q=85",
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
      src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&h=900&fit=crop&q=85",
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
      src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&h=900&fit=crop&q=85",
      alt: "Soft glam nail finish",
      category: "Soft Glam",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?w=900&h=900&fit=crop&q=85",
      alt: "Minimal nude nail styling",
      category: "Minimal",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&h=900&fit=crop&q=85",
      alt: "Polished colour selection",
      category: "Gel Manicure",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&h=900&fit=crop&q=85",
      alt: "Beauty essentials and nail care",
      category: "Nail Care",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&h=900&fit=crop&q=85",
      alt: "Elegant finished nail set",
      category: "Premium",
    },
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

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

  const downloadImage = async (imageSrc: string, imageAlt: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    
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
      // Fallback: open image in new tab
      window.open(imageSrc, "_blank")
    }
  }

  return (
    <>
      <section id="gallery" className="py-16 sm:py-20 xl:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
              Nail Art <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our stunning collection of nail art designs. Each piece is a
              work of art crafted with precision and creativity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 xl:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-linear-to-br from-primary/10 to-accent/10 hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={(e) => downloadImage(image.src, image.alt, e)}
                      className="p-2 bg-black/50 hover:bg-primary rounded-full text-white hover:text-white transition-all duration-200 backdrop-blur-sm"
                      aria-label="Download image"
                      title="Download image"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                downloadImage(galleryImages[selectedImage].src, galleryImages[selectedImage].alt)
              }}
              className="p-2 bg-black/50 hover:bg-primary rounded-full text-white hover:text-white transition-all duration-200 backdrop-blur-sm"
              aria-label="Download image"
              title="Download image"
            >
              <Download className="h-6 w-6" />
            </button>
            <button
              onClick={closeModal}
              className="p-2 bg-black/50 hover:bg-primary rounded-full text-white hover:text-white transition-all duration-200 backdrop-blur-sm"
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
            className="absolute left-4 z-50 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 z-50 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="relative max-w-4xl w-full h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white text-lg font-medium mb-1">
                {galleryImages[selectedImage].alt}
              </p>
              <p className="text-white/70 text-sm">
                {galleryImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

