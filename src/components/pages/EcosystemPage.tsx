import { useState } from 'react'

interface EcosystemPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

interface SystemDetail {
  id: string
  name: string
  number: string
  tagline: string
  icon: string
  status: 'available' | 'building' | 'coming_soon'
  statusLabel: string
  badgeText: string
  description: string
  problemSolved: string
  coreCapabilities: string[]
  inputsFrom: string
  outputsTo: string
  aiWorkers: string[]
  humanGate: string
  href?: string
}

export default function EcosystemPage({ onNavigate }: EcosystemPageProps) {
  const [activeSystemId, setActiveSystemId] = useState<string>('deliver')
  const [activeFlowStep, setActiveFlowStep] = useState<number>(2)

  const systems: SystemDetail[] = [
    {
      id: 'grow',
      name: 'GROW',
      number: '01',
      tagline: 'Autonomous research tasks, AI voice qualification & live BDM meeting co-pilot',
      icon: '🌱',
      status: 'building',
      statusLabel: 'Roadmap',
      badgeText: 'Autonomous Sales & AI Calling',
      description: 'Accepts natural language research tasks, crawls web and registry databases, generates executive dossiers, conducts outbound voice qualification via Vapi and ElevenLabs, and provides a real-time in-call LLM co-pilot for BDMs.',
      problemSolved: 'Replaces generic CRMs with an end-to-end autonomous outbound and meeting intelligence engine that equips sales reps with real-time technical guidance and closes deals faster.',
      coreCapabilities: [
        'Natural Language Research Task Ingestion (>200 staff, >$200M revenue filtering)',
        'Autonomous Web Crawling & ICP Scoring Model',
        'Executive Lead Mapping & Pre-Call Intelligence Dossiers',
        'Autonomous AI Voice Qualification (Vapi + ElevenLabs)',
        'Live In-Call BDM Co-Pilot with Real-Time Audio Interval LLM Synopsis',
      ],
      inputsFrom: 'Natural language search prompts, company databases, voice call transcripts, live meeting audio',
      outputsTo: 'DISCOVER (Scoped requirements, pain points, stakeholder profiles, commercial terms)',
      aiWorkers: ['Autonomous Research Agent', 'Vapi Voice Qualification Agent', 'Live BDM In-Call Meeting Co-Pilot'],
      humanGate: 'Commercial Proposal Approval & Final Contract Sign-off',
      href: '/platform/grow',
    },
    {
      id: 'discover',
      name: 'DISCOVER',
      number: '02',
      tagline: 'Customer discovery, requirements analysis and solution definition',
      icon: '🔍',
      status: 'building',
      statusLabel: 'Roadmap',
      badgeText: 'Requirements & Solutioning',
      description: 'Transforms stakeholder interviews, messy documents, and business conversations into structured, unambiguous PRDs, user stories, and technical baselines.',
      problemSolved: 'Eliminates requirement drift, missed edge cases, and the painful disconnect between business analysts and software architects.',
      coreCapabilities: [
        'Stakeholder Interview Transcription & Synthesis',
        'Structured PRD & User Story Generation with Acceptance Criteria',
        'Scope Ambiguity & Risk Detection',
        'Formal Requirement Baselines & Change Management',
      ],
      inputsFrom: 'GROW (Commercial scope), Client Stakeholder transcripts & docs',
      outputsTo: 'DELIVER (Locked user stories, architecture constraints, test criteria)',
      aiWorkers: ['Requirements Intelligence Agent', 'Solution Architect Worker'],
      humanGate: 'Client & Product Lead Requirement Sign-off',
      href: '/platform/discover',
    },
    {
      id: 'deliver',
      name: 'DELIVER',
      number: '03',
      tagline: 'Software project planning, engineering execution and release operations',
      icon: '⚡',
      status: 'available',
      statusLabel: 'Available Today',
      badgeText: 'Powered by ONIT',
      description: 'The core delivery execution engine. Orchestrates sprint planning, multi-agent code generation, automated test matrices, and continuous deployment under policy governance.',
      problemSolved: 'Replaces fragmented silos of Jira, Git, CI/CD, and testing suites with one connected delivery platform that guarantees traceability from requirement to release.',
      coreCapabilities: [
        'AI-Augmented Sprint Planning & Work Decomposition',
        'Governed Code Generation & Pull Request Automation',
        'Automated Acceptance Test Synthesis & Quality Gates',
        'Immutable Audit Trail & Continuous Release Pipelines',
      ],
      inputsFrom: 'DISCOVER (Locked requirements), PEOPLE (Allocated engineering capacity)',
      outputsTo: 'FINANCIALS (Resource burn & milestones), SERVE (Deployed artifacts & changelogs)',
      aiWorkers: ['Engineering Agent', 'QA Specialist Worker', 'DevOps Pipeline Orchestrator'],
      humanGate: 'Production Deployment & Architecture Review by Delivery Lead',
      href: '/platform/deliver',
    },
    {
      id: 'people',
      name: 'PEOPLE',
      number: '04',
      tagline: 'Workforce allocation, dynamic skill matching and capacity planning',
      icon: '👥',
      status: 'building',
      statusLabel: 'Roadmap',
      badgeText: 'Team & Skills Matrix',
      description: 'Manages developers, QA engineers, architects, and AI workers. Balances workloads, tracks skill competencies, and eliminates project staffing bottlenecks.',
      problemSolved: 'Stops relying on stale Excel spreadsheets and siloed HR systems that fail to match technical skills to incoming sprint demands.',
      coreCapabilities: [
        'Real-Time Skills Inventory & Competency Graph',
        'Dynamic Team Allocation & Bench Minimization',
        'Hybrid Workforce Orchestration (Human + AI Specialists)',
        'Burnout & Over-Allocation Early Warning System',
      ],
      inputsFrom: 'DELIVER (Sprint backlog & skill needs), GROW (Upcoming project pipeline)',
      outputsTo: 'DELIVER (Assigned engineers), FINANCIALS (Payroll & utilization costs)',
      aiWorkers: ['Capacity Planner Agent', 'Skills Matrix Matcher'],
      humanGate: 'Resource Allocation Sign-off by Resource Manager',
      href: '/platform/people',
    },
    {
      id: 'financials',
      name: 'FINANCIALS',
      number: '05',
      tagline: 'Commercial profitability, project burn rates and financial governance',
      icon: '📊',
      status: 'building',
      statusLabel: 'Roadmap',
      badgeText: 'Margins & Commercials',
      description: 'Connects software delivery progress directly to revenue recognition, project margins, milestone billing, and vendor cost management.',
      problemSolved: 'No more surprise budget overruns discovered weeks after sprint completion. Real-time cost-per-feature and delivery burn rate transparency.',
      coreCapabilities: [
        'Real-Time Fixed-Price & T&M Project Margin Tracking',
        'Automated Milestone & Sprint-Based Client Invoicing',
        'Cloud & AI Compute Cost Attribution per Customer',
        'Revenue Forecasting & Profitability Variance Analysis',
      ],
      inputsFrom: 'DELIVER (Completed milestones & PRs), PEOPLE (Timesheets & billable hours)',
      outputsTo: 'SERVE (Account commercial status), GROW (Historical margin benchmarks)',
      aiWorkers: ['Financial Variance Auditor', 'Billing Reconciliation Worker'],
      humanGate: 'Invoice Issuance & Milestone Financial Clearance',
      href: '/platform/financials',
    },
    {
      id: 'serve',
      name: 'SERVE',
      number: '06',
      tagline: 'Customer support, SLA governance and continuous feedback loops',
      icon: '🛡️',
      status: 'building',
      statusLabel: 'Roadmap',
      badgeText: 'Support & Success',
      description: 'Closes the loop between post-release customer operations and software delivery. Customer tickets link directly back to original requirements, commits, and engineering owners.',
      problemSolved: 'Ends isolated support desks where client feedback is lost in ticket queues without ever improving the product or informing the next sprint.',
      coreCapabilities: [
        'Context-Aware Customer Support & SLA Tracking',
        'Root-Cause Incident Tracing to Commits & Requirements',
        'Automated Customer Health & CSAT Analytics',
        'Continuous Feedback Routing into DISCOVER Backlogs',
      ],
      inputsFrom: 'DELIVER (Release builds & telemetry), FINANCIALS (Contract SLA terms)',
      outputsTo: 'DISCOVER (Feature requests & bug remediation items), GROW (Renewal signals)',
      aiWorkers: ['Support Resolution Agent', 'SLA Sentinel Worker'],
      humanGate: 'High-Severity Incident Remediation Sign-off',
      href: '/platform/serve',
    },
  ]

  const activeSystem = systems.find((s) => s.id === activeSystemId) || systems[2]

  const lifecycleFlow = [
    {
      step: '01',
      system: 'GROW',
      title: 'Opportunity & Scope Ingestion',
      desc: 'Sales team evaluates incoming RFPs and generates initial architecture & estimation baselines.',
    },
    {
      step: '02',
      system: 'DISCOVER',
      title: 'Requirements Synthesis',
      desc: 'Stakeholder interviews convert into unambiguous PRDs, user stories, and acceptance test criteria.',
    },
    {
      step: '03',
      system: 'DELIVER',
      title: 'Governed Software Execution',
      desc: 'AI workers and human engineers write code, run automated tests, and deploy releases under strict policy.',
    },
    {
      step: '04',
      system: 'PEOPLE',
      title: 'Workforce & Skill Allocation',
      desc: 'Engineers and specialized AI agents are allocated dynamically to prevent delivery bottlenecks.',
    },
    {
      step: '05',
      system: 'FINANCIALS',
      title: 'Real-time Margin Tracking',
      desc: 'Milestones trigger automated billing; resource and compute costs are calculated in real time.',
    },
    {
      step: '06',
      system: 'SERVE',
      title: 'Support & Feedback Loop',
      desc: 'Customer feedback and incidents trace directly back into Discovery for the next sprint release.',
    },
  ]

  const comparisonRows = [
    {
      dimension: 'Context Continuity',
      silos: 'Lost across every handoff (CRM → Jira → Git → Zendesk)',
      scaleonit: '100% Unified Context Graph across all 6 systems',
    },
    {
      dimension: 'AI Integration',
      silos: 'Isolated chatbots with zero persistent memory',
      scaleonit: 'Governed AI workforce operating on shared project artifacts',
    },
    {
      dimension: 'Financial Visibility',
      silos: 'Spreadsheets reviewed weeks after sprint close',
      scaleonit: 'Real-time cost & margin attribution per feature',
    },
    {
      dimension: 'Traceability',
      silos: 'Broken links between requirements, code, and bugs',
      scaleonit: 'Cryptographically verified audit trail from lead to release',
    },
    {
      dimension: 'Human Governance',
      silos: 'Ad-hoc Slack messages and manual checklist approvals',
      scaleonit: 'Mandatory, role-based approval checkpoints built into workflows',
    },
  ]

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]">
      {/* ==================================================
          SECTION 1 — ECOSYSTEM HERO
          ================================================== */}
      <section className="relative overflow-hidden bg-transparent border-b border-slate-200/80 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
              SCALEONIT OPERATING ECOSYSTEM
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              One connected ecosystem.
              <span className="text-[#FF5500] block mt-1.5">
                Six purpose-built systems.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              ScaleOnIt replaces fragmented SaaS tools with a continuous operating system for IT and software service businesses. From sales and requirements to delivery, staffing, financials, and support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-2"
              >
                <span>EXPLORE DELIVER (AVAILABLE TODAY)</span>
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('/demo')}
                className="border border-slate-300 bg-white text-slate-900 font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg hover:border-[#FF5500] hover:bg-orange-50/50 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0F172A]"
              >
                <span>TALK TO US</span>
              </button>
            </div>
          </div>

          {/* 6-System Quick Selector Pills */}
          <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {systems.map((s) => {
              const isSelected = activeSystemId === s.id
              const isDeliver = s.id === 'deliver'

              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveSystemId(s.id)
                    const el = document.querySelector('#system-explorer')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500] ring-1 ring-orange-500/20'
                      : isDeliver
                      ? 'bg-orange-50/60 border-orange-200 hover:border-[#FF5500] hover:bg-white shadow-[2px_2px_0px_0px_#0F172A]'
                      : 'bg-white/95 backdrop-blur-md border-slate-200 hover:border-slate-400 shadow-[2px_2px_0px_0px_#0F172A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg" aria-hidden="true">{s.icon}</span>
                    <span className="font-mono text-[9px] font-bold text-slate-400">
                      {s.number}
                    </span>
                  </div>
                  <div className="font-extrabold text-sm text-slate-900 font-mono flex items-center gap-1">
                    <span>{s.name}</span>
                    {isDeliver && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {s.badgeText}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — INTERACTIVE 6-SYSTEM EXPLORER
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden" id="system-explorer">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              SYSTEMS ARCHITECTURE MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Explore the 6 Connected Systems
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Select any system to inspect how it functions, what inputs it consumes, what artifacts it produces, and its current rollout status.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: System Selection List */}
            <div className="lg:col-span-4 space-y-3">
              {systems.map((s) => {
                const isSelected = activeSystemId === s.id
                const isDeliver = s.id === 'deliver'

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSystemId(s.id)}
                    className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500]'
                        : 'bg-white/95 backdrop-blur-md border-slate-200 hover:border-slate-300 shadow-[2px_2px_0px_0px_#0F172A]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${
                        isSelected ? 'bg-orange-50 border border-orange-200' : 'bg-slate-100'
                      }`}>
                        {s.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-slate-900 font-mono">
                            {s.number}. {s.name}
                          </span>
                          {isDeliver && (
                            <span className="font-mono text-[9px] font-bold text-white bg-[#FF5500] px-1.5 py-0.2 rounded">
                              Live
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 font-medium truncate max-w-[180px]">
                          {s.badgeText}
                        </div>
                      </div>
                    </div>

                    <span className={`text-sm font-bold font-mono ${
                      isSelected ? 'text-[#FF5500]' : 'text-slate-400'
                    }`}>
                      →
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right Column: Deep-Dive Active System Showcase */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A] space-y-8">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-3xl shadow-xs">
                    {activeSystem.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#FF5500]">SYSTEM {activeSystem.number}</span>
                      <span className="text-slate-300">•</span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {activeSystem.badgeText}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono mt-0.5">
                      {activeSystem.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs font-bold uppercase px-3 py-1.5 rounded-md border ${
                    activeSystem.id === 'deliver'
                      ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-xs'
                      : 'bg-orange-50 text-[#FF5500] border-orange-200'
                  }`}>
                    {activeSystem.statusLabel}
                  </span>
                </div>
              </div>

              {/* Tagline and Overview */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {activeSystem.tagline}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeSystem.description}
                </p>
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/80">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF5500] mb-1">
                  Why this exists in the ecosystem
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {activeSystem.problemSolved}
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Core Subsystems & Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSystem.coreCapabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5"
                    >
                      <span className="text-[#FF5500] font-bold text-xs mt-0.5">✓</span>
                      <span className="text-xs font-semibold text-slate-800 leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Context Flow: Inputs & Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Inputs From
                  </div>
                  <div className="text-xs font-semibold text-slate-900 leading-relaxed">
                    {activeSystem.inputsFrom}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF5500] mb-1">
                    Outputs Flowing To
                  </div>
                  <div className="text-xs font-semibold text-slate-900 leading-relaxed">
                    {activeSystem.outputsTo}
                  </div>
                </div>
              </div>

              {/* Governance & Dedicated Page CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                  <span className="text-[#FF5500] font-bold">Policy Gate:</span>
                  <span>{activeSystem.humanGate}</span>
                </div>

                {activeSystem.id === 'deliver' ? (
                  <button
                    onClick={() => onNavigate('/platform/deliver')}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer transition-all"
                  >
                    Explore DELIVER Page (Available Today) →
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate(activeSystem.href || `/platform/${activeSystem.id}`)}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer transition-all"
                  >
                    Explore {activeSystem.name} Page →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — CONTINUOUS CONTEXT GRAPH (PROJECT LIFECYCLE)
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              CONTINUOUS CONTEXT CONTINUITY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              How information flows across the lifecycle
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              A requirement entered once in DISCOVER updates architecture, automated tests, deployment gates, and support logs without manual copy-pasting.
            </p>
          </div>

          {/* Stepper Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {lifecycleFlow.map((item, index) => {
              const isCurrent = activeFlowStep === index
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveFlowStep(index)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500]'
                      : 'bg-white/95 backdrop-blur-md border-slate-200 hover:border-slate-300 shadow-[2px_2px_0px_0px_#0F172A]'
                  }`}
                >
                  <div className="font-mono text-[10px] font-bold text-[#FF5500] mb-1">
                    STAGE {item.step}
                  </div>
                  <div className="font-extrabold text-sm text-slate-900 font-mono mb-1">
                    {item.system}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                    {item.title}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Flow Step Detailed Card */}
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-md mb-4">
                STAGE {lifecycleFlow[activeFlowStep].step} · {lifecycleFlow[activeFlowStep].system} ENGINE
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                {lifecycleFlow[activeFlowStep].title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6">
                {lifecycleFlow[activeFlowStep].desc}
              </p>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 font-mono text-xs text-slate-300 flex items-center justify-between">
                <span>Data Consistency: <strong className="text-emerald-400">Synchronized via ScaleOnIt Shared Schema</strong></span>
                <span className="text-[#FF5500]">Immutable Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — COMPARISON MATRIX: SILOS VS. ECOSYSTEM
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              POINT SOLUTIONS VS. UNIFIED ECOSYSTEM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why fragmented tools break at enterprise scale
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Software companies spend millions duct-taping disjointed SaaS tools together. ScaleOnIt provides native coherence.
            </p>
          </div>

          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-900 text-white font-mono text-xs font-bold uppercase tracking-wider py-4 px-6 border-b border-slate-800">
              <div className="col-span-4 sm:col-span-3">Operating Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">Fragmented SaaS Stacks</div>
              <div className="col-span-4 sm:col-span-5 text-[#FF5500]">ScaleOnIt Connected Ecosystem</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonRows.map((row) => (
                <div key={row.dimension} className="grid grid-cols-12 py-5 px-6 items-center hover:bg-orange-50/30 transition-colors">
                  <div className="col-span-4 sm:col-span-3 font-mono text-xs font-bold text-slate-900">
                    {row.dimension}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-xs text-slate-500 font-medium pr-4">
                    ✕ {row.silos}
                  </div>
                  <div className="col-span-4 sm:col-span-5 text-xs text-slate-900 font-bold flex items-center gap-2">
                    <span className="text-[#FF5500]">✓</span>
                    <span>{row.scaleonit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — FINAL ECOSYSTEM CTA
          ================================================== */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            TRANSFORM YOUR DELIVERY
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Ready to experience the connected ecosystem?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto font-normal">
            Start with DELIVER today to streamline agile software execution, and expand into the complete six-system operating ecosystem as your business scales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('/platform/deliver')}
              className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            >
              EXPLORE DELIVER TODAY →
            </button>
            <button
              onClick={() => onNavigate('/demo')}
              className="border border-slate-300 bg-white text-slate-900 font-mono text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-lg hover:border-[#FF5500] hover:bg-orange-50/50 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0F172A]"
            >
              TALK TO US
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
