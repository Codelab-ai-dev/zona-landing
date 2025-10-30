"use client"

import { Orbitron } from "next/font/google"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const Hero = () => {
  return (
    <section id="inicio" className="py-20 lg:py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            ⚽ Sistema de Gestión Profesional
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Gestiona tu Liga de Fútbol con <span className={`text-black ${orbitron.className}`}>Zona-Gol</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Organiza torneos, gestiona equipos, programa partidos y mantén estadísticas detalladas. Todo en una
            plataforma fácil de usar diseñada para organizadores de ligas.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 hover:bg-white/10 bg-transparent text-white hover:text-white"
              asChild
            >
              <Link href="https://admin.zona-gol.com" target="_blank" rel="noopener noreferrer">
                Ver Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
