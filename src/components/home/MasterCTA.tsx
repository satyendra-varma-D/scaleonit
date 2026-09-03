interface MasterCTAProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function MasterCTA({ onNavigate }: MasterCTAProps) {
  return (
    <section
      id="cta"
      aria-label="Build the Future of How Your Business Operates"
      className="py-24 bg-white text-slate-900 relative overflow-hidden"
    >
      {/* Background Ambience & Gradient Photo Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-14 shadow-2xl relative overflow-hidden space-y-8">
          {/* Subtle Laser Scan Effect */}
          <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#FF5500]/10 to-transparent pointer-events-none animate-scan" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
            <span>THE CONNECTED OPERATING ERA</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Build the future of how{' '}
            <span className="text-[#FF5500]">
              your business operates.
            </span>
          </h2>

          {/* Plain English Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you are exploring the broader ScaleOnIt ecosystem or ready to transform software delivery with ONIT, we invite you to experience connected operations.
          </p>

          {/* Dual CTAs with Shimmer & Hard-Shadow Effects */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={() => onNavigate('/demo')}
              className="relative overflow-hidden px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-semibold font-mono text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 cursor-pointer flex items-center gap-2 group before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
            >
              <span className="relative z-10">EXPLORE ECOSYSTEM</span>
              <span className="relative z-10 group-hover:translate-x-0.5 transition-transform font-sans text-sm">→</span>
            </button>
            <button
              onClick={() => onNavigate('/platform/deliver')}
              className="px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-mono font-medium text-xs uppercase tracking-wider border border-slate-700 hover:border-[#FF5500] shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all duration-150 cursor-pointer flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              <span>EXPLORE FLAGSHIP: ONIT</span>
            </button>
          </div>

          {/* Bottom Assurance Notes */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="text-[#FF5500] font-bold">✓</span> Six Purpose-Built Systems
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#FF5500] font-bold">✓</span> Shared Context Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#FF5500] font-bold">✓</span> Enterprise-Grade Governance
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
