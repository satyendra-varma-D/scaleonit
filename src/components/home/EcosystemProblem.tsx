export default function EcosystemProblem() {
  const fragmentedSilos = [
    {
      function: 'Customer Acquisition',
      system: 'CRM / Spreadsheets',
      friction: 'Lost opportunity context & inflated promises',
      color: 'border-[#FF5841]/20 bg-[#FFF4F2]/60',
      tagColor: 'text-[#FF5841] bg-white border-[#FF5841]/30',
    },
    {
      function: 'Requirements & Scoping',
      system: 'Google Docs / Confluence / Slides',
      friction: 'Ambiguous specs & scope creep during handoff',
      color: 'border-[#C53678]/20 bg-[#FDF2F7]/60',
      tagColor: 'text-[#C53678] bg-white border-[#C53678]/30',
    },
    {
      function: 'Engineering & Delivery',
      system: 'Jira / GitHub / CI Pipelines',
      friction: 'Engineers guessing business intent without context',
      color: 'border-[#3B1A54]/20 bg-[#F5F3F8]/80',
      tagColor: 'text-[#3B1A54] bg-white border-[#3B1A54]/30',
    },
    {
      function: 'Workforce & Staffing',
      system: 'HRIS / Resourcing Spreadsheets',
      friction: 'Skill mismatches, bench waste & over-allocation',
      color: 'border-[#3B1A54]/20 bg-[#F5F3F8]/80',
      tagColor: 'text-[#3B1A54] bg-white border-[#3B1A54]/30',
    },
    {
      function: 'Financial & Billing',
      system: 'Accounting / Invoicing Tools',
      friction: 'Delayed margin tracking & budget overruns',
      color: 'border-[#FF5841]/20 bg-[#FFF4F2]/60',
      tagColor: 'text-[#FF5841] bg-white border-[#FF5841]/30',
    },
    {
      function: 'Post-Launch Support',
      system: 'Zendesk / Freshdesk / Email',
      friction: 'Support teams blind to code changes & release history',
      color: 'border-[#C53678]/20 bg-[#FDF2F7]/60',
      tagColor: 'text-[#C53678] bg-white border-[#C53678]/30',
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
      className="py-24 bg-[#FAFAFC] text-[#1B0A2A] border-y border-[#EAE6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF5841] bg-[#FFF4F2] border border-[#FF5841]/30 px-4 py-1.5 rounded-full mb-6">
            The Reality of Business Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            Businesses operate across many functions.{' '}
            <span className="text-[#C53678] block mt-1">
              What they lack is a connected operating ecosystem.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            Today, critical information is trapped in isolated silos. Every handoff between customer relationship, discovery, delivery, resourcing, finance, and support introduces friction and erodes context.
          </p>
        </div>

        {/* The 6 Fragmented Silos Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {fragmentedSilos.map((silo, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${silo.color} transition-all duration-200 hover:shadow-md hover:border-[#1B0A2A]/20`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5A4E68]">
                  Function {index + 1}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${silo.tagColor}`}>
                  {silo.system}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-[#1B0A2A] mb-2">{silo.function}</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Operating in isolation creates:
              </p>
              <div className="text-xs font-semibold text-[#FF5841] bg-white border border-[#FF5841]/25 p-3 rounded-xl flex items-start gap-2 shadow-2xs">
                <span className="text-[#FF5841] font-black">⚠</span>
                <span>{silo.friction}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Outcome of Fragmentation Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE6F0] shadow-[0_10px_30px_rgba(27,10,42,0.04)] max-w-4xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5A4E68] mb-5">
            The Result of Tool Fragmentation
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
            {operationalFrictions.map((friction, i) => (
              <span
                key={i}
                className="text-xs font-semibold text-[#1B0A2A] bg-[#FAFAFC] border border-[#EAE6F0] px-4 py-2 rounded-full"
              >
                ✕ {friction}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#5A4E68] max-w-xl mx-auto leading-relaxed">
            Existing tools aren&apos;t bad at what they do. But without a unified operating ecosystem, teams spend more time coordinating work than executing it.
          </p>
        </div>
      </div>
    </section>
  )
}
