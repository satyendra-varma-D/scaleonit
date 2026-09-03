interface FooterProps {
  onNavigate: (path: string, anchor?: string) => void
}

const ecosystemSystems = [
  { label: 'GROW', path: '/', desc: 'Acquisition & CRM' },
  { label: 'DISCOVER', path: '/platform/discover', desc: 'Requirements & Solutioning' },
  { label: 'DELIVER (ONIT)', path: '/platform/deliver', desc: 'Active Flagship Engine' },
  { label: 'PEOPLE', path: '/', desc: 'Workforce & Resources' },
  { label: 'FINANCIALS', path: '/', desc: 'Milestone Payments & Margins' },
  { label: 'SERVE', path: '/platform/serve', desc: 'Customer Success & Support' },
]

const platformLinks = [
  { label: 'Platform Hub', path: '/platform' },
  { label: 'DISCOVER Spec', path: '/platform/discover' },
  { label: 'ENGINEER Spec', path: '/platform/engineer' },
  { label: 'QUALITY Spec', path: '/platform/quality' },
  { label: 'DELIVER Spec', path: '/platform/deliver' },
  { label: 'SERVE Spec', path: '/platform/serve' },
  { label: 'Intelligence Engine', path: '/platform/intelligence' },
  { label: 'Integration Connectors', path: '/platform/connect' },
]

const companyLinks = [
  { label: 'About ScaleOnIt', path: '/company' },
  { label: 'Architecture Deep Dive', path: '/architecture' },
  { label: 'Security & Governance', path: '/security' },
  { label: 'IT Services Solutions', path: '/solutions/it-services' },
  { label: 'Software Teams', path: '/solutions/software-development' },
  { label: 'Talk to Us / Consultation', path: '/demo' },
]

export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent, path: string, anchor?: string) => {
    e.preventDefault()
    onNavigate(path, anchor)
  }

  return (
    <footer className="bg-transparent text-slate-800 border-t border-slate-200/80" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-slate-200">
          {/* Master Brand Column */}
          <div className="lg:col-span-2 space-y-4">
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

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              The Business Operating Ecosystem connecting customer acquisition, requirements discovery, software delivery, workforce, financials, and customer success.
            </p>

            <div className="pt-2">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Current Flagship Engine:
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-2xs">
                <span>ONIT</span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="text-slate-600 font-medium">Powering the DELIVER System</span>
              </div>
            </div>
          </div>

          {/* 6 Systems Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              The Six Systems
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {ecosystemSystems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-slate-600 hover:text-[#FF5500] transition-colors cursor-pointer text-left block group"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-[#FF5500]">{item.label}</span>
                    <span className="text-[10px] text-slate-400 block font-mono">{item.desc}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Specifications Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              Platform & Specs
            </h4>
            <ul className="space-y-2 text-xs">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-slate-600 hover:text-[#FF5500] font-medium transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Architecture Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              Company & Vision
            </h4>
            <ul className="space-y-2 text-xs">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-slate-600 hover:text-[#FF5500] font-medium transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} ScaleOnIt. All rights reserved. One ecosystem. Six systems.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Security Center</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
