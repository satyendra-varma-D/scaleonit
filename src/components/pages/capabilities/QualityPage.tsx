import PageLayout from '../../layout/PageLayout'

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
          <span className="text-[#C53678]">automated, context-aware testing.</span>
        </>
      }
      heroDescription="Close the validation loop between requirements and release. The AI QA Engineer synthesizes automated end-to-end tests from Gherkin stories, evaluates pull requests against security gates, and blocks regressions before deployment."
      heroBadges={['Automated Test Generation', 'AI QA Engineer', 'Coverage & Policy Gates', 'Continuous Regression Testing']}
      ctaTitle="Eliminate testing bottlenecks and production defects"
      ctaDescription="Discover how ONIT turns requirements directly into executable test suites and enforces unbreakable release quality gates."
      ctaButtonText="Book Quality Consultation"
    >
      {/* 01. Quality Narrative */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The Testing Disconnect
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
                QA teams write tests against code assumptions instead of original business intent.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                When tests are disconnected from requirements, software passes unit tests but fails in production because edge cases and business constraints were never codified into validation scripts.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed">
                ONIT QUALITY binds testing directly to the acceptance criteria established in DISCOVER. The AI QA Engineer writes automated Playwright, Jest, and integration test suites before code is merged.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-4">
                The Quality Gate Process
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Story Acceptance Criteria Ingestion', desc: 'Reads Gherkin scenarios directly from DISCOVER' },
                  { step: '02', title: 'Synthetic Test Synthesis', desc: 'Generates end-to-end Playwright and API assertions' },
                  { step: '03', title: 'Continuous PR Validation', desc: 'Runs regression tests in ephemeral sandbox environments' },
                  { step: '04', title: 'Release Gate Enactment', desc: 'Blocks releases that fail strict security and coverage thresholds' },
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
              Comprehensive Quality & Testing Capabilities
            </h2>
            <p className="text-sm text-[#5A4E68] max-w-xl mx-auto">
              From requirement-linked test synthesis to performance benchmarks and security regression scans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF4F2] text-[#FF5841] flex items-center justify-center text-xl mb-4 border border-[#FF5841]/20">
                🧪
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Automated E2E Test Synthesis</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Generates robust browser automation suites that simulate real user behavior across critical conversion funnels.
              </p>
              <div className="text-[11px] font-bold text-[#FF5841]">Key Output: Executable Playwright & Cypress Specs</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF2F7] text-[#C53678] flex items-center justify-center text-xl mb-4 border border-[#C53678]/20">
                🛡️
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Security & Vulnerability Gates</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Evaluates code for SAST/DAST vulnerabilities, insecure dependencies, and secret leakage before PR approval.
              </p>
              <div className="text-[11px] font-bold text-[#C53678]">Key Output: Security Compliance Certification</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F3F8] text-[#3B1A54] flex items-center justify-center text-xl mb-4 border border-[#3B1A54]/20">
                📊
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Policy-Driven Release Gates</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Enforces strict release policies: code coverage thresholds, zero critical vulnerabilities, and mandatory sign-offs.
              </p>
              <div className="text-[11px] font-bold text-[#3B1A54]">Key Output: Verifiable Quality Gate Audit Records</div>
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
                AI QA Engineer
              </h2>
              <p className="text-sm text-[#5A4E68] leading-relaxed mb-6">
                The AI QA Engineer is designed to validate delivery against initial business intent. It reads user story specifications, analyzes code changes in pull requests, and generates automated validation suites.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5841] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Context Sources:</strong> User stories, acceptance criteria, OpenAPI contracts, Git diffs, historical defect logs.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C53678] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Capabilities:</strong> Unit tests, mock API servers, UI clickpaths, load testing scripts.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B1A54] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Zero Flakiness Rule:</strong> Heuristic retry analysis isolates actual regressions from environmental noise.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live Test Run Artifact */}
            <div className="bg-[#FAFAFC] rounded-3xl border border-[#EAE6F0] p-7 shadow-lg font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6F0] text-[#5A4E68] mb-4">
                <span className="flex items-center gap-2 font-bold text-[#1B0A2A]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5841] animate-pulse" />
                  Test Execution Suite · TEST-SUITE-441
                </span>
                <span className="text-[10px] font-bold text-[#C53678] bg-[#FDF2F7] px-2 py-0.5 rounded-md border border-[#C53678]/30">
                  ALL ASSERTIONS PASSED
                </span>
              </div>
              <div className="text-[#1B0A2A] space-y-3">
                <div className="text-[#C53678] font-bold">Target PR #142 (Settlement Idempotency Validation)</div>
                <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                  Gherkin Coverage: <code>100% of REQ-2026-884 scenarios mapped</code><br />
                  Assertions Evaluated: <code>42 tests across 3 execution nodes</code><br />
                  Duration: <code>14.2s (Zero flakiness detected)</code>
                </div>
                <div className="pt-2 border-t border-[#EAE6F0]">
                  <div className="text-[#1B0A2A] font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#FF5841]">✓</span> Quality Gate Clearance:
                  </div>
                  <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                    ✓ Code Coverage: 94.2% statement (Threshold: 85%)<br />
                    ✓ Zero High/Critical Security Findings<br />
                    <span className="text-[#C53678] font-bold">✓ Quality Gate Signed: Ready for DELIVER release gate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Downstream Lifecycle Connection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#C53678] mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-xl font-extrabold text-[#1B0A2A]">Where does this context flow next?</h3>
              <p className="text-xs sm:text-sm text-[#5A4E68] max-w-xl mt-1">
                Passed test suites in QUALITY unlock the release gates in DELIVER for scheduled deployments and canary rollouts.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="bg-[#C53678] hover:bg-[#A92661] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#C53678]/25"
              >
                Explore DELIVER →
              </button>
              <button
                onClick={() => onNavigate('/platform/serve')}
                className="border border-[#EAE6F0] bg-white text-[#1B0A2A] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#FDF2F7] hover:border-[#C53678]/30 hover:text-[#C53678] transition-colors cursor-pointer"
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
