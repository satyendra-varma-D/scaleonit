import PageLayout from '../layout/PageLayout'
import { capabilities } from '../../data/capabilities'

interface CapabilityPageProps {
  slug: string
  onNavigate: (path: string, anchor?: string) => void
}

export default function CapabilityPage({ slug, onNavigate }: CapabilityPageProps) {
  const cap = capabilities.find((c) => c.slug === slug) || capabilities[1] // Default to DISCOVER

  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: cap.name },
      ]}
      heroEyebrow={`ONIT Platform Capability · ${cap.name}`}
      heroTitle={
        <>
          {cap.name}: <span className={cap.color}>{cap.tagline}</span>
        </>
      }
      heroDescription={cap.description}
    >
      {/* Capability Deep-Dive Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Key Workflows Section */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight mb-6">
              Key Workflows & Operations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cap.workflows.map((wf, idx) => (
                <div
                  key={wf}
                  className={`p-5 rounded-2xl border-2 ${cap.border} ${cap.bg} flex flex-col justify-between`}
                >
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-2">
                      Workflow 0{idx + 1}
                    </div>
                    <div className="text-base font-bold text-midnight mb-2">{wf}</div>
                  </div>
                  <div className="text-xs text-mid-text">
                    Automated, policy-bounded execution with full auditability.
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Workforce Integration Section */}
          {cap.aiWorkers.length > 0 && (
            <div className="mb-16 p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${cap.accent} flex items-center justify-center text-xl text-white`}>
                  🤖
                </div>
                <div>
                  <h3 className="text-xl font-bold text-midnight">Specialized AI Workforce</h3>
                  <p className="text-xs text-mid-text">Digital specialists executing within {cap.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cap.aiWorkers.map((worker) => (
                  <div key={worker} className="p-4 bg-white rounded-xl border border-border-base flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${cap.accent}`} />
                      <span className="text-sm font-bold text-midnight">{worker}</span>
                    </div>
                    <button
                      onClick={() => onNavigate('/ai-workforce')}
                      className="text-xs font-semibold text-onit hover:underline cursor-pointer"
                    >
                      View Profile →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Connected Context Note */}
          <div className="p-8 rounded-2xl bg-midnight text-white border border-white/10">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">
              Connected Operating Context
            </div>
            <h3 className="text-xl font-bold mb-3">
              Zero Context Loss Across SDLC Handoffs
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-3xl mb-6">
              Outputs generated in {cap.name} are immediately available as structured inputs to adjacent capabilities. Requirements inform architecture; architecture constraints inform pull requests; quality gates validate code against acceptance criteria.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate('/platform')}
                className="bg-onit text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-onit-hover transition-colors cursor-pointer"
              >
                View Full Platform Map
              </button>
              <button
                onClick={() => onNavigate('/demo')}
                className="bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              >
                Request 14-Day Sandbox
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
