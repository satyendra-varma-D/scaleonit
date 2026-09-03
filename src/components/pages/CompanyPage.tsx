import PageLayout from '../layout/PageLayout'

interface CompanyPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function CompanyPage({ onNavigate }: CompanyPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="WHO WE ARE &amp; WHY WE EXIST"
      heroTitle={
        <>
          Young builders rewriting how the{' '}
          <span className="text-[#FF5500]">IT service industry operates.</span>
        </>
      }
      heroDescription="We are a fierce group of young Gen-Z IT engineers and product builders who got bored of decades-old, manual IT service grunt work. We are on a mission to automate and unify the entire service industry into a single autonomous operating ecosystem."
      badges={[
        'Next-Gen Product Builders',
        'Service Industry Automation',
        'Grounded Vision & Real Work',
        'Open to Investor & Partner Backing',
      ]}
      primaryCtaText="Collaborate & Back Us"
      onPrimaryCta={() => onNavigate('/demo')}
      secondaryCtaText="Explore Flagship ONIT"
      onSecondaryCta={() => onNavigate('/platform/deliver')}
      ctaTitle="Ready to back or build the future with us?"
      ctaDescription="Whether you are an investor looking for high-conviction product visionaries or an enterprise partner eager to automate delivery, reach out directly to us."
      ctaButtonText="Reach Out to Us"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {/* SECTION 1: The Raw Story & Why We Started */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
              <span>THE FOUNDING TRUTH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              The IT service industry has been stuck doing repetitive grunt work for decades.{' '}
              <span className="text-[#FF5500]">We are here to automate it.</span>
            </h2>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
              <p>
                The global IT services sector powers global business. But for decades, it has remained trapped in a linear, manual services model — billing hours for repetitive BRD authoring, manual sprint scheduling, boilerplate coding, and fragmented handoffs.
              </p>
              <p>
                As young engineers and builders, <strong>we got bored of doing what people have done for ages.</strong> We realized that the real breakthrough isn’t hiring another 50 people to push tickets; it’s building <strong>one unified, autonomous platform</strong> that connects the entire operational lifecycle.
              </p>
              <p className="font-semibold text-slate-900">
                From finding and qualifying leads (GROW), to capturing requirements directly from live calls (DISCOVER), to visual wireframe wonders and multi-agent coding (DELIVER ONIT), all the way to milestone payments (FINANCIALS) and CRM (SERVE).
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-slate-900 shadow-[6px_6px_0px_0px_#0F172A] space-y-6">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500]">
              The Builders' Manifest
            </div>
            <div className="space-y-4 text-xs font-mono leading-relaxed text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-900 font-bold">1. Zero Routine Drudgery:</span> If an AI swarm can generate it in seconds with Playwright verification, humans shouldn&apos;t spend 3 weeks doing it manually.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-900 font-bold">2. Products Over Man-Hours:</span> We are transforming the manual IT services industry into an autonomous software operating model.
              </div>
              <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-900">
                <span className="text-[#FF5500] font-black">3. Unstoppable Conviction:</span> We are young, hungry, and relentlessly focused on executing this unified ecosystem to completion.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: The Honest Gap & Our Roadmap Reality */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A] space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
              HONEST REALITY &amp; EXECUTION HORIZON
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why isn&apos;t all of this available today? <br />
              <span className="text-[#FF5500]">Because we are a small team doing real heavy lifting.</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              If you’ve gone through our homepage, you understand the magnitude of what we are building. Right now, there is an honest gap between the full 6-system vision and day-one availability because we are a focused, tight-knit crew managing simultaneous responsibilities.
            </p>
            <p className="text-sm sm:text-base text-slate-900 font-semibold leading-relaxed">
              We started with our flagship engine — <span className="text-[#FF5500] font-bold">DELIVER (ONIT)</span>. And step-by-step, we will launch every single system until the entire loop is complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
            <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2">
              <div className="font-mono text-xs font-bold text-[#FF5500]">01. FLAGSHIP AVAILABLE</div>
              <div className="font-extrabold text-base text-slate-900">DELIVER (ONIT)</div>
              <p className="text-xs text-slate-600">
                Wireframe wonder prototypes, multi-agent code generation, 100% Playwright QA, and governed deployments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-mono text-xs font-bold text-slate-700">02. NEXT EXPANSION</div>
              <div className="font-extrabold text-base text-slate-900">DISCOVER &amp; SERVE</div>
              <p className="text-xs text-slate-600">
                Call-to-BRD/FRD automated templates, PM review gates, and commit-level customer support traceability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-mono text-xs font-bold text-slate-700">03. ECOSYSTEM COMPLETION</div>
              <div className="font-extrabold text-base text-slate-900">GROW, PEOPLE &amp; FINANCIALS</div>
              <p className="text-xs text-slate-600">
                Lead research co-pilot, AI-assisted sprint allocations, and milestone delivery payment triggers.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Pitch to Investors & Strategic Collaborators */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#FF5500]/15 to-transparent pointer-events-none animate-scan" />

          <div className="lg:col-span-7 space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
              <span>PITCH &amp; COLLABORATION</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Back the builders reinventing the global IT services industry.
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              We are not looking for passive applause. We have the raw hunger, the technical depth, and the architectural clarity. We are actively seeking strategic investors, design partners, and enterprise collaborators who want to back this vision and accelerate our engineering speed.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:prabha4455@gmail.com?subject=ScaleOnIt%20Collaboration%20/%20Investment%20Inquiry"
                className="relative overflow-hidden px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer inline-flex items-center gap-2 before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
              >
                <span className="relative z-10">EMAIL: prabha4455@gmail.com →</span>
              </a>
              <button
                onClick={() => onNavigate('/architecture')}
                className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold uppercase tracking-wider border border-slate-700 transition-colors cursor-pointer"
              >
                Inspect Technical Specs
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 relative z-10 font-mono text-xs">
            <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Why Back ScaleOnIt Now</span>
              <span className="text-emerald-400">HIGH CONVICTION</span>
            </div>
            <div className="space-y-3 text-slate-300 text-[11px] leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-[#FF5500] font-bold">✓</span>
                <span><strong>Massive TAM:</strong> Multibillion-dollar IT services market ripe for end-to-end automation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF5500] font-bold">✓</span>
                <span><strong>No Fluff, Real Code:</strong> Flagship ONIT is active today with working multi-agent synthesis &amp; Playwright QA.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF5500] font-bold">✓</span>
                <span><strong>Direct Line to Founders:</strong> Reach us directly at <span className="text-[#FF5500]">prabha4455@gmail.com</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: The ONIT Team */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-xs">
              FOUNDERSHIP &amp; STEWARDSHIP
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The Minds Driving the Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Steered by passionate practitioners committed to technical sovereignty, transparent governance, and relentless execution.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-900 bg-white shadow-[6px_6px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[8px_8px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 group space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:bg-[#FF5500] transition-colors">
                  OT
                </div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-[#FF5500]">
                  Core Founders
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#FF5500] transition-colors">
                  ONIT Team
                </h3>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500] mt-1">
                  Product Vision · Deep Tech &amp; Architecture · Ecosystem Strategy
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We are a dedicated core group of engineers and builders dividing our energy with laser precision: some of us lead the overarching <strong>product vision &amp; SDLC mechanics</strong>, others architect the <strong>deep multi-agent tech &amp; Playwright verification engines</strong>, while others drive <strong>commercial strategy &amp; enterprise ecosystems</strong>.
              </p>

              {/* Direct Outreach Contact Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[11px] font-mono font-bold uppercase text-slate-500">
                  Direct Line for Collaborations &amp; Investors:
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <a
                    href="mailto:prabha4455@gmail.com"
                    className="font-mono text-sm font-extrabold text-[#FF5500] hover:underline flex items-center gap-1.5"
                  >
                    <span>✉ prabha4455@gmail.com</span>
                  </a>
                  <a
                    href="mailto:prabha4455@gmail.com?subject=Let's%20Talk%20ScaleOnIt"
                    className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-[#FF5500] text-white text-xs font-mono font-bold uppercase transition-colors"
                  >
                    Send Email →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
