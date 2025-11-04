"use client"

import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accent?: string
  className?: string
}

export const FeatureCard = ({ icon: Icon, title, description, accent, className }: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border border-white/10 bg-background/75 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.75)] backdrop-blur",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-85",
          accent ?? "from-primary/35 via-primary/10 to-transparent"
        )}
        aria-hidden
      />
      <CardHeader className="relative flex flex-col gap-4 p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-background/90 text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <CardTitle className="text-left text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default FeatureCard
