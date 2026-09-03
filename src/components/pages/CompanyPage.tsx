interface CompanyPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function CompanyPage({ onNavigate }: CompanyPageProps) {
  const sixSystems = [
    { name: 'GROW', job: 'Find and manage new business opportunities.', icon: '🌱' },
    { name: 'DISCOVER', job: 'Understand customer needs and define requirements.', icon: '🔍' },
    { name: 'DELIVER', job: 'Build, test and release software.', icon: '⚡', highlight: true },
    { name: 'PEOPLE', job: 'Manage teams and workforce needs.', icon: '👥' },
    { name: 'FINANCIALS', job: 'Manage billing, payments and project finances.', icon: '📊' },
    { name: 'SERVE', job: 'Manage customers and ongoing relationships.', icon: '🛡️' },
  ]

  const beliefs = [
    {
      num: '01',
      title: 'Build before you boast.',
      desc: 'A working product is worth more than a big promise.',
    },
    {
      num: '02',
      title: 'Keep technology useful.',
      desc: 'Technology should make work simpler, not more complicated.',
    },
    {
      num: '03',
      title: 'Stay curious.',
      desc: 'The best products come from asking better questions.',
    },
    {
      num: '04',
      title: 'Think long term.',
      desc: 'We are building an ecosystem, not just another tool.',
    },
    {
      num: '05',
      title: 'Earn trust.',
      desc: 'Be honest about what works today and what is still being built.',
    },
    {
      num: '06',
      title: 'Keep moving.',
      desc: 'There will always be another problem worth solving.',
    },
  ]

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]">
      {/* ==================================================
          SECTION 1 — HERO
          ================================================== */}
      <section className="relative overflow-hidden bg-transparent border-b border-slate-200/80 py-16 sm:py-24">
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
              WHY WE BUILD
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              We are here to build what we believe should exist.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
              We are a team of engineers and product builders working on a simple idea: IT and software service businesses should not have to run on disconnected tools and repetitive work. We want to build a better way.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => {
                  const el = document.getElementById('what-we-build')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                SEE WHAT WE ARE BUILDING
              </button>
              <button
                onClick={() => onNavigate('/')}
                className="border border-slate-200 bg-white text-slate-800 font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg hover:bg-slate-50 hover:border-[#FF5500] hover:text-slate-900 transition-all cursor-pointer shadow-xs"
              >
                EXPLORE SCALEONIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — OUR BELIEF
          ================================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-[3px_3px_0px_0px_#0F172A]">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              OUR BELIEF
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              We don&apos;t want to watch the future happen. We want to build it.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
              <p>Technology is moving quickly.</p>
              <p>
                But the way many businesses work has not changed at the same speed. Teams still spend too much time moving information between tools, repeating the same work and managing processes that should be simpler.
              </p>
              <p>
                We believe software can do more. And we believe the best way to prove that is to build something real.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 border border-orange-200 flex flex-wrap items-center justify-around gap-4 text-center font-mono text-sm sm:text-base font-extrabold text-slate-900">
              <span>Less talking.</span>
              <span className="text-[#FF5500]">→</span>
              <span>More building.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — THE PROBLEM WE SEE
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              THE PROBLEM WE SEE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              The work is changing. The systems should change too.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              IT service businesses do a lot of important work:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 max-w-5xl mx-auto mb-8 font-mono text-xs text-center">
            {[
              'Find customers',
              'Understand requirements',
              'Plan projects',
              'Build software',
              'Manage teams',
              'Handle finances',
              'Support customers',
            ].map((item) => (
              <div
                key={item}
                className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs font-bold text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 text-center max-w-2xl mx-auto space-y-2">
            <p className="text-sm text-slate-600">
              But these activities often live in separate systems. That creates gaps between people, teams and information.
            </p>
            <p className="text-sm font-bold text-slate-900 font-mono">
              We are building ScaleOnIt to connect those parts.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — WHAT WE ARE BUILDING
          ================================================== */}
      <section
        id="what-we-build"
        className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              WHAT WE ARE BUILDING
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              One ecosystem for the way IT businesses actually work.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              ScaleOnIt is a connected business platform for IT and software service companies. It brings six parts of the business together:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {sixSystems.map((sys) => (
              <div
                key={sys.name}
                className={`p-5 rounded-xl bg-white border shadow-2xs ${
                  sys.highlight ? 'border-[#FF5500] ring-1 ring-orange-500/20' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl" aria-hidden="true">{sys.icon}</span>
                  <span className="font-mono text-xs font-black text-[#FF5500]">
                    {sys.name}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sys.job}
                </p>
                {sys.highlight && (
                  <div className="mt-3 pt-2 border-t border-slate-100 font-mono text-[10px] font-bold text-[#FF5500]">
                    ✓ Available Today (Powered by ONIT)
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 text-center font-mono text-xs sm:text-sm font-bold text-slate-900 shadow-2xs">
            Each system has a job. Together, they form one connected business.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — WE STARTED BY BUILDING
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-xs">
                FIRST AVAILABLE SYSTEM
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We started with the hardest part: delivery.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Software delivery is where ideas become real products. It is also where requirements, people, code, testing, infrastructure and deadlines all come together.
              </p>

              <p className="text-sm font-semibold text-slate-800">
                So we started there.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                DELIVER is the first available system in the ScaleOnIt ecosystem. Powered by ONIT, it helps teams move from customer requirements to working software.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/platform/deliver')}
                  className="px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  EXPLORE DELIVER →
                </button>
              </div>
            </div>

            {/* Real Product UI Mockup (DELIVER Engine Monitor) */}
            <div className="lg:col-span-6 bg-[#0D1117] text-white rounded-2xl border border-slate-800 p-6 shadow-2xl font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                  <span className="font-bold text-white">ScaleOnIt DELIVER · Powered by ONIT</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  ✓ Available Today
                </span>
              </div>

              <div className="bg-[#05080C] p-4 rounded-xl border border-slate-850 space-y-2 text-[11px] leading-relaxed text-slate-300">
                <div className="text-slate-500">// Pipeline: Customer Requirement → Production Software</div>
                <div><span className="text-[#FF5500] font-bold">[1. Understand]</span> Ingested requirements &amp; scope parameters</div>
                <div><span className="text-[#FF5500] font-bold">[2. Plan]</span> Clear software specification generated &amp; verified</div>
                <div><span className="text-emerald-400 font-bold">[3. Build]</span> Frontend UI &amp; backend APIs built with AI assistance</div>
                <div><span className="text-emerald-400 font-bold">[4. Test]</span> 42 automated regression tests executed (0 failures)</div>
                <div><span className="text-purple-400 font-bold">[5. Release]</span> Cloud staging build ready for live review</div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Working product, not a placeholder.</span>
                <span className="text-[#FF5500] font-bold">DELIVER System Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 — OUR APPROACH
          ================================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-[3px_3px_0px_0px_#0F172A]">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              OUR APPROACH
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              We build products, not presentations.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
              <p>We care about ideas.</p>
              <p>
                But ideas only matter when they become something people can use. That is why we build, test, learn and improve.
              </p>
              <p className="font-semibold text-slate-800">
                We would rather show you a working product than make a big promise about what it could become.
              </p>
            </div>

            {/* Emotional Highlight Box */}
            <div className="p-6 rounded-xl bg-slate-900 text-white font-mono grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-[#FF5500] text-xs mb-1">01</div>
                <div className="font-bold text-sm">Build it.</div>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-[#FF5500] text-xs mb-1">02</div>
                <div className="font-bold text-sm">Use it.</div>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-[#FF5500] text-xs mb-1">03</div>
                <div className="font-bold text-sm">Learn from it.</div>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-[#FF5500] text-xs mb-1">04</div>
                <div className="font-bold text-sm">Make it better.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7 — OUR HUNGER
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              WHY WE DO THIS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              We are hungry to build something that matters.
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4 text-base text-slate-600 leading-relaxed text-center mb-8">
            <p>We know ScaleOnIt is still being built.</p>
            <p>We know there is a lot left to do.</p>
            <p className="font-semibold text-slate-900 text-lg">
              That is exactly what excites us.
            </p>
            <p>
              We want to build products that solve real problems, earn the trust of real businesses and become better with every release.
            </p>
            <p>We are not trying to look finished. We are here to keep building.</p>
          </div>

          <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 text-center max-w-xl mx-auto shadow-2xs">
            <div className="font-mono text-sm sm:text-base font-extrabold text-slate-900">
              The journey is long. <br />
              <span className="text-[#FF5500]">We&apos;re just getting started.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8 — THE PEOPLE
          ================================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              THE TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Built by people who like building.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We are engineers, product thinkers and problem solvers.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] max-w-3xl mx-auto space-y-5">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              We enjoy understanding difficult problems, getting into the details and turning ideas into working software.
            </p>
            <p className="text-sm sm:text-base text-slate-900 font-semibold leading-relaxed">
              We believe good products come from people who care about both sides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800">
                1. How the technology works.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800">
                2. And why the customer needs it.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9 — WHAT WE BELIEVE
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              CORE PRINCIPLES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              A few things we believe.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {beliefs.map((b) => (
              <div
                key={b.num}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#FF5500] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-black text-[#FF5500] mb-2">
                    {b.num}
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10 — WHERE WE ARE GOING
          ================================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              WHERE WE ARE GOING
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              DELIVER is the beginning.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Today, ScaleOnIt starts with DELIVER. But the bigger goal is a connected ecosystem where the different parts of an IT service business can work together.
            </p>
          </div>

          {/* Sequential Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-6">
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
              <div className="font-mono text-xs font-black text-[#FF5500]">01</div>
              <div className="font-extrabold text-sm text-slate-900">GROW</div>
              <div className="text-[11px] text-slate-500">Find Customers</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
              <div className="font-mono text-xs font-black text-[#FF5500]">02</div>
              <div className="font-extrabold text-sm text-slate-900">DISCOVER</div>
              <div className="text-[11px] text-slate-500">Understand Needs</div>
            </div>
            <div className="p-4 bg-white rounded-xl border-2 border-[#FF5500] text-center shadow-xs">
              <div className="font-mono text-xs font-black text-[#FF5500]">03 · ACTIVE</div>
              <div className="font-extrabold text-sm text-slate-900">DELIVER</div>
              <div className="text-[11px] text-[#FF5500] font-bold">Build &amp; Release (ONIT)</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
              <div className="font-mono text-xs font-black text-[#FF5500]">04</div>
              <div className="font-extrabold text-sm text-slate-900">SERVE</div>
              <div className="text-[11px] text-slate-500">Support Customers</div>
            </div>
          </div>

          {/* Supporting systems */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 max-w-4xl mx-auto text-center font-mono text-xs text-slate-600 mb-8">
            Supported throughout by <strong className="text-slate-900">PEOPLE</strong> (Workforce) + <strong className="text-slate-900">FINANCIALS</strong> (Commercial Finances).
          </div>

          <div className="text-center font-mono text-xs sm:text-sm font-bold text-slate-900">
            One system at a time. One connected ecosystem over time.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 11 — INVITATION
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-[3px_3px_0px_0px_#0F172A] text-center space-y-6">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-xs">
              JOIN THE JOURNEY
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
              If you believe there is a better way, build it with us.
            </h2>

            <div className="space-y-2 text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              <p>We are still early. There is a lot to build.</p>
              <p>
                And we are looking for people who want to be part of that journey — customers, builders, partners and people who believe better software can change how businesses work.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('what-we-build')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-7 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                EXPLORE WHAT WE ARE BUILDING
              </button>
              <button
                onClick={() => onNavigate('/demo')}
                className="px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-mono font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                TALK TO US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 12 — FINAL STATEMENT
          ================================================== */}
      <section className="py-20 bg-white text-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-14 shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-md">
              <span>FORWARD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We have a long way to go.
            </h2>

            <div className="font-mono text-base sm:text-lg text-slate-300 space-y-1">
              <div>Good.</div>
              <div>That&apos;s the point.</div>
              <div className="text-[#FF5500] font-bold">We&apos;re here to build.</div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('/')}
                className="px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                EXPLORE SCALEONIT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
