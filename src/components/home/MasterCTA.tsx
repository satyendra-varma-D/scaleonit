interface MasterCTAProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function MasterCTA({ onNavigate }: MasterCTAProps) {
  return (
    <section
      id="cta"
      aria-label="Build the Future of How Your Business Operates"
      className="py-24 bg-[#FAFAFC] text-[#1B0A2A] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="rounded-3xl bg-white border border-[#EAE6F0] p-8 sm:p-14 shadow-[0_20px_60px_rgba(27,10,42,0.06)] space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-4 py-1.5 rounded-full">
            <span>The Connected Operating Era</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight max-w-3xl mx-auto">
            Build the future of how{' '}
            <span className="text-[#C53678]">
              your business operates.
            </span>
          </h2>

          {/* Plain English Subtitle */}
          <p className="text-sm sm:text-base text-[#5A4E68] max-w-xl mx-auto leading-relaxed">
            Whether you are exploring the broader ScaleOnIt ecosystem or ready to transform software delivery with ONIT, we invite you to experience connected operations.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/demo')}
              className="px-8 py-4 rounded-full bg-[#C53678] hover:bg-[#A92661] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#C53678]/25 hover:shadow-xl hover:shadow-[#C53678]/35 cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore ScaleOnIt Ecosystem</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
            <button
              onClick={() => onNavigate('/platform/deliver')}
              className="px-8 py-4 rounded-full bg-[#FFF4F2] hover:bg-[#FFE8E4] text-[#FF5841] font-bold text-sm border border-[#FF5841]/30 transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5841]" />
              <span>Explore Flagship: ONIT</span>
            </button>
          </div>

          {/* Bottom assurance notes */}
          <div className="pt-6 border-t border-[#EAE6F0] flex flex-wrap items-center justify-center gap-6 text-xs text-[#5A4E68] font-medium">
            <span className="flex items-center gap-1.5">
              <span className="text-[#C53678] font-black">✓</span> Six Purpose-Built Systems
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#C53678] font-black">✓</span> Shared Context Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#C53678] font-black">✓</span> Enterprise-Grade Governance
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
