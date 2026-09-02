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

          {/* Operating Principles */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] text-center mb-12">
              Our Core Ecosystem Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl border border-[#EAE6F0] bg-[#FAFAFC] shadow-2xs">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF4F2] text-[#FF5841] flex items-center justify-center font-extrabold mb-4 border border-[#FF5841]/20">
                  01
                </div>
                <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Purpose-Built, Not Bloated</h3>
                <p className="text-xs text-[#5A4E68] leading-relaxed">
                  We reject monolithic ERP software that forces clumsy generic workflows. Each of our six systems is engineered specifically for its domain.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-[#EAE6F0] bg-[#FAFAFC] shadow-2xs">
                <div className="w-10 h-10 rounded-2xl bg-[#FDF2F7] text-[#C53678] flex items-center justify-center font-extrabold mb-4 border border-[#C53678]/20">
                  02
                </div>
                <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Governed Intelligence</h3>
                <p className="text-xs text-[#5A4E68] leading-relaxed">
                  Domain AI executes continuous analysis and drafting, but consequential business decisions (deployments, contract approvals) remain with human leads.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-[#EAE6F0] bg-[#FAFAFC] shadow-2xs">
                <div className="w-10 h-10 rounded-2xl bg-[#F5F3F8] text-[#3B1A54] flex items-center justify-center font-extrabold mb-4 border border-[#3B1A54]/20">
                  03
                </div>
                <h3 className="text-base font-extrabold text-[#1B0A2A] mb-2">Context Continuity</h3>
                <p className="text-xs text-[#5A4E68] leading-relaxed">
                  Information flows seamlessly from client agreement to delivery execution and support without manual re-entry or dropped context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
