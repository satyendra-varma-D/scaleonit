import { useState } from 'react'
import GlowCard from '../../shared/GlowCard'

interface DeliverPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function DeliverPage({ onNavigate }: DeliverPageProps) {
  const [activeSimTab, setActiveSimTab] = useState<number>(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Section 2: What DELIVER does (5 steps)
  const workflowSteps = [
    {
      step: '01',
      name: 'UNDERSTAND',
      desc: 'Understand customer requirements and project needs.',
      icon: '📥',
    },
    {
      step: '02',
      name: 'PLAN',
      desc: 'Turn requirements into a clear software plan.',
      icon: '📐',
    },
    {
      step: '03',
      name: 'BUILD',
      desc: 'Build the application with AI-assisted development.',
      icon: '⚡',
    },
    {
      step: '04',
      name: 'TEST',
      desc: 'Run automated tests and review the result.',
      icon: '🧪',
    },
    {
      step: '05',
      name: 'RELEASE',
      desc: 'Move the finished software into production.',
      icon: '🚀',
    },
  ]

  // Section 4: Capabilities (6 cards)
  const capabilities = [
    {
      num: '01',
      title: 'Requirements & Planning',
      desc: 'Bring customer requirements, documents and project information into one place.',
      icon: '📋',
    },
    {
      num: '02',
      title: 'Clear Software Specifications',
      desc: 'Turn business needs into clear requirements for the team.',
      icon: '📑',
    },
    {
      num: '03',
      title: 'AI-Assisted Development',
      desc: 'Use AI to help build applications and reduce repetitive development work.',
      icon: '⚡',
    },
    {
      num: '04',
      title: 'Live Staging',
      desc: 'See changes in a working environment and review them as the project moves forward.',
      icon: '🔄',
    },
    {
      num: '05',
      title: 'Automated Testing',
      desc: 'Run automated tests before software is released.',
      icon: '🧪',
    },
    {
      num: '06',
      title: 'Cloud Release',
      desc: 'Deploy finished software to the cloud with a clear release process.',
      icon: '☁️',
    },
  ]

  // Section 5: Visual workflow diagram items
  const visualFlow = [
    { num: '1', title: 'REQUIREMENTS', desc: 'Customer needs, documents and project information.' },
    { num: '2', title: 'PLANNING', desc: 'Clear requirements and software plan.' },
    { num: '3', title: 'DEVELOPMENT', desc: 'Application development with AI assistance.' },
    { num: '4', title: 'STAGING', desc: 'Review and improve the working application.' },
    { num: '5', title: 'TESTING', desc: 'Automated testing and quality checks.' },
    { num: '6', title: 'RELEASE', desc: 'Deploy the finished software.' },
  ]

  // Section 7: Product simulator tabs demonstrating real work
  const simTabs = [
    {
      title: '1. Requirements',
      command: 'deliver parse --source="client-requirements.pdf"',
      status: 'REQUIREMENTS ORGANIZED',
      lines: [
        '[INPUT] Ingesting client brief + requirements document...',
        '[PLAN] 24 user stories and project milestones structured.',
        '[STATUS] ✓ Requirements verified and ready for planning.',
      ],
    },
    {
      title: '2. Application Build',
      command: 'deliver build --stack="react,node-api" --assist=active',
      status: 'CODE GENERATED',
      lines: [
        '[BUILD] Creating frontend UI components and API endpoints...',
        '[STAGING] Live staging preview active at https://staging-preview.scaleonit.app',
        '[REVIEW] Changes verified in preview environment.',
      ],
    },
    {
      title: '3. Automated Testing',
      command: 'deliver test --suite="automated-regression"',
      status: 'TESTS PASSED',
      lines: [
        '[TEST] Running automated functional and UI regression suites...',
        '[COVERAGE] 42 test cases executed across user journeys.',
        '[RESULT] ✓ 42/42 Passed (0 errors, 0 regressions).',
      ],
    },
    {
      title: '4. Cloud Release',
      command: 'deliver release --target="cloud-production"',
      status: 'RELEASE READY',
      lines: [
        '[SECURITY] Quality checks verified and release package prepared.',
        '[DEPLOY] Deploying finished application to cloud staging/production.',
        '🚀 Status: Live and ready for users.',
      ],
    },
  ]

  // Section 9: Audience categories
  const targetAudiences = [
    {
      title: 'IT Service Companies',
      desc: 'Companies delivering IT implementations and custom software services for clients.',
      icon: '🏢',
    },
    {
      title: 'Software Development Teams',
      desc: 'Agencies, studios, and development teams building web, mobile, and cloud software.',
      icon: '💻',
    },
    {
      title: 'Digital Service Companies',
      desc: 'Firms managing end-to-end digital solutions and client project deliverables.',
      icon: '⚡',
    },
    {
      title: 'Enterprise Delivery Teams',
      desc: 'Teams responsible for structured software rollouts with clear quality controls.',
      icon: '🛡️',
    },
  ]

  // Section 10: ScaleOnIt Ecosystem systems
  const ecosystemSystems = [
    { name: 'GROW', job: 'Find and manage new business opportunities.', icon: '🌱', status: 'Roadmap' },
    { name: 'DISCOVER', job: 'Understand customer needs and define requirements.', icon: '🔍', status: 'Roadmap' },
    { name: 'DELIVER', job: 'Build, test and release software.', icon: '⚡', status: 'Available Today', active: true },
    { name: 'PEOPLE', job: 'Manage teams and workforce needs.', icon: '👥', status: 'Roadmap' },
    { name: 'FINANCIALS', job: 'Manage billing, payments and project finances.', icon: '📊', status: 'Roadmap' },
    { name: 'SERVE', job: 'Manage customers and ongoing relationships.', icon: '🛡️', status: 'Roadmap' },
  ]

  // Section 12: FAQ
  const faqs = [
    {
      q: 'What is ScaleOnIt DELIVER?',
      a: "DELIVER is ScaleOnIt's software delivery system. It helps IT and software service teams move from customer requirements to working software through planning, development, testing and release.",
    },
    {
      q: 'What is ONIT?',
      a: 'ONIT is the technology powering ScaleOnIt DELIVER. It helps automate and support software delivery work.',
    },
    {
      q: 'Is DELIVER available today?',
      a: 'Yes. DELIVER is the first available system in the ScaleOnIt ecosystem.',
    },
    {
      q: 'Who is DELIVER for?',
      a: 'DELIVER is designed for IT service companies, software development teams and businesses that build software for customers.',
    },
    {
      q: 'What does DELIVER help with?',
      a: 'DELIVER helps teams manage requirements, plan software, build applications, review changes, test software and release it.',
    },
    {
      q: 'Is DELIVER only an AI coding tool?',
      a: 'No. DELIVER covers the broader software delivery process. AI is used where it can reduce repetitive work and help teams move faster.',
    },
    {
      q: 'How does DELIVER fit into ScaleOnIt?',
      a: 'DELIVER is one of six systems planned for the ScaleOnIt business ecosystem. It is the first system available today.',
    },
  ]

  const featureTags = [
    'Requirements & Planning',
    'AI-Assisted Development',
    'Live Staging',
    'Automated Testing',
    'Cloud Deployment',
    'Production Release',
  ]

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]">
      {/* ==================================================
          SECTION 1 — HERO (2-COLUMN BALANCED LAYOUT WITH LIVE SIMULATOR)
          ================================================== */}
      <section className="relative overflow-hidden bg-transparent border-b border-slate-200/80 py-16 sm:py-20">
        {/* Ambient subtle glow */}
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Core Positioning & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-xs">
                SCALEONIT DELIVER
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                From requirements to production software.
                <span className="text-[#FF5500] block mt-1.5">
                  Built to make software delivery simpler.
                </span>
              </h1>

