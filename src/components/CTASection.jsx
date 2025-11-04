import React from 'react'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="text-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-3xl px-6 sm:px-12 py-12 shadow-[0_0_80px_-10px_rgba(180,160,255,0.25)]">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300">
          Ready to live the premium lifestyle?
        </h3>
        <p className="mt-3 text-indigo-100/90 max-w-2xl mx-auto">
          Discover trusted builders and get a personalized quote tailored to your vision.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-indigo-950 font-semibold px-6 py-3 shadow-lg shadow-amber-500/20 hover:brightness-105 transition">
            Find Trusted Builders <ArrowRight size={18} />
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/10 transition">
            <Phone size={18} /> Contact for Personalized Quote
          </button>
        </div>
      </div>
    </section>
  )
}
