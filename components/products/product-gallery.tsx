"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { MediaAsset } from "@/config/types"

export function ProductGallery({ images }: { images: MediaAsset[] }) {
  const [active, setActive] = useState(0)
  const activeImage = images[active]

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
        <Image
          src={activeImage.src || "/placeholder.svg"}
          alt={activeImage.alt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-pressed={active === index}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg bg-muted ring-2 ring-transparent transition-all",
                active === index && "ring-primary",
              )}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
