export interface NavLinkItem {
  label: string
  path: string
  isExternal?: boolean
}

export interface NavDropdownItem {
  label: string
  path: string
  badge?: string
  description?: string
  icon?: string
}

export interface NavGroup {
  label: string
  path?: string
  items?: NavDropdownItem[]
}

export const primaryNavigation: NavGroup[] = [
  {
    label: 'Platform',
    path: '/platform',
    items: [
      {
        label: 'Platform Overview',
        path: '/platform',
        description: 'All 11 connected capabilities & operating context',
        icon: '🏢',
      },
      {
        label: 'DISCOVER',
        path: '/platform/discover',
        description: 'Requirements & meeting intelligence',
        icon: '🔎',
      },
      {
        label: 'ENGINEER',
        path: '/platform/engineer',
        description: 'Architecture & code intelligence',
        icon: '⚙️',
      },
      {
        label: 'QUALITY',
        path: '/platform/quality',
        description: 'Test automation & quality gates',
        icon: '🔍',
      },
      {
        label: 'DELIVER',
        path: '/platform/deliver',
        description: 'Project coordination & DevOps releases',
        icon: '🚢',
      },
      {
        label: 'SERVE',
        path: '/platform/serve',
        description: 'Context-aware support & SLAs',
        icon: '🛟',
      },
      {
        label: 'INTELLIGENCE',
        path: '/platform/intelligence',
        description: 'Model routing & organizational RAG',
        icon: '🧠',
      },
      {
        label: 'CONNECT',
        path: '/platform/connect',
        description: '30+ ecosystem connectors & protocols',
        icon: '🔗',
      },
    ],
  },
  {
    label: 'AI Workforce',
    path: '/ai-workforce',
  },
  {
    label: 'Architecture',
    path: '/architecture',
  },
  {
    label: 'Solutions',
    path: '/solutions/it-services',
    items: [
      {
        label: 'IT Services & Delivery Firms',
        path: '/solutions/it-services',
        description: 'Scale delivery margin and project visibility',
        icon: '💼',
      },
      {
        label: 'Software Development Teams',
        path: '/solutions/software-development',
        description: 'From PRD to Pull Request with governed AI',
        icon: '💻',
      },
    ],
  },
  {
    label: 'Security',
    path: '/security',
  },
  {
    label: 'Company',
    path: '/company',
  },
]
