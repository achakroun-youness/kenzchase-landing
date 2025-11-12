"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Map, Flag, Wand2, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  { 
    value: 3, 
    suffix: "+", 
    label: "Villes à Explorer",
    icon: Map,
  },
  { 
    value: 15, 
    suffix: "+", 
    label: "Aventures Uniques",
    icon: Flag,
  },
  { 
    value: 50, 
    suffix: "+", 
    label: "Expériences AR Magiques",
    icon: Wand2,
  },
  { 
    value: 1000, 
    suffix: "+", 
    label: "Explorateurs Satisfaits",
    icon: Users,
  },
]

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            L'Aventure en <span className="text-primary">Chiffres</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Rejoignez une communauté grandissante d'explorateurs qui redécouvrent le monde, une histoire à la fois.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 md:p-6 text-center bg-card/50 hover:shadow-lg transition-shadow rounded-2xl h-full flex flex-col items-center">
                  {/* Icon at top */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent className="w-7 h-7 md:w-9 md:h-9 text-primary" />
                  </motion.div>
                  
                  {/* Number in middle */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  
                  {/* Label at bottom */}
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
