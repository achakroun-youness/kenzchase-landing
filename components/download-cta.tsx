"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export function DownloadCTA() {
  return (
    <section className="px-4 bg-primary/10">
      <div className="container mx-auto max-w-4xl py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Prêt à Commencer Votre Propre Légende ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-lg px-8 py-6"
            >
              <Apple className="mr-2 h-5 w-5" />
              Télécharger l'Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Télécharger l'Application
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

