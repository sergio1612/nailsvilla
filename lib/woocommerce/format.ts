export function formatInrPrice(amount: string | number): string {
  const value = typeof amount === "string" ? Number.parseFloat(amount) : amount
  if (!Number.isFinite(value) || value <= 0) {
    return "Price on request"
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

export function getCheckoutUrl(productId: number, quantity = 1): string {
  const storeUrl =
    process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL?.trim().replace(/\/$/, "") ||
    process.env.WOOCOMMERCE_URL?.trim().replace(/\/$/, "")

  if (!storeUrl) {
    return "#"
  }

  const checkout = new URL("/checkout/", storeUrl)
  checkout.searchParams.set("add-to-cart", String(productId))
  if (quantity > 1) {
    checkout.searchParams.set("quantity", String(quantity))
  }
  return checkout.toString()
}
