"use client"

import { motion, useReducedMotion } from "framer-motion"

import { Header } from "@/components/sections/Header/Header"
import { Hero } from "@/components/sections/Hero/Hero"
import { Features } from "@/components/sections/Features/Features"
import { Testimonials } from "@/components/sections/Testimonials/Testimonials"
import { Pricing } from "@/components/sections/Pricing/Pricing"
import { Contact } from "@/components/sections/Contact/Contact"
import { CTA } from "@/components/sections/CTA/CTA"
import { Footer } from "@/components/sections/Footer/Footer"
import { ScrollToTop } from "@/components/sections/ScrollToTop/ScrollToTop"

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  const revealVariants = shouldReduceMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 48 },
        animate: { opacity: 1, y: 0 },
      }

  const viewport = shouldReduceMotion ? undefined : { once: true, amount: 0.2 }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate bg-background/80">
        <Header />
        <Hero />
      </div>

      <motion.div
        initial={revealVariants?.initial}
        whileInView={revealVariants?.animate}
        viewport={viewport}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Features />
      </motion.div>
      <motion.div
        initial={revealVariants?.initial}
        whileInView={revealVariants?.animate}
        viewport={viewport}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial={revealVariants?.initial}
        whileInView={revealVariants?.animate}
        viewport={viewport}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      >
        <Pricing />
      </motion.div>
      <motion.div
        initial={revealVariants?.initial}
        whileInView={revealVariants?.animate}
        viewport={viewport}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <Contact />
      </motion.div>
      <motion.div
        initial={revealVariants?.initial}
        whileInView={revealVariants?.animate}
        viewport={viewport}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
      >
        <CTA />
      </motion.div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
