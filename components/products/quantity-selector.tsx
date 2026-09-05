"use client"

import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border p-1">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        aria-label="Decrease quantity"
      >
        <Minus className="size-3.5" />
      </Button>
      <span className="w-8 text-center text-sm font-medium tabular-nums" aria-live="polite">
        {quantity}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={() => setQuantity((q) => Math.min(9, q + 1))}
        aria-label="Increase quantity"
      >
        <Plus className="size-3.5" />
      </Button>
    </div>
  )
}
