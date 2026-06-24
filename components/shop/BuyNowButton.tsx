"use client"

import { useState } from "react"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/common/Button"
import { getCheckoutUrl } from "@/lib/woocommerce/format"

type BuyNowButtonProps = {
  productId: number
  productName: string
  inStock: boolean
}

export function BuyNowButton({
  productId,
  productName,
  inStock,
}: BuyNowButtonProps) {
  const [quantity, setQuantity] = useState(1)

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl(productId, quantity)
    window.location.href = checkoutUrl
  }

  if (!inStock) {
    return (
      <Button disabled className="w-full rounded-full sm:w-auto">
        Out of stock
      </Button>
    )
  }

  return (
    <div className="flex w-full flex-col gap-4 sm:w-auto sm:items-end">
      <div className="flex items-center gap-3">
        <label htmlFor="quantity" className="text-sm font-medium text-muted-foreground">
          Qty
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="rounded-xl border border-border bg-white px-3 py-2 text-sm"
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <Button
        size="lg"
        onClick={handleCheckout}
        className="w-full rounded-full sm:w-auto"
        aria-label={`Buy ${productName}`}
      >
        <ShoppingBag className="mr-2 h-5 w-5" />
        Buy now
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <p className="text-xs text-muted-foreground sm:text-right">
        Secure checkout on our WooCommerce store
      </p>
    </div>
  )
}
