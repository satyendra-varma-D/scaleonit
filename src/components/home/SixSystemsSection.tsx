import { useState } from 'react'
import { sixSystems } from '../../data/ecosystem'

interface SixSystemsSectionProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function SixSystemsSection({ onNavigate }: SixSystemsSectionProps) {
  const [selectedId, setSelectedId] = useState<string>('deliver')
  const activeSystem = sixSystems.find((s) => s.id === selectedId) || sixSystems[2]

  return (
    <section
      id="six-systems"
      aria-label="One Platform. Six Connected Systems."
      className="py-20 bg-transparent text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            THE SIX SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            One platform. Six connected systems.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Each system has a clear job. Together, they help your business work as one.
          </p>
        </div>

        {/* 6 System Cards Grid (Fast to Scan in a few seconds) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {sixSystems.map((system) => {
            const isDeliver = system.id === 'deliver'
            const isSelected = system.id === selectedId

            return (
              <div
                key={system.id}
                onClick={() => setSelectedId(system.id)}
                className={`p-6 rounded-2xl border transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#FF5500] bg-orange-50/70 shadow-[3px_3px_0px_0px_#FF5500] backdrop-blur-xs'
                    : isDeliver
                    ? 'border-orange-200 bg-white/90 backdrop-blur-xs shadow-2xs hover:border-[#FF5500] hover:bg-white'
                    : 'border-slate-200 bg-white/90 backdrop-blur-xs shadow-2xs hover:border-slate-400 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl" aria-hidden="true">{system.icon}</span>
                    {isDeliver ? (
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FF5500] text-white shadow-2xs">
                        Powered today by ONIT
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100/80 text-slate-600 border border-slate-200">
                        Roadmap
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-xl text-slate-900 mb-2">
                    {system.name}
                  </h3>

                  <p className="text-sm text-slate-700 leading-snug font-medium mb-3">
                    {system.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#FF5500] font-semibold">
                  <span>{isSelected ? 'Viewing Specs' : 'Click to View'}</span>
                  <span>→</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected System Detail Bento Panel */}
        <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 p-6 sm:p-8 shadow-[3px_3px_0px_0px_#0F172A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeSystem.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {activeSystem.name}
                    </h4>
                    {activeSystem.id === 'deliver' && (
                      <span className="font-mono text-xs font-bold bg-orange-50 text-[#FF5500] border border-orange-200 px-2 py-0.5 rounded">
                        Powered today by ONIT
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-[#FF5500] font-semibold">
                    {activeSystem.tagline}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {activeSystem.purpose}
              </p>

              {/* Capabilities checklist */}
              <div className="pt-2 space-y-2">
                <div className="font-mono text-xs font-bold uppercase text-slate-500">
                  Core Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSystem.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[#FF5500] font-bold">✓</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeSystem.id === 'deliver' && (
                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('/platform/deliver')}
                    className="px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-2xs transition-colors cursor-pointer"
                  >
                    Explore DELIVER (ONIT) →
                  </button>
                </div>
              )}
            </div>

            {/* Right: Realistic interface snippet */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
              <div className="font-mono text-xs font-bold uppercase text-slate-500 flex items-center justify-between pb-2 border-b border-slate-200">
                <span>System Workflow</span>
                <span className="text-[#FF5500]">{activeSystem.statusLabel}</span>
              </div>

              <div className="space-y-2.5">
                <div className="font-mono text-xs text-slate-500">
                  Process Steps:
                </div>
                <div className="space-y-1.5">
                  {activeSystem.journey.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 text-xs font-mono text-slate-800">
                      <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5500] flex items-center justify-center font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-orange-50/60 border border-orange-200 text-xs space-y-1">
                <div className="font-mono font-bold text-[#FF5500] uppercase text-[11px]">
                  {activeSystem.intelligenceType}
                </div>
                <p className="text-slate-600 leading-snug">
                  {activeSystem.intelligenceDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

