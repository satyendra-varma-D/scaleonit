export default function EcosystemFlowSection() {
  const steps = [
    {
      num: '01',
      system: 'GROW',
      action: 'Find & Qualify Opportunity',
      output: 'Validated client business case and agreed scope parameters',
      tagColor: 'text-slate-700 bg-slate-100 border-slate-200',
    },
    {
      num: '02',
      system: 'DISCOVER',
      action: 'Define Solution & Requirements',
      output: 'Structured BRD/FRD, user stories & technical architecture commitments',
      tagColor: 'text-slate-700 bg-slate-100 border-slate-200',
    },
    {
      num: '03',
      system: 'DELIVER',
      action: 'Build, Test & Release (ONIT)',
      output: 'Production-ready code, verified test suites & audited releases',
      tagColor: 'text-white bg-[#FF5500] border-transparent shadow-xs',
    },
    {
      num: '04',
      system: 'PEOPLE',
      action: 'Align Workforce & Capacity',
      output: 'Optimal skill allocation, utilization visibility & bench management',
      tagColor: 'text-slate-700 bg-slate-100 border-slate-200',
    },
    {
      num: '05',
      system: 'FINANCIALS',
      action: 'Milestone Payments & Margin Clarity',
      output: 'Live margin reporting, contract milestone billing & budget controls',
      tagColor: 'text-slate-700 bg-slate-100 border-slate-200',
    },
    {
      num: '06',
      system: 'SERVE',
      action: 'Support, Retain & Expand',
      output: 'Upstream-aware customer support, SLA health & renewal intelligence',
      tagColor: 'text-slate-700 bg-slate-100 border-slate-200',
    },
  ]

  return (
    <section
      id="ecosystem-flow"
      aria-label="How the Ecosystem Works — Interconnected Context Flow"
      className="py-24 bg-transparent text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            CONNECTED CONTEXT CONTINUITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            How the ecosystem works together.{' '}
            <span className="text-[#FF5500] block mt-1">Shared context across every boundary.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            This is not a rigid linear conveyor belt. It represents interconnected business functions sharing a single source of operational truth.
          </p>
        </div>

        {/* Step Progression Grid (Hard Shadows + Glow Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {steps.map((step) => {
            const isDeliver = step.system === 'DELIVER'
            return (
              <div
                key={step.num}
                className={`p-6 rounded-xl border transition-all duration-200 ease-out relative group ${
                  isDeliver
                    ? 'bg-white border-[#FF5500] shadow-[4px_4px_0px_0px_#FF5500] -translate-y-1 -translate-x-1'
                    : 'bg-white border-slate-200 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded border ${step.tagColor}`}>
                    {step.system}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    STAGE {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.action}
                </h3>

                <div className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100 flex items-start gap-2">
                  <span className="text-[#FF5500] font-bold font-mono">↳</span>
                  <span>{step.output}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dynamic Context Exchange Summary */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 sm:p-10 max-w-4xl mx-auto shadow-sm text-center space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500]">
            The Multi-Directional Nervous System
          </div>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed max-w-2xl mx-auto font-semibold">
            When a customer ticket is escalated in <span className="text-slate-900 font-bold font-mono">SERVE</span>, it can immediately reference the exact code commit in <span className="text-[#FF5500] font-bold font-mono">DELIVER</span>, the original requirement signed off in <span className="text-slate-900 font-bold font-mono">DISCOVER</span>, and the commercial SLA agreed in <span className="text-slate-900 font-bold font-mono">GROW</span>.
          </p>
          <div className="font-mono text-xs text-slate-500 uppercase">
            No manual re-entry. No lost context. Zero operational friction.
          </div>
        </div>
      </div>
    </section>
  )
}
