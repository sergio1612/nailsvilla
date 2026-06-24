function requireEnv(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

export function isWooCommerceConfigured(): boolean {
  return Boolean(
    process.env.WOOCOMMERCE_URL?.trim() &&
      process.env.WOOCOMMERCE_CONSUMER_KEY?.trim() &&
      process.env.WOOCOMMERCE_CONSUMER_SECRET?.trim()
  )
}

export function getWooCommerceConfig() {
  const url = requireEnv("WOOCOMMERCE_URL").replace(/\/$/, "")
  const consumerKey = requireEnv("WOOCOMMERCE_CONSUMER_KEY")
  const consumerSecret = requireEnv("WOOCOMMERCE_CONSUMER_SECRET")
  const categoryId = process.env.WOOCOMMERCE_CATEGORY_ID?.trim()

  return {
    url,
    consumerKey,
    consumerSecret,
    categoryId: categoryId ? Number(categoryId) : undefined,
    storeUrl:
      process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL?.trim().replace(/\/$/, "") ||
      url,
  }
}
