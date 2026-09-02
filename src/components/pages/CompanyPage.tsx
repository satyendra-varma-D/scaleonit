import PageLayout from '../layout/PageLayout'

interface CompanyPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function CompanyPage({ onNavigate }: CompanyPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="About ScaleOnIt"
      heroTitle={
        <>
          Building the connected <br className="hidden sm:inline" />
          <span className="text-[#C53678]">Business Operating Ecosystem.</span>
        </>
      }
      heroDescription="ScaleOnIt is an enterprise technology company architecting the future of work. We engineer purpose-built operating systems that unite business acquisition, requirements discovery, software delivery, workforce management, financials, and customer service into one continuous ecosystem."
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full mb-4">
                Our Ecosystem Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B0A2A] leading-tight mb-6">
                Modern business operations shouldn’t be a patchwork of disconnected silos.
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed mb-4">
                Enterprises lose immense velocity, context, and margin in the friction between customer acquisition, requirements gathering, delivery execution, resource management, billing, and customer support.
              </p>
              <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed">
                ScaleOnIt is building the Six-System Operating Ecosystem—starting with DELIVER powered by our flagship product ONIT—to provide uninterrupted context and governed intelligence across every stage of business execution.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-sm">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-1">
                    Master Brand & Ecosystem
                  </div>
                  <div className="text-xl font-extrabold text-[#1B0A2A]">ScaleOnIt</div>
                  <div className="text-xs text-[#5A4E68] mt-0.5">The Business Operating Ecosystem</div>
                </div>
                <div className="pt-4 border-t border-[#EAE6F0]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C53678] mb-1">
                    Flagship Product (DELIVER)
                  </div>
                  <div className="text-lg font-extrabold text-[#1B0A2A]">
                    ONIT — Software Delivery Operating System
                  </div>
                  <div className="text-xs text-[#5A4E68] mt-0.5">Available & active today</div>
                </div>
                <div className="pt-4 border-t border-[#EAE6F0]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-1">
                    Six Purpose-Built Systems
                  </div>
                  <div className="text-xs font-bold text-[#1B0A2A] flex flex-wrap gap-2 mt-1.5">
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EAE6F0]">GROW</span>
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EAE6F0]">DISCOVER</span>
                    <span className="px-2.5 py-1 bg-[#FDF2F7] text-[#C53678] rounded-lg border border-[#C53678]/30 font-extrabold">DELIVER (ONIT)</span>
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EAE6F0]">PEOPLE</span>
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EAE6F0]">MONEY</span>
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EAE6F0]">SERVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership & Team */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full mb-3">
                Leadership
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] mb-3">
                Architecting the Future of Enterprise Systems
              </h2>
              <p className="text-xs sm:text-sm text-[#5A4E68]">
                Led by practitioners with deep expertise in enterprise architecture, engineering governance, and intelligent software delivery systems.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="p-8 rounded-3xl border border-[#EAE6F0] bg-[#FAFAFC] hover:border-[#C53678]/40 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B1A54] to-[#C53678] text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                    SV
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sowmya-vobbilisetty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EAE6F0] text-xs font-semibold text-[#0A66C2] hover:bg-[#F3F6F8] hover:border-[#0A66C2]/40 transition-all shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
                <h3 className="text-xl font-extrabold text-[#1B0A2A] group-hover:text-[#C53678] transition-colors">
                  Sowmya Vobbilisetty
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C53678] mt-1 mb-3">
                  Leadership & Strategy
                </div>
                <p className="text-xs text-[#5A4E68] leading-relaxed">
                  Driving vision, strategic architecture, and operational excellence across the ScaleOnIt ecosystem, championing governed intelligent execution across modern enterprise environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
