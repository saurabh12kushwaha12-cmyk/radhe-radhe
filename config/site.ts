import type { SiteConfig } from "./types"

// -----------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH
// -----------------------------------------------------------------------
// Every piece of client-facing content lives here. Components read from
// this file instead of hard-coding brand names, copy, contact details,
// prices, or images. To adapt this Master for a new client, this is the
// file to change first — swap the values below and most of the site
// updates automatically. Toggle optional modules under `features`.
// -----------------------------------------------------------------------

export const siteConfig: SiteConfig = {
  brand: {
    name: "Cove Home",
    shortName: "Cove",
    tagline: "Considered living, thoughtfully made.",
    description:
      "Cove Home designs furniture and interiors for people who want their spaces to feel calm, considered, and lived-in — not staged.",
    logoText: "Cove",
  },

  theme: {
    radius: "0.5rem",
  },

  contact: {
    email: "hello@covehome.example",
    phone: "+15551234567",
    phoneDisplay: "+1 (555) 123-4567",
    address: "128 Foundry Lane, Portland, OR 97209",
    hours: "Mon–Fri, 9:00–17:00 PT",
  },

  social: [
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  ],

  nav: {
    primary: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Book a Consult", href: "/contact" },
  },

  footer: {
    tagline: "Considered living, thoughtfully made.",
    columns: [
      {
        title: "Studio",
        links: [
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Shop",
        links: [
          { label: "All Products", href: "/products" },
          { label: "Seating", href: "/products?category=Seating" },
          { label: "Lighting", href: "/products?category=Lighting" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    copyrightName: "Cove Home",
  },

  seo: {
    titleTemplate: "%s | Cove Home",
    defaultTitle: "Cove Home — Considered Furniture & Interior Design",
    description:
      "Cove Home designs furniture and offers interior design consultation for calm, considered, everyday living spaces.",
    keywords: [
      "furniture studio",
      "interior design consultation",
      "modern furniture",
      "home goods",
      "considered design",
    ],
    ogImage: "/images/hero-living-room.webp",
  },

  features: {
    products: true,
    gallery: true,
    testimonials: true,
    faq: true,
    stats: true,
    announcementBar: true,
  },

  announcement: {
    message: "New Season: the Drift collection is now available.",
    href: "/products",
  },

  home: {
    hero: {
      eyebrow: "Furniture & Interior Design Studio",
      title: "Spaces that feel like they were always meant to be this way.",
      description:
        "We design and make furniture, and guide considered interiors — from a single room to a full home — with a calm, unfussy point of view.",
      primaryCta: { label: "Shop the Collection", href: "/products" },
      secondaryCta: { label: "Book a Consultation", href: "/contact" },
      image: {
        src: "/images/hero-living-room.webp",
        alt: "A warm, minimalist living room with a bouclé lounge chair, walnut coffee table, and ceramic table lamp",
        width: 1600,
        height: 1200,
      },
    },
    trust: [
      {
        icon: "leaf",
        title: "Responsibly Sourced",
        description: "Solid woods and natural fibers, sourced from FSC-certified partners.",
      },
      {
        icon: "shield",
        title: "10-Year Warranty",
        description: "Every piece is built to be repaired, not replaced.",
      },
      {
        icon: "truck",
        title: "White-Glove Delivery",
        description: "Assembled and placed in your space at no extra cost.",
      },
      {
        icon: "compass",
        title: "Design Guidance Included",
        description: "A 30-minute layout consult with every order over $500.",
      },
    ],
    stats: [
      { label: "Spaces designed", value: "1,200", suffix: "+" },
      { label: "Years in practice", value: "14" },
      { label: "Client satisfaction", value: "98", suffix: "%" },
      { label: "Cities served", value: "22" },
    ],
  },

  about: {
    hero: {
      eyebrow: "About Cove Home",
      title: "We believe good design should feel quiet, not loud.",
      description:
        "Founded by a small team of designers and makers, Cove Home exists to make considered furniture and interior guidance accessible without the noise of trend-chasing.",
    },
    story: {
      title: "Started in a small workshop. Still run like one.",
      paragraphs: [
        "Cove Home began in 2011 as a two-person furniture workshop, building pieces to order for neighbors and friends who wanted something that would last longer than a season.",
        "That same care now shapes everything we do — from the joinery in a single chair to the way we sequence a full-home design consultation. We keep our collection small on purpose, and we keep our process personal on purpose.",
        "Today our studio works with clients across the country, but every piece still passes through the same hands-on process it did in year one.",
      ],
      image: {
        src: "/images/about-studio.webp",
        alt: "A design studio workspace with fabric swatches, material samples, and a brass desk lamp on a wooden table",
        width: 1600,
        height: 1200,
      },
    },
    values: [
      {
        icon: "leaf",
        title: "Material honesty",
        description: "We use solid materials that age well and wear honestly — no veneers pretending to be wood.",
      },
      {
        icon: "compass",
        title: "Considered, not trendy",
        description: "We design for how a room is actually lived in, not for how it photographs for a season.",
      },
      {
        icon: "heart",
        title: "Built to keep",
        description: "Every piece is designed to be repaired and passed down, not replaced in five years.",
      },
    ],
  },

  services: [
    {
      slug: "interior-consultation",
      icon: "compass",
      title: "Interior Design Consultation",
      summary: "A guided session to plan layout, furniture, and materials for a single room or your whole home.",
      description:
        "Our consultation starts with how you actually live — light, traffic flow, storage, and mood — before a single piece of furniture is chosen. You leave with a clear plan, a shoppable list, and a layout you can act on immediately or over time.",
      benefits: [
        "In-home or virtual walkthrough",
        "Personalized furniture & layout plan",
        "Material and color palette guidance",
        "Shoppable list with budget tiers",
      ],
    },
    {
      slug: "space-planning",
      icon: "sparkles",
      title: "Space Planning",
      summary: "Detailed floor plans and furniture layouts that make small or awkward rooms work harder.",
      description:
        "We measure, model, and test layouts for your specific space before you commit to anything — so furniture fits the first time, traffic flows naturally, and every square foot earns its place.",
      benefits: [
        "To-scale floor plan drawings",
        "Furniture placement options",
        "Traffic-flow and function review",
        "Revisions included",
      ],
    },
    {
      slug: "custom-furniture",
      icon: "shield",
      title: "Custom Furniture",
      summary: "One-off pieces built to your dimensions, finish, and upholstery when nothing off-the-shelf fits.",
      description:
        "For awkward alcoves, specific finishes, or pieces that need to do double duty, our workshop builds to your exact specifications using the same materials and joinery as our standard collection.",
      benefits: [
        "Built to your exact dimensions",
        "Choice of wood, finish, and upholstery",
        "Same 10-year warranty as our collection",
        "Workshop-direct pricing",
      ],
    },
  ],

  products: [
    {
      slug: "anchor-lounge-chair",
      category: "Seating",
      title: "Anchor Lounge Chair",
      shortDescription: "A sculptural bouclé lounge chair with solid walnut legs.",
      description:
        "The Anchor Lounge Chair pairs a deep, curved bouclé seat with exposed walnut legs for a shape that feels sculptural from every angle. Built on a hardwood frame with a foam-and-fiber cushion, it's equally at home as a reading chair or an accent piece in a living room.",
      price: 1280,
      compareAtPrice: 1480,
      badge: "Bestseller",
      features: [
        "Solid FSC-certified walnut legs",
        "Bouclé upholstery in Stone",
        "Kiln-dried hardwood frame",
        "10-year structural warranty",
      ],
      images: [
        {
          src: "/images/product-anchor-chair.webp",
          alt: "Anchor Lounge Chair in warm bouclé fabric with walnut legs, front view",
          width: 1200,
          height: 1200,
        },
        {
          src: "/images/product-anchor-chair-detail.webp",
          alt: "Close-up of the walnut armrest joinery on the Anchor Lounge Chair",
          width: 1200,
          height: 1200,
        },
      ],
    },
    {
      slug: "meridian-coffee-table",
      category: "Tables",
      title: "Meridian Coffee Table",
      shortDescription: "A low walnut coffee table with a softly curved edge.",
      description:
        "Meridian is a low, grounding coffee table with a gently curved edge that softens any living room layout. Solid walnut throughout, finished by hand to bring out the natural grain.",
      price: 890,
      features: [
        "Solid walnut construction",
        "Hand-finished natural oil",
        "Soft-curved edge profile",
        "Felt-pad feet, floor-safe",
      ],
      images: [
        {
          src: "/images/product-meridian-table.webp",
          alt: "Meridian walnut coffee table with a small ceramic bowl on top",
          width: 1200,
          height: 1200,
        },
      ],
    },
    {
      slug: "solace-table-lamp",
      category: "Lighting",
      title: "Solace Table Lamp",
      shortDescription: "A ceramic table lamp with a warm linen shade and brass fittings.",
      description:
        "Solace brings warm, ambient light through a hand-thrown ceramic base and a linen drum shade. Brass fittings add a quiet detail that catches the light without competing for attention.",
      price: 240,
      badge: "New",
      features: [
        "Hand-thrown ceramic base",
        "Natural linen shade",
        "Solid brass fittings",
        "In-line dimmer switch",
      ],
      images: [
        {
          src: "/images/product-solace-lamp.webp",
          alt: "Solace ceramic table lamp with a linen shade and brass fittings",
          width: 1200,
          height: 1200,
        },
      ],
    },
    {
      slug: "drift-linen-sofa",
      category: "Seating",
      title: "Drift Linen Sofa",
      shortDescription: "A low-profile linen sofa with rounded bolster cushions.",
      description:
        "Drift is a relaxed, low-profile sofa upholstered in pre-washed linen with rounded bolster cushions and solid wood legs. Designed to soften a room without overwhelming it.",
      price: 2180,
      compareAtPrice: 2450,
      features: [
        "Pre-washed natural linen",
        "Solid hardwood legs",
        "High-density foam cushions",
        "Removable, washable covers",
      ],
      images: [
        {
          src: "/images/product-drift-sofa.webp",
          alt: "Drift low-profile linen sofa in warm sand color with bolster cushions",
          width: 1200,
          height: 1200,
        },
      ],
    },
  ],

  testimonials: [
    {
      name: "Priya Nair",
      role: "Homeowner, Portland",
      quote:
        "The consultation alone was worth it. We finally have a living room that works for how we actually live, not how a catalog says it should look.",
      rating: 5,
    },
    {
      name: "Daniel Cho",
      role: "Homeowner, Austin",
      quote:
        "The Anchor chair is the first piece of furniture I've bought that I can't imagine getting rid of. It just fits, physically and visually.",
      rating: 5,
    },
    {
      name: "Marissa Ellwood",
      role: "Interior Stylist",
      quote: "I recommend Cove to every client who wants furniture that will actually hold up over a decade.",
      rating: 5,
    },
  ],

  gallery: [
    {
      src: "/images/gallery-1.webp",
      alt: "A minimalist reading nook with a curved lounge chair and floor lamp",
      width: 1200,
      height: 1500,
      caption: "Reading Nook, Portland Loft",
    },
    {
      src: "/images/gallery-2.webp",
      alt: "A dining area with a round walnut table and woven pendant light",
      width: 1200,
      height: 900,
      caption: "Dining Corner, Austin Bungalow",
    },
    {
      src: "/images/gallery-3.webp",
      alt: "A textured linen cushion and folded wool throw on a bouclé sofa",
      width: 1200,
      height: 900,
      caption: "Textile Detail",
    },
    {
      src: "/images/gallery-4.webp",
      alt: "A bedroom corner with a linen bed, brass wall sconce, and woven rug",
      width: 1200,
      height: 1500,
      caption: "Primary Bedroom, Seattle Craftsman",
    },
  ],

  faq: [
    {
      question: "How long does a piece of furniture take to arrive?",
      answer:
        "In-stock pieces ship within 5–7 business days. Custom pieces are built to order and typically take 8–10 weeks, with progress updates along the way.",
    },
    {
      question: "Do you offer design consultations without a furniture purchase?",
      answer:
        "Yes. Consultations are offered as a standalone service, though the fee is credited toward your order if you purchase furniture within 60 days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Non-custom pieces can be returned within 30 days in original condition. Custom and made-to-order pieces are final sale, which we'll always flag clearly before you order.",
    },
    {
      question: "Do you work with clients outside the cities you list?",
      answer:
        "Yes — virtual consultations are available anywhere, and our furniture ships nationwide with white-glove delivery in most metro areas.",
    },
  ],

  cta: {
    title: "Let's make your space feel considered.",
    description: "Book a 30-minute consultation and leave with a clear plan for your room.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: { label: "Browse Products", href: "/products" },
  },
}
