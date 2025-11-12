"use client"

import { motion } from "framer-motion"
import { Map, Gamepad2, TrendingUp, Coins } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Map,
    title: "Circuits Narratifs",
    description: "Suivez des parcours scénarisés à travers les légendes de chaque site historique",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Gamepad2,
    title: "Défis Immersifs",
    description: "Relevez des quiz culturels, des défis photo et des expériences en Réalité Augmentée à chaque étape.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: TrendingUp,
    title: "Progression & Succès",
    description: "Gagnez de l'expérience (XP) à chaque découverte pour débloquer des titres et des succès exclusifs.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Coins,
    title: "Trésors & Collections",
    description: "Collectionnez des artéfacts 3D uniques et des souvenirs numériques pour compléter votre Codex d'explorateur.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
]

export function FeaturesSection() {
  return (
    <section id="experiences" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Une Aventure <span className="text-primary">Épique</span> à chaque Visite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transformez votre exploration en une expérience de jeu inoubliable
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
