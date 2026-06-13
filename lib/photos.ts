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
]

export const galleryImages = [
  {
    id: 1,
    src: photoSrc("PHOTO-2026-04-21-12-44-28.jpg"),
    alt: "Colourful summer nail art",
    category: "Nail Art",
  },
  {
    id: 3,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(1).jpg"),
    alt: "Dusty rose gel with glitter accents",
    category: "Gel Polish",
  },
  {
    id: 5,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(5).jpg"),
    alt: "Rose gold French tip manicure",
    category: "Soft Glam",
  },
  {
    id: 7,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(3).jpg"),
    alt: "Nude shimmer nails with henna",
    category: "Gel Manicure",
  },
  {
    id: 8,
    src: photoSrc("gallery-green-heart.png"),
    alt: "Green heart pattern nail art",
    category: "Nail Art",
  },
  {
    id: 9,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(8).jpg"),
    alt: "Pink cat eye nails with henna",
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

const PRESS_ON_DIR = "/nv-photos/press-on"

function pressOnPhotoSrc(filename: string) {
  return `${PRESS_ON_DIR}/${encodeURIComponent(filename)}`
}

export const pressOnPhotos = [
  {
    src: pressOnPhotoSrc("press-on-01.png"),
    alt: "Burgundy cat eye press ons with gold floral accents",
  },
  {
    src: pressOnPhotoSrc("press-on-02.png"),
    alt: "Pale pink cat eye press ons with silver French tips and MR monogram",
  },
  {
    src: pressOnPhotoSrc("press-on-03.png"),
    alt: "Rose gold cat eye press ons with white flower charms",
  },
  {
    src: pressOnPhotoSrc("press-on-04.png"),
    alt: "Soft pink French press ons with white bow charms",
  },
  {
    src: pressOnPhotoSrc("press-on-05.png"),
    alt: "Celestial pink press ons with pearls and silver stars",
  },
  {
    src: pressOnPhotoSrc("press-on-06.png"),
    alt: "Dusty rose cat eye press ons with gold glitter French tips",
  },
  {
    src: pressOnPhotoSrc("press-on-07.png"),
    alt: "Champagne gold cat eye press ons with peacock and flower charms",
  },
]
