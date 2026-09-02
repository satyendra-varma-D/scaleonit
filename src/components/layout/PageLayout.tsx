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
  ctaTitle = 'Build the future of how your business operates.',
  ctaDescription = 'ScaleOnIt connects customer acquisition, requirements discovery, software delivery, workforce, financials, and customer success into one ecosystem.',
  ctaButtonText = 'Talk to Us',
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#1B0A2A]">
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
      <section className="py-24 bg-[#FAFAFC] border-t border-[#EAE6F0] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full mb-6">
            Next Step
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B0A2A] leading-tight mb-4">
            {ctaTitle}
          </h2>
          <p className="text-base text-[#5A4E68] leading-relaxed mb-8 max-w-xl mx-auto">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <button
              onClick={() => onNavigate('/demo')}
              className="bg-[#C53678] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#A92661] transition-all text-sm cursor-pointer shadow-md shadow-[#C53678]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678]"
            >
              {ctaButtonText}
            </button>
            <button
              onClick={() => onNavigate('/architecture')}
              className="border border-[#EAE6F0] bg-white text-[#1B0A2A] font-bold px-8 py-3.5 rounded-full hover:bg-[#FDF2F7] hover:border-[#C53678]/30 hover:text-[#C53678] transition-all text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678]"
            >
              Explore Architecture
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
