import { Star } from "lucide-react"
import type { TestimonialItem } from "@/config/types"

export function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-xl border border-border/70 bg-card p-6">
      <div className="flex items-center gap-1 text-accent" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`size-4 ${i < testimonial.rating ? "fill-current" : "fill-none"}`} />
        ))}
      </div>
      <blockquote className="text-sm leading-relaxed text-foreground text-pretty">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex flex-col">
        <span className="text-sm font-semibold text-foreground">{testimonial.name}</span>
        <span className="text-xs text-muted-foreground">{testimonial.role}</span>
      </figcaption>
    </figure>
  )
}
