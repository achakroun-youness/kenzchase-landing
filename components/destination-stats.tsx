"use client"

import { motion } from "framer-motion"

interface DestinationStatsProps {
  adventures: number
  treasures: number
  hours: number
}

export function DestinationStats({ adventures, treasures, hours }: DestinationStatsProps) {
  const stats = [
    {
      value: adventures,
      suffix: "",
      label: "Aventures Disponibles",
    },
    {
      value: treasures,
      suffix: "+",
      label: "Trésors à Découvrir",
    },
    {
      value: hours,
      suffix: "+",
      label: "Heures d'Exploration",
    },
  ]

  return (
    <section className="px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

