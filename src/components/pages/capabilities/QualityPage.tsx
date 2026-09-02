import PageLayout from '../../layout/PageLayout'

interface QualityPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function QualityPage({ onNavigate }: QualityPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: 'QUALITY' },
      ]}
      heroEyebrow="AI-Native Quality Engineering & Assurance"
      heroTitle={
        <>
          Test suites synthesized directly from <br className="hidden sm:inline" />
          <span className="text-data-cyan">acceptance criteria and code changes.</span>
        </>
      }
      heroDescription="Eliminate testing bottlenecks. AI QA Engineer automatically generates test strategies, unit/integration test suites, and regression matrices directly from user stories and pull requests."
      heroBadges={['Automated Test Synthesis', 'CI/CD Quality Gates', 'AI QA Engineer', 'Defect Root-Cause Tracing']}
      ctaTitle="Enforce release confidence with automated quality gates"
      ctaDescription="See how ONIT’s AI QA Engineer prevents defects from reaching production through continuous, context-aware testing."
      ctaButtonText="Book Quality Consultation"
    >
      {/* 01. Quality Narrative */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-data-cyan bg-cyan-light border border-cyan-200 px-3 py-1 rounded-full inline-block mb-4">
                The QA Bottleneck
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-4">
                Manual test authoring and delayed QA cycles delay sprints and introduce regression bugs.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                Traditional QA teams receive code drops with little explanation of edge cases or acceptance criteria. Writing test cases manually takes days, causing testing queues to back up before release.
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ONIT QUALITY connects test synthesis directly to requirements and code. The moment a user story is locked in DISCOVER, the AI QA Engineer synthesizes the test matrix. When code is pushed in ENGINEER, automated tests execute immediately.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Continuous Quality Pipeline
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Test Strategy Synthesis', desc: 'Generates test cases from DISCOVER acceptance criteria' },
                  { step: '02', title: 'Automated Test Execution', desc: 'Runs unit, integration, and E2E suites on every pull request' },
                  { step: '03', title: 'Defect Analysis & Root-Cause', desc: 'Identifies regressions and traces failures back to code lines' },
                  { step: '04', title: 'Release Gate Sign-off', desc: 'Enforces quality threshold policies before production deployment' },
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
              Comprehensive Quality Assurance Capabilities
            </h2>
            <p className="text-sm text-mid-text max-w-xl mx-auto">
              Automated testing across unit, integration, API contract, and regression layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-light text-data-cyan flex items-center justify-center text-xl mb-4">
                🧪
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Automated Test Case Synthesis</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Translates Gherkin acceptance criteria into executable Jest, Playwright, or Cypress test scripts without manual writing.
              </p>
              <div className="text-[11px] font-semibold text-data-cyan">Key Output: Comprehensive Executable Test Suites</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-light text-data-cyan flex items-center justify-center text-xl mb-4">
                📊
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Regression & Defect Root-Cause</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                When a test fails, ONIT analyzes the stack trace, recent commits, and requirements to pinpoint the exact defect origin.
              </p>
              <div className="text-[11px] font-semibold text-data-cyan">Key Output: Automated Defect Reports & Remediation Hints</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-light text-data-cyan flex items-center justify-center text-xl mb-4">
                🚦
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">CI/CD Quality Gates</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Enforces strict release policies: code coverage thresholds, zero critical vulnerabilities, and mandatory sign-offs before deployment.
              </p>
              <div className="text-[11px] font-semibold text-data-cyan">Key Output: Verifiable Quality Gate Audit Records</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Worker Spotlight */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold mb-4">
                AI QA Engineer
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The AI QA Engineer is designed to validate delivery against initial business intent. It reads user story specifications, analyzes code changes in pull requests, and generates automated validation suites.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Context Sources:</strong> User stories, acceptance criteria, OpenAPI contracts, Git diffs, historical defect logs.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Tools:</strong> Test runner interfaces, static analysis, coverage analyzers, regression matrix engines.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Human Gate:</strong> QA Lead sign-off required for production release approvals.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Test Report Artifact */}
            <div className="bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  QUALITY Test Execution · TR-8841
                </span>
                <span className="text-[10px] text-emerald-400">STATUS: PASSED (100%)</span>
              </div>
              <div className="text-slate-300 space-y-3">
                <div className="text-cyan-300 font-bold">Suite: Webhook Ingestion Integration Tests (US-001)</div>
                <div className="text-slate-400 text-[11px]">
                  Target: <code>feature/webhook-ingestion-us001</code><br />
                  Executed: <code>18 test cases across 3 scenarios</code><br />
                  Duration: <code>1.42s · 0 flakiness detected</code>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="text-cyan-400 font-bold mb-1">## Quality Gate Verdict:</div>
                  <div className="text-slate-400 text-[11px] leading-relaxed bg-black/40 p-3 rounded-lg">
                    ✓ All 18 assertion tests passed<br />
                    ✓ Zero memory leaks detected under 500 req/s load<br />
                    ✓ Gherkin US-001 acceptance criteria satisfied<br />
                    🛡️ Release Gate: Eligible for DELIVER deployment
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
              <h3 className="text-lg font-bold text-midnight">Next Step in the SDLC</h3>
              <p className="text-xs text-mid-text max-w-xl mt-1">
                Validated quality reports flow into DELIVER for release coordination and production deployment under human governance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="bg-data-cyan text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-cyan-700 transition-colors cursor-pointer"
              >
                Explore DELIVER →
              </button>
              <button
                onClick={() => onNavigate('/platform/serve')}
                className="border border-border-base text-midnight text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-white transition-colors cursor-pointer"
              >
                Explore SERVE →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
