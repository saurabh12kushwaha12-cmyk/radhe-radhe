import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function AboutPreview() {
  const { story } = siteConfig.about

  return (
    <section className="border-t border-border/60 py-14 sm:py-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-muted md:order-2">
          <Image
            src={story.image.src || "/placeholder.svg"}
            alt={story.image.alt}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 md:order-1">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Our Story</span>
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            {story.title}
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">{story.paragraphs[0]}</p>
          <Button variant="outline" className="w-fit" render={<Link href="/about" />}>
            Read our story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
