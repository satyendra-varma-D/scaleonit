import { useState, useEffect, useRef } from 'react'

interface StepDetail {
  id: string
  title: string
  command: string
  status: string
  badgeText: string
  logs: { text: string; color?: string; badge?: string }[]
}

const pipelineSteps: StepDetail[] = [
  {
    id: 'understand',
    title: '1. Understand',
    command: 'deliver parse --input="client-requirements.pdf"',
    status: 'REQUIREMENTS PARSED',
    badgeText: '✓ 48 Requirements',
    logs: [
      { text: '[INGEST] Reading customer requirement documents and project brief...' },
      { text: '[ORGANIZE] Extracted 34 feature user stories and API endpoints.' },
      { text: '[SCHEMA] Mapped to domain structure.', color: 'text-emerald-400', badge: 'Verified' },
    ],
  },
  {
    id: 'plan',
    title: '2. Plan',
    command: 'deliver plan --output="software-spec.json"',
    status: 'SPECIFICATION APPROVED',
    badgeText: '✓ Plan Ready',
    logs: [
      { text: '[SPECIFICATION] Created clear software plan and component architecture.' },
      { text: '[SCOPE] Features and milestones aligned with project goals.' },
      { text: '[REVIEW] Requirements verified and ready for building.', color: 'text-emerald-400', badge: 'Ready' },
    ],
  },
  {
    id: 'build',
    title: '3. Build',
    command: 'deliver build --stack="react,node-api" --assist=active',
    status: 'AI BUILD ACTIVE',
    badgeText: '✓ 14 Modules Built',
    logs: [
      { text: '[FRONTEND] Generated React user interface with modern components.' },
      { text: '[BACKEND] Created Node.js APIs and data models with AI assistance.' },
      { text: '[CODE QUALITY] Clean code structure; strict type safety; dependencies verified.', color: 'text-emerald-400', badge: 'Pass' },
    ],
  },
  {
    id: 'release',
    title: '4. Test & Release',
    command: 'deliver test --suite="automated" --deploy="staging"',
    status: 'DEPLOYED TO STAGING',
    badgeText: '✓ 48/48 Tests Passed',
    logs: [
      { text: '[TESTING] Executing automated end-to-end regression tests...' },
      { text: '[RESULTS] 48/48 Tests Passed (0 errors, 100% assertions satisfied).', color: 'text-emerald-400' },
      { text: '[RELEASE] Live preview ready at https://staging-preview.scaleonit.app', color: 'text-white', badge: 'LIVE' },
    ],
  },
]

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isRunningSim, setIsRunningSim] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const currentStep = pipelineSteps[activeTab]

  const runFullPipeline = () => {
    if (isRunningSim) return
    setIsRunningSim(true)
    setProgress(0)
    setActiveTab(0)

    let currentProgress = 0
    progressIntervalRef.current = setInterval(() => {
      currentProgress += 2.5
      setProgress(currentProgress)

      if (currentProgress === 25) setActiveTab(1)
      if (currentProgress === 50) setActiveTab(2)
      if (currentProgress === 75) setActiveTab(3)

      if (currentProgress >= 100) {
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
        setIsRunningSim(false)
        setProgress(100)
      }
    }, 100)
  }

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto text-left bg-[#0D1117] border border-slate-800 rounded-2xl p-5 sm:p-6 font-mono text-xs shadow-2xl text-white">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="text-[11px] text-slate-400 ml-2">scaleonit-kernel::interactive-workflow</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FF5500] animate-ping inline-block" />
          <span className="text-[10px] text-[#FF5500] font-bold uppercase">
            {isRunningSim ? 'SIMULATING...' : currentStep.status}
          </span>
        </div>
      </div>

      {/* Interactive Step Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
        {pipelineSteps.map((step, idx) => (
          <button
            key={step.id}
            type="button"
            onClick={() => {
              if (!isRunningSim) setActiveTab(idx)
            }}
            disabled={isRunningSim}
            className={`py-2 px-2 text-[10px] sm:text-[11px] font-bold rounded-lg transition-all text-center cursor-pointer ${
              activeTab === idx
                ? 'bg-[#FF5500] text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Progress Bar (Visible during simulation) */}
      {isRunningSim && (
        <div className="w-full bg-slate-800 h-1.5 rounded-full mb-4 overflow-hidden">
          <div
            className="bg-[#FF5500] h-full transition-all duration-100 ease-linear shadow-[0_0_10px_#FF5500]"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Terminal Command & Logs Box */}
      <div className="bg-[#090D12] p-4 rounded-xl border border-slate-850 space-y-3 min-h-[170px]">
        {/* Active Command Line */}
        <div className="flex items-center gap-2 text-slate-400 text-[11px] border-b border-slate-800/80 pb-2">
          <span className="text-[#FF5500] font-extrabold">$</span>
          <span className="text-slate-200 truncate">{currentStep.command}</span>
          <span className="text-emerald-400 text-[10px] ml-auto font-bold shrink-0">{currentStep.badgeText}</span>
        </div>

        {/* Dynamic Log Lines */}
        <div className="space-y-2">
          {currentStep.logs.map((log, index) => (
            <div key={index} className="flex items-start justify-between gap-3 text-[11px] leading-relaxed">
              <span className={log.color || 'text-slate-300'}>
                {log.text}
              </span>
              {log.badge && (
                <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                  {log.badge}
                </span>
              )}
            </div>
          ))}
          <div className="flex items-center gap-1 text-[#FF5500] font-bold pt-1">
            <span>&gt; pipeline ready for next operational phase</span>
            <span className="terminal-cursor">_</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions Bar */}
      <div className="flex items-center justify-between pt-4 mt-1">
        <div className="text-[10px] text-slate-500">
          Click tabs to inspect artifacts or trigger full live flow:
        </div>

        <button
          type="button"
          onClick={runFullPipeline}
          disabled={isRunningSim}
          className="px-3.5 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/40 text-[#FF5500] hover:bg-[#FF5500] hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
        >
          <span>{isRunningSim ? 'Executing...' : '▶ Run Live Pipeline Demo'}</span>
        </button>
      </div>
    </div>
  )
}
