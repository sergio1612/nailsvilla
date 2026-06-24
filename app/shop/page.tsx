import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { ProductCard } from "@/components/shop/ProductCard"
import { WooCommerceSetupNotice } from "@/components/shop/WooCommerceSetupNotice"
import { isWooCommerceConfigured } from "@/lib/woocommerce/config"
import { getProducts } from "@/lib/woocommerce/client"

export const metadata: Metadata = {
  title: "Shop Press On Nails | NailsVilla by Rutika",
  description:
    "Shop custom press-on nail sets by NailsVilla. Custom sized, hand painted, and shipped across India.",
}

export default async function ShopPage() {
  if (!isWooCommerceConfigured()) {
    return <WooCommerceSetupNotice />
  }

  let products: Awaited<ReturnType<typeof getProducts>> = []
  let loadError: string | null = null

  try {
    products = await getProducts()
  } catch (error) {
    loadError =
      error instanceof Error
        ? error.message
        : "Could not load products from WooCommerce."
  }

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 xl:py-20">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Press on nail shop</span>
          </div>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Shop <span className="text-primary">Press Ons</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Custom sized sets, hand painted by Rutika. Choose a style, checkout
            securely, and share your sizing details after purchase.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Prefer WhatsApp?{" "}
            <Link href="/#contact" className="font-medium text-primary hover:underline">
              Message us for fully custom art
            </Link>
          </p>
        </div>

        {loadError ? (
          <div className="mx-auto max-w-2xl rounded-3xl border border-destructive/20 bg-destructive/5 p-6 text-center">
            <p className="font-medium text-destructive">Could not load products</p>
            <p className="mt-2 text-sm text-muted-foreground">{loadError}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Check your API keys, product status, and that WooCommerce REST API
              is enabled on WordPress.
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-3xl border border-primary/10 bg-white/80 p-8 text-center">
            <p className="font-display text-2xl font-bold">No products yet</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Add press-on nail products in WooCommerce admin. They will appear
              here automatically.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
