"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
        {/* Moroccan pattern loader */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-24 h-24 relative"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.15,
              }}
              className="absolute w-4 h-4 bg-primary rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translateY(-40px)`,
              }}
            />
          ))}
        </motion.div>

        {/* Logo text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <h1 className="text-2xl font-bold text-primary">Kenz Chase</h1>
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-0.5 bg-primary mt-2"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
