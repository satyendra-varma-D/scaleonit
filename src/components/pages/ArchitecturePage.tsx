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
      breadcrumbs={[{ label: 'Architecture' }]}
      heroEyebrow="Enterprise Operating System"
      heroTitle={
        <>
          One Operating Architecture. <br className="hidden sm:inline" />
          <span className="text-onit">Every layer connected.</span>
        </>
      }
      heroDescription="Seven architectural layers — from user experience and business SDLC to multi-agent orchestration, intelligence routing, and enterprise security governance. Designed as a coherent operating system for modern software delivery."
      heroBadges={['7-Layer Operating OS', 'Model-Agnostic Intelligence', 'Multi-Agent Orchestration', 'Policy-Driven Security']}
      ctaTitle="Review the complete technical architecture specification"
      ctaDescription="Schedule a deep-dive architecture session with a Principal Enterprise Solutions Architect."
      ctaButtonText="Book Architecture Deep Dive"
    >
      {/* 01. The 7-Layer Interactive System Diagram */}
      <section className="py-20 bg-white border-b border-border-base" id="layers">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-onit bg-onit-light border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
              Full-Stack System Map
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-3">
              Explore the 7 Architecture Layers
            </h2>
            <p className="text-sm sm:text-base text-mid-text leading-relaxed">
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
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit ${
                    activeLayerNum === l.num
                      ? `${l.bg} ${l.border} shadow-md`
                      : 'border-border-base hover:border-slate-300 bg-pearl text-mid-text'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          activeLayerNum === l.num ? `${l.accent} text-white` : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        0{l.num}
                      </span>
                      <div>
                        <div className="text-xs font-extrabold text-midnight">{l.title}</div>
                        <div className="text-[11px] text-mid-text">{l.subtitle}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold opacity-75">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Layer Deep-Dive Detail Card */}
            <div className={`lg:col-span-7 p-8 rounded-2xl border-2 ${activeLayer.border} ${activeLayer.bg} shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold text-white ${activeLayer.accent}`}>
                  Layer 0{activeLayer.num}
                </span>
                <h3 className="text-xl font-extrabold text-midnight">{activeLayer.title}</h3>
              </div>

              <p className="text-sm text-midnight leading-relaxed mb-6 font-medium">
                {activeLayer.detail}
              </p>

              <div className="mb-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-3">
                  Key Subsystems & Components
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.items.map((it) => (
                    <span
                      key={it}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-border-base text-midnight shadow-2xs"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contextual Link */}
              <div className="pt-4 border-t border-border-base/50 flex items-center justify-between">
                <span className="text-xs text-mid-text font-semibold">
                  Operating Layer: Verified in ONIT Specification
                </span>
                {activeLayer.num === 3 ? (
                  <button
                    onClick={() => onNavigate('/ai-workforce')}
                    className="text-xs font-bold text-ai-violet hover:underline cursor-pointer"
                  >
                    View AI Workforce Directory →
                  </button>
                ) : activeLayer.num === 6 ? (
                  <button
                    onClick={() => onNavigate('/platform/connect')}
                    className="text-xs font-bold text-data-cyan hover:underline cursor-pointer"
                  >
                    View Integration Connectors →
                  </button>
                ) : activeLayer.num === 7 ? (
                  <button
                    onClick={() => onNavigate('/security')}
                    className="text-xs font-bold text-onit hover:underline cursor-pointer"
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
