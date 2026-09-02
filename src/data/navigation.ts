export interface ProductItem {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  status: 'available' | 'building' | 'coming_soon'
  statusLabel: string
  path: string
  subProduct?: {
    name: string
    tagline: string
    path: string
  }
}

export interface NavItem {
  label: string
  path: string
  hasDropdown?: boolean
}

export const primaryNavigation: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Products',
    path: '/#six-systems',
    hasDropdown: true,
  },
  {
    label: 'About Us',
    path: '/company',
  },
  {
    label: 'Contact Us',
    path: '/demo',
  },
]

export const ecosystemProducts: ProductItem[] = [
  {
    id: 'grow',
    name: 'GROW',
    tagline: 'Business Acquisition & Customer Relationship',
    description: 'Lead generation, opportunity qualification, pipeline dynamics & customer partnerships.',
    icon: '🌱',
    status: 'coming_soon',
    statusLabel: 'Coming Soon',
    path: '/#six-systems',
  },
  {
    id: 'discover',
    name: 'DISCOVER',
    tagline: 'Discovery, Requirements & Solutioning',
    description: 'Capture intent, auto-generate BRD/FRD specifications, and eliminate scope drift.',
    icon: '🔍',
    status: 'building',
    statusLabel: 'Building Toward',
    path: '/platform/discover',
  },
  {
    id: 'deliver',
    name: 'DELIVER',
    tagline: 'Project Planning, Execution & Delivery',
    description: 'Turn ideas, architecture, and requirements into working software with governed delivery.',
    icon: '⚡',
    status: 'available',
    statusLabel: 'Available Today',
    path: '/platform/deliver',
    subProduct: {
      name: 'ONIT',
      tagline: 'Software Delivery Operating System',
      path: '/platform/deliver',
    },
  },
  {
    id: 'people',
    name: 'PEOPLE',
    tagline: 'Workforce & Resource Management',
    description: 'Skills taxonomy, demand forecasting, resource allocation & capacity utilization.',
    icon: '👥',
    status: 'coming_soon',
    statusLabel: 'Coming Soon',
    path: '/#six-systems',
  },
  {
    id: 'money',
    name: 'MONEY',
    tagline: 'Commercial & Project Financial Management',
    description: 'Contract budgets, live project burn, milestone billing & operating margins.',
    icon: '📊',
    status: 'coming_soon',
    statusLabel: 'Coming Soon',
    path: '/#six-systems',
  },
  {
    id: 'serve',
    name: 'SERVE',
    tagline: 'Customer Service & Success',
    description: 'Upstream-aware incident resolution, SLA health & customer retention.',
    icon: '🛡️',
    status: 'building',
    statusLabel: 'Building Toward',
    path: '/platform/serve',
  },
]
