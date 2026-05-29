const PHOTO_DIR = "/nv-photos"

export function photoSrc(filename: string) {
  return `${PHOTO_DIR}/${encodeURIComponent(filename)}`
}

export const aboutArtistPhoto = photoSrc("rutu-owner.png")
export const aboutArtistAtWork = photoSrc("rutu-work.png")

export const heroSlides = [
  {
    id: 1,
    src: aboutArtistAtWork,
    alt: "Rutika performing a manicure at NailsVilla",
  },
  {
    id: 2,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(5).jpg"),
    alt: "Rose gold glitter French manicure",
  },
  {
    id: 3,
    src: photoSrc("PHOTO-2026-04-21-12-44-28.jpg"),
    alt: "Colourful summer nail art by the river",
  },
  {
    id: 4,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(1).jpg"),
    alt: "Bridal henna with mauve almond nails",
  },
  {
    id: 5,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(1).jpg"),
    alt: "Dusty rose manicure with glitter accents",
  },
]

export const galleryImages = [
  {
    id: 1,
    src: photoSrc("PHOTO-2026-04-21-12-44-28.jpg"),
    alt: "Colourful summer nail art",
    category: "Nail Art",
  },
  {
    id: 2,
    src: photoSrc("PHOTO-2026-04-21-12-44-26(1).jpg"),
    alt: "Playful heart and smiley nail art",
    category: "Nail Art",
  },
  {
    id: 3,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(1).jpg"),
    alt: "Dusty rose gel with glitter accents",
    category: "Gel Polish",
  },
  {
    id: 4,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(1).jpg"),
    alt: "Bridal henna with mauve nails",
    category: "Bridal",
  },
  {
    id: 5,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(5).jpg"),
    alt: "Rose gold French tip manicure",
    category: "Soft Glam",
  },
  {
    id: 6,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(10).jpg"),
    alt: "Elegant almond French with rose gold glitter",
    category: "Extensions",
  },
  {
    id: 7,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(3).jpg"),
    alt: "Nude shimmer nails with henna",
    category: "Gel Manicure",
  },
  {
    id: 8,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(3).jpg"),
    alt: "Green heart pattern nail art",
    category: "Nail Art",
  },
  {
    id: 9,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(8).jpg"),
    alt: "Pink cat-eye nails with henna",
    category: "Bridal",
  },
  {
    id: 10,
    src: photoSrc("PHOTO-2026-04-21-12-44-26(2).jpg"),
    alt: "NailsVilla nail design",
    category: "Premium",
  },
  {
    id: 11,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(2).jpg"),
    alt: "NailsVilla nail design",
    category: "Gel Polish",
  },
  {
    id: 12,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(4).jpg"),
    alt: "NailsVilla nail design",
    category: "Nail Art",
  },
  {
    id: 13,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(5).jpg"),
    alt: "NailsVilla nail design",
    category: "Extensions",
  },
  {
    id: 14,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(6).jpg"),
    alt: "NailsVilla nail design",
    category: "Soft Glam",
  },
  {
    id: 15,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(7).jpg"),
    alt: "NailsVilla nail design",
    category: "Gel Manicure",
  },
  {
    id: 16,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(8).jpg"),
    alt: "NailsVilla nail design",
    category: "Care",
  },
  {
    id: 17,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(2).jpg"),
    alt: "NailsVilla nail design",
    category: "Nail Art",
  },
  {
    id: 18,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(4).jpg"),
    alt: "NailsVilla nail design",
    category: "Minimal",
  },
  {
    id: 19,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(6).jpg"),
    alt: "NailsVilla nail design",
    category: "Premium",
  },
  {
    id: 20,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(7).jpg"),
    alt: "NailsVilla nail design",
    category: "Gel Polish",
  },
  {
    id: 21,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(9).jpg"),
    alt: "NailsVilla nail design",
    category: "Bridal",
  },
  {
    id: 22,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(11).jpg"),
    alt: "NailsVilla nail design",
    category: "Extensions",
  },
  {
    id: 23,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(12).jpg"),
    alt: "NailsVilla nail design",
    category: "Nail Art",
  },
  {
    id: 24,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(13).jpg"),
    alt: "NailsVilla nail design",
    category: "Soft Glam",
  },
]

export const serviceImages = {
  gelPolish: photoSrc("PHOTO-2026-04-21-12-44-27(1).jpg"),
  extensions: photoSrc("PHOTO-2026-04-21-12-44-28(5).jpg"),
  nailArt: photoSrc("PHOTO-2026-04-21-12-44-26(1).jpg"),
  overlays: photoSrc("PHOTO-2026-04-21-12-44-27(3).jpg"),
}
