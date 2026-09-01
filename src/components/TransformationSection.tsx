import { useState } from 'react'

const outcomes = [
  'Less context switching', 'Less manual coordination', 'Less duplication',
  'Better traceability', 'Faster handoffs', 'Better visibility',
  'Standardized delivery', 'Connected knowledge', 'AI-assisted execution', 'Better operational control',
]

const roles = [
  {
    id: 'founder', label: 'Founder / Owner', icon: '🏢',
    questions: [
      'Can this reduce operational complexity?',
      'Can my company run more efficiently?',
      'Can AI actually do real work?',
    ],
    answer: 'Operate more of your software business through one connected system. From sales pipeline to delivery to support — with AI coordinating the work your team would otherwise manage manually.',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200',
  },
  {
    id: 'cto', label: 'CTO', icon: '🔧',
    questions: [
      'What is the architecture?',
      'How are agents orchestrated and controlled?',
      'How are AI outputs evaluated?',
    ],
    answer: 'ONIT provides a seven-layer architecture with full agent orchestration, model routing, evaluation, governance, and observability. Every AI action is bounded, audited, and explainable.',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200',
  },
  {
    id: 'delivery', label: 'Delivery Leader', icon: '📊',
    questions: [
      'Where are my projects and what is at risk?',
      'Who is over-allocated?',
      'Can status reporting be automated?',
    ],
    answer: 'See all projects, resources, risks, quality and execution in one place. ONIT INTELLIGENCE surfaces risks before they become problems. AI Project Manager coordinates across teams and generates status updates.',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200',
  },
  {
    id: 'engineering', label: 'Engineering Leader', icon: '⚙️',
    questions: [
      'How does ONIT connect requirements to engineering?',
      'How does AI participate safely in the SDLC?',
      'How does it integrate with our Git workflow?',
    ],
    answer: 'Requirements flow from DISCOVER directly into engineering tasks. AI workers operate within defined permissions, with code review and merge approval controls. ONIT integrates with existing Git repositories through ONIT Connect.',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200',
  },
  {
    id: 'enterprise', label: 'Enterprise Buyer', icon: '🏛️',
    questions: [
      'Can we keep our existing systems?',
      'How is data governed and access controlled?',
      'How does adoption work for a large organization?',
    ],
    answer: 'ONIT Connect is designed to work with your existing enterprise stack. RBAC, SSO, multi-tenancy, audit logging, and data governance are foundational. Adoption starts with one capability and expands at your pace.',
    color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200',
  },
]

export default function TransformationSection() {
  const [activeRole, setActiveRole] = useState('cto')
  const role = roles.find((r) => r.id === activeRole)!

  return (
    <section id="transformation" className="py-28 bg-pearl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
            Built For Your Organization
          </div>
          <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-tight tracking-tight mb-4">
            Stop managing the chaos.<br />Start operating the system.
          </h2>
        </div>

        {/* Outcome grid */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-16">
          {outcomes.map((o) => (
            <div key={o} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-base bg-white text-sm font-medium text-midnight">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6l2.5 2.5 5.5-5.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {o}
            </div>
          ))}
        </div>

        {/* Role tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              aria-pressed={activeRole === r.id}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-150 text-sm font-semibold ${
                activeRole === r.id
                  ? `${r.bg} ${r.border} border-2 ${r.color} shadow-sm`
                  : 'border-border-base text-mid-text hover:border-slate-300 hover:bg-white'
              }`}
            >
              <span aria-hidden="true">{r.icon}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* Role detail */}
        <div className={`max-w-3xl mx-auto rounded-2xl border-2 ${role.border} ${role.bg} p-8`}>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl flex-shrink-0" aria-hidden="true">{role.icon}</span>
            <div>
              <h3 className={`text-lg font-bold ${role.color} mb-1`}>{role.label}</h3>
              <p className="text-[10px] font-bold tracking-widest uppercase text-mid-text">Key Questions</p>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            {role.questions.map((q) => (
              <div key={q} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-white/40">
                <div className="w-4 h-4 mt-0.5 rounded-full border-2 border-slate-300 flex-shrink-0" />
                <span className="text-sm text-midnight">{q}</span>
              </div>
            ))}
          </div>

          <div className={`border-l-2 ${role.border} pl-4`}>
            <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-2">How ONIT Answers</div>
            <p className="text-sm text-midnight leading-relaxed">{role.answer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
