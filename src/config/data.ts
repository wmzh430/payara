import { IPlanData } from "./interface"

export const planData: IPlanData[] = [
  {
    title: "Freebie",
    content: `Ideal for individuals who need quick acess to basic features.`,
    isActive: false,
    price: 0,
    allowedItems: 2,
  },
  {
    title: "Professional",
    content: `Ideal for individuals who need advanced features and tools for client work.`,
    isActive: true,
    price: 25,
    allowedItems: 6,
  },
  {
    title: "Enterprise",
    content: `Ideal for businesses who need personalized services and security for large teams.`,
    isActive: false,
    price: 100,
    allowedItems: 8,
  },
]

export const listData: string[] = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on desings",
]
