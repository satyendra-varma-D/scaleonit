import { useState, useEffect, useRef, useCallback } from 'react'
import { primaryNavigation } from '../../data/navigation'

interface NavigationProps {
  currentPath: string
  onNavigate: (path: string, anchor?: string) => void
}

export default function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard accessibility: Escape key closes menus
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveDropdown(null)
      setMobileOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    setMobileOpen(false)
    setActiveDropdown(null)
    onNavigate(path)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)
    setActiveDropdown(null)
    onNavigate('/')
  }

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-border-base shadow-sm'
          : 'bg-white/85 backdrop-blur-xs border-b border-border-base/40'
      }`}
    >
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Brand Logo: ONIT by ScaleOnIt */}
        <button
          onClick={handleLogoClick}
          aria-label="ONIT by ScaleOnIt — Return to Homepage"
          className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit rounded-lg"
        >
          <div className="flex items-center">
            <span className="font-extrabold text-xl tracking-tight text-midnight">ON</span>
            <span className="font-extrabold text-xl tracking-tight text-onit">IT</span>
          </div>
          <span className="hidden sm:block text-[10px] font-semibold tracking-[0.18em] uppercase text-mid-text border-l border-border-base pl-3">
            by ScaleOnIt
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {primaryNavigation.map((group) => {
            const hasItems = group.items && group.items.length > 0
            const isCurrent =
              currentPath === group.path ||
              (group.items && group.items.some((item) => currentPath === item.path))

            if (hasItems) {
              const isOpen = activeDropdown === group.label

              return (
                <div key={group.label} className="relative">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : group.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-label={`${group.label} navigation menu`}
                    className={`text-sm font-medium transition-colors duration-150 tracking-wide flex items-center gap-1 py-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit rounded-md ${
                      isCurrent ? 'text-onit font-semibold' : 'text-mid-text hover:text-midnight'
                    }`}
                  >
                    <span>{group.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-onit' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 4.5l3.5 3.5 3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div
                      role="menu"
                      aria-label={`${group.label} submenu`}
                      className="absolute top-full left-0 mt-1.5 w-80 bg-white rounded-2xl border border-border-base shadow-xl p-2.5 z-50 animate-fade-in"
                    >
                      <div className="space-y-1">
                        {group.items!.map((item) => (
                          <button
                            key={item.path}
                            role="menuitem"
                            onClick={(e) => handleLinkClick(e, item.path)}
                            className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit ${
                              currentPath === item.path
                                ? 'bg-onit-light text-onit'
                                : 'hover:bg-pearl text-midnight'
                            }`}
                          >
                            {item.icon && (
                              <span className="text-base mt-0.5 flex-shrink-0" aria-hidden="true">
                                {item.icon}
                              </span>
                            )}
                            <div>
                              <div className="text-xs font-bold">{item.label}</div>
                              {item.description && (
                                <div className="text-[11px] text-mid-text leading-tight mt-0.5">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={group.label}
                onClick={(e) => handleLinkClick(e, group.path!)}
                className={`text-sm font-medium transition-colors duration-150 tracking-wide cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit rounded-md py-1 px-1.5 ${
                  currentPath === group.path
                    ? 'text-onit font-semibold'
                    : 'text-mid-text hover:text-midnight'
                }`}
              >
                {group.label}
              </button>
            )
          })}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={(e) => handleLinkClick(e, '/demo')}
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit ${
              currentPath === '/demo'
                ? 'bg-onit-light text-onit border border-blue-200'
                : 'text-mid-text hover:text-midnight hover:bg-pearl'
            }`}
          >
            Talk to Us
          </button>
          <button
            onClick={(e) => handleLinkClick(e, '/demo')}
            className="text-sm font-semibold bg-onit text-white px-5 py-2.5 rounded-lg hover:bg-onit-hover transition-all duration-150 hover:shadow-lg hover:shadow-onit/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit"
          >
            Book Architecture Call
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-soft transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onit"
        >
          <span
            className={`block w-5 h-0.5 bg-midnight transition-all duration-200 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-midnight transition-all duration-200 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-midnight transition-all duration-200 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden bg-white border-t border-border-base overflow-y-auto transition-all duration-300 ${
          mobileOpen ? 'max-h-[85vh] py-5 px-6 shadow-xl' : 'max-h-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-2">
          {primaryNavigation.map((group) => {
            if (group.items) {
              return (
                <div key={group.label} className="border-b border-border-base/50 pb-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-mid-text py-2">
                    {group.label}
                  </div>
                  <div className="space-y-1 pl-2">
                    {group.items.map((item) => (
                      <button
                        key={item.path}
                        onClick={(e) => handleLinkClick(e, item.path)}
                        className={`w-full text-left py-2 text-xs font-semibold flex items-center gap-2 cursor-pointer rounded-lg px-2 ${
                          currentPath === item.path
                            ? 'text-onit bg-onit-light'
                            : 'text-midnight hover:text-onit hover:bg-pearl'
                        }`}
                      >
                        <span aria-hidden="true">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <button
                key={group.label}
                onClick={(e) => handleLinkClick(e, group.path!)}
                className={`text-sm font-semibold text-left py-2.5 border-b border-border-base/50 last:border-0 cursor-pointer rounded-lg px-2 ${
                  currentPath === group.path ? 'text-onit bg-onit-light' : 'text-mid-text hover:text-midnight hover:bg-pearl'
                }`}
              >
                {group.label}
              </button>
            )
          })}

          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={(e) => handleLinkClick(e, '/demo')}
              className="text-sm font-semibold text-center py-2.5 border border-border-base rounded-xl text-midnight hover:bg-soft cursor-pointer"
            >
              Talk to Us
            </button>
            <button
              onClick={(e) => handleLinkClick(e, '/demo')}
              className="text-sm font-semibold text-center bg-onit text-white py-2.5 rounded-xl hover:bg-onit-hover transition-colors cursor-pointer"
            >
              Book Architecture Call
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
