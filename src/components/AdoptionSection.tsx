const paths = [
  {
    num: '01',
    title: 'USE ONIT',
    sub: 'Start with one capability',
    desc: 'Adopt a single ONIT module where you need it most. DISCOVER for better requirements. DELIVER for project visibility. SERVE for smarter support. Each capability delivers value independently.',
    cta: 'Explore modules',
    color: 'text-onit',
    bg: 'bg-onit-light',
    border: 'border-blue-200',
    accent: 'bg-onit',
    examples: ['DISCOVER for requirements', 'DELIVER for projects', 'SERVE for support', 'Any single module'],
  },
  {
    num: '02',
    title: 'CONNECT ONIT',
    sub: 'Keep existing systems. Add connected intelligence.',
    desc: 'Keep the tools your team already uses. Connect them through ONIT to share context, enable AI workflows, and remove the friction between systems — without replacing anything you want to keep.',
    cta: 'Explore ONIT Connect',
    color: 'text-data-cyan',
    bg: 'bg-cyan-light',
    border: 'border-cyan-200',
    accent: 'bg-data-cyan',
    examples: ['Jira + ONIT DELIVER', 'GitHub + ONIT ENGINEER', 'Salesforce + ONIT GROW', 'Slack + ONIT workflows'],
  },
  {
    num: '03',
    title: 'OPERATE ON ONIT',
    sub: 'One platform for the full business',
    desc: 'Use ONIT as the complete operating platform for your software delivery organization — from business development through engineering, quality, delivery, support, people, and finance.',
    cta: 'See the full platform',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: 'bg-emerald-500',
    examples: ['Full SDLC coverage', 'AI workforce active', 'Connected intelligence', 'One operating context'],
  },
]

export default function AdoptionSection() {
  return (
    <section id="adoption" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
            Adoption
          </div>
          <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-tight tracking-tight mb-4">
            Start small.<br />Connect everything.<br />Operate your way.
          </h2>
          <p className="text-base text-mid-text max-w-lg mx-auto">
            Use one thing. Use many. Use everything. ONIT is designed to grow with your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {paths.map((path, i) => (
            <div key={path.num} className={`rounded-2xl border-2 ${path.border} p-6 relative overflow-hidden`}>
              {/* Large number watermark */}
              <div className={`absolute top-4 right-4 text-6xl font-black ${path.color} opacity-8 select-none pointer-events-none`}>
                {path.num}
              </div>

              <div className={`w-10 h-10 rounded-xl ${path.accent} flex items-center justify-center text-white font-black text-sm mb-5`}>
                {path.num}
              </div>

              <h3 className={`text-base font-extrabold uppercase tracking-wider ${path.color} mb-1`}>
                {path.title}
              </h3>
              <div className="text-xs font-semibold text-mid-text mb-4">{path.sub}</div>
              <p className="text-sm text-mid-text leading-relaxed mb-5">{path.desc}</p>

              <div className="space-y-2 mb-6">
                {path.examples.map((ex) => (
                  <div key={ex} className={`flex items-center gap-2 text-xs ${path.color} font-medium`}>
                    <div className={`w-1 h-1 rounded-full ${path.accent}`} />
                    {ex}
                  </div>
                ))}
              </div>

              <a
                href="#"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${path.color} hover:underline transition-all`}
              >
                {path.cta}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M8 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Progression arrow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mt-10 sm:mt-12 text-mid-text">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-onit">START</span>
          <svg className="w-6 sm:w-14" height="12" viewBox="0 0 60 12" fill="none" aria-hidden="true">
            <path d="M0 6h52M48 2l8 4-8 4" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-data-cyan">CONNECT</span>
          <svg className="w-6 sm:w-14" height="12" viewBox="0 0 60 12" fill="none" aria-hidden="true">
            <path d="M0 6h52M48 2l8 4-8 4" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600">OPERATE</span>
        </div>
      </div>
    </section>
  )
}

