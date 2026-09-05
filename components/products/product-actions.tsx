"use client"

import { useState } from "react"
import type { ProductItem } from "@/config/types"
import { QuantitySelector } from "@/components/products/quantity-selector"
import { AddToCartButton } from "@/components/products/add-to-cart-button"

type Props = {
  product: ProductItem
}

export default function ProductActions({ product }: Props) {
  const [qty, setQty] = useState<number>(1)

  return (
    <div className="flex items-center gap-3 pt-2">
      <QuantitySelector value={qty} onChange={setQty} />
      <AddToCartButton product={product} quantity={qty} />
    </div>
  )
}
