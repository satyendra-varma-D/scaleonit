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
      breadcrumbs={[
        { label: 'Solutions' },
        { label: sol.title },
      ]}
      heroEyebrow={`ONIT Solutions · ${sol.tagline}`}
      heroTitle={sol.heroHeadline}
      heroDescription={sol.heroDescription}
    >
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Target Audience Badge */}
          <div className="mb-12 p-4 rounded-xl bg-pearl border border-border-base flex items-center gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-mid-text block">
                Target Audience
              </span>
              <span className="text-sm font-bold text-midnight">{sol.targetAudience}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* The Operational Challenges */}
            <div className="p-8 rounded-2xl bg-white border-2 border-red-100 shadow-xs">
              <div className="text-[10px] font-bold tracking-widest uppercase text-red-600 mb-2">
                Common Industry Bottlenecks
              </div>
              <h2 className="text-2xl font-extrabold text-midnight mb-6">
                What holds organizations back
              </h2>
              <div className="space-y-4">
                {sol.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✕
                    </div>
                    <span className="text-sm text-mid-text leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The ONIT Connected Solution */}
            <div className={`p-8 rounded-2xl border-2 ${sol.border} ${sol.bg} shadow-xs`}>
              <div className={`text-[10px] font-bold tracking-widest uppercase ${sol.color} mb-2`}>
                The ONIT Solution
              </div>
              <h2 className="text-2xl font-extrabold text-midnight mb-6">
                Connected Operating Intelligence
              </h2>
              <div className="space-y-4">
                {sol.solutionCapabilities.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-white ${sol.color} flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-xs`}>
                      ✓
                    </div>
                    <span className="text-sm font-semibold text-midnight leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Measurable Outcomes */}
          <div className="p-8 rounded-2xl bg-midnight text-white">
            <div className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 mb-2">
              Measurable Business Outcomes
            </div>
            <h3 className="text-xl font-bold mb-6">What changes when you operate on ONIT</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {sol.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-emerald-400 font-extrabold text-lg mb-1">0{idx + 1}</div>
                  <div className="text-sm text-slate-300 leading-snug">{outcome}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
