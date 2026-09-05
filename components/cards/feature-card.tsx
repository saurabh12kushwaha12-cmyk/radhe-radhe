import { iconMap } from "@/components/shared/icon-map"
import type { FeaturePoint } from "@/config/types"

export function FeatureCard({ feature }: { feature: FeaturePoint }) {
  const Icon = iconMap[feature.icon]

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-card p-6">
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </div>
  )
}
