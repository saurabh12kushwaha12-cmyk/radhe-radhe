import { cn } from "@/lib/utils"
import type { StatItem } from "@/config/types"

export function StatCard({ stat, inverted = false }: { stat: StatItem; inverted?: boolean }) {
  return (
    <div className="flex flex-col gap-1 text-center sm:text-left">
      <span
        className={cn(
          "font-serif text-4xl font-medium sm:text-5xl",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {stat.value}
        {stat.suffix ? <span className="text-accent">{stat.suffix}</span> : null}
      </span>
      <span className={cn("text-sm", inverted ? "text-primary-foreground/70" : "text-muted-foreground")}>
        {stat.label}
      </span>
    </div>
  )
}
