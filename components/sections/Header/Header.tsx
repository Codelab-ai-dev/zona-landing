"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const NAV_ITEMS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const sectionIds = useMemo(
    () => NAV_ITEMS.map((item) => item.href.replace("#", "")),
    []
  )
  const activeId = useScrollSpy(sectionIds, { rootMargin: "-40% 0px -40% 0px" })

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
        "border-transparent bg-slate-950/10 py-6 backdrop-blur-sm",
        isScrolled &&
          "border-b border-white/10 bg-slate-950/80 shadow-lg shadow-slate-950/5 backdrop-blur-xl py-3"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between gap-4">
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
            {NAV_ITEMS.map((item) => {
              const itemId = item.href.replace("#", "")

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    activeId === itemId
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  <span>{item.label}</span>
                  {activeId === itemId && (
                    <span className="absolute inset-x-1 -bottom-2 h-0.5 rounded-full bg-white" />
                  )}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="hidden text-white/80 transition-colors hover:bg-white/10 hover:text-white md:inline-flex"
            >
              <Link href="https://admin.zona-gol.com" target="_blank" rel="noopener noreferrer">
                Ver demo
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-emerald-400/90 text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300"
            >
              <Link href="#contacto">Solicitar demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
