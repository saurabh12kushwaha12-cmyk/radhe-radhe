import Link from "next/link"
import { siteConfig } from "@/config/site"

export function AnnouncementBar() {
  if (!siteConfig.features.announcementBar) return null

  const { message, href } = siteConfig.announcement
  const content = <span className="text-pretty">{message}</span>

  return (
    <div className="bg-primary text-primary-foreground">
      <p className="flex h-9 items-center justify-center px-4 text-center text-xs font-medium tracking-wide sm:text-sm">
        {href ? (
          <Link href={href} className="underline-offset-4 hover:underline">
            {content}
          </Link>
        ) : (
          content
        )}
      </p>
    </div>
  )
}
