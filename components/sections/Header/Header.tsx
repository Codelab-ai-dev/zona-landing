"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        "border-transparent bg-transparent py-6",
        isScrolled && "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl py-3"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between gap-6">
          <Link href="#inicio" className="flex items-center">
            <Image
              src="/images/zona-gol-logo.webp"
              alt="Zona-Gol"
              width={140}
              height={140}
              priority
              className="h-auto w-[140px] md:w-[160px]"
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-white/80 hover:bg-white/10 hover:text-white"
            >
              <Link href="https://admin.zona-gol.com" target="_blank" rel="noopener noreferrer">
                Ver demo
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-white text-slate-950 shadow-lg hover:bg-white/90"
            >
              <Link href="#contacto">Solicitar información</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
