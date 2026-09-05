"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { StatItem } from "@/config/types"

function getNumberParts(value: string) {
  const match = value.match(/([+-]?)([\d,]+)(.*)/)
  if (!match) return { prefix: "", target: 0, suffix: value }

  return {
    prefix: match[1],
    target: Number(match[2].replace(/,/g, "")),
    suffix: match[3],
  }
}

export function StatCard({ stat, inverted = false }: { stat: StatItem; inverted?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasEntered, setHasEntered] = useState(false)
  const { prefix, target, suffix: valueSuffix } = getNumberParts(stat.value)
  const suffix = stat.suffix ?? valueSuffix
  const [count, setCount] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasEntered) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion || target === 0) {
      setCount(target)
      return
    }

    let frame = 0
    const startedAt = performance.now()
    const duration = 1200

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * easedProgress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [hasEntered, target])

  return (
    <div ref={ref} className="flex flex-col gap-1 text-center sm:text-left">
      <span
        className={cn(
          "font-serif text-4xl font-medium sm:text-5xl",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {prefix}{count.toLocaleString()}
        {suffix ? <span className="text-accent">{suffix}</span> : null}
      </span>
      <span className={cn("text-sm", inverted ? "text-primary-foreground/70" : "text-muted-foreground")}>
        {stat.label}
      </span>
    </div>
  )
}
