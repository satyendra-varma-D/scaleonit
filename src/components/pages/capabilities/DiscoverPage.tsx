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
          Turn raw ideas into <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">approved BRD, FRD &amp; interactive wireframes.</span>
        </>
      }
      heroDescription="Ingest unstructured inputs from GROW, detect hidden requirement gaps, match pre-built domain templates or redraft custom BRDs with BA/PM sign-off, generate FRDs, and synthesize interactive UI wireframes with machine-ready prompts."
      heroBadges={['Raw Input Analysis', 'Domain Templates & Tech Stack', 'BA/PM Sign-Off', 'FRD & Wireframe Synthesis']}
      ctaTitle="Eliminate requirement ambiguity on your next project"
      ctaDescription="See how ScaleOnIt DISCOVER transforms unstructured customer conversations into approved BRDs, FRDs, and interactive UI wireframes."
      ctaButtonText="Book Discovery Consultation"
    >
      {/* 01. The Problem / Narrative */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
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
                Initial ideas arriving from sales and customer conversations are inherently unstructured and incomplete. Missing edge cases, vague requirements, and mismatched tech stacks lead to costly rework during engineering.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ScaleOnIt DISCOVER ingests unstructured notes, evaluates domain compatibility against pre-built use-case templates, redrafts comprehensive BRDs for BA/PM review, generates verifiable FRDs, and synthesizes interactive UI/UX wireframes with AI-optimized machine prompts before handoff to DELIVER.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center justify-between">
                <span>The 5-Step DISCOVER Pipeline</span>
                <span className="text-[10px] text-[#FF5500] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded font-mono font-bold">End-to-End</span>
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Unstructured Ingestion & Gap Analysis', desc: 'Ingests raw ideas from GROW and flags missing requirements and edge cases' },
                  { step: '02', title: 'Domain Template & Tech Stack Matching', desc: 'Evaluates fit with pre-built use-case templates or configures custom architecture' },
                  { step: '03', title: 'BRD Drafting & BA/PM Sign-Off', desc: 'Redrafts tailored Business Requirements Document under BA/PM and client review' },
                  { step: '04', title: 'Automated FRD Generation', desc: 'Synthesizes functional specifications, system rules, and Gherkin acceptance tests' },
                  { step: '05', title: 'UI/UX Wireframes & System Prompts', desc: 'Dedicated AI engineers machine .md specs and interactive UI/UX prototypes' },
                ].map((item) => (
                  <div key={item.step} className="p-3.5 bg-orange-50/40 rounded-xl border border-orange-200/60 flex items-start gap-3 shadow-2xs hover:border-[#FF5500] transition-colors">
                    <span className="text-xs font-mono font-extrabold text-[#FF5500] bg-white border border-orange-200 px-2.5 py-1 rounded-md shadow-2xs">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 font-mono">{item.title}</div>
                      <div className="text-[11px] text-slate-600 leading-tight mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Interactive Pipeline Architecture & Template Matching */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              Discovery Engine Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              How DISCOVER Eliminates Scope Ambiguity
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              A systematic pipeline that takes unstructured concept notes, verifies domain patterns, and outputs approved BRD, FRD, and UI wireframes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlowCard className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[4px_4px_0px_0px_#FF5500] hover:-translate-y-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                🧬
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Domain &amp; Stack Matcher</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Matches raw requirements against a library of pre-built domain templates (Fintech, SaaS, Healthcare, E-commerce). If matched, standard components fast-track setup. If custom, DISCOVER automatically redrafts a bespoke BRD.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Tailored Tech Stack &amp; Domain Alignment</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[4px_4px_0px_0px_#FF5500] hover:-translate-y-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                📑
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Dual BRD &amp; FRD Generator</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Redrafts comprehensive Business Requirements Documents reviewed by BA/PMs, then synthesizes full Functional Requirements Documents with deterministic system logic and acceptance criteria.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Verified BRD + FRD Signed-Off by Client</div>
            </GlowCard>

            <GlowCard className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[4px_4px_0px_0px_#FF5500] hover:-translate-y-1 transition-all duration-200 ease-out">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] flex items-center justify-center text-xl mb-4 border border-orange-200">
                📐
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Dedicated AI Prompt &amp; UI Wireframes</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                A dedicated AI prompts engineer formats structured .md files and system prompts that machine systems execute. It synthesizes interactive UI/UX wireframes so clients visualize and approve before coding starts.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#FF5500]">Key Output: Interactive Wireframes &amp; Machine-Ready Specs</div>
            </GlowCard>
          </div>

          {/* Client Deliverables Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-orange-50/50 border border-orange-200/80 shadow-[3px_3px_0px_0px_#0F172A]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] mb-1">
                  Complete Discovery Approval Package
                </div>
                <h4 className="text-lg font-extrabold text-slate-900">
                  What the Client Receives &amp; Approves Before DELIVER Begins:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Three unified artifacts eliminate scope creep and ensure 100% mutual alignment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 font-mono text-xs font-bold text-slate-800 shadow-2xs">
                  <span className="text-[#FF5500]">1.</span> Approved BRD
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 font-mono text-xs font-bold text-slate-800 shadow-2xs">
                  <span className="text-[#FF5500]">2.</span> Approved FRD
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 font-mono text-xs font-bold text-slate-800 shadow-2xs">
                  <span className="text-[#FF5500]">3.</span> Interactive UI Wireframes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Specialized AI Workforce Spotlight */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                Specialized AI Worker
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                AI Business Analyst &amp; Prompt Engineer
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                The AI Business Analyst ingests unstructured idea feeds, identifies unaddressed requirements, selects matching domain templates, and formats specifications into machine-readable markdown files and system prompts.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Unstructured Ingestion:</strong> Ingests GROW sales notes, client idea drafts, and interview recordings.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">BA/PM &amp; Client Governance:</strong> Specifications require human BA/PM review and client sign-off before baseline lock.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600"><strong className="text-slate-900">Machine Prompts &amp; Wireframes:</strong> Outputs structured .md specs that seed DELIVER (ONIT code engine) and QUALITY (test suites).</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/ai-workforce')}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
              >
                Inspect AI Workforce Specifications →
              </button>
            </div>

            {/* Simulated Live BRD/FRD/Wireframe Artifact */}
            <div className="bg-[#0D1117] text-white rounded-2xl border border-slate-800 p-7 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  DISCOVER Artifact · SPEC-2026-902
                </span>
                <span className="text-[10px] font-bold text-[#FF5500] bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/30">
                  SIGNED-OFF BASELINE
                </span>
              </div>
              <div className="text-slate-200 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Domain: FinTech Payment Gateway</span>
                  <span className="text-emerald-400">Template: Matched 92%</span>
                </div>
                <div className="text-[#FF5500] font-bold">Feature: Automated Multi-Currency Settlement</div>
                <div className="text-slate-300 text-[11px] leading-relaxed bg-[#090D12] p-3.5 rounded-xl border border-slate-800">
                  <span className="text-white font-bold">BRD Intent:</span> Ingest webhook events idempotently within 200ms without ledger duplicates.<br />
                  <span className="text-white font-bold">FRD Logic:</span> Idempotency key evaluation across 24h sliding window.<br />
                  <span className="text-white font-bold">UI Wireframe:</span> Settlement Transaction Monitor with real-time status pills.
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-white font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> System Spec Prompt Generated (.md):
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
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[3px_3px_0px_0px_#0F172A]">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] mb-1">
                Lifecycle Continuation
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Where does this context flow next?</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1 font-medium">
                Approved BRDs, FRDs, and interactive wireframes in DISCOVER automatically seed DELIVER (ONIT) for code implementation and QUALITY for automated test generation.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/deliver')}
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                Explore DELIVER →
              </button>
              <button
                onClick={() => onNavigate('/platform/quality')}
                className="border border-slate-300 bg-white text-slate-900 text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg hover:border-[#FF5500] hover:bg-orange-50/50 transition-colors cursor-pointer shadow-[2px_2px_0px_0px_#0F172A]"
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
