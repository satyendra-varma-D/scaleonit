interface MasterCTAProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function MasterCTA({ onNavigate }: MasterCTAProps) {
  return (
    <section
      id="cta"
      aria-label="Bring your business together"
      className="py-20 bg-transparent text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-14 shadow-2xl space-y-6 relative overflow-hidden ring-1 ring-orange-500/20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-md">
            <span>GET STARTED</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Bring your business together.
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Start with software delivery today. <br />
            Build toward a connected business ecosystem.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/', '#six-systems')}
              className="px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
            >
              Explore the Ecosystem
            </button>
            <button
              onClick={() => onNavigate('/demo')}
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-colors cursor-pointer"
            >
              Talk to Us
            </button>
          </div>

          {/* Bottom simple assurance points */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
            <span>✓ Six Connected Systems</span>
            <span>✓ DELIVER Powered by ONIT</span>
            <span>✓ Built for IT &amp; Software Services</span>
          </div>
        </div>
      </div>
    </section>
  )
}
