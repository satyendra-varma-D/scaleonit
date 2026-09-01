const tasks = [
  {
    task: 'Requirement Analysis',
    intelligence: ['Reasoning Models', 'RAG', 'Org Knowledge'],
    why: 'Deep reasoning over business context, retrieved organizational standards, and past project patterns.',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200', dot: 'bg-onit',
  },
  {
    task: 'Code Generation',
    intelligence: ['Coding Intelligence', 'Codebase Context', 'Architecture Specs'],
    why: 'Specialized coding models with full access to existing codebase, architecture decisions, and team conventions.',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', dot: 'bg-ai-violet',
  },
  {
    task: 'Customer Support Resolution',
    intelligence: ['Knowledge Retrieval', 'Product Context', 'Customer History'],
    why: 'Fast retrieval-augmented response generation with full customer and product context.',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', dot: 'bg-data-cyan',
  },
  {
    task: 'Financial Analysis',
    intelligence: ['Deterministic Logic', 'Analytical Models', 'Finance Data'],
    why: 'Exact financial calculations with deterministic rules; reasoning models for interpretation and forecasting.',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-500',
  },
  {
    task: 'Architecture Design',
    intelligence: ['Reasoning Models', 'Org Context', 'Tech Standards'],
    why: 'Extended reasoning over system constraints, organizational patterns, and technical standards.',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200', dot: 'bg-ai-violet',
  },
  {
    task: 'Test Generation',
    intelligence: ['Coding Intelligence', 'Requirements', 'Test Standards'],
    why: 'Coding-specialized models generating comprehensive test suites from requirements and acceptance criteria.',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200', dot: 'bg-data-cyan',
  },
]

export default function IntelligenceSection() {
  return (
    <section id="intelligence" className="py-28 bg-pearl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-ai-violet mb-6 border border-violet-200 bg-ai-light px-4 py-2 rounded-full">
            AI Intelligence Architecture
          </div>
          <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-tight tracking-tight mb-4">
            One platform.<br />Specialized intelligence<br />for every job.
          </h2>
          <p className="text-base text-mid-text max-w-xl mx-auto leading-relaxed mb-4">
            ONIT does not force every task through the same model. The right intelligence is selected for each job — reasoning, coding, retrieval, deterministic logic — and combined with organizational context.
          </p>
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-ai-violet bg-ai-light border border-violet-200 px-5 py-2.5 rounded-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-mid-text">Architecture Principle:</span>
            Models are replaceable. ONIT&apos;s intelligence architecture is not.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((t) => (
            <div
              key={t.task}
              className={`rounded-xl border-2 ${t.border} bg-white p-5 hover:shadow-md transition-all duration-150 group`}
            >
              <div className={`text-sm font-bold ${t.color} mb-3`}>{t.task}</div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {t.intelligence.map((i) => (
                  <span key={i} className={`text-[11px] font-semibold px-2 py-0.5 rounded-lg ${t.bg} ${t.border} border ${t.color}`}>
                    {i}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <div className={`w-1 h-full rounded-full flex-shrink-0 ${t.dot} mt-0.5`} style={{ minHeight: '2.5rem' }} />
                <p className="text-xs text-mid-text leading-relaxed">{t.why}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture note */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl border border-border-base bg-white">
          <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-4">ONIT Intelligence Architecture</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {[
              'Deterministic Logic',
              'RAG & Knowledge',
              'Foundation Models',
              'Coding Models',
              'Specialized Models',
              'Fine-tuned Models',
              'Tool Use',
              'Agent Coordination',
              'Workflow Execution',
              'Human Oversight',
            ].map((item) => (
              <div key={item} className="text-[11px] font-semibold text-mid-text bg-soft border border-border-base px-2.5 py-1.5 rounded-lg text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
