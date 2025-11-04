import React from 'react'
import { Building2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      {/* Transparent glass bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-indigo-950 shadow-md">
                <Building2 size={20} />
              </span>
              <span className="text-sm sm:text-base font-semibold tracking-wide">Smart Apartment</span>
            </a>

            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <a href="#why" className="px-3 py-2 rounded-lg text-indigo-50 hover:bg-white/10 transition">Why</a>
              <a href="#calculator" className="px-3 py-2 rounded-lg text-indigo-50 hover:bg-white/10 transition">Calculator</a>
              <a href="#gallery" className="px-3 py-2 rounded-lg text-indigo-50 hover:bg-white/10 transition">Gallery</a>
              <a href="#faq" className="px-3 py-2 rounded-lg text-indigo-50 hover:bg-white/10 transition">FAQ</a>
            </div>

            <div className="flex items-center gap-2">
              <a href="#calculator" className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-indigo-950 font-semibold px-4 py-2 shadow-md shadow-amber-500/20 hover:brightness-105 transition">
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
