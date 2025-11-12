"use client"

import { motion } from "framer-motion"
import { Clock, Gem } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const circuits = [
  {
    title: "Le Secret de la Favorite",
    location: "Palais El Badi, Marrakech",
    difficulty: "Facile",
    duration: "90 min",
    treasures: 5,
    description: "Suivez les traces d'une sultane mystérieuse dans les palais Saadiens de Marrakech.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQvBkFSZ_EWa5pN3TAd-pvOuVIZ7wAFkj6n_wt5nRZ9HOy1BStTYQGxXCIljPQ8SECTkckeZcRhjc0EqTYkJAx7aP0&s=19", // Set manually
  },
  {
    title: "Le Trésor des Corsaires",
    location: "Forteresse des Oudayas, Rabat",

    difficulty: "Moyen",
    duration: "120 min",
    treasures: 7,
    description: "Percez les secrets de la forteresse des Oudayas à Rabat, face à l'océan.",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e7/cb/38/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_1f207b82e6d8d71c5884", // Set manually
  },
  {
    title: "La Voie des Artisans",
    location: "Médina de Fès, Fès",
    difficulty: "Difficile",
    duration: "90 min",
    treasures: 6,
    description: "Plongez au cœur des souks de Fès et découvrez le savoir-faire ancestral.",
    imageUrl: "data:image/jpeg;base64,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", // Set manually
  },
]

const difficultyColors = {
  Facile: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
  Moyen: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400",
  Difficile: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400",
}

export function CircuitsSection() {
  return (
    <section id="destinations" className="py-24 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Aventures en <span className="text-primary">Vedette</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choisissez votre aventure et commencez à explorer les trésors cachés du Maroc
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {circuits.map((circuit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group rounded-2xl p-0">
                {/* Image header with location and difficulty badge */}
                <div className="relative h-48 overflow-hidden -mt-0">
                  {circuit.imageUrl ? (
                    <Image
                      src={circuit.imageUrl}
                      alt={circuit.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                  )}
                  

                  {/* Difficulty badge - top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-bold border ${
                        difficultyColors[circuit.difficulty as keyof typeof difficultyColors]
                      }`}
                    >
                      {circuit.difficulty}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="px-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {circuit.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {circuit.description}
                  </p>

                  {/* Stats with space-between */}
                  <div className="flex items-center justify-between mb-6 text-sm border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{circuit.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <Gem className="w-4 h-4" />
                      <span>{circuit.treasures} Trésors</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-2 hover:bg-primary hover:text-primary-foreground transition-colors mb-5">
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
