import PageLayout from '../../layout/PageLayout'

interface DeliverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverPage({ onNavigate }: DeliverPageProps) {
  const sdlcStages = [
    {
      step: '01',
      title: 'Intelligent Intake & Requirements Ingestion',
      category: 'STAGE 01 · REQUIREMENTS DISCOVERY',
      desc: 'Capture vision through natural language prompts or upload existing specification documents, legacy codebases, and briefs.',
      detail: 'Our enterprise ingestion engine parses multi-format inputs, maps domain dependencies, and standardizes scope against pre-configured industry templates.',
      icon: '📥',
      badge: 'Multi-Format Ingestion',
    },
    {
      step: '02',
      title: 'Industry BRD Synthesis & Multi-Stakeholder Sign-Off',
      category: 'STAGE 02 · BUSINESS SPECIFICATION',
      desc: 'Instantly generate comprehensive Business Requirement Documents (BRD) pre-populated with industry-specific architectural modules.',
      detail: 'Formal review and authorization gate requiring dual consensus between Product Leadership, Business Analysts, and Client Stakeholders.',
      icon: '📑',
      badge: 'Tri-Party Governance Gate',
    },
    {
      step: '03',
      title: 'Fine-Tuned FRD Generation & Client Authorization',
      category: 'STAGE 03 · FUNCTIONAL BLUEPRINT',
      desc: 'Transform verified business requirements into precision Functional Requirement Documents (FRD) with fine-tuned domain models.',
      detail: 'Delivers detailed user flows, schema contracts, API endpoints, and business logic directly to executive sponsors for definitive sign-off.',
      icon: '📐',
      badge: 'Executive FRD Sign-Off',
    },
    {
      step: '04',
      title: 'Autonomous Multi-Agent UI/UX & Application Engineering',
      category: 'STAGE 04 · INTELLIGENT DEVELOPMENT',
      desc: 'Deploy specialized, stack-tuned AI engineering agents operating securely within your local enterprise development environment.',
      detail: 'Agents architect and synthesize production-ready frontend components, intuitive user experiences, robust data access layers, and type-safe APIs.',
      icon: '⚡',
      badge: 'Specialized Multi-Agent Swarm',
    },
    {
      step: '05',
      title: 'Instant Staging Deployments & Rapid Feedback Loops',
      category: 'STAGE 05 · PREVIEW & ITERATION',
      desc: 'Spin up live, interactive staging environments for immediate client validation, stakeholder walk-throughs, and collaborative refinement.',
      detail: 'Iterative feedback is captured in real-time, triaged automatically, and seamlessly incorporated into active agent engineering streams.',
      icon: '🔄',
      badge: 'Live Interactive Staging',
    },
    {
      step: '06',
      title: 'Automated Playwright QA & Governed Cloud Release',
      category: 'STAGE 06 · ENTERPRISE VERIFICATION',
      desc: 'Integrate target cloud databases, VPC infrastructure, and CI/CD pipelines, fortified by auto-generated end-to-end regression suites.',
      detail: 'Hundreds of headless end-to-end tests validate every user journey. Production release executes only when 100% quality criteria are met.',
      icon: '🛡️',
      badge: 'Zero-Defect Release Gate',
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Enterprise Software Delivery Operating Engine"
      heroTitle={
        <>
          Turn requirements into production software{' '}
          <span className="text-[#C53678] block">with end-to-end governed intelligence.</span>
        </>
      }
      heroDescription="ONIT automates the entire software delivery lifecycle. Ingest raw prompts or requirement documents, generate industry-specific BRDs and fine-tuned FRDs with executive approval gates, build UI/UX with specialized AI engineering swarms, iterate through live staging previews, connect enterprise cloud infrastructure, execute automated end-to-end QA suites, and deploy safely to production."
      heroBadges={[
        'Prompt & Document Ingestion',
        'Industry BRD & FRD Governance',
        'Specialized Multi-Agent Engineering',
        'Instant Staging Feedback Loops',
        'Automated End-to-End QA Suites',
        'Governed Cloud Production Release',
      ]}
      ctaTitle="Accelerate your software delivery from idea to production"
      ctaDescription="Experience the autonomous SDLC platform that combines AI velocity with enterprise-grade governance, security, and continuous quality."
      ctaButtonText="Book ONIT Executive Demo"
    >
      {/* 01. The Complete SDLC Vision Narrative */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The ONIT Enterprise Advantage
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
                Transform raw concepts into audited, enterprise-grade cloud software in days—not quarters.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                Conventional software development is plagued by costly handoff friction: ambiguous client requests lead to misaligned functional specs, disconnects between design and code, and untested edge cases escaping into production.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                <strong className="text-[#1B0A2A]">ONIT</strong> orchestrates the full SDLC into a single, seamless, and governed operating pipeline. From initial requirement intake and industry-standard BRD/FRD synthesis to autonomous multi-agent development, live client staging iterations, and exhaustive automated regression testing, ONIT delivers predictable velocity and uncompromised quality.
              </p>
              <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F7] text-[#C53678] font-black flex items-center justify-center text-lg shrink-0">
                  🎯
                </div>
                <div className="text-xs text-[#5A4E68]">
                  <strong className="text-[#1B0A2A]">Governance by Design:</strong> Consequential milestones require explicit human sign-off—guaranteeing 100% architectural alignment and audited compliance at every stage.
                </div>
              </div>
            </div>

            {/* Architecture Flow Diagram Box */}
            <div className="p-8 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6F0] mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5A4E68]">
                  Autonomous Enterprise SDLC Engine
                </span>
                <span className="text-[10px] font-extrabold text-[#C53678] bg-[#FDF2F7] px-2.5 py-1 rounded-full border border-[#C53678]/25">
                  Idea → Governed Production
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Requirements & Ingestion', sub: 'Natural language prompts & file uploads mapped to industry domain templates' },
                  { step: '02', title: 'Tri-Party BRD Gate', sub: 'Joint consensus and verification between PM, BA, and Client Stakeholders' },
                  { step: '03', title: 'Precision FRD Sign-Off', sub: 'Fine-tuned functional specifications formally approved by client executive' },
                  { step: '04', title: 'Specialized Multi-Agent Dev', sub: 'Autonomous UI/UX and full-stack development with stack-tailored AI agents' },
                  { step: '05', title: 'Live Staging Iteration', sub: 'Interactive preview environments with rapid stakeholder feedback loops' },
                  { step: '06', title: 'Automated QA & Cloud Launch', sub: 'Comprehensive Playwright test automation, cloud DB connection & zero-defect release' },
                ].map((item) => (
                  <div key={item.step} className="p-3.5 bg-white rounded-2xl border border-[#EAE6F0] flex items-center gap-3.5 shadow-2xs hover:border-[#C53678]/30 transition-colors">
                    <span className="text-xs font-mono font-black text-[#C53678] bg-[#FDF2F7] px-2.5 py-1 rounded-lg border border-[#C53678]/25">
                      {item.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-[#1B0A2A]">{item.title}</div>
                      <div className="text-[11px] text-[#5A4E68] truncate mt-0.5">{item.sub}</div>
                    </div>
                    <span className="text-xs text-[#22C55E] font-bold">✓</span>
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
              The 6 Pillars of Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B0A2A] tracking-tight mb-4">
              How ONIT Accelerates Time-to-Value
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E68]">
              A continuous, governed delivery pipeline engineered for enterprises that require market speed without compromising security, compliance, or architecture.
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
                    {stage.category}
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

      {/* 03. Executive Value & Governed Architecture */}
      <section className="py-20 bg-white border-y border-[#EAE6F0] text-[#1B0A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Built for Enterprise Leaders
              </div>
              <h2 className="text-3xl font-extrabold text-[#1B0A2A] mb-4">
                Autonomous Velocity. Sovereign Control.
              </h2>
              <p className="text-sm text-[#5A4E68] leading-relaxed mb-6">
                ONIT eliminates the risks of unguided AI by grounding autonomous engineering in strict domain governance, stack-specialized intelligence, and verified quality standards.
              </p>
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5841] mt-1.5 shrink-0" />
                  <div className="text-xs text-[#5A4E68]">
                    <strong className="text-[#1B0A2A]">Stack-Optimized AI Swarms:</strong> AI agents fine-tuned specifically for your target technology stack (React, Node, Python, Java, Cloud Native) generate production-grade code adhering to your design system and architectural patterns.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C53678] mt-1.5 shrink-0" />
                  <div className="text-xs text-[#5A4E68]">
                    <strong className="text-[#1B0A2A]">Live Interactive Previews:</strong> Continuous staging builds let clients and executives test real features early, shortening iteration cycles and eliminating post-launch scope drift.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B1A54] mt-1.5 shrink-0" />
                  <div className="text-xs text-[#5A4E68]">
                    <strong className="text-[#1B0A2A]">Automated End-to-End Verification:</strong> Full regression suites run automatically across all critical paths, verifying APIs, database consistency, and browser interactions before deployment authorization.
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/architecture')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] hover:text-[#A92661] transition-colors cursor-pointer"
              >
                Explore Enterprise Architecture Specifications →
              </button>
            </div>

            {/* Live Executive Delivery Monitor Simulation */}
            <div className="bg-[#1B0A2A] text-white rounded-3xl border border-[#3B1A54] p-7 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/60 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  ONIT Delivery Engine · Enterprise Pipeline
                </span>
                <span className="text-[10px] font-bold text-[#22C55E] bg-[#22C55E]/20 px-2.5 py-0.5 rounded-md border border-[#22C55E]/30">
                  GOVERNED & ACTIVE
                </span>
              </div>
              <div className="space-y-3">
                <div className="text-[#FF5841] font-bold">1. Requirements & Spec Authorization</div>
                <div className="text-white/80 text-[11px] leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  <code>[INGEST]</code> Natural language prompt + 2 requirement files parsed<br />
                  <code>[BRD-GEN]</code> Industry BRD generated (14 core modules & data models)<br />
                  <code>[GATE 1]</code> <span className="text-[#22C55E]">✓ Authorized by Delivery Director, BA & Client</span><br />
                  <code>[FRD-GEN]</code> Precision FRD synthesized with complete API contracts<br />
                  <code>[GATE 2]</code> <span className="text-[#22C55E]">✓ Client Executive Formal Sign-Off</span>
                </div>

                <div className="text-[#C53678] font-bold pt-2">2. Multi-Agent Development & Staging</div>
                <div className="text-white/80 text-[11px] leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  <code>[AGENTS]</code> Stack-specialized AI engineering swarm generating UI/UX & backend<br />
                  <code>[STAGING]</code> Interactive preview deployed at preview-env-8841.scaleonit.app<br />
                  <code>[REVIEW]</code> Client validated user journeys and provided approval
                </div>

                <div className="text-[#22C55E] font-bold pt-2">3. Cloud Infrastructure & Quality Assurance</div>
                <div className="text-white/80 text-[11px] leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  <code>[CLOUD]</code> Cloud DB connected, VPC secured, CI/CD synced<br />
                  <code>[QA-E2E]</code> 48 automated Playwright test suites generated from FRD<br />
                  <code>[RESULT]</code> <span className="text-[#22C55E]">48/48 Passed (0 regressions, 100% assertions)</span><br />
                  <span className="text-[#FF5841] font-bold">🚀 Status: Released to Production with Full Audit Trail</span>
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

