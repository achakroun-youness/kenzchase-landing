"use client"

import { motion } from "framer-motion"
import { Clock, Gem } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Adventure {
  title: string
  location: string
  difficulty: "Facile" | "Moyen" | "Difficile"
  duration: string
  treasures: number
  description: string
  imageUrl?: string
}

interface OtherAdventuresProps {
  city: string
  adventures: Adventure[]
}

const difficultyColors = {
  Facile: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
  Moyen: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400",
  Difficile: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400",
}

export function OtherAdventures({ city, adventures }: OtherAdventuresProps) {
  return (
    <section className="px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Autres Aventures à {city}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 md:gap-8">
          {adventures.map((adventure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group rounded-2xl p-0">
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  {adventure.imageUrl ? (
                    <Image
                      src={adventure.imageUrl}
                      alt={adventure.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                  )}

                  {/* Location badge - top left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-md text-sm font-medium">
                      {adventure.location}
                    </span>
                  </div>

                  {/* Difficulty badge - top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-bold border ${
                        difficultyColors[adventure.difficulty]
                      }`}
                    >
                      {adventure.difficulty}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="px-6">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors mt-4">
                    {adventure.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                    {adventure.description}
                  </p>

                  {/* Stats with space-between */}
                  <div className="flex items-center justify-between text-sm border-t border-border pt-4 mt-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{adventure.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <Gem className="w-4 h-4" />
                      <span>{adventure.treasures} Trésors</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 hover:bg-primary hover:text-primary-foreground transition-colors mt-4 mb-4"
                  >
                    Découvrir l'Aventure →
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

