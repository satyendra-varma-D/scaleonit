import PageLayout from '../layout/PageLayout'
import { solutions } from '../../data/solutions'

interface SolutionsPageProps {
  slug: string
  onNavigate: (path: string, anchor?: string) => void
}

export default function SolutionsPage({ slug, onNavigate }: SolutionsPageProps) {
  const sol = solutions.find((s) => s.slug === slug) || solutions[0]

  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow={`ScaleOnIt Solutions · ${sol.tagline}`}
      heroTitle={sol.heroHeadline}
      heroDescription={sol.heroDescription}
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Target Audience Badge */}
          <div className="mb-12 p-5 rounded-2xl bg-[#FAFAFC] border border-[#EAE6F0] flex items-center gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#5A4E68] block">
                Target Audience
              </span>
              <span className="text-sm font-extrabold text-[#1B0A2A]">{sol.targetAudience}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* The Operational Challenges */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] shadow-2xs">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#FF5841] mb-2">
                Common Industry Bottlenecks
              </div>
              <h2 className="text-2xl font-extrabold text-[#1B0A2A] mb-6">
                What holds organizations back
              </h2>
              <div className="space-y-4">
                {sol.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FFF4F2] text-[#FF5841] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 border border-[#FF5841]/20">
                      ✕
                    </div>
                    <span className="text-sm text-[#5A4E68] leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The ScaleOnIt Connected Solution */}
            <div className="p-8 sm:p-10 rounded-3xl border border-[#C53678]/30 bg-gradient-to-br from-[#FDF2F7] to-[#FFF4F2] shadow-sm">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#C53678] mb-2">
                The ScaleOnIt Solution
              </div>
              <h2 className="text-2xl font-extrabold text-[#1B0A2A] mb-6">
                Connected Operating Intelligence
              </h2>
              <div className="space-y-4">
                {sol.solutionCapabilities.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white text-[#C53678] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-2xs border border-[#C53678]/20">
                      ✓
                    </div>
                    <span className="text-sm font-extrabold text-[#1B0A2A] leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Measurable Outcomes */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-[#EAE6F0] text-[#1B0A2A] shadow-sm">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#C53678] mb-2">
              Measurable Business Outcomes
            </div>
            <h3 className="text-xl font-extrabold text-[#1B0A2A] mb-6">What changes when you operate on ScaleOnIt</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {sol.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#EAE6F0] shadow-2xs">
                  <div className="text-[#FF5841] font-extrabold text-lg mb-1">0{idx + 1}</div>
                  <div className="text-sm text-[#5A4E68] leading-snug font-medium">{outcome}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
