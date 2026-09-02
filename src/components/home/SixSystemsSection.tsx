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
      className="py-24 bg-[#FAFAFC] text-[#1B0A2A] border-y border-[#EAE6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF5841] bg-[#FFF4F2] border border-[#FF5841]/30 px-4 py-1.5 rounded-full mb-6">
            The Product Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B0A2A] tracking-tight leading-tight mb-6">
            Six purpose-built systems.{' '}
            <span className="text-[#C53678] block mt-1">One connected business lifecycle.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E68] leading-relaxed max-w-2xl mx-auto">
            Explore the six product domains of the ScaleOnIt ecosystem. Each solves a distinct operational challenge while sharing a unified context layer.
          </p>
        </div>

        {/* 6 System Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {sixSystems.map((system) => {
            const isSelected = system.id === selectedId
            const isDeliver = system.id === 'deliver'

            return (
              <button
                key={system.id}
                onClick={() => setSelectedId(system.id)}
                className={`px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#C53678] text-white border-[#C53678] shadow-md shadow-[#C53678]/25'
                    : 'bg-white text-[#1B0A2A] border-[#EAE6F0] hover:bg-[#FDF2F7] hover:border-[#C53678]/40 hover:text-[#C53678]'
                }`}
              >
                <span>{system.icon}</span>
                <span>{system.name}</span>
                {isDeliver && (
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ml-1 ${
                    isSelected ? 'bg-[#FF5841] text-white' : 'bg-[#FFF4F2] text-[#FF5841]'
                  }`}>
                    ONIT
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Active System Spotlight Card */}
        <div className="rounded-3xl bg-white border border-[#EAE6F0] p-6 sm:p-10 shadow-[0_20px_50px_rgba(27,10,42,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left — Deep Domain Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{activeSystem.icon}</span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B0A2A] tracking-tight">
                    {activeSystem.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-[#5A4E68]">
                    {activeSystem.tagline}
                  </div>
                </div>
                <div className="ml-auto">
                  <span className={`text-xs font-bold px-3.5 py-1 rounded-full border ${activeSystem.badgeColor}`}>
                    {activeSystem.statusLabel}
                  </span>
                </div>
              </div>

              {/* Purpose & Description */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68]">
                  Business Purpose
                </div>
                <p className="text-sm sm:text-base text-[#1B0A2A] leading-relaxed font-semibold">
                  {activeSystem.purpose}
                </p>
                <p className="text-xs sm:text-sm text-[#5A4E68] leading-relaxed">
                  {activeSystem.description}
                </p>
              </div>

              {/* Business Journey Flow */}
              <div className="p-5 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#5A4E68] mb-3">
                  Business Journey Progression
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {activeSystem.journey.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 shrink-0">
                      <div className="px-3.5 py-2 rounded-xl bg-white border border-[#EAE6F0] text-xs font-bold text-[#1B0A2A] shadow-2xs">
                        {step}
                      </div>
                      {idx < activeSystem.journey.length - 1 && (
                        <span className="text-[#FF5841] font-bold">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link / Flagship CTA */}
              <div className="pt-2">
                {activeSystem.id === 'deliver' ? (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FDF2F7] to-[#FFF4F2] border border-[#C53678]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold text-[#1B0A2A]">
                        Powered by Flagship Product: ONIT
                      </div>
                      <div className="text-xs text-[#5A4E68]">
                        Turn ideas into working software with governed delivery.
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate('/', '#deliver-onit')}
                      className="px-5 py-2.5 rounded-full bg-[#C53678] hover:bg-[#A92661] text-white font-bold text-xs transition-colors cursor-pointer shrink-0 shadow-sm"
                    >
                      Explore ONIT Delivery Flow →
                    </button>
                  </div>
                ) : (
                  <div className="text-xs text-[#5A4E68] italic">
                    {activeSystem.name} is part of the long-term ScaleOnIt business operating ecosystem roadmap.
                  </div>
                )}
              </div>
            </div>

            {/* Right — Key Capabilities & Specialized Intelligence */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#EAE6F0] lg:pl-8">
              {/* Capabilities List */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#5A4E68] mb-4">
                  Core Capabilities
                </div>
                <div className="space-y-2.5">
                  {activeSystem.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAFC] border border-[#EAE6F0] text-xs text-[#1B0A2A]"
                    >
                      <span className="text-xs font-extrabold text-[#C53678]">✓</span>
                      <span className="font-semibold">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Built-in Domain Intelligence */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FDF2F7] to-white border border-[#C53678]/25 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🧠</span>
                  <span className="text-xs font-extrabold text-[#C53678]">
                    {activeSystem.intelligenceType}
                  </span>
                </div>
                <p className="text-xs text-[#5A4E68] leading-relaxed">
                  {activeSystem.intelligenceDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Product Overview Grid Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {sixSystems.map((system) => {
            const isDeliver = system.id === 'deliver'
            return (
              <div
                key={system.id}
                onClick={() => setSelectedId(system.id)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  system.id === selectedId
                    ? 'border-[#C53678] bg-[#FDF2F7] shadow-sm'
                    : 'border-[#EAE6F0] bg-white hover:border-[#C53678]/30 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{system.icon}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    isDeliver ? 'bg-[#FF5841] text-white' : 'bg-[#FAFAFC] border border-[#EAE6F0] text-[#5A4E68]'
                  }`}>
                    {isDeliver ? 'Available Today · ONIT' : 'ScaleOnIt Vision'}
                  </span>
                </div>
                <h4 className="font-extrabold text-base text-[#1B0A2A] mb-1">{system.name}</h4>
                <p className="text-xs text-[#5A4E68] line-clamp-2 leading-relaxed mb-3">
                  {system.purpose}
                </p>
                <div className="text-[11px] font-mono text-[#5A4E68] font-medium">
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
