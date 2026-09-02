import { useState } from 'react'
import PageLayout from '../layout/PageLayout'
import AIWorkforceSection from '../AIWorkforceSection'
import AgentConsoleSection from '../AgentConsoleSection'

interface AIWorkforcePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function AIWorkforcePage({ onNavigate }: AIWorkforcePageProps) {
  const [simStep, setSimStep] = useState(0)

  const simulationSteps = [
    {
      title: '01. User Goal Received',
      actor: 'Delivery Director',
      action: 'Initiates release readiness workflow for Release REL-2026-09.',
      context: 'Linked Project: Core Platform Modernization',
      badge: 'GOAL INGESTION',
      color: 'text-onit',
      bg: 'bg-onit-light',
    },
    {
      title: '02. Connected Context Ingestion',
      actor: 'AI Project Manager',
      action: 'Scans locked user stories in DISCOVER, active PRs in ENGINEER, and test reports in QUALITY.',
      context: 'Ingested: 14 User Stories, 3 Pull Requests, 18 Automated Test Suites',
      badge: 'CONTEXT SYNTHESIS',
      color: 'text-ai-violet',
      bg: 'bg-ai-light',
    },
    {
      title: '03. Blocker & Dependency Analysis',
      actor: 'AI Project Manager',
      action: 'Identifies 0 critical blockers; flags 1 non-blocking documentation task on PR #142.',
      context: 'Risk Assessment: LOW · Test Coverage: 98.4%',
      badge: 'RISK REASONING',
      color: 'text-data-cyan',
      bg: 'bg-cyan-light',
    },
    {
      title: '04. Action Coordination & Tool Execution',
      actor: 'AI DevOps Engineer',
      action: 'Packages Docker container images, generates release changelog, and stages staging canary.',
      context: 'Artifact: REL-2026-09 Manifest staged on Kubernetes cluster',
      badge: 'TOOL ACTION',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: '05. Mandatory Human Approval Checkpoint',
      actor: 'Human Governance Gate',
      action: 'Release package submitted for authorized delivery director review and digital sign-off.',
      context: 'Policy: Production deployments strictly require explicit human authorization.',
      badge: 'HUMAN APPROVAL',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      title: '06. Verified Result & Audit Logging',
      actor: 'ONIT Governance Engine',
      action: 'Deployment executed to production; immutable audit record written to organizational ledger.',
      context: 'Status: Live in Production · Stakeholder brief generated automatically',
      badge: 'AUDIT VERIFIED',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[{ label: 'AI Workforce' }]}
      heroEyebrow="Autonomous Specialists · Governed Execution"
      heroTitle={
        <>
          AI doesn’t just answer. <br className="hidden sm:inline" />
          <span className="text-ai-violet">It works under human governance.</span>
        </>
      }
      heroDescription="ONIT’s AI workforce consists of specialized digital workers — each with a defined role, objective, connected context, tools, and strict permission boundaries. They execute tasks across the SDLC with mandatory human oversight on critical actions."
      heroBadges={['Specialized Worker Profiles', 'Connected Context Graph', 'Policy & Permission Boundaries', 'Human Approval Gates']}
      ctaTitle="Explore how specialized AI workers operate within your organization"
      ctaDescription="Schedule a technical architecture session to see how ONIT’s AI workforce models roles, context sources, and approval policies."
      ctaButtonText="Book AI Workforce Consultation"
    >
      {/* 01. Generic AI vs. ONIT AI Workforce */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-ai-violet bg-ai-light border border-violet-200 px-3 py-1 rounded-full inline-block mb-3">
              Ontological Distinction
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-3">
              Why generic chatbots fail in enterprise software delivery
            </h2>
            <p className="text-sm sm:text-base text-mid-text leading-relaxed">
              Standard AI assistants lack persistent organizational memory, cannot access full SDLC context, and operate without verifiable policy guardrails.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Generic Chatbot Box */}
            <div className="p-8 rounded-2xl border-2 border-red-100 bg-white shadow-xs">
              <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
                Generic AI Assistant
              </div>
              <h3 className="text-xl font-extrabold text-midnight mb-4">
                Chatbot prompt with isolated context
              </h3>
              <ul className="space-y-3 text-xs text-mid-text leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Zero System Context:</strong> Unaware of locked PRDs, recent Git commits, or customer SLAs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Passive Suggestions Only:</strong> Produces text suggestions but cannot execute tool workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Uncontrolled Hallucinations:</strong> Blurs generated guesses with verified organizational facts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>No Approval Hierarchy:</strong> Lacks role-based permission boundaries and audit logging.</span>
                </li>
              </ul>
            </div>

            {/* ONIT AI Workforce Box */}
            <div className="p-8 rounded-2xl border-2 border-violet-200 bg-ai-light shadow-xs">
              <div className="text-xs font-bold uppercase tracking-widest text-ai-violet mb-2">
                ONIT AI Workforce
              </div>
              <h3 className="text-xl font-extrabold text-midnight mb-4">
                Governed digital workers with full lifecycle context
              </h3>
              <ul className="space-y-3 text-xs text-midnight leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-ai-violet font-bold">✓</span>
                  <span><strong>Connected SDLC Context:</strong> Operates directly on requirements, architecture, code, and test matrices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-ai-violet font-bold">✓</span>
                  <span><strong>Specialized Tool Invocations:</strong> Writes PRs, runs test suites, and provisions staging pipelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-ai-violet font-bold">✓</span>
                  <span><strong>Verifiable Audit Trails:</strong> Every prompt, tool invocation, and decision state is logged immutably.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-ai-violet font-bold">✓</span>
                  <span><strong>Mandatory Human Approvals:</strong> Consequential actions require authorized delivery leader sign-off.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The Execution Engine Model */}
      <section className="py-20 bg-pearl border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-3">
              The 9-Stage AI Execution Architecture
            </h2>
            <p className="text-sm text-mid-text max-w-xl mx-auto">
              How specialized AI workers transition from goal ingestion to policy-verified execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2">
            {[
              { num: '01', name: 'GOAL', desc: 'Ingests user objective' },
              { num: '02', name: 'CONTEXT', desc: 'Queries shared SDLC data' },
              { num: '03', name: 'REASON', desc: 'Evaluates constraints' },
              { num: '04', name: 'PLAN', desc: 'Decomposes tasks' },
              { num: '05', name: 'TOOLS', desc: 'Selects scoped APIs' },
              { num: '06', name: 'ACT', desc: 'Generates artifacts' },
              { num: '07', name: 'VERIFY', desc: 'Validates quality gates' },
              { num: '08', name: 'APPROVAL', desc: 'Human authorization' },
              { num: '09', name: 'RESULT', desc: 'Logs audit event' },
            ].map((st) => (
              <div key={st.num} className="p-3 rounded-xl bg-white border border-border-base text-center shadow-2xs">
                <div className="text-[10px] font-bold text-ai-violet mb-1">{st.num}</div>
                <div className="text-xs font-extrabold text-midnight mb-1">{st.name}</div>
                <div className="text-[10px] text-mid-text leading-tight">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Interactive AI Worker Workflow Simulation */}
      <section className="py-20 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-600 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full inline-block mb-3">
              Product Simulation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-2">
              Interactive AI Worker Execution Demo
            </h2>
            <p className="text-sm text-mid-text leading-relaxed">
              Step through a simulated workflow showing how the AI Project Manager and AI DevOps Engineer coordinate release readiness under human governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Step Selection Tabs */}
            <div className="space-y-2">
              {simulationSteps.map((step, idx) => (
                <button
                  key={step.title}
                  onClick={() => setSimStep(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit ${
                    simStep === idx
                      ? 'bg-midnight text-white border-midnight shadow-md'
                      : 'bg-pearl hover:bg-white text-midnight border-border-base'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase opacity-75">
                      {step.badge}
                    </span>
                    <span className="text-[10px] font-mono opacity-60">Stage {idx + 1}/6</span>
                  </div>
                  <div className="text-xs font-bold">{step.title}</div>
                </button>
              ))}
            </div>

            {/* Active Step Visual Showcase */}
            <div className="lg:col-span-2 p-8 rounded-2xl bg-midnight text-white border border-white/10 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-slate-200">ONIT SIMULATION CONSOLE · EXEC_0942</span>
                </div>
                <span className="text-[10px] text-cyan-400 font-semibold uppercase">
                  {simulationSteps[simStep].badge}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Acting Specialist</span>
                  <span className="text-base font-extrabold text-cyan-300">{simulationSteps[simStep].actor}</span>
                </div>

                <div>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Autonomous Execution</span>
                  <p className="text-sm text-slate-200 leading-relaxed font-sans">{simulationSteps[simStep].action}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">Contextual State</span>
                  <span className="text-slate-300 font-mono text-xs">{simulationSteps[simStep].context}</span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <button
                    onClick={() => setSimStep((prev) => (prev > 0 ? prev - 1 : simulationSteps.length - 1))}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    ← Previous Stage
                  </button>
                  <button
                    onClick={() => setSimStep((prev) => (prev + 1) % simulationSteps.length)}
                    className="bg-onit text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-onit-hover transition-colors cursor-pointer"
                  >
                    Next Execution Stage →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Worker Directory & Profiles (Reused Component) */}
      <AIWorkforceSection />

      {/* 05. Live Execution Console (Reused Component) */}
      <AgentConsoleSection />
    </PageLayout>
  )
}
