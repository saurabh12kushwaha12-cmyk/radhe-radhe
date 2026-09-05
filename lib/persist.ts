// Small cross-platform localStorage helpers for the cart store
export function loadPersisted<T>(key: string): T | null {
  if (typeof window === "undefined") return null

  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw) as T
  } catch (e) {
    // corrupted or invalid
    console.warn("Failed to load persisted data for key", key)
    return null
  }
}

export function savePersisted<T>(key: string, value: T | null) {
  if (typeof window === "undefined") return

  try {
    if (value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  } catch (e) {
    console.warn("Failed to save persisted data for key", key)
  }
}
