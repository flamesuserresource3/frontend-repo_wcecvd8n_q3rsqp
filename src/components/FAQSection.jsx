import React from 'react'
import { ShieldCheck, Star } from 'lucide-react'

export default function FAQSection() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-indigo-950 flex items-center justify-center">
              <Star size={20} />
            </div>
            <h3 className="text-xl font-semibold">What Makes a Great Apartment Investment?</h3>
          </div>
          <ul className="space-y-3 text-indigo-100/90">
            <li className="flex gap-3"><span className="text-amber-300">•</span> Legal clarity and documentation</li>
            <li className="flex gap-3"><span className="text-amber-300">•</span> Builder's reputation and past projects</li>
            <li className="flex gap-3"><span className="text-amber-300">•</span> Quality of construction</li>
            <li className="flex gap-3"><span className="text-amber-300">•</span> Community and neighborhood profile</li>
          </ul>
        </div>

        <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-indigo-950 flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-6">
            <QA q="Is buying a flat safer than buying land?" a="Usually yes, if you're buying from a reputed builder with clear documentation. Flats come with associated amenities and maintenance support." />
            <QA q="Will my flat appreciate in value?" a="Location, builder reputation, and quality influence value. Our platform features premium, high-growth projects." />
          </div>
        </div>
      </div>
    </section>
  )
}

function QA({ q, a }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <div className="font-semibold text-white">{q}</div>
      <div className="mt-1 text-indigo-100/90">{a}</div>
    </div>
  )
}
