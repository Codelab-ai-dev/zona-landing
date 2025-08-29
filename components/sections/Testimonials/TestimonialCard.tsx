"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  initials: string
}

export const TestimonialCard = ({ content, author, role, initials }: TestimonialCardProps) => {
  return (
    <Card className="bg-card border-border">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
          ))}
        </div>
        <p className="text-card-foreground mb-4">{content}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
            <span className="text-primary font-semibold">{initials}</span>
          </div>
          <div>
            <p className="font-semibold text-card-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
