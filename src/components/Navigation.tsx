import { useState, useEffect } from 'react'

interface NavigationProps {
  currentView?: 'home' | 'talk-to-us'
  onNavigate?: (view: 'home' | 'talk-to-us', sectionHash?: string) => void
}

const navLinks = [
  { label: 'Platform', hash: '#platform' },
  { label: 'AI Workforce', hash: '#ai-workforce' },
  { label: 'Architecture', hash: '#architecture' },
  { label: 'Connect', hash: '#connect' },
  { label: 'Solutions', hash: '#platform-intro' },
  { label: 'Governance', hash: '#governance' },
]

export default function Navigation({ currentView = 'home', onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLinkClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault()
    setMobileOpen(false)
    if (onNavigate) {
      onNavigate('home', hash)
    } else {
      window.location.hash = hash
    }
  }

  const handleTalkToUsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)
    if (onNavigate) {
      onNavigate('talk-to-us')
    } else {
      window.location.hash = '#talk-to-us'
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)
    if (onNavigate) {
      onNavigate('home')
    } else {
      window.location.hash = '#hero'
    }
  }

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/96 backdrop-blur-md border-b border-border-base shadow-sm' : 'bg-white/80 backdrop-blur-xs border-b border-border-base/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <button
          onClick={handleLogoClick}
          aria-label="ONIT by ScaleOnIt — home"
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="flex items-center">
            <span className="font-extrabold text-xl tracking-tight text-midnight">ON</span>
            <span className="font-extrabold text-xl tracking-tight text-onit">IT</span>
          </div>
          <span className="hidden sm:block text-[10px] font-semibold tracking-[0.18em] uppercase text-mid-text border-l border-border-base pl-3">
            by ScaleOnIt
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className={`text-sm font-medium transition-colors duration-150 tracking-wide cursor-pointer ${
                currentView === 'home'
                  ? 'text-mid-text hover:text-midnight'
                  : 'text-slate-400 hover:text-midnight'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={handleTalkToUsClick}
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer ${
              currentView === 'talk-to-us'
                ? 'bg-onit-light text-onit border border-blue-200 shadow-xs'
                : 'text-mid-text hover:text-midnight hover:bg-pearl'
            }`}
          >
            Talk to Us
          </button>
          <button
            onClick={(e) => (currentView === 'talk-to-us' ? handleLinkClick(e, '#platform') : handleTalkToUsClick(e))}
            className="text-sm font-semibold bg-onit text-white px-5 py-2.5 rounded-lg hover:bg-onit-hover transition-all duration-150 hover:shadow-lg hover:shadow-onit/25 cursor-pointer"
          >
            {currentView === 'talk-to-us' ? 'Explore Platform' : 'Book Architecture Call'}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-soft transition-colors cursor-pointer"
        >
          <span className={`block w-5 h-0.5 bg-midnight transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-midnight transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-midnight transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden bg-white border-t border-border-base overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className="text-sm font-medium text-left text-mid-text hover:text-midnight py-2.5 border-b border-border-base/50 last:border-0 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={handleTalkToUsClick}
              className={`text-sm font-semibold text-center py-2.5 border rounded-lg transition-colors cursor-pointer ${
                currentView === 'talk-to-us'
                  ? 'bg-onit-light border-blue-200 text-onit'
                  : 'border-border-base text-mid-text hover:bg-soft'
              }`}
            >
              Talk to Us
            </button>
            <button
              onClick={handleTalkToUsClick}
              className="text-sm font-semibold text-center bg-onit text-white py-2.5 rounded-lg hover:bg-onit-hover transition-colors cursor-pointer"
            >
              Book Architecture Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

