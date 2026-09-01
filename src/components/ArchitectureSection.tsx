import { useState } from 'react'

const layers = [
  {
    num: 1,
    title: 'ONIT Experience',
    subtitle: 'The interface layer',
    color: 'text-onit',
    bg: 'bg-onit-light',
    border: 'border-blue-200',
    accent: 'bg-onit',
    items: ['Dashboards', 'Workspaces', 'Projects', 'Command Center', 'Reports', 'AI Interface'],
    detail: 'The ONIT experience layer provides role-specific workspaces, dashboards, and interfaces across all platform capabilities. CTOs see architecture and engineering intelligence. Delivery heads see project health, risks, and resource utilization. AI workers surface their outputs through consistent interaction patterns.',
  },
  {
    num: 2,
    title: 'Business + SDLC',
    subtitle: '11 connected capabilities',
    color: 'text-onit',
    bg: 'bg-onit-light',
    border: 'border-blue-200',
    accent: 'bg-onit',
    items: ['GROW', 'DISCOVER', 'DESIGN', 'ENGINEER', 'QUALITY', 'DELIVER', 'SERVE', 'PEOPLE', 'FINANCE', 'INTELLIGENCE', 'CONNECT'],
    detail: 'The SDLC layer contains all business and software delivery capabilities operating on a shared data model. Requirements created in DISCOVER flow directly to ENGINEER. Budgets defined in FINANCE connect to DELIVER project tracking. Support escalations in SERVE link back to the original requirements and code that caused them.',
  },
  {
    num: 3,
    title: 'AI Workforce',
    subtitle: 'Specialized workers across every function',
    color: 'text-ai-violet',
    bg: 'bg-ai-light',
    border: 'border-violet-200',
    accent: 'bg-ai-violet',
    items: ['AI Business Analyst', 'AI Solution Architect', 'AI Engineering Agent', 'AI QA Engineer', 'AI DevOps Engineer', 'AI Project Manager', 'AI Finance Agent', 'AI Support Agent'],
    detail: 'AI workers are specialized agents with defined roles, goals, context, tools, and permissions. Each worker operates within the ONIT platform rather than as a standalone chatbot. Workers share organizational context through the platform knowledge layer. Human approval requirements are configured per worker and action type.',
  },
  {
    num: 4,
    title: 'Agent Orchestration',
    subtitle: 'Coordinated multi-agent execution',
    color: 'text-ai-violet',
    bg: 'bg-ai-light',
    border: 'border-violet-200',
    accent: 'bg-ai-violet',
    items: ['Planning', 'Task decomposition', 'State management', 'Memory', 'Coordination', 'Workflow execution', 'Human approval gates'],
    detail: 'The orchestration layer decomposes goals into tasks, assigns them to the right AI workers, manages state across long-running workflows, and enforces approval gates. Agents are not permitted to act outside their defined scope. Every orchestrated workflow maintains a verifiable audit trail.',
  },
  {
    num: 5,
    title: 'AI Intelligence',
    subtitle: 'Right intelligence for every job',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    accent: 'bg-violet-600',
    items: ['Model routing', 'Foundation models', 'Reasoning models', 'Coding models', 'Specialized models', 'RAG', 'Embeddings', 'Organizational knowledge', 'Evaluation', 'Guardrails'],
    detail: 'ONIT routes tasks to the appropriate intelligence rather than forcing all work through a single model. Requirements analysis uses reasoning plus RAG against organizational knowledge. Code generation uses coding-specialized intelligence. Financial analysis uses deterministic logic plus analytical models. Models are replaceable. The ONIT intelligence architecture is not.',
  },
  {
    num: 6,
    title: 'Action + Integration',
    subtitle: 'Connected to everything that matters',
    color: 'text-data-cyan',
    bg: 'bg-cyan-light',
    border: 'border-cyan-200',
    accent: 'bg-data-cyan',
    items: ['REST APIs', 'Webhooks', 'Tool interfaces', 'Git', 'Cloud platforms', 'CRM', 'ERP', 'Data platforms', 'Communication', 'CI/CD'],
    detail: 'The action layer gives AI workers and workflows the ability to take real actions: create repositories, deploy services, update records, send notifications, and query external systems. All tool invocations are governed by policy, permissions, and where required, human approval.',
  },
  {
    num: 7,
    title: 'Security + Governance',
    subtitle: 'Enterprise-grade control',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    accent: 'bg-slate-600',
    items: ['IAM', 'RBAC', 'SSO', 'Audit logging', 'Secrets management', 'Policy engine', 'Approval workflows', 'Multi-tenancy', 'Encryption', 'Data governance', 'Observability', 'Cost controls'],
    detail: 'ONIT is built for enterprise deployment. Every AI action is authorized, audited, and observable. Multi-tenant isolation, RBAC, SSO, and secrets management provide the control foundation. The policy engine defines what AI workers can do, what requires human approval, and what is never permitted.',
  },
]

export default function ArchitectureSection() {
  const [openLayer, setOpenLayer] = useState<number | null>(1)

  return (
    <section id="architecture" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
              Architecture
            </div>
            <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-[1.08] tracking-tight mb-6">
              Built as an operating<br />architecture.<br />
              <span className="text-mid-text">Not another tool.</span>
            </h2>
            <p className="text-base text-mid-text leading-relaxed mb-8 max-w-md">
              Seven architectural layers — from experience to governance — designed to function as a coherent operating system for software delivery organizations.
            </p>
            <a
              href="#architecture-deep"
              className="inline-flex items-center gap-2 text-sm font-semibold text-onit hover:text-onit-hover transition-colors"
            >
              <span className="font-mono text-[10px] tracking-widest uppercase text-mid-text">For Technical Teams</span>
              <br />
              Explore the Architecture in depth
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Layers accordion */}
          <div className="space-y-2">
            {layers.map((layer) => {
              const isOpen = openLayer === layer.num
              return (
                <div
                  key={layer.num}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? `border-2 ${layer.border} shadow-sm` : 'border-border-base hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenLayer(isOpen ? null : layer.num)}
                    aria-expanded={isOpen}
                    aria-controls={`layer-${layer.num}-content`}
                    className="w-full flex items-center gap-4 p-4 text-left hover:bg-pearl transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${layer.accent}`}>
                      L{layer.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-bold uppercase tracking-wide ${isOpen ? layer.color : 'text-midnight'}`}>
                        {layer.title}
                      </div>
                      <div className="text-xs text-mid-text mt-0.5">{layer.subtitle}</div>
                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={`flex-shrink-0 transition-transform duration-200 text-mid-text ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div id={`layer-${layer.num}-content`} className={`px-4 pb-4 ${layer.bg}`}>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${layer.border} bg-white ${layer.color}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-mid-text leading-relaxed">{layer.detail}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
