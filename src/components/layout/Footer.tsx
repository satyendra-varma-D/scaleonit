interface FooterProps {
  onNavigate: (path: string, anchor?: string) => void
}

const ecosystemSystems = [
  { label: 'GROW', path: '/', desc: 'Acquisition & CRM' },
  { label: 'DISCOVER', path: '/platform/discover', desc: 'Requirements & Solutioning' },
  { label: 'DELIVER (ONIT)', path: '/platform/deliver', desc: 'Active Flagship Product' },
  { label: 'PEOPLE', path: '/', desc: 'Workforce & Resources' },
  { label: 'MONEY', path: '/', desc: 'Commercial & Financials' },
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
    <footer className="bg-white text-[#1B0A2A] border-t border-[#EAE6F0]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-[#EAE6F0]">
          {/* Master Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={(e) => handleLink(e, '/')}
              className="flex items-center gap-2.5 text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#C53678] to-[#FF5841] flex items-center justify-center font-black text-white text-lg shadow-sm shadow-[#C53678]/25">
                S
              </div>
              <span className="font-black text-2xl tracking-tight text-[#1B0A2A]">
                Scale<span className="text-[#C53678]">OnIt</span>
              </span>
            </button>

            <p className="text-xs text-[#5A4E68] leading-relaxed max-w-sm">
              The Business Operating Ecosystem connecting customer acquisition, requirements discovery, software delivery, workforce, financials, and customer success.
            </p>

            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#5A4E68] mb-1.5">
                Current Flagship Product:
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C53678] bg-[#FDF2F7] border border-[#C53678]/30 px-3.5 py-1.5 rounded-full">
                <span>ONIT</span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="text-[#5A4E68] font-medium">Powering the DELIVER System</span>
              </div>
            </div>
          </div>

          {/* 6 Systems Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1B0A2A]">
              The Six Systems
            </h4>
            <ul className="space-y-2 text-xs">
              {ecosystemSystems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-[#5A4E68] hover:text-[#C53678] transition-colors cursor-pointer text-left block"
                  >
                    <span className="font-bold text-[#1B0A2A] hover:text-[#C53678]">{item.label}</span>
                    <span className="text-[10px] text-[#5A4E68] block">{item.desc}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Specifications Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1B0A2A]">
              Platform & Specs
            </h4>
            <ul className="space-y-2 text-xs">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-[#5A4E68] hover:text-[#C53678] font-medium transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Architecture Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1B0A2A]">
              Company & Vision
            </h4>
            <ul className="space-y-2 text-xs">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-[#5A4E68] hover:text-[#C53678] font-medium transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A4E68]">
          <div>
            © {new Date().getFullYear()} ScaleOnIt. All rights reserved. One ecosystem. Six systems. Connected business.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#1B0A2A] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#1B0A2A] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#1B0A2A] transition-colors cursor-pointer">Security Center</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
