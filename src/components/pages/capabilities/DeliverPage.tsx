import PageLayout from '../../layout/PageLayout'

interface DeliverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverPage({ onNavigate }: DeliverPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="AI-Native Project Coordination & DevOps Delivery"
      heroTitle={
        <>
          Coordinate delivery, surface risks, and <br className="hidden sm:inline" />
          <span className="text-[#C53678]">deploy software with governed automation.</span>
        </>
      }
      heroDescription="Unite project management and DevOps pipelines into one operating layer. AI Project Manager and AI DevOps Engineer coordinate sprints, highlight blockers, manage cloud infrastructure, and execute safe releases."
      heroBadges={['Sprint & Kanban Operations', 'AI Project Manager', 'AI DevOps Engineer', 'Governed Deployment Gates']}
      ctaTitle="Streamline delivery operations and release management"
      ctaDescription="See how ONIT eliminates project blind spots and enforces release safety across your software organization."
      ctaButtonText="Book Delivery Consultation"
    >
      {/* 01. Deliver Narrative */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The Delivery Disconnect
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
                Project managers spend hours updating status sheets while DevOps teams manage releases in silos.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                Delivery blockers are detected too late, dependencies between sprint tickets remain hidden, and deployment approvals happen over informal Slack messages without full audit records.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed">
                ONIT DELIVER links project execution directly to engineering commits and cloud infrastructure. Sprints update in real time as code is merged, release notes generate automatically from user stories, and deployment gates enforce strict human approval.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-4">
                The Coordinated Delivery Flow
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Sprint Backlog Allocation', desc: 'Prioritizes stories from DISCOVER and assigns team tasks' },
                  { step: '02', title: 'Live Blocker & Risk Detection', desc: 'AI PM identifies stale branches, blocked dependencies, and capacity risks' },
                  { step: '03', title: 'Automated Release Packaging', desc: 'Synthesizes release manifests, changelogs, and migration scripts' },
                  { step: '04', title: 'Governed Deployment Gate', desc: 'Executes cloud release only after authorized human sign-off' },
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
              Comprehensive Delivery & DevOps Capabilities
            </h2>
            <p className="text-sm text-[#5A4E68] max-w-xl mx-auto">
              From sprint orchestration and resource visibility to CI/CD pipeline management and rollbacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF4F2] text-[#FF5841] flex items-center justify-center text-xl mb-4 border border-[#FF5841]/20">
                📋
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Sprint & Milestone Coordination</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Automated Kanban and sprint tracking connected to Git PRs. Eliminates manual status re-entry and provides instant velocity transparency.
              </p>
              <div className="text-[11px] font-bold text-[#FF5841]">Key Output: Real-Time Sprint Dashboard & Blocker Feed</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF2F7] text-[#C53678] flex items-center justify-center text-xl mb-4 border border-[#C53678]/20">
                🚀
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Automated Infrastructure & Pipelines</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                AI DevOps Engineer manages Kubernetes, Terraform, and cloud environments (AWS, GCP, Azure) to provision and scale services safely.
              </p>
              <div className="text-[11px] font-bold text-[#C53678]">Key Output: Infrastructure as Code & Pipeline Configs</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F3F8] text-[#3B1A54] flex items-center justify-center text-xl mb-4 border border-[#3B1A54]/20">
                🛡️
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Human Deployment Approvals</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Production deployments cannot proceed autonomously. A designated delivery lead or architect must explicitly sign off on release packages.
              </p>
              <div className="text-[11px] font-bold text-[#3B1A54]">Key Output: Immutable Deployment Sign-off Audit Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workers in Action */}
      <section className="py-20 bg-white border-y border-[#EAE6F0] text-[#1B0A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Specialized AI Workers
              </div>
              <h2 className="text-3xl font-extrabold text-[#1B0A2A] mb-4">
                AI Project Manager & AI DevOps Engineer
              </h2>
              <p className="text-sm text-[#5A4E68] leading-relaxed mb-6">
                DELIVER pairs high-level delivery governance with technical deployment automation. The AI Project Manager oversees sprint flow while the AI DevOps Engineer executes releases.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5841] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">AI Project Manager:</strong> Analyzes task velocity, flags blocked PRs, and generates stakeholder weekly progress briefs.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C53678] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">AI DevOps Engineer:</strong> Builds Docker containers, executes deployment pipelines, and monitors canary rollouts.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B1A54] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Approval Gate:</strong> Explicit human approval required for production promotion and database migrations.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Deployment Artifact */}
            <div className="bg-[#FAFAFC] rounded-3xl border border-[#EAE6F0] p-7 shadow-lg font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6F0] text-[#5A4E68] mb-4">
                <span className="flex items-center gap-2 font-bold text-[#1B0A2A]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5841] animate-pulse" />
                  DELIVER Release Package · REL-2026-09
                </span>
                <span className="text-[10px] font-bold text-[#C53678] bg-[#FDF2F7] px-2 py-0.5 rounded-md border border-[#C53678]/30">
                  PRODUCTION
                </span>
              </div>
              <div className="text-[#1B0A2A] space-y-3">
                <div className="text-[#C53678] font-bold">Release Manifest: v2.4.0 (Webhook Engine & SLA Tracing)</div>
                <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                  Included PRs: <code>#142 (Webhook Ingestion), #148 (Audit Trail)</code><br />
                  Quality Gate: <code>TR-8841 Passed (100% assertions)</code><br />
                  Target Cluster: <code>us-east-1.k8s.scaleonit.internal</code>
                </div>
                <div className="pt-2 border-t border-[#EAE6F0]">
                  <div className="text-[#1B0A2A] font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#FF5841]">✓</span> Human Approval Verification:
                  </div>
                  <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                    ✓ Authorized by: Marcus Brody (Principal Delivery Director)<br />
                    ✓ Canary Health Check: 0.00% error rate across 1,000 requests<br />
                    ✓ Rollback Snapshot: Created at snap_998124<br />
                    <span className="text-[#C53678] font-bold">🚀 Status: Live in Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Downstream Continuation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#C53678] mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-xl font-extrabold text-[#1B0A2A]">Where does this context flow next?</h3>
              <p className="text-xs sm:text-sm text-[#5A4E68] max-w-xl mt-1">
                Deployed releases flow into SERVE for live customer support, incident resolution, and SLA tracking with code traceability.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/serve')}
                className="bg-[#C53678] hover:bg-[#A92661] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#C53678]/25"
              >
                Explore SERVE →
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
