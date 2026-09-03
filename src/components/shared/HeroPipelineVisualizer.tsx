import { useState, useEffect } from 'react'

export default function HeroPipelineVisualizer() {
  const [activeStageId, setActiveStageId] = useState<string>('deliver')
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

  const stages = [
    {
      id: 'grow',
      number: '01',
      name: 'GROW',
      simpleTagline: 'Lead Research & Meeting Co-Pilot',
      icon: '🎯',
      badge: 'Step 1 · Sales Intelligence',
      whatItDoes: 'Researches prospects, creates executive profiling reports, and provides live meeting co-pilot assistance during sales calls to crack deals.',
      points: [
        'Detailed company & executive lead profiling',
        'Real-time live call assistance & objection handling',
        'Automatic meeting summary sent straight to Discovery',
      ],
      resultBanner: 'Output: Closed deal with structured business intent',
      flowTag: 'Hands context to Step 02 (DISCOVER)',
    },
    {
      id: 'discover',
      number: '02',
      name: 'DISCOVER',
      simpleTagline: 'Meeting Calls into Reviewable BRD/FRD',
      icon: '📝',
      badge: 'Step 2 · Requirements & Specs',
      whatItDoes: 'Extracts requirements from your discovery calls directly into structured BRD/FRD templates. PMs, BAs, and POs can review, edit, and sign off.',
      points: [
        'Converts call recordings into clear feature specifications',
        'Pre-populated templates tailored to your application type',
        'Full review & alteration gate for PM, BA, and Product Owners',
      ],
      resultBanner: 'Output: 100% agreed specification with zero ambiguity',
      flowTag: 'Hands approved specs to Step 03 (DELIVER)',
    },
    {
      id: 'deliver',
      number: '03',
      name: 'DELIVER (ONIT)',
      simpleTagline: 'Wireframe Wonder, Code, QA & Cloud Release',
      icon: '⚡',
      badge: 'Step 3 · Flagship Autonomous SDLC',
      whatItDoes: 'Creates interactive visual wireframe prototypes to impress clients and lock alterations, followed by autonomous multi-agent UI/UX, React/Node coding, and 100% Playwright QA.',
      points: [
        'Instant interactive wireframe prototypes for client approval',
        'Autonomous multi-agent React 19 UI & Node backend engineering',
        'Comprehensive 100% Playwright automated regression QA tests',
      ],
      resultBanner: 'Output: Production-ready software tested and deployed to cloud',
      flowTag: 'Hands deployed release to Step 04 & 05 (PEOPLE & FINANCIALS)',
    },
    {
      id: 'people',
      number: '04',
      name: 'PEOPLE',
      simpleTagline: 'AI-Assisted Task, Sprint & Team Management',
      icon: '👥',
      badge: 'Step 4 · Workforce & Sprints',
      whatItDoes: 'Organizes tasks, auto-balances team sprints, tracks developer velocity, and optimizes skills utilization so there is zero bench waste.',
      points: [
        'AI breaks down feature specifications into clear sprint tasks',
        'Smart engineer matching based on skills & available capacity',
        'Automated progress tracking and team velocity forecasts',
      ],
      resultBanner: 'Output: Balanced team workload with zero bottleneck delays',
      flowTag: 'Syncs sprint progress directly with Step 05 (FINANCIALS)',
    },
    {
      id: 'financials',
      number: '05',
      name: 'FINANCIALS',
      simpleTagline: 'Milestone Payments & Delivery Triggers',
      icon: '💳',
      badge: 'Step 5 · Billing & Margins',
      whatItDoes: 'Connects software delivery milestones directly to automatic payment triggers and tracks real-time project margins to guarantee profitability.',
      points: [
        'Automatic invoicing triggered upon verified QA delivery gates',
        'Real-time tracking of project cost, budget burn, and profit margins',
        'Clear financial transparency between clients and engineering leads',
      ],
      resultBanner: 'Output: Predictable cashflow and verified milestone payouts',
      flowTag: 'Syncs contract milestones with Step 06 (SERVE)',
    },
    {
      id: 'serve',
      number: '06',
      name: 'SERVE',
      simpleTagline: 'Customer Service & Git Code Traceability',
      icon: '🛡️',
      badge: 'Step 6 · CRM & Retention',
      whatItDoes: 'Delivers superior customer service and support with direct traceability from customer tickets back to Git commits and original specifications.',
      points: [
        'Support tickets traced directly to code commits for instant root cause',
        'Proactive SLA monitoring and customer satisfaction tracking',
        'Zero handoff loss between support, product, and engineering',
      ],
      resultBanner: 'Output: Rapid issue resolution and high client retention',
      flowTag: 'Closes the loop back to Step 01 (GROW for renewals & expansion)',
    },
  ]

  // Auto-cycle through the 6 stages when not paused
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveStageId((prevId) => {
        const currentIndex = stages.findIndex((s) => s.id === prevId)
        const nextIndex = (currentIndex + 1) % stages.length
        return stages[nextIndex].id
      })
    }, 4500)
    return () => clearInterval(timer)
  }, [isAutoPlaying, stages])

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[2]

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[620px] rounded-3xl bg-[#090D14] border border-slate-800 shadow-[0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden font-sans text-white text-xs flex flex-col">
      {/* Top Window Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-7 py-3.5 border-b border-slate-800/80 bg-[#06090E] shrink-0 font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-xs text-slate-300 font-bold tracking-tight">
            ScaleOnIt Operating Loop · <span className="text-[#FF5500]">6 Connected Business Steps</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
          >
            {isAutoPlaying ? '⏸ Pause Tour' : '▶ Play Tour'}
          </button>
          <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            LIVE SYNC
          </span>
        </div>
      </div>

      {/* Main 2-Column Master-Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-hidden">
        {/* Left Column: Clean 6 Steps Selector */}
        <div className="lg:col-span-5 p-5 bg-[#0B0F19] border-b lg:border-b-0 lg:border-r border-slate-800/90 space-y-2.5 overflow-y-auto">
          <div className="text-[11px] font-mono uppercase font-bold text-slate-400 px-2 mb-2 tracking-wider flex items-center justify-between">
            <span>Operating Steps</span>
            <span className="text-[#FF5500] text-[10px]">Click any step</span>
          </div>

          {stages.map((stage) => {
            const isSelected = stage.id === activeStage.id
            const isDeliver = stage.id === 'deliver'

            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStageId(stage.id)
                  setIsAutoPlaying(false)
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#141C2B] border-[#FF5500] shadow-[0_0_20px_rgba(255,85,0,0.25)] ring-1 ring-[#FF5500]'
                    : 'bg-[#0E1320] border-slate-800/70 hover:bg-[#121828] hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs font-mono shrink-0 ${
                    isSelected ? 'bg-[#FF5500] text-white shadow-xs' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {stage.number}
                  </span>
                  <div>
                    <div className="font-extrabold text-sm text-white flex items-center gap-2">
                      <span>{stage.name}</span>
                      {isDeliver && (
                        <span className="text-[9px] bg-orange-500/20 text-[#FF5500] border border-orange-500/30 px-2 py-0.5 rounded font-mono font-bold">
                          FLAGSHIP
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 font-medium line-clamp-1">
                      {stage.simpleTagline}
                    </div>
                  </div>
                </div>

                <span className={`text-base font-bold transition-all ${
                  isSelected ? 'text-[#FF5500] translate-x-0' : 'text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5'
                }`}>
                  →
                </span>
              </button>
            )
          })}
        </div>

        {/* Right Column: Clear, Spacious & Simple Explanation */}
        <div className="lg:col-span-7 p-7 sm:p-8 bg-[#070A12] flex flex-col justify-between space-y-5 overflow-y-auto">
          {/* Header & Main Purpose */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{activeStage.icon}</span>
                <div>
                  <div className="font-mono text-[11px] text-[#FF5500] font-bold uppercase tracking-wider">
                    {activeStage.badge}
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    {activeStage.name} — {activeStage.simpleTagline}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-normal bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
              {activeStage.whatItDoes}
            </p>
          </div>

          {/* Key Benefits Checklist */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider">
              How This Step Works:
            </div>
            <div className="space-y-2">
              {activeStage.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-200 bg-[#0E1422] p-3 rounded-xl border border-slate-800/80">
                  <span className="text-[#FF5500] font-bold font-mono text-sm shrink-0">✓</span>
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Result Outcome Banner */}
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>{activeStage.resultBanner}</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-bold uppercase shrink-0">
              VERIFIED
            </span>
          </div>

          {/* Bottom Continuous Flow Bar */}
          <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-200 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-[#FF5500] font-black">↳ FLOW:</span>
              <span className="truncate">{activeStage.flowTag}</span>
            </div>
            <span className="font-mono text-[10px] font-bold bg-[#FF5500] text-white px-2.5 py-1 rounded-md uppercase shrink-0 shadow-xs">
              NO DATA LOSS
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
