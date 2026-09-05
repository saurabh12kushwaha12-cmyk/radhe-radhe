import Link from "next/link"
import { Container } from "@/components/shared/container"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons"
import { siteConfig } from "@/config/site"

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
  pinterest: PinterestIcon,
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <span className="font-serif text-2xl font-medium text-foreground">{siteConfig.brand.logoText}</span>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{siteConfig.footer.tagline}</p>
          <div className="flex items-center gap-3 pt-1">
            {siteConfig.social.map((social) => {
              const Icon = socialIconMap[social.icon]
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        {siteConfig.footer.columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col-reverse items-center justify-between gap-4 border-t border-border/60 py-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; {year} {siteConfig.footer.copyrightName}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {siteConfig.footer.legal.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs text-muted-foreground hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  )
}
