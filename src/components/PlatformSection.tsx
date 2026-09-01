import { useState } from 'react'

const modules = [
  {
    id: 'grow', name: 'GROW', icon: '📈',
    desc: 'Sales pipeline, leads, accounts, opportunities, campaigns, proposals, contracts, forecasting.',
    workflows: ['Lead qualification', 'Opportunity management', 'Proposal generation', 'Contract management'],
    ai: ['AI SDR', 'AI Customer Success'],
    color: 'text-lime-600', bg: 'bg-lime-50', border: 'border-lime-200', accent: 'bg-lime-500',
  },
  {
    id: 'discover', name: 'DISCOVER', icon: '🔎',
    desc: 'Discovery sessions, meeting intelligence, requirements, BRD/FRD/SRS, user stories, process mapping, estimation.',
    workflows: ['Requirements gathering', 'BRD generation', 'Scope definition', 'User story creation'],
    ai: ['AI Business Analyst'],
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200', accent: 'bg-onit',
  },
  {
    id: 'design', name: 'DESIGN', icon: '🎨',
    desc: 'UX/UI, user flows, design systems, prototypes, design collaboration, screen specifications.',
    workflows: ['User flow design', 'Wireframe creation', 'Design system management', 'Design handoff'],
    ai: ['AI UX Designer'],
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200', accent: 'bg-onit',
  },
  {
    id: 'engineer', name: 'ENGINEER', icon: '⚙️',
    desc: 'Architecture, development, APIs, repositories, infrastructure, coding, code review, releases.',
    workflows: ['Sprint planning', 'Code implementation', 'Architecture review', 'Release management'],
    ai: ['AI Solution Architect', 'AI Engineering Agent'],
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', accent: 'bg-ai-violet',
  },
  {
    id: 'quality', name: 'QUALITY', icon: '🔍',
    desc: 'Testing, QA, automation, UAT, defects, quality gates, CI/CD quality.',
    workflows: ['Test planning', 'Test automation', 'Defect tracking', 'Quality gate enforcement'],
    ai: ['AI QA Engineer'],
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', accent: 'bg-data-cyan',
  },
  {
    id: 'deliver', name: 'DELIVER', icon: '🚢',
    desc: 'Projects, programs, tasks, milestones, sprints, Kanban, resources, dependencies, risks, issues.',
    workflows: ['Project tracking', 'Resource management', 'Risk management', 'Client reporting'],
    ai: ['AI Project Manager', 'AI DevOps Engineer'],
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', accent: 'bg-data-cyan',
  },
  {
    id: 'serve', name: 'SERVE', icon: '🛟',
    desc: 'Support, incidents, tickets, SLA, service requests, escalations, customer health, feedback.',
    workflows: ['Ticket management', 'SLA monitoring', 'Incident resolution', 'Customer feedback loops'],
    ai: ['AI Support Agent', 'AI Customer Success'],
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', accent: 'bg-emerald-500',
  },
  {
    id: 'people', name: 'PEOPLE', icon: '👥',
    desc: 'Employees, teams, skills, capacity, utilization, allocation, timesheets, staffing, performance.',
    workflows: ['Capacity planning', 'Resource allocation', 'Skills management', 'Utilization tracking'],
    ai: ['AI Resource Agent'],
    color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', accent: 'bg-slate-500',
  },
  {
    id: 'finance', name: 'FINANCE', icon: '💰',
    desc: 'Contracts, budgets, costs, revenue, invoices, expenses, receivables, project margin.',
    workflows: ['Budget tracking', 'Invoice generation', 'Margin analysis', 'Revenue forecasting'],
    ai: ['AI Finance Agent'],
    color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', accent: 'bg-amber-500',
  },
  {
    id: 'intelligence', name: 'INTELLIGENCE', icon: '🧠',
    desc: 'Cross-platform AI, analytics, recommendations, automation, executive and organizational intelligence.',
    workflows: ['Executive dashboards', 'Predictive analytics', 'AI insights', 'Cross-platform automation'],
    ai: ['All AI Workers'],
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', accent: 'bg-ai-violet',
  },
  {
    id: 'connect', name: 'CONNECT', icon: '🔗',
    desc: 'Integrations, APIs, webhooks, events, data synchronization, external tools, enterprise systems.',
    workflows: ['System integration', 'Data synchronization', 'Webhook management', 'Custom connectors'],
    ai: [],
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', accent: 'bg-data-cyan',
  },
]

export default function PlatformSection() {
  const [selected, setSelected] = useState('discover')
  const mod = modules.find((m) => m.id === selected)!

  return (
    <section id="platform" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
            The Complete Platform
          </div>
          <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-tight tracking-tight mb-4">
            One platform.<br />Every part of the software business.
          </h2>
          <p className="text-base text-mid-text max-w-xl mx-auto">
            Eleven connected capabilities. One operating context. AI working across all of them.
          </p>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-2 mb-10">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelected(m.id)}
              aria-pressed={selected === m.id}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all duration-150 hover:shadow-sm ${
                selected === m.id
                  ? `${m.bg} ${m.border} shadow-md`
                  : 'border-border-base hover:border-slate-300'
              }`}
            >
              <span className="text-xl" aria-hidden="true">{m.icon}</span>
              <span className={`text-[10px] font-bold uppercase tracking-wide ${selected === m.id ? m.color : 'text-mid-text'}`}>
                {m.name}
              </span>
            </button>
          ))}
        </div>

        {/* Module detail */}
        <div className={`rounded-2xl border-2 ${mod.border} ${mod.bg} p-6`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${mod.accent} flex items-center justify-center text-xl`}>
                  {mod.icon}
                </div>
                <div>
                  <h3 className={`text-base font-extrabold uppercase tracking-wider ${mod.color}`}>{mod.name}</h3>
                  <p className="text-xs text-mid-text">Platform capability</p>
                </div>
              </div>
              <p className="text-sm text-midnight leading-relaxed mb-4">{mod.desc}</p>

              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-2">Key Workflows</div>
                <div className="flex flex-wrap gap-2">
                  {mod.workflows.map((w) => (
                    <span key={w} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${mod.border} bg-white/60 ${mod.color}`}>
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {mod.ai.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-3">AI Workers</div>
                  <div className="space-y-2">
                    {mod.ai.map((a) => (
                      <div key={a} className="flex items-center gap-2 p-2.5 bg-white/60 rounded-xl border border-white/40">
                        <div className={`w-2 h-2 rounded-full ${mod.accent}`} />
                        <span className="text-xs font-semibold text-midnight">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 p-3 bg-white/50 rounded-xl border border-white/40">
                <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-1">Module Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-onit" />
                  <span className="text-xs font-semibold text-onit">Connected to all modules</span>
                </div>
                <p className="text-[11px] text-mid-text mt-1">Shares data context across the full platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
