import { useState, useId } from 'react'

interface TalkToUsPageProps {
  onBackToHome?: () => void
}

const focusAreas = [
  { id: 'full-platform', label: 'Full Platform Demo', icon: '🏢', desc: 'End-to-end SDLC automation & unified context' },
  { id: 'ai-workforce', label: 'AI Workforce Pilot', icon: '🤖', desc: 'Deploy 14 specialized AI workers across workflows' },
  { id: 'stack-connect', label: 'Stack Integration', icon: '🔌', desc: 'Connect Jira, GitHub, AWS, Salesforce, Slack, etc.' },
  { id: 'governance', label: 'Enterprise Security & VPC', icon: '🔐', desc: 'Air-gapped deployment, RBAC, and policy gates' },
  { id: 'transformation', label: 'ROI & Capacity Planning', icon: '📈', desc: 'Financial modeling, project economics & team scaling' },
]

const stackOptions = [
  'GitHub', 'GitLab', 'Jira', 'Linear', 'AWS', 'Microsoft Azure',
  'Google Cloud', 'Salesforce', 'SAP', 'Slack', 'MS Teams', 'Datadog',
  'Kubernetes', 'Snowflake', 'PostgreSQL'
]

const availableTimeSlots = [
  '09:00 AM - 09:30 AM',
  '10:30 AM - 11:00 AM',
  '01:00 PM - 01:30 PM',
  '02:30 PM - 03:00 PM',
  '04:00 PM - 04:30 PM',
  '05:15 PM - 05:45 PM',
]

const teamMembers = [
  {
    name: 'Dr. Evelyn Vance',
    role: 'Principal Solutions Architect',
    focus: 'Enterprise Systems & Multi-Agent Architecture',
    avatar: '👩‍💼',
    rating: '5.0 (48 reviews)',
  },
  {
    name: 'Marcus Brody',
    role: 'Head of Engineering Onboarding',
    focus: 'CI/CD Pipelines, GitOps & Cloud Infrastructure',
    avatar: '👨‍💻',
    rating: '4.9 (62 reviews)',
  },
  {
    name: 'Sarah Chen',
    role: 'Director of AI Workforce Strategy',
    focus: 'AI Agent Governance, RAG & LLM Routing',
    avatar: '👩‍🔬',
    rating: '5.0 (54 reviews)',
  }
]

const faqs = [
  {
    q: 'How quickly can our team begin an evaluation or pilot?',
    a: 'Most enterprise pilots launch within 48 to 72 hours. We configure a dedicated sandbox tenant connected to your test repositories or issue trackers, allowing your teams to test AI workers with zero disruption to active production environments.',
  },
  {
    q: 'Do we need to replace our existing toolstack (Jira, GitHub, Slack)?',
    a: 'No! ONIT is built around the "Connect What Matters" philosophy. Our open integration layer bridges your existing tools into a unified operating context. You only replace tools if and when you choose to.',
  },
  {
    q: 'How does ONIT handle intellectual property, source code, and data security?',
    a: 'Your source code and proprietary organizational knowledge are never used to train public models. We offer multi-tenant cloud with dedicated tenant encryption, Dedicated VPCs, and fully on-premise air-gapped deployments with SOC 2 Type II compliance.',
  },
  {
    q: 'What happens during the initial 30-minute discovery call?',
    a: 'You will speak directly with a Principal Solutions Architect—not an aggressive sales rep. We will map your current SDLC bottlenecks, identify high-impact workflows for AI workforce deployment, and outline a tailored pilot plan.',
  },
  {
    q: 'What level of human oversight is maintained over AI workers?',
    a: 'Every critical action (such as code merges, production deployments, and budget adjustments) is bounded by configurable human approval gates. Autonomous execution is always governed by your enterprise policies.',
  },
]

