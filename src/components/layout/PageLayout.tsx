import React from 'react'
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
  ctaTitle = 'Build the future of how your business operates.',
  ctaDescription = 'ScaleOnIt connects customer acquisition, requirements discovery, software delivery, workforce, financials, and customer success into one ecosystem.',
  ctaButtonText = 'Talk to Us',
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]">
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
      <section className="py-24 bg-transparent border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
            NEXT STEP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            {ctaTitle}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <button
              onClick={() => onNavigate('/demo')}
              className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded-lg transition-all text-sm cursor-pointer shadow-md shadow-orange-500/20"
            >
              {ctaButtonText}
            </button>
            <button
              onClick={() => onNavigate('/architecture')}
              className="border border-slate-200 bg-white text-slate-800 font-mono text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded-lg hover:bg-slate-100 hover:border-orange-500/40 hover:text-slate-900 transition-all text-sm cursor-pointer shadow-xs"
            >
              Explore Architecture
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
