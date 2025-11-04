import React from 'react'
import { Ruler, ShieldCheck, MapPin, Home } from 'lucide-react'

const points = [
  {
    icon: Home,
    title: 'Spacious Living',
    desc:
      'Modern apartments offer maximized built-up area with smart layouts, letting you enjoy larger, more usable living spaces for your family.',
  },
  {
    icon: StarIcon,
    title: 'World-class Amenities',
    desc:
      'Access top-tier facilities—clubhouse, pool, gym, security, party hall, landscaped gardens—all within your gated community.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Construction Hassle',
    desc:
      'No dealing with contractors, approvals, or project delays—move in with ease, leaving all the coordination to experts.',
  },
  {
    icon: Ruler,
    title: 'Safe Investment',
    desc:
      'With a trusted builder, quality and legal safety are guaranteed, giving you complete peace of mind.',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    desc:
      'Apartments are often located near business districts, schools, and entertainment hubs, simplifying your daily life.',
  },
]

function Card({ Icon, title, desc }) {
  return (
    <div className="group backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition shadow-lg shadow-indigo-900/20">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-indigo-950 flex items-center justify-center shadow-md">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-indigo-100/90 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function SellingPoints() {
  return (
    <section id="why" className="scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300">
          Why buy an apartment?
        </h2>
        <p className="mt-3 text-indigo-100/90 max-w-2xl mx-auto">
          Apartments combine intelligent space planning, premium amenities, and future-ready locations—wrapped in the safety of a reputable builder.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p, idx) => (
          <Card key={idx} Icon={p.icon} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  )
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true" {...props}>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}
