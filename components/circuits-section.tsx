"use client"

import { motion } from "framer-motion"
import { Clock, Coins } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const circuits = [
  {
    title: "Koutoubia Historical Tour",
    difficulty: "Easy",
    duration: "60min",
    coins: 10,
    description: "Discover the iconic Koutoubia Mosque and surrounding gardens",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Saadian Tombs Mystery",
    difficulty: "Medium",
    duration: "90min",
    coins: 12,
    description: "Uncover the secrets of the royal necropolis",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Bahia Palace Adventure",
    difficulty: "Hard",
    duration: "120min",
    coins: 15,
    description: "Explore the stunning 19th-century palace complex",
    color: "from-accent/20 to-accent/5",
  },
]

const difficultyColors = {
  Easy: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
  Medium: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400",
  Hard: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400",
}

export function CircuitsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Circuits</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose your adventure and start exploring Marrakech's treasures
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
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group">
                {/* Card header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${circuit.color} relative overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-20"
                  >
                    <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full" />
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/30 rounded-full" />
                  </motion.div>

                  {/* Difficulty badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        difficultyColors[circuit.difficulty as keyof typeof difficultyColors]
                      }`}
                    >
                      {circuit.difficulty}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {circuit.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{circuit.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{circuit.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-accent font-semibold">
                      <Coins className="w-4 h-4" />
                      <span>{circuit.coins} coins</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Circuit
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
