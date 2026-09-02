export default function EcosystemPhilosophy() {
  const comparison = [
    {
      aspect: 'Architecture Approach',
      traditional: 'Monolithic ERP / Bloated "All-in-One" Dashboard that does everything poorly',
      scaleonit: 'Six Purpose-Built Systems, each engineered specifically for its operational domain',
    },
    {
      aspect: 'Information & Context',
      traditional: 'Siloed data repositories requiring manual export, import, and sync pipelines',
      scaleonit: 'Shared Operating Context — upstream intent directly flows into downstream execution',
    },
    {
      aspect: 'Intelligence & Automation',
      traditional: 'Generic chatbot overlays pasted onto forms without domain workflow context',
      scaleonit: 'Specialized Domain Intelligence embedded directly into the work of each system',
    },
    {
      aspect: 'Operational Agility',
      traditional: 'Rigid vendor lock-in that forces your entire company into unnatural workflows',
      scaleonit: 'Modular adoption — start where you need, connected to your existing infrastructure',
    },
  ]

  return (
    <section
      id="philosophy"
      aria-label="The ScaleOnIt Idea — Purpose-Built Systems in One Ecosystem"
      className="py-24 bg-white text-[#1B0A2A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-4 py-1.5 rounded-full mb-6">
            The ScaleOnIt Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            Different problems need different systems.{' '}
            <span className="text-[#FF5841] block mt-1">
              Six systems. Six purposes. One ecosystem.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt is not trying to build one giant generic SaaS tool. We are building purpose-specific systems that help businesses operate with precision across every stage of their lifecycle.
          </p>
        </div>

        {/* 6 Core Pillars Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {[
            { name: 'GROW', purpose: 'Solves Acquisition', color: 'border-[#FF5841]/30 text-[#FF5841] bg-[#FFF4F2]/50' },
            { name: 'DISCOVER', purpose: 'Solves Requirements', color: 'border-[#C53678]/30 text-[#C53678] bg-[#FDF2F7]/50' },
            { name: 'DELIVER', purpose: 'Solves Delivery (ONIT)', color: 'border-[#C53678] text-[#C53678] bg-[#FDF2F7] ring-1 ring-[#C53678]/20 shadow-xs' },
            { name: 'PEOPLE', purpose: 'Solves Workforce', color: 'border-[#3B1A54]/30 text-[#3B1A54] bg-[#F5F3F8]/50' },
            { name: 'MONEY', purpose: 'Solves Financials', color: 'border-[#FF5841]/30 text-[#FF5841] bg-[#FFF4F2]/50' },
            { name: 'SERVE', purpose: 'Solves Success', color: 'border-[#C53678]/30 text-[#C53678] bg-[#FDF2F7]/50' },
          ].map((pillar) => (
            <div
              key={pillar.name}
              className={`p-5 rounded-2xl border text-center transition-transform hover:-translate-y-0.5 ${pillar.color}`}
            >
              <div className="font-black text-base mb-1">{pillar.name}</div>
              <div className="text-[11px] text-[#5A4E68] font-semibold">{pillar.purpose}</div>
            </div>
          ))}
        </div>

        {/* Strategic Comparison: Traditional vs ScaleOnIt Operating Ecosystem */}
        <div className="rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] p-6 sm:p-10 shadow-[0_10px_40px_rgba(27,10,42,0.03)]">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B0A2A] mb-2">
              The Evolution of Enterprise Business Software
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4E68]">
              Why monolithic ERPs and disconnected point tools fail modern business needs
            </p>
          </div>

          <div className="space-y-4">
            {comparison.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE6F0] hover:shadow-xs transition-shadow"
              >
                <div className="md:col-span-3 text-xs font-bold uppercase tracking-wider text-[#1B0A2A] flex items-center">
                  {item.aspect}
                </div>
                <div className="md:col-span-4 text-xs text-[#5A4E68] bg-[#FAFAFC] p-3.5 rounded-xl border border-[#EAE6F0] flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>{item.traditional}</span>
                </div>
                <div className="md:col-span-5 text-xs font-medium text-[#1B0A2A] bg-[#FDF2F7] p-3.5 rounded-xl border border-[#C53678]/30 flex items-start gap-2.5 shadow-2xs">
                  <span className="text-[#C53678] font-extrabold">✓</span>
                  <span>{item.scaleonit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
