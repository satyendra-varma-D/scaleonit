export default function BiggerVisionSection() {
  const roadmapPillars = [
    {
      era: 'PHASE 01 · AVAILABLE TODAY',
      title: 'DELIVER (Powered by ONIT)',
      desc: 'The foundational software delivery operating system turning requirements into tested code and governed releases.',
      status: 'Available & Active',
      color: 'border-[#FF5500] bg-white ring-1 ring-orange-500/30 shadow-md shadow-orange-500/10',
      badge: 'text-white bg-[#FF5500]',
      isDeliver: true,
    },
    {
      era: 'PHASE 02 · NEXT EXPANSION',
      title: 'DISCOVER & SERVE',
      desc: 'Deepening upstream discovery, requirements intelligence, and closing the post-launch customer support loop.',
      status: 'Building Toward',
      color: 'border-slate-200 bg-white',
      badge: 'text-[#FF5500] bg-orange-50 border border-orange-200',
      isDeliver: false,
    },
    {
      era: 'PHASE 03 · ECOSYSTEM COMPLETION',
      title: 'GROW, PEOPLE & FINANCIALS',
      desc: 'Connecting sales pipeline, workforce allocation, and real-time project profitability into one unified business operating ecosystem.',
      status: 'ScaleOnIt Vision',
      color: 'border-slate-200 bg-white',
      badge: 'text-slate-600 bg-slate-100 border border-slate-200',
      isDeliver: false,
    },
  ]

  return (
    <section
      id="vision"
      aria-label="The Bigger ScaleOnIt Vision — Building the Operating Ecosystem"
      className="py-24 bg-transparent text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            THE LONG-TERM VISION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            One system is useful.{' '}
            <span className="text-[#FF5500] block mt-1">
              An ecosystem changes how a business operates.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            ScaleOnIt is building this future one system at a time. We are committed to transparency, enterprise credibility, and rigorous architectural excellence.
          </p>
        </div>

        {/* 3-Phase Horizon Grid (Hard Shadows + Glow Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {roadmapPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border ${pillar.color} space-y-4 flex flex-col justify-between shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {pillar.era}
                  </span>
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${pillar.badge}`}>
                    {pillar.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="font-mono text-[11px] text-[#FF5500] font-semibold pt-4 border-t border-slate-100">
                ScaleOnIt Operating Architecture
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement Quote */}
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto text-center space-y-4 shadow-sm">
          <p className="text-base sm:text-lg text-slate-800 italic font-medium leading-relaxed">
            &quot;ScaleOnIt is not building another point tool or a generic all-in-one suite. We are building the operating environment where modern businesses operate with clarity, connection, and governed intelligence.&quot;
          </p>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500]">
            ScaleOnIt Operating Philosophy
          </div>
        </div>
      </div>
    </section>
  )
}
