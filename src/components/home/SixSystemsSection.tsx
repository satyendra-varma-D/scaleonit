import { useState } from 'react'
import { sixSystems } from '../../data/ecosystem'

interface SixSystemsSectionProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function SixSystemsSection({ onNavigate }: SixSystemsSectionProps) {
  const [selectedId, setSelectedId] = useState<string>('deliver')
  const activeSystem = sixSystems.find((s) => s.id === selectedId) || sixSystems[2]

  return (
    <section
      id="six-systems"
      aria-label="The Six ScaleOnIt Systems — Purpose-Built Product Domains"
      className="py-24 bg-transparent text-slate-900 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            THE PRODUCT ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Six purpose-built systems.{' '}
            <span className="text-[#FF5500] block mt-1">One connected business lifecycle.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore the six product domains of the ScaleOnIt ecosystem. Each solves a distinct operational challenge while sharing a unified context layer.
          </p>
        </div>

        {/* 6 System Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {sixSystems.map((system) => {
            const isSelected = system.id === selectedId
            const isDeliver = system.id === 'deliver'

            return (
              <button
                key={system.id}
                onClick={() => setSelectedId(system.id)}
                className={`px-5 py-2.5 rounded-lg font-mono font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-[3px_3px_0px_0px_#0F172A] -translate-y-0.5'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span>{system.icon}</span>
                <span>{system.name}</span>
                {isDeliver && (
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-white text-[#FF5500]' : 'bg-orange-50 text-[#FF5500]'
                  }`}>
                    ONIT
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Active System Spotlight Bento Box with Interactive Rich UI Mockup */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-[4px_4px_0px_0px_#0F172A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left — Deep Domain Profile */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{activeSystem.icon}</span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {activeSystem.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-[#FF5500] font-bold">
                    {activeSystem.tagline}
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-md border bg-orange-50 border-orange-200 text-[#FF5500]">
                    {activeSystem.statusLabel}
                  </span>
                </div>
              </div>

              {/* Purpose & Description */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                  Business Purpose
                </div>
                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
                  {activeSystem.purpose}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activeSystem.description}
                </p>
              </div>

              {/* Business Journey Flow */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Business Journey Progression
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {activeSystem.journey.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 shrink-0">
                      <div className="px-3.5 py-2 rounded-md bg-white border border-slate-200 text-xs font-mono font-medium text-slate-800 shadow-2xs">
                        {step}
                      </div>
                      {idx < activeSystem.journey.length - 1 && (
                        <span className="text-[#FF5500] font-bold">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link / Flagship CTA */}
              <div className="pt-2">
                {activeSystem.id === 'deliver' ? (
                  <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase">
                        Powered by Flagship Engine: ONIT
                      </div>
                      <div className="text-xs text-slate-600">
                        Turn ideas into working software with governed multi-agent delivery.
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate('/', '#deliver-onit')}
                      className="relative overflow-hidden px-5 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer shrink-0 before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"
                    >
                      <span className="relative z-10">EXPLORE ONIT FLOW →</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 italic font-mono">
                    // {activeSystem.name} is part of the ScaleOnIt business operating ecosystem roadmap.
                  </div>
                )}
              </div>
            </div>

            {/* Right — Realistic Dynamic UI Mockup / Bento Preview Card */}
            <div className="lg:col-span-6 space-y-5 lg:border-l lg:border-slate-200 lg:pl-8">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Domain Interface Mockup</span>
                <span className="text-[#FF5500] text-[10px] font-bold">⚡ LIVE ENGINE STATE</span>
              </div>

              {/* UI PREVIEW 1: DELIVER (Code IDE & Agent Swarm) */}
              {activeSystem.id === 'deliver' && (
                <div className="rounded-2xl bg-[#0D1117] text-white p-5 border border-slate-800 shadow-xl font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping" />
                      <span className="text-white font-bold">ONIT SDLC Engine · Swarm V4</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                      SWARM ACTIVE
                    </span>
                  </div>
                  <div className="bg-[#05080C] p-3 rounded-lg border border-slate-850 text-[11px] leading-relaxed space-y-1">
                    <div className="text-purple-400">async function <span className="text-blue-400">deployMicroservice</span>(spec: <span className="text-teal-300">FRDContract</span>) &#123;</div>
                    <div className="pl-3 text-slate-400">// Generating type-safe React 19 UI & REST router</div>
                    <div className="pl-3 text-emerald-400">+ const router = await synthesizeEndpoints(spec.apiContracts);</div>
                    <div className="pl-3 text-emerald-400">+ const qaSuite = await generatePlaywrightRegression(spec.rules);</div>
                    <div className="pl-3 text-purple-400">return await releaseGate.validateAndDeploy(router, qaSuite);</div>
                    <div>&#125;</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-slate-300">
                      ✓ React 19 Views: <strong className="text-white">24 Synthesized</strong>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-slate-300">
                      ✓ E2E Tests: <strong className="text-emerald-400">48/48 Passed</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* UI PREVIEW 2: DISCOVER (Requirements Kanban & Spec Synthesis) */}
              {activeSystem.id === 'discover' && (
                <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                    <div className="font-mono font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                      <span>Requirements Kanban Matrix</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold bg-orange-50 text-[#FF5500] px-2 py-0.5 rounded border border-orange-200">
                      100% SPEC CONSENSUS
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { id: 'BRD-104', title: 'Payment Idempotency & Webhook Queue', tag: 'Tri-Party Signed', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
                      { id: 'FRD-208', title: 'Multi-Tenant RBAC Token Engine', tag: 'AI BA Synthesized', color: 'text-[#FF5500] bg-orange-50 border-orange-200' },
                      { id: 'SRS-312', title: 'Continuous Audit Trail Ledger', tag: 'Client Executive Approved', color: 'text-slate-800 bg-slate-100 border-slate-200' },
                    ].map((card) => (
                      <div key={card.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-mono text-[10px] font-bold text-slate-400 mr-2">{card.id}</span>
                          <span className="font-bold text-slate-900">{card.title}</span>
                        </div>
                        <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border ${card.color}`}>
                          {card.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* UI PREVIEW 3: GROW / MONEY (Revenue & Velocity Analytics) */}
              {(activeSystem.id === 'grow' || activeSystem.id === 'money') && (
                <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                    <div className="font-mono font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                      <span>{activeSystem.id === 'grow' ? 'Pipeline Velocity Index' : 'Real-Time Project Margin Engine'}</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                      +42% EFFICIENCY GAIN
                    </span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase">Gross Annual Value Generated</div>
                        <div className="text-2xl font-black font-mono text-slate-900">$1,420,000 <span className="text-xs font-normal text-slate-500">USD</span></div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-mono text-emerald-600 font-bold">▲ 8.4x Velocity Multiplier</div>
                        <div className="text-[10px] font-mono text-slate-400">Zero manual spec drag</div>
                      </div>
                    </div>
                    {/* Simulated SVG Mini Chart */}
                    <div className="pt-2">
                      <svg className="w-full h-12 text-[#FF5500]" viewBox="0 0 200 40" fill="none">
                        <path d="M0 35 Q 40 30, 80 20 T 160 10 T 200 4" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M0 35 Q 40 30, 80 20 T 160 10 T 200 4 L 200 40 L 0 40 Z" fill="rgba(255, 85, 0, 0.1)" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* UI PREVIEW 4: PEOPLE / SERVE (Lifecycle & Incident Traceability) */}
              {(activeSystem.id === 'people' || activeSystem.id === 'serve') && (
                <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                    <div className="font-mono font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                      <span>Contextual Incident-to-Commit Traceability</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold bg-orange-50 text-[#FF5500] px-2 py-0.5 rounded border border-orange-200">
                      SLA: 99.98%
                    </span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-slate-500">Incident Ticket #INC-881</span>
                      <span className="text-emerald-600 font-bold">Auto-Resolved</span>
                    </div>
                    <p className="text-slate-700 text-[11px] leading-snug">
                      Traced automatically to Git commit <code className="text-[#FF5500] font-mono">9c782b1</code> in DELIVER and original FRD requirement <code className="text-slate-900 font-mono">REQ-2026-884</code>.
                    </p>
                  </div>
                </div>
              )}

              {/* Built-in Domain Intelligence Note */}
              <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🧠</span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                    {activeSystem.intelligenceType}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activeSystem.intelligenceDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Product Overview Grid Cards (Hard Shadows + Glow Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {sixSystems.map((system) => {
            const isDeliver = system.id === 'deliver'
            const isSelected = system.id === selectedId

            return (
              <div
                key={system.id}
                onClick={() => setSelectedId(system.id)}
                className={`p-6 rounded-xl border transition-all duration-200 ease-out cursor-pointer ${
                  isSelected
                    ? 'border-[#FF5500] bg-white shadow-[4px_4px_0px_0px_#FF5500] -translate-y-1 -translate-x-1'
                    : 'border-slate-200 bg-white shadow-[4px_4px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[6px_6px_0px_0px_#FF5500] hover:-translate-y-1 hover:-translate-x-1'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl" aria-hidden="true">{system.icon}</span>
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                    isDeliver ? 'bg-[#FF5500] text-white shadow-2xs' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {isDeliver ? 'Active · ONIT' : 'Vision'}
                  </span>
                </div>
                <h4 className="font-extrabold text-base text-slate-900 mb-1">{system.name}</h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {system.purpose}
                </p>
                <div className="text-[11px] font-mono text-[#FF5500] font-semibold">
                  {system.journeyText}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
