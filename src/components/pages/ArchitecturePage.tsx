import { useState } from 'react'
import PageLayout from '../layout/PageLayout'
import OrchestratorSection from '../OrchestratorSection'
import IntelligenceSection from '../IntelligenceSection'
import { architectureLayers } from '../../data/architecture'

interface ArchitecturePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function ArchitecturePage({ onNavigate }: ArchitecturePageProps) {
  const [activeLayerNum, setActiveLayerNum] = useState<number>(1)
  const activeLayer = architectureLayers.find((l) => l.num === activeLayerNum) || architectureLayers[0]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Enterprise Operating Architecture"
      heroTitle={
        <>
          One Operating Architecture. <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">Every layer connected.</span>
        </>
      }
      heroDescription="Seven architectural layers — from user experience and six purpose-built systems to multi-agent orchestration, domain intelligence routing, and enterprise security governance."
      heroBadges={['7-Layer Operating OS', 'Model-Agnostic Intelligence', 'Multi-Agent Orchestration', 'Policy-Driven Security']}
      ctaTitle="Review the complete technical architecture specification"
      ctaDescription="Schedule a deep-dive architecture session with a Principal Enterprise Solutions Architect."
      ctaButtonText="Book Architecture Deep Dive"
    >
      {/* 01. The 7-Layer Interactive System Diagram */}
      <section className="py-20 bg-white border-b border-slate-200" id="layers">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              Full-Stack System Map
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Explore the 7 Architecture Layers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Select any layer in the operating stack below to inspect its functional responsibilities, underlying subsystems, and integration pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer Stack Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              {architectureLayers.map((l) => (
                <button
                  key={l.num}
                  onClick={() => setActiveLayerNum(l.num)}
                  aria-pressed={activeLayerNum === l.num}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] ${
                    activeLayerNum === l.num
                      ? `${l.bg} ${l.border} shadow-sm ring-1 ring-orange-500/30`
                      : 'border-slate-200 hover:border-[#FF5500]/40 bg-slate-50 text-slate-700 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          activeLayerNum === l.num ? `bg-[#FF5500] text-white shadow-2xs` : 'bg-slate-200 text-slate-800'
                        }`}
                      >
                        0{l.num}
                      </span>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">{l.title}</div>
                        <div className="text-[11px] text-slate-500">{l.subtitle}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF5500]">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Layer Deep-Dive Detail Card */}
            <div className={`lg:col-span-7 p-8 sm:p-10 rounded-2xl border ${activeLayer.border} ${activeLayer.bg} shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold text-white bg-[#FF5500] shadow-2xs">
                  Layer 0{activeLayer.num}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">{activeLayer.title}</h3>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed mb-6 font-medium">
                {activeLayer.detail}
              </p>

              <div className="mb-6">
                <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-3">
                  Key Subsystems & Components
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.items.map((it) => (
                    <span
                      key={it}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 shadow-2xs"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contextual Link */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 font-semibold">
                  Operating Layer: ScaleOnIt Verified Architecture
                </span>
                {activeLayer.num === 3 ? (
                  <button
                    onClick={() => onNavigate('/ai-workforce')}
                    className="text-xs font-mono font-bold text-[#FF5500] hover:underline cursor-pointer"
                  >
                    View AI Workforce Directory →
                  </button>
                ) : activeLayer.num === 7 ? (
                  <button
                    onClick={() => onNavigate('/security')}
                    className="text-xs font-mono font-bold text-[#FF5500] hover:underline cursor-pointer"
                  >
                    View Security Governance →
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Multi-Agent Orchestrator Stepper (Reused Component) */}
      <OrchestratorSection />

      {/* 03. Model-Agnostic Intelligence Layer (Reused Component) */}
      <IntelligenceSection onNavigateToIntelligence={() => onNavigate('/platform/intelligence')} />
    </PageLayout>
  )
}
