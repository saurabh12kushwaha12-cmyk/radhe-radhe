import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Hero() {
  const { hero } = siteConfig.home

  return (
    <section className="overflow-hidden border-b border-border/60">
      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">{hero.eyebrow}</span>
          <h1 className="text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">{hero.description}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" className="h-11 px-6" render={<Link href={hero.primaryCta.href} />}>
              {hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-6"
              render={<Link href={hero.secondaryCta.href} />}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted md:aspect-[5/4]">
          <Image
            src={hero.image.src || "/placeholder.svg"}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  )
}
