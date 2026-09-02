import React from 'react'

interface PageHeroProps {
  eyebrow?: string
  title: string | React.ReactNode
  description?: string
  primaryCtaText?: string
  onPrimaryCta?: () => void
  secondaryCtaText?: string
  onSecondaryCta?: () => void
  badges?: string[]
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCtaText = 'Book Architecture Consultation',
  onPrimaryCta,
  secondaryCtaText = 'Explore Ecosystem Specs',
  onSecondaryCta,
  badges = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#EAE6F0] py-16 sm:py-24">
      {/* Subtle organic light accent */}
      <div
        className="absolute -top-24 right-1/4 w-96 h-96 bg-[#C53678]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-4 py-1.5 rounded-full mb-6">
              {eyebrow}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1B0A2A] leading-[1.08] mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-[#5A4E68] leading-relaxed mb-8">
              {description}
            </p>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAFAFC] border border-[#EAE6F0] text-[#1B0A2A]"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3.5">
            {onPrimaryCta && (
              <button
                onClick={onPrimaryCta}
                className="bg-[#C53678] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#A92661] transition-all shadow-md shadow-[#C53678]/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678]"
              >
                {primaryCtaText}
              </button>
            )}
            {onSecondaryCta && (
              <button
                onClick={onSecondaryCta}
                className="border border-[#EAE6F0] bg-white text-[#1B0A2A] text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#FDF2F7] hover:border-[#C53678]/30 hover:text-[#C53678] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678]"
              >
                {secondaryCtaText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
