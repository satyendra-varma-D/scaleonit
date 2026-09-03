import { useState } from 'react'
import { roleBenefits } from '../../data/ecosystem'
import ROICalculator from '../shared/ROICalculator'

export default function RoleBenefitsSection() {
  const [activeTab, setActiveTab] = useState<string>('leaders')
  const current = roleBenefits.find((r) => r.id === activeTab) || roleBenefits[0]

  return (
    <section
      id="how-it-helps"
      aria-label="How ScaleOnIt Helps Businesses — Stakeholder Value Perspectives"
      className="py-24 bg-transparent text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            REAL BUSINESS IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            How the ecosystem actually helps.{' '}
            <span className="text-[#FF5500] block mt-1">Different roles. Connected advantages.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt is designed around the operational realities of modern enterprises. See how connected systems transform daily execution across key stakeholder perspectives.
          </p>
        </div>

        {/* Role Perspective Switcher Tabs with Hard Shadows */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {roleBenefits.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-2.5 rounded-lg font-mono font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2.5 border ${
                activeTab === item.id
                  ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-[3px_3px_0px_0px_#0F172A] -translate-y-0.5'
                  : 'bg-white text-slate-700 border-slate-200 shadow-2xs hover:border-[#FF5500] hover:text-slate-900'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.role}</span>
            </button>
          ))}
        </div>

        {/* Active Role Deep Dive Card (Hard Shadow) */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-[4px_4px_0px_0px_#0F172A] max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{current.icon}</span>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                    Perspective for:
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {current.role}
                  </h3>
                </div>
              </div>

              <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {current.headline}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {current.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                {current.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800"
                  >
                    <span className="text-[#FF5500] font-mono font-bold mt-0.5">✓</span>
                    <span className="font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary Badge / Metric Focus */}
            <div className="lg:col-span-4 p-8 rounded-xl bg-orange-50/50 border border-orange-200 text-center space-y-4 shadow-2xs">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Operating Advantage
              </div>
              <div className="text-3xl font-black text-[#FF5500] font-mono">
                {current.metric}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminates operational latency by connecting domain context directly across teams.
              </p>
              <div className="pt-3 border-t border-orange-200/60 text-[11px] text-[#FF5500] font-mono font-bold uppercase">
                Visibility → Decisions → Execution → Outcomes
              </div>
            </div>
          </div>
        </div>

        {/* Interactive ROI & Velocity Calculator Component */}
        <ROICalculator />

        {/* 4 Pillars Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
          {[
            { label: 'Better Visibility', desc: 'No more reporting blind spots' },
            { label: 'Better Decisions', desc: 'Context-grounded actions' },
            { label: 'Better Execution', desc: 'Zero manual handoff drag' },
            { label: 'Better Outcomes', desc: 'Predictable business growth' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all"
            >
              <div className="font-mono text-xs font-bold uppercase text-slate-900 mb-1">{item.label}</div>
              <div className="text-[11px] text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
