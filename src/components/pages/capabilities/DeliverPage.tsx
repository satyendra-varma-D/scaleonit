import { useState } from 'react'
import PageLayout from '../../layout/PageLayout'
import GlowCard from '../../shared/GlowCard'

interface DeliverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverPage({ onNavigate }: DeliverPageProps) {
  const [activeSimTab, setActiveSimTab] = useState<number>(0)

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

  const simTabs = [
    {
      title: '1. BRD Intake',
      command: 'scaleonit ingest --spec="fintech-core.pdf" --template="enterprise"',
      status: 'PARSED & MAPPED',
      lines: [
        '[INGEST] Ingesting natural language prompt + 2 requirement specification files...',
        '[BRD-GEN] Industry BRD synthesized: 14 core modules & domain entities mapped.',
        '[GATE 1] ✓ Formally authorized by Delivery Director, BA & Client Stakeholders.',
      ],
    },
    {
      title: '2. Multi-Agent Build',
      command: 'scaleonit build --swarm="react-tailwind,node-microservices" --strict',
      status: 'SWARM ACTIVE',
      lines: [
        '[AGENTS] Stack-specialized AI engineering swarm generating React 19 UI & Node backend.',
        '[STAGING] Interactive staging preview deployed at https://preview-8841.scaleonit.app',
        '[REVIEW] Client validated user journeys and provided electronic sign-off.',
      ],
    },
    {
      title: '3. Playwright QA',
      command: 'scaleonit test --suite="e2e-playwright" --coverage=100',
      status: 'ALL TESTS PASSED',
      lines: [
        '[CLOUD] Target Cloud Database connected, VPC network policy verified.',
        '[QA-E2E] 48 automated Playwright test suites generated directly from precision FRD.',
        '[RESULT] ✓ 48/48 Passed (0 regressions, 0 flaky tests, 100% assertions satisfied).',
      ],
    },
    {
      title: '4. Production Release',
      command: 'scaleonit release --cluster="prod-east" --audit=immutable',
      status: 'RELEASED TO PRODUCTION',
      lines: [
        '[SECURITY] Secret scanning zero findings; cryptographic hash recorded.',
        '[DEPLOY] Zero-downtime rolling update dispatched to governed production cluster.',
        '🚀 Status: Live in Production with Complete Immutable Audit Trail.',
      ],
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Enterprise Software Delivery Operating Engine"
      heroTitle={
        <>
          Turn requirements into production software{' '}
          <span className="text-[#FF5500] block">with end-to-end governed intelligence.</span>
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
      <section className="py-20 bg-transparent border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
                The ONIT Enterprise Advantage
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Transform raw concepts into audited, enterprise-grade cloud software in days—not quarters.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Conventional software development is plagued by costly handoff friction: ambiguous client requests lead to misaligned functional specs, disconnects between design and code, and untested edge cases escaping into production.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                <strong className="text-slate-900 font-bold">ONIT</strong> orchestrates the full SDLC into a single, seamless, and governed operating pipeline. From initial requirement intake and industry-standard BRD/FRD synthesis to autonomous multi-agent development, live client staging iterations, and exhaustive automated regression testing, ONIT delivers predictable velocity and uncompromised quality.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 mt-6 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF5500] border border-orange-200 font-black flex items-center justify-center text-lg shrink-0">
                  🎯
                </div>
                <div className="text-xs text-slate-600">
                  <strong className="text-slate-900">Governance by Design:</strong> Consequential milestones require explicit human sign-off—guaranteeing 100% architectural alignment and audited compliance at every stage.
                </div>
              </div>
            </div>

            {/* Architecture Flow Diagram Box */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
                  Autonomous Enterprise SDLC Engine
                </span>
                <span className="font-mono text-[10px] font-bold text-[#FF5500] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
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
                  <div
                    key={item.step}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3.5 shadow-2xs hover:border-[#FF5500] transition-colors"
                  >
                    <span className="text-xs font-mono font-black text-[#FF5500] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                      {item.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">{item.sub}</div>
                    </div>
                    <span className="text-xs text-emerald-500 font-bold">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The 6-Stage Deep Dive */}
      <section className="py-24 bg-transparent border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              The 6 Pillars of Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              How ONIT Accelerates Time-to-Value
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              A continuous, governed delivery pipeline engineered for enterprises that require market speed without compromising security, compliance, or architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdlcStages.map((stage) => (
              <GlowCard
                key={stage.step}
                className="p-7 rounded-2xl bg-white border border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 ease-out flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      {stage.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5500] border border-orange-200">
                      {stage.badge}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] font-extrabold tracking-widest text-[#FF5500] uppercase mb-1">
                    {stage.category}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#FF5500] transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {stage.desc}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono">
                    {stage.detail}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Executive Value & Governed Live Simulator */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
                Built for Enterprise Leaders
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                Autonomous Velocity. Sovereign Control.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                ONIT eliminates the risks of unguided AI by grounding autonomous engineering in strict domain governance, stack-specialized intelligence, and verified quality standards.
              </p>
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-900">Stack-Optimized AI Swarms:</strong> AI agents fine-tuned specifically for your target technology stack (React, Node, Python, Java, Cloud Native) generate production-grade code adhering to your design system and architectural patterns.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-900">Live Interactive Previews:</strong> Continuous staging builds let clients and executives test real features early, shortening iteration cycles and eliminating post-launch scope drift.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-900">Automated End-to-End Verification:</strong> Full regression suites run automatically across all critical paths, verifying APIs, database consistency, and browser interactions before deployment authorization.
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/architecture')}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer"
              >
                Explore Enterprise Architecture Specifications →
              </button>
            </div>

            {/* Live Interactive Simulator Component */}
            <div className="bg-[#0D1117] text-white rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="h-2 w-2 rounded-full bg-[#FF5500] animate-ping inline-block" />
                  ONIT Delivery Engine · Live Execution
                </span>
                <span className="text-[10px] font-bold text-[#FF5500] bg-orange-500/10 px-2.5 py-0.5 rounded-md border border-orange-500/30">
                  {simTabs[activeSimTab].status}
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 p-1 bg-slate-900 rounded-xl border border-slate-800">
                {simTabs.map((tab, idx) => (
                  <button
                    key={tab.title}
                    type="button"
                    onClick={() => setActiveSimTab(idx)}
                    className={`py-1.5 px-2 text-[10px] font-bold rounded-lg transition-all text-center cursor-pointer ${
                      activeSimTab === idx
                        ? 'bg-[#FF5500] text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Terminal Execution Body */}
              <div className="space-y-3 bg-[#090D12] p-4 rounded-xl border border-slate-850 min-h-[160px]">
                <div className="flex items-center gap-2 text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                  <span className="text-[#FF5500] font-bold">$</span>
                  <span className="text-slate-200">{simTabs[activeSimTab].command}</span>
                </div>

                <div className="space-y-2 text-[11px] text-slate-300">
                  {simTabs[activeSimTab].lines.map((line, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">
                      {line.includes('✓') ? (
                        <span className="text-emerald-400 font-medium">{line}</span>
                      ) : line.includes('🚀') ? (
                        <span className="text-[#FF5500] font-bold">{line}</span>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-[#FF5500] font-bold pt-1">
                    <span>&gt; stage verified and authorized</span>
                    <span className="terminal-cursor">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Downstream Lifecycle Continuation */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#0F172A]">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] mb-1">
                Ecosystem Continuation
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Where does this context flow next?</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                Deployed applications flow seamlessly into SERVE for live customer support, automated ticket-to-code traceability, and continuous SLA monitoring.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/platform/serve')}
                className="relative overflow-hidden bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
              >
                <span className="relative z-10">Explore SERVE →</span>
              </button>
              <button
                onClick={() => onNavigate('/platform')}
                className="border border-slate-200 bg-white text-slate-900 text-xs font-mono font-bold uppercase px-6 py-3 rounded-lg hover:bg-slate-50 hover:border-[#FF5500] hover:text-[#FF5500] transition-colors cursor-pointer shadow-2xs"
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
