"use client"

import Link from "next/link"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-md p-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/zona-gol-logo.webp" alt="Zona-Gol" width={160} height={160} />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-white hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#caracteristicas" className="text-white hover:text-primary transition-colors">
              Características
            </Link>
            <Link href="#precios" className="text-white hover:text-primary transition-colors">
              Precios
            </Link>
            <Link href="#contacto" className="text-white hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
