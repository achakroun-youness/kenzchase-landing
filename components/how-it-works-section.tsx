"use client"

import { motion } from "framer-motion"
import { Search, Navigation, Trophy } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse nearby circuits on the interactive map with GPS markers",
    step: "01",
  },
  {
    icon: Navigation,
    title: "Explore",
    description: "Walk to points of interest and complete engaging quests",
    step: "02",
  },
  {
    icon: Trophy,
    title: "Level Up",
    description: "Earn XP, collect rewards, and unlock achievements",
    step: "03",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three simple steps to start your adventure in Marrakech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="absolute -top-6 text-7xl font-bold text-primary/10">{step.step}</div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative z-10 w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-lg"
                >
                  <step.icon className="w-10 h-10" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
