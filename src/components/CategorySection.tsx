const orbitItems = [
  { label: 'Business', color: 'text-blue-400', angle: 0 },
  { label: 'People', color: 'text-violet-400', angle: 33 },
  { label: 'Projects', color: 'text-blue-400', angle: 66 },
  { label: 'Engineering', color: 'text-cyan-400', angle: 99 },
  { label: 'Quality', color: 'text-emerald-400', angle: 132 },
  { label: 'Cloud', color: 'text-cyan-400', angle: 165 },
  { label: 'Customers', color: 'text-blue-400', angle: 198 },
  { label: 'Finance', color: 'text-violet-400', angle: 231 },
  { label: 'Knowledge', color: 'text-amber-400', angle: 264 },
  { label: 'AI', color: 'text-violet-400', angle: 297 },
  { label: 'External Systems', color: 'text-cyan-400', angle: 330 },
]

export default function CategorySection() {
  return (
    <section id="platform-intro" className="py-20 sm:py-28 bg-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Orbit diagram */}
          <div className="relative flex items-center justify-center order-2 lg:order-1 overflow-hidden py-4">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 max-w-full">
              {/* Center node */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-onit flex flex-col items-center justify-center shadow-xl shadow-onit/30 mx-auto">
                    <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-none">ONIT</span>
                    <span className="text-blue-200 text-[8px] sm:text-[9px] font-semibold tracking-widest uppercase mt-1">Platform</span>
                  </div>
                </div>
              </div>

              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-blue-200/30" />
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-border-base/50" />

              {/* Orbit items */}
              {orbitItems.map((item, i) => {
                const rad = (item.angle * Math.PI) / 180
                const r = 120
                const cx = 50 + (r / 2.8) * Math.cos(rad)
                const cy = 50 + (r / 2.8) * Math.sin(rad)
                return (
                  <div
                    key={item.label}
                    className="absolute"
                    style={{ left: `${cx}%`, top: `${cy}%`, transform: 'translate(-50%,-50%)' }}
                  >
                    <div className={`text-[9px] sm:text-[10px] font-bold tracking-wide uppercase whitespace-nowrap ${item.color} bg-white border border-border-base px-1.5 sm:px-2 py-0.5 rounded-md shadow-xs`}>
                      {item.label}
                    </div>
                  </div>
                )
              })}

              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                {orbitItems.map((item, i) => {
                  const rad = (item.angle * Math.PI) / 180
                  const r = 120
                  const cx = 50 + (r / 2.8) * Math.cos(rad)
                  const cy = 50 + (r / 2.8) * Math.sin(rad)
                  return (
                    <line
                      key={i}
                      x1="50%" y1="50%"
                      x2={`${cx}%`} y2={`${cy}%`}
                      stroke="rgba(37,99,235,0.12)"
                      strokeWidth="1"
                    />
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-onit mb-6 border border-onit/20 bg-onit-light px-4 py-2 rounded-full">
              A New Operating Model
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-midnight leading-[1.08] tracking-tight mb-6">
              Meet the operating platform<br />
              for software delivery.
            </h2>
            <p className="text-sm sm:text-base text-mid-text leading-relaxed mb-6 sm:mb-8 max-w-lg">
              ONIT connects the people, processes, systems, data and intelligence behind modern software delivery into one continuously operating environment.
            </p>
            <p className="text-xs sm:text-sm text-mid-text leading-relaxed mb-8 sm:mb-10 max-w-lg">
              ONIT is not a collection of SaaS applications. It is a connected operating platform — where every capability shares context, every AI worker has the right knowledge, and every handoff preserves what matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { headline: 'Your people manage the business.', sub: 'ONIT manages the work.' },
                { headline: 'One connected context.', sub: 'Across the entire lifecycle.' },
              ].map((q) => (
                <div key={q.headline} className="p-4 rounded-xl border border-border-base bg-white">
                  <div className="text-sm font-semibold text-midnight mb-1">{q.headline}</div>
                  <div className="text-xs text-mid-text">{q.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

