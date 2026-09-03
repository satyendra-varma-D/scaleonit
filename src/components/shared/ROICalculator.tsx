import { useState } from 'react'

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState<number>(45)
  const [monthlyReleases, setMonthlyReleases] = useState<number>(8)

  // Calculations:
  // Base engineering hours spent on manual specs, boilerplate PRs, and QA regression ~= 32 hrs per engineer per month.
  // With ONIT Multi-Agent workflows: 65% reduction in manual specification and QA drag.
  const hoursSavedPerMonth = Math.round(teamSize * 22 * (monthlyReleases * 0.35 + 0.65))
  const velocityMultiplier = (1 + (monthlyReleases * 0.15) + (teamSize > 50 ? 0.8 : 0.5)).toFixed(1)
  const annualCostEfficiency = Math.round(hoursSavedPerMonth * 75 * 12).toLocaleString()

  return (
    <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-[4px_4px_0px_0px_#0F172A] max-w-4xl mx-auto my-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF5500] bg-orange-50 border border-orange-200 px-3 py-1 rounded-md mb-2">
            <span>⚡ Interactive ROI Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Organization&apos;s Velocity Gains
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Adjust team metrics below to see estimated hours saved and time-to-production acceleration with ONIT.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {/* Sliders Control Panel */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="team-size-slider" className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
                Engineering Team Size
              </label>
              <span className="font-mono text-sm font-extrabold text-[#FF5500] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                {teamSize} Engineers
              </span>
            </div>
            <input
              id="team-size-slider"
              type="range"
              min="10"
              max="500"
              step="5"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
              <span>10 Devs</span>
              <span>250 Devs</span>
              <span>500+ Enterprise</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="releases-slider" className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
                Monthly Release Cycles
              </label>
              <span className="font-mono text-sm font-extrabold text-[#FF5500] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                {monthlyReleases} Releases / mo
              </span>
            </div>
            <input
              id="releases-slider"
              type="range"
              min="1"
              max="30"
              step="1"
              value={monthlyReleases}
              onChange={(e) => setMonthlyReleases(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
              <span>1 Bi-weekly</span>
              <span>15 Continuous</span>
              <span>30 Daily</span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 font-mono space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <span>🛡️</span>
              <span>Assumptions & Grounding:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Based on empirical customer metrics: 70% faster BRD/FRD sign-off, automated full-stack synthesis, and 100% Playwright regression automation.
            </p>
          </div>
        </div>

        {/* Dynamic Metric Outputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-orange-50/60 border border-orange-200 flex flex-col justify-between shadow-2xs">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Hours Saved / Mo
            </div>
            <div className="my-2">
              <div className="text-3xl lg:text-4xl font-black font-mono text-[#FF5500] tracking-tight">
                {hoursSavedPerMonth.toLocaleString()}+
              </div>
              <div className="text-[11px] text-slate-600 font-medium">engineering hours freed</div>
            </div>
            <div className="font-mono text-[10px] text-[#FF5500] font-semibold border-t border-orange-200/60 pt-2">
              Zero manual spec translation
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-2xs">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Velocity Multiplier
            </div>
            <div className="my-2">
              <div className="text-3xl lg:text-4xl font-black font-mono text-slate-900 tracking-tight">
                {velocityMultiplier}x
              </div>
              <div className="text-[11px] text-slate-600 font-medium">faster concept-to-prod cycle</div>
            </div>
            <div className="font-mono text-[10px] text-emerald-600 font-semibold border-t border-slate-200 pt-2">
              ✓ Continuous zero-defect releases
            </div>
          </div>

          <div className="sm:col-span-2 p-5 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Annual Cost Efficiency Impact
              </div>
              <div className="text-2xl font-extrabold font-mono text-white mt-0.5">
                ${annualCostEfficiency} USD <span className="text-xs font-normal text-slate-400">/ year</span>
              </div>
            </div>
            <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-[#FF5500] text-white shrink-0 shadow-sm">
              ROI &gt; 800%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
