import { useState, useEffect } from 'react'

const stages = [
  {
    id: 'idea', label: 'IDEA', shortDesc: 'Business goal captured',
    module: 'GROW', ai: 'AI SDR',
    aiDesc: 'Converts prospect conversations into qualified opportunities and initial scope.',
    color: 'text-lime-500', bg: 'bg-lime-50', border: 'border-lime-200', dot: 'bg-lime-500',
  },
  {
    id: 'discover', label: 'DISCOVER', shortDesc: 'Requirements & analysis',
    module: 'DISCOVER', ai: 'AI Business Analyst',
    aiDesc: 'Turns customer conversations into BRDs, user stories, and implementation-ready requirements.',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200', dot: 'bg-onit',
  },
  {
    id: 'design', label: 'DESIGN', shortDesc: 'UX flows & design systems',
    module: 'DESIGN', ai: 'AI UX Designer',
    aiDesc: 'Produces user flows, wireframes, and design specifications from approved requirements.',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200', dot: 'bg-onit',
  },
  {
    id: 'architect', label: 'ARCHITECT', shortDesc: 'Services, APIs & infrastructure',
    module: 'ENGINEER', ai: 'AI Solution Architect',
    aiDesc: 'Defines system architecture, data models, API contracts, and infrastructure from design specs.',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', dot: 'bg-ai-violet',
  },
  {
    id: 'engineer', label: 'ENGINEER', shortDesc: 'Code, review & releases',
    module: 'ENGINEER', ai: 'AI Engineering Agent',
    aiDesc: 'Implements features, reviews code, manages repositories, and coordinates releases.',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', dot: 'bg-ai-violet',
  },
  {
    id: 'quality', label: 'QUALITY', shortDesc: 'Testing & QA gates',
    module: 'QUALITY', ai: 'AI QA Engineer',
    aiDesc: 'Creates test strategies, executes test suites, and enforces quality gates before deployment.',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', dot: 'bg-data-cyan',
  },
  {
    id: 'deploy', label: 'DEPLOY', shortDesc: 'CI/CD & release management',
    module: 'DELIVER', ai: 'AI DevOps Engineer',
    aiDesc: 'Manages pipelines, environment provisioning, release coordination, and deployment verification.',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', dot: 'bg-data-cyan',
  },
  {
    id: 'serve', label: 'SERVE', shortDesc: 'Support & customer success',
    module: 'SERVE', ai: 'AI Support Agent',
    aiDesc: 'Resolves tickets, monitors SLAs, tracks customer health, and surfaces escalations.',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-500',
  },
  {
    id: 'improve', label: 'IMPROVE', shortDesc: 'Feedback drives next cycle',
    module: 'INTELLIGENCE', ai: 'AI Customer Success',
    aiDesc: 'Synthesizes feedback, surfaces improvement opportunities, and feeds insights back to discovery.',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-500',
  },
]

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [pulseIdx, setPulseIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPulseIdx((p) => (p + 1) % stages.length), 900)
    return () => clearInterval(id)
  }, [])

  const active = activeIdx !== null ? stages[activeIdx] : stages[pulseIdx]
  const showDetail = activeIdx !== null

  return (
    <section
      id="hero"
      aria-label="ONIT — AI-Native Operating Platform for Software Delivery"
      className="relative min-h-screen pt-16 flex items-center bg-white overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0B1220 1px, transparent 1px), linear-gradient(90deg, #0B1220 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Blue glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-onit/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

        {/* Left — copy */}
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-onit mb-8 border border-onit/20 bg-onit-light px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-onit" style={{ animation: 'pulse-status 1.8s ease-in-out infinite' }} />
            The AI-Native Operating Platform for Software Delivery
          </div>

          <h1 className="text-[clamp(2.6rem,5.5vw,4rem)] font-extrabold text-midnight leading-[1.04] tracking-[-0.02em] mb-6">
            From idea<br />to production.<br />
            <span className="text-onit">ONIT runs</span><br />the journey.
          </h1>

          <p className="text-[1.05rem] text-mid-text leading-relaxed mb-10 max-w-lg">
            Connect requirements, design, engineering, quality, deployment, project operations and support into one modular operating platform — with AI working across the lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-onit text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-onit-hover transition-all duration-150 hover:shadow-lg hover:shadow-onit/25 text-sm"
            >
              Explore How ONIT Works
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M3 7.5h9M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 text-midnight font-semibold px-6 py-3.5 rounded-xl border border-border-base hover:border-slate-300 hover:bg-pearl transition-all duration-150 text-sm"
            >
              Explore the Platform
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-border-base grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            {[
              { label: 'Platform Capabilities', value: '11 Modules' },
              { label: 'AI Specialists', value: '14 Workers' },
              { label: 'Integration Layer', value: 'Open Connect' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-mid-text mb-1">{stat.label}</div>
                <div className="text-sm font-bold text-midnight">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — interactive lifecycle */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[340px]">

            {/* Desktop Detail Card (Left of chain) */}
            <div
              className={`hidden lg:block absolute right-full mr-6 top-1/2 -translate-y-1/2 w-52 bg-white rounded-xl border border-border-base shadow-xl p-4 z-20 transition-all duration-200 ${
                showDetail ? 'opacity-100 translate-x-0' : 'opacity-80 translate-x-2'
              }`}
            >
              <div className={`text-[10px] font-bold tracking-[0.16em] uppercase mb-2 ${active.color}`}>
                {active.module}
              </div>
              <div className="text-xs font-bold text-midnight mb-1.5">{active.ai}</div>
              <p className="text-[11px] text-mid-text leading-relaxed">{active.aiDesc}</p>
            </div>

            {/* Lifecycle chain */}
            <div className="flex flex-col">
              {stages.map((stage, i) => {
                const isActive = i === pulseIdx
                const isHovered = i === activeIdx
                return (
                  <div key={stage.id} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                        onMouseEnter={() => setActiveIdx(i)}
                        onMouseLeave={() => setActiveIdx(null)}
                        aria-label={`${stage.label} lifecycle stage — ${stage.shortDesc}`}
                        className={`relative w-10 h-10 rounded-xl border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 z-10 cursor-pointer
                          ${isHovered
                            ? `border-midnight bg-midnight text-white scale-105 shadow-md`
                            : isActive
                            ? `${stage.border} ${stage.bg} ${stage.color} shadow-md`
                            : 'border-border-base bg-white text-slate-400 hover:border-slate-300'
                          }`}
                        style={isActive ? { animation: 'lifecycle-pulse 1.2s ease-in-out infinite' } : {}}
                      >
                        {i + 1}
                      </button>
                      {i < stages.length - 1 && (
                        <div
                          className={`relative w-0.5 my-1 overflow-hidden transition-all duration-500 ${isActive || i === pulseIdx - 1 ? 'h-8' : 'h-7'}`}
                          style={{ background: isActive ? 'var(--color-onit)' : '#E2E8F0' }}
                        >
                          {isActive && (
                            <div
                              className="absolute w-full h-3 rounded-full bg-white/80"
                              style={{ animation: 'flow-dot 0.9s linear infinite' }}
                            />
                          )}
                        </div>
                      )}
                      {i === stages.length - 1 && (
                        <div className="w-0.5 h-5 mt-1 bg-border-base" />
                      )}
                    </div>

                    <div className={`py-0.5 transition-all duration-200 ${isActive || isHovered ? 'opacity-100' : 'opacity-55'}`}>
                      <div className={`text-[13px] font-bold tracking-[0.12em] uppercase leading-tight ${isActive || isHovered ? active.color : 'text-midnight'}`}>
                        {stage.label}
                      </div>
                      {(isActive || isHovered) && (
                        <div className="text-[11px] text-mid-text mt-0.5 font-medium">{stage.ai}</div>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Loop back indicator */}
              <div className="flex items-center gap-2 mt-2 ml-14">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7a5 5 0 1 0 5-5" stroke="#84cc16" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5 2L2 5h3" stroke="#84cc16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-semibold text-lime-500 tracking-wide">Continuous delivery loop</span>
              </div>
            </div>

            {/* Mobile Detail Card (Directly below the chain on small screens) */}
            <div className="block lg:hidden mt-6 bg-white rounded-xl border border-border-base shadow-sm p-4 w-full animate-fade-in">
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-bold tracking-[0.16em] uppercase ${active.color}`}>
                  {active.module}
                </span>
                <span className="text-[10px] font-semibold text-mid-text bg-pearl px-2 py-0.5 rounded">
                  Tap stage to inspect
                </span>
              </div>
              <div className="text-xs font-bold text-midnight mb-1">{active.ai}</div>
              <p className="text-[11px] text-mid-text leading-relaxed">{active.aiDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

