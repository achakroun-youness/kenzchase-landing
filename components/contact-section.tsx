"use client"

import { motion } from "framer-motion"
import { Headphones, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Rejoignez <span className="text-primary">l'Aventure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Que vous soyez un explorateur curieux ou un futur partenaire, nous serions ravis d'échanger avec vous.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Player Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span id="pros" />
              <span id="creer" />
              <Card className="p-8 h-full flex flex-col items-center text-center rounded-2xl hover:shadow-lg transition-shadow">
                {/* Icon at top */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6"
                >
                  <Headphones className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Vous êtes un Joueur ?
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-8 text-pretty flex-grow">
                  Une question sur une aventure ? Une suggestion ? Notre équipe est là pour vous aider.
                </p>

                {/* Button */}
                <a  className="w-full">
                  <Button variant="link" className="text-primary hover:text-primary/80 text-lg font-medium gap-2 w-full">
                    Contacter le Support →
                  </Button>
                </a>
              </Card>
            </motion.div>

            {/* Partner Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 h-full flex flex-col items-center text-center rounded-2xl hover:shadow-lg transition-shadow">
                {/* Icon at top */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6"
                >
                  <Building2 className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Vous êtes un Partenaire ?
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-8 text-pretty flex-grow">
                  Hôtels, musées, restaurants... Découvrez comment Kenz Chase peut créer une expérience unique pour vos clients.
                </p>

                {/* Button */}
                <a href="#pros" className="w-full">
                  <Button variant="link" className="text-primary hover:text-primary/80 text-lg font-medium gap-2 w-full">
                    Devenir Partenaire →
                  </Button>
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
