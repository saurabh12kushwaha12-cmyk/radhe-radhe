import { FeatureCard } from "@/components/cards/feature-card"
import { Container } from "@/components/shared/container"
import { siteConfig } from "@/config/site"

export function TrustFeatures() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.home.trust.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}
