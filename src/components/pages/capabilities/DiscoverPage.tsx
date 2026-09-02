import PageLayout from '../../layout/PageLayout'

interface DiscoverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DiscoverPage({ onNavigate }: DiscoverPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: 'DISCOVER' },
      ]}
      heroEyebrow="AI-Native Requirements & Business Analysis"
      heroTitle={
        <>
          Turn customer conversations into <br className="hidden sm:inline" />
          <span className="text-onit">implementation-ready requirements.</span>
        </>
      }
      heroDescription="Eliminate requirement ambiguity. Capture discovery sessions, generate structured BRDs/FRDs, synthesize user stories with acceptance criteria, and link business intent directly to downstream engineering."
      heroBadges={['Meeting Intelligence', 'Automated BRD/FRD', 'Scope Baseline Gating', 'AI Business Analyst']}
      ctaTitle="Eliminate requirement drift on your next project"
      ctaDescription="See how ONIT’s AI Business Analyst turns unstructured conversations into signed-off, implementation-ready specifications."
      ctaButtonText="Book Discovery Consultation"
    >
      {/* 01. The Problem / Narrative */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-onit bg-onit-light border border-blue-200 px-3 py-1 rounded-full inline-block mb-4">
                The Discovery Bottleneck
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-4">
                The biggest risk in software delivery happens before a single line of code is written.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                Discovery notes get trapped in unrecorded calls, vague Google Docs, and messy Slack threads. Business analysts spend weeks manually transcribing stakeholder meetings into specifications that are already outdated by sprint kickoff.
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ONIT DISCOVER establishes a continuous requirements engine. Unstructured meeting transcripts are analyzed for functional requirements, edge cases, system constraints, and acceptance criteria — ready for PM and client sign-off.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Continuous Discovery Lifecycle
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Conversation Capture', desc: 'Audio/transcripts ingested from stakeholder calls & workshops' },
                  { step: '02', title: 'Entity & Constraint Extraction', desc: 'AI extracts business rules, user personas, and data models' },
                  { step: '03', title: 'Artifact Synthesis', desc: 'Drafts comprehensive BRD, FRD, and User Story specifications' },
                  { step: '04', title: 'Human Review & Baseline', desc: 'PM reviews, adjusts, and locks scope with client approval' },
                ].map((item) => (
                  <div key={item.step} className="p-3.5 bg-white rounded-xl border border-border-base flex items-start gap-3">
                    <span className="text-xs font-bold text-onit bg-onit-light px-2 py-0.5 rounded-md">
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

      {/* 02. Core Capabilities & Workflows */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-3">
              Comprehensive Discovery Capabilities
            </h2>
            <p className="text-sm text-mid-text max-w-xl mx-auto">
              Everything required to go from unstructured client vision to signed-off technical baseline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-onit-light text-onit flex items-center justify-center text-xl mb-4">
                🎙️
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Meeting Intelligence</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Ingest discovery conversations directly from video calls, notes, or uploaded transcripts. Automatically identify key decisions, ambiguities, and action items.
              </p>
              <div className="text-[11px] font-semibold text-onit">Key Output: Structured Meeting Summary & Decision Matrix</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-onit-light text-onit flex items-center justify-center text-xl mb-4">
                📄
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Automated BRD / FRD Authoring</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Synthesize formal Business Requirements Documents (BRD) and Functional Requirements Documents (FRD) formatted to enterprise standards with full traceability.
              </p>
              <div className="text-[11px] font-semibold text-onit">Key Output: Multi-section BRD ready for stakeholder sign-off</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-onit-light text-onit flex items-center justify-center text-xl mb-4">
                🎯
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">User Stories & Acceptance Criteria</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Decompose requirements into INVEST-compliant user stories with Gherkin-formatted acceptance criteria (Given / When / Then) that directly feed QA test generation.
              </p>
              <div className="text-[11px] font-semibold text-onit">Key Output: Sprint-ready backlog with verifiable acceptance tests</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workforce Spotlight */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold mb-4">
                AI Business Analyst
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The AI Business Analyst is a specialized digital specialist designed specifically for requirements engineering. It evaluates conversations, detects requirement gaps, clarifies contradictory constraints, and drafts comprehensive specifications.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Context Sources:</strong> Customer calls, past project archives, existing system documentation, CRM records.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Tools:</strong> Meeting intelligence parser, knowledge base search, document synthesizer, requirements schema generator.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Human Governance:</strong> Mandatory PM review and client sign-off required before requirements baseline is locked.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                View all 8 AI Workers in the Workforce Directory →
              </button>
            </div>

            {/* Simulated Live Artifact Preview */}
            <div className="bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  DISCOVER Artifact · US-001
                </span>
                <span className="text-[10px] text-slate-500">STATE: PENDING_PM_APPROVAL</span>
              </div>
              <div className="text-slate-300 space-y-3">
                <div className="text-cyan-400 font-bold"># Story: Real-Time Payment Webhook Ingestion</div>
                <div>
                  <span className="text-slate-500">As a:</span> Payment Operations Lead<br />
                  <span className="text-slate-500">I want:</span> Webhook events ingested idempotently within 200ms<br />
                  <span className="text-slate-500">So that:</span> Downstream balances reflect immediately without duplicates.
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="text-emerald-400 font-bold mb-1">## Acceptance Criteria (Gherkin):</div>
                  <div className="text-slate-400 text-[11px] leading-relaxed bg-black/40 p-3 rounded-lg">
                    Scenario: Duplicate Webhook Delivery<br />
                    Given an incoming webhook with idempotent_key &quot;evt_99812&quot;<br />
                    When the event has already been processed within 24h<br />
                    Then return HTTP 200 with &quot;duplicate_ignored&quot; status<br />
                    And record zero duplicate ledger entries.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Downstream Lifecycle Connection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-pearl border border-border-base flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-onit mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-lg font-bold text-midnight">Where does this context flow next?</h3>
              <p className="text-xs text-mid-text max-w-xl mt-1">
                Approved requirements in DISCOVER automatically feed into ENGINEER for architecture review and QUALITY for automated test generation.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/engineer')}
                className="bg-onit text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-onit-hover transition-colors cursor-pointer"
              >
                Explore ENGINEER →
              </button>
              <button
                onClick={() => onNavigate('/platform/quality')}
                className="border border-border-base text-midnight text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-white transition-colors cursor-pointer"
              >
                Explore QUALITY →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
