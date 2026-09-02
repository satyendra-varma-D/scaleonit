import { useState } from 'react'
import { sixSystems } from '../../data/ecosystem'

interface MasterHeroProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function MasterHero({ onNavigate }: MasterHeroProps) {
  const [activeSystemId, setActiveSystemId] = useState<string>('deliver')
  const activeSystem = sixSystems.find((s) => s.id === activeSystemId) || sixSystems[2]

  return (
    <section
      id="hero"
      aria-label="ScaleOnIt — The Business Operating Ecosystem"
      className="relative min-h-[92vh] pt-32 pb-24 flex items-center bg-white text-[#1B0A2A] overflow-hidden"
    >
      {/* Precision ambient background lighting & subtle organic curves */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FF5841]/10 via-[#C53678]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#3B1A54]/8 via-[#C53678]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      
      {/* Ultra-clean delicate grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1B0A2A 1px, transparent 1px), linear-gradient(90deg, #1B0A2A 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/25 px-4 py-1.5 rounded-full mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5841] animate-pulse" />
            <span>Business Operating Ecosystem</span>
          </div>

          {/* Master Headline with Sunset Orange & Red-Violet Highlights */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B0A2A] tracking-tight leading-[1.08] mb-6">
            The operating ecosystem <br className="hidden sm:inline" />
            <span className="text-[#C53678]">
              for modern businesses.
            </span>
          </h1>

          {/* Plain-English Vision Statement */}
          <p className="text-base sm:text-lg text-[#5A4E68] leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
            ScaleOnIt is building a connected ecosystem of purpose-built business systems — helping organizations{' '}
            <span className="text-[#1B0A2A] font-semibold">grow</span>,{' '}
            <span className="text-[#1B0A2A] font-semibold">discover</span>,{' '}
            <span className="text-[#1B0A2A] font-semibold">deliver</span>,{' '}
            <span className="text-[#1B0A2A] font-semibold">manage people</span>,{' '}
            <span className="text-[#1B0A2A] font-semibold">manage money</span>, and{' '}
            <span className="text-[#1B0A2A] font-semibold">serve customers</span>.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/', '#six-systems')}
              className="px-8 py-4 rounded-full bg-[#C53678] hover:bg-[#A92661] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#C53678]/25 hover:shadow-xl hover:shadow-[#C53678]/35 cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore the Ecosystem</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>
            <button
              onClick={() => onNavigate('/', '#deliver-onit')}
              className="px-7 py-4 rounded-full bg-[#FFF4F2] hover:bg-[#FFE8E4] text-[#FF5841] font-bold text-sm border border-[#FF5841]/30 transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5841]" />
              <span>See Flagship: ONIT</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>

        {/* Master Ecosystem Architecture Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-[#EAE6F0] p-6 sm:p-10 shadow-[0_20px_50px_rgba(27,10,42,0.06)]">
            {/* Header / Brand Connection Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE6F0] text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-extrabold tracking-widest text-[#1B0A2A] uppercase">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FF5841] to-[#C53678]" />
                  <span>SCALEONIT ARCHITECTURE MATRIX</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-[#5A4E68] hidden sm:inline font-medium">6 Purpose-Built Systems</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-[#5A4E68]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FF5841] animate-ping" />
                <span>Connected Operating Context</span>
              </div>
            </div>

            {/* 6 Systems Interactive Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 my-6">
              {sixSystems.map((system) => {
                const isSelected = activeSystem.id === system.id
                const isDeliver = system.id === 'deliver'

                return (
                  <button
                    key={system.id}
                    onClick={() => setActiveSystemId(system.id)}
                    aria-label={`View ${system.name} system details`}
                    className={`relative p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'border-[#C53678] bg-[#FDF2F7] shadow-md shadow-[#C53678]/10 ring-1 ring-[#C53678]/30'
                        : 'border-[#EAE6F0] bg-[#FAFAFC] hover:bg-white hover:border-[#C53678]/40 hover:shadow-sm'
                    }`}
                  >
                    {/* Flagship Badge on DELIVER */}
                    {isDeliver && (
                      <div className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#C53678] to-[#FF5841] text-white shadow-xs">
                        Flagship · ONIT
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl" aria-hidden="true">{system.icon}</span>
                      <span
                        className={`text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md ${
                          system.status === 'active'
                            ? 'text-[#C53678] bg-white border border-[#C53678]/30 shadow-2xs'
                            : 'text-[#5A4E68] bg-white border border-[#EAE6F0]'
                        }`}
                      >
                        {system.status === 'active' ? 'Active' : 'Roadmap'}
                      </span>
                    </div>

                    <div className="font-black text-lg tracking-tight text-[#1B0A2A] mb-1">
                      {system.name}
                    </div>
                    <div className="text-xs text-[#5A4E68] font-medium line-clamp-1 mb-2">
                      {system.tagline}
                    </div>

                    <div className="text-[11px] font-mono text-[#5A4E68] flex items-center gap-1.5 pt-2 border-t border-[#EAE6F0]/60">
                      <span className="text-slate-400">Flow:</span>
                      <span className="truncate text-[#1B0A2A] font-semibold">{system.journeyText}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected System Deep Dive Preview Bar */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A4E68]">
                    Active System Focus:
                  </span>
                  <span className="text-xs font-black text-[#C53678]">
                    {activeSystem.name} — {activeSystem.tagline}
                  </span>
                </div>
                <p className="text-xs text-[#5A4E68] leading-relaxed">
                  {activeSystem.purpose}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                {activeSystem.id === 'deliver' ? (
                  <button
                    onClick={() => onNavigate('/', '#deliver-onit')}
                    className="w-full md:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C53678] to-[#FF5841] hover:opacity-95 text-white font-bold text-xs transition-opacity cursor-pointer text-center shadow-sm"
                  >
                    Explore ONIT (DELIVER) →
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate('/', '#six-systems')}
                    className="w-full md:w-auto px-5 py-2.5 rounded-full bg-white hover:bg-[#F5F3F8] text-[#1B0A2A] text-xs font-bold border border-[#EAE6F0] transition-colors cursor-pointer text-center"
                  >
                    View System Specs ↓
                  </button>
                )}
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-4 text-center text-[11px] font-medium text-[#5A4E68]">
              One ecosystem. Six purpose-built systems. Connected operating intelligence.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
