import { useState } from 'react'

export interface LifecycleStage {
  id: string
  step: string
  name: string
  system: string
  systemBadge: string
  actionTitle: string
  description: string
  icon: string
  color: string
  inputs: string[]
  whatHappens: string
  output: string
  liveSnippet: {
    title: string
    codeOrData: string[]
    badge: string
  }
}

export const lifecycleStages: LifecycleStage[] = [
  {
    id: 'research',
    step: '01',
    name: 'Research & Leads',
    system: 'GROW',
    systemBadge: 'STAGE 01 · GROW',
    actionTitle: 'Lead Research & Opportunity Qualification',
    description: 'Client opportunities are identified, company background is researched, and business scope is qualified.',
    icon: '🌱',
    color: '#10B981',
    inputs: ['Client Inquiry', 'Company Research', 'Budget & Timeline Scope'],
    whatHappens: 'GROW analyzes the lead profile, structures the commercial opportunity, and prepares discovery materials.',
    output: 'Qualified sales opportunity with agreed discovery scope',
    liveSnippet: {
      title: 'GROW · Opportunity Qualifier',
      codeOrData: [
        'Client: FinTech Core Services LLC',
        'Scope: Modern banking dashboard + transaction processing API',
        'Status: Qualified → Transferring to DISCOVER',
      ],
      badge: '✓ Lead Qualified',
    },
  },
  {
    id: 'requirements',
    step: '02',
    name: 'Client Requirements',
    system: 'DISCOVER',
    systemBadge: 'STAGE 02 · DISCOVER',
    actionTitle: 'Requirements Ingestion & Structuring',
    description: 'Client briefs, user prompts, and requirement documents are ingested and organized into clear functional specs.',
    icon: '🔍',
    color: '#3B82F6',
    inputs: ['Client Brief PDF', 'Call Transcripts', 'Feature Wishlists'],
    whatHappens: 'DISCOVER parses raw documents into structured user stories, acceptance criteria, and technical constraints.',
    output: 'Verified Business Requirements Document (BRD) & functional plan',
    liveSnippet: {
      title: 'DISCOVER · Requirement Parser',
      codeOrData: [
        'Ingested: spec-banking-v2.pdf (48 pages parsed)',
        'Synthesized: 34 User Stories + 8 API constraints mapped',
        'Status: Signed off by Client & Delivery Director',
      ],
      badge: '✓ 100% Scope Verified',
    },
  },
  {
    id: 'wireframes',
    step: '03',
    name: 'UI Wireframes & Blueprint',
    system: 'DISCOVER → DELIVER',
    systemBadge: 'STAGE 03 · BLUEPRINT',
    actionTitle: 'Interactive Wireframes & Component Specs',
    description: 'Requirements are instantly turned into interactive screen layouts and user flow wireframes before coding.',
    icon: '📐',
    color: '#8B5CF6',
    inputs: ['Structured User Stories', 'Brand Colors', 'Component Specs'],
    whatHappens: 'Generates UI layouts and user journey wireframes so clients and designers can see the flow before code starts.',
    output: 'Approved interactive UI wireframes and design system tokens',
    liveSnippet: {
      title: 'BLUEPRINT · UI Synthesizer',
      codeOrData: [
        'Views: Dashboard, Analytics, User Settings, Invoicing',
        'Components: 24 Tailwind v4 views ready for code build',
        'Status: Client approved interactive prototype',
      ],
      badge: '✓ Prototype Approved',
    },
  },
  {
    id: 'development',
    step: '04',
    name: 'Custom AI Development',
    system: 'DELIVER (ONIT)',
    systemBadge: 'STAGE 04 · DELIVER',
    actionTitle: 'Full-Stack Code Synthesis & Development',
    description: 'AI-assisted development builds production-ready React frontend components, Node.js APIs, and database schemas.',
    icon: '⚡',
    color: '#FF5500',
    inputs: ['Approved Wireframes', 'API Schema Specs', 'Tech Stack Selection'],
    whatHappens: 'DELIVER writes clean, type-safe code, implements business logic, connects databases, and scaffolds APIs.',
    output: 'Production-ready codebase (React 19, TypeScript, Node.js)',
    liveSnippet: {
      title: 'DELIVER · Code Engine (ONIT)',
      codeOrData: [
        'Generated: 14 frontend components + REST API endpoints',
        'Type Safety: 100% Strict TypeScript, zero technical debt',
        'Status: Code built and ready for testing',
      ],
      badge: '✓ Code Ready (Active)',
    },
  },
  {
    id: 'testing',
    step: '05',
    name: 'Automated Testing',
    system: 'DELIVER (QA)',
    systemBadge: 'STAGE 05 · QUALITY',
    actionTitle: 'Automated Regression & E2E Testing',
    description: 'Generates and runs automated end-to-end test suites across browser workflows before deployment.',
    icon: '🧪',
    color: '#EC4899',
    inputs: ['Code Repository', 'Acceptance Criteria', 'Test Scenarios'],
    whatHappens: 'Executes headless automated test suites across all critical user paths to catch defects before release.',
    output: 'Zero-regression audit report with 100% test assertions passed',
    liveSnippet: {
      title: 'QUALITY · Automated Test Suite',
      codeOrData: [
        'Running: 48 Playwright E2E browser test suites',
        'Coverage: API contracts, authentication, checkout flows',
        'Result: 48/48 Passed (0 errors, 0 flaky tests)',
      ],
      badge: '✓ 100% Quality Pass',
    },
  },
  {
    id: 'cloud',
    step: '06',
    name: 'Cloud Deployment',
    system: 'DELIVER (RELEASE)',
    systemBadge: 'STAGE 06 · CLOUD LAUNCH',
    actionTitle: 'Target Cloud Environment Release',
    description: 'Select your target cloud (AWS, Azure, GCP, or Docker VPC) and deploy with an instant live preview URL.',
    icon: '☁️',
    color: '#06B6D4',
    inputs: ['Target Cloud VPC', 'Environment Configs', 'Domain Settings'],
    whatHappens: 'Provisions cloud containers, applies SSL certificates, connects databases, and spins up a live preview URL.',
    output: 'Live deployed application in active staging/production',
    liveSnippet: {
      title: 'RELEASE · Cloud Orchestrator',
      codeOrData: [
        'Target: AWS Cloud VPC (East Region)',
        'Container: Docker rolling deploy (zero downtime)',
        'Live URL: https://preview-8841.scaleonit.app',
      ],
      badge: '🚀 Live in Production',
    },
  },
  {
    id: 'financials',
    step: '07',
    name: 'Financials & Billing',
    system: 'FINANCIALS',
    systemBadge: 'STAGE 07 · FINANCIALS',
    actionTitle: 'Milestone Invoicing & Profit Margins',
    description: 'Connects delivery milestone completion directly to automated client invoice generation and project profit tracking.',
    icon: '📊',
    color: '#EAB308',
    inputs: ['Delivery Milestones', 'Contract Agreement', 'Team Hourly Rates'],
    whatHappens: 'FINANCIALS triggers milestone invoices when software stages are approved, keeping project cash flow clear.',
    output: 'Real-time margin visibility and automated milestone billing',
    liveSnippet: {
      title: 'FINANCIALS · Milestone Tracker',
      codeOrData: [
        'Milestone 2: Prototype & API Delivery completed',
        'Invoice #INV-2026-88: $18,500.00 generated',
        'Project Margin: 42.4% net profitability on track',
      ],
      badge: '✓ Invoice Generated',
    },
  },
  {
    id: 'people',
    step: '08',
    name: 'Team Staffing & Skills',
    system: 'PEOPLE',
    systemBadge: 'STAGE 08 · PEOPLE',
    actionTitle: 'Workforce Allocation & Utilization',
    description: 'Matches engineer skill sets, project capacity, and schedules to ensure smooth execution without burnout.',
    icon: '👥',
    color: '#6366F1',
    inputs: ['Project Timelines', 'Engineer Skill Matrix', 'Current Workloads'],
    whatHappens: 'PEOPLE forecasts staffing needs across all active client accounts and balances workload allocations.',
    output: 'Optimized engineer utilization and project capacity schedule',
    liveSnippet: {
      title: 'PEOPLE · Workforce Manager',
      codeOrData: [
        'Allocated: 2 Senior React Engineers + 1 Node Architect',
        'Utilization: 82.5% optimal team capacity',
        'Schedule: Next milestone locked for Friday delivery',
      ],
      badge: '✓ Team Aligned',
    },
  },
  {
    id: 'serve',
    step: '09',
    name: 'Customer Support & Channel',
    system: 'SERVE',
    systemBadge: 'STAGE 09 · SERVE',
    actionTitle: 'Ongoing Client Support & Shared Channel',
    description: 'Direct communication channel between team and client with ticket-to-code traceability and SLA monitoring.',
    icon: '🛡️',
    color: '#F97316',
    inputs: ['Client Tickets', 'Live Application Logs', 'SLA Parameters'],
    whatHappens: 'SERVE links incoming client support requests directly back to original requirements and code changes for fast fixes.',
    output: 'Continuous client satisfaction, SLA compliance & renewal visibility',
    liveSnippet: {
      title: 'SERVE · Support & Channel Hub',
      codeOrData: [
        'Ticket #482: Feature enhancement requested by client',
        'Traceability: Linked to DISCOVER spec #REQ-884',
        'Channel: Live client communication bridge active',
      ],
      badge: '✓ 100% SLA Satisfied',
    },
  },
]

