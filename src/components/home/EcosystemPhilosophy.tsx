import { useState } from 'react'

export default function EcosystemPhilosophy() {
  const [activeTab, setActiveTab] = useState<string>('DELIVER')

  const pillars = [
    {
      name: 'GROW',
      purpose: 'Lead Research & Call Co-Pilot',
      highlight: 'Deep lead research, rich profiling reports, and real-time AI assistance during prospect calls and meetings to crack deals.',
      benefit: 'Gives sales teams live conversational intelligence and verified executive intelligence.',
    },
    {
      name: 'DISCOVER',
      purpose: 'Call Requirements & BRD/FRD',
      highlight: 'Extracts requirements from discovery calls directly into application-tailored BRD/FRD templates, reviewed and edited by PMs, BAs, and POs.',
      benefit: 'Eliminates requirement hallucination and enables direct human review before any code is built.',
    },
    {
      name: 'DELIVER',
      purpose: 'Wireframe Wonder & ONIT SDLC',
      highlight: 'Transforms signed-off specs into visual wireframe wonders for client review, followed by multi-agent React/Node coding and 100% Playwright QA.',
      benefit: 'Flagship operating engine turning specifications into client-pleasing visual apps and governed releases.',
    },
    {
      name: 'PEOPLE',
      purpose: 'AI Sprint & Task Management',
      highlight: 'AI-assisted task assignment, sprint velocity tracking, skills taxonomy, and workload balancing across teams.',
      benefit: 'Aligns specialized engineer talent to project sprint demand without bench waste.',
    },
    {
      name: 'FINANCIALS',
      purpose: 'Milestone Payments & Progress',
      highlight: 'Ties project delivery milestones directly to payment triggers, budget burn tracking, and automated margin alignment.',
      benefit: 'Gives executive teams automated financial progress triggers and real-time margin visibility.',
    },
    {
      name: 'SERVE',
      purpose: 'CRM & Commit Traceability',
      highlight: 'Customer support and CRM with direct traceability into git commits and original requirements for instant resolution.',
      benefit: 'Empowers customer success teams with direct insight into deployed code releases and SLA health.',
    },
  ]

  const activePillar = pillars.find((p) => p.name === activeTab) || pillars[2]

  const comparison = [
    {
      aspect: 'Architecture Approach',
      traditional: 'Monolithic ERP / Bloated "All-in-One" Dashboard that does everything poorly',
      scaleonit: 'Six Purpose-Built Systems, each engineered specifically for its operational domain',
    },
    {
      aspect: 'Information & Context',
      traditional: 'Siloed data repositories requiring manual export, import, and sync pipelines',
      scaleonit: 'Shared Operating Context — upstream intent directly flows into downstream execution',
    },
    {
      aspect: 'Intelligence & Automation',
      traditional: 'Generic chatbot overlays pasted onto forms without domain workflow context',
      scaleonit: 'Specialized Domain Intelligence embedded directly into the work of each system',
    },
    {
      aspect: 'Operational Agility',
      traditional: 'Rigid vendor lock-in that forces your entire company into unnatural workflows',
      scaleonit: 'Modular adoption — start where you need, connected to your existing infrastructure',
    },
  ]

  return (
    <section
      id="philosophy"
      aria-label="The ScaleOnIt Idea — Purpose-Built Systems in One Ecosystem"
      className="py-24 bg-transparent text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            THE SCALEONIT PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Different problems need different systems.{' '}
            <span className="text-[#FF5500] block mt-1">
              Six systems. Six purposes. One ecosystem.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            ScaleOnIt connects purpose-specific systems that help businesses operate with precision across every stage: from lead profiling to wireframe wonders, sprint tasks, and milestone payments.
          </p>
        </div>

        {/* 6 Core Pillars Interactive Breakdown with Data Stream Connection */}
        <div className="relative mb-6">
          {/* Connecting dashed line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 border-t-2 border-dashed border-orange-300/80 -translate-y-1/2 z-0 pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {pillars.map((pillar) => {
              const isSelected = pillar.name === activeTab
              const isDeliver = pillar.name === 'DELIVER'

              return (
                <button
                  key={pillar.name}
                  onClick={() => setActiveTab(pillar.name)}
                  type="button"
                  className={`p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FF5500] text-slate-900 shadow-[4px_4px_0px_0px_#FF5500] -translate-y-1'
                      : isDeliver
                      ? 'bg-orange-50/60 border-orange-200 text-slate-900 shadow-2xs hover:border-[#FF5500] hover:-translate-y-0.5'
                      : 'bg-white border-slate-200 text-slate-800 shadow-[2px_2px_0px_0px_rgba(15,23,42,0.06)] hover:border-[#FF5500] hover:bg-slate-50 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="font-extrabold text-sm sm:text-base tracking-tight">{pillar.name}</span>
                    {isDeliver && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping" />}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase leading-tight">
                    {pillar.purpose}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Pillar Preview Accordion Panel */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                Active Domain Focus:
              </span>
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                {activePillar.name} — {activePillar.purpose}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              {activePillar.highlight}
            </p>
          </div>
          <div className="font-mono text-[11px] font-bold text-slate-700 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shrink-0 shadow-2xs">
            ↳ {activePillar.benefit}
          </div>
        </div>

        {/* Strategic Comparison: Traditional vs ScaleOnIt Operating Ecosystem */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-[4px_4px_0px_0px_#0F172A]">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              The Evolution of Enterprise Business Software
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-mono">
              Why monolithic ERPs and disconnected point tools fail modern high-velocity teams
            </p>
          </div>

          <div className="space-y-4">
            {comparison.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div className="md:col-span-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center">
                  {item.aspect}
                </div>
                <div className="md:col-span-4 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold font-mono">✕</span>
                  <span>{item.traditional}</span>
                </div>
                <div className="md:col-span-5 text-xs font-medium text-slate-900 bg-orange-50/40 p-3.5 rounded-lg border border-orange-200 flex items-start gap-2.5 shadow-2xs">
                  <span className="text-[#FF5500] font-bold font-mono">✓</span>
                  <span>{item.scaleonit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
