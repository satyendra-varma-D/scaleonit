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
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50/90 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
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
              className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-2xl mb-3 p-2 rounded-xl bg-orange-50/80 border border-orange-200/60 inline-block">{item.icon}</span>
              <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#FF5500] transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
