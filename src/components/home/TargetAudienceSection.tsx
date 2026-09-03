export default function TargetAudienceSection() {
  const audiences = [
    {
      title: 'IT Service Companies',
      desc: 'Companies delivering consulting, custom IT implementations, and ongoing client operations.',
      icon: '🏢',
    },
    {
      title: 'Software Development Companies',
      desc: 'Agencies and dev shops building web, mobile, and cloud software for external clients.',
      icon: '💻',
    },
    {
      title: 'Digital Service Teams',
      desc: 'Agencies and solution providers managing multi-disciplinary digital client projects.',
      icon: '⚡',
    },
    {
      title: 'Enterprise Delivery Teams',
      desc: 'Internal and external teams responsible for end-to-end software rollouts and governance.',
      icon: '🛡️',
    },
  ]

  return (
    <section
      id="who-its-for"
      aria-label="Who ScaleOnIt Is For"
      className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            WHO IT IS FOR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Built for IT and software service businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ScaleOnIt is being built for companies that manage customers, projects, software delivery and teams across multiple parts of the business.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="font-extrabold text-base text-slate-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
