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
  '/ecosystem': {
    title: 'ScaleOnIt Ecosystem | The Connected Operating Platform for IT Services',
    description: 'Explore ScaleOnIt’s six connected systems — GROW, DISCOVER, DELIVER, PEOPLE, FINANCIALS, and SERVE — operating on a single continuous context graph.',
    canonicalUrl: `${BASE_URL}/ecosystem`,
  },
  '/platform': {
    title: 'ScaleOnIt Ecosystem | The Connected Operating Platform for IT Services',
    description: 'Explore ScaleOnIt’s six connected systems — GROW, DISCOVER, DELIVER, PEOPLE, FINANCIALS, and SERVE — operating on a single continuous context graph.',
    canonicalUrl: `${BASE_URL}/ecosystem`,
  },
  '/platform/grow': {
    title: 'GROW | Business Acquisition & Presales Intelligence | ScaleOnIt',
    description: 'Evaluate technical RFPs, model accurate project effort, and convert proposals into profitable delivery plans.',
    canonicalUrl: `${BASE_URL}/platform/grow`,
  },
  '/platform/discover': {
    title: 'DISCOVER | Requirements & Solution Definition | ScaleOnIt',
    description: 'Turn stakeholder conversations into structured BRDs, user stories, and delivery baselines with requirements intelligence.',
    canonicalUrl: `${BASE_URL}/platform/discover`,
  },
  '/platform/people': {
    title: 'PEOPLE | Engineering Workforce & Skill Allocation | ScaleOnIt',
    description: 'Manage human and AI engineering talent with live competency graphs, dynamic sprint staffing, and bench minimization.',
    canonicalUrl: `${BASE_URL}/platform/people`,
  },
  '/platform/financials': {
    title: 'FINANCIALS | Commercial Margins & Automated Billing | ScaleOnIt',
    description: 'Connect software execution to commercial profitability with real-time project margins, cost-per-feature, and milestone billing.',
    canonicalUrl: `${BASE_URL}/platform/financials`,
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
    canonicalUrl: `${BASE_URL}/about`,
  },
  '/about': {
    title: 'About ScaleOnIt | Building a Connected Business Platform',
    description: 'Meet the team behind ScaleOnIt and learn why we are building a connected business platform for IT and software service companies.',
    canonicalUrl: `${BASE_URL}/about`,
  },
  '/deliver': {
    title: 'ScaleOnIt DELIVER | Software Delivery Powered by ONIT',
    description: 'ScaleOnIt DELIVER helps IT and software service teams turn customer requirements into working software — from planning and development to testing and release. Powered by ONIT.',
    canonicalUrl: `${BASE_URL}/deliver`,
  },
  '/contact': {
    title: "Contact ScaleOnIt | Let's Build Something Better",
    description: 'Contact ScaleOnIt to learn more about our software products, DELIVER, partnerships and the connected business ecosystem we are building.',
    canonicalUrl: `${BASE_URL}/contact`,
  },
  '/demo': {
    title: "Contact ScaleOnIt | Let's Build Something Better",
    description: 'Contact ScaleOnIt to learn more about our software products, DELIVER, partnerships and the connected business ecosystem we are building.',
    canonicalUrl: `${BASE_URL}/contact`,
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
        email: 'prabha44556@gmail.com',
        telephone: '+91 9642127012',
        description: 'Connected business platform for IT and software service companies.',
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'ScaleOnIt',
        publisher: { '@id': `${BASE_URL}/#organization` },
      },
    ],
  }

  schemaEl.textContent = JSON.stringify(structuredData, null, 2)

}
