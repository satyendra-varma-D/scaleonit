import PageLayout from '../layout/PageLayout'

interface CompanyPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function CompanyPage({ onNavigate }: CompanyPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      breadcrumbs={[{ label: 'Company' }]}
      heroEyebrow="About ScaleOnIt"
      heroTitle="Powering the next generation of software delivery."
      heroDescription="ScaleOnIt is the enterprise technology company behind ONIT. We engineer connected operating platforms that bridge people, processes, systems, and autonomous AI for software delivery organizations worldwide."
    >
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-onit bg-onit-light px-3 py-1 rounded-full mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl font-extrabold text-midnight leading-tight mb-6">
                Software delivery shouldn’t be a patchwork of disconnected silos.
              </h2>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-4">
                Modern enterprises lose immense velocity, context, and profitability in the handoffs between customer conversations, requirements, architecture, code, testing, and support.
              </p>
              <p className="text-sm sm:text-base text-mid-text leading-relaxed">
                ScaleOnIt created ONIT to unite the entire software delivery lifecycle into one continuous, intelligence-governed operating system.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pearl border border-border-base shadow-sm">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-midnight mb-1">
                    Parent Company
                  </div>
                  <div className="text-lg font-extrabold text-onit">ScaleOnIt</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-midnight mb-1">
                    Flagship Product
                  </div>
                  <div className="text-lg font-extrabold text-midnight">
                    ONIT — The AI-Native Operating Platform
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-midnight mb-1">
                    Core Category
                  </div>
                  <div className="text-sm font-semibold text-mid-text">
                    Software Delivery & IT Operations Platform
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Principles */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight text-center mb-12">
              Our Core Operating Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-border-base bg-white shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-onit-light text-onit flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-midnight mb-2">Connect What Matters</h3>
                <p className="text-xs text-mid-text leading-relaxed">
                  We don’t force companies to replace their working toolstack. We connect systems to preserve context and amplify human capability.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border-base bg-white shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-ai-violet flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-midnight mb-2">Governed Autonomy</h3>
                <p className="text-xs text-mid-text leading-relaxed">
                  AI workers must execute real work, but consequential decisions (code merges, production deployments, billing) require explicit human approval.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border-base bg-white shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-data-cyan flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-midnight mb-2">Replaceable Models</h3>
                <p className="text-xs text-mid-text leading-relaxed">
                  AI models will continuously evolve. Our intelligence architecture routes each task to the optimal model without vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
