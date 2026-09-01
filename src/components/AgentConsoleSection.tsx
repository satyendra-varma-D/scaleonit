import { useState, useEffect } from 'react'

const agents = [
  { id: 'ba', name: 'Business Analyst', icon: '📋', status: 'done', message: 'Requirements generated' },
  { id: 'arch', name: 'Solution Architect', icon: '🏗️', status: 'done', message: 'Architecture approved' },
  { id: 'ux', name: 'UX Designer', icon: '🎨', status: 'running', message: 'Creating user flows' },
  { id: 'eng', name: 'Engineering Agent', icon: '⚙️', status: 'waiting', message: 'Waiting' },
  { id: 'qa', name: 'QA Engineer', icon: '🔍', status: 'waiting', message: 'Waiting' },
  { id: 'devops', name: 'DevOps Agent', icon: '🚀', status: 'waiting', message: 'Waiting' },
  { id: 'pm', name: 'Project Manager', icon: '📊', status: 'coordinating', message: 'Coordinating' },
]

const initialLog = [
  { ts: '10:42:01', text: 'Goal received: Build Customer Self-Service Portal', level: 'info' },
  { ts: '10:42:02', text: 'Retrieving organizational knowledge and context...', level: 'info' },
  { ts: '10:42:04', text: 'Planning task decomposition across AI workforce...', level: 'info' },
  { ts: '10:42:06', text: 'AI Business Analyst → Delegated requirements analysis', level: 'agent' },
  { ts: '10:42:18', text: 'Business requirements document generated (42 user stories)', level: 'success' },
  { ts: '10:42:19', text: 'Human review requested: Requirements baseline approval', level: 'approval' },
  { ts: '10:42:31', text: 'Requirements approved by Product Owner', level: 'success' },
  { ts: '10:42:32', text: 'AI Solution Architect → Delegated architecture design', level: 'agent' },
  { ts: '10:43:15', text: 'Architecture document created: Microservices, REST APIs, PostgreSQL', level: 'success' },
  { ts: '10:43:16', text: 'Human review requested: Architecture approval', level: 'approval' },
  { ts: '10:43:28', text: 'Architecture approved by CTO', level: 'success' },
  { ts: '10:43:29', text: 'AI UX Designer → Delegated user flow creation', level: 'agent' },
  { ts: '10:43:30', text: 'Analyzing user stories against design system...', level: 'info' },
]

const liveLog = [
  { ts: '10:43:35', text: 'Generating user flow: Account Management', level: 'info' },
  { ts: '10:43:38', text: 'Generating user flow: Support Request Submission', level: 'info' },
  { ts: '10:43:41', text: 'Generating user flow: Invoice & Payment History', level: 'info' },
  { ts: '10:43:44', text: 'Validating flows against acceptance criteria...', level: 'info' },
  { ts: '10:43:47', text: '3 flows created, 1 requires clarification', level: 'approval' },
]

const levelStyles = {
  info: 'text-slate-400',
  agent: 'text-onit font-semibold',
  success: 'text-emerald-400',
  approval: 'text-amber-400 font-medium',
}

const statusIcon = (s: string) => {
  if (s === 'done') return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-label="Completed"><path d="M2 7l3.5 3.5L12 3.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  if (s === 'running') return <div className="w-3 h-3 rounded-full bg-onit" style={{ animation: 'pulse-status 1.2s ease-in-out infinite' }} aria-label="Running" />
  if (s === 'coordinating') return <div className="w-3 h-3 rounded-full bg-amber-400" style={{ animation: 'pulse-status 1.8s ease-in-out infinite' }} aria-label="Coordinating" />
  return <div className="w-3 h-3 rounded-full bg-slate-700 border border-slate-600" aria-label="Waiting" />
}