              {/* Supporting paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                DELIVER helps IT and software service teams turn customer requirements into working software — from planning and development to testing and release.
              </p>

              {/* Small supporting line */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
                <span>Powered by ONIT</span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="text-slate-600 font-normal capitalize">Available Today</span>
              </div>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {featureTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs font-medium px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('deliver-capabilities')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  EXPLORE DELIVER
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('deliver-workflow')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="border border-slate-200 bg-white text-slate-800 font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg hover:bg-slate-50 hover:border-[#FF5500] hover:text-slate-900 transition-all cursor-pointer shadow-xs"
                >
                  SEE HOW IT WORKS
                </button>
              </div>
            </div>

            {/* Right Column: Live Interactive Delivery Engine Simulator */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A] relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                    <span className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                      DELIVER Pipeline Monitor
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {simTabs[activeSimTab].status}
                  </span>
                </div>

                {/* Interactive Stage Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  {simTabs.map((tab, idx) => (
                    <button
                      key={tab.title}
                      type="button"
                      onClick={() => setActiveSimTab(idx)}
                      className={`py-2 px-2 text-[10px] sm:text-[11px] font-bold font-mono rounded-lg transition-all text-center cursor-pointer ${
                        activeSimTab === idx
                          ? 'bg-[#FF5500] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Terminal & Logs Container */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-3 font-mono text-xs min-h-[160px]">
                  <div className="flex items-center gap-2 text-slate-500 text-[11px] pb-2 border-b border-slate-100">
                    <span className="text-[#FF5500] font-extrabold">$</span>
                    <span className="text-slate-800 font-bold truncate">{simTabs[activeSimTab].command}</span>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed">
                    {simTabs[activeSimTab].lines.map((line, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 text-slate-700">
                        <span className="text-[#FF5500] font-bold">&gt;</span>
                        <span className={line.includes('✓') ? 'text-emerald-700 font-bold' : line.includes('🚀') ? 'text-[#FF5500] font-bold' : ''}>
                          {line}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center gap-1 text-slate-400 pt-1 text-[10px]">
                      <span>continuous execution pipeline ready</span>
                      <span className="inline-block w-1.5 h-3 bg-[#FF5500] animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Bottom System Context Info */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Engine: <strong className="text-slate-900">ONIT 2.4</strong></span>
                  <span className="text-[#FF5500] font-bold">● Live Staging Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION 2 — WHAT DELIVER DOES
          ================================================== */}
      <section
        id="deliver-workflow"
        className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              WHAT DELIVER DOES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Software delivery, from one place.
            </h2>
            <div className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto space-y-2 mb-4">
              <p>Software projects involve many steps and many handoffs.</p>
              <p className="text-sm text-slate-500">
                Requirements need to be understood. Plans need to be created. Software needs to be built. Changes need to be reviewed. Testing needs to happen. The final product needs to be released.
              </p>
            </div>
            <div className="inline-block font-mono text-sm font-bold text-slate-900 bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_#0F172A]">
              DELIVER brings these steps into one connected workflow.
            </div>
          </div>

          {/* 5-Step Workflow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {workflowSteps.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] flex flex-col justify-between hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-black text-[#FF5500] bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60">
                      {item.step}
                    </span>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="font-extrabold text-base text-slate-900 group-hover:text-[#FF5500] transition-colors mb-1.5">
                    {item.name}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — WHY DELIVER
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 p-8 sm:p-12 shadow-[3px_3px_0px_0px_#0F172A]">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              THE PROBLEM WE SOLVE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Software delivery has too many handoffs.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
              A typical project can move between customers, business teams, analysts, designers, developers, testers and operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-lg bg-orange-50/50 border border-orange-200/60 text-xs font-medium text-slate-700 flex items-center gap-2.5">
                <span className="text-[#FF5500] font-mono font-bold">↳</span> Information gets repeated.
              </div>
              <div className="p-3.5 rounded-lg bg-orange-50/50 border border-orange-200/60 text-xs font-medium text-slate-700 flex items-center gap-2.5">
                <span className="text-[#FF5500] font-mono font-bold">↳</span> Requirements get lost.
              </div>
              <div className="p-3.5 rounded-lg bg-orange-50/50 border border-orange-200/60 text-xs font-medium text-slate-700 flex items-center gap-2.5">
                <span className="text-[#FF5500] font-mono font-bold">↳</span> Changes take time.
              </div>
              <div className="p-3.5 rounded-lg bg-orange-50/50 border border-orange-200/60 text-xs font-medium text-slate-700 flex items-center gap-2.5">
                <span className="text-[#FF5500] font-mono font-bold">↳</span> Teams use different tools.
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-semibold mb-6">
              DELIVER brings the work into one connected process.
            </p>

            {/* Highlighted statement */}
            <div className="p-5 rounded-xl bg-orange-50 border border-orange-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono text-xs sm:text-sm font-bold text-slate-900 shadow-2xs">
              <div>✓ Less back-and-forth.</div>
              <div>✓ Less repeated work.</div>
              <div>✓ More visibility.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — DELIVER CAPABILITIES
          ================================================== */}
      <section
        id="deliver-capabilities"
        className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              PRODUCT CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Everything needed to deliver software.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Real capabilities designed to support teams from the initial requirement to the finished production release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((item) => (
              <GlowCard
                key={item.num}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl p-2 rounded-xl bg-orange-50/80 border border-orange-200/60" aria-hidden="true">{item.icon}</span>
                    <span className="font-mono text-xs font-bold text-[#FF5500] bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#FF5500] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — HOW DELIVER WORKS
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              HOW DELIVER WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              From a customer requirement to working software.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              A clear step-by-step process that keeps information connected from start to finish.
            </p>
          </div>

          {/* Visual 6-Step Flow Diagram */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visualFlow.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all group relative"
                >
                  <div className="font-mono text-xs font-black text-[#FF5500] mb-1 bg-orange-50 px-2 py-0.5 rounded w-fit border border-orange-200/60">
                    Step {step.num}
                  </div>
                  <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#FF5500] transition-colors mb-1">
                    {step.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-snug font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 — ONIT (POWERED BY ONIT)
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 p-8 sm:p-12 shadow-[3px_3px_0px_0px_#0F172A]">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              THE TECHNOLOGY BEHIND DELIVER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Powered by ONIT.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
              ONIT is the technology behind ScaleOnIt DELIVER.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              It helps automate and support the work involved in software delivery — from understanding requirements and building applications to testing and release.
            </p>

            <div className="p-5 rounded-xl bg-orange-50/70 border border-orange-200 font-mono text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold shadow-2xs">
              ONIT helps the team do more of the repetitive work automatically while keeping people involved where decisions matter.
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7 — REAL PRODUCT / PRODUCT SCREEN
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-xs">
                PRODUCT VIEW
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                See the work as it happens.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                DELIVER gives teams a working view of the software delivery process — from requirements and development to testing and release.
              </p>

              <div className="pt-2 space-y-2 font-mono text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5500] font-bold">✓</span> Real-time progress across all delivery steps
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5500] font-bold">✓</span> Clear requirements linked to active code
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5500] font-bold">✓</span> Automated test results before release
                </div>
              </div>
            </div>

            {/* Real Product Simulation Terminal */}
            <div className="lg:col-span-7 bg-[#0D1117] text-white rounded-3xl border border-slate-800 p-6 shadow-2xl font-mono text-xs ring-1 ring-orange-500/20">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                <span className="flex items-center gap-2 font-bold text-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5500] inline-block animate-pulse" />
                  ScaleOnIt DELIVER · Pipeline Monitor
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                  {simTabs[activeSimTab].status}
                </span>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 p-1 bg-slate-900 rounded-xl border border-slate-800">
                {simTabs.map((tab, idx) => (
                  <button
                    key={tab.title}
                    type="button"
                    onClick={() => setActiveSimTab(idx)}
                    className={`py-1.5 px-2 text-[10px] font-bold rounded-lg transition-all text-center cursor-pointer ${
                      activeSimTab === idx
                        ? 'bg-[#FF5500] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Terminal Screen */}
              <div className="space-y-3 bg-[#090D12] p-4 rounded-xl border border-slate-800 min-h-[150px]">
                <div className="flex items-center gap-2 text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                  <span className="text-[#FF5500] font-bold">$</span>
                  <span className="text-slate-200">{simTabs[activeSimTab].command}</span>
                </div>

                <div className="space-y-2 text-[11px] text-slate-300">
                  {simTabs[activeSimTab].lines.map((line, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">
                      {line.includes('✓') ? (
                        <span className="text-emerald-400 font-medium">{line}</span>
                      ) : line.includes('🚀') ? (
                        <span className="text-[#FF5500] font-bold">{line}</span>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-slate-500 pt-1">
                    <span>&gt; completed</span>
                    <span className="terminal-cursor">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8 — GOVERNANCE / CONTROL
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              PROCESS &amp; CONTROL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Built for real software teams.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              DELIVER is designed for teams that need visibility, control and a clear process from requirements to release.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              { label: 'Clear requirements', desc: 'Agreed upon before building begins' },
              { label: 'Trackable changes', desc: 'Visibility into every update' },
              { label: 'Reviewable work', desc: 'Live staging for team feedback' },
              { label: 'Automated testing', desc: 'Continuous quality checks' },
              { label: 'Controlled releases', desc: 'Safe deployment to production' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all text-center flex flex-col justify-between"
              >
                <div className="font-mono text-xs font-bold text-[#FF5500] mb-1">
                  ✓
                </div>
                <div className="font-extrabold text-sm text-slate-900 mb-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9 — WHO IS DELIVER FOR?
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              WHO DELIVER IS FOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Built for teams that deliver software.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              DELIVER is designed for IT service companies, software development teams and businesses that build software for customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {targetAudiences.map((aud) => (
              <div
                key={aud.title}
                className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all group"
              >
                <span className="text-2xl mb-3 p-2 rounded-xl bg-orange-50/80 border border-orange-200/60 inline-block">{aud.icon}</span>
                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#FF5500] transition-colors mb-1.5">
                  {aud.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {aud.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10 — SCALEONIT ECOSYSTEM CONNECTION
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              THE SCALEONIT ECOSYSTEM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              DELIVER is one part of ScaleOnIt.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-2">
              ScaleOnIt is building a connected business platform for IT and software service companies.
            </p>
            <p className="text-sm font-semibold text-slate-900">
              DELIVER is the software delivery system.
            </p>
          </div>

          {/* 6 Systems List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
            {ecosystemSystems.map((sys) => (
              <div
                key={sys.name}
                className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                  sys.active
                    ? 'bg-white/95 backdrop-blur-md border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500]'
                    : 'bg-white/95 backdrop-blur-md border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{sys.icon}</span>
                    <span className="font-extrabold text-sm text-slate-900">{sys.name}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug font-medium">
                    {sys.job}
                  </p>
                </div>
                <span
                  className={`font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded shrink-0 ${
                    sys.active
                      ? 'bg-[#FF5500] text-white'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {sys.status}
                </span>
              </div>
            ))}
          </div>

          {/* Connection note */}
          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-center font-mono text-xs sm:text-sm font-bold text-slate-900 shadow-[3px_3px_0px_0px_#0F172A]">
            DELIVER is available today. The other systems are being built as part of the wider ScaleOnIt ecosystem.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 11 — WHY SCALEONIT
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 p-8 sm:p-12 shadow-[3px_3px_0px_0px_#0F172A]">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              WHY CONNECTED SYSTEMS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              One connected platform instead of disconnected tools.
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mb-4 font-normal">
              Software delivery does not happen by itself.
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-medium">
              <div>• It starts with a customer.</div>
              <div>• It involves requirements, people and projects.</div>
              <div>• It needs financial tracking.</div>
              <div>• And after delivery, the customer still needs support.</div>
            </div>

            <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-semibold mb-6">
              ScaleOnIt is being built to connect these parts of the business. DELIVER is where that journey starts today.
            </p>

            <button
              onClick={() => onNavigate('/', '#six-systems')}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF5500] hover:text-[#E04B00] transition-colors cursor-pointer uppercase"
            >
              Explore the ScaleOnIt Ecosystem →
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 12 — FAQ
          ================================================== */}
      <section
        id="deliver-faq"
        className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Questions about DELIVER
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Clear answers about DELIVER, ONIT, and how they fit into ScaleOnIt.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx

              return (
                <div
                  key={idx}
                  className={`rounded-2xl bg-white/95 backdrop-blur-md border transition-all ${
                    isOpen
                      ? 'border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500]'
                      : 'border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-slate-400'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-orange-50/30 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-base text-slate-900">
                      {faq.q}
                    </span>
                    <span className="font-mono text-base font-bold text-[#FF5500] w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 13 — FINAL CTA
          ================================================== */}
      <section className="py-20 bg-transparent text-slate-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-14 shadow-2xl space-y-6 relative overflow-hidden ring-1 ring-orange-500/20">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-md">
              <span>GET STARTED</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Ready to simplify software delivery?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              See how ScaleOnIt DELIVER can take your team from requirements to production software.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('deliver-capabilities')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                EXPLORE DELIVER
              </button>
              <button
                onClick={() => onNavigate('/demo')}
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-colors cursor-pointer"
              >
                TALK TO US
              </button>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
              <span>✓ ScaleOnIt Ecosystem</span>
              <span>✓ DELIVER Software Delivery System</span>
              <span>✓ Powered by ONIT</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
