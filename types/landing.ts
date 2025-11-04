import { z } from "zod"

export const toneSchema = z.enum(["success", "info", "warning", "neutral"])
export type Tone = z.infer<typeof toneSchema>

export const navItemSchema = z.object({
  href: z.string(),
  label: z.string(),
})
export type NavItem = z.infer<typeof navItemSchema>

export const headerContentSchema = z.object({
  logoSrc: z.string().default("/images/zona-gol-logo.webp"),
  logoAlt: z.string().default("Zona-Gol"),
  navItems: z.array(navItemSchema),
  demoUrl: z.string(),
  primaryCta: z.object({
    label: z.string(),
    href: z.string(),
  }),
  secondaryCta: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .optional(),
})
export type HeaderContent = z.infer<typeof headerContentSchema>

export const heroChecklistItemSchema = z.object({
  label: z.string(),
  statusLabel: z.string(),
  tone: toneSchema,
})
export type HeroChecklistItem = z.infer<typeof heroChecklistItemSchema>

export const heroContentSchema = z.object({
  badge: z.string(),
  titleLead: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  primaryAction: z.object({
    label: z.string(),
    href: z.string(),
  }),
  secondaryAction: z.object({
    label: z.string(),
    href: z.string(),
  }),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
  schedule: z.object({
    title: z.string(),
    matchLabel: z.string(),
    matchValue: z.string(),
    checklist: z.array(heroChecklistItemSchema),
  }),
  video: z.object({
    src: z.string(),
    poster: z.string().optional(),
  }),
})
export type HeroContent = z.infer<typeof heroContentSchema>

export const featureIconSchema = z.union([
  z.literal("UserPlus"),
  z.literal("ClipboardList"),
  z.literal("UploadCloud"),
  z.literal("CalendarCheck"),
  z.literal("GitBranch"),
  z.literal("Megaphone"),
  z.literal("LineChart"),
  z.literal("BarChart3"),
  z.literal("Target"),
])
export type FeatureIcon = z.infer<typeof featureIconSchema>

export const stageBenefitSchema = z.object({
  icon: featureIconSchema,
  title: z.string(),
  description: z.string(),
  accent: z.string().optional(),
})
export type StageBenefit = z.infer<typeof stageBenefitSchema>

export const stageMockupItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  statusLabel: z.string().optional(),
  tone: toneSchema.optional(),
})
export type StageMockupItem = z.infer<typeof stageMockupItemSchema>

export const stageSchema = z.object({
  id: z.string(),
  step: z.string(),
  label: z.string(),
  title: z.string(),
  description: z.string(),
  accent: z.string(),
  icon: featureIconSchema,
  benefits: z.array(stageBenefitSchema),
  mockup: z.object({
    badge: z.string(),
    title: z.string(),
    accent: z.string(),
    items: z.array(stageMockupItemSchema),
  }),
})
export type Stage = z.infer<typeof stageSchema>

export const featuresContentSchema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  description: z.string(),
  stages: z.array(stageSchema),
  closing: z.object({
    title: z.string(),
    description: z.string(),
  }),
})
export type FeaturesContent = z.infer<typeof featuresContentSchema>

export const testimonialStatSchema = z.object({
  label: z.string(),
  value: z.number(),
  suffix: z.string().optional(),
  duration: z.number().optional(),
  description: z.string(),
})
export type TestimonialStat = z.infer<typeof testimonialStatSchema>

export const testimonialQuoteSchema = z.object({
  content: z.string(),
  author: z.string(),
  role: z.string(),
  initials: z.string(),
})
export type TestimonialQuote = z.infer<typeof testimonialQuoteSchema>

export const testimonialsContentSchema = z.object({
  heading: z.string(),
  subheading: z.string(),
  stats: z.array(testimonialStatSchema),
  testimonials: z.array(testimonialQuoteSchema),
})
export type TestimonialsContent = z.infer<typeof testimonialsContentSchema>

export const pricingFeatureSchema = z.object({
  text: z.string(),
})
export const pricingPlanSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.object({
    monthly: z.number(),
    yearly: z.number(),
  }),
  discountLabel: z.string().optional(),
  features: z.array(pricingFeatureSchema),
  buttonText: z.string(),
  buttonVariant: z.enum(["default", "outline"]).default("default"),
  isPopular: z.boolean().optional(),
  footnote: z.string().optional(),
  comparison: z.array(z.string()),
})
export type PricingPlan = z.infer<typeof pricingPlanSchema>

export const pricingContentSchema = z.object({
  trustSignals: z.array(z.string()),
  heading: z.string(),
  description: z.string(),
  savingsLabel: z.string(),
  plans: z.array(pricingPlanSchema),
  comparison: z.object({
    heading: z.string(),
    description: z.string(),
  }),
  carouselHeading: z.string(),
  carouselSubheading: z.string(),
  carouselItems: z.array(
    z.object({
      name: z.string(),
      context: z.string(),
    })
  ),
})
export type PricingContent = z.infer<typeof pricingContentSchema>

export const supportChannelIconSchema = z.union([
  z.literal("MessageCircle"),
  z.literal("PhoneCall"),
  z.literal("Mail"),
  z.literal("Headset"),
])
export type SupportChannelIcon = z.infer<typeof supportChannelIconSchema>

export const supportChannelSchema = z.object({
  title: z.string(),
  description: z.string(),
  action: z.string(),
  href: z.string(),
  icon: supportChannelIconSchema,
})
export type SupportChannel = z.infer<typeof supportChannelSchema>

export const contactContentSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
  map: z.object({
    embedUrl: z.string(),
    message: z.string(),
    responseTime: z.string(),
  }),
  support: z.object({
    intro: z.string(),
    channels: z.array(supportChannelSchema),
    resolutionNote: z.string(),
  }),
  escalation: z.object({
    title: z.string(),
    description: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
  }),
  form: z.object({
    title: z.string(),
    description: z.string(),
    footer: z.string(),
  }),
})
export type ContactContent = z.infer<typeof contactContentSchema>

export const ctaContentSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
  benefits: z.array(z.string()),
  leadStat: z.string(),
  supportEmail: z.string(),
  calendarUrl: z.string(),
  calendarTitle: z.string(),
  calendarDescription: z.string(),
  calendarDuration: z.string(),
  calendarCost: z.string(),
  formTitle: z.string(),
  formDescription: z.string(),
  formSuccess: z.string(),
})
export type CtaContent = z.infer<typeof ctaContentSchema>

export const landingContentSchema = z.object({
  header: headerContentSchema,
  hero: heroContentSchema,
  features: featuresContentSchema,
  testimonials: testimonialsContentSchema,
  pricing: pricingContentSchema,
  contact: contactContentSchema,
  cta: ctaContentSchema,
})
export type LandingContent = z.infer<typeof landingContentSchema>
