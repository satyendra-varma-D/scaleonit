const tasks = [
  {
    task: 'Requirement Analysis',
    intelligence: ['Reasoning Models', 'RAG', 'Org Knowledge'],
    why: 'Deep reasoning over business context, retrieved organizational standards, and past project patterns.',
    color: 'text-[#FF5500]', bg: 'bg-orange-50', border: 'border-orange-200', dot: 'bg-[#FF5500]',
  },
  {
    task: 'Code Generation',
    intelligence: ['Coding Intelligence', 'Codebase Context', 'Architecture Specs'],
    why: 'Specialized coding models with full access to existing codebase, architecture decisions, and team conventions.',
    color: 'text-slate-900', bg: 'bg-slate-50', border: 'border-slate-200', dot: 'bg-slate-900',
  },
  {
    task: 'Customer Support Resolution',
    intelligence: ['Knowledge Retrieval', 'Product Context', 'Customer History'],
    why: 'Fast retrieval-augmented response generation with full customer and product context.',
    color: 'text-[#FF5500]', bg: 'bg-orange-50', border: 'border-orange-200', dot: 'bg-[#FF5500]',
  },
  {
    task: 'Financial Analysis',
    intelligence: ['Deterministic Logic', 'Analytical Models', 'Finance Data'],
    why: 'Exact financial calculations with deterministic rules; reasoning models for interpretation and forecasting.',
    color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-600',
  },
  {
    task: 'Architecture Design',
    intelligence: ['Reasoning Models', 'Org Context', 'Tech Standards'],
    why: 'Extended reasoning over system constraints, organizational patterns, and technical standards.',
    color: 'text-[#FF5500]', bg: 'bg-orange-50', border: 'border-orange-200', dot: 'bg-[#FF5500]',
  },
  {
    task: 'Test Generation',
    intelligence: ['Coding Intelligence', 'Requirements', 'Test Standards'],
    why: 'Coding-specialized models generating comprehensive test suites from requirements and acceptance criteria.',
    color: 'text-slate-900', bg: 'bg-slate-50', border: 'border-slate-200', dot: 'bg-slate-900',
  },
]

interface IntelligenceSectionProps {
  onNavigateToIntelligence?: () => void
}

export default function IntelligenceSection({ onNavigateToIntelligence }: IntelligenceSectionProps = {}) {
  return (
    <section id="intelligence" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] mb-6 border border-orange-200 bg-orange-50 px-4 py-1.5 rounded-md shadow-xs">
            Ecosystem Intelligence Architecture
          </div>
          <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
            One ecosystem.<br />Specialized intelligence<br />for every job.
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-4">
            ScaleOnIt does not force every task through the same model. The right intelligence is selected for each job — reasoning, coding, retrieval, deterministic logic — and combined with organizational context.
          </p>
          <div className="inline-flex items-center gap-3 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-lg shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5500]">Architecture Principle:</span>
            Models are replaceable. ScaleOnIt&apos;s intelligence architecture is not.
          </div>
        </div>

        {/* Task Matrix with Hard Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((t) => (
            <div
              key={t.task}
              className="p-6 rounded-2xl border bg-white shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out border-slate-200"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
                <h3 className="text-sm font-extrabold text-slate-900">{t.task}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {t.intelligence.map((intel) => (
                  <span
                    key={intel}
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${t.bg} ${t.color} border ${t.border}`}
                  >
                    {intel}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {t.why}
              </p>
            </div>
          ))}
        </div>

        {onNavigateToIntelligence && (
          <div className="text-center mt-12">
            <button
              onClick={onNavigateToIntelligence}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
            >
              Explore Domain Intelligence Architecture →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
