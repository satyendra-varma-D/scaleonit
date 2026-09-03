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
  title: 'ScaleOnIt | The Business Operating Ecosystem',
  description: 'ScaleOnIt is building a connected business operating ecosystem of six purpose-built systems: GROW, DISCOVER, DELIVER, PEOPLE, FINANCIALS, and SERVE. Powered today by flagship product ONIT.',
  canonicalUrl: `${BASE_URL}/`,
  ogTitle: 'ScaleOnIt — The Business Operating Ecosystem',
  ogDescription: 'One ecosystem. Six systems. Connected business. Purpose-built systems for growth, discovery, software delivery, workforce, financials, and customer success.',
  ogType: 'website',
  keywords: [
    'business operating ecosystem',
    'business operating system',
    'business management platform',
    'connected business systems',
    'business operations platform',
    'enterprise workflow ecosystem',
    'ScaleOnIt',
    'ONIT',
    'GROW',
    'DISCOVER',
    'DELIVER',
    'PEOPLE',
    'MONEY',
    'SERVE',
  ],
}

export const routeSEOMap: Record<string, SEOMetadata> = {
  '/': defaultSEO,
  '/platform': {
    title: 'Platform Hub & Specifications | ScaleOnIt Ecosystem',
    description: 'Explore all connected capabilities of the ScaleOnIt platform architecture, bridging discovery, engineering, quality, delivery, and support.',
    canonicalUrl: `${BASE_URL}/platform`,
  },
  '/platform/discover': {
    title: 'DISCOVER | Requirements & Solution Definition | ScaleOnIt',
    description: 'Turn stakeholder conversations into structured BRDs, user stories, and delivery baselines with requirements intelligence.',
    canonicalUrl: `${BASE_URL}/platform/discover`,
  },
  '/platform/engineer': {
    title: 'ENGINEER | Architecture & Code Intelligence | ScaleOnIt',
    description: 'Translate approved requirements into system architecture, API contracts, and quality code under human policy control.',
    canonicalUrl: `${BASE_URL}/platform/engineer`,
  },
  '/platform/quality': {
    title: 'QUALITY | Automated Test Synthesis & Quality Gates | ScaleOnIt',
    description: 'Generate test suites from acceptance criteria and enforce automated quality gates across CI/CD pipelines.',
    canonicalUrl: `${BASE_URL}/platform/quality`,
  },
  '/platform/deliver': {
    title: 'DELIVER (ONIT) | Autonomous SDLC & Enterprise Software Delivery | ScaleOnIt',
    description: 'ONIT powers DELIVER: intelligent requirements intake, industry BRD/FRD governance, stack-specialized multi-agent engineering, interactive staging previews, automated regression QA, and zero-defect cloud releases.',
    canonicalUrl: `${BASE_URL}/platform/deliver`,
  },
  '/platform/serve': {
    title: 'SERVE | Context-Aware Customer Support & SLAs | ScaleOnIt',
    description: 'Resolve customer incidents with full upstream context linking tickets back to user stories, code changes, and release versions.',
    canonicalUrl: `${BASE_URL}/platform/serve`,
  },
  '/platform/intelligence': {
    title: 'AI Intelligence Architecture | Domain Intelligence | ScaleOnIt',
    description: 'Explore how specialized intelligence is built directly into each functional domain of the ScaleOnIt ecosystem.',
    canonicalUrl: `${BASE_URL}/platform/intelligence`,
  },
  '/platform/connect': {
    title: 'Ecosystem Connectors & Integration Framework | ScaleOnIt',
    description: 'Keep what works. Connect what matters. Bridge your existing CRM, Git, CI/CD, cloud, and project stack.',
    canonicalUrl: `${BASE_URL}/platform/connect`,
  },
  '/ai-workforce': {
    title: 'AI Workforce & Governed Specialists | ScaleOnIt',
    description: 'Meet specialized AI workers operating under defined scopes, tools, and mandatory human approval gates.',
    canonicalUrl: `${BASE_URL}/ai-workforce`,
  },
  '/architecture': {
    title: 'Operating Architecture | 7-Layer System Specification | ScaleOnIt',
    description: 'Explore the full architectural specification of the ScaleOnIt business operating ecosystem.',
    canonicalUrl: `${BASE_URL}/architecture`,
  },
  '/security': {
    title: 'Enterprise Security, Governance & AI Policy | ScaleOnIt',
    description: 'Explore enterprise RBAC, configurable human approval checkpoints, zero-training data privacy, and audit logging.',
    canonicalUrl: `${BASE_URL}/security`,
  },
  '/solutions/it-services': {
    title: 'ScaleOnIt for IT Services & Software Delivery Firms',
    description: 'Operate client software delivery with connected intelligence. Improve delivery margin and eliminate handoff friction.',
    canonicalUrl: `${BASE_URL}/solutions/it-services`,
  },
  '/solutions/software-development': {
    title: 'ScaleOnIt for Software Development & SaaS Teams',
    description: 'From PRD to Pull Request with governed AI and full requirement-to-code traceability.',
    canonicalUrl: `${BASE_URL}/solutions/software-development`,
  },
  '/company': {
    title: 'About ScaleOnIt | Building the Business Operating Ecosystem',
    description: 'ScaleOnIt is dedicated to building the business operating ecosystem for modern enterprises — one purpose-built system at a time.',
    canonicalUrl: `${BASE_URL}/company`,
  },
  '/demo': {
    title: 'Explore ScaleOnIt | Book an Architecture Consultation',
    description: 'Schedule a strategic consultation or request an enterprise sandbox evaluation of the ScaleOnIt ecosystem and ONIT.',
    canonicalUrl: `${BASE_URL}/demo`,
  },
}

/**
 * Updates document title and meta tags dynamically for clean client-side routing & JSON-LD structured data.
 */
export function updateDocumentSEO(pathname: string): void {
  const metadata = routeSEOMap[pathname] || {
    ...defaultSEO,
    title: '404 - Page Not Found | ScaleOnIt',
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

  // Structured Data Schema (JSON-LD) for ScaleOnIt Entity
  let schemaEl = document.querySelector('script[type="application/ld+json"]')
  if (!schemaEl) {
    schemaEl = document.createElement('script')
    schemaEl.setAttribute('type', 'application/ld+json')
    document.head.appendChild(schemaEl)
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'ScaleOnIt',
        url: BASE_URL,
        description: 'ScaleOnIt is the business operating ecosystem provider for modern enterprises.',
        knowsAbout: [
          'Business Operating Ecosystem',
          'GROW (Business Acquisition & CRM)',
          'DISCOVER (Requirements & Solutioning)',
          'DELIVER (Software Delivery powered by ONIT)',
          'PEOPLE (Workforce & Resource Management)',
          'MONEY (Project Commercials & Financials)',
          'SERVE (Customer Support & Success)',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'ScaleOnIt',
        publisher: { '@id': `${BASE_URL}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'ONIT',
        applicationCategory: 'SoftwareDeliveryPlatform',
        operatingSystem: 'Web, Cloud',
        description: 'The software delivery operating system powering the DELIVER domain of the ScaleOnIt ecosystem.',
        isPartOf: { '@id': `${BASE_URL}/#organization` },
      },
    ],
  }

  schemaEl.textContent = JSON.stringify(structuredData)
}
