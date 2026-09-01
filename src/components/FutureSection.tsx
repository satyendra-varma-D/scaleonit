const elements = [
  { label: 'PEOPLE', color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200' },
  { label: 'PROCESS', color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200' },
  { label: 'DATA', color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200' },
  { label: 'SYSTEMS', color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
  { label: 'AI', color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200' },
]

export default function FutureSection() {
  return (
    <section id="future" className="py-32 bg-midnight overflow-hidden relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-8 border border-white/8 px-4 py-2 rounded-full">
          The Future
        </div>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
          The future of software delivery<br />isn&apos;t more tools.
        </h2>
        <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-400 leading-tight mb-16">
          It&apos;s connected intelligence.
        </h3>

        {/* Elements combining into ONIT */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {elements.map((el, i) => (
              <div key={el.label} className="flex items-center gap-3">
                <div className={`px-4 py-2 rounded-xl border-2 ${el.border} ${el.bg} ${el.color} text-sm font-extrabold uppercase tracking-wider`}>
                  {el.label}
                </div>
                {i < elements.length - 1 && (
                  <span className="text-slate-700 font-bold text-xl">+</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" aria-hidden="true">
              <path d="M10 0v24M2 18l8 8 8-8" stroke="rgba(37,99,235,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="relative">
            <div className="w-32 h-16 rounded-2xl bg-onit flex items-center justify-center shadow-2xl shadow-onit/40">
              <span className="text-white font-extrabold text-2xl tracking-tight">ONIT</span>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-onit/20 animate-ping" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" aria-hidden="true">
              <path d="M10 0v24M2 18l8 8 8-8" stroke="rgba(16,185,129,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="px-8 py-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/8">
            <span className="text-emerald-400 font-extrabold text-lg uppercase tracking-widest">CONTINUOUS EXECUTION</span>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-lg text-slate-400 leading-relaxed">
            Organizations that connect their people, process, data, systems, and AI into one coherent operating platform will not just deliver software faster. They will operate an entirely different kind of software business.
          </p>
        </div>
      </div>
    </section>
  )
}
