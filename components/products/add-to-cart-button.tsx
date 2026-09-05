"use client"

import { Check, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

// Demo-only interaction: this is not wired to a real cart or checkout.
// It exists to demonstrate the product page's conversion UI.
export function AddToCartButton() {
  const [added, setAdded] = useState(false)

  return (
    <Button
      type="button"
      size="lg"
      className="h-12 flex-1 px-6"
      onClick={() => {
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
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
