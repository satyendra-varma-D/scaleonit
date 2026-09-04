import PageLayout from '../../layout/PageLayout'

interface ServePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function ServePage({ onNavigate }: ServePageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="AI-Native Customer Support & Live SLA Management"
      heroTitle={
        <>
          Turn support incidents into <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">traceable engineering improvements.</span>
        </>
      }
      heroDescription="Unite customer service with code-level operations. AI Support Agent synthesizes customer tickets with verified architectural context, logs reproducible defects to engineering, and preserves contract SLAs."
      heroBadges={['Upstream Context Integration', 'AI Support Agent', 'Defect-to-Code Traceability', 'Live SLA Health']}
      ctaTitle="Connect customer support to engineering reality"
      ctaDescription="Discover how ONIT eliminates support silos by bringing complete release, architecture, and code context into customer service."
      ctaButtonText="Book Serve Consultation"
    >
      {/* 01. Serve Narrative */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                The Customer Disconnect
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Support agents operate in the dark, unable to explain why software behaves unexpectedly.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                When customer issues arise, support teams have zero visibility into recent deployments, PR changes, or contract-specific SLA promises. Tickets bounce back and forth between tiers before engineers even see the problem.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ScaleOnIt SERVE equips customer success teams with complete upstream context. When a ticket arrives, the AI Support Agent checks the exact release version, identifies recent commits, and drafts actionable defect reports directly linked to code repositories.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                The Continuous Support Loop
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Ticket Ingestion & Context Match', desc: 'Identifies customer contract, SLA terms, and active app version' },
                  { step: '02', title: 'Root Cause Synthesis', desc: 'Correlates issue description against recent release logs & commits' },
                  { step: '03', title: 'AI Resolution & Guidance', desc: 'Drafts verified response or workaround for agent review' },
                  { step: '04', title: 'Engineering Defect Creation', desc: 'Auto-generates bug ticket linked to exact code repository' },
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-orange-50/40 rounded-xl border border-orange-200/60 flex items-start gap-3 shadow-2xs hover:border-[#FF5500] transition-colors">
                    <span className="font-mono text-xs font-extrabold text-[#FF5500] bg-white border border-orange-200 px-2.5 py-1 rounded-md shadow-2xs">
                      {item.step}
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

      {/* 02. Core Capabilities */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              SERVE CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Comprehensive Support &amp; Service Capabilities
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
              From contract-aware AI response synthesis to bi-directional bug tracking and SLA risk alerting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[4px_4px_0px_0px_#FF5500] hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🧭
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-mono">Upstream Context Awareness</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                Support agents see exact customer contracts, deployed release versions, and recent PR commits right inside the ticket.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: 360-Degree Context Dashboard</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[4px_4px_0px_0px_#FF5500] hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                ⏱️
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-mono">Predictive SLA Breach Alerts</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                Monitors contractual response and resolution timers, alerting managers before SLA violations occur.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Proactive Escalation Triggers</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[4px_4px_0px_0px_#FF5500] hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center text-xl mb-4 border border-slate-200">
                🔄
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-mono">Defect-to-Code Traceability</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                When an engineering defect is confirmed, ScaleOnIt generates a linked bug ticket referencing the exact commit, PR, and requirement.
              </p>
              <div className="font-mono text-[11px] font-bold text-slate-800">Key Output: Bi-directional Git Synchronization</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Worker Spotlight */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                AI Support Agent
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                The AI Support Agent operates with full organizational context. Rather than giving generic canned answers, it synthesizes responses based on the customer’s contract, app version, and verified knowledge base.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Context Sources:</strong> Customer history, SLA contracts, release manifests, system logs, code documentation.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Human Review Mode:</strong> All outbound responses can be held for human agent verification before dispatch.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Downstream Trace:</strong> Bugs route straight to DISCOVER backlogs and DELIVER sprint queues.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Support Ticket Card */}
            <div className="bg-[#0D1117] text-white rounded-2xl border border-slate-800 p-7 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  SERVE Ticket · TCK-2026-904
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  SLA HEALTHY (99.8%)
                </span>
              </div>
              <div className="text-slate-200 space-y-3">
                <div className="text-[#FF5500] font-bold">Client: Enterprise Tier 1 (Fintech Corp)</div>
                <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                  <span className="text-white font-bold">Issue:</span> Rate limit exceeded during bulk invoice export.<br />
                  <span className="text-white font-bold">Active Build:</span> v2.4.1 (Deployed 2 days ago in DELIVER).<br />
                  <span className="text-white font-bold">Linked PR:</span> #184 (Add streaming pagination).
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-white font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#FF5500]">⚡</span> AI Root-Cause Assessment:
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                    PR #184 introduced a default limit of 100 req/min. Client plan tier allows 500 req/min.<br />
                    <span className="text-emerald-400 font-bold">Remediation: Config override hotfix deployed. Bug linked to DISCOVER backlog.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Feedback Loop CTA */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[3px_3px_0px_0px_#0F172A]">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] mb-1">
                Continuous Feedback Loop
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Close the Loop with Engineering</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1 font-medium">
                Customer incidents and feature requests flow continuously back into DISCOVER and DELIVER.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                Explore DELIVER →
              </button>
              <button
                onClick={() => onNavigate('/platform/discover')}
                className="border border-slate-300 bg-white text-slate-900 text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg hover:border-[#FF5500] hover:bg-orange-50/50 transition-colors cursor-pointer shadow-[2px_2px_0px_0px_#0F172A]"
              >
                Explore DISCOVER →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
