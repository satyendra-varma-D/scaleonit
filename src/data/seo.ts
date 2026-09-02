export interface SEOMetadata {
  title: string
  description: string
  canonicalUrl: string
  ogTitle?: string
  ogDescription?: string
  ogType?: 'website' | 'article'
  keywords?: string[]
}

const BASE_URL = 'https://scaleonit.com'

export const defaultSEO: SEOMetadata = {
  title: 'ONIT by ScaleOnIt | The AI-Native Operating Platform for Software Delivery',
  description: 'ONIT connects requirements, design, engineering, testing, deployment, project operations, and support into one modular operating platform with specialized AI workers.',
  canonicalUrl: `${BASE_URL}/`,
  ogTitle: 'ONIT by ScaleOnIt — The AI-Native Operating Platform for Software Delivery',
  ogDescription: 'One platform. Every part of the software business. AI workforce, connected context, and enterprise governance.',
  ogType: 'website',
}

export const routeSEOMap: Record<string, SEOMetadata> = {
  '/': defaultSEO,
  '/platform': {
    title: 'The Complete ONIT Platform | 11 Connected Capabilities',
    description: 'Explore all 11 connected capabilities of ONIT: GROW, DISCOVER, DESIGN, ENGINEER, QUALITY, DELIVER, SERVE, PEOPLE, FINANCE, INTELLIGENCE, and CONNECT.',
    canonicalUrl: `${BASE_URL}/platform`,
  },
  '/platform/discover': {
    title: 'DISCOVER | AI-Native Requirements & Business Analysis | ONIT',
    description: 'Turn stakeholder conversations and meeting transcripts into implementation-ready BRDs, user stories, and acceptance criteria with the AI Business Analyst.',
    canonicalUrl: `${BASE_URL}/platform/discover`,
  },
  '/platform/engineer': {
    title: 'ENGINEER | Architecture & Code Intelligence | ONIT',
    description: 'Translate approved requirements into system architecture, API contracts, and quality code with AI Solution Architect and AI Engineering Agent.',
    canonicalUrl: `${BASE_URL}/platform/engineer`,
  },
  '/platform/quality': {
    title: 'QUALITY | Automated QA & CI/CD Quality Gates | ONIT',
    description: 'Generate test suites from user story acceptance criteria and enforce automated quality gates before production deployment with the AI QA Engineer.',
    canonicalUrl: `${BASE_URL}/platform/quality`,
  },
  '/platform/deliver': {
    title: 'DELIVER | Project Coordination & DevOps Deployment | ONIT',
    description: 'Coordinate cross-team sprints, identify delivery blockers, manage cloud infrastructure, and execute safe releases with AI Project Manager and AI DevOps Engineer.',
    canonicalUrl: `${BASE_URL}/platform/deliver`,
  },
  '/platform/serve': {
    title: 'SERVE | Context-Aware Customer Support & SLAs | ONIT',
    description: 'Resolve customer incidents with full-lifecycle context linking tickets back to user stories, code changes, and release versions with the AI Support Agent.',
    canonicalUrl: `${BASE_URL}/platform/serve`,
  },
  '/platform/intelligence': {
    title: 'AI Intelligence Architecture | Dynamic Model Routing & RAG | ONIT',
    description: 'Explore the model-agnostic intelligence architecture of ONIT. Specialized intelligence for every job: reasoning, coding, RAG, and deterministic logic.',
    canonicalUrl: `${BASE_URL}/platform/intelligence`,
  },
  '/platform/connect': {
    title: 'ONIT Connect | Enterprise Integration Ecosystem | ScaleOnIt',
    description: 'Keep what works. Connect what matters. Bridge your existing CRM, ERP, Git, CI/CD, cloud, and project management stack through ONIT Connect.',
    canonicalUrl: `${BASE_URL}/platform/connect`,
  },
  '/ai-workforce': {
    title: 'AI Workforce | 8 Specialized Digital Workers | ONIT',
    description: 'Meet ONIT’s specialized AI workers. Defined roles, goals, context, tools, and mandatory human approval gates. AI that executes work under governance.',
    canonicalUrl: `${BASE_URL}/ai-workforce`,
  },
  '/architecture': {
    title: 'Operating Architecture | 7-Layer System Deep-Dive | ONIT',
    description: 'Built as an operating architecture, not another tool. Explore the 7 layers from user experience and SDLC down to orchestration, intelligence, and security.',
    canonicalUrl: `${BASE_URL}/architecture`,
  },
  '/security': {
    title: 'Enterprise Security, Governance & AI Policy | ScaleOnIt ONIT',
    description: 'Autonomous doesn’t mean uncontrolled. Explore enterprise RBAC, configurable human approval gates, zero-training data privacy, and audit logging.',
    canonicalUrl: `${BASE_URL}/security`,
  },
  '/solutions/it-services': {
    title: 'ONIT for IT Services & Software Delivery Firms | ScaleOnIt',
    description: 'Operate client software delivery with connected intelligence. Improve delivery margin, automate client status reports, and eliminate handoff friction.',
    canonicalUrl: `${BASE_URL}/solutions/it-services`,
  },
  '/solutions/software-development': {
    title: 'ONIT for Software Development & SaaS Teams | ScaleOnIt',
    description: 'From PRD to Pull Request with governed AI. Accelerate engineering delivery velocity with full requirement-to-code traceability.',
    canonicalUrl: `${BASE_URL}/solutions/software-development`,
  },
  '/company': {
    title: 'About ScaleOnIt | Enterprise Digital Engineering & Innovation',
    description: 'ScaleOnIt is the enterprise technology company behind ONIT, dedicated to building AI-native operating systems for modern software delivery organizations.',
    canonicalUrl: `${BASE_URL}/company`,
  },
  '/demo': {
    title: 'Talk to Us | Book an Architecture Consultation | ScaleOnIt ONIT',
    description: 'Schedule a 30-minute consultation with a Principal Solutions Architect or request a 14-day zero-risk enterprise sandbox pilot.',
    canonicalUrl: `${BASE_URL}/demo`,
  },
}

/**
 * Updates document title and meta tags dynamically for clean client-side routing.
 */
export function updateDocumentSEO(pathname: string): void {
  const metadata = routeSEOMap[pathname] || {
    ...defaultSEO,
    title: '404 - Page Not Found | ScaleOnIt ONIT',
    canonicalUrl: `${BASE_URL}${pathname}`,
  }

  // Update title
  document.title = metadata.title

  // Helper to update or create meta tag
  const setMetaTag = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name'
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  // Standard Description
  setMetaTag('description', metadata.description)

  // Open Graph
  setMetaTag('og:title', metadata.ogTitle || metadata.title, true)
  setMetaTag('og:description', metadata.ogDescription || metadata.description, true)
  setMetaTag('og:url', metadata.canonicalUrl, true)
  setMetaTag('og:type', metadata.ogType || 'website', true)

  // Twitter
  setMetaTag('twitter:title', metadata.title)
  setMetaTag('twitter:description', metadata.description)

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]')
  if (!canonicalEl) {
    canonicalEl = document.createElement('link')
    canonicalEl.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalEl)
  }
  canonicalEl.setAttribute('href', metadata.canonicalUrl)
}
