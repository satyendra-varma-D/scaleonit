import { useState } from 'react'

const stages = [
  {
    id: 'conversation', label: 'Conversation', icon: '💬',
    artifact: 'Meeting Transcript',
    preview: [
      'Customer: "We need a way for clients to raise tickets without calling in."',
      'PM: "What about invoice queries?"',
      'Customer: "Yes, and account management too."',
    ],
    format: 'transcript',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200',
  },
  {
    id: 'requirement', label: 'Requirement', icon: '📋',
    artifact: 'BRD — User Story',
    preview: [
      'US-001: As a customer, I want to submit support tickets online',
      'Acceptance: ticket created, confirmation sent, SLA tracked',
      'Priority: High | Story Points: 5',
    ],
    format: 'document',
    color: 'text-onit', bg: 'bg-onit-light', border: 'border-blue-200',
  },
  {
    id: 'design', label: 'Design', icon: '🎨',
    artifact: 'User Flow',
    preview: [
      'Portal Login → Dashboard → Submit Ticket',
      '→ Category selection → Description → Attachments',
      '→ Confirmation screen → Email notification',
    ],
    format: 'flow',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200',
  },
  {
    id: 'architecture', label: 'Architecture', icon: '🏗️',
    artifact: 'Architecture Decision',
    preview: [
      'Ticket Service: Node.js REST API',
      'Database: PostgreSQL (tickets, attachments)',
      'Queue: Redis for async notification dispatch',
    ],
    format: 'technical',
    color: 'text-ai-violet', bg: 'bg-ai-light', border: 'border-violet-200',
  },
  {
    id: 'engineering', label: 'Engineering', icon: '⚙️',
    artifact: 'Pull Request',
    preview: [
      'PR #247: feat/customer-portal-ticket-submission',
      'Files changed: 18 | +423 -12',
      'Reviewer: Approved by AI Code Review + Lead Engineer',
    ],
    format: 'code',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200',
  },
  {
    id: 'quality', label: 'Quality', icon: '🔍',
    artifact: 'Test Report',
    preview: [
      'Test Suite: Customer Portal — Ticket Submission',
      '24/24 tests passed | Coverage: 87%',
      '0 critical defects | 1 minor flagged',
    ],
    format: 'report',
    color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200',
  },
  {
    id: 'deployment', label: 'Deployment', icon: '🚀',
    artifact: 'Release Record',
    preview: [
      'Release v2.4.1 — Customer Portal Ticket Feature',
      'Deployed to Production: 2026-09-01 14:22 UTC',
      'Health check: Passing | Rollback: Ready',
    ],
    format: 'release',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200',
  },
  {
    id: 'support', label: 'Support', icon: '🛟',
    artifact: 'Support Ticket',
    preview: [
      'TKT-0891: Attachment upload fails on mobile',
      'Context: ticket-submission-service v2.4.1',
      'Related requirement: US-001 | Assigned to: Dev Team',
    ],
    format: 'ticket',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200',
  },
]

export default function ConnectedContextSection() {
  const [selected, setSelected] = useState(0)
  const stage = stages[selected]

  return (
    <section id="connected-context" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
            Connected Context
          </div>
          <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-tight tracking-tight mb-4">
            Nothing gets lost<br />between the handoffs.
          </h2>
          <p className="text-base text-mid-text max-w-xl mx-auto">
            ONIT carries context from customer conversation all the way through to production support. Click any stage to see the artifact created there — all connected to the same source.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative mb-10 overflow-x-auto pb-2">
          <div className="flex items-center min-w-max mx-auto w-fit gap-0">
            {stages.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <button
                  onClick={() => setSelected(i)}
                  aria-label={`${s.label} — view artifact`}
                  aria-pressed={selected === i}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-all duration-150 ${
                    selected === i
                      ? `${s.bg} ${s.border} border-2 shadow-md`
                      : 'hover:bg-pearl border-2 border-transparent'
                  }`}
                >
                  <span className="text-xl" aria-hidden="true">{s.icon}</span>
                  <span className={`text-[11px] font-bold uppercase tracking-wide whitespace-nowrap ${selected === i ? s.color : 'text-mid-text'}`}>
                    {s.label}
                  </span>
                </button>
                {i < stages.length - 1 && (
                  <div className="flex items-center mx-1">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                      <path d="M0 5h13M10 1l4 4-4 4" stroke={selected === i ? '#2563EB' : '#CBD5E1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Artifact panel */}
        <div className={`rounded-2xl border-2 ${stage.border} ${stage.bg} p-6 max-w-2xl mx-auto`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl" aria-hidden="true">{stage.icon}</span>
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-mid-text">{stage.label}</div>
              <div className={`text-sm font-bold ${stage.color}`}>{stage.artifact}</div>
            </div>
            <div className={`ml-auto text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${stage.border} ${stage.color} bg-white/60`}>
              Connected
            </div>
          </div>

          <div className="bg-white/70 rounded-xl border border-white p-4 font-mono">
            {stage.preview.map((line, i) => (
              <div key={i} className={`text-xs ${i === 0 ? 'font-semibold text-midnight' : 'text-mid-text'} leading-relaxed ${i > 0 ? 'mt-1.5' : ''}`}>
                {line}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-mid-text">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1zm0 3.5V7l2.5 1.5" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Linked to: Conversation → Requirement → Design → Architecture → Code → Test → Deploy → Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
