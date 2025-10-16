"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 5, suffix: "+", label: "Historic Circuits" },
  { value: 50, suffix: "+", label: "Interactive Quests" },
  { value: 10, suffix: "", label: "Achievement Types" },
  { value: 100, suffix: "%", label: "AR Experiences" },
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
            By The <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of adventurers exploring Marrakech
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
