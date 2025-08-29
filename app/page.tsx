"use client"

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
  return (
    <div className="min-h-screen bg-background">
      {/* Background Image Container */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/football-field-bg.png')" }}
      >
        {/* Dark overlay */}
        <div className="bg-black/40">
          <Header />
          <Hero />
        </div>
      </div>
      
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
