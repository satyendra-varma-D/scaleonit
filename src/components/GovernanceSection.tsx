import { useState } from 'react'

const pillars = [
  { icon: '🔐', label: 'Identity', desc: 'Every user, agent, and service has a verified identity' },
  { icon: '🛡️', label: 'Permissions', desc: 'Role-based access controls defined at organization level' },
  { icon: '📜', label: 'Policy', desc: 'Organization-defined policies govern what AI can do' },
  { icon: '✅', label: 'Approvals', desc: 'Configurable human approval gates for critical actions' },
  { icon: '📋', label: 'Audit', desc: 'Every action is logged, traceable, and reviewable' },
  { icon: '🔒', label: 'Data Controls', desc: 'Data classification, retention, and access boundaries' },
  { icon: '🚧', label: 'Guardrails', desc: 'Model-level and system-level output constraints' },
  { icon: '👁️', label: 'Human Oversight', desc: 'Humans remain in control of consequential decisions' },
]

interface GovernanceSectionProps {
  onNavigateToSecurity?: () => void
}

export default function GovernanceSection({ onNavigateToSecurity }: GovernanceSectionProps = {}) {
  const [decision, setDecision] = useState<'pending' | 'approved' | 'rejected'>('pending')

  const reset = () => setDecision('pending')

  return (
    <section id="governance" className="py-24 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
              Ecosystem Governance
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6">
              Autonomous doesn&apos;t<br />mean uncontrolled.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-md">
              ScaleOnIt is built for enterprises that need AI to be powerful AND controlled. Every agent action is bounded by policy, every critical decision requires the right approval, and every action leaves an audit trail.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-base flex-shrink-0" aria-hidden="true">{p.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-slate-900 mb-0.5">{p.label}</div>
                    <div className="text-[11px] text-slate-500 leading-snug">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approval UI mockup */}
          <div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-[4px_4px_0px_0px_#0F172A]">
              {/* Console header */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 font-bold ml-2">ScaleOnIt · Governance Console</span>
                </div>

                <div className="p-6">
                  {/* Policy context */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                    <span className="text-[10px] font-mono text-[#FF5500] font-bold uppercase tracking-widest">Approval Required</span>
                  </div>

                  {/* Agent card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#FF5500] text-white flex items-center justify-center text-base font-black shadow-xs">
                        ⚙️
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">AI Engineering Agent</div>
                        <div className="text-[11px] text-slate-500 font-mono">Domain: DELIVER · Scope: Production Release</div>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest mb-2">Requested Action</div>
                    <div className="bg-slate-900 text-slate-200 border border-slate-800 rounded-lg p-3 mb-3 font-mono text-xs">
                      <div className="text-[#FF5500] font-bold mb-1">$ deploy --env production</div>
                      <div className="text-slate-300">service: customer-portal-v2.4.1</div>
                      <div className="text-slate-400">replicas: 4 | region: eu-west-1</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <div className="text-slate-500 mb-0.5">Policy</div>
                        <div className="text-[#FF5500] font-bold">Approval required</div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-0.5">Requested by</div>
                        <div className="text-slate-900 font-bold">AI Engineering Agent</div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-0.5">Context</div>
                        <div className="text-emerald-600 font-bold">QA sign-off: Passed</div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-0.5">Rollback</div>
                        <div className="text-slate-900 font-bold">Available (v2.4.0)</div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  {decision === 'pending' ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => setDecision('approved')}
                        className="flex-1 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase transition-all shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer"
                      >
                        Approve Deployment
                      </button>
                      <button
                        onClick={() => setDecision('rejected')}
                        className="flex-1 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-xs font-mono font-bold uppercase hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <div className={`rounded-xl p-4 border text-center ${
                      decision === 'approved'
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-rose-50 border-rose-200'
                    }`}>
                      <div className={`text-sm font-bold mb-1 ${decision === 'approved' ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {decision === 'approved' ? '✓ Deployment Approved' : '✗ Deployment Rejected'}
                      </div>
                      <div className="text-xs text-slate-600 mb-3">
                        {decision === 'approved'
                          ? 'AI Engineering Agent will proceed with deployment'
                          : 'AI Engineering Agent has been notified. Action cancelled.'}
                      </div>
                      <button onClick={reset} className="font-mono text-xs text-[#FF5500] font-bold hover:underline cursor-pointer">
                        Reset demo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-mono text-center mt-3">
              ScaleOnIt governance interface — illustrative demo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
