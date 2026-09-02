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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#EAE6F0] shadow-sm'
          : 'bg-white/85 backdrop-blur-xs border-b border-[#EAE6F0]/60'
      }`}
    >
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
          className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678] rounded-xl"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#C53678] to-[#FF5841] flex items-center justify-center font-black text-white text-lg shadow-sm shadow-[#C53678]/25">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-[#1B0A2A] leading-none">
                Scale<span className="text-[#C53678]">OnIt</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#5A4E68] mt-0.5">
                OPERATING ECOSYSTEM
              </span>
            </div>
          </div>
        </button>

        {/* CENTER / PRIMARY NAVIGATION: Home | Products ▾ | About Us | Contact Us */}
        <div className="hidden md:flex items-center gap-8">
          {primaryNavigation.map((item) => {
            const isCurrent =
              item.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(item.path) && item.path !== '/'

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    aria-expanded={productsDropdownOpen}
                    aria-haspopup="true"
                    aria-label="Products ecosystem menu"
                    className={`text-sm font-bold transition-colors duration-150 tracking-wide flex items-center gap-1.5 py-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678] rounded-md ${
                      productsDropdownOpen || currentPath.includes('/platform')
                        ? 'text-[#C53678]'
                        : 'text-[#1B0A2A] hover:text-[#C53678]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        productsDropdownOpen ? 'rotate-180 text-[#C53678]' : 'text-[#5A4E68]'
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

                  {/* PRODUCTS MEGA DROPDOWN (Six systems. Different purposes. One ecosystem.) */}
                  {productsDropdownOpen && (
                    <div
                      role="menu"
                      aria-label="Products Submenu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[680px] bg-white rounded-3xl border border-[#EAE6F0] shadow-2xl p-6 z-50 animate-fade-in"
                    >
                      {/* Mega Menu Top Header */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE6F0]">
                        <div>
                          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C53678]">
                            PRODUCTS
                          </div>
                          <div className="text-xs text-[#5A4E68] font-medium">
                            Six systems. Different purposes. One ecosystem.
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A4E68] bg-[#FAFAFC] border border-[#EAE6F0] px-2.5 py-1 rounded-full">
                          ScaleOnIt Architecture
                        </span>
                      </div>

                      {/* 2-Column Grid of the 6 Products */}
                      <div className="grid grid-cols-2 gap-3.5">
                        {ecosystemProducts.map((prod) => {
                          const isDeliver = prod.id === 'deliver'
                          const isClickable = prod.status === 'available' || prod.status === 'building'

                          return (
                            <button
                              key={prod.id}
                              role="menuitem"
                              disabled={!isClickable}
                              onClick={(e) => isClickable && handleLinkClick(e, prod.path)}
                              className={`p-4 rounded-2xl text-left transition-all border ${
                                isDeliver
                                  ? 'bg-gradient-to-br from-[#FDF2F7] to-[#FFF4F2] border-[#C53678]/40 shadow-xs hover:border-[#C53678] cursor-pointer'
                                  : isClickable
                                  ? 'bg-[#FAFAFC] hover:bg-[#FDF2F7] border-[#EAE6F0] hover:border-[#C53678]/30 cursor-pointer'
                                  : 'bg-[#FAFAFC]/60 border-[#EAE6F0]/60 opacity-80 cursor-default'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg" aria-hidden="true">{prod.icon}</span>
                                  <span className="font-extrabold text-sm text-[#1B0A2A]">
                                    {prod.name}
                                  </span>
                                </div>
                                <span
                                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                                    isDeliver
                                      ? 'bg-gradient-to-r from-[#C53678] to-[#FF5841] text-white shadow-2xs'
                                      : prod.status === 'building'
                                      ? 'bg-white border border-[#EAE6F0] text-[#5A4E68]'
                                      : 'bg-[#F0ECF5] text-[#5A4E68]'
                                  }`}
                                >
                                  {isDeliver ? 'Available Today' : prod.statusLabel}
                                </span>
                              </div>

                              <div className="text-[11px] text-[#5A4E68] leading-tight font-medium mb-1.5">
                                {prod.tagline}
                              </div>

                              {/* Highlight for DELIVER -> ONIT */}
                              {isDeliver && prod.subProduct && (
                                <div className="mt-2 pt-2 border-t border-[#C53678]/20 flex items-center justify-between text-xs font-bold text-[#C53678]">
                                  <span>ONIT — Software Delivery OS</span>
                                  <span>Explore →</span>
                                </div>
                              )}
                            </button>
                          )
                        })}
                      </div>

                      {/* Bottom Contextual Note */}
                      <div className="mt-4 pt-3 border-t border-[#EAE6F0] flex items-center justify-between text-[11px] text-[#5A4E68]">
                        <span>Every product solves a specific business purpose.</span>
                        <button
                          onClick={(e) => handleLinkClick(e, '/platform/deliver')}
                          className="font-bold text-[#C53678] hover:text-[#A92661] cursor-pointer"
                        >
                          Explore Flagship ONIT →
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
                className={`text-sm font-bold transition-colors duration-150 tracking-wide cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678] rounded-md py-1 px-2 ${
                  isCurrent
                    ? 'text-[#C53678]'
                    : 'text-[#1B0A2A] hover:text-[#C53678]'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {/* RIGHT: Explore ONIT → Primary CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={(e) => handleLinkClick(e, '/platform/deliver')}
            className="text-xs font-bold bg-gradient-to-r from-[#C53678] to-[#FF5841] hover:opacity-95 text-white px-5 py-2.5 rounded-full transition-all duration-150 shadow-md shadow-[#C53678]/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678] flex items-center gap-1.5"
          >
            <span>Explore ONIT</span>
            <span className="text-sm">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-[#F5F3F8] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C53678]"
        >
          <span
            className={`block w-5 h-0.5 bg-[#1B0A2A] transition-all duration-200 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1B0A2A] transition-all duration-200 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1B0A2A] transition-all duration-200 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden bg-white border-t border-[#EAE6F0] overflow-y-auto transition-all duration-300 ${
          mobileOpen ? 'max-h-[85vh] py-6 px-6 shadow-2xl' : 'max-h-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-3">
          {/* Home */}
          <button
            onClick={(e) => handleLinkClick(e, '/')}
            className={`text-base font-bold text-left py-2 rounded-xl px-3 ${
              currentPath === '/' ? 'text-[#C53678] bg-[#FDF2F7]' : 'text-[#1B0A2A] hover:bg-[#FAFAFC]'
            }`}
          >
            Home
          </button>

          {/* Products Accordion */}
          <div className="border-y border-[#EAE6F0] py-2">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between text-base font-bold text-[#1B0A2A] py-2 px-3 rounded-xl hover:bg-[#FAFAFC]"
            >
              <span>Products</span>
              <span className="text-xs font-bold text-[#C53678]">
                {mobileProductsOpen ? '−' : '+'}
              </span>
            </button>

            {mobileProductsOpen && (
              <div className="pl-3 pr-1 pt-2 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#5A4E68] px-2">
                  Six Purpose-Built Systems
                </div>
                {ecosystemProducts.map((prod) => {
                  const isDeliver = prod.id === 'deliver'
                  return (
                    <button
                      key={prod.id}
                      onClick={(e) => handleLinkClick(e, prod.path)}
                      className={`w-full text-left p-2.5 rounded-xl border flex items-start gap-2.5 ${
                        isDeliver
                          ? 'bg-[#FDF2F7] border-[#C53678]/40 text-[#1B0A2A]'
                          : 'bg-[#FAFAFC] border-[#EAE6F0] text-[#1B0A2A]'
                      }`}
                    >
                      <span aria-hidden="true">{prod.icon}</span>
                      <div>
                        <div className="text-xs font-bold flex items-center gap-2">
                          <span>{prod.name}</span>
                          {isDeliver && (
                            <span className="text-[9px] bg-[#FF5841] text-white px-1.5 py-0.2 rounded-full font-bold">
                              ONIT
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#5A4E68] leading-tight mt-0.5">
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
            className={`text-base font-bold text-left py-2 rounded-xl px-3 ${
              currentPath === '/company' ? 'text-[#C53678] bg-[#FDF2F7]' : 'text-[#1B0A2A] hover:bg-[#FAFAFC]'
            }`}
          >
            About Us
          </button>

          {/* Contact Us */}
          <button
            onClick={(e) => handleLinkClick(e, '/demo')}
            className={`text-base font-bold text-left py-2 rounded-xl px-3 ${
              currentPath === '/demo' ? 'text-[#C53678] bg-[#FDF2F7]' : 'text-[#1B0A2A] hover:bg-[#FAFAFC]'
            }`}
          >
            Contact Us
          </button>

          {/* Mobile CTA: Explore ONIT → */}
          <div className="pt-4">
            <button
              onClick={(e) => handleLinkClick(e, '/platform/deliver')}
              className="w-full text-sm font-bold text-center bg-gradient-to-r from-[#C53678] to-[#FF5841] text-white py-3.5 rounded-full shadow-md shadow-[#C53678]/25 cursor-pointer"
            >
              Explore ONIT →
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
