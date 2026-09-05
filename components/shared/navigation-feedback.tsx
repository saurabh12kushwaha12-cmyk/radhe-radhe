'use client'

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

function isInternalNavigationTarget(target: EventTarget | null) {
  const element = target instanceof Element ? target.closest("a, button") : null
  if (!element) return false
  if (element instanceof HTMLButtonElement && element.type === "submit") return false
  if (element.getAttribute("aria-disabled") === "true" || element.hasAttribute("disabled")) return false
  if (element instanceof HTMLAnchorElement) {
    const href = element.getAttribute("href")
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return false
    try {
      const url = new URL(href, window.location.href)
      return url.origin === window.location.origin && url.pathname !== window.location.pathname
    } catch {
      return false
    }
  }
  return element.hasAttribute("data-navigation")
}

export function NavigationFeedback({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (!isInternalNavigationTarget(event.target)) return
      setIsNavigating(true)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setIsNavigating(false), 700)
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  useEffect(() => {
    setIsNavigating(false)
    if (resetTimer.current) clearTimeout(resetTimer.current)
  }, [pathname])

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current)
  }, [])

  return (
    <>
      <div className="sr-only" aria-live="polite">
        {isNavigating ? "Loading page" : ""}
      </div>
      <div className={`navigation-progress ${isNavigating ? "navigation-progress-visible" : ""}`} aria-hidden="true" />
      {children}
    </>
  )
}
