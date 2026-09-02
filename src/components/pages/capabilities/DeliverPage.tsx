import PageLayout from '../../layout/PageLayout'

interface DeliverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverPage({ onNavigate }: DeliverPageProps) {
  const sdlcStages = [
    {
      step: '01',
      title: 'Prompt & Requirement Ingestion',
      category: 'REQUIREMENTS INTAKE',
      desc: 'Users provide goals via conversational prompts or upload raw requirement documents (PDFs, Word, Slack/meeting notes).',
      detail: 'Our intelligent parser analyzes domain concepts, detects missing constraints, and routes requirements into industry-tailored module templates.',
      icon: '📥',
      badge: 'Prompt / File Upload',
    },
    {
      step: '02',
      title: 'Industry BRD Synthesis & Dual Approval',
      category: 'BUSINESS REQUIREMENTS',
      desc: 'Generates standardized Business Requirement Documents (BRDs) loaded with pre-configured industry & software modules.',
      detail: 'Reviewed and confirmed through a formal governance checkpoint by both PM/BA leads and the client before proceeding.',
      icon: '📑',
      badge: 'PM + BA + Client Gate',
    },
    {
      step: '03',
      title: 'Fine-Tuned FRD Generation & Client Sign-Off',
      category: 'FUNCTIONAL SPECIFICATIONS',
      desc: 'Specialized, fine-tuned generators convert approved BRDs into structured, high-fidelity Functional Requirement Documents (FRDs).',
      detail: 'FRDs outline exact schemas, API contracts, workflows, and edge cases, dispatched directly to the customer for formal sign-off.',
      icon: '📐',
      badge: 'Customer Approved FRD',
    },
    {
      step: '04',
      title: 'VS Code Local Ollama Multi-Agent Dev',
      category: 'AUTONOMOUS ENGINEERING',
      desc: 'Builds UI & UX components directly in VS Code using local Ollama-powered agents tuned to the chosen tech stack.',
      detail: 'Agents write clean React/Vue, Tailwind styling, state stores, and backend routes offline or in secure local environments.',
      icon: '💻',
      badge: 'Local Ollama Agents',
    },
    {
      step: '05',
      title: 'Staging Deployment & Customer Iteration Loop',
      category: 'PREVIEW & FEEDBACK',
      desc: 'Deploys functional prototypes to preview staging environments for immediate customer walkthrough and live feedback.',
      detail: 'Feedback and change requests are automatically parsed and cycled back through the local agent swarm for rapid iteration.',
      icon: '🔄',
      badge: 'Live Staging Loop',
    },
    {
      step: '06',
      title: 'Cloud DB, CI/CD & Automated Playwright QA',
      category: 'VERIFICATION & DEPLOYMENT',
      desc: 'Connects cloud databases, environments, and CI/CD pipelines as per customer architecture, then generates full Playwright test suites.',
      detail: 'Autonomous end-to-end Playwright tests execute every user flow. Only when 100% assertions pass is software deployed to production.',
      icon: '🛡️',
      badge: 'Playwright & Cloud Release',
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="The Full SDLC Operating Engine · From Idea to Production"
      heroTitle={
        <>
          Turn requirements into production software{' '}
          <span className="text-[#C53678] block">with end-to-end governed intelligence.</span>
        </>
      }
      heroDescription="ONIT automates the entire software delivery lifecycle. Ingest user prompts or requirement documents, generate industry-specific BRDs and fine-tuned FRDs with client approval gates, build UI/UX in VS Code using local Ollama agents, iterate in staging, connect cloud DBs, run automated Playwright test suites, and deploy safely to production."
      heroBadges={[
        'Prompt & Doc Upload',
        'Industry BRD & FRD Gates',
        'VS Code Local Ollama Agents',
        'Cloud DB & CI/CD',
        'Playwright QA Testing',
        'Governed Release',
      ]}
      ctaTitle="Accelerate your software delivery from idea to production"
      ctaDescription="Experience the autonomous SDLC platform that combines local AI development with enterprise-grade governance and automated testing."
      ctaButtonText="Book ONIT SDLC Consultation"
    >
      {/* 01. The Complete SDLC Vision Narrative */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The ONIT SDLC Paradigm
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
                From simple prompts and requirement files to fully verified cloud production.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                Traditional software delivery breaks down at the seams—ambiguous client specs lead to flawed functional documents, disconnects between design and code, and untested edge cases reaching deployment.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                <strong className="text-[#1B0A2A]">ONIT</strong> unites the entire SDLC into a single governed pipeline: we ingest your raw prompts or requirement files, generate industry-templated BRDs, synthesize fine-tuned FRDs with dual approval gates, code the UI/UX using local Ollama agents in VS Code, iterate through staging preview links, and enforce comprehensive Playwright end-to-end test suites before touching production.
              </p>
              <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F7] text-[#C53678] font-black flex items-center justify-center text-lg shrink-0">
                  🎯
                </div>
                <div className="text-xs text-[#5A4E68]">
                  <strong className="text-[#1B0A2A]">Core Principle:</strong> Every milestone requires explicit verification—no code is deployed without client FRD sign-off and 100% Playwright test pass rates.
                </div>
              </div>
            </div>

            {/* Architecture Flow Diagram Box */}
            <div className="p-8 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6F0] mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5A4E68]">
                  Autonomous SDLC Lifecycle
                </span>
                <span className="text-[10px] font-extrabold text-[#C53678] bg-[#FDF2F7] px-2.5 py-1 rounded-full border border-[#C53678]/25">
                  Idea → Production
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Input & BRD Ingestion', sub: 'Prompts & File Upload → Industry BRD with pre-built domain modules' },
                  { step: '02', title: 'Dual Governance Gate', sub: 'PM & BA verification + Client sign-off on BRD & FRD' },
                  { step: '03', title: 'Local AI Code Generation', sub: 'VS Code multi-agent build via stack-tuned Ollama models' },
                  { step: '04', title: 'Staging Review & Iteration', sub: 'Interactive preview link with live feedback capture' },
                  { step: '05', title: 'Cloud Infra & Playwright QA', sub: 'DB & CI/CD connection + automated E2E test verification' },
                  { step: '06', title: 'Governed Delivery', sub: 'Zero-defect audited production deployment' },
                ].map((item) => (
                  <div key={item.step} className="p-3.5 bg-white rounded-2xl border border-[#EAE6F0] flex items-center gap-3.5 shadow-2xs hover:border-[#C53678]/30 transition-colors">
                    <span className="text-xs font-mono font-black text-[#C53678] bg-[#FDF2F7] px-2.5 py-1 rounded-lg border border-[#C53678]/25">
                      {item.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-[#1B0A2A]">{item.title}</div>
                      <div className="text-[11px] text-[#5A4E68] truncate mt-0.5">{item.sub}</div>
                    </div>
                    <span className="text-xs text-[#22C55E]">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The 6-Stage Deep Dive */}
      <section className="py-24 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Step-by-Step Pipeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
              How ONIT Delivers From Concept to Production
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E68]">
              A continuous, governed delivery pipeline engineered for enterprises that demand high velocity without sacrificing architectural rigor or security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdlcStages.map((stage) => (
              <div
                key={stage.step}
                className="p-7 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm hover:border-[#C53678]/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      {stage.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FDF2F7] text-[#C53678] border border-[#C53678]/25">
                      {stage.badge}
                    </span>
                  </div>
                  <div className="text-[10px] font-extrabold tracking-widest text-[#FF5841] uppercase mb-1">
                    Stage {stage.step} · {stage.category}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1B0A2A] mb-2 group-hover:text-[#C53678] transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#5A4E68] leading-relaxed mb-3">
                    {stage.desc}
                  </p>
                  <p className="text-[11px] text-[#5A4E68]/80 leading-relaxed bg-[#FAFAFC] p-3 rounded-xl border border-[#EAE6F0]">
                    {stage.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Interactive Technology & Multi-Agent Architecture */}
      <section className="py-20 bg-white border-y border-[#EAE6F0] text-[#1B0A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Local-First & Tech Stack Tuned
              </div>
              <h2 className="text-3xl font-extrabold text-[#1B0A2A] mb-4">
                Local Ollama AI Agents In VS Code
              </h2>
              <p className="text-sm text-[#5A4E68] leading-relaxed mb-6">
                Unlike generic cloud chatbots, ONIT deploys specialized multi-agent systems using local Ollama models fine-tuned to your chosen tech stack (React, Next.js, Node, Python, Java, PostgreSQL).
              </p>
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5841] mt-1.5 shrink-0" />
                  <div className="text-xs text-[#5A4E68]">
                    <strong className="text-[#1B0A2A]">Stack-Specific Local Models:</strong> Runs inside VS Code workspace with full repository context, respecting design systems, type schemas, and existing architecture.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C53678] mt-1.5 shrink-0" />
                  <div className="text-xs text-[#5A4E68]">
                    <strong className="text-[#1B0A2A]">Interactive Staging Previews:</strong> Instant preview deployment links enable customers to click through live workflows and provide early feedback.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B1A54] mt-1.5 shrink-0" />
                  <div className="text-xs text-[#5A4E68]">
                    <strong className="text-[#1B0A2A]">Automated Playwright QA Suites:</strong> Test cases are automatically generated directly from the signed-off FRD and executed via Playwright headless browsers before cloud promotion.
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/architecture')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
              >
                Inspect Ecosystem Architecture & Data Flow →
              </button>
            </div>

            {/* Live Terminal / Execution Inspector Simulation */}
            <div className="bg-[#1B0A2A] text-white rounded-3xl border border-[#3B1A54] p-7 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/60 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  ONIT Delivery Engine · Execution Pipeline
                </span>
                <span className="text-[10px] font-bold text-[#FF5841] bg-[#FF5841]/20 px-2 py-0.5 rounded-md border border-[#FF5841]/30">
                  LIVE PIPELINE
                </span>
              </div>
              <div className="space-y-3">
                <div className="text-[#FF5841] font-bold">1. Ingestion & Document Synthesis</div>
                <div className="text-white/80 text-[11px] leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  <code>[INGEST]</code> Parsed prompt + 2 requirement PDFs (Fintech Module)<br />
                  <code>[BRD-GEN]</code> BRD v1.0 created with 14 functional modules<br />
                  <code>[GATE 1]</code> <span className="text-[#22C55E]">✓ Signed off by PM, BA & Client</span><br />
                  <code>[FRD-GEN]</code> FRD v1.0 fine-tuned spec generated<br />
                  <code>[GATE 2]</code> <span className="text-[#22C55E]">✓ Client FRD Formal Sign-Off</span>
                </div>

                <div className="text-[#C53678] font-bold pt-2">2. VS Code Local Multi-Agent Build</div>
                <div className="text-white/80 text-[11px] leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  <code>[AGENT-UI]</code> Local Ollama (qwen2.5-coder / deepseek-r1) generating UI/UX components in VS Code<br />
                  <code>[STAGING]</code> Deployed to preview-env-8841.scaleonit.app<br />
                  <code>[FEEDBACK]</code> Customer verified design system & form flows
                </div>

                <div className="text-[#22C55E] font-bold pt-2">3. Cloud DB, CI/CD & Playwright Verification</div>
                <div className="text-white/80 text-[11px] leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  <code>[INFRA]</code> PostgreSQL connected, migrations applied, CI/CD synced<br />
                  <code>[TESTS]</code> 48 Playwright E2E test cases synthesized from FRD<br />
                  <code>[RESULT]</code> <span className="text-[#22C55E]">48/48 Passed (0 regressions, 100% assertions)</span><br />
                  <span className="text-[#FF5841] font-bold">🚀 Status: Ready for Production Release</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Downstream Lifecycle Continuation */}
      <section className="py-20 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#C53678] mb-1">
                Ecosystem Continuation
              </div>
              <h3 className="text-xl font-extrabold text-[#1B0A2A]">Where does this context flow next?</h3>
              <p className="text-xs sm:text-sm text-[#5A4E68] max-w-xl mt-1">
                Deployed applications flow seamlessly into SERVE for live customer support, automated ticket-to-code traceability, and continuous SLA monitoring.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/serve')}
                className="bg-[#C53678] hover:bg-[#A92661] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#C53678]/25"
              >
                Explore SERVE →
              </button>
              <button
                onClick={() => onNavigate('/platform')}
                className="border border-[#EAE6F0] bg-white text-[#1B0A2A] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#FDF2F7] hover:border-[#C53678]/30 hover:text-[#C53678] transition-colors cursor-pointer"
              >
                Platform Hub →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

