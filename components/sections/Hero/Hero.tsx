"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, PlayCircle, Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import type { HeroChecklistItem, HeroContent } from "@/types/landing"

interface HeroProps {
  content: HeroContent
}

const statusToneClass: Record<HeroChecklistItem["tone"], string> = {
  success: "border-emerald-500/30 bg-emerald-500/15 text-emerald-100",
  info: "border-cyan-500/30 bg-cyan-500/15 text-cyan-100",
  warning: "border-amber-500/40 bg-amber-500/15 text-amber-100",
  neutral: "border-white/20 bg-white/10 text-white/80",
}

export const Hero = ({ content }: HeroProps) => {
  const heroRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [vignetteOpacity, setVignetteOpacity] = useState(0.62)

  useEffect(() => {
    const element = heroRef.current
    if (!element) return

    if (prefersReducedMotion) {
      setParallaxOffset(0)
      setVignetteOpacity(0.65)
      return
    }

    let frame: number | null = null

    const updateValues = () => {
      frame = null
      const rect = element.getBoundingClientRect()
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1)
      setParallaxOffset(progress * 24)
      setVignetteOpacity(0.55 + (0.75 - 0.55) * progress)
    }

    updateValues()

    const handleScroll = () => {
      if (frame !== null) return
      frame = requestAnimationFrame(updateValues)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [prefersReducedMotion])

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative isolate overflow-hidden pt-36 pb-24 text-white sm:pt-40 lg:pb-32"
    >
      <div
        className="absolute inset-0 -z-10 transform-gpu transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(0, ${parallaxOffset}%, 0)` }}
      >
        <video className="h-full w-full object-cover" autoPlay loop muted playsInline poster={content.video.poster}>
          <source src={content.video.src} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-slate-950 transition-opacity duration-500 ease-out"
          style={{ opacity: vignetteOpacity }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          aria-hidden="true"
          style={{ opacity: vignetteOpacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.3),transparent_55%)]" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/65 to-slate-950/90" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <Badge className="mb-6 inline-flex items-center gap-2 border-white/10 bg-white/10 text-white/90">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/20">
                <Trophy className="size-3.5" />
              </span>
              {content.badge}
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-balance font-serif text-primary">{content.titleLead}</span>
              <span className="mt-2 block text-balance font-semibold leading-tight text-white">
                {content.titleHighlight}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">{content.description}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground shadow-[0_20px_45px_-28px_rgba(16,185,129,0.9)] transition-all hover:translate-y-0.5 hover:bg-primary/90"
                asChild
              >
                <Link href={content.primaryAction.href}>
                  {content.primaryAction.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.6)]"
                asChild
              >
                <Link href={content.secondaryAction.href} target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="size-5" />
                  {content.secondaryAction.label}
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
                >
                  <span className="text-lg font-semibold text-white">{stat.value}</span>
                  {stat.label}
                </div>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur-xl transition hover:border-primary/40 hover:shadow-[0_25px_65px_-28px_rgba(20,184,166,0.55)]">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-semibold text-white">{content.schedule.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-400/20">
                  <Calendar className="size-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">{content.schedule.matchLabel}</p>
                  <p className="text-base font-semibold text-white">{content.schedule.matchValue}</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Checklist rápido</p>
                <ul className="mt-3 space-y-2">
                  {content.schedule.checklist.map((item) => (
                    <li key={item.label} className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          statusToneClass[item.tone] ?? statusToneClass.neutral
                        }`}
                      >
                        {item.statusLabel}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/40 bg-white/10 text-white transition hover:border-primary/50 hover:bg-primary/10"
                asChild
              >
                <Link href={content.primaryAction.href}>{content.primaryAction.label}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Hero
