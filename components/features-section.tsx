"use client"

import { motion } from "framer-motion"
import { Map, Gamepad2, TrendingUp, Coins } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Map,
    title: "Interactive Circuits",
    description: "Guided tours through historical sites with sequential points of interest",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Gamepad2,
    title: "Gamified Quests",
    description: "QCM, Photo Challenges, AR Experiences, and Puzzles at each location",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: TrendingUp,
    title: "Level & XP System",
    description: "Progress from Explorer to Legend, unlock achievements and rewards",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Coins,
    title: "Coin Economy",
    description: "Earn and spend coins to unlock premium circuits and exclusive content",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything You Need for an <span className="text-primary">Epic Adventure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transform your Marrakech visit into an unforgettable gaming experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
