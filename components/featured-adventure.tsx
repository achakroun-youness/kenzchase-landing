"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface FeaturedAdventureProps {
  badge?: string
  title: string
  description: string
  imageUrl?: string
  location?: string
}

export function FeaturedAdventure({
  badge,
  title,
  description,
  imageUrl,
  location,
}: FeaturedAdventureProps) {
  return (
    <section className="px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {imageUrl ? (
              <Card className="overflow-hidden rounded-2xl">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  {location && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-md text-sm font-medium">
                        {location}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            ) : (
              <Card className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <p className="text-muted-foreground">{location || "Image"}</p>
              </Card>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            {badge && (
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                  {badge}
                </span>
              </div>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-brand">
              {title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              {description}
            </p>
            <div className="pt-2">
              <Button variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                Voir les détails de l'aventure →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