export default function TalkToUsPage({ onBackToHome }: TalkToUsPageProps) {
  const [activeTab, setActiveTab] = useState<'schedule' | 'inquiry'>('schedule')
  const [selectedFocus, setSelectedFocus] = useState('full-platform')
  const [selectedStack, setSelectedStack] = useState<string[]>(['GitHub', 'Jira', 'AWS'])
  const [teamSize, setTeamSize] = useState('50-250')
  const [selectedDate, setSelectedDate] = useState('Tomorrow')
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM - 11:00 AM')
  const [selectedExpert, setSelectedExpert] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Form inputs
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [role, setRole] = useState('Engineering Leadership (CTO / VP / Dir)')
  const [notes, setNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; slot?: string } | null>(null)

  const fullNameId = useId()
  const workEmailId = useId()
  const companyNameId = useId()
  const roleId = useId()
  const notesId = useId()

  const toggleStack = (tech: string) => {
    setSelectedStack((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!workEmail || !fullName) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setSubmittedData({
        name: fullName,
        email: workEmail,
        slot: activeTab === 'schedule' ? `${selectedDate} at ${selectedSlot}` : undefined,
      })
    }, 900)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setSubmittedData(null)
    setFullName('')
    setWorkEmail('')
    setCompanyName('')
    setNotes('')
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-28 text-midnight">
      {/* Top Breadcrumb & Quick Actions Bar */}
      <div className="bg-white border-b border-border-base sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-mid-text">
            <button
              onClick={onBackToHome}
              className="hover:text-onit font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Platform Overview
            </button>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-midnight">Talk to Us</span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Solutions Architects Available Today
            </span>
            <a
              href="mailto:solutions@scaleonit.com"
              className="text-mid-text hover:text-onit font-medium transition-colors"
            >
              solutions@scaleonit.com
            </a>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-border-base py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#0B1220 1px, transparent 1px), linear-gradient(90deg, #0B1220 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-onit bg-onit-light border border-blue-200 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-onit animate-ping" />
              Direct Architect Consultation & Pilot Setup
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-midnight leading-[1.08] mb-6">
              Let&apos;s build your <span className="text-onit">AI-native SDLC</span> together.
            </h1>

            <p className="text-lg text-mid-text leading-relaxed mb-8">
              Discuss your organization&apos;s software delivery goals with our lead solution architects. Whether you need a live architecture walkthrough, a guided 14-day sandbox pilot, or stack integration advice, we are here to help.
            </p>

            {/* Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Direct Access', detail: 'Principal Architects' },
                { label: '14-Day Pilot', detail: 'Zero-Risk Sandbox' },
                { label: 'Air-Gapped / VPC', detail: 'SOC 2 & Strict Privacy' },
                { label: 'Fast Response', detail: '< 2 Hours Guaranteed' },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-pearl border border-border-base rounded-xl">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-mid-text mb-0.5">{item.label}</div>
                  <div className="text-xs font-bold text-midnight">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Consultation Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left / Center Column: Form & Mode Selector */}
          <div className="lg:col-span-8 bg-white border border-border-base rounded-2xl shadow-xl p-6 sm:p-10">

            {isSubmitted && submittedData ? (
              /* Success / Confirmation View */
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">
                  ✓
                </div>

                <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
                  Session Confirmed & Request Logged
                </div>

                <h2 className="text-3xl font-extrabold text-midnight mb-3">
                  We look forward to connecting, {submittedData.name}!
                </h2>

                <p className="text-mid-text max-w-lg mx-auto text-sm leading-relaxed mb-8">
                  A calendar invitation and pilot preparation briefing have been dispatched to{' '}
                  <span className="font-semibold text-midnight">{submittedData.email}</span>.
                  {submittedData.slot && (
                    <span className="block mt-2 font-medium text-onit bg-onit-light py-2 px-4 rounded-lg border border-blue-200">
                      📅 Scheduled Time: {submittedData.slot} (with {teamMembers[selectedExpert].name})
                    </span>
                  )}
                </p>

                {/* Next Steps Checklist */}
                <div className="bg-pearl border border-border-base rounded-xl p-6 text-left max-w-md mx-auto mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-midnight mb-3">
                    What happens next:
                  </div>
                  <ul className="space-y-2.5 text-xs text-mid-text">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">1.</span>
                      <span>Your dedicated architect will review your stack selection ({selectedStack.join(', ') || 'Custom'}).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">2.</span>
                      <span>We prepare a live sandbox demo tailored to your {teamSize} engineer scale.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">3.</span>
                      <span>You will receive immediate access to the ONIT Architecture & Compliance Dossier.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl border border-border-base text-sm font-semibold hover:bg-pearl transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <button
                    onClick={onBackToHome}
                    className="px-6 py-3 rounded-xl bg-onit text-white text-sm font-semibold hover:bg-onit-hover transition-all shadow-md shadow-onit/20 cursor-pointer"
                  >
                    Return to Platform Overview
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form / Scheduler */
              <div>
                {/* Mode Selector Tabs */}
                <div className="flex bg-soft p-1 rounded-xl border border-border-base mb-8">
                  <button
                    type="button"
                    onClick={() => setActiveTab('schedule')}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'schedule'
                        ? 'bg-white text-midnight shadow-sm border border-border-base'
                        : 'text-mid-text hover:text-midnight'
                    }`}
                  >
                    <span>⚡</span>
                    <span>Instant 30-Min Architecture Call</span>
                    <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider bg-onit-light text-onit px-2 py-0.5 rounded-full ml-1">
                      Fast Track
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('inquiry')}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'inquiry'
                        ? 'bg-white text-midnight shadow-sm border border-border-base'
                        : 'text-mid-text hover:text-midnight'
                    }`}
                  >
                    <span>📝</span>
                    <span>Custom Pilot / RFP Inquiry</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Goal / Area of Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-mid-text mb-3">
                      1. Select Your Primary Objective
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {focusAreas.map((area) => {
                        const isSelected = selectedFocus === area.id
                        return (
                          <button
                            key={area.id}
                            type="button"
                            onClick={() => setSelectedFocus(area.id)}
                            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                              isSelected
                                ? 'bg-onit-light border-onit shadow-xs ring-1 ring-onit'
                                : 'bg-white border-border-base hover:border-slate-300 hover:bg-pearl'
                            }`}
                          >
                            <span className="text-xl flex-shrink-0">{area.icon}</span>
                            <div className="min-w-0 flex-1">
                              <div className={`text-xs font-bold ${isSelected ? 'text-onit' : 'text-midnight'}`}>
                                {area.label}
                              </div>
                              <div className="text-[11px] text-mid-text mt-0.5 leading-snug">
                                {area.desc}
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 2 (If scheduler tab is selected): Slot & Expert Picker */}
                  {activeTab === 'schedule' && (
                    <div className="p-5 bg-pearl rounded-2xl border border-border-base space-y-5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-midnight flex items-center gap-2">
                          <span>2. Select Architect & Meeting Time</span>
                          <span className="text-[10px] text-emerald-600 bg-emerald-100 font-semibold px-2 py-0.5 rounded-full">
                            Instant Confirmation
                          </span>
                        </label>
                        <span className="text-xs text-mid-text">Timezone: Local System Time</span>
                      </div>

                      {/* Expert selector */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {teamMembers.map((member, i) => (
                          <button
                            key={member.name}
                            type="button"
                            onClick={() => setSelectedExpert(i)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              selectedExpert === i
                                ? 'bg-white border-onit shadow-xs ring-2 ring-onit/20'
                                : 'bg-white/60 border-border-base hover:bg-white'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xl">{member.avatar}</span>
                              <div className="text-xs font-bold text-midnight truncate">{member.name}</div>
                            </div>
                            <div className="text-[10px] font-medium text-onit truncate">{member.role}</div>
                            <div className="text-[10px] text-mid-text mt-1 truncate">{member.focus}</div>
                          </button>
                        ))}
                      </div>

                      {/* Date selection */}
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {['Today (Urgent)', 'Tomorrow', 'In 2 Days', 'Next Monday', 'Custom Date'].map((date) => (
                          <button
                            key={date}
                            type="button"
                            onClick={() => setSelectedDate(date)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                              selectedDate === date
                                ? 'bg-midnight text-white'
                                : 'bg-white border border-border-base text-mid-text hover:bg-slate-100'
                            }`}
                          >
                            {date}
                          </button>
                        ))}
                      </div>

                      {/* Time Slot Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {availableTimeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 px-3 rounded-lg text-xs font-mono font-medium border text-center transition-all cursor-pointer ${
                              selectedSlot === slot
                                ? 'bg-onit text-white border-onit shadow-sm'
                                : 'bg-white border-border-base text-midnight hover:border-slate-400'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Current Stack Integrations */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-mid-text mb-2">
                      {activeTab === 'schedule' ? '3.' : '2.'} Select Your Existing Toolchain (Optional)
                    </label>
                    <p className="text-xs text-mid-text mb-3">
                      We will tailor the demonstration to show direct live synchronization with your tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stackOptions.map((tool) => {
                        const isChecked = selectedStack.includes(tool)
                        return (
                          <button
                            key={tool}
                            type="button"
                            onClick={() => toggleStack(tool)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                              isChecked
                                ? 'bg-midnight text-white border-midnight shadow-xs'
                                : 'bg-white border-border-base text-mid-text hover:border-slate-300 hover:text-midnight'
                            }`}
                          >
                            {isChecked && <span className="text-emerald-400 text-[10px]">✓</span>}
                            {tool}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 4: Contact Details Form */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-mid-text mb-4">
                      {activeTab === 'schedule' ? '4.' : '3.'} Your Contact & Organization Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor={fullNameId} className="block text-xs font-medium text-midnight mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={fullNameId}
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-3.5 py-2.5 bg-white border border-border-base rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-onit/30 focus:border-onit transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor={workEmailId} className="block text-xs font-medium text-midnight mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={workEmailId}
                          type="email"
                          required
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-border-base rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-onit/30 focus:border-onit transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor={companyNameId} className="block text-xs font-medium text-midnight mb-1.5">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={companyNameId}
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Acme Fintech Corp"
                          className="w-full px-3.5 py-2.5 bg-white border border-border-base rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-onit/30 focus:border-onit transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor={roleId} className="block text-xs font-medium text-midnight mb-1.5">
                          Your Role / Function
                        </label>
                        <select
                          id={roleId}
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-white border border-border-base rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-onit/30 focus:border-onit transition-all"
                        >
                          <option value="Engineering Leadership (CTO / VP / Dir)">CTO / VP Engineering / Tech Director</option>
                          <option value="Product Leadership (CPO / VP Product)">CPO / VP Product / Head of Delivery</option>
                          <option value="Enterprise Solution Architect">Enterprise Solution Architect</option>
                          <option value="DevOps & Platform Engineering">DevOps & Platform Engineering Lead</option>
                          <option value="Procurement / IT Operations">Procurement / IT Operations Lead</option>
                          <option value="Software Developer / Engineer">Software Engineer / Staff Architect</option>
                        </select>
                      </div>
                    </div>

                    {/* Engineering Team Size */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-midnight mb-2">
                        Engineering Organization Size
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['10-50 Engineers', '50-250 Engineers', '250-1,000 Engineers', '1,000+ Enterprise'].map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setTeamSize(size)}
                            className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                              teamSize === size
                                ? 'bg-midnight text-white border-midnight font-bold'
                                : 'bg-white border-border-base text-mid-text hover:bg-slate-50'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes / Special requirements */}
                    <div>
                      <label htmlFor={notesId} className="block text-xs font-medium text-midnight mb-1.5">
                        Specific Goals, Workflows or Questions (Optional)
                      </label>
                      <textarea
                        id={notesId}
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about specific bottlenecks in requirements, testing, deployment, or multi-agent orchestration you'd like to address..."
                        className="w-full px-3.5 py-2.5 bg-white border border-border-base rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-onit/30 focus:border-onit transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-onit text-white font-bold rounded-xl hover:bg-onit-hover transition-all duration-150 shadow-lg shadow-onit/25 text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Reserving Session...</span>
                        </>
                      ) : activeTab === 'schedule' ? (
                        <>
                          <span>Confirm 30-Min Architecture Session</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Submit Enterprise Pilot Request</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-mid-text mt-3">
                      🔒 Guaranteed zero spam. We sign standard mutual NDAs prior to deep-dive architecture reviews.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Specialist Profiles & Pilot Guarantee Card */}
          <div className="lg:col-span-4 space-y-6">

            {/* Direct Architect Spotlight Card */}
            <div className="bg-white border border-border-base rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-onit mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Featured Host
              </div>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-2xl shadow-xs">
                  {teamMembers[selectedExpert].avatar}
                </div>
                <div>
                  <h3 className="text-base font-bold text-midnight leading-snug">
                    {teamMembers[selectedExpert].name}
                  </h3>
                  <div className="text-xs font-semibold text-onit">
                    {teamMembers[selectedExpert].role}
                  </div>
                  <div className="text-[11px] text-mid-text mt-0.5">
                    {teamMembers[selectedExpert].rating}
                  </div>
                </div>
              </div>

              <p className="text-xs text-mid-text leading-relaxed mb-4 pb-4 border-b border-border-base">
                &quot;We don&apos;t do high-pressure sales scripts. In our session, we review your current SDLC flow chart and demonstrate live agents performing code analysis, test generation, and requirements extraction against realistic examples.&quot;
              </p>

              <div className="text-[11px] font-medium text-midnight space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> 1-on-1 Interactive Screen Share
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Custom ROI & Token Cost Estimate
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Immediate Sandbox Access Setup
                </div>
              </div>
            </div>

            {/* ScaleOnIt Pilot Guarantee Card */}
            <div className="bg-midnight text-white rounded-2xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-onit/20 rounded-full blur-2xl pointer-events-none" />

              <div className="text-[10px] font-mono tracking-widest uppercase text-onit font-bold mb-2">
                Enterprise Assurance
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                The 14-Day Pilot Guarantee
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Run ONIT alongside your development teams in a controlled sandbox. If our AI workforce does not demonstrably reduce cycle time and improve delivery traceability within 14 days, you owe nothing.
              </p>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1.5 text-xs text-slate-300">
                <div className="font-semibold text-white">Included in Every Pilot:</div>
                <div className="text-[11px] text-slate-400">• Dedicated Slack / Teams bridge with our engineers</div>
                <div className="text-[11px] text-slate-400">• Custom connectors for your internal tools</div>
                <div className="text-[11px] text-slate-400">• Weekly executive progress scorecard</div>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="bg-white border border-border-base rounded-2xl p-6 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-midnight mb-3">
                Other Ways to Reach Us
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pearl rounded-lg text-mid-text text-sm">✉️</div>
                  <div>
                    <div className="font-semibold text-midnight">Enterprise Inquiries</div>
                    <a href="mailto:enterprise@scaleonit.com" className="text-onit hover:underline">
                      enterprise@scaleonit.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pearl rounded-lg text-mid-text text-sm">📞</div>
                  <div>
                    <div className="font-semibold text-midnight">Direct Architecture Desk</div>
                    <span className="text-mid-text">+1 (888) 722-5366 (Mon-Fri)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pearl rounded-lg text-mid-text text-sm">🏢</div>
                  <div>
                    <div className="font-semibold text-midnight">Global Headquarters</div>
                    <span className="text-mid-text">San Francisco, CA · London, UK · Bangalore, IN</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-3 border border-border-base px-4 py-1.5 rounded-full bg-white">
            Global Engineering Hubs
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight">
            Supporting enterprise deployments across all timezones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              city: 'San Francisco',
              region: 'Americas HQ',
              address: '500 Howard Street, Suite 400',
              phone: '+1 (415) 890-6420',
              email: 'us-sales@scaleonit.com',
              badge: 'Primary Architecture Lab',
            },
            {
              city: 'London',
              region: 'EMEA HQ',
              address: '25 Bank Street, Canary Wharf',
              phone: '+44 (20) 7946-0921',
              email: 'emea-sales@scaleonit.com',
              badge: 'Compliance & Financial Services',
            },
            {
              city: 'Bangalore & Singapore',
              region: 'APAC Operations',
              address: 'Indiranagar 100ft Rd / Marina Bay Financial',
              phone: '+91 (80) 4122-8900',
              email: 'apac-sales@scaleonit.com',
              badge: '24/7 AI Operations Center',
            },
          ].map((hub) => (
            <div key={hub.city} className="bg-white border border-border-base rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-onit">{hub.region}</span>
                <span className="text-[10px] font-semibold bg-soft px-2 py-0.5 rounded text-mid-text">{hub.badge}</span>
              </div>
              <h3 className="text-xl font-bold text-midnight mb-2">{hub.city}</h3>
              <p className="text-xs text-mid-text mb-4 leading-relaxed">{hub.address}</p>
              <div className="pt-4 border-t border-border-base text-xs space-y-1">
                <div className="text-mid-text"><span className="font-semibold text-midnight">Phone:</span> {hub.phone}</div>
                <div className="text-mid-text"><span className="font-semibold text-midnight">Email:</span> <a href={`mailto:${hub.email}`} className="text-onit hover:underline">{hub.email}</a></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="text-center mb-10">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-3 border border-border-base px-4 py-1.5 rounded-full bg-white">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight">
            What leaders ask before speaking with us
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={faq.q}
                className="bg-white border border-border-base rounded-xl overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-pearl transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-midnight">{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className={`flex-shrink-0 text-mid-text transition-transform duration-200 ${isOpen ? 'rotate-180 text-onit' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-mid-text leading-relaxed border-t border-border-base/50 bg-pearl/40">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
