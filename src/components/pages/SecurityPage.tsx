import PageLayout from '../layout/PageLayout'
import GovernanceSection from '../GovernanceSection'

interface SecurityPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function SecurityPage({ onNavigate }: SecurityPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Enterprise Control & AI Governance"
      heroTitle={
        <>
          Autonomous does not mean <br className="hidden sm:inline" />
          <span className="text-[#C53678]">uncontrolled or unverified.</span>
        </>
      }
      heroDescription="ScaleOnIt is engineered for enterprise organizations that require AI to be both highly capable and strictly bounded. Every agent invocation is governed by role-based permissions, organizational policy, human approval checkpoints, and complete auditability."
      heroBadges={['Enterprise RBAC', 'Human Approval Checkpoints', 'Zero Data Retention Policy', 'Immutable Audit Trails']}
      ctaTitle="Review our enterprise security and governance framework"
      ctaDescription="Speak with a security solutions architect about air-gapped hosting, VPC deployment, and policy controls."
      ctaButtonText="Book Security Consultation"
    >
      {/* 01. The 7 Security & Governance Pillars */}
      <section className="py-20 bg-white border-b border-[#EAE6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Governance Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight mb-3">
              The 8 Pillars of Governed Autonomy
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed">
              AI workers operate strictly within defined organizational policies rather than executing arbitrary unmonitored code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🆔', title: 'Identity & SSO', desc: 'Enterprise SAML 2.0 / OIDC authentication with centralized user management.' },
              { icon: '🛡️', title: 'Scoped RBAC', desc: 'Granular permissions defining exactly which tools and repositories AI workers can access.' },
              { icon: '📜', title: 'Organizational Policy', desc: 'Declarative rules enforcing coding standards, coverage minimums, and branch protection.' },
              { icon: '👥', title: 'Human Approval Gates', desc: 'Consequential operations (PR merges, release deployments, budget edits) require human sign-off.' },
              { icon: '📋', title: 'Immutable Audit Trail', desc: 'Every prompt context, tool execution, and approval event is logged with cryptographic hashes.' },
              { icon: '🔒', title: 'Zero Training Policy', desc: 'Customer IP, source code, and requirements are never used to train external foundation models.' },
              { icon: '⚡', title: 'Pre-Execution Guardrails', desc: 'Static analysis and secret scanning intercept unsafe actions before execution.' },
              { icon: '🔍', title: 'Observability & Telemetry', desc: 'Real-time telemetry measuring agent execution latency, token spend, and error rates.' },
            ].map((p) => (
              <div key={p.title} className="p-6 rounded-3xl border border-[#EAE6F0] bg-[#FAFAFC] shadow-2xs">
                <div className="text-2xl mb-2" aria-hidden="true">{p.icon}</div>
                <h3 className="text-xs font-bold text-[#1B0A2A] mb-1">{p.title}</h3>
                <p className="text-[11px] text-[#5A4E68] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. Interactive Governance Gate Simulator (Reused Component) */}
      <GovernanceSection onNavigateToSecurity={() => onNavigate('/demo')} />

      {/* 03. Enterprise Trust Model & Deployment Flexibility */}
      <section className="py-20 bg-[#FAFAFC] border-t border-[#EAE6F0] text-[#1B0A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Deployment & Isolation Models
            </div>
            <h2 className="text-3xl font-extrabold text-[#1B0A2A] mb-4">
              Flexible Deployment for Strict Enterprise Data Sovereignty
            </h2>
            <p className="text-sm text-[#5A4E68] leading-relaxed">
              Whether deploying in multi-tenant SaaS, dedicated Virtual Private Clouds (VPC), or on-premise air-gapped infrastructure, ScaleOnIt adapts to your organization’s compliance boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="text-2xl mb-3">☁️</div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Enterprise Dedicated VPC</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Single-tenant dedicated instance deployed inside your organization’s AWS, GCP, or Azure subscription with private network endpoints.
              </p>
              <div className="text-[11px] font-bold text-[#C53678]">Total Network & Resource Isolation</div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Air-Gapped / On-Premise</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                Deployable in air-gapped data centers utilizing local open-weights foundation models without outbound internet dependencies.
              </p>
              <div className="text-[11px] font-bold text-[#FF5841]">Zero Outbound Data Transmission</div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#EAE6F0] shadow-sm">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Multi-Tenant Cloud</h3>
              <p className="text-xs text-[#5A4E68] leading-relaxed mb-4">
                SOC 2 Type II compliant managed cloud with AES-256 encryption at rest, TLS 1.3 in transit, and row-level tenant isolation.
              </p>
              <div className="text-[11px] font-bold text-[#3B1A54]">Instant Enterprise Onboarding</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
