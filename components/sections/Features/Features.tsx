"use client"

import {
  BarChart3,
  CalendarCheck,
  ClipboardList,
  GitBranch,
  LineChart,
  Megaphone,
  Target,
  UploadCloud,
  UserPlus,
  type LucideIcon,
} from "lucide-react"

import FeatureCard from "./FeatureCard"
import { cn } from "@/lib/utils"
import type { FeatureIcon, FeaturesContent, StageMockupItem } from "@/types/landing"

const ICON_MAP: Record<FeatureIcon, LucideIcon> = {
  UserPlus,
  ClipboardList,
  UploadCloud,
  CalendarCheck,
  GitBranch,
  Megaphone,
  LineChart,
  BarChart3,
  Target,
}

const statusBaseClass =
  "rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase"

const toneClasses: Record<NonNullable<StageMockupItem["tone"]>, string> = {
  success: "border-emerald-500/30 bg-emerald-500/15 text-emerald-200",
  info: "border-cyan-500/30 bg-cyan-500/15 text-cyan-200",
  warning: "border-amber-500/40 bg-amber-500/15 text-amber-200",
  neutral: "border-white/20 bg-white/10 text-white/70",
}

interface StageVisualProps {
  icon: LucideIcon
  accent: string
  badge: string
  title: string
  items: StageMockupItem[]
}

const StageVisual = ({ icon: Icon, accent, badge, title, items }: StageVisualProps) => {
  return (
    <div className="relative w-full max-w-2xl">
      <div
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-[36px] bg-gradient-to-br opacity-70 blur-3xl",
          accent
        )}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-background/85 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.85)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">{badge}</p>
              <p className="text-lg font-semibold text-foreground">{title}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-rose-400" />
          </div>
        </div>
        <div className="space-y-4 px-6 py-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              {item.statusLabel ? (
                <span
                  className={cn(
                    statusBaseClass,
                    item.tone ? toneClasses[item.tone] : toneClasses.neutral
                  )}
                >
                  {item.statusLabel}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface FeaturesProps {
  content: FeaturesContent
}

export const Features = ({ content }: FeaturesProps) => {
  return (
    <section id="caracteristicas" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/80">{content.eyebrow}</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">{content.heading}</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">{content.description}</p>
        </div>

        <div className="mt-20 space-y-24">
          {content.stages.map((stage, index) => {
            const isReversed = index % 2 === 1

            return (
              <div
                key={stage.id}
                className="flex flex-col items-center gap-12 lg:flex-row lg:items-start"
              >
                <div className={cn("w-full lg:w-5/12 space-y-8", isReversed && "lg:order-2")}> 
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 text-sm font-semibold tracking-[0.28em] text-muted-foreground">
                    <span className="text-foreground">{stage.step}</span>
                    <span className="uppercase">{stage.label}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{stage.title}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{stage.description}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {stage.benefits.map((benefit) => (
                      <FeatureCard
                        key={benefit.title}
                        icon={ICON_MAP[benefit.icon]}
                        title={benefit.title}
                        description={benefit.description}
                        accent={benefit.accent}
                        className="h-full"
                      />
                    ))}
                  </div>
                </div>
                <div className={cn("w-full lg:w-7/12", isReversed && "lg:order-1")}> 
                  <StageVisual
                    icon={ICON_MAP[stage.icon]}
                    accent={stage.accent}
                    badge={stage.mockup.badge}
                    title={stage.mockup.title}
                    items={stage.mockup.items}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-foreground">{content.closing.title}</h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{content.closing.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Features
