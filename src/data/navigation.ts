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
    tagline: 'Lead Research, Profiling & Call Co-Pilot',
    description: 'Deep lead research, profiling reports, and live AI meeting support to crack deals.',
    icon: '🌱',
    status: 'coming_soon',
    statusLabel: 'Coming Soon',
    path: '/#six-systems',
  },
  {
    id: 'discover',
    name: 'DISCOVER',
    tagline: 'Call Intelligence & Automated BRD/FRD',
    description: 'Extract requirements from calls into reviewable BRD/FRD templates for PMs, BAs, and POs.',
    icon: '🔍',
    status: 'building',
    statusLabel: 'Building Toward',
    path: '/platform/discover',
  },
  {
    id: 'deliver',
    name: 'DELIVER',
    tagline: 'Flagship ONIT: Wireframe, Code, QA & Deploy',
    description: 'Visual wireframe wonder prototypes, multi-agent coding, Playwright QA, and cloud release.',
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
    tagline: 'AI-Assisted Task, Sprint & Team Management',
    description: 'AI-guided sprint planning, task assignments, skills taxonomy, and workload balancing.',
    icon: '👥',
    status: 'coming_soon',
    statusLabel: 'Coming Soon',
    path: '/#six-systems',
  },
  {
    id: 'money',
    name: 'FINANCIALS',
    tagline: 'Milestone Payments & Delivery Triggers',
    description: 'Connect code milestones directly to payment triggers, live burn tracking & margin alignment.',
    icon: '📊',
    status: 'coming_soon',
    statusLabel: 'Coming Soon',
    path: '/#six-systems',
  },
  {
    id: 'serve',
    name: 'SERVE',
    tagline: 'Next-Gen CRM, Support & Code Traceability',
    description: 'Customer service powered by direct commit insight, SLA monitoring, and fast resolution.',
    icon: '🛡️',
    status: 'building',
    statusLabel: 'Building Toward',
    path: '/platform/serve',
  },
]
