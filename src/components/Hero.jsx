import React from 'react'
import Spline from '@splinetool/react-spline'
import { Building2, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const apartmentImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop', // luxury living room
  'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop', // modern apartment
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop', // kitchen
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop', // bedroom
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop', // skyline
]

function MarqueeRow({ reverse = false }) {
  const imgs = [...apartmentImages, ...apartmentImages]
  return (
    <div className="pointer-events-none overflow-hidden">
      <motion.div
        className="flex gap-4"
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-50%' }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {imgs.map((src, i) => (
          <div key={i} className="relative h-28 w-56 sm:h-32 sm:w-64 md:h-36 md:w-72 rounded-2xl overflow-hidden">
            <img src={src} alt="Luxury apartment" className="h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 via-indigo-900/0 to-amber-300/10" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* 3D Luxury Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient veil so text stays readable; does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-indigo-900/55 to-indigo-900/80" />
      </div>

      {/* Moving apartment imagery, subtly layered above Spline but below content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-10 space-y-3 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl opacity-70">
          <MarqueeRow />
        </div>
        <div className="mx-auto max-w-7xl opacity-60">
          <MarqueeRow reverse />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-[28px] p-8 sm:p-12 shadow-[0_0_120px_-20px_rgba(252,211,77,0.25)]">
            <div className="flex items-center gap-3 text-amber-200 mb-4">
              <Star className="text-amber-300" />
              <span className="uppercase tracking-[0.25em] text-amber-200/90 text-xs sm:text-sm">Premium • Modern • Luxury</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Smart Apartment Buying
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300">Compare. Invest. Upgrade.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-indigo-100/90 max-w-3xl">
              Confident decisions with elegant comparisons and a glassy cost calculator designed for modern, luxury living.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#calculator" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-indigo-950 font-semibold px-6 py-3 shadow-lg shadow-amber-500/25 hover:brightness-105 transition">
                <Building2 size={20} /> Start Comparing
              </a>
              <a href="#why" className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/10 transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
