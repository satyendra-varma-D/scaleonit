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
          <span className="text-[#C53678]">traceable engineering improvements.</span>
        </>
      }
      heroDescription="Unite customer service with code-level operations. AI Support Agent synthesizes customer tickets with verified architectural context, logs reproducible defects to engineering, and preserves contract SLAs."
      heroBadges={['Upstream Context Integration', 'AI Support Agent', 'Defect-to-Code Traceability', 'Live SLA Health']}
      ctaTitle="Connect customer support to engineering reality"
      ctaDescription="Discover how ONIT eliminates support silos by bringing complete release, architecture, and code context into customer service."
      ctaButtonText="Book Serve Consultation"
    >
      {/* 01. Serve Narrative */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The Customer Disconnect
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
                Support agents operate in the dark, unable to explain why software behaves unexpectedly.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                When customer issues arise, support teams have zero visibility into recent deployments, PR changes, or contract-specific SLA promises. Tickets bounce back and forth between tiers before engineers even see the problem.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed">
                ONIT SERVE equips customer success teams with complete upstream context. When a ticket arrives, the AI Support Agent checks the exact release version, identifies recent commits, and drafts actionable defect reports directly linked to code repositories.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-4">
                The Continuous Support Loop
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Ticket Ingestion & Context Match', desc: 'Identifies customer contract, SLA terms, and active app version' },
                  { step: '02', title: 'Root Cause Synthesis', desc: 'Correlates issue description against recent release logs & commits' },
                  { step: '03', title: 'AI Resolution & Guidance', desc: 'Drafts verified response or workaround for agent review' },
                  { step: '04', title: 'Engineering Defect Creation', desc: 'Auto-generates bug ticket linked to exact code repository' },
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-white rounded-2xl border border-[#EAE6F0] flex items-start gap-3 shadow-2xs">
                    <span className="text-xs font-extrabold text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/25 px-2.5 py-1 rounded-lg">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#1B0A2A]">{item.title}</div>
                      <div className="text-[11px] text-[#5A4E68] leading-tight mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Core Capabilities */}
      <section className="py-20 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight mb-3">
              Comprehensive Support & Service Capabilities
            </h2>
            <p className="text-sm text-[#5A4E68] max-w-xl mx-auto">
              From contract-aware AI response synthesis to bi-directional bug tracking and SLA risk alerting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF4F2] text-[#FF5841] flex items-center justify-center text-xl mb-4 border border-[#FF5841]/20">
                🧭
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Upstream Context Awareness</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Support agents see exact customer contracts, deployed release versions, and recent PR commits right inside the ticket.
              </p>
              <div className="text-[11px] font-bold text-[#FF5841]">Key Output: 360-Degree Context Dashboard</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF2F7] text-[#C53678] flex items-center justify-center text-xl mb-4 border border-[#C53678]/20">
                ⏱️
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Predictive SLA Breach Alerts</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Monitors contractual response and resolution timers, alerting managers before SLA violations occur.
              </p>
              <div className="text-[11px] font-bold text-[#C53678]">Key Output: Proactive Escalation Triggers</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F3F8] text-[#3B1A54] flex items-center justify-center text-xl mb-4 border border-[#3B1A54]/20">
                🔄
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Defect-to-Code Traceability</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                When an engineering defect is confirmed, ONIT generates a linked bug ticket referencing the exact commit, PR, and requirement.
              </p>
              <div className="text-[11px] font-bold text-[#3B1A54]">Key Output: Bi-directional Git & Backlog Synchronization</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Worker Spotlight */}
      <section className="py-20 bg-white border-y border-[#EAE6F0] text-[#1B0A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold text-[#1B0A2A] mb-4">
                AI Support Agent
              </h2>
              <p className="text-sm text-[#5A4E68] leading-relaxed mb-6">
                The AI Support Agent operates with full organizational context. Rather than giving generic canned answers, it synthesizes responses based on the customer’s contract, app version, and verified knowledge base.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5841] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Context Sources:</strong> Customer history, SLA contracts, release manifests, system logs, code documentation.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C53678] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Human Review Mode:</strong> All outbound responses can be held for human agent verification before dispatch.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B1A54] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Continuous Feedback Loop:</strong> Resolved issues feed directly back into DISCOVER for future feature enhancements.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Support Incident Artifact */}
            <div className="bg-[#FAFAFC] rounded-3xl border border-[#EAE6F0] p-7 shadow-lg font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6F0] text-[#5A4E68] mb-4">
                <span className="flex items-center gap-2 font-bold text-[#1B0A2A]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5841] animate-pulse" />
                  Incident Ticket · INC-98102 (Tier 1 Priority)
                </span>
                <span className="text-[10px] font-bold text-[#C53678] bg-[#FDF2F7] px-2 py-0.5 rounded-md border border-[#C53678]/30">
                  DIAGNOSED
                </span>
              </div>
              <div className="text-[#1B0A2A] space-y-3">
                <div className="text-[#C53678] font-bold">Issue: Webhook Timeout during Multi-Currency Settlement</div>
                <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                  Customer: <code>Acme Global FinTech (Enterprise SLA: 30m)</code><br />
                  App Version: <code>v2.4.0 (Deployed today at 09:15 UTC)</code><br />
                  Root Cause Match: <code>PR #142 (Idempotency Lock contention on high volume)</code>
                </div>
                <div className="pt-2 border-t border-[#EAE6F0]">
                  <div className="text-[#1B0A2A] font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#FF5841]">✓</span> Automated Action Dispatch:
                  </div>
                  <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                    ✓ Customer Briefing: Prepared with temporary rate-limiting recommendation<br />
                    ✓ Engineering Bug Filed: BUG-449 linked to PR #142 and REL-2026-09<br />
                    <span className="text-[#C53678] font-bold">✓ SLA Remaining: 24 mins (Health: ON TRACK)</span>
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
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#C53678] mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-xl font-extrabold text-[#1B0A2A]">Closing the Continuous Loop</h3>
              <p className="text-xs sm:text-sm text-[#5A4E68] max-w-xl mt-1">
                Resolved tickets in SERVE feed directly back into DISCOVER, informing future requirements with real-world user feedback.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/discover')}
                className="bg-[#C53678] hover:bg-[#A92661] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#C53678]/25"
              >
                Back to DISCOVER →
              </button>
              <button
                onClick={() => onNavigate('/platform')}
                className="border border-[#EAE6F0] bg-white text-[#1B0A2A] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#FDF2F7] hover:border-[#C53678]/30 hover:text-[#C53678] transition-colors cursor-pointer"
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
