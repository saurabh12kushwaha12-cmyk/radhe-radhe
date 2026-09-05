"use client"

import { Minus, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

type Props = {
  value?: number
  onChange?: (n: number) => void
}

export function QuantitySelector({ value, onChange }: Props) {
  const isControlled = typeof value === "number" && typeof onChange === "function"
  const [quantity, setQuantity] = useState<number>(value ?? 1)

  useEffect(() => {
    if (isControlled) return
    // keep local state consistent if uncontrolled
    setQuantity((q) => (q < 1 ? 1 : q))
  }, [isControlled])

  useEffect(() => {
    if (isControlled) {
      // sync controlled value
      setQuantity(value ?? 1)
    }
  }, [value, isControlled])

  const dec = () => {
    if (isControlled) return onChange && onChange(Math.max(1, (value ?? 1) - 1))
    setQuantity((q) => Math.max(1, q - 1))
  }

  const inc = () => {
    if (isControlled) return onChange && onChange(Math.min(99, (value ?? 1) + 1))
    setQuantity((q) => Math.min(99, q + 1))
  }

  const current = isControlled ? value ?? 1 : quantity

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border p-1">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={dec}
        aria-label="Decrease quantity"
      >
        <Minus className="size-3.5" />
      </Button>
      <span className="w-8 text-center text-sm font-medium tabular-nums" aria-live="polite">
        {current}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={inc}
        aria-label="Increase quantity"
      >
        <Plus className="size-3.5" />
      </Button>
    </div>
  )
}
