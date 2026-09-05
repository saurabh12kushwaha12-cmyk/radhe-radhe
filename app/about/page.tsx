import type { Metadata } from "next"
import Image from "next/image"
import { FeatureCard } from "@/components/cards/feature-card"
import { StatCard } from "@/components/cards/stat-card"
import { Cta } from "@/components/sections/cta"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.about.hero.description,
}

export default function AboutPage() {
  const { about, home } = siteConfig

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow={about.hero.eyebrow}
              title={about.hero.title}
              description={about.hero.description}
              align="center"
              className="mx-auto max-w-2xl"
            />
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={about.story.image.src || "/placeholder.svg"}
                alt={about.story.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                {about.story.title}
              </h2>
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-border/60 bg-primary py-14 sm:py-16">
          <Container>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {home.stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} inverted />
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-border/60 py-14 sm:py-20">
          <Container className="flex flex-col gap-10">
            <SectionHeading eyebrow="What We Value" title="The principles behind every piece." align="center" />
            <div className="grid gap-5 sm:grid-cols-3">
              {about.values.map((value) => (
                <FeatureCard key={value.title} feature={value} />
              ))}
            </div>
          </Container>
        </section>

        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}
