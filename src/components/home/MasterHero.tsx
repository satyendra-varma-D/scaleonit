import { useState } from 'react'
import { sixSystems } from '../../data/ecosystem'
import GlowCard from '../shared/GlowCard'
import HeroPipelineVisualizer from '../shared/HeroPipelineVisualizer'

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
      className="relative min-h-[95vh] pt-32 pb-24 flex items-center bg-transparent text-slate-900 overflow-hidden"
    >
      {/* Dynamic Animated Orange Spotlight Auroras */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-orange-400/5 to-transparent pointer-events-none blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Light Grid Overlay with subtle gradient fade */}
      <div className="absolute inset-0 light-grid-canvas opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-6xl mx-auto mb-14">
          {/* Monospace Eyebrow Badge with Orange Accent */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
            <span>BUSINESS OPERATING ECOSYSTEM</span>
          </div>

          {/* Sharp High-Contrast Headline with Electric Orange Accent */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto">
            The operating ecosystem <br className="hidden sm:inline" />
            <span className="text-[#FF5500]">
              for modern enterprise.
            </span>
          </h1>

          {/* Muted Charcoal Body Statement */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            ScaleOnIt connects purpose-built business systems into a unified operating loop — helping organizations{' '}
            <span className="text-slate-900 font-semibold">research &amp; crack leads (grow)</span>,{' '}
            <span className="text-slate-900 font-semibold">capture requirements (discover)</span>,{' '}
            <span className="text-[#FF5500] font-bold">wireframe &amp; deliver (deliver)</span>,{' '}
            <span className="text-slate-900 font-semibold">manage teams (people)</span>,{' '}
            <span className="text-slate-900 font-semibold">align milestone payments (financials)</span>, and{' '}
            <span className="text-slate-900 font-semibold">serve customers</span>.
          </p>

          {/* Primary Action Buttons with Shimmer Light-Sweep & Hard-Shadows */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={() => onNavigate('/', '#six-systems')}
              className="relative overflow-hidden px-7 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-semibold text-xs font-mono uppercase tracking-wider shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 cursor-pointer flex items-center gap-2 group before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
            >
              <span className="relative z-10">EXPLORE ECOSYSTEM</span>
              <span className="relative z-10 group-hover:translate-y-0.5 transition-transform font-sans text-sm">↓</span>
            </button>
            <button
              onClick={() => onNavigate('/', '#deliver-onit')}
              className="relative overflow-hidden px-7 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 font-mono font-medium text-xs uppercase tracking-wider border border-slate-200 hover:border-[#FF5500] shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 cursor-pointer flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              <span>FLAGSHIP: ONIT</span>
              <span className="font-sans text-sm">→</span>
            </button>
          </div>

          {/* Interactive Multi-Stage Hero Pipeline Visualizer & Motion Graphics */}
          <HeroPipelineVisualizer />
        </div>

        {/* Master Ecosystem Architecture Visualization with Interactive Stream Connection */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-[4px_4px_0px_0px_#0F172A]">
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-mono font-bold tracking-widest text-slate-900 uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] shadow-sm shadow-orange-500/40" />
                  <span>SCALEONIT ARCHITECTURE MATRIX</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-slate-500 hidden sm:inline font-medium">6 Purpose-Built Engines</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-[#FF5500]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                <span>CONNECTED OPERATING CONTEXT</span>
              </div>
            </div>

            {/* 6 Systems Interactive Grid with Glow Tracking & Data Flow Line */}
            <div className="relative my-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sixSystems.map((system) => {
                  const isSelected = activeSystem.id === system.id
                  const isDeliver = system.id === 'deliver'

                  return (
                    <GlowCard
                      key={system.id}
                      onClick={() => setActiveSystemId(system.id)}
                      aria-label={`View ${system.name} system details`}
                      className={`p-5 rounded-xl text-left cursor-pointer border transition-all duration-200 ease-out ${
                        isDeliver ? 'ring-2 ring-orange-500/20 animate-pulse' : ''
                      } ${
                        isSelected
                          ? 'border-[#FF5500] bg-orange-50/40 shadow-[4px_4px_0px_0px_#FF5500] -translate-y-1 -translate-x-1'
                          : 'border-slate-200 bg-white shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1'
                      }`}
                    >
                      {/* Flagship Badge on DELIVER */}
                      {isDeliver && (
                        <div className="absolute top-3 right-3 font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF5500] text-white shadow-xs">
                          Flagship · ONIT
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl" aria-hidden="true">{system.icon}</span>
                        <span
                          className={`font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                            system.status === 'active'
                              ? 'text-[#FF5500] bg-orange-50 border border-orange-200'
                              : 'text-slate-500 bg-slate-50 border border-slate-200'
                          }`}
                        >
                          {system.status === 'active' ? 'Active' : 'Roadmap'}
                        </span>
                      </div>

                      <div className="font-extrabold text-lg tracking-tight text-slate-900 mb-1">
                        {system.name}
                      </div>
                      <div className="text-xs text-slate-600 font-medium line-clamp-1 mb-2">
                        {system.tagline}
                      </div>

                      <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5 pt-2 border-t border-slate-100">
                        <span className="text-slate-400 font-semibold">Flow:</span>
                        <span className="truncate text-slate-800 font-semibold">{system.journeyText}</span>
                      </div>
                    </GlowCard>
                  )
                })}
              </div>
            </div>

            {/* Selected System Deep Dive Preview Bar */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    Active Focus:
                  </span>
                  <span className="font-mono text-xs font-bold text-[#FF5500]">
                    {activeSystem.name} — {activeSystem.tagline}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activeSystem.purpose}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                {activeSystem.id === 'deliver' ? (
                  <button
                    onClick={() => onNavigate('/', '#deliver-onit')}
                    className="relative overflow-hidden w-full md:w-auto px-5 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer text-center before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
                  >
                    <span className="relative z-10">EXPLORE ONIT (DELIVER) →</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate('/', '#six-systems')}
                    className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 text-xs font-mono font-medium border border-slate-200 transition-colors cursor-pointer text-center shadow-2xs"
                  >
                    VIEW SPECS ↓
                  </button>
                )}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-4 text-center font-mono text-[11px] font-medium text-slate-500">
              One ecosystem. Six purpose-built systems. Connected operating intelligence.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
