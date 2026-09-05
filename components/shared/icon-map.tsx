import { Compass, Heart, Leaf, Shield, Sparkles, Truck, type LucideIcon } from "lucide-react"

// Maps the string icon keys used in config/site.ts to actual icon
// components, so content authors can reference icons by name without
// importing React components inside the configuration file.
export const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  leaf: Leaf,
  shield: Shield,
  truck: Truck,
  compass: Compass,
  heart: Heart,
}
