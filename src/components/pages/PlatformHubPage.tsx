import { useState } from 'react'
import PageLayout from '../layout/PageLayout'
import { capabilities } from '../../data/capabilities'

interface PlatformHubPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function PlatformHubPage({ onNavigate }: PlatformHubPageProps) {
  const [selected, setSelected] = useState('discover')
  const mod = capabilities.find((m) => m.id === selected) || capabilities[0]

  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[{ label: 'Platform' }]}
      heroEyebrow="The Complete Operating Platform"
      heroTitle={
        <>
          One Platform. <br className="hidden sm:inline" />
          <span className="text-onit">Every IT Need.</span>
        </>
      }
      heroDescription="Eleven interconnected capabilities operating on a shared data model. Real-time context continuity across requirements, architecture, engineering, QA, DevOps, and customer support."
      heroBadges={['11 Capabilities', 'Shared Context Schema', 'Governed AI Specialists', 'Open Integration Hub']}
      ctaTitle="Ready to unify your software delivery operations?"
      ctaDescription="Start with one capability. Connect what matters. Expand to the complete operating platform as your organization scales."
      ctaButtonText="Talk to Us"
    >
      {/* What is the ONIT Platform Section */}
      <section className="py-16 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3 py-1 rounded-md inline-block mb-4 shadow-xs">
                Architecture Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Not a suite of isolated SaaS tools. One continuous operating system.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 font-normal">
                Traditional software organizations run on fragmented point solutions — CRM, Jira, Figma, GitHub, CI/CD, and ticketing tools. Critical business context is lost at every handoff between teams.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                ONIT acts as the connective nervous system. When a client requirement changes in Discovery, downstream architecture specifications, user stories, automated test cases, and deployment records update synchronously with full human oversight.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A]">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 font-mono">
                The 11 Operating Pillars
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {capabilities.map((c) => (
                  <div key={c.id} className="p-3 rounded-xl bg-orange-50/50 border border-orange-200/60 flex items-center gap-2.5">
                    <span className="text-lg" aria-hidden="true">{c.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{c.name}</div>
                      <div className="text-[10px] text-slate-500 truncate max-w-[90px]">
                        {c.hasDedicatedPage ? 'Dedicated Page' : 'Platform Hub'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capability Explorer */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden" id="all-capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-3">
              Explore the 11 Capabilities
            </h2>
            <p className="text-sm text-mid-text max-w-xl mx-auto">
              Select any capability below to review key workflows, specialized AI workers, and maturity status.
            </p>
          </div>

          {/* Module Grid Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-2.5 mb-10">
            {capabilities.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                aria-pressed={selected === m.id}
                className={`flex flex-col items-center gap-1.5 p-3.5 rounded-xl border-2 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit ${
                  selected === m.id
                    ? `${m.bg} ${m.border} shadow-md`
                    : 'border-border-base hover:border-slate-300 bg-white'
                }`}
              >
                <span className="text-2xl" aria-hidden="true">
                  {m.icon}
                </span>
                <span
                  className={`text-[11px] font-bold uppercase tracking-wide ${
                    selected === m.id ? m.color : 'text-mid-text'
                  }`}
                >
                  {m.name}
                </span>
                {m.hasDedicatedPage ? (
                  <span className="text-[9px] font-bold text-onit bg-onit-light px-1.5 py-0.5 rounded-md border border-blue-200">
                    Deep Dive
                  </span>
                ) : (
                  <span className="text-[9px] font-semibold text-slate-400">
                    Platform Hub
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Selected Module Detail Showcase */}
          <div className={`rounded-2xl border-2 ${mod.border} ${mod.bg} p-6 sm:p-10 shadow-sm`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${mod.accent} flex items-center justify-center text-2xl text-white shadow-sm`}
                  >
                    {mod.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-extrabold uppercase tracking-wider ${mod.color}`}>
                      {mod.name}
                    </h3>
                    <p className="text-xs font-bold text-mid-text">{mod.tagline}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-midnight leading-relaxed mb-6">
                  {mod.description}
                </p>

                <div className="mb-6">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-2.5">
                    Core Operational Workflows
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mod.workflows.map((w) => (
                      <span
                        key={w}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${mod.border} bg-white/90 ${mod.color}`}
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                {mod.hasDedicatedPage ? (
                  <button
                    onClick={() => onNavigate(`/platform/${mod.slug}`)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-onit hover:text-onit-hover transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit rounded-lg px-1 py-0.5"
                  >
                    Explore dedicated {mod.name} capability page & technical architecture
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/70 px-3 py-1.5 rounded-lg border border-slate-200">
                    <span>ℹ️ Dedicated deep-dive page scheduled for Phase 2 expansion.</span>
                  </div>
                )}
              </div>

              <div>
                {mod.aiWorkers.length > 0 && (
                  <div className="mb-6">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-3">
                      Specialized AI Workforce
                    </div>
                    <div className="space-y-2">
                      {mod.aiWorkers.map((a) => (
                        <div
                          key={a}
                          className="flex items-center gap-2.5 p-3 bg-white/90 rounded-xl border border-white/80 shadow-xs"
                        >
                          <div className={`w-2 h-2 rounded-full ${mod.accent}`} />
                          <span className="text-xs font-bold text-midnight">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 bg-white/80 rounded-xl border border-white/80 shadow-xs">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-1">
                    Operating Context Status
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-midnight">Shared Data Model Active</span>
                  </div>
                  <p className="text-xs text-mid-text mt-1.5 leading-relaxed">
                    Maintains bidirectional data synchronization and artifact traceability across the software lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Platform Lifecycle Pipeline */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md inline-block mb-4 shadow-xs">
            Contextual Continuity
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Information flows continuously without manual re-entry
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-12 font-normal">
            Every decision made in DISCOVER directly informs the architecture in ENGINEER, the automated tests in QUALITY, the sprint plans in DELIVER, and the incident logs in SERVE.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] transition-all">
              <div className="text-xs font-bold text-[#FF5500] mb-1 font-mono">01. Discovery → Requirements</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Stakeholder meeting transcripts automatically synthesize into structured BRDs and user stories with acceptance criteria.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] transition-all">
              <div className="text-xs font-bold text-slate-900 mb-1 font-mono">02. Requirements → Architecture</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Approved user stories feed into AI Solution Architect to generate API schemas, component diagrams, and technical baselines.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] transition-all">
              <div className="text-xs font-bold text-[#FF5500] mb-1 font-mono">03. Code → Quality Gates</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Code changes trigger automated test suites synthesized from acceptance criteria before deployment gate approval.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] transition-all">
              <div className="text-xs font-bold text-emerald-700 mb-1 font-mono">04. Support → Engineering Loop</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Customer incidents in SERVE trace directly back to the commit, PR, and original requirement for rapid remediation.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
