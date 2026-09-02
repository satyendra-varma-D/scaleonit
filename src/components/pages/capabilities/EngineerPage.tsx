import PageLayout from '../../layout/PageLayout'

interface EngineerPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function EngineerPage({ onNavigate }: EngineerPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: 'ENGINEER' },
      ]}
      heroEyebrow="AI-Native Architecture & Software Engineering"
      heroTitle={
        <>
          Translate approved requirements into <br className="hidden sm:inline" />
          <span className="text-ai-violet">production-grade architecture and code.</span>
        </>
      }
      heroDescription="Bridge business requirements directly to Git repositories. AI Solution Architect and AI Engineering Agent synthesize technical baselines, API contracts, and quality pull requests under human policy control."
      heroBadges={['Technical Baseline Specs', 'AI Solution Architect', 'AI Engineering Agent', 'Automated Pull Requests']}
      ctaTitle="Accelerate engineering velocity with connected context"
      ctaDescription="Discover how ONIT maintains complete requirement-to-code traceability across repositories, pull requests, and architecture specs."
      ctaButtonText="Book Engineering Consultation"
    >
      {/* 01. The Engineering Narrative */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-ai-violet bg-ai-light border border-violet-200 px-3 py-1 rounded-full inline-block mb-4">
                The Context Gap in Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-4">
                Developers waste 30%+ of their time deciphering vague tickets and disjointed architecture.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                When tickets lack business context, engineers are forced to make architectural assumptions that lead to rework, security vulnerabilities, and brittle integrations.
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ONIT ENGINEER injects full upstream context directly into the development workflow. Requirements, API contracts, data models, and architectural constraints are linked directly to generated code branches and pull requests.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Governed Engineering Pipeline
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Requirements Ingestion', desc: 'Ingests locked user stories & acceptance criteria from DISCOVER' },
                  { step: '02', title: 'Technical Architecture Synthesis', desc: 'AI Solution Architect generates data models, OpenAPI specs, and system designs' },
                  { step: '03', title: 'Feature Code Generation', desc: 'AI Engineering Agent generates implementation branches with full unit test coverage' },
                  { step: '04', title: 'Human Peer Review & Merge', desc: 'Engineers review code, inspect test reports, and approve pull requests' },
                ].map((item) => (
                  <div key={item.step} className="p-3.5 bg-white rounded-xl border border-border-base flex items-start gap-3">
                    <span className="text-xs font-bold text-ai-violet bg-ai-light px-2 py-0.5 rounded-md">
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
              Comprehensive Engineering Capabilities
            </h2>
            <p className="text-sm text-mid-text max-w-xl mx-auto">
              From system architecture design to policy-bounded code implementation and review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-ai-light text-ai-violet flex items-center justify-center text-xl mb-4">
                🏗️
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Architecture & System Design</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                Automatically generate OpenAPI contracts, database schemas, and microservice topology diagrams from approved functional requirements.
              </p>
              <div className="text-[11px] font-semibold text-ai-violet">Key Output: Validated Technical Baseline & API Specs</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-ai-light text-ai-violet flex items-center justify-center text-xl mb-4">
                💻
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Context-Aware Code Generation</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                AI Engineering Agent writes feature code strictly adhering to your team’s existing conventions, repository structure, and linting standards.
              </p>
              <div className="text-[11px] font-semibold text-ai-violet">Key Output: Clean Pull Requests with Unit Test Suites</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-base shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-ai-light text-ai-violet flex items-center justify-center text-xl mb-4">
                🛡️
              </div>
              <h3 className="text-base font-bold text-midnight mb-2">Policy-Bounded Merge Gates</h3>
              <p className="text-xs text-mid-text leading-relaxed mb-4">
                AI cannot independently merge code into main branches. Human review is mandatory, supported by AI summary diffs and security checks.
              </p>
              <div className="text-[11px] font-semibold text-ai-violet">Key Output: Complete Peer Review & Audit Trail</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workers in Action */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-violet-400 mb-2">
                Specialized AI Workers
              </div>
              <h2 className="text-3xl font-extrabold mb-4">
                AI Solution Architect & AI Engineering Agent
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                ENGINEER deploys two collaborative digital specialists: the Architect ensures design integrity and security constraints, while the Engineering Agent writes idiomatic code.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>AI Solution Architect:</strong> Synthesizes schemas, API contracts, and infrastructure topologies from requirements.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>AI Engineering Agent:</strong> Implements features, writes unit tests, and responds to review feedback.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5" />
                  <div className="text-xs text-slate-300"><strong>Human Gate:</strong> Senior engineering staff review all generated PRs prior to merge.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live PR Artifact */}
            <div className="bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  ENGINEER Pull Request · PR #142
                </span>
                <span className="text-[10px] text-emerald-400">CI PASSING (98.4% COVERAGE)</span>
              </div>
              <div className="text-slate-300 space-y-3">
                <div className="text-violet-300 font-bold">feat(webhook): Implement idempotent event receiver for US-001</div>
                <div className="text-slate-400 text-[11px]">
                  Branch: <code>feature/webhook-ingestion-us001</code><br />
                  Linked Requirement: <code>DISCOVER / US-001</code><br />
                  Changed Files: <code>4 files (+184 / -12)</code>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="text-violet-400 font-bold mb-1">## Verification & Quality Gates:</div>
                  <div className="text-slate-400 text-[11px] leading-relaxed bg-black/40 p-3 rounded-lg">
                    ✓ Unit tests: 18 passed, 0 failed<br />
                    ✓ Static Analysis: 0 security vulnerabilities<br />
                    ✓ OpenAPI Schema Conformance: 100% matched<br />
                    ⏳ Human Peer Review: Pending Tech Lead sign-off
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
              <div className="text-[10px] font-bold tracking-widest uppercase text-ai-violet mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-lg font-bold text-midnight">Next Step in the SDLC</h3>
              <p className="text-xs text-mid-text max-w-xl mt-1">
                Completed engineering PRs feed into QUALITY for automated regression testing and DELIVER for sprint milestone tracking.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/quality')}
                className="bg-ai-violet text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-violet-700 transition-colors cursor-pointer"
              >
                Explore QUALITY →
              </button>
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="border border-border-base text-midnight text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-white transition-colors cursor-pointer"
              >
                Explore DELIVER →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
