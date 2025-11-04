"use client"

import { AnimatedCounter } from "@/components/AnimatedCounter"
import TestimonialCard from "./TestimonialCard"
import type { TestimonialsContent } from "@/types/landing"

interface TestimonialsProps {
  content: TestimonialsContent
}

export const Testimonials = ({ content }: TestimonialsProps) => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.heading}</h2>
          <p className="text-xl text-muted-foreground">{content.subheading}</p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-6 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.85)] backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" aria-hidden />
              <div className="relative space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">{stat.label}</p>
                <p className="text-4xl font-semibold text-foreground md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
