import { useState } from 'react'

const orchestratorLayers = [
  {
    id: 'goal', label: 'User Goal', icon: '◎', color: 'text-midnight', bg: 'bg-midnight', textColor: 'text-white',
    detail: 'The operator defines a goal in natural language, through a workflow template, or via an API trigger. The goal is stored with full context: project, organization, constraints, and permissions.',
  },
  {
    id: 'orchestrator', label: 'Orchestrator', icon: '⬡', color: 'text-onit', bg: 'bg-onit', textColor: 'text-white',
    detail: 'The ONIT orchestrator receives the goal and determines the execution strategy. It selects appropriate AI workers, plans the task sequence, and initializes the shared execution context.',
  },
  {
    id: 'planning', label: 'Planning', icon: '◈', color: 'text-onit', bg: 'bg-onit-light', textColor: 'text-onit',
    detail: 'The planning module decomposes the goal into subtasks, assigns priorities, identifies dependencies, and estimates the coordination pattern across workers.',
  },
  {
    id: 'context', label: 'Context / Knowledge', icon: '◉', color: 'text-ai-violet', bg: 'bg-ai-light', textColor: 'text-ai-violet',
    detail: 'Relevant organizational knowledge, previous project artifacts, policies, and standards are retrieved and injected into the execution context. Workers operate with company-specific knowledge, not just general model knowledge.',
  },
  {
    id: 'policy', label: 'Policy / Permissions', icon: '⬟', color: 'text-amber-600', bg: 'bg-amber-50', textColor: 'text-amber-700',
    detail: 'The policy engine determines what each AI worker is permitted to do, which actions require human approval, and what is never permitted. Policies are organization-defined and role-specific.',
  },
  {
    id: 'workers', label: 'AI Workers', icon: '◫', color: 'text-ai-violet', bg: 'bg-ai-light', textColor: 'text-ai-violet',
    detail: 'Specialized AI workers execute their assigned tasks within their defined scope. Workers use their configured tools, operate within their permission boundaries, and produce structured outputs.',
  },
  {
    id: 'tools', label: 'Tools / Data / Systems', icon: '⬢', color: 'text-data-cyan', bg: 'bg-cyan-light', textColor: 'text-data-cyan',
    detail: 'Workers interact with the tools and systems they are authorized to use — repositories, APIs, databases, communication systems, cloud platforms — through controlled, audited tool calls.',
  },
  {
    id: 'verification', label: 'Verification', icon: '◈', color: 'text-emerald-600', bg: 'bg-emerald-50', textColor: 'text-emerald-700',
    detail: 'Outputs are validated against the original goal, quality standards, and policy requirements. Verification can be automated or can include AI-driven review steps.',
  },
  {
    id: 'approval', label: 'Human Approval', icon: '◉', color: 'text-amber-600', bg: 'bg-amber-50', textColor: 'text-amber-700',
    detail: 'When policy requires human review — production deployments, requirement baselines, financial actions — the workflow pauses and routes to the appropriate human approver.',
  },
  {
    id: 'result', label: 'Result', icon: '◎', color: 'text-emerald-600', bg: 'bg-emerald-500', textColor: 'text-white',
    detail: 'The verified, approved result is delivered. All context, actions, decisions, and artifacts are preserved in the ONIT audit trail and linked to the originating goal.',
  },
]

export default function OrchestratorSection() {
  const [open, setOpen] = useState<string | null>('orchestrator')

  return (
    <section id="orchestration" className="py-28 bg-pearl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
              Multi-Agent Orchestration
            </div>
            <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-[1.08] tracking-tight mb-6">
              One goal.<br />Many specialists.<br />
              <span className="text-mid-text">One coordinated execution.</span>
            </h2>
            <p className="text-base text-mid-text leading-relaxed mb-8">
              ONIT orchestration does not spawn uncontrolled agents. It decomposes goals into assigned tasks, coordinates workers through controlled state handoffs, and enforces human oversight at every critical decision point.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Context-aware', desc: 'Workers receive organizational context, not just the goal' },
                { label: 'Policy-bounded', desc: 'Every action is constrained by organization-defined policy' },
                { label: 'Approval-gated', desc: 'Critical actions require explicit human authorization' },
                { label: 'Fully audited', desc: 'Every decision and action is logged and traceable' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-border-base">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-onit/10 border border-onit/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-midnight">{item.label}</div>
                    <div className="text-xs text-mid-text">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orchestration flow */}
          <div>
            <div className="space-y-1">
              {orchestratorLayers.map((layer, i) => {
                const isOpen = open === layer.id
                const isApproval = layer.id === 'approval' || layer.id === 'policy'
                return (
                  <div key={layer.id} className="flex gap-3">
                    {/* Connector */}
                    <div className="flex flex-col items-center flex-shrink-0 w-6">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs flex-shrink-0 ${layer.bg} ${layer.textColor} font-bold`}>
                        {i + 1}
                      </div>
                      {i < orchestratorLayers.length - 1 && (
                        <div className={`w-0.5 flex-1 min-h-3 ${isApproval ? 'bg-amber-200' : 'bg-border-base'}`} />
                      )}
                    </div>

                    <div className="flex-1 pb-1">
                      <button
                        onClick={() => setOpen(isOpen ? null : layer.id)}
                        aria-expanded={isOpen}
                        className={`w-full flex items-center gap-3 py-2 px-3 rounded-lg text-left transition-all duration-150 hover:bg-white group ${isOpen ? 'bg-white shadow-sm border border-border-base' : ''}`}
                      >
                        <span className={`text-sm font-bold tracking-wide uppercase ${layer.color}`}>
                          {layer.label}
                        </span>
                        {isApproval && (
                          <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                            Human required
                          </span>
                        )}
                        <svg
                          width="14" height="14" viewBox="0 0 14 14" fill="none"
                          className={`ml-auto text-mid-text transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        >
                          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-3 pb-2 pt-1">
                          <p className="text-xs text-mid-text leading-relaxed">{layer.detail}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
