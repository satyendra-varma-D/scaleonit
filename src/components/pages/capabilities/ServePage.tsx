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
      <section className="py-20 bg-white border-b border-slate-200">
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
                ONIT SERVE equips customer success teams with complete upstream context. When a ticket arrives, the AI Support Agent checks the exact release version, identifies recent commits, and drafts actionable defect reports directly linked to code repositories.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Continuous Support Loop
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Ticket Ingestion & Context Match', desc: 'Identifies customer contract, SLA terms, and active app version' },
                  { step: '02', title: 'Root Cause Synthesis', desc: 'Correlates issue description against recent release logs & commits' },
                  { step: '03', title: 'AI Resolution & Guidance', desc: 'Drafts verified response or workaround for agent review' },
                  { step: '04', title: 'Engineering Defect Creation', desc: 'Auto-generates bug ticket linked to exact code repository' },
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                    <span className="font-mono text-xs font-bold text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Core Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Comprehensive Support & Service Capabilities
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              From contract-aware AI response synthesis to bi-directional bug tracking and SLA risk alerting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#FF5500] transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🧭
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Upstream Context Awareness</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Support agents see exact customer contracts, deployed release versions, and recent PR commits right inside the ticket.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: 360-Degree Context Dashboard</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#FF5500] transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                ⏱️
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Predictive SLA Breach Alerts</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Monitors contractual response and resolution timers, alerting managers before SLA violations occur.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Proactive Escalation Triggers</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#FF5500] transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center text-xl mb-4 border border-slate-200">
                🔄
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Defect-to-Code Traceability</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                When an engineering defect is confirmed, ONIT generates a linked bug ticket referencing the exact commit, PR, and requirement.
              </p>
              <div className="font-mono text-[11px] font-bold text-slate-800">Key Output: Bi-directional Git Synchronization</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Worker Spotlight */}
      <section className="py-20 bg-white border-y border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                AI Support Agent
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                The AI Support Agent operates with full organizational context. Rather than giving generic canned answers, it synthesizes responses based on the customer’s contract, app version, and verified knowledge base.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Context Sources:</strong> Customer history, SLA contracts, release manifests, system logs, code documentation.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Human Review Mode:</strong> All outbound responses can be held for human agent verification before dispatch.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Continuous Feedback Loop:</strong> Resolved issues feed directly back into DISCOVER for future feature enhancements.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Support Incident Artifact */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 shadow-sm font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-slate-500 mb-4">
                <span className="flex items-center gap-2 font-bold text-slate-900">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
                  Incident Ticket · INC-98102 (Tier 1 Priority)
                </span>
                <span className="text-[10px] font-bold text-[#FF5500] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                  DIAGNOSED
                </span>
              </div>
              <div className="text-slate-900 space-y-3">
                <div className="text-[#FF5500] font-bold">Issue: Webhook Timeout during Multi-Currency Settlement</div>
                <div className="text-slate-600 text-[11px] leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                  Customer: <code className="text-slate-900 font-bold">Acme Global FinTech (Enterprise SLA: 30m)</code><br />
                  App Version: <code className="text-slate-900 font-bold">v2.4.0 (Deployed today at 09:15 UTC)</code><br />
                  Root Cause Match: <code className="text-slate-900 font-bold">PR #142 (Idempotency Lock contention on high volume)</code>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-slate-900 font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#FF5500]">✓</span> Automated Action Dispatch:
                  </div>
                  <div className="text-slate-600 text-[11px] leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                    ✓ Customer Briefing: Prepared with temporary rate-limiting recommendation<br />
                    ✓ Engineering Bug Filed: BUG-449 linked to PR #142 and REL-2026-09<br />
                    <span className="text-[#FF5500] font-bold">✓ SLA Remaining: 24 mins (Health: ON TRACK)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Upstream Continuation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Closing the Continuous Loop</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                Resolved tickets in SERVE feed directly back into DISCOVER, informing future requirements with real-world user feedback.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/discover')}
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-sm shadow-orange-500/25"
              >
                Back to DISCOVER →
              </button>
              <button
                onClick={() => onNavigate('/platform')}
                className="border border-slate-200 bg-white text-slate-900 text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg hover:bg-slate-100 hover:border-orange-500/30 hover:text-[#FF5500] transition-colors cursor-pointer"
              >
                Platform Hub →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
