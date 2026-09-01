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

export default function GovernanceSection() {
  const [decision, setDecision] = useState<'pending' | 'approved' | 'rejected'>('pending')

  const reset = () => setDecision('pending')

  return (
    <section id="governance" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
              Governance
            </div>
            <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-[1.08] tracking-tight mb-6">
              Autonomous doesn&apos;t<br />mean uncontrolled.
            </h2>
            <p className="text-base text-mid-text leading-relaxed mb-8 max-w-md">
              ONIT is built for enterprises that need AI to be powerful AND controlled. Every agent action is bounded by policy, every critical decision requires the right approval, and every action leaves an audit trail.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-start gap-3 p-3 rounded-xl border border-border-base hover:border-slate-300 hover:bg-pearl transition-all duration-150">
                  <span className="text-base flex-shrink-0" aria-hidden="true">{p.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-midnight mb-0.5">{p.label}</div>
                    <div className="text-[11px] text-mid-text leading-snug">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approval UI mockup */}
          <div>
            <div className="bg-pearl rounded-2xl border border-border-base p-2">
              {/* Console header */}
              <div className="bg-midnight rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 ml-2">ONIT · Governance Console</span>
                </div>

                <div className="p-5">
                  {/* Policy context */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">Approval Required</span>
                  </div>

                  {/* Agent card */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-ai-violet flex items-center justify-center text-base">
                        ⚙️
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">AI Engineering Agent</div>
                        <div className="text-[11px] text-slate-400">Platform: ENGINEER · Scope: Production</div>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Requested Action</div>
                    <div className="bg-white/8 rounded-lg p-3 mb-3 font-mono text-xs">
                      <div className="text-amber-300 mb-1">deploy --env production</div>
                      <div className="text-slate-400">service: customer-portal-v2.4.1</div>
                      <div className="text-slate-400">replicas: 4</div>
                      <div className="text-slate-400">region: eu-west-1</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <div className="text-slate-600 mb-1">Policy</div>
                        <div className="text-amber-400 font-semibold">Approval required</div>
                      </div>
                      <div>
                        <div className="text-slate-600 mb-1">Requested by</div>
                        <div className="text-white font-semibold">AI Engineering Agent</div>
                      </div>
                      <div>
                        <div className="text-slate-600 mb-1">Context</div>
                        <div className="text-emerald-400 font-semibold">QA sign-off: Passed</div>
                      </div>
                      <div>
                        <div className="text-slate-600 mb-1">Rollback</div>
                        <div className="text-slate-300 font-semibold">Available (v2.4.0)</div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  {decision === 'pending' ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => setDecision('approved')}
                        className="flex-1 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
                      >
                        Approve Deployment
                      </button>
                      <button
                        onClick={() => setDecision('rejected')}
                        className="flex-1 py-2.5 rounded-lg border border-white/15 text-white text-sm font-semibold hover:bg-white/8 transition-colors"
                      >
                        Reject
                      </button>
                      <button className="px-4 py-2.5 rounded-lg border border-white/15 text-slate-400 text-sm font-semibold hover:bg-white/8 transition-colors">
                        Review
                      </button>
                    </div>
                  ) : (
                    <div className={`rounded-xl p-4 border text-center ${
                      decision === 'approved'
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : 'bg-red-500/10 border-red-500/30'
                    }`}>
                      <div className={`text-sm font-bold mb-1 ${decision === 'approved' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {decision === 'approved' ? '✓ Deployment Approved' : '✗ Deployment Rejected'}
                      </div>
                      <div className="text-xs text-slate-400 mb-3">
                        {decision === 'approved'
                          ? 'AI Engineering Agent will proceed with deployment'
                          : 'AI Engineering Agent has been notified. Action cancelled.'}
                      </div>
                      <button onClick={reset} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                        Reset demo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-mid-text text-center mt-3">
              Conceptual ONIT governance interface — illustrative demo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
