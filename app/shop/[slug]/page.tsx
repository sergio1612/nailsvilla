import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Sparkles } from "lucide-react"
import { BuyNowButton } from "@/components/shop/BuyNowButton"
import { WooCommerceSetupNotice } from "@/components/shop/WooCommerceSetupNotice"
import { isWooCommerceConfigured } from "@/lib/woocommerce/config"
import { getProductBySlug } from "@/lib/woocommerce/client"
import { formatInrPrice } from "@/lib/woocommerce/format"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  if (!isWooCommerceConfigured()) {
    return { title: "Shop | NailsVilla" }
  }

  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return { title: "Product not found | NailsVilla" }
  }

  return {
    title: `${product.name} | NailsVilla Shop`,
    description: product.short_description.replace(/<[^>]*>/g, " ").trim(),
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  if (!isWooCommerceConfigured()) {
    return <WooCommerceSetupNotice />
  }

  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const image = product.images[0]
  const inStock = product.stock_status === "instock"

  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-4xl border border-white/70 bg-white shadow-xl shadow-primary/10">
            {image ? (
              <Image
                src={image.src}
                alt={image.alt || product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                No image available
              </div>
            )}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary mb-5">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Press on set</span>
            </div>

            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-baseline gap-3">
              <p className="text-3xl font-bold text-primary">
                {formatInrPrice(product.price)}
              </p>
              {product.on_sale && product.regular_price && (
                <p className="text-lg text-muted-foreground line-through">
                  {formatInrPrice(product.regular_price)}
                </p>
              )}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {inStock ? "In stock" : "Currently unavailable"}
            </p>

            {product.short_description && (
              <div
                className="prose prose-sm mt-6 max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
            )}

            <div className="mt-8 rounded-3xl border border-primary/10 bg-muted/60 p-5 text-sm leading-relaxed text-muted-foreground">
              After checkout, Rutika will reach out for your nail sizes and design
              reference. Glue and application guide included with every set.
            </div>

            <div className="mt-8">
              <BuyNowButton
                productId={product.id}
                productName={product.name}
                inStock={inStock}
              />
            </div>

            {product.description && (
              <div className="mt-10 border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold">Details</h2>
                <div
                  className="prose prose-sm mt-4 max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
