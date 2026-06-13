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
    src: photoSrc("gallery-playful-nail-art.png"),
    alt: "Playful press on nails with smiley face and heart designs",
    category: "Nail Art",
  },
  {
    id: 2,
    src: photoSrc("gallery-rose-gold-pearls.png"),
    alt: "Rose gold cat eye nails with pearl accents on marble",
    category: "Soft Glam",
  },
  {
    id: 3,
    src: photoSrc("gallery-beach-nails.png"),
    alt: "Beach themed summer nail art on sandy shore",
    category: "Nail Art",
  },
  {
    id: 4,
    src: photoSrc("gallery-green-heart.png"),
    alt: "Green heart pattern nail art on satin",
    category: "Nail Art",
  },
  {
    id: 5,
    src: photoSrc("gallery-purple-french.png"),
    alt: "Purple French tip manicure with gold jewelry",
    category: "Gel Polish",
  },
  {
    id: 6,
    src: photoSrc("gallery-gold-glitter-french.png"),
    alt: "Gold glitter French tip nails on satin",
    category: "Soft Glam",
  },
  {
    id: 7,
    src: photoSrc("gallery-burgundy-glitter.png"),
    alt: "Burgundy and silver glitter nail art on satin",
    category: "Premium",
  },
  {
    id: 8,
    src: photoSrc("gallery-dusty-rose-glitter.png"),
    alt: "Dusty rose nails with glitter and rhinestone accents",
    category: "Gel Polish",
  },
  {
    id: 9,
    src: photoSrc("PHOTO-2026-04-21-12-44-28.jpg"),
    alt: "Colourful summer nail art",
    category: "Nail Art",
  },
  {
    id: 10,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(3).jpg"),
    alt: "Nude shimmer nails with henna",
    category: "Gel Manicure",
  },
  {
    id: 11,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(8).jpg"),
    alt: "Pink cat eye nails with henna",
    category: "Bridal",
  },
  {
    id: 12,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(2).jpg"),
    alt: "Iridescent pink nails with fresh roses",
    category: "Premium",
  },
  {
    id: 13,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(4).jpg"),
    alt: "Festive red nail art with Christmas decor",
    category: "Nail Art",
  },
  {
    id: 14,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(5).jpg"),
    alt: "Folk art inspired nail designs",
    category: "Nail Art",
  },
  {
    id: 15,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(6).jpg"),
    alt: "Leopard and cow print nail art",
    category: "Soft Glam",
  },
  {
    id: 16,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(9).jpg"),
    alt: "Pastel travel nails at sunset by the window",
    category: "Nail Art",
  },
  {
    id: 17,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(11).jpg"),
    alt: "Bridal henna with pearl nail accents",
    category: "Bridal",
  },
  {
    id: 18,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(12).jpg"),
    alt: "Pop art heart nail design",
    category: "Nail Art",
  },
]

export const serviceImages = {
  gelPolish: photoSrc("gallery-dusty-rose-glitter.png"),
  extensions: photoSrc("gallery-rose-gold-pearls.png"),
  nailArt: photoSrc("gallery-playful-nail-art.png"),
  overlays: photoSrc("gallery-gold-glitter-french.png"),
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
