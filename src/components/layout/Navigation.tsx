import { useState, useEffect, useRef, useCallback } from 'react'
import { primaryNavigation, ecosystemProducts } from '../../data/navigation'

interface NavigationProps {
  currentPath: string
  onNavigate: (path: string, anchor?: string) => void
}

export default function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard accessibility: Escape key closes menus
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setProductsDropdownOpen(false)
      setMobileOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    setProductsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false)
    }, 150)
  }

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    setMobileOpen(false)
    setProductsDropdownOpen(false)

    if (path.startsWith('/#')) {
      const anchor = path.replace('/', '')
      onNavigate('/', anchor)
      return
    }

    onNavigate(path)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)
    setProductsDropdownOpen(false)
    onNavigate('/')
  }

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]'
          : 'bg-white/92 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.04)]'
      }`}
    >
      {/* Top Brand Accent Stripe (Defines the top boundary) */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-90" />

      <nav
        ref={navRef}
        role="navigation"
        aria-label="ScaleOnIt Main Navigation"
        className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between"
      >
        {/* LEFT: ScaleOnIt Master Logo */}
        <button
          onClick={handleLogoClick}
          aria-label="ScaleOnIt — Return to Master Homepage"
          className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] rounded-lg p-1"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF5500] text-white flex items-center justify-center font-black text-base shadow-sm shadow-orange-500/30 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
                Scale<span className="text-[#FF5500]">OnIt</span>
              </span>
              <span className="font-mono text-[9px] font-bold tracking-[0.22em] uppercase text-slate-500 mt-0.5">
                OPERATING ECOSYSTEM
              </span>
            </div>
          </div>
        </button>

        {/* CENTER / PRIMARY NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          {primaryNavigation.map((item) => {
            const isCurrent =
              item.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(item.path) && item.path !== '/'

            if (item.hasDropdown) {
              const isEcosystemActive = currentPath === '/ecosystem' || currentPath.startsWith('/platform')
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={(e) => {
                      if (productsDropdownOpen) {
                        handleLinkClick(e, '/ecosystem')
                      } else {
                        setProductsDropdownOpen(true)
                      }
                    }}
                    onDoubleClick={(e) => handleLinkClick(e, '/ecosystem')}
                    aria-expanded={productsDropdownOpen}
                    aria-haspopup="true"
                    aria-label="Products ecosystem menu"
                    className={`font-mono text-xs uppercase tracking-wider font-bold transition-colors duration-150 flex items-center gap-1.5 py-2 cursor-pointer focus-visible:outline-none ${
                      productsDropdownOpen || isEcosystemActive
                        ? 'text-[#FF5500]'
                        : 'text-slate-700 hover:text-[#FF5500]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        productsDropdownOpen ? 'rotate-180 text-[#FF5500]' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 4.5l3.5 3.5 3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* PRODUCTS MEGA DROPDOWN (Clean White + Thin Dark Border) */}
                  {productsDropdownOpen && (
                    <div
                      role="menu"
                      aria-label="Products Submenu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-xl border border-slate-200 shadow-xl p-6 z-50 animate-fade-in"
                    >
                      {/* Mega Menu Top Header */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                        <div>
                          <button
                            onClick={(e) => handleLinkClick(e, '/ecosystem')}
                            className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF5500] hover:underline cursor-pointer text-left block"
                          >
                            SYSTEMS CATALOGUE →
                          </button>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">
                            Six purpose-built engines. One unified operating context.
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleLinkClick(e, '/ecosystem')}
                          className="font-mono text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-[#FF5500] border border-orange-200 hover:border-[#FF5500] px-2.5 py-1 rounded-md cursor-pointer transition-colors"
                        >
                          View Ecosystem Page →
                        </button>
                      </div>

                      {/* 2-Column Grid of the 6 Products */}
                      <div className="grid grid-cols-2 gap-3">
                        {ecosystemProducts.map((prod) => {
                          const isDeliver = prod.id === 'deliver'
                          const isClickable = prod.status === 'available' || prod.status === 'building'

                          return (
                            <button
                              key={prod.id}
                              role="menuitem"
                              disabled={!isClickable}
                              onClick={(e) => isClickable && handleLinkClick(e, prod.path)}
                              className={`p-3.5 rounded-lg text-left transition-all border ${
                                isDeliver
                                  ? 'bg-orange-50/50 border-orange-200 hover:border-[#FF5500] hover:shadow-sm cursor-pointer'
                                  : isClickable
                                  ? 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 cursor-pointer'
                                  : 'bg-slate-50/60 border-slate-100 opacity-60 cursor-default'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-base" aria-hidden="true">{prod.icon}</span>
                                  <span className="font-bold text-sm text-slate-900">
                                    {prod.name}
                                  </span>
                                </div>
                                <span
                                  className={`font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded ${
                                    isDeliver
                                      ? 'bg-[#FF5500] text-white'
                                      : prod.status === 'building'
                                      ? 'bg-slate-100 text-slate-600 border border-slate-200'
                                      : 'bg-slate-100 text-slate-400'
                                  }`}
                                >
                                  {isDeliver ? 'Available Today' : prod.statusLabel}
                                </span>
                              </div>

                              <div className="text-[11px] text-slate-500 leading-tight font-medium mb-1">
                                {prod.tagline}
                              </div>

                              {/* Highlight for DELIVER -> Powered by ONIT */}
                              {isDeliver && (
                                <div className="mt-2 pt-2 border-t border-orange-200/60 flex items-center justify-between text-xs font-mono font-bold text-[#FF5500]">
                                  <span>Powered by ONIT</span>
                                  <span>Explore DELIVER →</span>
                                </div>
                              )}
                            </button>
                          )
                        })}
                      </div>

                      {/* Bottom Contextual Note */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-500">
                        <span>Six systems for running your IT business.</span>
                        <button
                          onClick={(e) => handleLinkClick(e, '/platform/deliver')}
                          className="font-bold text-[#FF5500] hover:text-[#E04B00] uppercase cursor-pointer flex items-center gap-1"
                        >
                          Explore DELIVER →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={item.label}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`font-mono text-xs uppercase tracking-wider font-bold transition-colors duration-150 cursor-pointer py-1 px-2.5 rounded-md ${
                  isCurrent
                    ? 'text-[#FF5500] bg-orange-50 border border-orange-200'
                    : 'text-slate-700 hover:text-[#FF5500]'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {/* RIGHT: What else we are building - informational badge with no action */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="px-4 py-2 rounded-lg bg-orange-50 border border-orange-200 text-[#FF5500] font-mono text-xs font-bold uppercase tracking-wider shadow-xs select-none"
          >
            What else we are building
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition-all duration-200 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition-all duration-200 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition-all duration-200 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden bg-white border-t border-slate-200 overflow-y-auto transition-all duration-200 ${
          mobileOpen ? 'max-h-[85vh] py-6 px-6 shadow-xl' : 'max-h-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-3">
          {/* Home */}
          <button
            onClick={(e) => handleLinkClick(e, '/')}
            className={`font-mono text-sm uppercase font-bold text-left py-2 px-3 rounded-lg ${
              currentPath === '/' ? 'text-[#FF5500] bg-orange-50 border border-orange-200' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {/* Products Accordion */}
          <div className="border-y border-slate-200 py-2">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between font-mono text-sm uppercase font-bold text-slate-900 py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              <span>Ecosystem &amp; Products</span>
              <span className="font-mono text-xs font-bold text-[#FF5500]">
                {mobileProductsOpen ? '−' : '+'}
              </span>
            </button>

            {mobileProductsOpen && (
              <div className="pl-3 pr-1 pt-3 space-y-2">
                <button
                  onClick={(e) => handleLinkClick(e, '/ecosystem')}
                  className="w-full text-left p-2.5 rounded-lg bg-orange-50 border border-orange-200 text-[#FF5500] font-mono text-xs font-bold uppercase flex items-center justify-between"
                >
                  <span>Explore Full Ecosystem Page</span>
                  <span>→</span>
                </button>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 pt-1">
                  Six Purpose-Built Systems
                </div>
                {ecosystemProducts.map((prod) => {
                  const isDeliver = prod.id === 'deliver'
                  return (
                    <button
                      key={prod.id}
                      onClick={(e) => handleLinkClick(e, prod.path)}
                      className={`w-full text-left p-2.5 rounded-lg border flex items-start gap-2.5 ${
                        isDeliver
                          ? 'bg-orange-50 border-orange-200 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <span aria-hidden="true">{prod.icon}</span>
                      <div>
                        <div className="text-xs font-bold flex items-center gap-2">
                          <span className="text-slate-900 uppercase">{prod.name}</span>
                          {isDeliver && (
                            <span className="font-mono text-[9px] bg-[#FF5500] text-white px-1.5 py-0.2 rounded font-bold">
                              Powered by ONIT
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {prod.tagline}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* About Us */}
          <button
            onClick={(e) => handleLinkClick(e, '/company')}
            className={`font-mono text-sm uppercase font-bold text-left py-2 px-3 rounded-lg ${
              currentPath === '/company' ? 'text-[#FF5500] bg-orange-50 border border-orange-200' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            About Us
          </button>

          {/* Contact Us */}
          <button
            onClick={(e) => handleLinkClick(e, '/demo')}
            className={`font-mono text-sm uppercase font-bold text-left py-2 px-3 rounded-lg ${
              currentPath === '/demo' ? 'text-[#FF5500] bg-orange-50 border border-orange-200' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Contact Us
          </button>

          {/* Mobile CTA - informational badge with no action */}
          <div className="pt-4">
            <div
              className="w-full font-mono text-xs font-bold uppercase text-center bg-orange-50 border border-orange-200 text-[#FF5500] py-3 rounded-lg shadow-xs select-none"
            >
              What else we are building
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}
