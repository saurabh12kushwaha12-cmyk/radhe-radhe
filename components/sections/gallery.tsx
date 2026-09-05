import Image from "next/image"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { siteConfig } from "@/config/site"

export function Gallery() {
  if (!siteConfig.features.gallery) return null

  return (
    <section className="py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="In Practice" title="A look inside spaces we've helped design." align="center" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {siteConfig.gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`relative overflow-hidden rounded-xl bg-muted ${
                index % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
