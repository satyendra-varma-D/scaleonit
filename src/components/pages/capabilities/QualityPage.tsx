import PageLayout from '../../layout/PageLayout'
import GlowCard from '../../shared/GlowCard'

interface QualityPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function QualityPage({ onNavigate }: QualityPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="AI-Native Quality Assurance & Validation"
      heroTitle={
        <>
          Validate delivery against initial intent with <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">automated, context-aware testing.</span>
        </>
      }
      heroDescription="Close the validation loop between requirements and release. The AI QA Engineer synthesizes automated end-to-end tests from Gherkin stories, evaluates pull requests against security gates, and blocks regressions before deployment."
      heroBadges={['Automated Test Generation', 'AI QA Engineer', 'Coverage & Policy Gates', 'Continuous Regression Testing']}
      ctaTitle="Eliminate testing bottlenecks and production defects"
      ctaDescription="Discover how ONIT turns requirements directly into executable test suites and enforces unbreakable release quality gates."
      ctaButtonText="Book Quality Consultation"
    >
      {/* 01. Quality Narrative */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                The Testing Disconnect
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                QA teams write tests against code assumptions instead of original business intent.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                When tests are disconnected from requirements, software passes unit tests but fails in production because edge cases and business constraints were never codified into validation scripts.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ONIT QUALITY binds testing directly to the acceptance criteria established in DISCOVER. The AI QA Engineer writes automated Playwright, Jest, and integration test suites before code is merged.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                The Quality Gate Process
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Story Acceptance Criteria Ingestion', desc: 'Reads Gherkin scenarios directly from DISCOVER' },
                  { step: '02', title: 'Synthetic Test Synthesis', desc: 'Generates end-to-end Playwright and API assertions' },
                  { step: '03', title: 'Continuous PR Validation', desc: 'Runs regression tests in ephemeral sandbox environments' },
                  { step: '04', title: 'Release Gate Enactment', desc: 'Blocks releases that fail strict security and coverage thresholds' },
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs hover:border-[#FF5500] transition-colors">
                    <span className="text-xs font-mono font-extrabold text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-600 leading-tight mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Core Capabilities */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              Quality Assurance Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Comprehensive Quality & Testing Capabilities
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              From requirement-linked test synthesis to performance benchmarks and security regression scans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🧪
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Automated E2E Test Synthesis</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Generates robust browser automation suites that simulate real user behavior across critical conversion funnels.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Executable Playwright & Cypress Specs</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🛡️
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Security & Vulnerability Gates</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Evaluates code for SAST/DAST vulnerabilities, insecure dependencies, and secret leakage before PR approval.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Security Compliance Certification</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                📊
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Policy-Driven Release Gates</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Enforces strict release policies: code coverage thresholds, zero critical vulnerabilities, and mandatory sign-offs.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Verifiable Quality Gate Audit Records</div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Worker Spotlight */}
      <section className="py-20 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                AI QA Engineer
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                The AI QA Engineer is designed to validate delivery against initial business intent. It reads user story specifications, analyzes code changes in pull requests, and generates automated validation suites.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Context Sources:</strong> User stories, acceptance criteria, OpenAPI contracts, Git diffs, historical defect logs.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Capabilities:</strong> Unit tests, mock API servers, UI clickpaths, load testing scripts.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Zero Flakiness Rule:</strong> Heuristic retry analysis isolates actual regressions from environmental noise.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Test Run Artifact */}
            <div className="bg-[#0D1117] text-white rounded-2xl border border-slate-800 p-7 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  Test Execution Suite · TEST-SUITE-441
                </span>
                <span className="text-[10px] font-bold text-[#FF5500] bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/30">
                  ALL ASSERTIONS PASSED
                </span>
              </div>
              <div className="text-slate-200 space-y-3">
                <div className="text-[#FF5500] font-bold">Target PR #142 (Settlement Idempotency Validation)</div>
                <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                  Gherkin Coverage: <code>100% of REQ-2026-884 scenarios mapped</code><br />
                  Assertions Evaluated: <code>42 tests across 3 execution nodes</code><br />
                  Duration: <code>14.2s (Zero flakiness detected)</code>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-white font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> Quality Gate Clearance:
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                    ✓ Code Coverage: 94.2% statement (Threshold: 85%)<br />
                    ✓ Zero High/Critical Security Findings<br />
                    <span className="text-[#FF5500] font-bold">✓ Quality Gate Signed: Ready for DELIVER release gate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Downstream Lifecycle Connection */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#0F172A]">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Where does this context flow next?</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                Passed test suites in QUALITY unlock the release gates in DELIVER for scheduled deployments and canary rollouts.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="relative overflow-hidden bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
              >
                <span className="relative z-10">Explore DELIVER →</span>
              </button>
              <button
                onClick={() => onNavigate('/platform/serve')}
                className="border border-slate-200 bg-white text-slate-900 text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg hover:bg-slate-50 hover:border-[#FF5500] hover:text-[#FF5500] transition-colors cursor-pointer shadow-2xs"
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
