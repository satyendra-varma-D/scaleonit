import PageLayout from '../../layout/PageLayout'

interface ServePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function ServePage({ onNavigate }: ServePageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: 'SERVE' },
      ]}
      heroEyebrow="AI-Native Customer Support & SLA Operations"
      heroTitle={
        <>
          Context-aware support that links customer <br className="hidden sm:inline" />
          <span className="text-emerald-600">incidents directly to production code.</span>
        </>
      }
      heroDescription="Close the loop between production support and engineering. AI Support Agent diagnoses customer tickets with full upstream context — linking incidents directly to release versions, pull requests, and original user stories."
      heroBadges={['Full-Lifecycle Ticket Context', 'AI Support Agent', 'SLA Health Monitoring', 'Incident-to-Code Traceability']}
      ctaTitle="Elevate enterprise customer support with full engineering context"
      ctaDescription="Discover how ONIT’s AI Support Agent resolves complex technical incidents faster by leveraging complete SDLC data."
      ctaButtonText="Book Support Consultation"
    >
      {/* 01. Serve Narrative */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-4">
                The Support Disconnect
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-4">
                Support engineers operate blind without access to requirements, PRs, or architecture context.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                When a customer submits a defect, tier-1 agents ask repetitive questions. When escalated to engineering, developers spend hours asking: &quot;What version is this customer on? Which PR introduced this change?&quot;
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ONIT SERVE bridges customer operations directly to engineering. Every ticket is enriched with customer contract terms, active deployment versions, recent pull requests, and original BRD acceptance criteria.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Continuous Support & Feedback Loop
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Ticket Ingestion & Enrichment', desc: 'Enriches ticket with customer account history, SLA, and live app version' },
                  { step: '02', title: 'Contextual Root-Cause Diagnosis', desc: 'AI scans release changelogs and error logs to identify probable cause' },
                  { step: '03', title: 'Resolution or Automated Escalation', desc: 'Provides instant verified response or files linked bug with engineering' },
                  { step: '04', title: 'Continuous Feedback to Discovery', desc: 'Recurring customer issues feed directly into DISCOVER for future roadmap planning' },
                ].map((item) => (
                  <div key={item.step} className="p-3.5 bg-white rounded-xl border border-border-base flex items-start gap-3">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-midnight">{item.title}</div>
                      <div className="text-[11px] text-mid-text leading-tight mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Core Capabilities */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-3">
              Comprehensive Support & SLA Capabilities
            </h2>
            <p className="text-sm text-mid-text max-w-xl mx-auto">
              From automated ticket triage to proactive SLA breach alerting and code-level bug filing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-4">
                🛟
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Contextual Ticket Triage</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                AI Support Agent categorizes tickets, checks SLA urgency, and cross-references organizational knowledge and recent deployment logs.
              </p>
              <div className="text-[11px] font-semibold text-emerald-600">Key Output: Instant Context-Enriched Ticket Summary</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-4">
                ⏱️
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Proactive SLA Monitoring</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Monitors contractual SLA deadlines in real time. Flags high-priority customer tickets before thresholds are breached.
              </p>
              <div className="text-[11px] font-semibold text-emerald-600">Key Output: Real-Time SLA Health Dashboard & Alerts</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-4">
                🔄
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Incident-to-Code Traceability</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                When an engineering defect is confirmed, ONIT generates a linked bug ticket referencing the exact commit, PR, and original requirement.
              </p>
              <div className="text-[11px] font-semibold text-emerald-600">Key Output: Bi-directional Git & Backlog Synchronization</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Worker Spotlight */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-2">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold mb-4">
                AI Support Agent
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The AI Support Agent operates with full organizational context. Rather than giving generic canned answers, it synthesizes responses based on the customer’s contract, app version, and verified knowledge base.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Context Sources:</strong> Customer history, SLA contracts, release manifests, system logs, code documentation.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Tools:</strong> Ticketing API, knowledge base search, error log analyzers, escalation dispatchers.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Human Gate:</strong> High-severity ticket escalations and refund approvals require support lead review.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Support Ticket Artifact */}
            <div className="bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SERVE Ticket Context · INC-4402
                </span>
                <span className="text-[10px] text-emerald-400">SLA: 28m REMAINING</span>
              </div>
              <div className="text-slate-300 space-y-3">
                <div className="text-emerald-300 font-bold">Customer: Apex Logistics (Enterprise Tier 1)</div>
                <div className="text-slate-400 text-[11px]">
                  Subject: <code>Webhook signature validation returning 401 on v2.4.0</code><br />
                  Linked PR: <code>ENGINEER / PR #142 (Webhook Engine)</code><br />
                  Linked Requirement: <code>DISCOVER / US-001 (Acceptance Criteria 2)</code>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="text-emerald-400 font-bold mb-1">## Contextual AI Diagnosis:</div>
                  <div className="text-slate-400 text-[11px] leading-relaxed bg-black/40 p-3 rounded-lg">
                    Root-Cause: Customer is passing HMAC-SHA1 signature instead of required HMAC-SHA256 specified in US-001.<br />
                    Action: Drafted customer advisory email with updated code snippet.<br />
                    Resolution: Awaiting Support Engineer confirmation to send.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Feedback Loop back to Discovery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-pearl border border-border-base flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 mb-1">
                Continuous Improvement Loop
              </div>
              <h3 className="text-lg font-bold text-midnight">Support feeds directly back to Discovery</h3>
              <p className="text-xs text-mid-text max-w-xl mt-1">
                Insights gathered in SERVE automatically feed back to DISCOVER to inform future roadmap priorities, UX improvements, and architectural refactoring.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/discover')}
                className="bg-onit text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-onit-hover transition-colors cursor-pointer"
              >
                Explore DISCOVER →
              </button>
              <button
                onClick={() => onNavigate('/platform')}
                className="border border-border-base text-midnight text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-white transition-colors cursor-pointer"
              >
                Return to Platform Hub →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
