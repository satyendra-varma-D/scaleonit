import { useState } from 'react'

const fragmentedTools = [
  { label: 'CRM', x: '10%', y: '12%', color: '#FF6B6B' },
  { label: 'Email', x: '60%', y: '8%', color: '#FFA94D' },
  { label: 'Meetings', x: '82%', y: '22%', color: '#FFD43B' },
  { label: 'Documents', x: '5%', y: '45%', color: '#74C0FC' },
  { label: 'Jira', x: '75%', y: '50%', color: '#4DABF7' },
  { label: 'Figma', x: '25%', y: '75%', color: '#DA77F2' },
  { label: 'GitHub', x: '50%', y: '82%', color: '#69DB7C' },
  { label: 'CI/CD', x: '78%', y: '80%', color: '#63E6BE' },
  { label: 'Testing', x: '12%', y: '80%', color: '#748FFC' },
  { label: 'Cloud', x: '42%', y: '10%', color: '#A9E34B' },
  { label: 'Support', x: '88%', y: '60%', color: '#F783AC' },
  { label: 'Finance', x: '30%', y: '45%', color: '#66D9E8' },
]

const connectedTools = [
  { label: 'CRM', angle: 0 },
  { label: 'Email', angle: 30 },
  { label: 'Meetings', angle: 60 },
  { label: 'Docs', angle: 90 },
  { label: 'Jira', angle: 120 },
  { label: 'Figma', angle: 150 },
  { label: 'GitHub', angle: 180 },
  { label: 'CI/CD', angle: 210 },
  { label: 'Testing', angle: 240 },
  { label: 'Cloud', angle: 270 },
  { label: 'Support', angle: 300 },
  { label: 'Finance', angle: 330 },
]

const frictions = ['COPY', 'PASTE', 'RE-ENTER', 'FOLLOW UP', 'UPDATE', 'RECONCILE', 'EXPLAIN', 'HAND OFF']

export default function ProblemSection() {
  const [connected, setConnected] = useState(false)

  return (
    <section id="problem" className="py-28 bg-midnight overflow-hidden relative">
      {/* Very subtle noise */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\'%3E%3Crect width=\'1\' height=\'1\' fill=\'white\'/%3E%3C/svg%3E")', backgroundSize: '4px 4px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-mid-text mb-6 border border-white/10 px-4 py-2 rounded-full">
            The Problem
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Software delivery<br />
            <span className="text-mid-text">isn&apos;t broken.</span><br />
            The connections are.
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Modern software organizations run on a patchwork of disconnected tools. Every handoff loses context. Every integration requires maintenance. Every team uses a different system of record.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1">
            <button
              onClick={() => setConnected(false)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !connected ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Before ONIT
            </button>
            <button
              onClick={() => setConnected(true)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                connected ? 'bg-onit text-white shadow-lg shadow-onit/30' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              With ONIT
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative h-80 rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
            {!connected ? (
              <>
                {fragmentedTools.map((tool, i) => (
                  <div
                    key={tool.label}
                    className="absolute flex items-center justify-center"
                    style={{ left: tool.x, top: tool.y }}
                  >
                    <div
                      className="px-2.5 py-1 rounded-lg border text-[11px] font-semibold text-white/70 transition-all duration-300"
                      style={{ borderColor: `${tool.color}40`, background: `${tool.color}15`, color: tool.color }}
                    >
                      {tool.label}
                    </div>
                  </div>
                ))}
                {/* Broken connection lines */}
                <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                  {[
                    [15, 20, 45, 45], [65, 12, 30, 50], [85, 28, 78, 52],
                    [10, 52, 35, 52], [35, 52, 52, 85], [80, 55, 55, 85],
                  ].map(([x1, y1, x2, y2], i) => (
                    <line
                      key={i}
                      x1={`${x1}%`} y1={`${y1}%`}
                      x2={`${x2}%`} y2={`${y2}%`}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                    />
                  ))}
                </svg>
                {/* Friction labels */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {frictions.map((f) => (
                    <span key={f} className="text-[10px] font-mono font-semibold text-red-400/60 border border-red-400/20 px-2 py-0.5 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Center: ONIT hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-onit flex items-center justify-center shadow-xl shadow-onit/40 z-10 relative">
                      <span className="text-white font-extrabold text-xl tracking-tight">ONIT</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-onit/20 animate-ping" />
                  </div>
                </div>
                {/* Connected tools around */}
                {connectedTools.map((tool, i) => {
                  const rad = (tool.angle * Math.PI) / 180
                  const r = 115
                  const cx = 50 + (r / 3.2) * Math.cos(rad)
                  const cy = 50 + (r / 5.2) * Math.sin(rad)
                  return (
                    <div key={tool.label} className="absolute" style={{ left: `${cx}%`, top: `${cy}%`, transform: 'translate(-50%, -50%)' }}>
                      <div className="px-2 py-1 rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-[10px] font-semibold text-emerald-300">
                        {tool.label}
                      </div>
                    </div>
                  )
                })}
                {/* Connection lines from center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                  {connectedTools.map((tool, i) => {
                    const rad = (tool.angle * Math.PI) / 180
                    const r = 115
                    const cx = 50 + (r / 3.2) * Math.cos(rad)
                    const cy = 50 + (r / 5.2) * Math.sin(rad)
                    return (
                      <line
                        key={i}
                        x1="50%" y1="50%"
                        x2={`${cx}%`} y2={`${cy}%`}
                        stroke="rgba(16,185,129,0.3)"
                        strokeWidth="1"
                      />
                    )
                  })}
                </svg>
              </>
            )}
          </div>

          {/* Text */}
          <div>
            {!connected ? (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">What happens between every handoff:</h3>
                <div className="space-y-3 mb-8">
                  {[
                    'Context lost when requirements leave discovery',
                    'Designs disconnected from engineering decisions',
                    'Test results not linked to requirements',
                    'Deployment details invisible to support',
                    'Finance blind to delivery progress',
                    'AI has no organizational context to work with',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-0.5 rounded-full border border-red-400/40 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                      </div>
                      <span className="text-sm text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setConnected(true)}
                  className="text-sm font-semibold text-onit hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  What if it all worked as one system?
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">One connected operating environment:</h3>
                <div className="space-y-3 mb-8">
                  {[
                    'Requirements flow from conversation to implementation',
                    'Design decisions inform engineering automatically',
                    'Quality gates connected to delivery pipelines',
                    'Support has full context from the entire lifecycle',
                    'Finance sees real-time project economics',
                    'AI workers operate with complete organizational knowledge',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                          <path d="M1.5 4l2 2 3-3" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-status 1.5s ease-in-out infinite' }} />
                  One connected context across the software lifecycle
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
