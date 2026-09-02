import PageLayout from '../../layout/PageLayout'

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
          <span className="text-[#C53678]">implementation-ready requirements.</span>
        </>
      }
      heroDescription="Eliminate requirement ambiguity. Capture discovery sessions, generate structured BRDs/FRDs, synthesize user stories with acceptance criteria, and link business intent directly to downstream engineering."
      heroBadges={['Meeting Intelligence', 'Automated BRD/FRD', 'Scope Baseline Gating', 'AI Business Analyst']}
      ctaTitle="Eliminate requirement drift on your next project"
      ctaDescription="See how ONIT’s AI Business Analyst turns unstructured conversations into signed-off, implementation-ready specifications."
      ctaButtonText="Book Discovery Consultation"
    >
      {/* 01. The Problem / Narrative */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The Discovery Bottleneck
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
                The biggest risk in software delivery happens before a single line of code is written.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                Discovery notes get trapped in unrecorded calls, vague Google Docs, and messy Slack threads. Business analysts spend weeks manually transcribing stakeholder meetings into specifications that are already outdated by sprint kickoff.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed">
                ONIT DISCOVER ingests conversation recordings, customer transcripts, and legacy documentation. The AI Business Analyst extracts functional requirements, detects scope gaps, and drafts complete BRDs and user stories with testable acceptance criteria under human review.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-4">
                The Requirements Pipeline
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Conversation Ingestion', desc: 'Auto-transcribes stakeholder interviews & extracts intent' },
                  { step: '02', title: 'Gap & Contradiction Detection', desc: 'Flags missing edge cases before scope sign-off' },
                  { step: '03', title: 'BRD / FRD Synthesis', desc: 'Generates structured specifications with traceability' },
                  { step: '04', title: 'Gherkin Acceptance Criteria', desc: 'Formats user stories ready for engineering & QA' },
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
              Comprehensive Discovery Capabilities
            </h2>
            <p className="text-sm text-[#5A4E68] max-w-xl mx-auto">
              From stakeholder meeting ingestion to baseline freeze and scope change tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF4F2] text-[#FF5841] flex items-center justify-center text-xl mb-4 border border-[#FF5841]/20">
                🎙️
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Meeting Intelligence</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Record and transcribe client discovery sessions. AI extracts business rules, technical constraints, and stakeholder commitments automatically.
              </p>
              <div className="text-[11px] font-bold text-[#FF5841]">Key Output: Actionable Meeting Summary & Risk Log</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF2F7] text-[#C53678] flex items-center justify-center text-xl mb-4 border border-[#C53678]/20">
                📑
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Automated BRD/FRD Generation</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Generate production-ready Business & Functional Requirements Documents mapped to industry compliance standards and enterprise templates.
              </p>
              <div className="text-[11px] font-bold text-[#C53678]">Key Output: Structured BRD & Scope Baseline</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F3F8] text-[#3B1A54] flex items-center justify-center text-xl mb-4 border border-[#3B1A54]/20">
                🧩
              </div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">User Story & Gherkin Structuring</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Decompose requirements into INVEST-compliant user stories with Gherkin-formatted acceptance criteria (Given / When / Then) that directly feed QA test generation.
              </p>
              <div className="text-[11px] font-bold text-[#3B1A54]">Key Output: Sprint-ready backlog with verifiable acceptance tests</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workforce Spotlight */}
      <section className="py-20 bg-white border-y border-[#EAE6F0] text-[#1B0A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold text-[#1B0A2A] mb-4">
                AI Business Analyst
              </h2>
              <p className="text-sm text-[#5A4E68] leading-relaxed mb-6">
                The AI Business Analyst is a specialized digital specialist designed specifically for requirements engineering. It evaluates conversations, detects requirement gaps, clarifies contradictory constraints, and drafts comprehensive specifications.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5841] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Context Sources:</strong> Customer calls, past project archives, existing system documentation, CRM records.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C53678] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Governance:</strong> Specifications require human lead sign-off before baseline lock.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B1A54] mt-1.5" />
                  <div className="text-xs text-[#5A4E68]"><strong className="text-[#1B0A2A]">Downstream Output:</strong> Synchronously seeds Architecture (ENGINEER) and Test Suites (QUALITY).</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live BRD Artifact */}
            <div className="bg-[#FAFAFC] rounded-3xl border border-[#EAE6F0] p-7 shadow-lg font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6F0] text-[#5A4E68] mb-4">
                <span className="flex items-center gap-2 font-bold text-[#1B0A2A]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5841] animate-pulse" />
                  DISCOVER Artifact · REQ-2026-884
                </span>
                <span className="text-[10px] font-bold text-[#C53678] bg-[#FDF2F7] px-2 py-0.5 rounded-md border border-[#C53678]/30">
                  LOCKED BASELINE
                </span>
              </div>
              <div className="text-[#1B0A2A] space-y-3">
                <div className="text-[#C53678] font-bold">Feature: Automated Multi-Currency Settlement</div>
                <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                  <span className="text-[#1B0A2A] font-bold">As a:</span> Payment Operations Lead<br />
                  <span className="text-[#1B0A2A] font-bold">I want:</span> Webhook events ingested idempotently within 200ms<br />
                  <span className="text-[#1B0A2A] font-bold">So that:</span> Downstream balances reflect immediately without duplicates.
                </div>
                <div className="pt-2 border-t border-[#EAE6F0]">
                  <div className="text-[#1B0A2A] font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#FF5841]">✓</span> Acceptance Criteria (Gherkin):
                  </div>
                  <div className="text-[#5A4E68] text-[11px] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#EAE6F0]">
                    Scenario: Duplicate Webhook Delivery<br />
                    Given an incoming webhook with idempotent_key &quot;evt_99812&quot;<br />
                    When the event has already been processed within 24h<br />
                    Then return HTTP 200 with &quot;duplicate_ignored&quot; status<br />
                    <span className="text-[#C53678] font-bold">And record zero duplicate ledger entries.</span>
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
                Approved requirements in DISCOVER automatically feed into ENGINEER for architecture review and QUALITY for automated test generation.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/engineer')}
                className="bg-[#C53678] hover:bg-[#A92661] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#C53678]/25"
              >
                Explore ENGINEER →
              </button>
              <button
                onClick={() => onNavigate('/platform/quality')}
                className="border border-[#EAE6F0] bg-white text-[#1B0A2A] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#FDF2F7] hover:border-[#C53678]/30 hover:text-[#C53678] transition-colors cursor-pointer"
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
