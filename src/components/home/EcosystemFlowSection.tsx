export default function EcosystemFlowSection() {
  const steps = [
    {
      num: '01',
      system: 'GROW',
      action: 'Find & Qualify Opportunity',
      output: 'Validated client business case and agreed scope parameters',
      color: 'text-[#FF5841] border-[#FF5841]/30 bg-[#FFF4F2]/60',
    },
    {
      num: '02',
      system: 'DISCOVER',
      action: 'Define Solution & Requirements',
      output: 'Structured BRD/FRD, user stories & technical architecture commitments',
      color: 'text-[#C53678] border-[#C53678]/30 bg-[#FDF2F7]/60',
    },
    {
      num: '03',
      system: 'DELIVER',
      action: 'Build, Test & Release (ONIT)',
      output: 'Production-ready code, verified test suites & audited releases',
      color: 'text-white border-transparent bg-gradient-to-r from-[#C53678] to-[#FF5841]',
    },
    {
      num: '04',
      system: 'PEOPLE',
      action: 'Align Workforce & Capacity',
      output: 'Optimal skill allocation, utilization visibility & bench management',
      color: 'text-[#3B1A54] border-[#3B1A54]/30 bg-[#F5F3F8]/80',
    },
    {
      num: '05',
      system: 'MONEY',
      action: 'Track Project Economics',
      output: 'Live margin reporting, contract milestone billing & budget controls',
      color: 'text-[#FF5841] border-[#FF5841]/30 bg-[#FFF4F2]/60',
    },
    {
      num: '06',
      system: 'SERVE',
      action: 'Support, Retain & Expand',
      output: 'Upstream-aware customer support, SLA health & renewal intelligence',
      color: 'text-[#C53678] border-[#C53678]/30 bg-[#FDF2F7]/60',
    },
  ]

  return (
    <section
      id="ecosystem-flow"
      aria-label="How the Ecosystem Works — Interconnected Context Flow"
      className="py-24 bg-white text-[#1B0A2A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF5841] bg-[#FFF4F2] border border-[#FF5841]/30 px-4 py-1.5 rounded-full mb-6">
            Connected Context Continuity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            How the ecosystem works together.{' '}
            <span className="text-[#C53678] block mt-1">Shared context across every boundary.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            This is not a rigid linear conveyor belt. It represents interconnected business functions sharing a single source of operating truth.
          </p>
        </div>

        {/* Step Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] hover:border-[#C53678]/40 hover:shadow-sm transition-all duration-200 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${step.color}`}>
                  {step.system}
                </span>
                <span className="text-xs font-mono font-bold text-[#5A4E68]">
                  STAGE {step.num}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">
                {step.action}
              </h3>

              <div className="text-xs text-[#5A4E68] leading-relaxed pt-3 border-t border-[#EAE6F0] flex items-start gap-2">
                <span className="text-[#FF5841] font-bold">↳</span>
                <span>{step.output}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Context Exchange Summary */}
        <div className="rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] p-8 sm:p-10 max-w-4xl mx-auto shadow-[0_15px_40px_rgba(27,10,42,0.04)] text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C53678]">
            The Multi-Directional Nervous System
          </div>
          <p className="text-sm sm:text-base text-[#1B0A2A] leading-relaxed max-w-2xl mx-auto font-semibold">
            When a customer ticket is escalated in <span className="text-[#C53678] font-black">SERVE</span>, it can immediately reference the exact code commit in <span className="text-[#FF5841] font-black">DELIVER</span>, the original requirement signed off in <span className="text-[#C53678] font-black">DISCOVER</span>, and the commercial SLA agreed in <span className="text-[#FF5841] font-black">GROW</span>.
          </p>
          <div className="text-xs text-[#5A4E68] font-medium">
            No manual re-entry. No lost context. Zero operational friction.
          </div>
        </div>
      </div>
    </section>
  )
}
