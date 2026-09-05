"use client"

import React, { createContext, useContext, useEffect, useReducer } from "react"
import type { ProductItem } from "@/config/types"
import { cartReducer, initialCartState, loadInitialCart, persistCart, CartState } from "./cart"
import { getTotalCount, getSubtotal } from "./cart"

type CartContextValue = {
  state: CartState
  addItem: (product: ProductItem, quantity?: number) => void
  removeItem: (slug: string) => void
  setQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  totalCount: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState, () => {
    // lazy init to avoid SSR/window issues
    if (typeof window === "undefined") return initialCartState
    return loadInitialCart()
  })

  // persist on client-side state changes
  useEffect(() => {
    if (typeof window === "undefined") return
    persistCart(state)
  }, [state])

  const addItem = (product: ProductItem, quantity?: number) => dispatch({ type: "ADD_ITEM", payload: { product, quantity } })
  const removeItem = (slug: string) => dispatch({ type: "REMOVE_ITEM", payload: { slug } })
  const setQuantity = (slug: string, quantity: number) => dispatch({ type: "SET_QUANTITY", payload: { slug, quantity } })
  const clearCart = () => dispatch({ type: "CLEAR_CART" })

  const totalCount = getTotalCount(state)
  const subtotal = getSubtotal(state)

  const value: CartContextValue = {
    state,
    addItem,
    removeItem,
    setQuantity,
    clearCart,
    totalCount,
    subtotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return ctx
}
