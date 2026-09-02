import React from 'react'
import Breadcrumbs from '../shared/Breadcrumbs'
import PageHero from '../shared/PageHero'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface PageLayoutProps {
  breadcrumbs?: BreadcrumbItem[]
  heroEyebrow?: string
  heroTitle?: string | React.ReactNode
  heroDescription?: string
  heroBadges?: string[]
  children: React.ReactNode
  onNavigate: (path: string, anchor?: string) => void
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaFocusArea?: string
}

export default function PageLayout({
  breadcrumbs = [],
  heroEyebrow,
  heroTitle,
  heroDescription,
  heroBadges = [],
  children,
  onNavigate,
  ctaTitle = 'How much of your IT operation do you want to turn on?',
  ctaDescription = 'ONIT connects the people, processes, systems, data and AI that keep your software business moving. Start with one capability. Scale to the complete operating platform.',
  ctaButtonText = 'Talk to Us',
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-midnight">
      {/* Top Breadcrumb & Status Bar */}
      {breadcrumbs.length > 0 && (
        <div className="bg-white border-b border-border-base sticky top-16 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-xs">
            <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

            <div className="hidden sm:flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                ScaleOnIt Verified Architecture
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Page Hero Header (if provided) */}
      {heroTitle && (
        <PageHero
          eyebrow={heroEyebrow}
          title={heroTitle}
          description={heroDescription}
          badges={heroBadges}
          onPrimaryCta={() => onNavigate('/demo')}
          onSecondaryCta={() => onNavigate('/platform')}
        />
      )}

      {/* Main Page Content */}
      <main className="relative z-10" id="main-content">
        {children}
      </main>

      {/* Standard Bottom Contextual CTA */}
      <section className="py-24 bg-pearl border-t border-border-base relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-onit bg-onit-light border border-blue-200 px-3 py-1 rounded-full mb-6">
            Next Step
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-midnight leading-tight mb-4">
            {ctaTitle}
          </h2>
          <p className="text-base text-mid-text leading-relaxed mb-8 max-w-xl mx-auto">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('/demo')}
              className="bg-onit text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-onit-hover transition-all text-sm cursor-pointer shadow-lg shadow-onit/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit"
            >
              {ctaButtonText}
            </button>
            <button
              onClick={() => onNavigate('/architecture')}
              className="border border-border-base text-midnight font-semibold px-8 py-3.5 rounded-xl hover:bg-white transition-all text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit"
            >
              Explore Architecture
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
