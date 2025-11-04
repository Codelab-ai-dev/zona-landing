"use client"

import Link from "next/link"
import { Orbitron, Playfair_Display } from "next/font/google"
import { ArrowRight, Calendar, PlayCircle, Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "600", "700", "800", "900"] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] })

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-36 pb-24 text-white sm:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 -z-10">
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
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/65 to-slate-950/90" />
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
              <span className={`${playfair.className} block text-balance text-emerald-200/90`}>Organiza tu liga</span>
              <span className="mt-2 block text-balance font-bold leading-tight">
                con la plataforma oficial de <span className={orbitron.className}>Zona-Gol</span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Programa jornadas, confirma árbitros y comparte resultados en un tablero moderno que todo tu equipo
              entiende al instante.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group bg-white text-slate-950 shadow-lg hover:bg-white/90"
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
                className="bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                asChild
              >
                <Link href="https://admin.zona-gol.com" target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="size-5" />
                  Ver demo interactiva
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
                <span className="text-lg font-semibold text-white">4.5K</span>
                Partidos automatizados cada mes
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
                <span className="text-lg font-semibold text-white">35K</span>
                Usuarios conectados en vivo
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
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
                className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20"
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
