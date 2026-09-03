interface DeliverOnitSectionProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverOnitSection({ onNavigate }: DeliverOnitSectionProps) {
  const onitStages = [
    { step: '01', name: 'INTAKE & PARSING', desc: 'Ingest raw spec PDFs & requirement matrices mapped to domain schema' },
    { step: '02', name: 'BRD & FRD GATES', desc: 'Synthesize governed BRD & FRD with dual PM/BA & Client sign-off' },
    { step: '03', name: 'MULTI-AGENT BUILD', desc: 'Autonomous UI/UX & full-stack engineering with specialized agent models' },
    { step: '04', name: 'STAGING ITERATION', desc: 'Instant interactive preview environments for rapid stakeholder feedback' },
    { step: '05', name: 'AUTOMATED QA', desc: 'Connect cloud infrastructure & execute end-to-end regression test suites' },
    { step: '06', name: 'GOVERNED RELEASE', desc: 'Zero-defect audited rollout and seamless production delivery' },
  ]

  const enterpriseLogos = [
    { name: 'GitHub', icon: '🐙' },
    { name: 'Jira', icon: '📋' },
    { name: 'AWS Cloud', icon: '☁️' },
    { name: 'Azure VPC', icon: '⚡' },
    { name: 'Playwright', icon: '🎭' },
    { name: 'Docker / K8s', icon: '📦' },
  ]

  return (
    <section
      id="deliver-onit"
      aria-label="Starting with DELIVER — Flagship Product ONIT"
      className="py-24 bg-transparent text-slate-900 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-white bg-[#FF5500] px-3.5 py-1.5 rounded-md shadow-xs mb-6">
            AVAILABLE FLAGSHIP ENGINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Every ecosystem starts somewhere.{' '}
            <span className="text-[#FF5500] block mt-1">
              Ours starts with DELIVER.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt is introducing <strong className="text-slate-900 font-bold">ONIT</strong> as our first commercial operating engine — focused on turning ideas, architecture, and requirements into working software.
          </p>
        </div>

        {/* ONIT Spotlight Showcase Box with Embedded IDE Preview (Hard Shadow) */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-[4px_4px_0px_0px_#0F172A] max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
                  <span>ON</span>
                  <span className="text-[#FF5500]">IT</span>
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded bg-orange-50 text-[#FF5500] border border-orange-200">
                  Powering DELIVER
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                The Software Delivery Operating System
              </h3>
            </div>

            <button
              onClick={() => onNavigate('/platform/deliver')}
              className="relative overflow-hidden px-6 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-2 shrink-0 before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
            >
              <span className="relative z-10">EXPLORE ONIT DEDICATED SPEC</span>
              <span className="relative z-10">→</span>
            </button>
          </div>

          {/* Embedded Visual Product Mockup (Video / Visual Container) */}
          <div className="my-8 rounded-2xl bg-[#0D1117] border border-slate-800 p-6 shadow-2xl text-white font-mono text-xs relative overflow-hidden">
            <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-[#FF5500]/15 to-transparent pointer-events-none animate-scan" />
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5500]" />
                </span>
                <span className="text-white font-bold">ONIT SDLC Engine · Swarm Autonomous IDE</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                ✓ 100% QUALITY GATE SATISFIED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-3">
              <div className="md:col-span-8 bg-[#05080C] p-4 rounded-xl border border-slate-850 space-y-1.5 text-[11px] leading-relaxed text-slate-300">
                <div className="text-slate-500">// Generated from locked requirement spec: REQ-2026-884</div>
                <div><span className="text-purple-400">export default async function</span> <span className="text-blue-400">onitEngineExecution</span>() &#123;</div>
                <div className="pl-4 text-emerald-400 bg-emerald-500/10 py-0.5 px-1 rounded">+ const brd = await synthesizeTriPartyConsensus();</div>
                <div className="pl-4 text-emerald-400 bg-emerald-500/10 py-0.5 px-1 rounded">+ const uiReact19 = await agentSwarm.synthesizeComponents(brd.views);</div>
                <div className="pl-4 text-emerald-400 bg-emerald-500/10 py-0.5 px-1 rounded">+ const playwrightReport = await runHeadlessRegression(48);</div>
                <div className="pl-4 text-purple-400">return await cloudCluster.deployToStaging(uiReact19, playwrightReport);</div>
                <div>&#125;</div>
              </div>

              <div className="md:col-span-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-2 text-[11px]">
                <div className="font-bold text-slate-200">Execution Metrics</div>
                <div className="space-y-1.5 text-slate-400">
                  <div className="flex justify-between"><span>Modules:</span> <strong className="text-white">14 Generated</strong></div>
                  <div className="flex justify-between"><span>E2E Tests:</span> <strong className="text-emerald-400">48/48 Passed</strong></div>
                  <div className="flex justify-between"><span>Type Safety:</span> <strong className="text-white">100% Strict</strong></div>
                </div>
                <div className="p-2 rounded bg-orange-500/10 text-orange-400 border border-orange-500/30 text-[10px] text-center font-bold">
                  Zero Technical Debt Detected
                </div>
              </div>
            </div>
          </div>

          {/* High-Level ONIT Journey Pipeline */}
          <div className="py-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
              The Complete Idea-to-Production SDLC Journey
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {onitStages.map((stage) => (
                <div
                  key={stage.step}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FF5500] hover:bg-white hover:shadow-xs transition-all group"
                >
                  <div className="font-mono text-xs font-bold text-[#FF5500] mb-1">
                    {stage.step}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mb-1.5 leading-snug">
                    {stage.name}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-snug">
                    {stage.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Tool Integrations Logo Grid */}
          <div className="pt-8 border-t border-slate-200">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
              Seamlessly Integrates with Your Enterprise Toolchain
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {enterpriseLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-[#FF5500] hover:border-[#FF5500] hover:bg-white transition-all cursor-default shadow-2xs"
                >
                  <span>{logo.icon}</span>
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
