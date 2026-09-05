import { StatCard } from "@/components/cards/stat-card"
import { Container } from "@/components/shared/container"
import { siteConfig } from "@/config/site"

export function Stats() {
  if (!siteConfig.features.stats) return null

  return (
    <section className="border-t border-border/60 bg-primary py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {siteConfig.home.stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} inverted />
          ))}
        </div>
      </Container>
    </section>
  )
}