export default function AgentConsoleSection() {
  const [log, setLog] = useState(initialLog)
  const [liveIdx, setLiveIdx] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running || liveIdx >= liveLog.length) return
    const id = setTimeout(() => {
      setLog((prev) => [...prev, liveLog[liveIdx]])
      setLiveIdx((i) => i + 1)
    }, 1800)
    return () => clearTimeout(id)
  }, [liveIdx, running])

  useEffect(() => {
    if (liveIdx >= liveLog.length) {
      const id = setTimeout(() => {
        setLog(initialLog)
        setLiveIdx(0)
      }, 4000)
      return () => clearTimeout(id)
    }
  }, [liveIdx])

  return (
    <section id="agent-console" className="py-28 bg-pearl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-border-base px-4 py-2 rounded-full">
            Agent Execution
          </div>
          <h2 className="text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-tight tracking-tight mb-4">
            Watch an AI workforce<br />execute a real project.
          </h2>
          <p className="text-base text-mid-text max-w-xl mx-auto">
            Illustrative product experience — this is how ONIT coordinates AI workers across a software delivery project.
          </p>
        </div>

        {/* Console UI */}
        <div className="bg-midnight rounded-2xl border border-white/8 overflow-hidden shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/8 bg-white/[0.03]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-mono text-slate-400">ONIT · Agent Execution Console</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-onit animate-pulse" />
              <span className="text-[10px] font-mono text-onit uppercase tracking-widest">LIVE</span>
            </div>
          </div>

          {/* Project header */}
          <div className="px-5 py-4 border-b border-white/8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono font-semibold tracking-widest uppercase text-mid-text mb-1">Active Goal</div>
                <div className="text-sm font-bold text-white">Build Customer Self-Service Portal</div>
              </div>
              <div className="flex items-center gap-2 bg-onit/15 border border-onit/20 px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-onit animate-pulse" />
                <span className="text-[11px] font-semibold text-onit">Orchestrating</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Agent status column */}
            <div className="lg:col-span-2 border-r border-white/8 p-4">
              <div className="text-[10px] font-mono font-semibold tracking-widest uppercase text-slate-500 mb-4">
                AI Workers
              </div>
              <div className="space-y-2">
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                      agent.status === 'running'
                        ? 'border-onit/30 bg-onit/8'
                        : agent.status === 'done'
                        ? 'border-emerald-500/20 bg-emerald-500/5'
                        : agent.status === 'coordinating'
                        ? 'border-amber-400/20 bg-amber-400/5'
                        : 'border-white/5 bg-white/[0.02]'
                    }`}
                  >
                    <span className="text-base flex-shrink-0" aria-hidden="true">{agent.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs font-semibold truncate ${
                        agent.status === 'done' ? 'text-emerald-300'
                        : agent.status === 'running' ? 'text-white'
                        : agent.status === 'coordinating' ? 'text-amber-300'
                        : 'text-slate-600'
                      }`}>
                        {agent.name}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{agent.message}</div>
                    </div>
                    <div className="flex-shrink-0">{statusIcon(agent.status)}</div>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-4 pt-4 border-t border-white/8">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-2">
                  <span>Workflow Progress</span>
                  <span>3 / 7</span>
                </div>
                <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-onit rounded-full transition-all duration-1000"
                    style={{ width: '43%' }}
                  />
                </div>
              </div>
            </div>

            {/* Activity log */}
            <div className="lg:col-span-3 p-4 flex flex-col">
              <div className="text-[10px] font-mono font-semibold tracking-widest uppercase text-slate-500 mb-4">
                Activity Log
              </div>
              <div className="flex-1 overflow-y-auto space-y-1.5 max-h-80 font-mono text-[11px]">
                {log.map((entry, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${i === log.length - 1 ? 'opacity-100' : 'opacity-80'}`}
                    style={i === log.length - 1 ? { animation: 'slide-in-up 0.2s ease-out' } : {}}
                  >
                    <span className="text-slate-600 flex-shrink-0 tabular-nums">{entry.ts}</span>
                    <span className={levelStyles[entry.level as keyof typeof levelStyles]}>{entry.text}</span>
                  </div>
                ))}
                {running && liveIdx < liveLog.length && (
                  <div className="flex gap-3">
                    <span className="text-slate-600 flex-shrink-0">...</span>
                    <span className="text-slate-500" style={{ animation: 'blink-cursor 1s step-end infinite' }}>▌</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-white/8 bg-white/[0.02] flex items-center justify-between">
            <div className="text-[10px] font-mono text-slate-600">
              Illustrative demo — conceptual ONIT workflow
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
              <span>3 agents active</span>
              <span>4 waiting</span>
              <span>0 errors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
