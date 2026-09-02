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
  secondaryCtaText = 'Explore All 11 Capabilities',
  onSecondaryCta,
  badges = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-border-base py-14 sm:py-20">
      {/* Subtle Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0B1220 1px, transparent 1px), linear-gradient(90deg, #0B1220 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-onit bg-onit-light border border-blue-200 px-3.5 py-1.5 rounded-full mb-6">
              {eyebrow}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-midnight leading-[1.08] mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-mid-text leading-relaxed mb-8">
              {description}
            </p>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold px-3 py-1 rounded-md bg-pearl border border-border-base text-mid-text"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {onPrimaryCta && (
              <button
                onClick={onPrimaryCta}
                className="bg-onit text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-onit-hover transition-all shadow-md shadow-onit/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit"
              >
                {primaryCtaText}
              </button>
            )}
            {onSecondaryCta && (
              <button
                onClick={onSecondaryCta}
                className="border border-border-base text-midnight text-sm font-semibold px-6 py-3 rounded-xl hover:bg-pearl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit"
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
