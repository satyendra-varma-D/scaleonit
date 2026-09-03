interface DeliverOnitSectionProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverOnitSection({ onNavigate }: DeliverOnitSectionProps) {
  const steps = [
    {
      num: '01',
      name: 'Understand',
      desc: 'Bring in requirements, documents and customer information.',
    },
    {
      num: '02',
      name: 'Plan',
      desc: 'Turn requirements into a clear software plan.',
    },
    {
      num: '03',
      name: 'Build',
      desc: 'Create the application with AI-assisted development.',
    },
    {
      num: '04',
      name: 'Test',
      desc: 'Test the software before release.',
    },
    {
      num: '05',
      name: 'Release',
      desc: 'Deploy the finished software.',
    },
  ]

  const integrations = [
    { name: 'GitHub', icon: '🐙' },
    { name: 'Jira', icon: '📋' },
    { name: 'AWS Cloud', icon: '☁️' },
    { name: 'Azure', icon: '⚡' },
    { name: 'Playwright', icon: '🎭' },
    { name: 'Docker', icon: '📦' },
  ]

  return (
    <section
      id="deliver-onit"
      aria-label="Starting with DELIVER — Powered by ONIT"
      className="py-20 bg-transparent text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            AVAILABLE TODAY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Start with software delivery.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-3">
            Our first available system is <strong className="text-slate-900">DELIVER</strong>, powered by <strong className="text-[#FF5500]">ONIT</strong>.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            DELIVER helps software and IT service teams move from customer requirements to working software.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#FF5500] transition-colors"
              >
                <div className="font-mono text-xs font-black text-[#FF5500] mb-2">
                  Step {step.num}
                </div>
                <div className="font-extrabold text-lg text-slate-900 mb-1">
                  {step.name}
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliver Showcase & Callout Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 max-w-5xl mx-auto shadow-[3px_3px_0px_0px_#0F172A]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold uppercase text-[#FF5500]">
                  System: DELIVER
                </span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-xs text-slate-600">
                  Powered by ONIT
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                From customer requirements to working software.
              </h3>
            </div>

            <button
              onClick={() => onNavigate('/platform/deliver')}
              className="px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-2xs transition-colors cursor-pointer shrink-0"
            >
              Explore DELIVER →
            </button>
          </div>

          {/* Simple Code/UI Mockup demonstrating the 5 steps */}
          <div className="my-6 p-5 rounded-xl bg-[#0D1117] text-white font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 text-[11px]">
              <span>DELIVER Engine Pipeline · Powered by ONIT</span>
              <span className="text-emerald-400 font-bold">✓ Ready</span>
            </div>
            <div className="space-y-1 text-slate-300 text-[11px] leading-relaxed">
              <div><span className="text-slate-500">1. Understand:</span> Ingested requirement doc (48 requirements verified)</div>
              <div><span className="text-slate-500">2. Plan:</span> Software specification generated &amp; approved</div>
              <div><span className="text-emerald-400">3. Build:</span> React frontend &amp; Node backend created with AI assistance</div>
              <div><span className="text-emerald-400">4. Test:</span> Automated regression tests passed (0 errors)</div>
              <div><span className="text-purple-400">5. Release:</span> Ready to deploy to cloud staging</div>
            </div>
          </div>

          {/* Tool integrations */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500">
            <span>Connects with your team&apos;s existing tools:</span>
            <div className="flex flex-wrap items-center gap-3">
              {integrations.map((item) => (
                <span
                  key={item.name}
                  className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium inline-flex items-center gap-1.5"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

