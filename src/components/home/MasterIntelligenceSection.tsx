export default function MasterIntelligenceSection() {
  const domainIntelligence = [
    {
      system: 'GROW',
      intelligence: 'Growth Intelligence',
      scope: 'Pipeline dynamics, lead intent classification, win/loss pattern detection, and customer lifetime modeling.',
      color: 'border-[#FF5841]/25 bg-[#FFF4F2]/50 text-[#FF5841]',
      icon: '🌱',
    },
    {
      system: 'DISCOVER',
      intelligence: 'Requirements Intelligence',
      scope: 'Automated BRD/FRD synthesis, ambiguity detection, acceptance criteria structuring, and scope gap analysis.',
      color: 'border-[#C53678]/25 bg-[#FDF2F7]/50 text-[#C53678]',
      icon: '🔍',
    },
    {
      system: 'DELIVER',
      intelligence: 'Delivery & Engineering Intelligence',
      scope: 'Architecture synthesis, automated test generation, PR review assistance, and release risk evaluation.',
      color: 'border-[#C53678] bg-[#FDF2F7] text-[#C53678] ring-1 ring-[#C53678]/20 shadow-xs',
      icon: '⚡',
    },
    {
      system: 'PEOPLE',
      intelligence: 'Workforce Intelligence',
      scope: 'Skill matching algorithms, project capacity forecasting, workload balancing, and staffing optimization.',
      color: 'border-[#3B1A54]/25 bg-[#F5F3F8]/60 text-[#3B1A54]',
      icon: '👥',
    },
    {
      system: 'MONEY',
      intelligence: 'Financial Intelligence',
      scope: 'Real-time project cost burn analysis, revenue recognition forecasting, and delivery margin health alerts.',
      color: 'border-[#FF5841]/25 bg-[#FFF4F2]/50 text-[#FF5841]',
      icon: '📊',
    },
    {
      system: 'SERVE',
      intelligence: 'Customer Intelligence',
      scope: 'Upstream incident root-cause mapping, SLA breach prediction, sentiment trends, and renewal indicators.',
      color: 'border-[#C53678]/25 bg-[#FDF2F7]/50 text-[#C53678]',
      icon: '🛡️',
    },
  ]

  return (
    <section
      id="intelligence"
      aria-label="Intelligence in ScaleOnIt — Intelligence Built into the Work"
      className="py-24 bg-[#FAFAFC] text-[#1B0A2A] border-y border-[#EAE6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#3B1A54] bg-[#F5F3F8] border border-[#3B1A54]/25 px-4 py-1.5 rounded-full mb-6">
            Ecosystem Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            Intelligence is built into the work.{' '}
            <span className="text-[#C53678] block mt-1">Not pasted on as a generic chatbot.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt embeds purpose-specific intelligence directly within the functional workflows of each system — augmenting human teams where it matters most.
          </p>
        </div>

        {/* 6 Specialized Domain Intelligence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {domainIntelligence.map((item) => (
            <div
              key={item.system}
              className={`p-6 rounded-2xl border ${item.color} space-y-4 hover:shadow-xs transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A4E68]">
                    System: {item.system}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-[#EAE6F0] text-[#1B0A2A]">
                  Specialized AI
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[#1B0A2A]">
                {item.intelligence}
              </h3>

              <p className="text-xs text-[#5A4E68] leading-relaxed">
                {item.scope}
              </p>
            </div>
          ))}
        </div>

        {/* Intelligence Architecture Principle Note */}
        <div className="p-8 rounded-3xl bg-white border border-[#EAE6F0] max-w-3xl mx-auto text-center shadow-xs">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5A4E68] mb-2">
            The Strategic AI Principle
          </div>
          <p className="text-xs sm:text-sm text-[#1B0A2A] leading-relaxed font-medium">
            AI workers in ScaleOnIt operate under strict human policy control, defined scopes, and enterprise governance. They are not arbitrary chatbots — they are specialized computational workers grounded in real business context.
          </p>
        </div>
      </div>
    </section>
  )
}
