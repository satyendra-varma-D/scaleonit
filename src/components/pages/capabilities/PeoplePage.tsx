import PageLayout from '../../layout/PageLayout'

interface PeoplePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function PeoplePage({ onNavigate }: PeoplePageProps) {
  const workflows = [
    {
      num: '01',
      title: 'Real-Time Skills & Competency Graph',
      desc: 'Maintains verified technical skills, framework proficiencies, and domain experience for every engineer and AI worker.',
    },
    {
      num: '02',
      title: 'Dynamic Sprint Staffing Matcher',
      desc: 'Matches upcoming sprint backlogs in DELIVER with available engineering capacity based on exact tech stack requirements.',
    },
    {
      num: '03',
      title: 'Bench Minimization & Re-skilling',
      desc: 'Forecasts talent gaps 60-90 days in advance, suggesting proactive upskilling paths and minimizing unbillable bench time.',
    },
    {
      num: '04',
      title: 'Hybrid Human + AI Specialist Teams',
      desc: 'Orchestrates team squads where human tech leads supervise specialized autonomous agents for coding, testing, and DevOps.',
    },
  ]

  const capabilities = [
    {
      title: 'Competency Knowledge Graph',
      desc: 'Continuous skill profiling updated automatically based on committed PRs, code reviews, and project completions.',
      tag: 'SKILLS ENGINE',
      icon: '🧠',
    },
    {
      title: 'Capacity & Workload Balance',
      desc: 'Prevent developer burnout by monitoring active story points, PR review queues, and sprint load in real time.',
      tag: 'CAPACITY PLANNING',
      icon: '⚖️',
    },
    {
      title: 'AI Worker Provisioning',
      desc: 'Configure and assign specialized AI specialists (Business Analyst, Solution Architect, QA Worker) to project pods.',
      tag: 'AI WORKFORCE',
      icon: '🤖',
    },
    {
      title: 'Bench & Utilization Analytics',
      desc: 'Track billable vs. non-billable utilization rates across client accounts with direct linkage to FINANCIALS margins.',
      tag: 'UTILIZATION',
      icon: '📈',
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Ecosystem System 04 · Workforce & Resource Allocation"
      heroTitle={
        <>
          Match the right engineering talent <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">to every sprint with zero friction.</span>
        </>
      }
      heroDescription="ScaleOnIt PEOPLE manages human engineers, tech leads, and specialized AI workers. Real-time skill graphs, dynamic sprint staffing, and proactive bench optimization connected directly to delivery backlogs."
      heroBadges={['Live Skill Competency Graph', 'Dynamic Sprint Allocation', 'Hybrid Human + AI Teams', 'Proactive Bench Minimization']}
      ctaTitle="Optimize your engineering workforce and eliminate bench waste"
      ctaDescription="See how ScaleOnIt PEOPLE aligns developer competencies with upcoming client demand."
      ctaButtonText="Explore Ecosystem Demo"
    >
      {/* 01. Narrative */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                The Resource Management Dilemma
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Spreadsheet-based staffing cannot keep up with agile software execution.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 font-normal">
                IT service companies lose 15-25% of their gross margins to unallocated bench engineers and misplaced skill sets. Project managers scramble on Slack to find a React or Rust engineer while other teams sit idle.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                ScaleOnIt PEOPLE unifies workforce management with live project backlogs. As new requirements are approved in DISCOVER and tasks are planned in DELIVER, PEOPLE suggests optimal squad compositions combining human engineers and specialized AI agents.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                The Workforce Orchestration Model
              </div>
              <div className="space-y-3">
                {workflows.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 bg-orange-50/40 rounded-xl border border-orange-200/60 flex items-start gap-3 shadow-2xs hover:border-[#FF5500] transition-colors"
                  >
                    <span className="text-xs font-mono font-extrabold text-[#FF5500] bg-white border border-orange-200 px-2.5 py-1 rounded-md shadow-2xs">
                      {item.num}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 font-mono">{item.title}</div>
                      <div className="text-[11px] text-slate-600 leading-tight mt-0.5 font-medium">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Capabilities */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              WORKFORCE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Modern Talent &amp; Squad Operations
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Maximize engineer engagement and project velocity with intelligent resource governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all group"
              >
                <div className="text-3xl mb-3 p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60 inline-block" aria-hidden="true">
                  {c.icon}
                </div>
                <div className="font-mono text-[10px] font-bold text-[#FF5500] uppercase tracking-wider mb-1">
                  {c.tag}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#FF5500] transition-colors mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Connected Context Box */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-12 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-md">
              ECOSYSTEM SYNERGY
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Directly Linked to Delivery &amp; Financial Margins
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              When an engineer is allocated to a DELIVER project, timesheets and billable hours synchronize automatically with FINANCIALS. Project margins update in real time with zero manual administrative overhead.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="text-[#FF5500] font-bold mb-1">Informed by DELIVER</div>
                <div className="text-slate-300">Receives sprint velocity demands and upcoming tech stack requirements.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="text-emerald-400 font-bold mb-1">Synchronized with FINANCIALS</div>
                <div className="text-slate-300">Feeds resource cost rates and billable utilization percentages into margin models.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
