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
    label: 'Ecosystem',
    path: '/#six-systems',
    hasDropdown: true,
  },
  {
    label: 'DELIVER',
    path: '/platform/deliver',
  },
  {
    label: 'About',
    path: '/company',
  },
  {
    label: 'Contact',
    path: '/demo',
  },
]

export const ecosystemProducts: ProductItem[] = [
  {
    id: 'grow',
    name: 'GROW',
    tagline: 'Business acquisition, sales and CRM',
    description: 'Find and manage new business opportunities.',
    icon: '🌱',
    status: 'coming_soon',
    statusLabel: 'Roadmap',
    path: '/#six-systems',
  },
  {
    id: 'discover',
    name: 'DISCOVER',
    tagline: 'Customer discovery, requirements and solution definition',
    description: 'Understand customer needs and turn them into clear requirements.',
    icon: '🔍',
    status: 'building',
    statusLabel: 'Roadmap',
    path: '/platform/discover',
  },
  {
    id: 'deliver',
    name: 'DELIVER',
    tagline: 'Software project planning, execution and delivery',
    description: 'Plan, build, test and release software. Powered today by ONIT.',
    icon: '⚡',
    status: 'available',
    statusLabel: 'Available Today',
    path: '/platform/deliver',
    subProduct: {
      name: 'ONIT',
      tagline: 'Technology powering DELIVER today',
      path: '/platform/deliver',
    },
  },
  {
    id: 'people',
    name: 'PEOPLE',
    tagline: 'Workforce and resource management',
    description: 'Manage teams, roles and workforce needs.',
    icon: '👥',
    status: 'coming_soon',
    statusLabel: 'Roadmap',
    path: '/#six-systems',
  },
  {
    id: 'financials',
    name: 'FINANCIALS',
    tagline: 'Commercial and project financial management',
    description: 'Manage billing, payments and project finances.',
    icon: '📊',
    status: 'coming_soon',
    statusLabel: 'Roadmap',
    path: '/#six-systems',
  },
  {
    id: 'serve',
    name: 'SERVE',
    tagline: 'Customer service, support and customer success',
    description: 'Support customers and manage ongoing relationships.',
    icon: '🛡️',
    status: 'building',
    statusLabel: 'Roadmap',
    path: '/platform/serve',
  },
]

