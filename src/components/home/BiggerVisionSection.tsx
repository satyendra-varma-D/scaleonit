export default function BiggerVisionSection() {
  const roadmapPillars = [
    {
      era: 'Phase 1 · AVAILABLE TODAY',
      title: 'DELIVER (Powered by ONIT)',
      desc: 'The foundational software delivery operating system turning requirements into tested code and safe releases.',
      status: 'Available & Active',
      color: 'border-[#C53678] bg-white ring-1 ring-[#C53678]/20 shadow-md',
      badge: 'text-white bg-[#C53678]',
    },
    {
      era: 'Phase 2 · NEXT EXPANSION',
      title: 'DISCOVER & SERVE',
      desc: 'Deepening upstream discovery, requirements intelligence, and closing the post-launch customer support loop.',
      status: 'Building Toward',
      color: 'border-[#EAE6F0] bg-white',
      badge: 'text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30',
    },
    {
      era: 'Phase 3 · ECOSYSTEM COMPLETION',
      title: 'GROW, PEOPLE & MONEY',
      desc: 'Connecting sales pipeline, workforce allocation, and real-time project profitability into one unified business operating ecosystem.',
      status: 'ScaleOnIt Long-Term Vision',
      color: 'border-[#EAE6F0] bg-white',
      badge: 'text-[#FF5841] bg-[#FFF4F2] border border-[#FF5841]/30',
    },
  ]

  return (
    <section
      id="vision"
      aria-label="The Bigger ScaleOnIt Vision — Building the Operating Ecosystem"
      className="py-24 bg-white text-[#1B0A2A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#3B1A54] bg-[#F5F3F8] border border-[#3B1A54]/30 px-4 py-1.5 rounded-full mb-6">
            The Long-Term Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            One system is useful.{' '}
            <span className="text-[#FF5841] block mt-1">
              An ecosystem changes how a business operates.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt is building this future one system at a time. We are committed to transparency, enterprise credibility, and rigorous architectural excellence.
          </p>
        </div>

        {/* 3-Phase Horizon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {roadmapPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border ${pillar.color} space-y-4 flex flex-col justify-between hover:shadow-sm transition-shadow`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A4E68]">
                    {pillar.era}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${pillar.badge}`}>
                    {pillar.status}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1B0A2A]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4E68] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="text-[11px] font-mono text-[#5A4E68] font-medium pt-4 border-t border-[#EAE6F0]">
                ScaleOnIt Operating Architecture
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement Quote */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#FDF2F7] via-[#FFF4F2] to-[#F5F3F8] border border-[#EAE6F0] max-w-4xl mx-auto text-center space-y-4 shadow-sm">
          <p className="text-base sm:text-lg text-[#1B0A2A] italic font-medium leading-relaxed">
            &quot;ScaleOnIt is not building another point tool or a generic all-in-one suite. We are building the operating environment where modern businesses operate with clarity, connection, and governed intelligence.&quot;
          </p>
          <div className="text-xs font-black uppercase tracking-widest text-[#C53678]">
            ScaleOnIt Operating Philosophy
          </div>
        </div>
      </div>
    </section>
  )
}
