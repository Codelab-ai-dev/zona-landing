"use client"

import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div>
              <Image src="/images/zona-gol-logo.webp" alt="Zona-Gol" width={144} height={144} />
            </div>
            <p className="text-sidebar-foreground/70">
              La plataforma líder para la gestión profesional de ligas de fútbol.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4">Producto</h3>
            <ul className="space-y-2 text-sidebar-foreground/70">
              <li>
                <Link href="#caracteristicas" className="hover:text-sidebar-primary transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#precios" className="hover:text-sidebar-primary transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-sidebar-primary transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4">Soporte</h3>
            <ul className="space-y-2 text-sidebar-foreground/70">
              <li>
                <Link href="#" className="hover:text-sidebar-primary transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-sidebar-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sidebar-primary transition-colors">
                  Documentación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sidebar-foreground/70">
              <li>
                <Link href="#" className="hover:text-sidebar-primary transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sidebar-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sidebar-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sidebar-foreground/70">
          <p>&copy; {new Date().getFullYear()} Zona-Gol. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
