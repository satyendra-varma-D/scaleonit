interface FooterProps {
  onNavigateToTalkToUs?: () => void
  onNavigateToSection?: (hash: string) => void
}

const platformLinks = ['GROW', 'DISCOVER', 'DESIGN', 'ENGINEER', 'QUALITY', 'DELIVER', 'SERVE', 'PEOPLE', 'FINANCE', 'INTELLIGENCE', 'CONNECT']

const aiWorkforceLinks = [
  'Business Analyst', 'Solution Architect', 'Engineering Agent',
  'QA Engineer', 'DevOps Engineer', 'Project Manager',
]

const architectureLinks = [
  'Platform Architecture', 'AI Architecture', 'Agent Architecture',
  'Integration Architecture', 'Security Architecture',
]

const solutionsLinks = [
  'IT Services', 'Software Development', 'IT Consulting',
  'Digital Engineering', 'System Integrators',
]

export default function Footer({ onNavigateToTalkToUs, onNavigateToSection }: FooterProps) {
  const handleTalkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onNavigateToTalkToUs) {
      onNavigateToTalkToUs()
    } else {
      window.location.hash = '#talk-to-us'
    }
  }

  const handleSectionClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault()
    if (onNavigateToSection) {
      onNavigateToSection(hash)
    } else {
      window.location.hash = hash
    }
  }

  return (
    <footer className="bg-midnight text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-white/8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <button
              onClick={(e) => handleSectionClick(e, '#hero')}
              className="flex items-center gap-1 mb-3 text-left cursor-pointer"
            >
              <span className="font-extrabold text-2xl tracking-tight text-white">ON</span>
              <span className="font-extrabold text-2xl tracking-tight text-onit">IT</span>
            </button>
            <p className="text-xs text-slate-500 leading-relaxed mb-4 max-w-[200px]">
              The AI-Native Operating Platform for Software Delivery.
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed max-w-[200px]">
              By ScaleOnIt
            </p>
            <div className="mt-6 p-3 rounded-xl border border-white/8 bg-white/[0.03] max-w-[200px]">
              <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-1">Tagline</div>
              <div className="text-xs font-semibold text-slate-300">One Platform. Every IT Need.</div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">Platform</div>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={(e) => handleSectionClick(e, '#platform')}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Workforce */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">AI Workforce</div>
            <ul className="space-y-2">
              {aiWorkforceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={(e) => handleSectionClick(e, '#ai-workforce')}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">Architecture</div>
            <ul className="space-y-2 mb-6">
              {architectureLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={(e) => handleSectionClick(e, '#architecture')}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">Solutions</div>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={(e) => handleSectionClick(e, '#platform-intro')}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">Talk with Us</div>
            <ul className="space-y-2 mb-6">
              <li>
                <button
                  onClick={handleTalkClick}
                  className="text-xs font-semibold text-onit hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  ⚡ Book Architecture Call
                </button>
              </li>
              <li>
                <button
                  onClick={handleTalkClick}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Request Enterprise Pilot
                </button>
              </li>
              <li>
                <a href="mailto:solutions@scaleonit.com" className="text-xs text-slate-400 hover:text-white transition-colors">
                  Email Solutions Team
                </a>
              </li>
            </ul>

            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">Company</div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={(e) => handleSectionClick(e, '#governance')}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Security & Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleSectionClick(e, '#connect')}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Connect Ecosystem
                </button>
              </li>
              <li>
                <button
                  onClick={handleTalkClick}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Global Offices
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-600">
            &copy; 2026 ScaleOnIt. ONIT is a product of ScaleOnIt.
          </div>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Security', 'Responsible AI'].map((link) => (
              <a key={link} href="#" className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

