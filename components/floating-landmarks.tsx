"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei"
import { motion } from "framer-motion"

function MoroccanLandmark({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <coneGeometry args={[0.5, 1.5, 4]} />
        <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0.4} />
      </mesh>
    </Float>
  )
}

function MoroccanArch({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={position}>
        <torusGeometry args={[0.6, 0.2, 16, 32, Math.PI]} />
        <MeshDistortMaterial color="#F2CC8F" distort={0.2} speed={1.5} roughness={0.3} />
      </mesh>
    </Float>
  )
}

function FloatingOrbs() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[Math.sin(i) * 3, Math.cos(i) * 2, -2 - i * 0.5]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#E07A5F" emissive="#E07A5F" emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
    </>
  )
}

export function FloatingLandmarks() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3D5A80" />

        <MoroccanLandmark position={[-2, 1, 0]} color="#E07A5F" />
        <MoroccanLandmark position={[2, -1, -1]} color="#3D5A80" />
        <MoroccanArch position={[0, 0, -2]} />
        <FloatingOrbs />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-32 h-40 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-primary/30 rounded-sm" />
      </motion.div>

      {/* Moroccan pattern circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-3 h-3 bg-primary rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 10}%`,
          }}
        />
      ))}
    </div>
  )
}
