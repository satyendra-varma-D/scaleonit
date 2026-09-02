import { useState } from 'react'
import { roleBenefits } from '../../data/ecosystem'

export default function RoleBenefitsSection() {
  const [activeTab, setActiveTab] = useState<string>('leaders')
  const current = roleBenefits.find((r) => r.id === activeTab) || roleBenefits[0]

  return (
    <section
      id="how-it-helps"
      aria-label="How ScaleOnIt Helps Businesses — Stakeholder Value Perspectives"
      className="py-24 bg-white text-[#1B0A2A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-4 py-1.5 rounded-full mb-6">
            Real Business Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            How the ecosystem actually helps.{' '}
            <span className="text-[#FF5841] block mt-1">Different roles. Connected advantages.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt is designed around the operational realities of modern enterprises. See how connected systems transform daily work across key perspectives.
          </p>
        </div>

        {/* Role Perspective Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {roleBenefits.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2.5 border ${
                activeTab === item.id
                  ? 'bg-[#C53678] text-white border-[#C53678] shadow-md shadow-[#C53678]/25'
                  : 'bg-[#FAFAFC] text-[#1B0A2A] border-[#EAE6F0] hover:bg-[#FDF2F7] hover:border-[#C53678]/40 hover:text-[#C53678]'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.role}</span>
            </button>
          ))}
        </div>

        {/* Active Role Deep Dive Card */}
        <div className="rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] p-6 sm:p-10 shadow-[0_15px_40px_rgba(27,10,42,0.04)] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{current.icon}</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C53678]">
                    Perspective for:
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight">
                    {current.role}
                  </h3>
                </div>
              </div>

              <div className="text-base sm:text-lg font-bold text-[#1B0A2A] leading-snug">
                {current.headline}
              </div>

              <p className="text-xs sm:text-sm text-[#5A4E68] leading-relaxed">
                {current.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                {current.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EAE6F0] text-xs sm:text-sm text-[#1B0A2A] shadow-2xs"
                  >
                    <span className="text-[#FF5841] font-bold mt-0.5">✓</span>
                    <span className="font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary Badge / Metric Focus */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#EAE6F0] text-center space-y-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68]">
                Core Operating Advantage
              </div>
              <div className="text-3xl font-black text-[#C53678]">
                {current.metric}
              </div>
              <p className="text-xs text-[#5A4E68] leading-relaxed">
                Eliminates operational latency by connecting domain context directly across teams.
              </p>
              <div className="pt-3 border-t border-[#EAE6F0] text-[11px] text-[#5A4E68] font-mono font-medium">
                Visibility → Decisions → Execution → Outcomes
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
          {[
            { label: 'Better Visibility', desc: 'No more reporting blind spots' },
            { label: 'Better Decisions', desc: 'Context-grounded actions' },
            { label: 'Better Execution', desc: 'Zero manual handoff drag' },
            { label: 'Better Outcomes', desc: 'Predictable business growth' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] text-center">
              <div className="text-xs font-black text-[#1B0A2A] mb-1">{item.label}</div>
              <div className="text-[11px] text-[#5A4E68]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
