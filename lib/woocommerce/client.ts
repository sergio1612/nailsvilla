import { getWooCommerceConfig } from "./config"
import type { WooProduct, WooProductSummary } from "./types"

type FetchProductsOptions = {
  categoryId?: number
  perPage?: number
  page?: number
}

class WooCommerceApiError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message)
    this.name = "WooCommerceApiError"
  }
}

async function wooFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { url, consumerKey, consumerSecret } = getWooCommerceConfig()
  const endpoint = new URL(`/wp-json/wc/v3${path}`, url)
  endpoint.searchParams.set("consumer_key", consumerKey)
  endpoint.searchParams.set("consumer_secret", consumerSecret)

  const response = await fetch(endpoint.toString(), {
    ...init,
    headers: {
      Accept: "application/json",
      ...init?.headers,
    },
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new WooCommerceApiError(
      body || `WooCommerce request failed (${response.status})`,
      response.status
    )
  }

  return response.json() as Promise<T>
}

function toSummary(product: WooProduct): WooProductSummary {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    short_description: product.short_description,
    price: product.price,
    regular_price: product.regular_price,
    sale_price: product.sale_price,
    on_sale: product.on_sale,
    stock_status: product.stock_status,
    images: product.images,
  }
}

export async function getProducts(
  options: FetchProductsOptions = {}
): Promise<WooProductSummary[]> {
  const { categoryId, perPage = 24, page = 1 } = options
  const { categoryId: envCategoryId } = getWooCommerceConfig()
  const resolvedCategoryId = categoryId ?? envCategoryId

  const params = new URLSearchParams({
    status: "publish",
    per_page: String(perPage),
    page: String(page),
    orderby: "menu_order",
    order: "asc",
  })

  if (resolvedCategoryId) {
    params.set("category", String(resolvedCategoryId))
  }

  const products = await wooFetch<WooProduct[]>(`/products?${params}`)
  return products.map(toSummary)
}

export async function getProductBySlug(slug: string): Promise<WooProduct | null> {
  const params = new URLSearchParams({
    slug,
    status: "publish",
  })

  const products = await wooFetch<WooProduct[]>(`/products?${params}`)
  return products[0] ?? null
}

export async function getProductById(id: number): Promise<WooProduct | null> {
  try {
    return await wooFetch<WooProduct>(`/products/${id}`)
  } catch (error) {
    if (error instanceof WooCommerceApiError && error.status === 404) {
      return null
    }
    throw error
  }
}

export { WooCommerceApiError }
