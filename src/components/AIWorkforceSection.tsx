import { useState } from 'react'

const workers = [
  {
    id: 'ba', name: 'AI Business Analyst', icon: '📋', status: 'active',
    role: 'Discovery & Requirements',
    goal: 'Turn business conversations into implementation-ready requirements.',
    context: ['Customer calls', 'Business documents', 'Existing systems', 'Company knowledge', 'Previous projects'],
    tools: ['Meeting intelligence', 'Knowledge base', 'CRM', 'Requirements system', 'Document management'],
    actions: ['Analyze conversations', 'Clarify ambiguities', 'Generate BRD/FRD', 'Create user stories', 'Validate requirements', 'Submit for review'],
    output: 'BRD, user stories, acceptance criteria, scope definition',
    approval: 'Human approval required before requirements baseline',
    module: 'DISCOVER',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200', dot: 'bg-onit',
  },
  {
    id: 'arch', name: 'AI Solution Architect', icon: '🏗️', status: 'active',
    role: 'Architecture & Design',
    goal: 'Translate approved requirements into technical architecture.',
    context: ['Approved requirements', 'System constraints', 'Existing architecture', 'Technology standards', 'Previous architectures'],
    tools: ['Architecture knowledge', 'Requirements system', 'Diagram tools', 'API catalog', 'Cloud platform APIs'],
    actions: ['Analyze requirements', 'Define system design', 'Create architecture diagrams', 'Document API contracts', 'Review with engineering'],
    output: 'Architecture document, API specs, infrastructure plan, technical decisions',
    approval: 'Architecture review required before engineering begins',
    module: 'ENGINEER',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', dot: 'bg-ai-violet',
  },
  {
    id: 'eng', name: 'AI Engineering Agent', icon: '⚙️', status: 'running',
    role: 'Implementation',
    goal: 'Implement features with quality code aligned to architecture.',
    context: ['Architecture specs', 'Code repository', 'Coding standards', 'Team conventions', 'Test requirements'],
    tools: ['Code repository', 'IDE/code tools', 'CI/CD system', 'Testing framework', 'Package registries'],
    actions: ['Generate implementation', 'Write unit tests', 'Create pull request', 'Address review comments', 'Coordinate release'],
    output: 'Working code, pull requests, test coverage, release notes',
    approval: 'Code review and merge approval required',
    module: 'ENGINEER',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', dot: 'bg-ai-violet',
  },
  {
    id: 'qa', name: 'AI QA Engineer', icon: '🔍', status: 'waiting',
    role: 'Quality Assurance',
    goal: 'Define and execute test strategies to validate delivery.',
    context: ['Requirements', 'Architecture specs', 'Code changes', 'Previous defects', 'Test standards'],
    tools: ['Test management', 'Automation framework', 'Defect tracker', 'CI/CD pipelines', 'Code analysis'],
    actions: ['Create test strategy', 'Generate test cases', 'Execute automated tests', 'Track defects', 'Validate fixes', 'Sign off release'],
    output: 'Test plan, test cases, automation scripts, defect reports, quality sign-off',
    approval: 'Quality sign-off required before deployment',
    module: 'QUALITY',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', dot: 'bg-data-cyan',
  },
  {
    id: 'devops', name: 'AI DevOps Engineer', icon: '🚀', status: 'waiting',
    role: 'Infrastructure & Deployment',
    goal: 'Manage infrastructure, pipelines, and deployment operations.',
    context: ['Architecture plan', 'Quality sign-off', 'Infrastructure state', 'Deployment policies', 'Cloud platform'],
    tools: ['Cloud APIs', 'CI/CD system', 'Infrastructure-as-code', 'Monitoring platform', 'Secrets management'],
    actions: ['Provision infrastructure', 'Configure pipelines', 'Execute deployment', 'Monitor health', 'Rollback if needed'],
    output: 'Deployed environment, pipeline configuration, deployment record, monitoring alerts',
    approval: 'Production deployment approval required',
    module: 'DELIVER',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-500',
  },
  {
    id: 'pm', name: 'AI Project Manager', icon: '📊', status: 'active',
    role: 'Delivery Coordination',
    goal: 'Coordinate delivery, surface risks, and maintain visibility.',
    context: ['Project plan', 'Team capacity', 'Task status', 'Dependencies', 'Client commitments'],
    tools: ['Project system', 'Resource management', 'Risk tracker', 'Communication tools', 'Reporting'],
    actions: ['Update project status', 'Identify blockers', 'Reallocate resources', 'Escalate risks', 'Generate status reports', 'Coordinate across teams'],
    output: 'Project status, risk register, resource allocation, client updates',
    approval: 'Scope changes require stakeholder approval',
    module: 'DELIVER',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200', dot: 'bg-onit',
  },
  {
    id: 'support', name: 'AI Support Agent', icon: '🛟', status: 'active',
    role: 'Customer Support',
    goal: 'Resolve customer issues with context from the full lifecycle.',
    context: ['Customer history', 'Product knowledge', 'Code context', 'Known issues', 'SLA commitments'],
    tools: ['Ticket system', 'Knowledge base', 'Product systems', 'Communication', 'Escalation workflows'],
    actions: ['Classify ticket', 'Search knowledge', 'Diagnose issue', 'Generate response', 'Escalate if needed', 'Close and log'],
    output: 'Resolved tickets, knowledge articles, escalation records, customer feedback',
    approval: 'Escalation and refund approvals require human review',
    module: 'SERVE',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-500',
  },
  {
    id: 'finance', name: 'AI Finance Agent', icon: '💰', status: 'waiting',
    role: 'Financial Operations',
    goal: 'Maintain financial accuracy and project profitability visibility.',
    context: ['Project budgets', 'Timesheets', 'Contracts', 'Invoices', 'Resource costs'],
    tools: ['Finance system', 'Project management', 'Billing system', 'Resource management', 'Reporting'],
    actions: ['Track budget burn', 'Forecast project margin', 'Generate invoices', 'Flag budget risks', 'Produce financial reports'],
    output: 'Budget reports, margin analysis, invoice drafts, financial forecasts',
    approval: 'Invoice generation and payments require finance approval',
    module: 'FINANCE',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', dot: 'bg-ai-violet',
  },
]

