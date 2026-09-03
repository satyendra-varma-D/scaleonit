import PageLayout from '../../layout/PageLayout'
import GlowCard from '../../shared/GlowCard'

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
          <span className="text-[#FF5500]">production-grade architecture and code.</span>
        </>
      }
      heroDescription="Bridge business requirements directly to Git repositories. AI Solution Architect and AI Engineering Agent synthesize technical baselines, API contracts, and quality pull requests under human policy control."
      heroBadges={['Technical Baseline Specs', 'AI Solution Architect', 'AI Engineering Agent', 'Automated Pull Requests']}
      ctaTitle="Accelerate engineering velocity with connected context"
      ctaDescription="Discover how ONIT maintains complete requirement-to-code traceability across repositories, pull requests, and architecture specs."
      ctaButtonText="Book Engineering Consultation"
    >
      {/* 01. The Engineering Narrative */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                The Context Gap in Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Developers waste 30%+ of their time deciphering vague tickets and disjointed architecture.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                When tickets lack business context, engineers are forced to make architectural assumptions that lead to rework, security vulnerabilities, and brittle integrations.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ONIT ENGINEER reads approved requirements directly from DISCOVER. The AI Solution Architect generates system topology and OpenAPI contracts, while the AI Engineering Agent drafts clean, test-covered code for human peer review.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                The Engineering Pipeline
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Architecture Ingestion', desc: 'Reads locked BRD stories & evaluates system dependencies' },
                  { step: '02', title: 'API Contract Synthesis', desc: 'Generates OpenAPI specs, database migrations, and schema models' },
                  { step: '03', title: 'Code Synthesis & Tests', desc: 'Produces idiomatic code with unit test suites' },
                  { step: '04', title: 'Governed Pull Request', desc: 'Opens Git PR with full requirement traceability for human review' },
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
              Engineering Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Comprehensive Engineering Capabilities
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              From automated system architecture diagrams to governed code generation and pull requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                📐
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Architecture Blueprinting</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Generate microservice topologies, database ERDs, and asynchronous message flows mapped to requirements.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: System Design Document & API Contracts</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                ⚡
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Autonomous Code Generation</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                AI Engineering Agent writes type-safe, production-ready code with complete unit test coverage.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Tested Git Pull Request</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🔒
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Human Approval Gates</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                AI cannot independently merge code into main branches. Human review is mandatory, supported by AI summary diffs.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Complete Peer Review & Audit Trail</div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workers in Action */}
      <section className="py-20 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                Specialized AI Workers
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                AI Solution Architect & AI Engineering Agent
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                ENGINEER deploys two collaborative digital specialists: the Architect ensures design integrity and security constraints, while the Engineering Agent writes idiomatic code.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">AI Solution Architect:</strong> Synthesizes schemas, API contracts, and infrastructure topologies from requirements.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">AI Engineering Agent:</strong> Implements features, generates tests, and opens traceable pull requests.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Context Ingestion:</strong> Connects directly to existing Git repositories and coding styleguides.</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live PR Artifact */}
            <div className="bg-[#0D1117] text-white rounded-2xl border border-slate-800 p-7 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  Pull Request #142 · scaleonit/settlement-engine
                </span>
                <span className="text-[10px] font-bold text-[#FF5500] bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/30">
                  READY FOR REVIEW
                </span>
              </div>
              <div className="text-slate-200 space-y-3">
                <div className="text-[#FF5500] font-bold">feat(webhooks): Implement idempotent settlement handler</div>
                <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                  Linked Requirement: <code className="text-[#FF5500]">REQ-2026-884 (DISCOVER)</code><br />
                  Architecture Spec: <code className="text-slate-200">ARCH-SETTLE-01.v2</code><br />
                  Files Changed: <code className="text-emerald-400">+342 / -18 (4 files)</code>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-white font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> Automated Verification Checks:
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                    ✓ Unit Tests: 18 passed (100% statement coverage)<br />
                    ✓ Security Scan: 0 vulnerabilities detected (SAST Passed)<br />
                    <span className="text-[#FF5500] font-bold">✓ Human Sign-off Pending: Senior Staff Architect</span>
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
                Synthesized pull requests in ENGINEER feed directly into QUALITY for automated test suite execution and DELIVER for release coordination.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/quality')}
                className="relative overflow-hidden bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
              >
                <span className="relative z-10">Explore QUALITY →</span>
              </button>
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="border border-slate-200 bg-white text-slate-900 text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg hover:bg-slate-50 hover:border-[#FF5500] hover:text-[#FF5500] transition-colors cursor-pointer shadow-2xs"
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
