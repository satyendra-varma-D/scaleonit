import { connectionBenefits } from '../../data/ecosystem'

export default function RoleBenefitsSection() {
  return (
    <section
      id="how-it-helps"
      aria-label="Why the Ecosystem Matters"
      className="py-20 bg-transparent text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            WHY THE ECOSYSTEM MATTERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            The value is in the connection.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Most businesses already use software for sales, projects, people, finance and customer service. The problem is that these systems often work separately. ScaleOnIt connects these parts so information can move with the work.
          </p>
        </div>

        {/* 4 Simple Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {connectionBenefits.map((b) => (
            <div
              key={b.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#FF5500] hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block" aria-hidden="true">{b.icon}</span>
                <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 font-mono text-[11px] font-bold text-[#FF5500]">
                ✓ Connected Benefit
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

