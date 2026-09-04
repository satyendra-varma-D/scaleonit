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
      color: 'text-[#FF5500]',
      bg: 'bg-orange-50',
    },
    {
      title: '02. Connected Context Ingestion',
      actor: 'AI Project Manager',
      action: 'Scans locked user stories in DISCOVER, active PRs in ENGINEER, and test reports in QUALITY.',
      context: 'Ingested: 14 User Stories, 3 Pull Requests, 18 Automated Test Suites',
      badge: 'CONTEXT SYNTHESIS',
      color: 'text-slate-900',
      bg: 'bg-slate-50',
    },
    {
      title: '03. Blocker & Dependency Analysis',
      actor: 'AI Project Manager',
      action: 'Identifies 0 critical blockers; flags 1 non-blocking documentation task on PR #142.',
      context: 'Risk Assessment: LOW · Test Coverage: 98.4%',
      badge: 'RISK REASONING',
      color: 'text-[#FF5500]',
      bg: 'bg-orange-50',
    },
    {
      title: '04. Action Coordination & Tool Execution',
      actor: 'AI DevOps Engineer',
      action: 'Packages Docker container images, generates release changelog, and stages staging canary.',
      context: 'Artifact: REL-2026-09 Manifest staged on Kubernetes cluster',
      badge: 'TOOL ACTION',
      color: 'text-slate-900',
      bg: 'bg-slate-50',
    },
    {
      title: '05. Mandatory Human Approval Checkpoint',
      actor: 'Human Governance Gate',
      action: 'Release package submitted for authorized delivery director review and digital sign-off.',
      context: 'Policy: Production deployments strictly require explicit human authorization.',
      badge: 'HUMAN APPROVAL',
      color: 'text-[#FF5500]',
      bg: 'bg-orange-50',
    },
    {
      title: '06. Verified Result & Audit Logging',
      actor: 'ScaleOnIt Governance Engine',
      action: 'Deployment executed to production; immutable audit record written to organizational ledger.',
      context: 'Status: Live in Production · Stakeholder brief generated automatically',
      badge: 'AUDIT VERIFIED',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Autonomous Specialists · Governed Execution"
      heroTitle={
        <>
          AI doesn’t just answer. <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">It works under human governance.</span>
        </>
      }
      heroDescription="ScaleOnIt’s AI workforce consists of specialized digital workers — each with a defined role, objective, connected context, tools, and strict permission boundaries. They execute tasks across the ecosystem with mandatory human oversight on critical actions."
      heroBadges={['Specialized Worker Profiles', 'Connected Context Graph', 'Policy & Permission Boundaries', 'Human Approval Gates']}
      ctaTitle="Explore how specialized AI workers operate within your organization"
      ctaDescription="Schedule a technical architecture session to see how ScaleOnIt’s AI workforce models roles, context sources, and approval policies."
      ctaButtonText="Book AI Workforce Consultation"
    >
      {/* 01. Generic AI vs. ScaleOnIt AI Workforce */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              Ontological Distinction
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why generic chatbots fail in enterprise software delivery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Standard AI assistants lack persistent organizational memory, cannot access full ecosystem context, and operate without verifiable policy guardrails.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Generic Chatbot Box */}
            <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md shadow-[3px_3px_0px_0px_#0F172A]">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Generic AI Assistant
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                Chatbot prompt with isolated context
              </h3>
              <ul className="space-y-3 text-xs text-slate-600 leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold font-mono">✕</span>
                  <span><strong>Zero System Context:</strong> Unaware of locked PRDs, recent Git commits, or customer SLAs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold font-mono">✕</span>
                  <span><strong>Passive Suggestions Only:</strong> Produces text suggestions but cannot execute tool workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold font-mono">✕</span>
                  <span><strong>Uncontrolled Hallucinations:</strong> Blurs generated guesses with verified organizational facts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold font-mono">✕</span>
                  <span><strong>No Approval Hierarchy:</strong> Lacks role-based permission boundaries and audit logging.</span>
                </li>
              </ul>
            </div>

            {/* ScaleOnIt AI Workforce Box */}
            <div className="p-8 sm:p-10 rounded-2xl border border-[#FF5500] bg-orange-50/70 backdrop-blur-md shadow-[3px_3px_0px_0px_#FF5500]">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-2">
                ScaleOnIt AI Workforce
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                Governed digital workers with full lifecycle context
              </h3>
              <ul className="space-y-3 text-xs text-slate-900 leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF5500] font-bold font-mono">✓</span>
                  <span><strong>Connected Ecosystem Context:</strong> Operates directly on requirements, architecture, code, and test matrices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF5500] font-bold font-mono">✓</span>
                  <span><strong>Specialized Tool Invocations:</strong> Writes PRs, runs test suites, and provisions staging pipelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF5500] font-bold font-mono">✓</span>
                  <span><strong>Verifiable Audit Trails:</strong> Every prompt, tool invocation, and decision state is logged immutably.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF5500] font-bold font-mono">✓</span>
                  <span><strong>Mandatory Human Approvals:</strong> Consequential actions require authorized delivery leader sign-off.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The Execution Engine Model */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              Execution Model
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              The 9-Stage AI Execution Architecture
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
              How specialized AI workers transition from goal ingestion to policy-verified execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2.5">
            {[
              { num: '01', name: 'GOAL', desc: 'Ingests user objective' },
              { num: '02', name: 'CONTEXT', desc: 'Queries shared ecosystem data' },
              { num: '03', name: 'REASON', desc: 'Evaluates constraints' },
              { num: '04', name: 'PLAN', desc: 'Decomposes tasks' },
              { num: '05', name: 'TOOLS', desc: 'Selects scoped APIs' },
              { num: '06', name: 'ACT', desc: 'Generates artifacts' },
              { num: '07', name: 'VERIFY', desc: 'Validates quality gates' },
              { num: '08', name: 'APPROVAL', desc: 'Human authorization' },
              { num: '09', name: 'RESULT', desc: 'Logs audit event' },
            ].map((st) => (
              <div key={st.num} className="p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] transition-all">
                <div className="font-mono text-[10px] font-bold text-[#FF5500] mb-1">{st.num}</div>
                <div className="text-xs font-extrabold text-slate-900 mb-1 font-mono">{st.name}</div>
                <div className="text-[10px] text-slate-500 leading-tight">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Interactive AI Worker Workflow Simulation */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              Workflow Simulation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Interactive AI Worker Execution Demo
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
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
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    simStep === idx
                      ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-[3px_3px_0px_0px_#0F172A] -translate-y-0.5'
                      : 'bg-slate-50 hover:bg-white text-slate-800 border-slate-200 shadow-2xs hover:border-[#FF5500]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase opacity-90">
                      {step.badge}
                    </span>
                    <span className="text-[10px] font-mono opacity-80">Stage {idx + 1}/6</span>
                  </div>
                  <div className="text-xs font-extrabold">{step.title}</div>
                </button>
              ))}
            </div>

            {/* Active Step Visual Showcase */}
            <div className="lg:col-span-2 p-8 rounded-2xl bg-[#0D1117] text-white border border-slate-800 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping" />
                  <span className="font-bold text-white">WORKFLOW CONSOLE · EXEC_0942</span>
                </div>
                <span className="text-[10px] text-[#FF5500] bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/30 font-bold uppercase">
                  {simulationSteps[simStep].badge}
                </span>
              </div>

              <div className="space-y-4 font-sans">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block mb-1">Acting Specialist</span>
                  <span className="text-base font-extrabold text-[#FF5500]">{simulationSteps[simStep].actor}</span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block mb-1">Autonomous Execution</span>
                  <p className="text-sm text-slate-200 leading-relaxed">{simulationSteps[simStep].action}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#090D12] border border-slate-800 font-mono">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block mb-1">Contextual State</span>
                  <span className="text-slate-300 text-xs">{simulationSteps[simStep].context}</span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                  <button
                    onClick={() => setSimStep((prev) => (prev > 0 ? prev - 1 : simulationSteps.length - 1))}
                    className="font-mono text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    ← Previous Stage
                  </button>
                  <button
                    onClick={() => setSimStep((prev) => (prev + 1) % simulationSteps.length)}
                    className="relative overflow-hidden bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs font-bold uppercase px-5 py-2.5 rounded-lg shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
                  >
                    <span className="relative z-10">Next Stage →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Worker Directory & Profiles */}
      <AIWorkforceSection />

      {/* 05. Live Execution Console */}
      <AgentConsoleSection />
    </PageLayout>
  )
}
