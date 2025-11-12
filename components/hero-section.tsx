"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { FloatingLandmarks } from "./floating-landmarks";
import { PhoneMockup } from "./phone-mockup";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-sm font-semibold text-primary">
                🇲🇦 Discover Marrakech
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight font-brand"
            >
              Le Maroc,{" "}
              <span className="text-primary">Votre Nouveau Terrain de Jeu.</span>
            </motion.h1>

           

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground mb-10 text-pretty max-w-xl mx-auto lg:mx-0"
            >
              Découvrez les trésors culturels du Maroc comme jamais auparavant. Avec Kenz Chase, suivez des circuits historiques, résolvez des énigmes en Réalité Augmentée et transformez votre visite en une quête épique.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Apple className="mr-2 h-5 w-5" />
                Télécharger sur iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Télécharger sur Android
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8"
            >
              <Button variant="link" className="text-primary">
              Regardez la vidéo de présentation →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - 3D elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <FloatingLandmarks />
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
