"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Coins } from "lucide-react"

export function PhoneMockup() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="relative z-10"
    >
      {/* Phone frame */}
      <div className="relative w-[280px] h-[560px] bg-card rounded-[3rem] border-8 border-foreground/10 shadow-2xl overflow-hidden">
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl z-20" />

        {/* Phone screen content */}
        <div className="absolute inset-2 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="h-12 bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 pt-2">
            <span className="text-xs font-semibold text-foreground">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 bg-foreground/60 rounded-sm" />
              <div className="w-4 h-3 bg-foreground/60 rounded-sm" />
              <div className="w-4 h-3 bg-foreground/60 rounded-sm" />
            </div>
          </div>

          {/* App content */}
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <h3 className="text-sm font-bold text-foreground mb-2">Koutoubia Historical Tour</h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  2.5 km
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  Easy
                </span>
                <span className="flex items-center gap-1">
                  <Coins className="w-3 h-3 text-accent" />
                  10 coins
                </span>
              </div>
            </div>

            {/* Map preview */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl h-48 relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30" />
              {/* Map markers */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                  className="absolute w-6 h-6 bg-primary rounded-full border-2 border-card shadow-lg"
                  style={{
                    top: `${30 + i * 25}%`,
                    left: `${20 + i * 30}%`,
                  }}
                >
                  <MapPin className="w-4 h-4 text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              ))}
            </div>

            {/* Quest card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-foreground">Current Quest</span>
                <span className="text-xs text-primary font-bold">+50 XP</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AR indicator */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg"
      >
        AR Enabled
      </motion.div>
    </motion.div>
  )
}
