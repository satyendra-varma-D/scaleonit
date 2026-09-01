interface CTASectionProps {
  onNavigateToTalkToUs?: () => void
}

export default function CTASection({ onNavigateToTalkToUs }: CTASectionProps) {
  const handleTalkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onNavigateToTalkToUs) {
      onNavigateToTalkToUs()
    } else {
      window.location.hash = '#talk-to-us'
    }
  }

  return (
    <section id="cta" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* ON toggle visual */}
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="h-px w-16 bg-border-base" />
          <div className="flex items-center gap-2">
            <div className="w-10 h-5 bg-onit rounded-full flex items-center justify-end pr-1 shadow-inner">
              <div className="w-3.5 h-3.5 rounded-full bg-white shadow-sm" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-onit">ON</span>
          </div>
          <div className="h-px w-16 bg-border-base" />
        </div>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-midnight leading-[1.04] tracking-tight mb-6">
          How much of your IT operation<br />do you want to turn on?
        </h2>

        <p className="text-lg text-mid-text leading-relaxed mb-12 max-w-2xl mx-auto">
          ONIT connects the people, processes, systems, data and AI that keep your software business moving. Start with one capability. Scale to the complete operating platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={handleTalkClick}
            className="inline-flex items-center justify-center gap-2 bg-onit text-white font-semibold px-8 py-4 rounded-xl hover:bg-onit-hover transition-all duration-150 hover:shadow-xl hover:shadow-onit/25 text-base cursor-pointer"
          >
            Explore ONIT
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleTalkClick}
            className="inline-flex items-center justify-center gap-2 text-midnight font-semibold px-8 py-4 rounded-xl border-2 border-border-base hover:border-slate-300 hover:bg-pearl transition-all duration-150 text-base cursor-pointer"
          >
            Talk to Us
          </button>
        </div>

        {/* For technical teams */}
        <div className="pt-10 border-t border-border-base">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-mid-text mb-3">For Technical Teams</div>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 text-sm font-semibold text-onit hover:text-onit-hover transition-colors"
          >
            Explore the ONIT Architecture in depth
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

