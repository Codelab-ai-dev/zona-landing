"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

import { Header } from "@/components/sections/Header/Header"
import { Hero } from "@/components/sections/Hero/Hero"
import { Features } from "@/components/sections/Features/Features"
import { Testimonials } from "@/components/sections/Testimonials/Testimonials"
import { Pricing } from "@/components/sections/Pricing/Pricing"
import { Contact } from "@/components/sections/Contact/Contact"
import { CTA } from "@/components/sections/CTA/CTA"
import { Footer } from "@/components/sections/Footer/Footer"
import { ScrollToTop } from "@/components/sections/ScrollToTop/ScrollToTop"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

type SectionRevealProps = {
  children: ReactNode
  delay?: number
}

const SectionReveal = ({ children, delay = 0 }: SectionRevealProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return (
    <div
      ref={containerRef}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        prefersReducedMotion || isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}
      style={prefersReducedMotion ? undefined : { transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate bg-background/80">
        <Header />
        <Hero />
      </div>

      <SectionReveal>
        <Features />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <Testimonials />
      </SectionReveal>
      <SectionReveal delay={0.12}>
        <Pricing />
      </SectionReveal>
      <SectionReveal delay={0.14}>
        <Contact />
      </SectionReveal>
      <SectionReveal delay={0.16}>
        <CTA />
      </SectionReveal>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
