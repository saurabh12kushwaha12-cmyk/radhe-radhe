import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { ProductItem } from "@/config/types"

export function ProductCard({ product }: { product: ProductItem }) {
  const cover = product.images[0]

  return (
    <Link href={`/products/${product.slug}`} className="group flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
        <Image
          src={cover.src || "/placeholder.svg"}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {product.badge ? <Badge className="absolute left-3 top-3">{product.badge}</Badge> : null}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{product.category}</span>
        <h3 className="text-base font-semibold text-foreground">{product.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-base font-semibold text-foreground">${product.price.toLocaleString()}</span>
          {product.compareAtPrice ? (
            <span className="text-sm text-muted-foreground line-through">
              ${product.compareAtPrice.toLocaleString()}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  )
}
