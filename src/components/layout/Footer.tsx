interface FooterProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent, path: string, anchor?: string) => {
    e.preventDefault()
    onNavigate(path, anchor)
  }

  const ecosystemItems = [
    { name: 'GROW', desc: 'Business growth', path: '/ecosystem' },
    { name: 'DISCOVER', desc: 'Requirements', path: '/ecosystem' },
    { name: 'DELIVER', desc: 'Software delivery', path: '/platform/deliver', available: true },
    { name: 'PEOPLE', desc: 'People & teams', path: '/ecosystem' },
    { name: 'FINANCIALS', desc: 'Money & margins', path: '/ecosystem' },
    { name: 'SERVE', desc: 'Customer success', path: '/ecosystem' },
  ]

  const productItems = [
    {
      name: 'DELIVER',
      sub: 'Powered by ONIT',
      path: '/platform/deliver',
    },
    {
      name: 'ONIT',
      sub: 'Technology behind DELIVER',
      path: '/platform/deliver',
    },
  ]

  const companyItems = [
    { label: 'About ScaleOnIt', path: '/company' },
    { label: 'Our Vision', path: '/company', anchor: 'what-we-build' },
    { label: 'Contact Us', path: '/demo' },
  ]

  return (
    <footer className="bg-transparent text-slate-800 border-t border-slate-200/80 relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main 5-Area Grid */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-slate-200">
          
          {/* ==================================================
              1. SCALEONIT BRAND (Visually Strongest Area)
              ================================================== */}
          <div className="lg:col-span-4 space-y-4 order-1">
            <button
              onClick={(e) => handleLink(e, '/')}
              className="flex items-center gap-2.5 text-left cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF5500] text-white flex items-center justify-center font-black text-base shadow-sm shadow-orange-500/30">
                S
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                Scale<span className="text-[#FF5500]">OnIt</span>
              </span>
            </button>

            <div className="space-y-1 text-sm text-slate-600 font-normal leading-relaxed">
              <p>The connected business platform</p>
              <p>for IT and software service companies.</p>
            </div>

            <div className="font-mono text-xs font-bold text-slate-900 pt-1">
              One ecosystem. Six systems.
            </div>

            {/* Product Status Label */}
            <div className="pt-2">
              <button
                onClick={(e) => handleLink(e, '/platform/deliver')}
                className="p-3 rounded-xl bg-orange-50/70 border border-orange-200 text-left block hover:border-[#FF5500] transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="font-mono text-xs font-extrabold text-[#FF5500]">
                    DELIVER
                  </span>
                  <span className="font-mono text-[9px] font-bold text-white bg-[#FF5500] px-1.5 py-0.2 rounded">
                    Available today
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 font-mono">
                  Powered by ONIT
                </div>
              </button>
            </div>
          </div>

          {/* ==================================================
              5. TALK TO US (Approachful & Direct Contact)
              On mobile this is placed right after Brand
              ================================================== */}
          <div className="lg:col-span-3 space-y-3 order-2 lg:order-5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              TALK TO US
            </h4>
            <div className="space-y-0.5 text-xs text-slate-600 leading-relaxed">
              <p>Building something?</p>
              <p>Have an idea?</p>
              <p>Want to know more?</p>
            </div>

            <div className="space-y-2 pt-2">
              <div>
                <a
                  href="mailto:prabha44556@gmail.com"
                  className="font-mono text-xs font-bold text-[#FF5500] hover:underline break-all block"
                >
                  prabha44556@gmail.com
                </a>
              </div>
              <div>
                <span className="font-mono text-xs text-slate-700 block">
                  +91 96421... <span className="text-[#FF5500] font-bold">(Please mail)</span>
                </span>
              </div>
            </div>
          </div>

          {/* ==================================================
              2. ECOSYSTEM
              ================================================== */}
          <div className="lg:col-span-2 space-y-3 order-3 lg:order-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              ECOSYSTEM
            </h4>
            <ul className="space-y-2.5 text-xs">
              {ecosystemItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={(e) => handleLink(e, item.path, item.anchor)}
                    className="text-left group cursor-pointer block"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors font-mono">
                        {item.name}
                      </span>
                      {item.available && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" title="Available today" />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 font-sans block">
                      {item.desc}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================================
              3. PRODUCTS
              ================================================== */}
          <div className="lg:col-span-2 space-y-3 order-4 lg:order-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              PRODUCTS
            </h4>
            <ul className="space-y-3 text-xs">
              {productItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-left group cursor-pointer block"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors font-mono block">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-sans block">
                      {item.sub}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================================
              4. COMPANY
              ================================================== */}
          <div className="lg:col-span-1 space-y-3 order-5 lg:order-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs">
              {companyItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path, item.anchor)}
                    className="text-slate-600 hover:text-[#FF5500] font-medium transition-colors cursor-pointer text-left block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ==================================================
            BOTTOM BAR
            ================================================== */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} ScaleOnIt. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="font-mono font-medium text-slate-600">One ecosystem. Six systems.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
