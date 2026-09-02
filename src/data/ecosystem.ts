export interface SystemDomain {
  id: string
  name: string
  tagline: string
  purpose: string
  journey: string[]
  journeyText: string
  description: string
  capabilities: string[]
  intelligenceType: string
  intelligenceDesc: string
  status: 'active' | 'building'
  statusLabel: string
  flagshipProduct?: string
  accentColor: string
  bgLight: string
  borderColor: string
  badgeColor: string
  textColor: string
  icon: string
}

export const sixSystems: SystemDomain[] = [
  {
    id: 'grow',
    name: 'GROW',
    tagline: 'Business Acquisition & Customer Relationship',
    purpose: 'Help businesses find the right opportunities, qualify prospects, manage relationships, and build a predictable sales pipeline.',
    journey: ['Lead', 'Opportunity', 'Customer'],
    journeyText: 'Lead → Opportunity → Customer',
    description: 'Transform market signals and prospect conversations into qualified opportunities and enduring business partnerships.',
    capabilities: [
      'Lead Management',
      'Account Management',
      'Opportunity Management',
      'Sales Forecasting',
      'Customer Relationship Management',
      'Growth Intelligence',
    ],
    intelligenceType: 'Growth Intelligence',
    intelligenceDesc: 'Analyzes pipeline velocity, buying signals, and relationship health to guide acquisition strategies.',
    status: 'building',
    statusLabel: 'Part of the ScaleOnIt vision',
    accentColor: '#FF5841',
    bgLight: 'bg-[#FF5841]/5',
    borderColor: 'border-[#FF5841]/30',
    badgeColor: 'text-[#FF5841] bg-[#FF5841]/10 border-[#FF5841]/30',
    textColor: 'text-[#FF5841]',
    icon: '🌱',
  },
  {
    id: 'discover',
    name: 'DISCOVER',
    tagline: 'Discovery, Requirements & Solutioning',
    purpose: 'Help businesses understand customer needs, discover requirements, define solutions, and convert opportunities into clear delivery commitments.',
    journey: ['Discovery', 'Requirements', 'Solution', 'Proposal'],
    journeyText: 'Discovery → Requirements → Solution → Proposal',
    description: 'Bridge customer intent to structured specifications, eliminating scope ambiguity before engineering commences.',
    capabilities: [
      'Discovery Intelligence',
      'Requirements Analysis',
      'Business Analysis',
      'Solution Design',
      'Estimation & Scoping',
      'Proposal Automation',
      'Document Intelligence',
    ],
    intelligenceType: 'Discovery & Requirements Intelligence',
    intelligenceDesc: 'Transforms unstructured stakeholder conversations into structured requirements, gap detections, and architectural blueprints.',
    status: 'building',
    statusLabel: 'Building toward',
    accentColor: '#C53678',
    bgLight: 'bg-[#C53678]/5',
    borderColor: 'border-[#C53678]/30',
    badgeColor: 'text-[#C53678] bg-[#C53678]/10 border-[#C53678]/30',
    textColor: 'text-[#C53678]',
    icon: '🔍',
  },
  {
    id: 'deliver',
    name: 'DELIVER',
    tagline: 'Project Planning, Execution & Delivery',
    purpose: 'Help businesses plan, build, test, and release production-grade solutions with governance and continuous quality.',
    journey: ['Plan', 'Build', 'Test', 'Release'],
    journeyText: 'Plan → Build → Test → Release',
    description: 'The operating core for turning specifications and architecture into verified, deployed production software.',
    capabilities: [
      'Sprint & Roadmap Planning',
      'Architecture & Code Generation',
      'Automated Quality Gates',
      'DevOps CI/CD Pipelines',
      'Release Governance',
      'Traceable Verification',
    ],
    intelligenceType: 'Engineering & Delivery Intelligence',
    intelligenceDesc: 'Coordinates autonomous code synthesis, automated test suite verification, and human-governed deployment gates.',
    status: 'active',
    statusLabel: 'Available Today',
    flagshipProduct: 'ONIT',
    accentColor: '#C53678',
    bgLight: 'bg-gradient-to-r from-[#C53678]/10 to-[#FF5841]/10',
    borderColor: 'border-[#C53678]/40',
    badgeColor: 'text-white bg-[#C53678] shadow-sm shadow-[#C53678]/30 border-transparent',
    textColor: 'text-[#C53678]',
    icon: '⚡',
  },
  {
    id: 'people',
    name: 'PEOPLE',
    tagline: 'Workforce & Resource Management',
    purpose: 'Help businesses understand workforce capability, demand, and capacity, and put the right people on the right work.',
    journey: ['Skills', 'Capacity', 'Allocation', 'Utilization'],
    journeyText: 'Skills → Capacity → Allocation → Utilization',
    description: 'Align human talents, team availability, and skill proficiencies with dynamic enterprise project demands.',
    capabilities: [
      'Skills Matrix & Taxonomy',
      'Capacity & Demand Forecasting',
      'Resource Allocation',
      'Utilization Analytics',
      'Talent Bench Management',
      'Workforce Intelligence',
    ],
    intelligenceType: 'Workforce Intelligence',
    intelligenceDesc: 'Optimizes skill matching, team compositions, and capacity utilization across concurrent delivery streams.',
    status: 'building',
    statusLabel: 'Part of the ScaleOnIt vision',
    accentColor: '#3B1A54',
    bgLight: 'bg-[#3B1A54]/5',
    borderColor: 'border-[#3B1A54]/30',
    badgeColor: 'text-[#3B1A54] bg-[#3B1A54]/10 border-[#3B1A54]/30',
    textColor: 'text-[#3B1A54]',
    icon: '👥',
  },
  {
    id: 'money',
    name: 'MONEY',
    tagline: 'Commercial & Project Financial Management',
    purpose: 'Help businesses connect contracts, budgets, costs, revenue, billing, and project profitability.',
    journey: ['Budget', 'Cost', 'Revenue', 'Margin'],
    journeyText: 'Budget → Cost → Revenue → Margin',
    description: 'Provide real-time fiscal clarity from initial contractual commitment to ongoing delivery burn and operating margins.',
    capabilities: [
      'Project Budgeting',
      'Real-Time Cost Tracking',
      'Milestone & T&M Billing',
      'Margin Analysis',
      'Revenue Recognition',
      'Financial Intelligence',
    ],
    intelligenceType: 'Financial Intelligence',
    intelligenceDesc: 'Synthesizes project burn rates, contract milestones, and scope adjustments into real-time margin visibility.',
    status: 'building',
    statusLabel: 'Part of the ScaleOnIt vision',
    accentColor: '#FF5841',
    bgLight: 'bg-[#FF5841]/5',
    borderColor: 'border-[#FF5841]/30',
    badgeColor: 'text-[#FF5841] bg-[#FF5841]/10 border-[#FF5841]/30',
    textColor: 'text-[#FF5841]',
    icon: '📊',
  },
  {
    id: 'serve',
    name: 'SERVE',
    tagline: 'Customer Service & Success',
    purpose: 'Help businesses support customers after delivery, resolve issues with upstream context, and build long-term relationships.',
    journey: ['Support', 'Success', 'Renewal'],
    journeyText: 'Support → Success → Renewal',
    description: 'Close the loop between post-launch customer operations, technical incident triage, and ongoing lifecycle retention.',
    capabilities: [
      'Context-Aware Ticket Resolution',
      'SLA & Incident Management',
      'Customer Health Tracking',
      'Feedback Synthesis',
      'Renewal & Expansion Operations',
      'Customer Intelligence',
    ],
    intelligenceType: 'Customer Intelligence',
    intelligenceDesc: 'Connects support tickets directly to original requirement and delivery context for immediate root-cause clarity.',
    status: 'building',
    statusLabel: 'Building toward',
    accentColor: '#C53678',
    bgLight: 'bg-[#C53678]/5',
    borderColor: 'border-[#C53678]/30',
    badgeColor: 'text-[#C53678] bg-[#C53678]/10 border-[#C53678]/30',
    textColor: 'text-[#C53678]',
    icon: '🛡️',
  },
]

