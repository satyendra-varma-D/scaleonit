import React from 'react'

interface BreadcrumbItem {
  label: string
  path?: string
}

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

export function PageHero({
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
    <section className="relative overflow-hidden bg-transparent border-b border-slate-200/80 py-16 sm:py-24">
      {/* Orange spotlight glow */}
      <div
        className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
              {eyebrow}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {description}
            </p>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b}
                  className="font-mono text-xs font-medium px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-700"
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
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {primaryCtaText}
              </button>
            )}
            {onSecondaryCta && (
              <button
                onClick={onSecondaryCta}
                className="border border-slate-200 bg-white text-slate-800 font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg hover:bg-slate-50 hover:border-orange-500/40 hover:text-slate-900 transition-all cursor-pointer shadow-xs"
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

export default PageHero
