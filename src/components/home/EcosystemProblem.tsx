export default function EcosystemProblem() {
  const fragmentedSilos = [
    {
      function: 'Customer Acquisition',
      system: 'CRM / Spreadsheets',
      friction: 'Lost opportunity context & inflated promises',
    },
    {
      function: 'Requirements & Scoping',
      system: 'Docs / Confluence',
      friction: 'Ambiguous specs & scope creep during handoff',
    },
    {
      function: 'Engineering & Delivery',
      system: 'Jira / GitHub / CI',
      friction: 'Engineers guessing business intent without context',
    },
    {
      function: 'Workforce & Staffing',
      system: 'HRIS / Resourcing Sheets',
      friction: 'Skill mismatches, bench waste & over-allocation',
    },
    {
      function: 'Financial & Billing',
      system: 'Accounting Tools',
      friction: 'Delayed margin tracking & budget overruns',
    },
    {
      function: 'Post-Launch Support',
      system: 'Zendesk / Freshdesk',
      friction: 'Support teams blind to code changes & release history',
    },
  ]

  const operationalFrictions = [
    'Lost Context Across Handoffs',
    'Repeated Manual Data Re-entry',
    'Blind Decision-Making',
    'Slow Coordination Cycles',
    'Disconnected Functional Teams',
    'Unpredictable Delivery Outcomes',
  ]

  return (
    <section
      id="problem"
      aria-label="Why ScaleOnIt Exists — The Problem of Operational Fragmentation"
      className="py-24 bg-transparent text-slate-900 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            THE REALITY OF SILOED OPERATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Businesses operate across many functions.{' '}
            <span className="text-[#FF5500] block mt-1">
              What they lack is a connected operating ecosystem.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Today, critical business context is trapped inside isolated tools. Every handoff between acquisition, requirements, engineering, resourcing, finance, and customer support introduces friction and erodes intent.
          </p>
        </div>

        {/* The 6 Fragmented Silos Matrix (Hard Shadows + Glow Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {fragmentedSilos.map((silo, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                  FUNCTION 0{index + 1}
                </span>
                <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-700">
                  {silo.system}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{silo.function}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Operating in isolation creates:
              </p>
              <div className="font-mono text-xs text-slate-800 bg-orange-50/50 border border-orange-200/60 p-3 rounded-lg flex items-start gap-2">
                <span className="text-[#FF5500] font-bold">⚠</span>
                <span className="font-semibold">{silo.friction}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Outcome of Fragmentation Bar */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
            The Result of Tool Fragmentation
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
            {operationalFrictions.map((friction, i) => (
              <span
                key={i}
                className="font-mono text-xs text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-md shadow-2xs"
              >
                ✕ {friction}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            Existing point tools aren&apos;t bad at what they do. But without a unified operating ecosystem, organizations spend more time coordinating work than delivering value.
          </p>
        </div>
      </div>
    </section>
  )
}
