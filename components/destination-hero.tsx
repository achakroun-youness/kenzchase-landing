"use client"

import { motion } from "framer-motion"

interface DestinationHeroProps {
  city: string
  subtitle: string
  description: string
}

export function DestinationHero({ city, subtitle, description }: DestinationHeroProps) {
  return (
    <section className="pt-5  px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground font-brand">
            {city}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground font-brand mt-4">
            {subtitle}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mt-6">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

