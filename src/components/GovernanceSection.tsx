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
    <section id="governance" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full mb-6">
              Ecosystem Governance
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-[#1B0A2A] leading-[1.08] tracking-tight mb-6">
              Autonomous doesn&apos;t<br />mean uncontrolled.
            </h2>
            <p className="text-base text-[#5A4E68] leading-relaxed mb-8 max-w-md">
              ScaleOnIt is built for enterprises that need AI to be powerful AND controlled. Every agent action is bounded by policy, every critical decision requires the right approval, and every action leaves an audit trail.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-start gap-3 p-3.5 rounded-2xl border border-[#EAE6F0] hover:border-[#C53678]/30 hover:bg-[#FDF2F7] transition-all duration-150">
                  <span className="text-base flex-shrink-0" aria-hidden="true">{p.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-[#1B0A2A] mb-0.5">{p.label}</div>
                    <div className="text-[11px] text-[#5A4E68] leading-snug">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approval UI mockup */}
          <div>
            <div className="bg-[#FAFAFC] rounded-3xl border border-[#EAE6F0] p-4 shadow-sm">
              {/* Console header */}
              <div className="bg-white rounded-2xl border border-[#EAE6F0] overflow-hidden shadow-2xs">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#EAE6F0] bg-[#FAFAFC]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5841]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono text-[#5A4E68] font-bold ml-2">ScaleOnIt · Governance Console</span>
                </div>

                <div className="p-6">
                  {/* Policy context */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF5841] animate-pulse" />
                    <span className="text-[10px] font-mono text-[#FF5841] font-bold uppercase tracking-widest">Approval Required</span>
                  </div>

                  {/* Agent card */}
                  <div className="bg-[#FAFAFC] border border-[#EAE6F0] rounded-2xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#C53678] to-[#FF5841] flex items-center justify-center text-white text-base font-black shadow-2xs">
                        ⚙️
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-[#1B0A2A]">AI Engineering Agent</div>
                        <div className="text-[11px] text-[#5A4E68]">Domain: DELIVER · Scope: Production Release</div>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-[#5A4E68] uppercase font-bold tracking-widest mb-2">Requested Action</div>
                    <div className="bg-white border border-[#EAE6F0] rounded-xl p-3 mb-3 font-mono text-xs">
                      <div className="text-[#C53678] font-bold mb-1">deploy --env production</div>
                      <div className="text-[#5A4E68]">service: customer-portal-v2.4.1</div>
                      <div className="text-[#5A4E68]">replicas: 4</div>
                      <div className="text-[#5A4E68]">region: eu-west-1</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <div className="text-[#5A4E68] mb-1">Policy</div>
                        <div className="text-[#FF5841] font-bold">Approval required</div>
                      </div>
                      <div>
                        <div className="text-[#5A4E68] mb-1">Requested by</div>
                        <div className="text-[#1B0A2A] font-bold">AI Engineering Agent</div>
                      </div>
                      <div>
                        <div className="text-[#5A4E68] mb-1">Context</div>
                        <div className="text-emerald-600 font-bold">QA sign-off: Passed</div>
                      </div>
                      <div>
                        <div className="text-[#5A4E68] mb-1">Rollback</div>
                        <div className="text-[#1B0A2A] font-bold">Available (v2.4.0)</div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  {decision === 'pending' ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => setDecision('approved')}
                        className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#C53678] to-[#FF5841] text-white text-xs font-bold transition-all shadow-sm shadow-[#C53678]/25 cursor-pointer"
                      >
                        Approve Deployment
                      </button>
                      <button
                        onClick={() => setDecision('rejected')}
                        className="flex-1 py-2.5 rounded-full border border-[#EAE6F0] text-[#1B0A2A] text-xs font-bold hover:bg-[#FAFAFC] transition-colors cursor-pointer"
                      >
                        Reject
                      </button>
                      <button className="px-4 py-2.5 rounded-full border border-[#EAE6F0] text-[#5A4E68] text-xs font-bold hover:bg-[#FAFAFC] transition-colors cursor-pointer">
                        Review
                      </button>
                    </div>
                  ) : (
                    <div className={`rounded-2xl p-4 border text-center ${
                      decision === 'approved'
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-[#FFF4F2] border-[#FF5841]/30'
                    }`}>
                      <div className={`text-sm font-bold mb-1 ${decision === 'approved' ? 'text-emerald-700' : 'text-[#FF5841]'}`}>
                        {decision === 'approved' ? '✓ Deployment Approved' : '✗ Deployment Rejected'}
                      </div>
                      <div className="text-xs text-[#5A4E68] mb-3">
                        {decision === 'approved'
                          ? 'AI Engineering Agent will proceed with deployment'
                          : 'AI Engineering Agent has been notified. Action cancelled.'}
                      </div>
                      <button onClick={reset} className="text-xs text-[#C53678] font-bold hover:underline cursor-pointer">
                        Reset demo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#5A4E68] text-center mt-3">
              ScaleOnIt governance interface — illustrative demo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
