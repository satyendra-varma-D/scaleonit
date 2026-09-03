export default function EcosystemRoadmapSection() {
  const roadmapItems = [
    {
      name: 'GROW',
      job: 'Business acquisition, sales and CRM',
      icon: '🌱',
    },
    {
      name: 'DISCOVER',
      job: 'Customer discovery, requirements and solution definition',
      icon: '🔍',
    },
    {
      name: 'PEOPLE',
      job: 'Workforce and resource management',
      icon: '👥',
    },
    {
      name: 'FINANCIALS',
      job: 'Commercial and project financial management',
      icon: '📊',
    },
    {
      name: 'SERVE',
      job: 'Customer service, support and customer success',
      icon: '🛡️',
    },
  ]

  return (
    <section
      id="roadmap"
      aria-label="Ecosystem Roadmap & Status"
      className="py-20 bg-transparent text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            ECOSYSTEM ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            We are building the ecosystem one system at a time.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            DELIVER is available today and powered by ONIT. The other systems are part of the ScaleOnIt ecosystem roadmap.
          </p>
        </div>

        {/* Available Today vs Building Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* AVAILABLE TODAY (DELIVER / ONIT) */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-white border-2 border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 px-3 py-1 rounded-md border border-orange-200">
                  AVAILABLE TODAY
                </span>
                <span className="text-2xl" aria-hidden="true">⚡</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">
                DELIVER
              </h3>
              <div className="font-mono text-xs font-bold text-[#FF5500] mb-3">
                Powered by ONIT
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-normal mb-4">
                Software project planning, execution and delivery. Helps teams move from requirements to working software with prototypes, code synthesis, testing, and deployment.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#FF5500]">
              <span>Status: Active &amp; Ready</span>
              <span>Available Now</span>
            </div>
          </div>

          {/* BUILDING THE ECOSYSTEM (5 Systems) */}
          <div className="lg:col-span-7 p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                  BUILDING THE ECOSYSTEM
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  Part of the Roadmap
                </span>
              </div>

              <div className="space-y-3">
                {roadmapItems.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base shrink-0">{item.icon}</span>
                      <span className="font-extrabold text-slate-900">{item.name}</span>
                      <span className="text-slate-500 truncate hidden sm:inline">— {item.job}</span>
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-slate-500 px-2 py-0.5 rounded bg-white border border-slate-200 shrink-0">
                      Roadmap
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500 font-mono text-center">
              We are committed to building a real product with transparent milestones.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
