export type WooImage = {
  id: number
  src: string
  alt: string
  name: string
}

export type WooProduct = {
  id: number
  name: string
  slug: string
  permalink: string
  type: string
  status: string
  description: string
  short_description: string
  sku: string
  price: string
  regular_price: string
  sale_price: string
  on_sale: boolean
  stock_status: "instock" | "outofstock" | "onbackorder"
  images: WooImage[]
  categories: { id: number; name: string; slug: string }[]
  attributes: {
    id: number
    name: string
    options: string[]
  }[]
}

export type WooProductSummary = Pick<
  WooProduct,
  | "id"
  | "name"
  | "slug"
  | "short_description"
  | "price"
  | "regular_price"
  | "sale_price"
  | "on_sale"
  | "stock_status"
  | "images"
>
