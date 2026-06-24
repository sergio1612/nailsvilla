import Link from "next/link"
import { Settings2, Sparkles } from "lucide-react"

export function WooCommerceSetupNotice() {
  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-2xl rounded-4xl border border-primary/15 bg-white/80 p-8 text-center shadow-xl shadow-primary/10 backdrop-blur sm:p-10">
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Settings2 className="h-7 w-7" />
        </div>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Connect your WooCommerce store
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The shop is ready in Next.js. Add your WordPress WooCommerce API keys
          to <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.env.local</code>{" "}
          to load press-on nail products here.
        </p>

        <div className="mt-8 rounded-3xl bg-muted p-5 text-left text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3 font-semibold text-foreground">Required variables</p>
          <ul className="space-y-2 font-mono text-xs sm:text-sm">
            <li>WOOCOMMERCE_URL</li>
            <li>WOOCOMMERCE_CONSUMER_KEY</li>
            <li>WOOCOMMERCE_CONSUMER_SECRET</li>
            <li>NEXT_PUBLIC_WOOCOMMERCE_STORE_URL</li>
          </ul>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          See <strong>README.md</strong> for the full WordPress setup guide.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/#press-on-nails"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Back to Press Ons
          </Link>
        </div>
      </div>
    </section>
  )
}
