import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SellingPoints from './components/SellingPoints'
import ImageShowcase from './components/ImageShowcase'
import CostCalculator from './components/CostCalculator'
import CTASection from './components/CTASection'
import FAQSection from './components/FAQSection'

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white">
      {/* Ambient gold glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <SellingPoints />
        <ImageShowcase />
        <CostCalculator />
        <CTASection />
        <div id="faq" className="scroll-mt-20">
          <FAQSection />
        </div>
      </main>
    </div>
  )
}
