import PageLayout from '../../layout/PageLayout'
import ConnectSection from '../../ConnectSection'

interface ConnectPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function ConnectPage({ onNavigate }: ConnectPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[
        { label: 'Platform', path: '/platform' },
        { label: 'CONNECT' },
      ]}
      heroEyebrow="Enterprise Integration Ecosystem"
      heroTitle={
        <>
          Your stack doesn’t have to disappear. <br className="hidden sm:inline" />
          <span className="text-data-cyan">It just has to connect.</span>
        </>
      }
      heroDescription="Keep what works. Connect what matters. Replace only what you want. ONIT Connect bridges your existing CRM, Git repositories, CI/CD pipelines, cloud providers, and communication tools into one unified operating context."
      heroBadges={['8 Integration Categories', '10 Supported Protocols', 'Bi-directional Sync', 'Open Connector Framework']}
      ctaTitle="Connect your existing software delivery tools to ONIT"
      ctaDescription="Speak with an enterprise solutions architect to evaluate how ONIT connects with your existing tech stack."
      ctaButtonText="Book Integration Consultation"
    >
      {/* 01. The Integration Philosophy */}
      <section className="py-16 bg-white border-b border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-data-cyan bg-cyan-light border border-cyan-200 px-3 py-1 rounded-full inline-block mb-4">
                Integration Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight mb-4">
                Enterprise software delivery shouldn’t require a painful rip-and-replace migration.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                Most platform migrations fail because organizations are forced to abandon tools their engineering teams love. Jira, GitHub, Slack, and cloud platforms hold years of organizational data.
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ONIT Connect is built to operate alongside your existing software stack. Connect what matters via webhooks, REST APIs, and bi-directional event streams — allowing your team to preserve workflows while gaining unified operating intelligence.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                The Three Connect Pillars
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xl border border-border-base">
                  <div className="text-xs font-bold text-onit mb-1">01. KEEP WHAT WORKS</div>
                  <p className="text-xs text-mid-text">Preserve your active Jira boards, GitHub repositories, Salesforce records, and Slack workspaces.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-border-base">
                  <div className="text-xs font-bold text-data-cyan mb-1">02. CONNECT WHAT MATTERS</div>
                  <p className="text-xs text-mid-text">Bridge information silos into ONIT’s shared context schema to eliminate manual status reporting and handoffs.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-border-base">
                  <div className="text-xs font-bold text-ai-violet mb-1">03. REPLACE WHAT YOU WANT</div>
                  <p className="text-xs text-mid-text">Adopt native ONIT capabilities (Discovery, AI QA, Sprint Coordination) gradually as your operations evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Interactive Connect Ecosystem Explorer (Reused Component) */}
      <ConnectSection />

      {/* 03. Connection Protocols & Technical Standards */}
      <section className="py-20 bg-white border-t border-border-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight mb-3">
              Standardized Protocols & Enterprise Integration Standards
            </h2>
            <p className="text-sm text-mid-text leading-relaxed">
              Designed for secure, reliable enterprise data synchronization with zero data loss.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: 'REST APIs', desc: 'Secure HTTPS JSON endpoints' },
              { name: 'Webhooks', desc: 'Real-time asynchronous events' },
              { name: 'OAuth 2.0', desc: 'Role-based token auth' },
              { name: 'API Keys', desc: 'Scoped programmatic access' },
              { name: 'Event Streams', desc: 'Kafka / PubSub connectors' },
              { name: 'Bi-directional', desc: 'Two-way sync with conflict resolution' },
              { name: 'Field Mapping', desc: 'Custom schema transformation' },
              { name: 'Data Transform', desc: 'ETL payload pipelines' },
              { name: 'Scheduled Sync', desc: 'Periodic batch ingestion' },
              { name: 'Custom Connectors', desc: 'SDK for proprietary systems' },
            ].map((p) => (
              <div key={p.name} className="p-4 rounded-xl border border-border-base bg-pearl">
                <div className="text-xs font-bold text-midnight mb-1">{p.name}</div>
                <div className="text-[11px] text-mid-text leading-tight">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
