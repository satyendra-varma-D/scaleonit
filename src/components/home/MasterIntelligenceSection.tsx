export default function MasterIntelligenceSection() {
  const domainIntelligence = [
    {
      system: 'GROW',
      intelligence: 'Growth Intelligence',
      scope: 'Pipeline dynamics, lead intent classification, win/loss pattern detection, and customer lifetime modeling.',
      icon: '🌱',
    },
    {
      system: 'DISCOVER',
      intelligence: 'Requirements Intelligence',
      scope: 'Automated BRD/FRD synthesis, ambiguity detection, acceptance criteria structuring, and scope gap analysis.',
      icon: '🔍',
    },
    {
      system: 'DELIVER',
      intelligence: 'Delivery Intelligence (ONIT)',
      scope: 'Architecture synthesis, automated test generation, PR review assistance, and release risk evaluation.',
      icon: '⚡',
    },
    {
      system: 'PEOPLE',
      intelligence: 'Workforce Intelligence',
      scope: 'Skill matching algorithms, project capacity forecasting, workload balancing, and staffing optimization.',
      icon: '👥',
    },
    {
      system: 'FINANCIALS',
      intelligence: 'Commercial & Financial Intelligence',
      scope: 'Real-time project cost burn analysis, revenue recognition forecasting, and delivery margin health alerts.',
      icon: '📊',
    },
    {
      system: 'SERVE',
      intelligence: 'Customer Intelligence',
      scope: 'Upstream incident root-cause mapping, SLA breach prediction, sentiment trends, and renewal indicators.',
      icon: '🛡️',
    },
  ]

  return (
    <section
      id="intelligence"
      aria-label="Intelligence in ScaleOnIt — Intelligence Built into the Work"
      className="py-24 bg-transparent text-slate-900 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            EMBEDDED INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Intelligence is built into the work.{' '}
            <span className="text-[#FF5500] block mt-1">
              Not pasted on as a generic chatbot.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt embeds purpose-specific intelligence directly within the operational workflows of each system — augmenting human teams where execution speed matters most.
          </p>
        </div>

        {/* 6 Specialized Domain Intelligence Cards (Hard Shadows + Glow Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {domainIntelligence.map((item) => (
            <div
              key={item.system}
              className={`p-6 rounded-xl border transition-all duration-200 ease-out space-y-4 ${
                item.system === 'DELIVER'
                  ? 'bg-white border-[#FF5500] shadow-[4px_4px_0px_0px_#FF5500] ring-1 ring-orange-500/30 -translate-y-1 -translate-x-1'
                  : 'bg-white border-slate-200 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    System: {item.system}
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-orange-50 border border-orange-200 text-[#FF5500]">
                  Specialized AI
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.intelligence}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.scope}
              </p>
            </div>
          ))}
        </div>

        {/* Intelligence Architecture Principle Note */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto text-center shadow-sm">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-2">
            The Governed AI Principle
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            AI workers in ScaleOnIt operate under strict human policy gates, defined execution boundaries, and enterprise governance. They are not arbitrary chatbots — they are specialized computational workers grounded in real business context.
          </p>
        </div>
      </div>
    </section>
  )
}
