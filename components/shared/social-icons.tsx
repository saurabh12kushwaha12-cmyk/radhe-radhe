import type { SVGProps } from "react"

// lucide-react no longer ships brand/social icons, so this Master keeps a
// small set of outline social marks drawn in the same stroke style
// (round caps, 2px stroke) so they sit consistently next to lucide icons.
type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 20 12 11.5" />
      <path d="M12 12c0-1.7 1.3-4 3.7-4 2 0 3.3 1.3 3.3 3.3 0 2.6-1.4 5-3.7 5-1 0-1.8-.5-2.1-1.2" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="10.5" x2="8" y2="16.5" />
      <circle cx="8" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="12" y1="10.5" x2="12" y2="16.5" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2H15l-.5 3H11.5v6" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  )
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6.5c-.6.3-1.3.6-2 .7a3.4 3.4 0 0 0-5.8 3.1A9.6 9.6 0 0 1 4.8 6.9a3.4 3.4 0 0 0 1.1 4.6 3.4 3.4 0 0 1-1.6-.4c0 1.6 1.2 3 2.7 3.3a3.4 3.4 0 0 1-1.6.1c.5 1.4 1.8 2.4 3.4 2.5A9.7 9.7 0 0 1 3 18.6a13.6 13.6 0 0 0 7.4 2.2c8.9 0 13.7-7.6 13.4-14.3A6.9 6.9 0 0 0 20 6.5Z" />
    </svg>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}
