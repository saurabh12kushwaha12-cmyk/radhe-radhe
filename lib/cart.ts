import type { ProductItem } from "@/config/types"
import { loadPersisted, savePersisted } from "./persist"

export const CART_KEY = "radhe_cart_v1"

export type CartItem = {
  product: ProductItem
  quantity: number
}

export type CartState = {
  items: CartItem[]
}

export const initialCartState: CartState = { items: [] }

export type CartAction =
  | { type: "HYDRATE"; payload: CartState }
  | { type: "ADD_ITEM"; payload: { product: ProductItem; quantity?: number } }
  | { type: "REMOVE_ITEM"; payload: { slug: string } }
  | { type: "SET_QUANTITY"; payload: { slug: string; quantity: number } }
  | { type: "CLEAR_CART" }

export function validateCartState(obj: unknown): obj is CartState {
  if (!obj || typeof obj !== "object") return false
  const cast = obj as CartState
  return Array.isArray(cast.items)
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE": {
      return action.payload
    }

    case "ADD_ITEM": {
      const { product, quantity = 1 } = action.payload
      const idx = state.items.findIndex((i) => i.product.slug === product.slug)
      let items: CartItem[]
      if (idx >= 0) {
        items = state.items.map((it, i) =>
          i === idx ? { ...it, quantity: Math.min(99, it.quantity + quantity) } : it,
        )
      } else {
        items = [...state.items, { product, quantity: Math.max(1, Math.min(99, quantity)) }]
      }
      return { items }
    }

    case "REMOVE_ITEM": {
      const { slug } = action.payload
      const items = state.items.filter((it) => it.product.slug !== slug)
      return { items }
    }

    case "SET_QUANTITY": {
      const { slug, quantity } = action.payload
      if (quantity <= 0) {
        const items = state.items.filter((it) => it.product.slug !== slug)
        return { items }
      }
      const items = state.items.map((it) => (it.product.slug === slug ? { ...it, quantity: Math.min(99, Math.max(1, quantity)) } : it))
      return { items }
    }

    case "CLEAR_CART": {
      return { items: [] }
    }

    default:
      return state
  }
}

// helpers / selectors
export function getTotalCount(state: CartState) {
  return state.items.reduce((sum, it) => sum + it.quantity, 0)
}

export function getSubtotal(state: CartState) {
  return state.items.reduce((sum, it) => sum + (typeof it.product.price === "number" ? it.product.price * it.quantity : 0), 0)
}

// Persistence helpers used by the provider (kept here for convenience)
export function loadInitialCart(): CartState {
  if (typeof window === "undefined") return initialCartState
  const persisted = loadPersisted<CartState>(CART_KEY)
  if (!persisted) return initialCartState
  if (validateCartState(persisted)) return persisted
  // corrupted data
  return initialCartState
}

export function persistCart(state: CartState) {
  if (typeof window === "undefined") return
  try {
    savePersisted<CartState>(CART_KEY, state)
  } catch (e) {
    // noop
  }
}
