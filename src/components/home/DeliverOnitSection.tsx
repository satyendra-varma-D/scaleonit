interface DeliverOnitSectionProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverOnitSection({ onNavigate }: DeliverOnitSectionProps) {
  const onitStages = [
    { step: '01', name: 'PROMPT / UPLOAD', desc: 'Ingest user prompts or raw requirements docs with industry templates' },
    { step: '02', name: 'BRD & FRD GATES', desc: 'Synthesize standard BRD & FRD with dual PM/BA & Client sign-off' },
    { step: '03', name: 'VS CODE AGENTS', desc: 'Develop UI & UX using local Ollama models specialized by tech stack' },
    { step: '04', name: 'STAGING ITERATION', desc: 'Deploy preview environment for instant customer feedback loops' },
    { step: '05', name: 'CLOUD & PLAYWRIGHT', desc: 'Connect cloud DB, CI/CD, generate & run automated Playwright suites' },
    { step: '06', name: 'GOVERNED RELEASE', desc: 'Zero-defect delivery and final verified production rollout' },
  ]

  return (
    <section
      id="deliver-onit"
      aria-label="Starting with DELIVER — Flagship Product ONIT"
      className="py-24 bg-[#FAFAFC] text-[#1B0A2A] border-y border-[#EAE6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-[#C53678] to-[#FF5841] px-4 py-1.5 rounded-full mb-6 shadow-sm shadow-[#C53678]/20">
            Current Available Flagship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            Every ecosystem starts somewhere.{' '}
            <span className="text-[#C53678] block mt-1">
              Ours starts with DELIVER.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt is introducing <strong className="text-[#1B0A2A] font-bold">ONIT</strong> as our first major commercial operating product — focused on turning ideas, architecture, and requirements into working software.
          </p>
        </div>

        {/* ONIT Spotlight Showcase Box */}
        <div className="rounded-3xl bg-white border border-[#EAE6F0] p-8 sm:p-12 shadow-[0_20px_50px_rgba(27,10,42,0.06)] max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#EAE6F0]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl font-black tracking-tight text-[#1B0A2A] flex items-center">
                  <span>ON</span>
                  <span className="text-[#FF5841]">IT</span>
                </div>
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[#FDF2F7] text-[#C53678] border border-[#C53678]/30">
                  Powering DELIVER
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B0A2A]">
                The Software Delivery Operating System
              </h3>
            </div>

            <button
              onClick={() => onNavigate('/platform/deliver')}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C53678] to-[#FF5841] hover:opacity-95 text-white font-bold text-sm transition-all shadow-md shadow-[#C53678]/25 cursor-pointer flex items-center gap-2 shrink-0"
            >
              <span>Explore ONIT Dedicated Page</span>
              <span>→</span>
            </button>
          </div>

          {/* High-Level ONIT Journey Pipeline */}
          <div className="py-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#5A4E68] mb-6 text-center">
              The Complete Idea-to-Production SDLC Journey
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {onitStages.map((stage) => (
                <div
                  key={stage.step}
                  className="p-4 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] hover:border-[#C53678]/40 hover:bg-white hover:shadow-2xs transition-all"
                >
                  <div className="text-xs font-mono font-bold text-[#FF5841] mb-1">
                    {stage.step}
                  </div>
                  <div className="text-sm font-black text-[#1B0A2A] mb-1">
                    {stage.name}
                  </div>
                  <div className="text-[11px] text-[#5A4E68] leading-snug">
                    {stage.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Note & CTA guidance */}
          <div className="p-5 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A4E68]">
            <div>
              <span className="text-[#1B0A2A] font-bold">Need deeper technical specifications?</span>{' '}
              Detailed agent workflows, requirement questionnaires, CI/CD gates, and PRD-to-code pipelines live on the dedicated ONIT page.
            </div>
            <button
              onClick={() => onNavigate('/platform')}
              className="text-xs font-bold text-[#C53678] hover:underline shrink-0 cursor-pointer"
            >
              View Full Platform Hub →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
