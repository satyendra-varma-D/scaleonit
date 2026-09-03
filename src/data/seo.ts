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
  title: 'ScaleOnIt | Connected Business Platform for IT Services',
  description: 'ScaleOnIt connects sales, customer requirements, software delivery, people, finances and customer service in one platform for IT and software service businesses.',
  canonicalUrl: `${BASE_URL}/`,
  ogTitle: 'ScaleOnIt | Connected Business Platform for IT Services',
  ogDescription: 'One platform to run your IT business. Six connected systems for finding customers, understanding requirements, software delivery, people, finances and customer service.',
  ogType: 'website',
  keywords: [
    'IT service companies',
    'software service companies',
    'software delivery',
    'business platform',
    'business operations',
    'software development',
    'requirements',
    'customer management',
    'project delivery',
    'business automation',
    'AI software development',
    'ScaleOnIt',
    'ONIT',
    'GROW',
    'DISCOVER',
    'DELIVER',
    'PEOPLE',
    'FINANCIALS',
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
    title: 'ScaleOnIt DELIVER | Software Delivery Platform',
    description: 'ScaleOnIt DELIVER helps IT and software service teams move from customer requirements to working software through planning, development, testing and release.',
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
    title: 'About ScaleOnIt | Building a Connected Business Platform',
    description: 'Meet the team behind ScaleOnIt and learn why we are building a connected business platform for IT and software service companies.',
    canonicalUrl: `${BASE_URL}/company`,
  },
  '/demo': {
    title: "Contact ScaleOnIt | Let's Build Something Better",
    description: 'Contact ScaleOnIt to learn more about our software products, DELIVER, partnerships and the connected business ecosystem we are building.',
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
        description: 'ScaleOnIt is a connected business platform for IT and software service companies, connecting sales, customer requirements, software delivery, people, finances and customer service.',
        knowsAbout: [
          'Connected Business Platform for IT Services',
          'GROW (Business Acquisition, Sales & CRM)',
          'DISCOVER (Customer Discovery, Requirements & Solution Definition)',
          'DELIVER (Software Planning, Execution & Delivery powered by ONIT)',
          'PEOPLE (Workforce & Resource Management)',
          'FINANCIALS (Billing, Payments & Project Finances)',
          'SERVE (Customer Service, Support & Customer Success)',
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
        description: 'The technology powering the DELIVER software delivery system inside the ScaleOnIt ecosystem.',
        isPartOf: { '@id': `${BASE_URL}/#organization` },
      },
    ],
  }

  schemaEl.textContent = JSON.stringify(structuredData)
}
