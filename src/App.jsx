import React from 'react'
import Hero from './components/Hero'
import SellingPoints from './components/SellingPoints'
import CostCalculator from './components/CostCalculator'
import CTASection from './components/CTASection'
import FAQSection from './components/FAQSection'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <SellingPoints />
        <CostCalculator />
        <CTASection />
        <FAQSection />
      </main>
    </div>
  )
}
