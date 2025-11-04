import React, { useMemo, useState } from 'react'
import { Calculator, Wallet, Ruler, ArrowRight } from 'lucide-react'

const currency = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
    isNaN(n) ? 0 : Math.round(n)
  )

export default function CostCalculator() {
  const [inputs, setInputs] = useState({
    flat_cost: '',
    land_price_per_sq_yard: '',
    built_up_area_sft: '',
    super_built_up_area_sft: '',
    construction_cost_per_sft: 2000,
    additional_charges: 1000000,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    const numeric = value === '' ? '' : Number(value)
    if (value === '' || !Number.isNaN(numeric)) {
      setInputs((prev) => ({ ...prev, [id]: numeric }))
    }
  }

  const calc = useMemo(() => {
    const flat_cost = Number(inputs.flat_cost) || 0
    const land_price_per_sq_yard = Number(inputs.land_price_per_sq_yard) || 0
    const built_up_area_sft = Number(inputs.built_up_area_sft) || 0
    const super_built_up_area_sft = Number(inputs.super_built_up_area_sft) || 0
    const construction_cost_per_sft = Number(inputs.construction_cost_per_sft) || 0
    const additional_charges = Number(inputs.additional_charges) || 0

    const land_required_sq_yards = super_built_up_area_sft / 9
    const land_cost = land_required_sq_yards * land_price_per_sq_yard
    const construction_cost = built_up_area_sft * construction_cost_per_sft

    const total_self_build_cost = land_cost + construction_cost + additional_charges
    const cost_difference = total_self_build_cost - flat_cost

    return {
      land_required_sq_yards,
      land_cost,
      construction_cost,
      total_self_build_cost,
      cost_difference,
      flat_cost,
      additional_charges,
    }
  }, [inputs])

  const summaryText = useMemo(() => {
    const diff = calc.cost_difference
    if (!isFinite(diff)) return ''
    if (diff > 0) {
      return `Self-build would require ${currency(diff)} more than buying the flat.`
    } else if (diff < 0) {
      return `Buying the apartment saves you ${currency(Math.abs(diff))} compared to self-build.`
    } else {
      return 'Both options cost roughly the same based on your inputs.'
    }
  }, [calc.cost_difference])

  const hasCalculated =
    [inputs.flat_cost, inputs.land_price_per_sq_yard, inputs.built_up_area_sft, inputs.super_built_up_area_sft].filter(
      (v) => v !== ''
    ).length === 4

  return (
    <section id="calculator" className="scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300">
          Land vs Apartment Cost Comparison
        </h2>
        <p className="mt-3 text-indigo-100/90 max-w-3xl mx-auto">
          Curious about how flat prices compare to buying land and building an equivalent home? Use our quick calculator!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-indigo-950 flex items-center justify-center">
              <Calculator size={20} />
            </div>
            <h3 className="text-xl font-semibold">Enter your numbers</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <NumberField id="flat_cost" label="Flat Cost (₹)" placeholder="e.g. 60,00,000" value={inputs.flat_cost} onChange={handleChange} />
            <NumberField
              id="land_price_per_sq_yard"
              label="Land Price per Sq Yard (₹)"
              placeholder="e.g. 25,000"
              value={inputs.land_price_per_sq_yard}
              onChange={handleChange}
            />
            <NumberField
              id="built_up_area_sft"
              label="Built Up Area (Sq Ft)"
              placeholder="e.g. 1,248"
              value={inputs.built_up_area_sft}
              onChange={handleChange}
            />
            <NumberField
              id="super_built_up_area_sft"
              label="Super Built Up Area (Sq Ft)"
              placeholder="e.g. 1,600"
              value={inputs.super_built_up_area_sft}
              onChange={handleChange}
            />
            <NumberField
              id="construction_cost_per_sft"
              label="Construction Cost per Sq Ft (₹)"
              placeholder="e.g. 2,000"
              value={inputs.construction_cost_per_sft}
              onChange={handleChange}
            />
            <NumberField
              id="additional_charges"
              label="Additional Charges (Permissions, Basement etc) (₹)"
              placeholder="e.g. 10,00,000"
              value={inputs.additional_charges}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <a href="#results" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-indigo-950 font-semibold px-6 py-3 shadow-lg shadow-amber-500/20">
              Calculate <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div id="results" className="space-y-6">
          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-indigo-950 flex items-center justify-center">
                <Wallet size={20} />
              </div>
              <h3 className="text-xl font-semibold">Summary</h3>
            </div>

            {!hasCalculated ? (
              <p className="text-indigo-100/80">Fill in the required fields to see the comparison.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SummaryCard label="Flat Cost" value={currency(calc.flat_cost)} />
                <SummaryCard label="Land Required (Sq Yards)" value={`${isNaN(calc.land_required_sq_yards) ? 0 : Math.round(calc.land_required_sq_yards)} sq yd`} />
                <SummaryCard label="Land Cost" value={currency(calc.land_cost)} />
                <SummaryCard label="Construction Cost" value={currency(calc.construction_cost)} />
                <SummaryCard label="Additional Charges" value={currency(calc.additional_charges)} />
                <SummaryCard label="Total Self Build Cost" value={currency(calc.total_self_build_cost)} highlight />
                <SummaryCard label="Cost Difference" value={currency(calc.cost_difference)} highlight subtle />
              </div>
            )}
          </div>

          {hasCalculated && (
            <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-300 to-yellow-400 text-indigo-950 flex items-center justify-center">
                  <Ruler size={18} />
                </div>
                <h4 className="text-lg font-semibold">Result</h4>
              </div>
              <p className="text-indigo-50/90 text-base">{summaryText}</p>
              <p className="mt-2 text-indigo-200/80 text-sm">
                Example check: For Flat ₹60L, Land ₹25k/yd², Built-up 1248 sft, Super 1600 sft, Construction ₹2000/sft, Additional ₹10L → Self-build ≈ ₹79.46L (₹19.46L more).
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function NumberField({ id, label, value, onChange, placeholder }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm text-indigo-100/90">{label}</span>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:border-transparent"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

function SummaryCard({ label, value, highlight = false, subtle = false }) {
  return (
    <div
      className={
        'rounded-2xl p-5 border backdrop-blur-md ' +
        (highlight
          ? 'bg-amber-300/15 border-amber-300/30 shadow-amber-300/10 shadow-xl'
          : 'bg-white/10 border-white/15')
      }
    >
      <div className="text-xs uppercase tracking-wider text-indigo-100/70">{label}</div>
      <div className={`mt-2 text-xl font-semibold ${highlight ? 'text-amber-200' : 'text-white'}`}>{value}</div>
      {subtle && <div className="mt-1 text-xs text-indigo-200/70">Positive = Self-build costs more</div>}
    </div>
  )
}
