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
    tagline: 'Find and manage new business opportunities.',
    purpose: 'Helps your sales team find prospective clients, understand company background, and manage deals from first conversation to closed contract.',
    journey: ['Find Leads', 'Understand Needs', 'Sales Meetings', 'Close Contract'],
    journeyText: 'Find Leads → Understand Needs → Sales Meetings → Close Contract',
    description: 'Business acquisition, sales and CRM. Keep all prospective client information organized in one place before work starts.',
    capabilities: [
      'Lead Research & Account Details',
      'Sales Pipeline Management',
      'Meeting Notes & Next Steps',
      'Deal Stage Tracking',
      'Customer Contact History',
      'Sales-to-Project Handoff',
    ],
    intelligenceType: 'Sales & Acquisition Support',
    intelligenceDesc: 'Summarizes client background and meeting conversations so your team can focus on building relationships.',
    status: 'building',
    statusLabel: 'Ecosystem Roadmap',
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
    tagline: 'Turn raw ideas into approved BRD, FRD, and UI wireframes.',
    purpose: 'Analyzes unstructured sales inputs, selects domain tech stacks and templates, redrafts custom BRDs with BA/PM review, generates FRDs, and synthesizes interactive UI wireframes.',
    journey: ['Unstructured Ideas', 'Template & Stack Match', 'BRD & FRD Sign-Off', 'Interactive Wireframes'],
    journeyText: 'Unstructured Ideas → Template & Stack Match → BRD & FRD Sign-Off → Interactive Wireframes',
    description: 'Requirements engineering, domain template matching, and prototype generation. Delivers approved BRD, FRD, and UI wireframes before writing code.',
    capabilities: [
      'Unstructured Idea & Gap Analysis',
      'Domain Template & Tech Stack Selection',
      'Tailored BRD Drafting & BA/PM Sign-Off',
      'Automated Functional Specifications (FRD)',
      'Dedicated AI Prompt & .md Spec Generation',
      'Interactive UI/UX Wireframe Synthesis',
    ],
    intelligenceType: 'Requirements & Wireframe Engine',
    intelligenceDesc: 'Evaluates unstructured client ideas, detects missing constraints, drafts signed-off BRDs/FRDs, and engineers machine-ready prompts and wireframes.',
    status: 'building',
    statusLabel: 'Ecosystem Roadmap',
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
    tagline: 'Plan, build, test and release software.',
    purpose: 'Moves approved requirements into working software through planning, AI-assisted development, automated testing, and safe deployment.',
    journey: ['Understand', 'Plan', 'Build', 'Test', 'Release'],
    journeyText: 'Understand → Plan → Build → Test → Release',
    description: 'Software project planning, execution and delivery. Currently powered by our flagship ONIT technology.',
    capabilities: [
      'Visual App Wireframes & Prototypes',
      'AI-Assisted Development',
      'Modern React & Backend Code Generation',
      'Automated Testing Before Release',
      'Live Preview Environments for Review',
      'Cloud Deployment & Release Management',
    ],
    intelligenceType: 'Software Delivery Engine (ONIT)',
    intelligenceDesc: 'Helps developers create prototypes, generate code, and run automated tests so teams release reliable software faster.',
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
    tagline: 'Manage teams, roles and workforce needs.',
    purpose: 'Helps managers assign the right team members to projects, plan sprint workloads, and understand team availability.',
    journey: ['Team Skills', 'Work Planning', 'Task Assignment', 'Progress Tracking'],
    journeyText: 'Team Skills → Work Planning → Task Assignment → Progress Tracking',
    description: 'Workforce and resource management. Matches project requirements with developer availability and skills.',
    capabilities: [
      'Team Member Skills & Availability',
      'Sprint & Task Planning',
      'Workload Balancing',
      'Project Resourcing & Staffing',
      'Team Progress Tracking',
      'Capacity Forecasting',
    ],
    intelligenceType: 'Team & Work Planning Support',
    intelligenceDesc: 'Suggests task assignments based on team skills and availability to keep projects on schedule.',
    status: 'building',
    statusLabel: 'Ecosystem Roadmap',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50/50',
    borderColor: 'border-slate-200',
    badgeColor: 'text-slate-800 bg-slate-100 border-slate-200',
    textColor: 'text-slate-900',
    icon: '👥',
  },
  {
    id: 'financials',
    name: 'FINANCIALS',
    tagline: 'Manage billing, payments and project finances.',
    purpose: 'Connects project milestones directly to client invoices and payment triggers so your business stays on top of cash flow and profit margins.',
    journey: ['Set Milestones', 'Track Progress', 'Trigger Invoice', 'Verify Payment'],
    journeyText: 'Set Milestones → Track Progress → Trigger Invoice → Verify Payment',
    description: 'Commercial and project financial management. Gives you clear visibility into project budgets, costs, and invoices.',
    capabilities: [
      'Milestone-Based Billing Triggers',
      'Project Budget & Cost Tracking',
      'Automated Client Invoices',
      'Profit Margin Monitoring',
      'Payment Status & Reminders',
      'Financial Reports by Project',
    ],
    intelligenceType: 'Project Financial Visibility',
    intelligenceDesc: 'Links verified software milestones directly to billing triggers so you never miss an invoice or lose track of costs.',
    status: 'building',
    statusLabel: 'Ecosystem Roadmap',
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
    tagline: 'Support customers and manage ongoing relationships.',
    purpose: 'Helps your support and account teams solve customer issues with direct insight into the software releases and requirements built for them.',
    journey: ['Customer Question', 'Check Context', 'Resolve Issue', 'Ongoing Care'],
    journeyText: 'Customer Question → Check Context → Resolve Issue → Ongoing Care',
    description: 'Customer service, support and customer success. Keeps clients happy after release with connected support and clear answers.',
    capabilities: [
      'Customer Support Helpdesk',
      'Ticket-to-Release Traceability',
      'Service Level Agreements (SLA)',
      'Customer Satisfaction Checks',
      'Release Notes & Updates for Clients',
      'Long-Term Account Health',
    ],
    intelligenceType: 'Customer Support Assistance',
    intelligenceDesc: 'Helps support teams find answers quickly by looking up past requirements and code changes related to customer tickets.',
    status: 'building',
    statusLabel: 'Ecosystem Roadmap',
    accentColor: '#FF5500',
    bgLight: 'bg-orange-50/50',
    borderColor: 'border-slate-200',
    badgeColor: 'text-[#FF5500] bg-orange-50 border-orange-200',
    textColor: 'text-[#FF5500]',
    icon: '🛡️',
  },
]

export interface ConnectionBenefit {
  id: string
  title: string
  description: string
  icon: string
}

export const connectionBenefits: ConnectionBenefit[] = [
  {
    id: 'less-repetition',
    title: 'Less repeated work',
    description: 'Information entered during sales or requirements moves directly into project delivery, eliminating repetitive re-entry.',
    icon: '⚡',
  },
  {
    id: 'better-visibility',
    title: 'Better visibility',
    description: 'See the real status of customer requests, active builds, team capacity, and project finances from one connected view.',
    icon: '👁️',
  },
  {
    id: 'fewer-tools',
    title: 'Fewer disconnected tools',
    description: 'Reduce the friction of jumping between separate apps that do not communicate or share context.',
    icon: '🔗',
  },
  {
    id: 'smoother-journey',
    title: 'A smoother customer journey',
    description: 'Your clients experience clear communication and consistent progress from their first conversation to long-term support.',
    icon: '🤝',
  },
]

