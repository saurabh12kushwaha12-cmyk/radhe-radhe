// Central type definitions for the Universal Business Website Master.
// Every shape a client's content can take is declared here so that
// `config/site.ts` (or a future client's config file) is fully typed
// and components never need to guess the structure of their data.

export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: "instagram" | "facebook" | "linkedin" | "twitter" | "youtube" | "pinterest"
}

export type MediaAsset = {
  src: string
  alt: string
  width: number
  height: number
}

export type FeaturePoint = {
  icon: "sparkles" | "leaf" | "shield" | "truck" | "compass" | "heart"
  title: string
  description: string
}

export type ServiceItem = {
  slug: string
  icon: "sparkles" | "leaf" | "shield" | "truck" | "compass" | "heart"
  title: string
  summary: string
  description: string
  benefits: string[]
}

export type ProductItem = {
  slug: string
  category: string
  title: string
  shortDescription: string
  description: string
  price: number
  compareAtPrice?: number
  badge?: string
  features: string[]
  images: MediaAsset[]
}

export type TestimonialItem = {
  name: string
  role: string
  quote: string
  rating: number
}

export type StatItem = {
  label: string
  value: string
  suffix?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type GalleryItem = MediaAsset & {
  caption?: string
}

export type SiteFeatureToggles = {
  products: boolean
  gallery: boolean
  testimonials: boolean
  faq: boolean
  stats: boolean
  announcementBar: boolean
}

export type SiteConfig = {
  brand: {
    name: string
    shortName: string
    tagline: string
    description: string
    logoText: string
  }
  theme: {
    radius: string
  }
  contact: {
    email: string
    phone: string
    phoneDisplay: string
    address: string
    hours: string
  }
  social: SocialLink[]
  nav: {
    primary: NavLink[]
    cta: NavLink
  }
  footer: {
    tagline: string
    columns: { title: string; links: NavLink[] }[]
    legal: NavLink[]
    copyrightName: string
  }
  seo: {
    titleTemplate: string
    defaultTitle: string
    description: string
    keywords: string[]
    ogImage: string
  }
  features: SiteFeatureToggles
  announcement: {
    message: string
    href?: string
  }
  home: {
    hero: {
      eyebrow: string
      title: string
      description: string
      primaryCta: NavLink
      secondaryCta: NavLink
      image: MediaAsset
    }
    trust: FeaturePoint[]
    stats: StatItem[]
  }
  about: {
    hero: {
      eyebrow: string
      title: string
      description: string
    }
    story: {
      title: string
      paragraphs: string[]
      image: MediaAsset
    }
    values: FeaturePoint[]
  }
  services: ServiceItem[]
  products: ProductItem[]
  testimonials: TestimonialItem[]
  gallery: GalleryItem[]
  faq: FaqItem[]
  cta: {
    title: string
    description: string
    primaryCta: NavLink
    secondaryCta: NavLink
  }
}
