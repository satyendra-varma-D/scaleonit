export default function EcosystemProblem() {
  const silos = [
    {
      role: 'Sales',
      tool: 'CRM & Spreadsheets',
      problem: 'Prospect details stay locked in sales pipelines.',
    },
    {
      role: 'Requirements',
      tool: 'Documents & Notes',
      problem: 'Client requirements sit in separate files and emails.',
    },
    {
      role: 'Delivery',
      tool: 'Project & Code Tools',
      problem: 'Engineering builds software without full sales and customer context.',
    },
    {
      role: 'People',
      tool: 'Resourcing Sheets',
      problem: 'Team schedules and skills are tracked separately.',
    },
    {
      role: 'Financials',
      tool: 'Invoicing & Accounting',
      problem: 'Project billing and margins are calculated after the fact.',
    },
    {
      role: 'Support',
      tool: 'Customer Helpdesk',
      problem: 'Support has no direct visibility into code releases or agreed requirements.',
    },
  ]

  return (
    <section
      id="problem"
      aria-label="The Problem: Disconnected Systems"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50/90 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            WHY SCALEONIT EXISTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Your business has many parts.{' '}
            <span className="text-[#FF5500] block mt-1">They should work together.</span>
          </h2>
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto space-y-2">
            <p>
              Sales has one tool. Projects have another. Customer information sits somewhere else. People, finance and support often work in separate systems.
            </p>
            <p className="text-slate-600 text-sm">
              This creates repeated work, disconnected information and unnecessary handoffs. ScaleOnIt brings these parts together so the work can move from one system to the next.
            </p>
          </div>
        </div>

        {/* 6 Disconnected Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 max-w-5xl mx-auto">
          {silos.map((silo, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 hover:border-[#FF5500] shadow-[2px_2px_0px_0px_#0F172A] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-extrabold text-base text-slate-900 group-hover:text-[#FF5500] transition-colors">
                  {silo.role}
                </span>
                <span className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded bg-orange-50/80 text-[#FF5500] border border-orange-200/60">
                  {silo.tool}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {silo.problem}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Connection Statement */}
        <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 max-w-4xl mx-auto text-center shadow-[3px_3px_0px_0px_#0F172A]">
          <div className="inline-block font-mono text-[11px] font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80 mb-2">
            The ScaleOnIt Approach
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900">
            One connected platform so information moves with the work — from first client meeting to final support.
          </p>
        </div>
      </div>
    </section>
  )
}

