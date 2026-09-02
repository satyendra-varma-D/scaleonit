const tasks = [
  {
    task: 'Requirement Analysis',
    intelligence: ['Reasoning Models', 'RAG', 'Org Knowledge'],
    why: 'Deep reasoning over business context, retrieved organizational standards, and past project patterns.',
    color: 'text-[#C53678]', bg: 'bg-[#FDF2F7]', border: 'border-[#C53678]/30', dot: 'bg-[#C53678]',
  },
  {
    task: 'Code Generation',
    intelligence: ['Coding Intelligence', 'Codebase Context', 'Architecture Specs'],
    why: 'Specialized coding models with full access to existing codebase, architecture decisions, and team conventions.',
    color: 'text-[#FF5841]', bg: 'bg-[#FFF4F2]', border: 'border-[#FF5841]/30', dot: 'bg-[#FF5841]',
  },
  {
    task: 'Customer Support Resolution',
    intelligence: ['Knowledge Retrieval', 'Product Context', 'Customer History'],
    why: 'Fast retrieval-augmented response generation with full customer and product context.',
    color: 'text-[#3B1A54]', bg: 'bg-[#F5F3F8]', border: 'border-[#3B1A54]/30', dot: 'bg-[#3B1A54]',
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
    color: 'text-[#C53678]', bg: 'bg-[#FDF2F7]', border: 'border-[#C53678]/30', dot: 'bg-[#C53678]',
  },
  {
    task: 'Test Generation',
    intelligence: ['Coding Intelligence', 'Requirements', 'Test Standards'],
    why: 'Coding-specialized models generating comprehensive test suites from requirements and acceptance criteria.',
    color: 'text-[#FF5841]', bg: 'bg-[#FFF4F2]', border: 'border-[#FF5841]/30', dot: 'bg-[#FF5841]',
  },
]

interface IntelligenceSectionProps {
  onNavigateToIntelligence?: () => void
}

export default function IntelligenceSection({ onNavigateToIntelligence }: IntelligenceSectionProps = {}) {
  return (
    <section id="intelligence" className="py-24 bg-white border-t border-[#EAE6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] mb-6 border border-[#C53678]/30 bg-[#FDF2F7] px-4 py-2 rounded-full">
            Ecosystem Intelligence Architecture
          </div>
          <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-[#1B0A2A] leading-tight tracking-tight mb-4">
            One ecosystem.<br />Specialized intelligence<br />for every job.
          </h2>
          <p className="text-base text-[#5A4E68] max-w-xl mx-auto leading-relaxed mb-4">
            ScaleOnIt does not force every task through the same model. The right intelligence is selected for each job — reasoning, coding, retrieval, deterministic logic — and combined with organizational context.
          </p>
          <div className="inline-flex items-center gap-3 text-xs font-bold text-[#1B0A2A] bg-[#FAFAFC] border border-[#EAE6F0] px-5 py-2.5 rounded-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A4E68]">Architecture Principle:</span>
            Models are replaceable. ScaleOnIt&apos;s intelligence architecture is not.
          </div>
        </div>

        {/* Task Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((t) => (
            <div
              key={t.task}
              className={`p-6 rounded-3xl border bg-white shadow-2xs hover:shadow-sm transition-all duration-200 border-[#EAE6F0] hover:border-[#C53678]/30`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
                <h3 className="text-sm font-extrabold text-[#1B0A2A]">{t.task}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {t.intelligence.map((intel) => (
                  <span
                    key={intel}
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${t.bg} ${t.color} border ${t.border}`}
                  >
                    {intel}
                  </span>
                ))}
              </div>

              <p className="text-xs text-[#5A4E68] leading-relaxed">
                {t.why}
              </p>
            </div>
          ))}
        </div>

        {onNavigateToIntelligence && (
          <div className="text-center mt-12">
            <button
              onClick={onNavigateToIntelligence}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
            >
              Explore Domain Intelligence Architecture →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
