import InteractiveEcosystemFlow from './InteractiveEcosystemFlow'

interface MasterHeroProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function MasterHero({ onNavigate }: MasterHeroProps) {
  return (
    <section
      id="hero"
      aria-label="ScaleOnIt — Connected Business Platform for IT & Software Services"
      className="relative pt-32 pb-20 flex items-center bg-transparent text-slate-900 overflow-hidden"
    >
      {/* Subtle light background grid */}
      <div className="absolute inset-0 light-grid-canvas opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-4xl mx-auto mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span>CONNECTED BUSINESS PLATFORM FOR IT &amp; SOFTWARE SERVICES</span>
          </div>

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Run your IT business from <br className="hidden sm:inline" />
            <span className="text-[#FF5500]">one connected platform.</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6 max-w-3xl mx-auto">
            ScaleOnIt connects the work across your business — from finding customers and understanding their needs to delivering software, managing people, handling finances and supporting customers.
          </p>

          {/* Short highlighted statement */}
          <div className="inline-block font-mono text-sm sm:text-base font-bold text-slate-900 bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-lg mb-8 shadow-[2px_2px_0px_0px_#0F172A]">
            Six systems. One connected business.
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/', '#six-systems')}
              className="px-7 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#0F172A] hover:shadow-[4px_4px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 cursor-pointer flex items-center gap-2"
            >
              <span>Explore the Ecosystem</span>
              <span className="font-sans text-sm">↓</span>
            </button>
            <button
              onClick={() => onNavigate('/', '#ecosystem-flow')}
              className="px-7 py-3.5 rounded-lg bg-white/95 hover:bg-white text-slate-900 hover:text-[#FF5500] font-mono font-semibold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#FF5500] shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 cursor-pointer flex items-center gap-2"
            >
              <span>See How It Works</span>
              <span className="font-sans text-sm">→</span>
            </button>
          </div>
        </div>

        {/* Master Live Interactive Ecosystem Flow & Artifact Simulation */}
        <div className="max-w-6xl mx-auto">
          <InteractiveEcosystemFlow />
        </div>
      </div>
    </section>
  )
}