export default function InteractiveEcosystemFlow() {
  const [activeStageId, setActiveStageId] = useState<string>('development')
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const activeIndex = lifecycleStages.findIndex((s) => s.id === activeStageId)
  const current = lifecycleStages[activeIndex] || lifecycleStages[3]

  // Auto-advance play mode
  const handlePlayToggle = () => {
    if (isPlaying) {
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)
    let nextIdx = (activeIndex + 1) % lifecycleStages.length
    setActiveStageId(lifecycleStages[nextIdx].id)

    const interval = setInterval(() => {
      nextIdx = (nextIdx + 1) % lifecycleStages.length
      setActiveStageId(lifecycleStages[nextIdx].id)
    }, 2800)

    // Stop after completing a full cycle
    setTimeout(() => {
      clearInterval(interval)
      setIsPlaying(false)
    }, 2800 * (lifecycleStages.length - activeIndex))
  }

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#0F172A] relative overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500]">
              LIVE INTERACTIVE ECOSYSTEM FLOW
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            From Client Research to Delivery, Billing &amp; Support
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Click any step below to see what happens as the work moves across the ScaleOnIt ecosystem.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePlayToggle}
          className="px-4 py-2 rounded-lg bg-orange-50 border border-orange-200 text-[#FF5500] hover:bg-[#FF5500] hover:text-white transition-all text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shrink-0 shadow-2xs"
        >
          <span>{isPlaying ? '⏸ Pause Flow' : '▶ Play Full Journey'}</span>
        </button>
      </div>

      {/* Ribbon Step Icons Flow (Snake / Chevron Pathway) */}
      <div className="my-8">
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 relative">
          {lifecycleStages.map((stage, idx) => {
            const isSelected = stage.id === activeStageId
            const isDeliver = stage.id === 'development'

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setIsPlaying(false)
                  setActiveStageId(stage.id)
                }}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[110px] relative group ${
                  isSelected
                    ? 'bg-white border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500] -translate-y-1'
                    : isDeliver
                    ? 'bg-orange-50/50 border-orange-200 hover:border-[#FF5500]'
                    : 'bg-slate-50 hover:bg-white border-slate-200 hover:border-slate-400'
                }`}
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`font-mono text-[9px] font-bold ${isSelected ? 'text-[#FF5500]' : 'text-slate-400'}`}>
                    {stage.step}
                  </span>
                  {stage.system === 'DELIVER (ONIT)' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                  )}
                </div>

                {/* Main Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl my-1 transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-orange-100 text-[#FF5500]' : 'bg-white border border-slate-200 shadow-2xs'
                }`}>
                  {stage.icon}
                </div>

                {/* Step Title */}
                <div className="font-bold text-[11px] text-slate-900 leading-tight">
                  {stage.name}
                </div>

                {/* Active Indicator Arrow */}
                {isSelected && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#FF5500]" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Interactive Detail Inspector Box — Clean Light Theme with High Contrast */}
      <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 text-slate-900 border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: What Happens Explanation */}
          <div className="lg:col-span-7 space-y-4 font-sans">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
                {current.icon}
              </span>
              <div>
                <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded shadow-2xs mb-1">
                  {current.systemBadge}
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {current.actionTitle}
                </h4>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Inputs & What Happens Process */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-[#FF5500] uppercase text-[10px] shrink-0">Inputs:</span>
                <span className="text-slate-700 font-medium">{current.inputs.join(' · ')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-emerald-700 uppercase text-[10px] shrink-0">Process:</span>
                <span className="text-slate-900 font-semibold">{current.whatHappens}</span>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                <span className="font-mono font-bold text-purple-700 uppercase text-[10px] shrink-0">Outcome:</span>
                <span className="text-slate-900 font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
                  {current.output}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Live Simulated System Artifact / Terminal Screen */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 font-mono text-xs space-y-3 shadow-[2px_2px_0px_0px_#0F172A]">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 text-slate-700 text-[11px]">
              <span className="text-slate-900 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                {current.liveSnippet.title}
              </span>
              <span className="text-emerald-700 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {current.liveSnippet.badge}
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2 text-[11px] text-slate-800 leading-relaxed">
              {current.liveSnippet.codeOrData.map((line, lIdx) => (
                <div key={lIdx} className="flex items-start gap-2">
                  <span className="text-[#FF5500] font-bold">&gt;</span>
                  <span className="font-medium">{line}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span>System: <strong className="text-slate-800">{current.system}</strong></span>
              <span className="text-[#FF5500] font-bold">Continuous Context Active</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
