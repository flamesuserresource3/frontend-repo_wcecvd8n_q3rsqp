import React from 'react'
import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop', label: 'Skyline Residences' },
  { src: 'https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1600&auto=format&fit=crop', label: 'Urban Heights' },
  { src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop', label: 'Cityview Towers' },
  { src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: 'Aurora Apartments' },
  { src: 'https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=1600&auto=format&fit=crop', label: 'Goldcrest Point' },
  { src: 'https://images.unsplash.com/photo-1505245208761-ba872912fac0?q=80&w=1600&auto=format&fit=crop', label: 'Harbor Lights' },
]

function Tile({ src, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5"
    >
      <motion.img
        src={src}
        alt={label}
        className="h-56 w-full object-cover sm:h-64 md:h-72"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-indigo-900/10 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <span className="text-sm font-medium text-white drop-shadow">{label}</span>
        <span className="rounded-md bg-white/10 px-2 py-1 text-xs text-amber-200 border border-white/20">Luxury</span>
      </div>
    </motion.div>
  )
}

export default function ImageShowcase() {
  return (
    <section id="gallery" className="scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300">
          High‑rise Inspirations
        </h2>
        <p className="mt-3 text-indigo-100/90 max-w-2xl mx-auto">
          Soak in panoramic skyline views and modern urban living across a curated selection of premium apartments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((it, i) => (
          <Tile key={i} src={it.src} label={it.label} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}
