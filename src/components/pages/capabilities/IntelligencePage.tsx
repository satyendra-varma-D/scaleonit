import PageLayout from '../../layout/PageLayout'
import IntelligenceSection from '../../IntelligenceSection'

interface IntelligencePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function IntelligencePage({ onNavigate }: IntelligencePageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: 'INTELLIGENCE' },
      ]}
      heroEyebrow="Model-Agnostic Intelligence Architecture"
      heroTitle={
        <>
          The right intelligence for <br className="hidden sm:inline" />
          <span className="text-ai-violet">the right software delivery job.</span>
        </>
      }
      heroDescription="ONIT does not force every task through a single LLM. Specialized intelligence routes reasoning, code generation, RAG, deterministic logic, and agent workflows under strict enterprise governance."
      heroBadges={['Dynamic Model Routing', 'Organizational RAG', 'Policy Guardrails', 'Replaceable Foundation Models']}
      ctaTitle="Future-proof your AI strategy without vendor lock-in"
      ctaDescription="Explore how ONIT’s model-agnostic intelligence architecture adapts as foundation models evolve."
      ctaButtonText="Book Architecture Consultation"
    >
      {/* 01. Core Intelligence Architecture Philosophy */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-ai-violet bg-ai-light border border-violet-200 px-3 py-1 rounded-full inline-block mb-4">
                Architecture Principle
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-4">
                Models are replaceable. ONIT’s intelligence architecture is not.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                Attempting to use a generic chatbot model for specialized software delivery results in hallucinations, invalid syntax, and unverified architecture.
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ONIT combines deterministic business rules with specialized models: high-reasoning models for discovery synthesis, code-specialized models for implementation, vector RAG for organizational retrieval, and strict deterministic logic for financial margins.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Intelligence Stack Breakdown
              </div>
              <div className="space-y-3">
                {[
                  { type: 'Reasoning Models', use: 'DISCOVER requirements clarification & edge-case discovery' },
                  { type: 'Coding Models', use: 'ENGINEER feature generation & unit test implementation' },
                  { type: 'Retrieval (RAG)', use: 'Historical project knowledge, past bug databases, and architecture standards' },
                  { type: 'Deterministic Logic', use: 'FINANCE margin calculation, RBAC security, and deployment gate policies' },
                ].map((item) => (
                  <div key={item.type} className="p-3.5 bg-white rounded-xl border border-border-base flex items-start gap-3">
                    <span className="text-xs font-bold text-ai-violet bg-ai-light px-2 py-0.5 rounded-md flex-shrink-0">
                      {item.type}
                    </span>
                    <div className="text-xs text-mid-text leading-tight mt-0.5">{item.use}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Interactive Intelligence Task Matrix (Reused Component) */}
      <IntelligenceSection onNavigateToIntelligence={() => onNavigate('/architecture')} />

      {/* 03. Enterprise Guardrails & Policy */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-violet-400 mb-2">
              Enterprise Governance & Evaluation
            </div>
            <h2 className="text-3xl font-extrabold mb-4">
              Evaluation, Guardrails & Human Control
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every model output is validated against schema contracts, security policies, and organizational permissions before any action is executed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="text-base font-bold text-white mb-2">Pre-Execution Guardrails</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prevents destructive actions. Code generation is sandboxed and checked for SQL injection, leaked secrets, and OWASP Top 10 vulnerabilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-base font-bold text-white mb-2">Zero-Training Policy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enterprise source code and client requirements are never retained or used to train public foundation models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-3">👥</div>
              <h3 className="text-base font-bold text-white mb-2">Human Approval Required</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consequential actions — requirements baselines, code merges, budget changes, and production releases — require authorized human sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
