import PageLayout from '../../layout/PageLayout'

interface EngineerPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function EngineerPage({ onNavigate }: EngineerPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="AI-Native Architecture & Software Engineering"
      heroTitle={
        <>
          Translate approved requirements into <br className="hidden sm:inline" />
          <span className="text-[#C53678]">production-grade architecture and code.</span>
        </>
      }
      heroDescription="Bridge business requirements directly to Git repositories. AI Solution Architect and AI Engineering Agent synthesize technical baselines, API contracts, and quality pull requests under human policy control."
      heroBadges={['Technical Baseline Specs', 'AI Solution Architect', 'AI Engineering Agent', 'Automated Pull Requests']}
      ctaTitle="Accelerate engineering velocity with connected context"
      ctaDescription="Discover how ONIT maintains complete requirement-to-code traceability across repositories, pull requests, and architecture specs."
      ctaButtonText="Book Engineering Consultation"
    >
      {/* 01. The Engineering Narrative */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The Context Gap in Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
                Developers waste 30%+ of their time deciphering vague tickets and disjointed architecture.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                When tickets lack business context, engineers are forced to make architectural assumptions that lead to rework, security vulnerabilities, and brittle integrations.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed">
                ONIT ENGINEER reads approved requirements directly from DISCOVER. The AI Solution Architect generates system topology and OpenAPI contracts, while the AI Engineering Agent drafts clean, test-covered code for human peer review.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-4">
                The Engineering Pipeline
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Architecture Ingestion', desc: 'Reads locked BRD stories & evaluates system dependencies' },
                  { step: '02', title: 'API Contract Synthesis', desc: 'Generates OpenAPI specs, database migrations, and schema models' },
                  { step: '03', title: 'Code Synthesis & Tests', desc: 'Produces idiomatic code with unit test suites' },
                  { step: '04', title: 'Governed Pull Request', desc: 'Opens Git PR with full requirement traceability for human review' },
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
              Comprehensive Engineering Capabilities
            </h2>
            <p className="text-sm text-[#5A4E68] max-w-xl mx-auto">
              From automated system architecture diagrams to governed code generation and pull requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF4F2] text-[#FF5841] flex items-center justify-center text-xl mb-4 border border-[#FF5841]/20">
                📐
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Architecture Blueprinting</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Generate microservice topologies, database ERDs, and asynchronous message flows mapped to requirements.
              </p>
              <div className="text-[11px] font-bold text-[#FF5841]">Key Output: System Design Document & API Contracts</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF2F7] text-[#C53678] flex items-center justify-center text-xl mb-4 border border-[#C53678]/20">
                ⚡
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Autonomous Code Generation</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                AI Engineering Agent writes type-safe, production-ready code with complete unit test coverage.
              </p>
              <div className="text-[11px] font-bold text-[#C53678]">Key Output: Tested Git Pull Request</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F3F8] text-[#3B1A54] flex items-center justify-center text-xl mb-4 border border-[#3B1A54]/20">
                🔒
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Human Approval Gates</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                AI cannot independently merge code into main branches. Human review is mandatory, supported by AI summary diffs.
              </p>
              <div className="text-[11px] font-bold text-[#3B1A54]">Key Output: Complete Peer Review & Audit Trail</div>
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
                AI Solution Architect & AI Engineering Agent
              </h2>
              <p className="text-sm text-[#5A4E68] leading-relaxed mb-6">
                ENGINEER deploys two collaborative digital specialists: the Architect ensures design integrity and security constraints, while the Engineering Agent writes idiomatic code.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5841] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">AI Solution Architect:</strong> Synthesizes schemas, API contracts, and infrastructure topologies from requirements.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C53678] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">AI Engineering Agent:</strong> Implements features, generates tests, and opens traceable pull requests.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B1A54] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Context Ingestion:</strong> Connects directly to existing Git repositories and coding styleguides.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live PR Artifact */}
            <div className="bg-[#FAFAFC] rounded-3xl border border-[#EAE6F0] p-7 shadow-lg font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6F0] text-[#5A4E68] mb-4">
                <span className="flex items-center gap-2 font-bold text-[#1B0A2A]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5841] animate-pulse" />
                  Pull Request #142 · scaleonit/settlement-engine
                </span>
                <span className="text-[10px] font-bold text-[#C53678] bg-[#FDF2F7] px-2 py-0.5 rounded-md border border-[#C53678]/30">
                  READY FOR REVIEW
                </span>
              </div>
              <div className="text-[#1B0A2A] space-y-3">
                <div className="text-[#C53678] font-bold">feat(webhooks): Implement idempotent settlement handler</div>
                <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                  Linked Requirement: <code>REQ-2026-884 (DISCOVER)</code><br />
                  Architecture Spec: <code>ARCH-SETTLE-01.v2</code><br />
                  Files Changed: <code>+342 / -18 (4 files)</code>
                </div>
                <div className="pt-2 border-t border-[#EAE6F0]">
                  <div className="text-[#1B0A2A] font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#FF5841]">✓</span> Automated Verification Checks:
                  </div>
                  <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                    ✓ Unit Tests: 18 passed (100% statement coverage)<br />
                    ✓ Security Scan: 0 vulnerabilities detected (SAST Passed)<br />
                    <span className="text-[#C53678] font-bold">✓ Human Sign-off Pending: Senior Staff Architect</span>
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
                Synthesized pull requests in ENGINEER feed directly into QUALITY for automated test suite execution and DELIVER for release coordination.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/quality')}
                className="bg-[#C53678] hover:bg-[#A92661] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#C53678]/25"
              >
                Explore QUALITY →
              </button>
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="border border-[#EAE6F0] bg-white text-[#1B0A2A] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#FDF2F7] hover:border-[#C53678]/30 hover:text-[#C53678] transition-colors cursor-pointer"
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