const statusConfig = {
  active: { label: 'Active', color: 'text-emerald-600', dot: 'bg-emerald-500' },
  running: { label: 'Running', color: 'text-onit', dot: 'bg-onit' },
  waiting: { label: 'Waiting', color: 'text-mid-text', dot: 'bg-slate-300' },
}

export default function AIWorkforceSection() {
  const [selected, setSelected] = useState<string>('ba')
  const worker = workers.find((w) => w.id === selected)!
  const status = statusConfig[worker.status as keyof typeof statusConfig]

  return (
    <section id="ai-workforce" className="py-28 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-violet-400 mb-6 border border-violet-400/20 bg-violet-400/5 px-4 py-2 rounded-full">
            AI Workforce
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            AI doesn&apos;t just answer.<br />It works.
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto">
            ONIT&apos;s AI workforce consists of specialized workers — each with a defined role, goal, context, tools, and permissions. They execute work. They don&apos;t just suggest it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Worker selector */}
          <div className="space-y-2">
            {workers.map((w) => {
              const s = statusConfig[w.status as keyof typeof statusConfig]
              return (
                <button
                  key={w.id}
                  onClick={() => setSelected(w.id)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-150 ${
                    selected === w.id
                      ? `${w.bg} ${w.border} border-2 shadow-sm`
                      : 'border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15'
                  }`}
                >
                  <span className="text-lg flex-shrink-0" aria-hidden="true">{w.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-bold truncate ${selected === w.id ? w.color : 'text-white/80'}`}>
                      {w.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${s.dot} ${w.status === 'running' ? 'animate-pulse' : ''}`} />
                      <span className={`text-[10px] font-medium ${selected === w.id ? s.color : 'text-slate-500'}`}>{s.label}</span>
                    </div>
                  </div>
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border ${selected === w.id ? `${w.border} ${w.color}` : 'border-white/10 text-slate-600'}`}>
                    {w.module}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Worker detail */}
          <div className="lg:col-span-2">
            <div className={`rounded-2xl border-2 ${worker.border} ${worker.bg} p-6 h-full`}>
              <div className="flex items-start gap-4 mb-6">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{worker.icon}</span>
                <div>
                  <h3 className={`text-lg font-bold ${worker.color} mb-0.5`}>{worker.name}</h3>
                  <p className="text-xs font-semibold text-mid-text uppercase tracking-widest">{worker.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-2 bg-white/50 border border-white/60 px-3 py-1.5 rounded-full">
                  <div className={`w-1.5 h-1.5 rounded-full ${status.dot} ${worker.status === 'running' ? 'animate-pulse' : ''}`} />
                  <span className={`text-[11px] font-semibold ${status.color}`}>{status.label}</span>
                </div>
              </div>

              <div className="mb-4 p-3 bg-white/60 rounded-xl border border-white/40">
                <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-1.5">Goal</div>
                <p className="text-sm font-semibold text-midnight">{worker.goal}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-2">Context</div>
                  <div className="space-y-1">
                    {worker.context.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-xs text-mid-text">
                        <div className={`w-1 h-1 rounded-full ${worker.dot}`} />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-2">Tools</div>
                  <div className="space-y-1">
                    {worker.tools.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-mid-text">
                        <div className={`w-1 h-1 rounded-full ${worker.dot}`} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-2">Actions</div>
                <div className="flex flex-wrap gap-1.5">
                  {worker.actions.map((a) => (
                    <span key={a} className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${worker.border} bg-white/50 ${worker.color}`}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-white/50 rounded-xl border border-white/40">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-1">Output</div>
                  <p className="text-xs text-midnight">{worker.output}</p>
                </div>
                <div className="p-3 bg-white/50 rounded-xl border border-white/40">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-amber-600 mb-1">Human Control</div>
                  <p className="text-xs text-midnight">{worker.approval}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
