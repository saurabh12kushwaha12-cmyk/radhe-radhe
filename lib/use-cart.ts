"use client"

import type { ProductItem } from "@/config/types"
import { useCart } from "./cart-context"

// Lightweight ergonomic wrapper — re-exports the context API in a convenient shape.
// This avoids duplication: it simply forwards the context methods with a friendlier name.

export function useCartActions() {
  const { state, addItem, removeItem, setQuantity, clearCart, totalCount, subtotal } = useCart()

  const add = (product: ProductItem, quantity = 1) => addItem(product, quantity)

  return {
    items: state.items,
    addItem: add,
    removeItem,
    setQuantity,
    clearCart,
    totalCount,
    subtotal,
  }
}
