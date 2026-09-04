import { useState } from 'react'
import PageLayout from '../../layout/PageLayout'

interface GrowPageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function GrowPage({ onNavigate }: GrowPageProps) {
  const [activeTab, setActiveTab] = useState<'prompt' | 'profiles' | 'leads' | 'voice' | 'copilot'>('prompt')
  const [promptText, setPromptText] = useState(
    'Find IT companies based in Ahmedabad, India with >200 employees and revenue >$200M USD. Extract CXO leadership, tech stack maturity, and current hiring triggers for enterprise digital transformation.'
  )
  const [isRunningResearch, setIsRunningResearch] = useState(false)
  const [researchComplete, setResearchComplete] = useState(true)

  const pipelineStages = [
    {
      id: 'prompt',
      step: '01',
      title: 'Prompt-Driven Task Creation',
      subtitle: 'Natural Language Research Ingestion',
      desc: 'Define targeted criteria in plain English. The autonomous search agent parses geography, headcount, revenue, and vertical signals.',
      icon: '💬',
    },
    {
      id: 'profiles',
      step: '02',
      title: 'Company Profiling & Scoring',
      subtitle: 'Crawler + LLM Synthesis',
      desc: 'Deep web crawlers extract financial reports, tech stacks, and growth velocity to rank high-conviction ICP targets.',
      icon: '🏢',
    },
    {
      id: 'leads',
      step: '03',
      title: 'Executive Lead Discovery',
      subtitle: 'Pre-Call Intelligence Homework',
      desc: 'Identifies senior management (CTO, VP Eng, CIO) and generates briefing dossiers so reps never walk into a call unprepared.',
      icon: '👤',
    },
    {
      id: 'voice',
      step: '04',
      title: 'AI Voice Calling & Qualifying',
      subtitle: 'Powered by Vapi & ElevenLabs',
      desc: 'Custom conversational voice bots initiate calls, ask qualification questions, overcome initial gates, and secure scheduled demos.',
      icon: '📞',
    },
    {
      id: 'copilot',
      step: '05',
      title: 'Live In-Call BDM Co-Pilot',
      subtitle: 'Real-Time Audio Interval LLM Synopsis',
      desc: 'Dedicated meeting bot streams live call audio chunks to LLMs, providing the BDM with runtime hints, objections, and deal-closing cues.',
      icon: '⚡',
    },
  ]

  const profiledCompanies = [
    {
      name: 'InfraScale Technologies',
      location: 'Ahmedabad (SG Highway), India',
      employees: '480+',
      revenue: '$240M USD',
      fitScore: 96,
      techStack: ['AWS', 'Kubernetes', 'Microservices', 'React'],
      triggers: 'Expanding US East operations; migrating legacy ERP to cloud.',
      status: 'Qualified · High Intent',
    },
    {
      name: 'ApexData Solutions',
      location: 'Ahmedabad (Prahladnagar), India',
      employees: '310+',
      revenue: '$215M USD',
      fitScore: 92,
      techStack: ['Azure', 'Snowflake', 'Python', 'Kafka'],
      triggers: 'Active job postings for 20+ Senior DevOps & Data Architects.',
      status: 'Qualified · Ready for Outreach',
    },
    {
      name: 'Novus Digital Corp',
      location: 'Ahmedabad (GIFT City), India',
      employees: '620+',
      revenue: '$380M USD',
      fitScore: 89,
      techStack: ['GCP', 'PostgreSQL', 'Golang', 'Next.js'],
      triggers: 'Recent press release: $40M investment in AI-driven internal tooling.',
      status: 'Qualified · Nurture Lead',
    },
  ]

