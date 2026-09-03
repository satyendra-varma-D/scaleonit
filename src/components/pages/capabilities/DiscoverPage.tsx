import PageLayout from '../../layout/PageLayout'
import GlowCard from '../../shared/GlowCard'

interface DiscoverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DiscoverPage({ onNavigate }: DiscoverPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="AI-Native Requirements & Business Analysis"
      heroTitle={
        <>
          Turn customer conversations into <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">implementation-ready requirements.</span>
        </>
      }
      heroDescription="Eliminate requirement ambiguity. Capture discovery sessions, generate structured BRDs/FRDs, synthesize user stories with acceptance criteria, and link business intent directly to downstream engineering."
      heroBadges={['Meeting Intelligence', 'Automated BRD/FRD', 'Scope Baseline Gating', 'AI Business Analyst']}
      ctaTitle="Eliminate requirement drift on your next project"
      ctaDescription="See how ONIT’s AI Business Analyst turns unstructured conversations into signed-off, implementation-ready specifications."
      ctaButtonText="Book Discovery Consultation"
    >
      {/* 01. The Problem / Narrative */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                The Discovery Bottleneck
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                The biggest risk in software delivery happens before a single line of code is written.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Discovery notes get trapped in unrecorded calls, vague Google Docs, and messy Slack threads. Business analysts spend weeks manually transcribing stakeholder meetings into specifications that are already outdated by sprint kickoff.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ONIT DISCOVER ingests conversation recordings, customer transcripts, and legacy documentation. The AI Business Analyst extracts functional requirements, detects scope gaps, and drafts complete BRDs and user stories with testable acceptance criteria under human review.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                The Requirements Pipeline
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Conversation Ingestion', desc: 'Auto-transcribes stakeholder interviews & extracts intent' },
                  { step: '02', title: 'Gap & Contradiction Detection', desc: 'Flags missing edge cases before scope sign-off' },
                  { step: '03', title: 'BRD / FRD Synthesis', desc: 'Generates structured specifications with traceability' },
                  { step: '04', title: 'Gherkin Acceptance Criteria', desc: 'Formats user stories ready for engineering & QA' },
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
              Discovery Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Comprehensive Discovery Capabilities
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              From stakeholder meeting ingestion to baseline freeze and scope change tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🎙️
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Meeting Intelligence</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Record and transcribe client discovery sessions. AI extracts business rules, technical constraints, and stakeholder commitments automatically.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Actionable Meeting Summary & Risk Log</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                📑
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Automated BRD/FRD Generation</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Generate production-ready Business & Functional Requirements Documents mapped to industry compliance standards and enterprise templates.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Structured BRD & Scope Baseline</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🧩
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">User Story & Gherkin Structuring</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Decompose requirements into INVEST-compliant user stories with Gherkin-formatted acceptance criteria (Given / When / Then) that directly feed QA test generation.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Sprint-ready backlog with verifiable acceptance tests</div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workforce Spotlight */}
      <section className="py-20 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                AI Business Analyst
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                The AI Business Analyst is a specialized digital specialist designed specifically for requirements engineering. It evaluates conversations, detects requirement gaps, clarifies contradictory constraints, and drafts comprehensive specifications.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Context Sources:</strong> Customer calls, past project archives, existing system documentation, CRM records.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Governance:</strong> Specifications require human lead sign-off before baseline lock.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Downstream Output:</strong> Synchronously seeds Architecture (ENGINEER) and Test Suites (QUALITY).</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live BRD Artifact */}
            <div className="bg-[#0D1117] text-white rounded-2xl border border-slate-800 p-7 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  DISCOVER Artifact · REQ-2026-884
                </span>
                <span className="text-[10px] font-bold text-[#FF5500] bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/30">
                  LOCKED BASELINE
                </span>
              </div>
              <div className="text-slate-200 space-y-3">
                <div className="text-[#FF5500] font-bold">Feature: Automated Multi-Currency Settlement</div>
                <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                  <span className="text-white font-bold">As a:</span> Payment Operations Lead<br />
                  <span className="text-white font-bold">I want:</span> Webhook events ingested idempotently within 200ms<br />
                  <span className="text-white font-bold">So that:</span> Downstream balances reflect immediately without duplicates.
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-white font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> Acceptance Criteria (Gherkin):
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                    Scenario: Duplicate Webhook Delivery<br />
                    Given an incoming webhook with idempotent_key &quot;evt_99812&quot;<br />
                    When the event has already been processed within 24h<br />
                    Then return HTTP 200 with &quot;duplicate_ignored&quot; status<br />
                    <span className="text-emerald-400 font-bold">And record zero duplicate ledger entries.</span>
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
                Approved requirements in DISCOVER automatically feed into ENGINEER for architecture review and QUALITY for automated test generation.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/engineer')}
                className="relative overflow-hidden bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
              >
                <span className="relative z-10">Explore ENGINEER →</span>
              </button>
              <button
                onClick={() => onNavigate('/platform/quality')}
                className="border border-slate-200 bg-white text-slate-900 text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg hover:bg-slate-50 hover:border-[#FF5500] hover:text-[#FF5500] transition-colors cursor-pointer shadow-2xs"
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
