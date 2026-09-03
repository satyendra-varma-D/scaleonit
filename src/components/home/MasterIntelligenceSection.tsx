export default function MasterIntelligenceSection() {
  const aiRoles = [
    {
      title: 'Understanding Requirements',
      desc: 'Helps turn discovery discussions and customer documents into organized feature requirements.',
      icon: '🔍',
    },
    {
      title: 'Creating Software',
      desc: 'Assists engineers with application scaffolding, modern user interfaces, and API endpoints.',
      icon: '⚡',
    },
    {
      title: 'Testing Applications',
      desc: 'Generates automated test suites before deployment so issues are caught early.',
      icon: '🧪',
    },
    {
      title: 'Everyday Tasks',
      desc: 'Handles routine summaries, status updates, and milestone tracking so teams focus on higher-value work.',
      icon: '📋',
    },
  ]

  return (
    <section
      id="intelligence"
      aria-label="How AI Helps in ScaleOnIt"
      className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            ARTIFICIAL INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            AI where it actually helps.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4">
            AI is built into the platform where it can save time and reduce repetitive work. It can help teams understand requirements, create software, test applications and handle everyday tasks.
          </p>
          <div className="inline-block font-mono text-sm font-bold text-slate-900 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-2xs">
            The goal is not to add AI everywhere. The goal is to remove unnecessary work.
          </div>
        </div>

        {/* 4 Practical AI Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          {aiRoles.map((role) => (
            <div
              key={role.title}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors"
            >
              <span className="text-2xl mb-3 block">{role.icon}</span>
              <h3 className="font-extrabold text-base text-slate-900 mb-1.5">
                {role.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Honest Grounded Statement */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto text-center shadow-sm">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            AI assists your team; human judgment, review, and approvals remain in control of every client agreement and release.
          </p>
        </div>
      </div>
    </section>
  )
}

