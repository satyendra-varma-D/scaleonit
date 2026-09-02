import PageLayout from '../../layout/PageLayout'

interface DeliverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverPage({ onNavigate }: DeliverPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: 'DELIVER' },
      ]}
      heroEyebrow="AI-Native Project Coordination & DevOps Delivery"
      heroTitle={
        <>
          Coordinate delivery, surface risks, and <br className="hidden sm:inline" />
          <span className="text-data-cyan">deploy software with governed automation.</span>
        </>
      }
      heroDescription="Unite project management and DevOps pipelines into one operating layer. AI Project Manager and AI DevOps Engineer coordinate sprints, highlight blockers, manage cloud infrastructure, and execute safe releases."
      heroBadges={['Sprint & Kanban Operations', 'AI Project Manager', 'AI DevOps Engineer', 'Governed Deployment Gates']}
      ctaTitle="Streamline delivery operations and release management"
      ctaDescription="See how ONIT eliminates project blind spots and enforces release safety across your software organization."
      ctaButtonText="Book Delivery Consultation"
    >
      {/* 01. Deliver Narrative */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-data-cyan bg-cyan-light border border-cyan-200 px-3 py-1 rounded-full inline-block mb-4">
                The Delivery Disconnect
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-4">
                Project managers spend hours updating status sheets while DevOps teams manage releases in silos.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                Delivery blockers are detected too late, dependencies between sprint tickets remain hidden, and deployment approvals happen over informal Slack messages without full audit records.
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ONIT DELIVER links project execution directly to engineering commits and cloud infrastructure. Sprints update in real time as code is merged, release notes generate automatically from user stories, and deployment gates enforce strict human approval.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Coordinated Delivery Flow
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Sprint Backlog Allocation', desc: 'Prioritizes stories from DISCOVER and assigns team tasks' },
                  { step: '02', title: 'Live Blocker & Risk Detection', desc: 'AI PM identifies stale branches, blocked dependencies, and capacity risks' },
                  { step: '03', title: 'Automated Release Packaging', desc: 'Synthesizes release manifests, changelogs, and migration scripts' },
                  { step: '04', title: 'Governed Deployment Gate', desc: 'Executes cloud release only after authorized human sign-off' },
                ].map((item) => (
                  <div key={item.step} className="p-3.5 bg-white rounded-xl border border-border-base flex items-start gap-3">
                    <span className="text-xs font-bold text-data-cyan bg-cyan-light px-2 py-0.5 rounded-md">
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
              Comprehensive Delivery & DevOps Capabilities
            </h2>
            <p className="text-sm text-mid-text max-w-xl mx-auto">
              From sprint orchestration and resource visibility to CI/CD pipeline management and rollbacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-light text-data-cyan flex items-center justify-center text-xl mb-4">
                📋
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Sprint & Milestone Coordination</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Automated Kanban and sprint tracking connected to Git PRs. Eliminates manual status re-entry and provides instant velocity transparency.
              </p>
              <div className="text-[11px] font-semibold text-data-cyan">Key Output: Real-Time Sprint Dashboard & Blocker Feed</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-light text-data-cyan flex items-center justify-center text-xl mb-4">
                🚀
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Automated Infrastructure & Pipelines</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                AI DevOps Engineer manages Kubernetes, Terraform, and cloud environments (AWS, GCP, Azure) to provision and scale services safely.
              </p>
              <div className="text-[11px] font-semibold text-data-cyan">Key Output: Infrastructure as Code & Pipeline Configs</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-light text-data-cyan flex items-center justify-center text-xl mb-4">
                🛡️
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Human Deployment Approvals</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Production deployments cannot proceed autonomously. A designated delivery lead or architect must explicitly sign off on release packages.
              </p>
              <div className="text-[11px] font-semibold text-data-cyan">Key Output: Immutable Deployment Sign-off Audit Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workers in Action */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">
                Specialized AI Workers
              </div>
              <h2 className="text-3xl font-extrabold mb-4">
                AI Project Manager & AI DevOps Engineer
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                DELIVER pairs high-level delivery governance with technical deployment automation. The AI Project Manager oversees sprint flow while the AI DevOps Engineer executes releases.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>AI Project Manager:</strong> Analyzes task velocity, flags blocked PRs, and generates stakeholder weekly progress briefs.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>AI DevOps Engineer:</strong> Builds Docker containers, executes deployment pipelines, and monitors canary rollouts.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Approval Gate:</strong> Explicit human approval required for production promotion and database migrations.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Deployment Artifact */}
            <div className="bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  DELIVER Release Package · REL-2026-09
                </span>
                <span className="text-[10px] text-cyan-400">ENVIRONMENT: PRODUCTION</span>
              </div>
              <div className="text-slate-300 space-y-3">
                <div className="text-cyan-300 font-bold">Release Manifest: v2.4.0 (Webhook Engine & SLA Tracing)</div>
                <div className="text-slate-400 text-[11px]">
                  Included PRs: <code>#142 (Webhook Ingestion), #148 (Audit Trail)</code><br />
                  Quality Gate: <code>TR-8841 Passed (100% assertions)</code><br />
                  Target Cluster: <code>us-east-1.k8s.scaleonit.internal</code>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="text-emerald-400 font-bold mb-1">## Human Approval Verification:</div>
                  <div className="text-slate-400 text-[11px] leading-relaxed bg-black/40 p-3 rounded-lg">
                    ✓ Authorized by: Marcus Brody (Principal Delivery Director)<br />
                    ✓ Canary Health Check: 0.00% error rate across 1,000 requests<br />
                    ✓ Rollback Snapshot: Created at snap_998124<br />
                    🚀 Status: Live in Production
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Downstream Continuation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-pearl border border-border-base flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-data-cyan mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-lg font-bold text-midnight">Where does this context flow next?</h3>
              <p className="text-xs text-mid-text max-w-xl mt-1">
                Deployed releases flow into SERVE for live customer support, incident resolution, and SLA tracking with code traceability.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/serve')}
                className="bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                Explore SERVE →
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
