import PageLayout from '../../layout/PageLayout'

interface FinancialsPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function FinancialsPage({ onNavigate }: FinancialsPageProps) {
  const workflows = [
    {
      num: '01',
      title: 'Real-Time Project Margin Tracking',
      desc: 'Tracks developer hours, AI token consumption, and third-party API costs against fixed-price or T&M budgets in real time.',
    },
    {
      num: '02',
      title: 'Milestone & Sprint-Triggered Billing',
      desc: 'Automatically drafts client invoices upon verified delivery milestones or sprint demo acceptance in DELIVER.',
    },
    {
      num: '03',
      title: 'Granular Cost-per-Feature Attribution',
      desc: 'Attributes engineering and cloud compute spend down to specific user stories, microservices, and client accounts.',
    },
    {
      num: '04',
      title: 'Profitability Forecasting & Variance Guardrails',
      desc: 'Early warning alerts flag scope creep and budget variances before they erode contract profitability.',
    },
  ]

  const capabilities = [
    {
      title: 'Live Margin Intelligence',
      desc: 'Monitor gross margins across all ongoing client accounts with live burn rate calculations and budget drawdown indicators.',
      tag: 'MARGIN TRACKING',
      icon: '📊',
    },
    {
      title: 'Automated Invoice Generation',
      desc: 'Generates auditable milestone invoices backed by verified PR merges, deployed release tags, and approved timesheets.',
      tag: 'BILLING AUTOMATION',
      icon: '🧾',
    },
    {
      title: 'AI & Cloud Cost Accounting',
      desc: 'Track exact LLM token expenditures, CI/CD runner minutes, and cloud compute costs incurred per client engagement.',
      tag: 'COST ATTRIBUTION',
      icon: '⚡',
    },
    {
      title: 'Financial Variance Auditor',
      desc: 'Automated policy worker compares actual engineering spend against presales estimates in GROW for continuous learning.',
      tag: 'GOVERNANCE',
      icon: '🛡️',
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Ecosystem System 05 · Commercial & Project Financials"
      heroTitle={
        <>
          Real-time project margins and <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">automated delivery billing.</span>
        </>
      }
      heroDescription="ScaleOnIt FINANCIALS connects software execution directly to commercial profitability. Track live burn rates, attribute AI and developer costs per feature, and automate milestone invoicing."
      heroBadges={['Real-Time Project Margins', 'Automated Milestone Billing', 'Feature-Level Cost Attribution', 'Variance Early Warnings']}
      ctaTitle="Take control of your software project margins"
      ctaDescription="Discover how ScaleOnIt FINANCIALS unifies delivery tracking with accounting reality."
      ctaButtonText="Explore Ecosystem Demo"
    >
      {/* 01. Narrative */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                The Financial Blindspot
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                You cannot protect project margins when financial data is weeks behind sprint execution.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 font-normal">
                IT services executives usually learn that a fixed-price project lost money 30 days after the final deliverable was shipped. Accounting software doesn&apos;t know when a sprint slips, and Jira doesn&apos;t know how much an engineer or AI worker costs per hour.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                ScaleOnIt FINANCIALS bridges this divide. Every commit, sprint backlog item, and contractor hour is continuously synthesized with contract rate cards. You get instantaneous margin visibility and proactive budget variance guardrails.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                The Financial Governance Model
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
              FINANCIAL CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Commercial Clarity for IT Leadership
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Eliminate revenue leakage and guarantee contractual profitability across all service accounts.
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
              CONTINUOUS FINANCIAL INTELLIGENCE
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Closing the Loop from Sales to Ongoing Customer Service
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Historical margin and variance data from FINANCIALS automatically updates the presales estimation models in GROW, while active SLA warranty costs route into SERVE for end-to-end profitability management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="text-[#FF5500] font-bold mb-1">Feedback to GROW</div>
                <div className="text-slate-300">Calibrates future proposal estimates using verified project cost outcomes.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="text-emerald-400 font-bold mb-1">Connected to SERVE</div>
                <div className="text-slate-300">Monitors SLA penalty liabilities and maintenance contract renewals.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
