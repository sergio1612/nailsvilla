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

export type GalleryImage = {
  id: number
  src: string
  alt: string
  title: string
  category: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: photoSrc("gallery-playful-nail-art.png"),
    title: "Smiley & Heart Art",
    alt: "Playful hand-painted press-ons with yellow smiley faces, pink hearts, and glossy finish",
    category: "Nail Art",
  },
  {
    id: 2,
    src: photoSrc("gallery-rose-gold-pearls.png"),
    title: "Rose Gold Pearl Glam",
    alt: "Rose gold cat-eye gel nails with pearl accents and a soft marble flat-lay",
    category: "Extensions",
  },
  {
    id: 3,
    src: photoSrc("gallery-beach-nails.png"),
    title: "Beach Vacation Set",
    alt: "Summer beach-themed nail art with ocean blues, sandy neutrals, and coastal details",
    category: "Nail Art",
  },
  {
    id: 4,
    src: photoSrc("gallery-green-heart.png"),
    title: "Green Heart Pattern",
    alt: "Olive green nails with hand-painted heart motifs on a satin backdrop",
    category: "Nail Art",
  },
  {
    id: 5,
    src: photoSrc("gallery-purple-french.png"),
    title: "Purple French Tips",
    alt: "Lilac French tip manicure paired with delicate gold jewellery styling",
    category: "Gel Polish",
  },
  {
    id: 6,
    src: photoSrc("gallery-gold-glitter-french.png"),
    title: "Gold Glitter French",
    alt: "Classic French manicure upgraded with fine gold glitter tips and a satin finish",
    category: "Overlays",
  },
  {
    id: 7,
    src: photoSrc("gallery-burgundy-glitter.png"),
    title: "Burgundy Glitter Glam",
    alt: "Deep burgundy nails with silver glitter fade and high-shine gel top coat",
    category: "Premium",
  },
  {
    id: 8,
    src: photoSrc("gallery-dusty-rose-glitter.png"),
    title: "Dusty Rose Rhinestones",
    alt: "Dusty rose gel nails with scattered glitter and crystal rhinestone accents",
    category: "Gel Polish",
  },
  {
    id: 9,
    src: photoSrc("PHOTO-2026-04-21-12-44-28.jpg"),
    title: "Colour Pop Summer",
    alt: "Bright multicolour summer nail art with bold graphic shapes and glossy gel finish",
    category: "Nail Art",
  },
  {
    id: 10,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(3).jpg"),
    title: "Nude Shimmer Bridal",
    alt: "Soft nude shimmer manicure styled alongside intricate bridal henna",
    category: "Bridal",
  },
  {
    id: 11,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(8).jpg"),
    title: "Pink Cat Eye Bridal",
    alt: "Pink cat-eye gel nails with a luminous shift, paired with bridal henna details",
    category: "Bridal",
  },
  {
    id: 12,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(2).jpg"),
    title: "Iridescent Pink Roses",
    alt: "Iridescent pink gel nails with fresh rose styling and a premium glossy finish",
    category: "Premium",
  },
  {
    id: 13,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(4).jpg"),
    title: "Festive Holiday Red",
    alt: "Rich red festive nail art with seasonal styling and detailed accent work",
    category: "Nail Art",
  },
  {
    id: 14,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(5).jpg"),
    title: "Folk Art Inspired",
    alt: "Colourful folk-art inspired nail designs with intricate hand-painted detailing",
    category: "Nail Art",
  },
  {
    id: 15,
    src: photoSrc("PHOTO-2026-04-21-12-44-27(6).jpg"),
    title: "Leopard & Cow Print",
    alt: "Trendy leopard and cow print nail art with a soft glam gel finish",
    category: "Nail Art",
  },
  {
    id: 16,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(9).jpg"),
    title: "Pastel Travel Nails",
    alt: "Pastel travel-inspired nail art captured at golden hour by a window",
    category: "Nail Art",
  },
  {
    id: 17,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(11).jpg"),
    title: "Bridal Pearls & Henna",
    alt: "Bridal manicure with pearl nail accents beautifully styled with henna",
    category: "Bridal",
  },
  {
    id: 18,
    src: photoSrc("PHOTO-2026-04-21-12-44-28(12).jpg"),
    title: "Pop Art Hearts",
    alt: "Pop art heart nail design with bold colour blocking and glossy gel finish",
    category: "Nail Art",
  },
]

const PRESS_ON_DIR = "/nv-photos/press-on"

function pressOnPhotoSrc(filename: string) {
  return `${PRESS_ON_DIR}/${encodeURIComponent(filename)}`
}

export type PressOnPhoto = {
  id: string
  src: string
  alt: string
  title: string
}

export const pressOnPhotos: PressOnPhoto[] = [
  {
    id: "press-on-01",
    src: pressOnPhotoSrc("press-on-01.png"),
    alt: "Burgundy cat eye press ons with gold floral accents",
    title: "Burgundy Cat Eye Florals",
  },
  {
    id: "press-on-02",
    src: pressOnPhotoSrc("press-on-02.png"),
    alt: "Pale pink cat eye press ons with silver French tips and MR monogram",
    title: "Pink French & Monogram",
  },
  {
    id: "press-on-03",
    src: pressOnPhotoSrc("press-on-03.png"),
    alt: "Rose gold cat eye press ons with white flower charms",
    title: "Rose Gold Flower Charms",
  },
  {
    id: "press-on-04",
    src: pressOnPhotoSrc("press-on-04.png"),
    alt: "Soft pink French press ons with white bow charms",
    title: "Soft Pink Bow French",
  },
  {
    id: "press-on-05",
    src: pressOnPhotoSrc("press-on-05.png"),
    alt: "Celestial pink press ons with pearls and silver stars",
    title: "Celestial Pearls & Stars",
  },
  {
    id: "press-on-06",
    src: pressOnPhotoSrc("press-on-06.png"),
    alt: "Dusty rose cat eye press ons with gold glitter French tips",
    title: "Dusty Rose Glitter French",
  },
  {
    id: "press-on-07",
    src: pressOnPhotoSrc("press-on-07.png"),
    alt: "Champagne gold cat eye press ons with peacock and flower charms",
    title: "Champagne Peacock Charms",
  },
]
