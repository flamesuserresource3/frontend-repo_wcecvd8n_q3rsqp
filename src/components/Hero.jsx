import React from 'react'
import Spline from '@splinetool/react-spline'
import { Building2, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-indigo-900/60 to-indigo-900/80" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-3xl p-8 sm:p-12 shadow-[0_0_80px_-10px_rgba(180,160,255,0.35)]">
            <div className="flex items-center gap-3 text-gold-400 mb-4">
              <Star className="text-amber-300" />
              <span className="uppercase tracking-widest text-amber-200/90 text-xs sm:text-sm">Premium • Modern • Luxury</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              Smart Apartment Buying:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300"> Compare, Invest & Upgrade Your Lifestyle</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-indigo-100/90 max-w-3xl">
              Make confident real-estate decisions with glassy insights, elegant comparisons, and a sleek cost calculator designed for modern living.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#calculator" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-indigo-950 font-semibold px-6 py-3 shadow-lg shadow-amber-500/20 hover:brightness-105 transition">
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
