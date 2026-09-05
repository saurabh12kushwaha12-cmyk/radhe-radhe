"use client"

import { Check, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { ProductItem } from "@/config/types"
import { useCartActions } from "@/lib/use-cart"

type Props = {
  product?: ProductItem
  quantity?: number
}

export function AddToCartButton({ product, quantity = 1 }: Props) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCartActions()

  return (
    <Button
      type="button"
      size="lg"
      className="h-12 flex-1 px-6"
      onClick={() => {
        // preserve existing micro interaction
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)

        if (product) {
          addItem(product, quantity)
        }
      }}
    >
      {added ? (
        <>
          <Check className="size-4" aria-hidden="true" />
          Added to bag
        </>
      ) : (
        <>
          <ShoppingBag className="size-4" aria-hidden="true" />
          Add to bag
        </>
      )}
    </Button>
  )
}
