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
          <div className="mb-12 p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-500 block">
                Target Audience
              </span>
              <span className="text-sm font-extrabold text-slate-900">{sol.targetAudience}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* The Operational Challenges */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">
                Common Industry Bottlenecks
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                What holds organizations back
              </h2>
              <div className="space-y-4">
                {sol.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </div>
                    <span className="text-sm text-slate-600 leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The ScaleOnIt Connected Solution */}
            <div className="p-8 sm:p-10 rounded-2xl border border-orange-200 bg-orange-50/50 shadow-sm">
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] mb-2">
                The ScaleOnIt Solution
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Connected Operating Intelligence
              </h2>
              <div className="space-y-4">
                {sol.solutionCapabilities.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF5500] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                      ✓
                    </div>
                    <span className="text-sm font-bold text-slate-900 leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Measurable Outcomes */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 shadow-sm">
            <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FF5500] mb-2">
              Measurable Business Outcomes
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-6">What changes when you operate on ScaleOnIt</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {sol.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#FF5500] transition-colors">
                  <div className="text-[#FF5500] font-mono font-extrabold text-lg mb-1">0{idx + 1}</div>
                  <div className="text-sm text-slate-600 leading-snug font-medium">{outcome}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
