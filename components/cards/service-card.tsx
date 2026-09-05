import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { iconMap } from "@/components/shared/icon-map"
import type { ServiceItem } from "@/config/types"

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon]

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-border/70 bg-card p-6 transition-colors hover:border-foreground/20"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
      </div>
      <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}
