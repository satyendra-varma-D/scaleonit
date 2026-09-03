export default function EcosystemFlowSection() {
  const mainFlow = [
    {
      step: '01',
      system: 'GROW',
      title: 'Find Customers',
      description: 'A new customer relationship starts in GROW through sales conversations and opportunity qualification.',
      icon: '🌱',
    },
    {
      step: '02',
      system: 'DISCOVER',
      title: 'Understand Needs',
      description: 'Customer requirements move into DISCOVER to be defined, organized and agreed upon.',
      icon: '🔍',
    },
    {
      step: '03',
      system: 'DELIVER',
      title: 'Build Software',
      description: 'The project moves into DELIVER where software is planned, built, tested and released.',
      icon: '⚡',
      badge: 'Powered by ONIT',
    },
    {
      step: '04',
      system: 'SERVE',
      title: 'Support Customers',
      description: 'After release, SERVE manages customer support, ongoing requests and long-term success.',
      icon: '🛡️',
    },
  ]

  const supportingSystems = [
    {
      system: 'PEOPLE',
      title: 'Workforce & Resource Management',
      description: 'Aligns team skills, work assignments and project schedules throughout the entire flow.',
      icon: '👥',
    },
    {
      system: 'FINANCIALS',
      title: 'Commercial & Project Financials',
      description: 'Connects milestone progress directly to client invoices, budget tracking and profit margins.',
      icon: '📊',
    },
  ]

  return (
    <section
      id="ecosystem-flow"
      aria-label="How the Ecosystem Connects"
      className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            HOW THE ECOSYSTEM CONNECTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            The work moves from one system to the next.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4">
            The information stays connected as the work moves forward.
          </p>
          <div className="inline-block font-mono text-sm font-bold text-slate-900 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-2xs">
            Less repeated work. Fewer disconnected handoffs.
          </div>
        </div>

        {/* Primary Sequential Flow Diagram: GROW -> DISCOVER -> DELIVER -> SERVE */}
        <div className="mb-10 max-w-5xl mx-auto">
          <div className="font-mono text-xs font-bold uppercase text-slate-500 mb-3 text-center sm:text-left">
            Primary Work Journey
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainFlow.map((item, index) => (
              <div
                key={item.system}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-black text-[#FF5500]">
                      {item.step}
                    </span>
                    <span className="text-xl">{item.icon}</span>
                  </div>

                  <div className="font-extrabold text-lg text-slate-900 mb-1">
                    {item.system}
                  </div>
                  <div className="text-xs font-bold text-[#FF5500] mb-2">
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.badge && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="font-mono text-[10px] font-bold text-[#FF5500] bg-orange-50 px-2 py-0.5 rounded border border-orange-200 block text-center">
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Foundation: PEOPLE + FINANCIALS */}
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-xs font-bold uppercase text-slate-500 mb-3 text-center sm:text-left">
            Continuous Operational Support Across All Stages
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingSystems.map((item) => (
              <div
                key={item.system}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-extrabold text-base text-slate-900">
                    {item.system} — <span className="text-xs font-normal text-slate-600">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

