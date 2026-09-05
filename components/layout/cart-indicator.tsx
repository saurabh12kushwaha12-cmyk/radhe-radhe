"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartActions } from "@/lib/use-cart"

export function CartIndicator() {
  const { totalCount } = useCartActions()

  return (
    <div className="relative">
      <Button variant="ghost" size="icon-sm" aria-label="Cart">
        <ShoppingBag />
      </Button>

      {totalCount > 0 ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-primary px-2 text-xs font-medium text-white"
        >
          {totalCount}
        </span>
      ) : null}
    </div>
  )
}
