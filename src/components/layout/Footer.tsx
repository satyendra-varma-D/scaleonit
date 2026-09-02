interface FooterProps {
  onNavigate: (path: string, anchor?: string) => void
}

const platformLinks = [
  { label: 'Platform Overview', path: '/platform' },
  { label: 'DISCOVER', path: '/platform/discover' },
  { label: 'ENGINEER', path: '/platform/engineer' },
  { label: 'QUALITY', path: '/platform/quality' },
  { label: 'DELIVER', path: '/platform/deliver' },
  { label: 'SERVE', path: '/platform/serve' },
  { label: 'INTELLIGENCE', path: '/platform/intelligence' },
  { label: 'CONNECT', path: '/platform/connect' },
]

const aiWorkforceLinks = [
  { label: 'AI Workforce Overview', path: '/ai-workforce' },
  { label: 'AI Business Analyst', path: '/ai-workforce' },
  { label: 'AI Solution Architect', path: '/ai-workforce' },
  { label: 'AI Engineering Agent', path: '/ai-workforce' },
  { label: 'AI QA Engineer', path: '/ai-workforce' },
  { label: 'AI DevOps Engineer', path: '/ai-workforce' },
  { label: 'AI Project Manager', path: '/ai-workforce' },
]

const architectureLinks = [
  { label: 'Operating Architecture', path: '/architecture' },
  { label: 'AI Intelligence Engine', path: '/platform/intelligence' },
  { label: 'Integration Ecosystem', path: '/platform/connect' },
  { label: 'Security & Governance', path: '/security' },
]

const solutionsLinks = [
  { label: 'IT Services & Delivery Firms', path: '/solutions/it-services' },
  { label: 'Software Development Teams', path: '/solutions/software-development' },
]

export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent, path: string, anchor?: string) => {
    e.preventDefault()
    onNavigate(path, anchor)
  }

  return (
    <footer className="bg-midnight text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-white/8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <button
              onClick={(e) => handleLink(e, '/')}
              className="flex items-center gap-1 mb-3 text-left cursor-pointer"
            >
              <span className="font-extrabold text-2xl tracking-tight text-white">ON</span>
              <span className="font-extrabold text-2xl tracking-tight text-onit">IT</span>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-[220px]">
              The AI-Native Operating Platform for Software Delivery & IT Operations.
            </p>
            <p className="text-[11px] font-semibold text-slate-400 tracking-wide mb-6">
              By ScaleOnIt
            </p>
            <div className="p-3 rounded-xl border border-white/8 bg-white/[0.03] max-w-[220px]">
              <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-1">
                Tagline
              </div>
              <div className="text-xs font-semibold text-slate-300">
                One Platform. Every IT Need.
              </div>
            </div>
          </div>

          {/* Platform Capabilities */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">
              Platform
            </div>
            <ul className="space-y-2">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Workforce */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">
              AI Workforce
            </div>
            <ul className="space-y-2">
              {aiWorkforceLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Solutions */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">
              Architecture
            </div>
            <ul className="space-y-2 mb-6">
              {architectureLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">
              Solutions
            </div>
            <ul className="space-y-2">
              {solutionsLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Corporate */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">
              Get Started
            </div>
            <ul className="space-y-2 mb-6">
              <li>
                <button
                  onClick={(e) => handleLink(e, '/demo')}
                  className="text-xs font-semibold text-onit hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  ⚡ Book Architecture Call
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/demo')}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Request Enterprise Sandbox
                </button>
              </li>
              <li>
                <a
                  href="mailto:solutions@scaleonit.com"
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  solutions@scaleonit.com
                </a>
              </li>
            </ul>

            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-4">
              Corporate
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={(e) => handleLink(e, '/company')}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  About ScaleOnIt
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/security')}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Security & Governance
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/platform/connect')}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Connect Ecosystem
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500">
            &copy; 2026 ScaleOnIt. ONIT is a flagship operating platform of ScaleOnIt.
          </div>
          <div className="flex items-center gap-6 text-[11px] text-slate-500">
            <button
              onClick={(e) => handleLink(e, '/security')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy & Responsible AI
            </button>
            <button
              onClick={(e) => handleLink(e, '/security')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Enterprise Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
