import { useState } from 'react'

const orchestratorLayers = [
  {
    id: 'goal', label: 'User Goal', icon: '◎', color: 'text-slate-900', bg: 'bg-slate-900', textColor: 'text-white',
    detail: 'The operator defines a goal in natural language, through a workflow template, or via an API trigger. The goal is stored with full context: project, organization, constraints, and permissions.',
  },
  {
    id: 'orchestrator', label: 'Orchestrator', icon: '⬡', color: 'text-[#FF5500]', bg: 'bg-[#FF5500]', textColor: 'text-white',
    detail: 'The ScaleOnIt orchestrator receives the goal and determines the execution strategy. It selects appropriate AI workers, plans the task sequence, and initializes the shared execution context.',
  },
  {
    id: 'planning', label: 'Planning', icon: '◈', color: 'text-slate-900', bg: 'bg-slate-100', textColor: 'text-slate-900',
    detail: 'The planning module decomposes the goal into subtasks, assigns priorities, identifies dependencies, and estimates the coordination pattern across workers.',
  },
  {
    id: 'context', label: 'Context / Knowledge', icon: '◉', color: 'text-slate-900', bg: 'bg-slate-100', textColor: 'text-slate-900',
    detail: 'Relevant organizational knowledge, previous project artifacts, policies, and standards are retrieved and injected into the execution context.',
  },
  {
    id: 'policy', label: 'Policy / Permissions', icon: '⬟', color: 'text-[#FF5500]', bg: 'bg-orange-50', textColor: 'text-[#FF5500]',
    detail: 'The policy engine determines what each AI worker is permitted to do, which actions require human approval, and what is never permitted.',
  },
  {
    id: 'workers', label: 'AI Workers', icon: '◫', color: 'text-[#FF5500]', bg: 'bg-orange-50', textColor: 'text-[#FF5500]',
    detail: 'Specialized AI workers execute their assigned tasks within their defined scope. Workers use their configured tools and produce structured outputs.',
  },
  {
    id: 'tools', label: 'Tools / Data / Systems', icon: '⬢', color: 'text-slate-900', bg: 'bg-slate-100', textColor: 'text-slate-900',
    detail: 'Workers interact with the tools and systems they are authorized to use — repositories, APIs, databases, cloud platforms — through controlled tool calls.',
  },
  {
    id: 'verification', label: 'Verification', icon: '◈', color: 'text-emerald-700', bg: 'bg-emerald-50', textColor: 'text-emerald-700',
    detail: 'Outputs are validated against the original goal, quality standards, and policy requirements.',
  },
  {
    id: 'approval', label: 'Human Approval', icon: '◉', color: 'text-[#FF5500]', bg: 'bg-orange-50', textColor: 'text-[#FF5500]',
    detail: 'When policy requires human review — production deployments, requirement baselines, financial actions — the workflow routes to authorized leads.',
  },
  {
    id: 'result', label: 'Result', icon: '◎', color: 'text-emerald-700', bg: 'bg-emerald-600', textColor: 'text-white',
    detail: 'The verified, approved result is delivered. All context, actions, decisions, and artifacts are preserved in the ScaleOnIt audit trail.',
  },
]

export default function OrchestratorSection() {
  const [open, setOpen] = useState<string | null>('orchestrator')

  return (
    <section id="orchestration" className="py-24 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
              Multi-Agent Orchestration
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6">
              One goal.<br />Many specialists.<br />
              <span className="text-[#FF5500]">One coordinated execution.</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              ScaleOnIt orchestration does not spawn uncontrolled agents. It decomposes goals into assigned tasks, coordinates workers through controlled state handoffs, and enforces human oversight at every critical decision point.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Context-aware', desc: 'Workers receive organizational context, not just isolated prompts' },
                { label: 'Policy-bounded', desc: 'Every action is constrained by organization-defined policy' },
                { label: 'Approval-gated', desc: 'Critical actions require explicit human authorization' },
                { label: 'Fully audited', desc: 'Every decision and action is logged and traceable' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#FF5500] transition-colors">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#FF5500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.label}</div>
                    <div className="text-[11px] text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orchestration flow */}
          <div>
            <div className="space-y-1.5">
              {orchestratorLayers.map((layer, i) => {
                const isOpen = open === layer.id
                const isApproval = layer.id === 'approval' || layer.id === 'policy'
                return (
                  <div key={layer.id} className="flex gap-3">
                    {/* Connector */}
                    <div className="flex flex-col items-center flex-shrink-0 w-6">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] flex-shrink-0 ${layer.bg} ${layer.textColor} font-bold shadow-2xs font-mono`}>
                        {i + 1}
                      </div>
                      {i < orchestratorLayers.length - 1 && (
                        <div className={`w-0.5 flex-1 min-h-3 ${isApproval ? 'bg-orange-300' : 'bg-slate-200'}`} />
                      )}
                    </div>

                    <div className="flex-1 pb-1">
                      <button
                        onClick={() => setOpen(isOpen ? null : layer.id)}
                        aria-expanded={isOpen}
                        className={`w-full flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-left transition-all duration-150 hover:bg-white group cursor-pointer ${
                          isOpen ? 'bg-white shadow-[3px_3px_0px_0px_#0F172A] border border-slate-900' : 'border border-transparent'
                        }`}
                      >
                        <span className={`text-xs font-mono font-extrabold tracking-wide uppercase ${layer.color}`}>
                          {layer.label}
                        </span>
                        {isApproval && (
                          <span className="font-mono text-[9px] font-bold text-[#FF5500] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md">
                            Human required
                          </span>
                        )}
                        <svg
                          width="12" height="12" viewBox="0 0 14 14" fill="none"
                          className={`ml-auto text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FF5500]' : ''}`}
                          aria-hidden="true"
                        >
                          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-2.5 pt-1">
                          <p className="text-xs text-slate-600 leading-relaxed">{layer.detail}</p>
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