export interface RoleBenefit {
  id: string
  role: string
  headline: string
  summary: string
  points: string[]
  icon: string
  metric: string
}

export const roleBenefits: RoleBenefit[] = [
  {
    id: 'leaders',
    role: 'Business Leaders',
    headline: 'Total visibility across the entire enterprise operating lifecycle.',
    summary: 'Eliminate fragmented reporting. Understand what is truly happening across customer relationships, delivery commitments, workforce capacity, and financial margins with unified context.',
    points: [
      'Unify strategic visibility across customers, projects, people, and money',
      'Make confident, evidence-based decisions without waiting for manual status rollups',
      'Maintain clarity on enterprise delivery commitments and organizational capacity',
    ],
    icon: '👑',
    metric: 'Unified Context',
  },
  {
    id: 'teams',
    role: 'Execution Teams',
    headline: 'Less fragmented work and zero manual coordination friction.',
    summary: 'Work with complete upstream and downstream context. Engineers, analysts, and project managers stop deciphering ambiguous handoffs and focus on high-impact craft.',
    points: [
      'Instant access to original requirements, business intent, and stakeholder context',
      'Eliminate repetitive re-entry and endless alignment meetings across departments',
      'Automated quality checks and governance checkpoints that protect velocity',
    ],
    icon: '⚡',
    metric: 'Zero Handoff Loss',
  },
  {
    id: 'operations',
    role: 'Operations & Finance',
    headline: 'Real-time alignment between capacity, costs, and customer commitments.',
    summary: 'Connect project timelines and resource allocations directly to contractual milestones, cost run-rates, and profitability without post-mortem surprises.',
    points: [
      'Continuous visibility into workforce utilization, capacity constraints, and demand',
      'Real-time tracking of project cost vs. budget and margin performance',
      'Automated compliance, audit logs, and approval workflows across all systems',
    ],
    icon: '⚙️',
    metric: 'Continuous Governance',
  },
  {
    id: 'customers',
    role: 'Your Customers',
    headline: 'A seamless journey from initial proposal through delivery and ongoing service.',
    summary: 'Clients experience consistent commitments, transparent progress, and rapid issue resolution because support teams have full visibility into the delivery history.',
    points: [
      'Solutions delivered strictly aligned with initial discovery agreements',
      'Transparent milestone progression and predictable release cadences',
      'Post-launch support backed by direct insight into system architecture and release history',
    ],
    icon: '🤝',
    metric: 'Predictable Outcomes',
  },
]
