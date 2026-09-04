import { useState, useEffect, useCallback } from 'react'

export type RoutePath =
  | '/'
  | '/ecosystem'
  | '/platform'
  | '/platform/grow'
  | '/platform/discover'
  | '/platform/engineer'
  | '/platform/quality'
  | '/platform/deliver'
  | '/platform/people'
  | '/platform/financials'
  | '/platform/serve'
  | '/platform/intelligence'
  | '/platform/connect'
  | '/ai-workforce'
  | '/architecture'
  | '/security'
  | '/solutions/it-services'
  | '/solutions/software-development'
  | '/company'
  | '/demo'

/**
 * Normalizes pathname, handling trailing slashes and hash fallbacks.
 */
export function normalizePathname(path: string): string {
  if (!path || path === '') return '/'
  const clean = path.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

/**
 * Custom zero-dependency router hook utilizing standard HTML5 History API.
 */
export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      // If legacy hash was used, migrate gracefully
      if (window.location.hash === '#talk-to-us' || window.location.hash === '#contact' || window.location.hash === '#demo') {
        return '/demo'
      }
      return normalizePathname(window.location.pathname)
    }
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePathname(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to: string, sectionAnchor?: string) => {
    if (typeof window === 'undefined') return

    // If internal anchor on current page
    if (to === currentPath && sectionAnchor) {
      const el = document.querySelector(sectionAnchor)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    const targetUrl = normalizePathname(to)
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl)
      setCurrentPath(targetUrl)
    }

    if (sectionAnchor) {
      setTimeout(() => {
        const el = document.querySelector(sectionAnchor)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentPath])

  return {
    currentPath,
    navigate,
  }
}
