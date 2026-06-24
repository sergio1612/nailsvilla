import Image from "next/image"
import Link from "next/link"
import { formatInrPrice, stripHtml } from "@/lib/woocommerce/format"
import type { WooProductSummary } from "@/lib/woocommerce/types"

type ProductCardProps = {
  product: WooProductSummary
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0]
  const description = stripHtml(product.short_description)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-square overflow-hidden">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt || product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-secondary text-sm text-muted-foreground">
            No image
          </div>
        )}
        {product.on_sale && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>

        {description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div>
            <p className="text-lg font-bold text-primary">
              {formatInrPrice(product.price)}
            </p>
            {product.on_sale && product.regular_price && (
              <p className="text-xs text-muted-foreground line-through">
                {formatInrPrice(product.regular_price)}
              </p>
            )}
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className="rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  )
}