  const seniorLeads = [
    {
      name: 'Rajesh Varma',
      title: 'Chief Technology Officer (CTO)',
      company: 'InfraScale Technologies',
      background: 'Ex-TCS, 18+ yrs in Enterprise Architecture. Passionate about AI-augmented SDLC.',
      painPoints: ['Legacy monolithic debt slows sprint releases', 'Need automated QA & spec accuracy before sprint starts'],
      recommendedHook: 'Mention how DISCOVER + DELIVER reduces sprint rework by 40% with automated BRD & architecture modeling.',
    },
    {
      name: 'Pooja Kulkarni',
      title: 'VP of Engineering',
      company: 'ApexData Solutions',
      background: '14+ yrs leading distributed engineering squads. Strong advocate for CI/CD observability.',
      painPoints: ['Developer context switching across Jira/GitHub/Figma', 'Estimation variance on fixed-price client projects'],
      recommendedHook: 'Reference ScaleOnIt historical effort benchmarking that roots proposals in real repository velocity.',
    },
  ]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="Ecosystem System 01 · Autonomous Research & Sales Execution"
      heroTitle={
        <>
          Autonomous Research to Closed Deals: <br className="hidden sm:inline" />
          <span className="text-[#FF5500]">From Prompt to Live In-Call AI Co-Pilot.</span>
        </>
      }
      heroDescription="Create natural language research tasks, autonomously profile companies, unearth CXO leads with rich pre-call homework, qualify via custom AI voice agents (Vapi & ElevenLabs), and guide your BDM live during calls with real-time LLM interval synopsis."
      heroBadges={[
        'Prompt-to-Company Discovery',
        'CXO Lead Dossier Generation',
        'Vapi + ElevenLabs Voice Outreach',
        'Live In-Call BDM Meeting Co-Pilot',
      ]}
      ctaTitle="Accelerate your enterprise outbound engine with autonomous AI"
      ctaDescription="From your first prompt to the final contract signature, ScaleOnIt GROW gives your sales and solutions team an unfair technical advantage."
      ctaButtonText="Explore Ecosystem Demo"
    >
      {/* 01. The Complete 5-Stage Autonomous Engine */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-3 shadow-xs">
              THE COMPLETE WORKFLOW
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              How GROW Converts A Simple Prompt Into Closed Contracts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Click through any stage below to inspect the live engine, crawler intelligence, voice calling, and in-call meeting co-pilot.
            </p>
          </div>

          {/* Interactive Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {pipelineStages.map((stage) => {
              const isActive = activeTab === stage.id
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id as any)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-orange-50/90 border-[#FF5500] shadow-[3px_3px_0px_0px_#0F172A] -translate-y-0.5'
                      : 'bg-white/95 border-slate-200 shadow-2xs hover:border-orange-300 hover:bg-orange-50/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded border ${
                        isActive
                          ? 'bg-[#FF5500] text-white border-[#FF5500]'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="text-xl">{stage.icon}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono tracking-tight leading-tight mb-1">
                    {stage.title}
                  </div>
                  <div className="text-[10px] text-slate-600 line-clamp-2 leading-snug">
                    {stage.subtitle}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Dynamic Interactive Stage Simulator */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A]">
            {/* TAB 1: PROMPT INGESTION */}
            {activeTab === 'prompt' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded">
                      <span>STAGE 01</span> · NATURAL LANGUAGE TASK CREATION
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      Turn Any Natural Language Criteria Into Structured Autonomous Research
                    </h3>
                  </div>
                  <div className="font-mono text-xs text-slate-500">
                    Engine: <span className="text-slate-900 font-bold">ScaleOnIt DeepCrawler Agent v3.4</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-200/80">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Research Task Prompt (Try editing or clicking &quot;Run Research Task&quot;):
                  </label>
                  <textarea
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    rows={3}
                    className="w-full p-3.5 rounded-lg border border-slate-300 font-mono text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] bg-white"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Parsed: <strong className="text-slate-900">Location=Ahmedabad</strong> | <strong className="text-slate-900">Size&gt;200</strong> | <strong className="text-slate-900">Rev&gt;$200M</strong> | <strong className="text-slate-900">Domain=IT Services</strong>
                    </div>
                    <button
                      onClick={() => {
                        setIsRunningResearch(true)
                        setTimeout(() => {
                          setIsRunningResearch(false)
                          setActiveTab('profiles')
                        }, 800)
                      }}
                      className="px-4 py-2 rounded-lg bg-[#FF5500] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#e04b00] shadow-[2px_2px_0px_0px_#0F172A] cursor-pointer flex items-center gap-2"
                    >
                      {isRunningResearch ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Crawling Web &amp; Databases...
                        </>
                      ) : (
                        <>
                          <span>⚡ Run Research Task</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <div className="text-[#FF5500] font-bold mb-1">🔍 Multi-Vector Search</div>
                    <p className="text-slate-600 text-[11px] font-sans">
                      Dispatches parallel crawlers across Registrar filings, LinkedIn Talent Insights, G2, clutch.co, and corporate annual reports.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <div className="text-slate-900 font-bold mb-1">📊 Financial &amp; Headcount Verification</div>
                    <p className="text-slate-600 text-[11px] font-sans">
                      Validates verified employee count &gt;200 and audited revenue figures (&gt;$200M USD) with cross-source reconciliation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <div className="text-emerald-600 font-bold mb-1">🎯 Automated Scoring Model</div>
                    <p className="text-slate-600 text-[11px] font-sans">
                      Evaluates technology footprint compatibility against your engineering services portfolio to calculate Win Likelihood.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROFILES & SCORING */}
            {activeTab === 'profiles' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded">
                      <span>STAGE 02</span> · DEEP COMPANY PROFILING &amp; SCORING
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      Autonomous Intelligence Dossiers &amp; Opportunity Scoring
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#FF5500] text-white font-mono text-xs font-bold hover:bg-[#e04b00] shadow-[2px_2px_0px_0px_#0F172A] cursor-pointer"
                  >
                    Next: Extract Senior Leads →
                  </button>
                </div>

                <div className="space-y-3">
                  {profiledCompanies.map((comp, idx) => (
                    <div
                      key={comp.name}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-[#FF5500] shadow-2xs hover:shadow-[3px_3px_0px_0px_#FF5500] transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5500] font-mono font-extrabold text-xs flex items-center justify-center border border-orange-200">
                            0{idx + 1}
                          </span>
                          <div>
                            <h4 className="text-base font-extrabold text-slate-900">{comp.name}</h4>
                            <span className="text-xs text-slate-500 font-mono">📍 {comp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">ICP Fit Score</div>
                            <div className="text-sm font-mono font-extrabold text-emerald-600">{comp.fitScore}/100</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-mono font-bold">
                            {comp.status}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs font-mono">
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Scale Metrics</span>
                          <span className="text-slate-900 font-bold">{comp.employees} Staff · {comp.revenue}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Tech Stack Detected</span>
                          <div className="flex flex-wrap gap-1 mt-0.5">
                            {comp.techStack.map((tech) => (
                              <span key={tech} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Buying Trigger</span>
                          <span className="text-slate-700 text-[11px] font-sans font-medium line-clamp-2">
                            {comp.triggers}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: SENIOR MANAGEMENT LEADS & HOMEWORK */}
            {activeTab === 'leads' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded">
                      <span>STAGE 03</span> · EXECUTIVE LEAD MAPPING &amp; PRE-CALL DOSSIER
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      Deep Executive Homework So Sales Reps Never Sound Generic
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('voice')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#FF5500] text-white font-mono text-xs font-bold hover:bg-[#e04b00] shadow-[2px_2px_0px_0px_#0F172A] cursor-pointer"
                  >
                    Next: AI Voice Calling →
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {seniorLeads.map((lead) => (
                    <div
                      key={lead.name}
                      className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-sm font-extrabold text-slate-900">{lead.name}</div>
                            <div className="text-xs text-[#FF5500] font-mono font-bold">{lead.title}</div>
                            <div className="text-[11px] text-slate-500">{lead.company}</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200 text-[#FF5500] font-mono text-[10px] font-bold">
                          Key Decision Maker
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                        <span className="font-mono text-[10px] font-bold text-slate-500 uppercase block mb-1">Executive Background</span>
                        <p className="text-slate-700 font-sans">{lead.background}</p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-mono text-[10px] font-bold text-slate-500 uppercase block">Identified Technical Pain Points</span>
                        {lead.painPoints.map((p, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <span className="text-[#FF5500] font-bold">⚡</span>
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-lg bg-orange-50/80 border border-orange-200 text-xs">
                        <span className="font-mono text-[10px] font-bold text-[#FF5500] uppercase block mb-1">Recommended Value Hook</span>
                        <p className="text-slate-800 font-medium leading-snug">{lead.recommendedHook}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: VAPI + ELEVENLABS AI CALLING */}
            {activeTab === 'voice' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded">
                      <span>STAGE 04</span> · CUSTOM AI VOICE QUALIFICATION
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      Autonomous Calling with Vapi &amp; ElevenLabs Natural Voice
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('copilot')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#FF5500] text-white font-mono text-xs font-bold hover:bg-[#e04b00] shadow-[2px_2px_0px_0px_#0F172A] cursor-pointer"
                  >
                    Next: Live BDM Co-Pilot →
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  {/* Left Voice Bot Console */}
                  <div className="lg:col-span-1 p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        VOICE SESSION ACTIVE
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">03:42 min</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700 font-mono text-xs space-y-1">
                      <div className="text-slate-400 text-[10px] uppercase">Target Contact:</div>
                      <div className="text-white font-bold">Rajesh Varma (CTO)</div>
                      <div className="text-[#FF5500] text-[11px]">InfraScale Technologies</div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700 space-y-2 text-xs font-mono">
                      <div className="text-slate-400 text-[10px] uppercase">Voice Stack Configuration:</div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">Telephony Engine:</span>
                        <span className="text-[#FF5500] font-bold">Vapi.ai API</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">Voice Synthesis:</span>
                        <span className="text-emerald-400 font-bold">ElevenLabs Turbo v2.5</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">Latency:</span>
                        <span className="text-white font-bold">&lt;480ms turnaround</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-200">
                      <span className="font-bold text-emerald-400 block mb-1">✓ Qualification Result</span>
                      Lead confirmed pain with sprint estimation accuracy. Agreed to a 30-min discovery call with senior BDM this Thursday at 3:00 PM IST.
                    </div>
                  </div>

                  {/* Right Live Call Transcript */}
                  <div className="lg:col-span-2 p-5 rounded-xl bg-orange-50/40 border border-orange-200/80 space-y-3">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center justify-between">
                      <span>Real-Time Voice Call Stream</span>
                      <span className="text-[#FF5500] text-[11px]">Autonomous Qualification</span>
                    </div>

                    <div className="space-y-3 max-h-[260px] overflow-y-auto pr-2 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <span className="text-[#FF5500] font-bold block text-[10px] uppercase">ScaleOnIt AI Voice Agent</span>
                        <p className="text-slate-800 font-sans mt-0.5 text-xs">
                          &quot;Hi Rajesh, I noticed InfraScale is expanding US operations and scaling the engineering headcount in Ahmedabad. Quick question: is sprint estimation variance on multi-service architectures currently creating bottlenecks for your quarterly release timelines?&quot;
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-100 border border-slate-200">
                        <span className="text-slate-900 font-bold block text-[10px] uppercase">Rajesh Varma (CTO)</span>
                        <p className="text-slate-800 font-sans mt-0.5 text-xs">
                          &quot;Yes, honestly that&apos;s one of our biggest headaches. Sales commits to deadlines before our architecture squad finishes the work breakdown, so we constantly absorb scope creep.&quot;
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <span className="text-[#FF5500] font-bold block text-[10px] uppercase">ScaleOnIt AI Voice Agent</span>
                        <p className="text-slate-800 font-sans mt-0.5 text-xs">
                          &quot;That&apos;s precisely what we eliminate. ScaleOnIt connects presales scope directly to historical sprint velocity so proposals are backed by real engineering data. Our Solutions Director has 15 minutes this Thursday to walk you through the architecture benchmark—would 3 PM IST work for your calendar?&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: LIVE BDM IN-CALL MEETING CO-PILOT */}
            {activeTab === 'copilot' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded">
                      <span>STAGE 05</span> · LIVE MEETING BDM CO-PILOT HUD
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      Real-Time In-Call Audio Chunk LLM Synopsis &amp; Deal Navigation
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-red-600">LIVE ZOOM / TEAMS SYNC</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Left: Live Audio Chunker */}
                  <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-slate-300 font-bold">Audio Stream Uploader</span>
                      <span className="text-[#FF5500]">Chunk: 10s intervals</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Meeting:</span>
                        <span className="text-white font-bold">InfraScale Architecture Discovery</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Attendees:</span>
                        <span className="text-slate-200">Rajesh Varma (CTO) + BDM Team</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Elapsed:</span>
                        <span className="text-emerald-400 font-bold">18m 42s</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-mono text-[10px] uppercase text-slate-400 font-bold">Recent Audio Intervals Processed</div>
                      <div className="space-y-1.5 font-mono text-[11px]">
                        <div className="p-2 rounded bg-slate-800/60 border border-slate-700 text-slate-300 flex items-center justify-between">
                          <span>[18:00 - 18:10] Client raises compliance risk in BFSI</span>
                          <span className="text-emerald-400 text-[10px]">✓ Synced</span>
                        </div>
                        <div className="p-2 rounded bg-slate-800/60 border border-slate-700 text-slate-300 flex items-center justify-between">
                          <span>[18:10 - 18:20] Asks about multi-tenant data isolation</span>
                          <span className="text-emerald-400 text-[10px]">✓ Synced</span>
                        </div>
                        <div className="p-2 rounded bg-slate-800/60 border border-slate-700 text-slate-300 flex items-center justify-between">
                          <span>[18:20 - 18:30] Discussion on SOC2 Type II certs</span>
                          <span className="text-[#FF5500] text-[10px] animate-pulse">⚡ LLM Ingesting</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Runtime LLM Synopsis & BDM Guidance HUD */}
                  <div className="lg:col-span-7 p-5 rounded-xl bg-orange-50/50 border border-orange-200/90 space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-bold text-slate-900 uppercase">Runtime LLM Synopsis for BDM / BDE</span>
                      <span className="text-[#FF5500] font-bold">Updated 2s ago</span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900">
                        <span className="text-base">🧠</span>
                        <span>Client State &amp; Sentiment Snapshot</span>
                      </div>
                      <p className="text-xs text-slate-700 font-sans leading-relaxed">
                        Client is highly receptive to automated BRD generation, but currently hesitant regarding banking compliance security. They need reassurance on SOC2 Type II compliance and isolated VPC deployment.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500]">
                        <span className="text-base">💡</span>
                        <span>Recommended Next Question to Steer &amp; Close</span>
                      </div>
                      <p className="text-xs text-slate-900 font-medium font-sans leading-relaxed">
                        &quot;Rajesh, all ScaleOnIt DISCOVER and DELIVER workspaces deploy inside your own AWS VPC with end-to-end KMS encryption and audited SOC2 controls. Would you like us to include the dedicated VPC architecture addendum in the formal scope proposal?&quot;
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Closing Probability</span>
                        <span className="text-emerald-600 font-extrabold text-sm">88% (High Velocity)</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Next Action Trigger</span>
                        <span className="text-slate-900 font-bold text-xs">Auto-draft Proposal in DISCOVER</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 02. Upstream & Downstream Ecosystem Continuity */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-12 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-md">
              SEAMLESS CONTEXT HANDOFF
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              From Research Task to Ingested Proposal in DISCOVER &amp; DELIVER.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              When a lead is qualified in GROW, 100% of the gathered intelligence—company profile, tech stack flags, recorded calls, and live meeting synopsis—automatically feeds into DISCOVER for requirements engineering and DELIVER for sprint execution. Zero context lost between sales and engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="text-[#FF5500] font-bold mb-1">Downstream to DISCOVER</div>
                <div className="text-slate-300 text-[11px]">Transfers meeting transcripts, pain points, and architectural parameters directly into the BRD &amp; user story generator.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="text-emerald-400 font-bold mb-1">Downstream to DELIVER &amp; FINANCIALS</div>
                <div className="text-slate-300 text-[11px]">Initializes contract milestones, margin targets, and engineering capacity requirements without manual re-entry.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
