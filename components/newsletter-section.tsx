"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface NewsletterSectionProps {
  city: string
  subtitle: string
  description: string
  ctaText: string
}

export function NewsletterSection({
  city,
  subtitle,
  description,
  ctaText,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card border-2 border-border p-8 md:p-12 rounded-2xl">
            <div className="text-center space-y-6 md:space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-brand">
                {city}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground">
                {subtitle}
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                {description}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground h-[48px] px-6">
                  {ctaText}
                </Button>
              </form>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

