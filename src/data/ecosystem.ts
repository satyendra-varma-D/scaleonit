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
    tagline: 'Lead Research, Profiling & Live Meeting Support',
    purpose: 'Deeply research leads, generate exhaustive profiling reports, and provide AI co-pilot support during live prospect calls and client meetings to crack and close deals with precision.',
    journey: ['Lead Research', 'Profiling Report', 'Live Meeting Support', 'Deal Closed'],
    journeyText: 'Lead Research → Profiling Report → Call Support → Deal Closed',
    description: 'Transform raw market signals into rich prospect profiles and empower sales teams with real-time meeting intelligence to convert high-value accounts.',
    capabilities: [
      'Deep Lead Research & Profiling',
      'Executive Background Reports',
      'Real-Time Meeting Co-Pilot',
      'Call Intelligence & Objection Handling',
      'CRM Pipeline Intelligence',
      'Opportunity Conversion Analytics',
    ],
    intelligenceType: 'Lead Research & Meeting Intelligence',
    intelligenceDesc: 'Analyzes buyer signals, company profiles, and real-time meeting conversations to give your sales team an unfair advantage in cracking deals.',
    status: 'building',
    statusLabel: 'Part of the ScaleOnIt vision',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50/50',
    borderColor: 'border-slate-200',
    badgeColor: 'text-[#FF5500] bg-orange-50 border-orange-200',
    textColor: 'text-[#FF5500]',
    icon: '🌱',
  },
  {
    id: 'discover',
    name: 'DISCOVER',
    tagline: 'Call Intelligence, Automated BRD/FRD & Review Gating',
    purpose: 'Automatically extract clear requirements from discovery calls and meetings into industry-templated BRD/FRD blueprints tailored to application type, reviewed and fully customizable by PMs, BAs, and POs.',
    journey: ['Meeting Transcripts', 'Template Mapping', 'BRD/FRD Generation', 'PM/BA/PO Review'],
    journeyText: 'Calls & Meetings → Requirement Extraction → Templated BRD/FRD → PM / BA / PO Review & Approval',
    description: 'Convert unstructured client conversations into structured, customizable specifications with full human oversight before design or code begins.',
    capabilities: [
      'Meeting & Call Audio/Transcript Parsing',
      'Application-Specific BRD/FRD Templates',
      'Automated User Story & Schema Extraction',
      'Interactive PM / BA / PO Editor & Alteration',
      'Gherkin Acceptance Criteria Synthesis',
      'Consensus & Sign-Off Gating',
    ],
    intelligenceType: 'Requirements & Specification Intelligence',
    intelligenceDesc: 'Transforms discovery discussions into complete, reviewable specifications pre-populated in application-tailored templates with human approval gates.',
    status: 'building',
    statusLabel: 'Building toward',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50/50',
    borderColor: 'border-slate-200',
    badgeColor: 'text-[#FF5500] bg-orange-50 border-orange-200',
    textColor: 'text-[#FF5500]',
    icon: '🔍',
  },
  {
    id: 'deliver',
    name: 'DELIVER',
    tagline: 'Flagship ONIT: Wireframe Wonder, UI/UX, Code, QA & Deploy',
    purpose: 'Turn signed-off specs into visual wireframe wonders to impress clients, iterate on instant alterations, and execute autonomous multi-agent UI/UX design, full-stack code synthesis, automated Playwright QA, and governed cloud deployment.',
    journey: ['Visual Wireframes', 'Client Alteration', 'Multi-Agent Code', 'Playwright QA', 'Cloud Release'],
    journeyText: 'Visual Wireframe Wonder → Client Review → Multi-Agent Design & Code → 100% Playwright QA → Governed Deployment',
    description: 'The flagship software delivery operating system combining stunning visual prototypes, autonomous engineering swarms, and zero-defect QA into one loop.',
    capabilities: [
      'Visual Wireframe Wonder Generation',
      'Instant Client Prototype Alteration',
      'Specialized Multi-Agent Swarms',
      'React 19 & Node API Code Synthesis',
      'Interactive Live Staging Environments',
      'Automated Playwright E2E Regression QA',
      'Governed Cloud Infrastructure Release',
    ],
    intelligenceType: 'Autonomous SDLC & Multi-Agent Delivery',
    intelligenceDesc: 'Orchestrates visual wireframing, client-pleasing interactive demos, autonomous code engineering, rigorous Playwright QA, and zero-defect deployments.',
    status: 'active',
    statusLabel: 'Available Today',
    flagshipProduct: 'ONIT',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50',
    borderColor: 'border-[#FF5500]',
    badgeColor: 'text-white bg-[#FF5500] shadow-sm shadow-orange-500/30 border-transparent',
    textColor: 'text-[#FF5500]',
    icon: '⚡',
  },
  {
    id: 'people',
    name: 'PEOPLE',
    tagline: 'AI-Assisted Task, Sprint & Workforce Management',
    purpose: 'Manage your entire team, project tasks, sprint allocations, and skills taxonomy with AI-assisted workflow engines that eliminate bench waste and delivery friction.',
    journey: ['Skills & Tasks', 'Sprint Planning', 'AI Allocation', 'Execution Tracking'],
    journeyText: 'Skills & Tasks → AI Sprint Planning → Work Allocation → Continuous Tracking',
    description: 'Empower project leaders with AI-guided sprint management, resource allocation, and team capacity optimization across all active initiatives.',
    capabilities: [
      'AI-Assisted Sprint Planning',
      'Task Decomposition & Assignment',
      'Skills Taxonomy & Bench Utilization',
      'Dynamic Workload Balancing',
      'Team Velocity & Bottleneck Forecasting',
      'Automated Standup & Progress Sync',
    ],
    intelligenceType: 'AI Workforce & Sprint Intelligence',
    intelligenceDesc: 'Analyzes engineer skills, sprint velocity, and task dependencies to continuously optimize project resourcing and team productivity.',
    status: 'building',
    statusLabel: 'Part of the ScaleOnIt vision',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50/50',
    borderColor: 'border-slate-200',
    badgeColor: 'text-slate-800 bg-slate-100 border-slate-200',
    textColor: 'text-slate-900',
    icon: '👥',
  },
  {
    id: 'money',
    name: 'FINANCIALS',
    tagline: 'Milestone Payments, Delivery Progress Triggers & Margins',
    purpose: 'Track project milestones, tie progress directly to payment triggers, and get AI-assisted financial visibility to ensure delivery always aligns with your business margin objectives.',
    journey: ['Milestone Setup', 'Delivery Progress', 'Payment Trigger', 'Margin Alignment'],
    journeyText: 'Milestone Setup → Delivery Progress → AI Payment Triggers → Margin Alignment',
    description: 'Connect software delivery milestones directly to billing triggers, cashflow forecasting, and real-time project profitability with zero post-mortem surprises.',
    capabilities: [
      'Milestone & Delivery Payment Triggers',
      'AI-Assisted Financial Progress Tracking',
      'Real-Time Project Margin Monitoring',
      'Automated Contract Milestone Invoicing',
      'Budget Burn & Cashflow Forecasting',
      'Objective Alignment & Profitability Audits',
    ],
    intelligenceType: 'Financial & Milestone Trigger Intelligence',
    intelligenceDesc: 'Monitors completed code milestones and delivery verification to trigger billing, compute live margins, and keep financial objectives aligned.',
    status: 'building',
    statusLabel: 'Part of the ScaleOnIt vision',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50/50',
    borderColor: 'border-slate-200',
    badgeColor: 'text-[#FF5500] bg-orange-50 border-orange-200',
    textColor: 'text-[#FF5500]',
    icon: '📊',
  },
  {
    id: 'serve',
    name: 'SERVE',
    tagline: 'Next-Gen CRM, Customer Service & Commit Traceability',
    purpose: 'Deliver superior CRM and customer support with direct insight into deployed code releases, automated SLA monitoring, and instant incident-to-spec root cause resolution.',
    journey: ['Customer Request', 'Code Traceability', 'AI Resolution', 'Retention & Renewal'],
    journeyText: 'Customer Request → Code Traceability → AI Assisted Resolution → Long-Term Retention',
    description: 'Elevate customer service into a competitive advantage with CRM workflows that trace customer issues straight back to delivery code and requirements.',
    capabilities: [
      'Contextual CRM & Customer Service',
      'Incident-to-Commit Traceability',
      'Proactive SLA Monitoring & Alerts',
      'AI-Assisted Support Ticket Resolution',
      'Customer Health & Satisfaction Scoring',
      'Lifecycle Retention & Account Expansion',
    ],
    intelligenceType: 'Customer Service & CRM Intelligence',
    intelligenceDesc: 'Connects customer service requests directly to original requirement and delivery context for immediate root-cause clarity and fast resolution.',
    status: 'building',
    statusLabel: 'Building toward',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50/50',
    borderColor: 'border-slate-200',
    badgeColor: 'text-[#FF5500] bg-orange-50 border-orange-200',
    textColor: 'text-[#FF5500]',
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
      'Unify strategic visibility across customers, projects, people, and financials',
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
