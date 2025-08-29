"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const CTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Listo para profesionalizar tu liga?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Únete a cientos de organizadores que ya están usando Zona-Gol para gestionar sus ligas de manera
            profesional y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Ver Demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              Hablar con Ventas
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
