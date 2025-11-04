"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, PlayCircle, Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export const Hero = () => {
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
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/football-field-bg.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/65 to-slate-950/90" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <Badge className="mb-6 inline-flex items-center gap-2 border-white/10 bg-white/10 text-white/90">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/20">
                <Trophy className="size-3.5" />
              </span>
              Temporada 2025 · Todo tu torneo en una vista
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-balance font-serif text-primary">Organiza tu liga</span>
              <span className="mt-2 block text-balance font-semibold leading-tight text-white">
                con la plataforma oficial de Zona-Gol
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Programa jornadas, confirma árbitros y comparte resultados en un tablero moderno que todo tu equipo
              entiende al instante.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground shadow-[0_20px_45px_-28px_rgba(16,185,129,0.9)] transition-all hover:translate-y-0.5 hover:bg-primary/90"
                asChild
              >
                <Link href="#contacto">
                  Solicitar demo en vivo
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.6)]"
                asChild
              >
                <Link href="https://admin.zona-gol.com" target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="size-5" />
                  Ver demo interactiva
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10">
                <span className="text-lg font-semibold text-white">4.5K</span>
                Partidos automatizados cada mes
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10">
                <span className="text-lg font-semibold text-white">35K</span>
                Usuarios conectados en vivo
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur-xl transition hover:border-primary/40 hover:shadow-[0_25px_65px_-28px_rgba(20,184,166,0.55)]">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-semibold text-white">
                Tu siguiente jornada en orden
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-400/20">
                  <Calendar className="size-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">Próximo partido</p>
                  <p className="text-base font-semibold text-white">Sábado · 18:00 · Estadio Central</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Checklist rápido</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Árbitros confirmados</span>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-100">Listo</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Notificaciones enviadas</span>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-100">OK</span>
                  </li>
                </ul>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/40 bg-white/10 text-white transition hover:border-primary/50 hover:bg-primary/10"
                asChild
              >
                <Link href="#contacto">Agendar una demo guiada</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Hero
