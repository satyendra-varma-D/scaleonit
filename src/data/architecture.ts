export interface ArchitectureLayer {
  num: number
  title: string
  subtitle: string
  color: string
  bg: string
  border: string
  accent: string
  items: string[]
  detail: string
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    num: 1,
    title: 'ScaleOnIt Experience',
    subtitle: 'The unified interface layer',
    color: 'text-[#C53678]',
    bg: 'bg-[#FDF2F7]',
    border: 'border-[#C53678]/40',
    accent: 'bg-[#C53678]',
    items: ['Executive Command Center', 'Domain Workspaces', 'Delivery Portals', 'Cross-System Reports', 'Intelligence Interface'],
    detail: 'The ScaleOnIt experience layer provides role-specific workspaces, dashboards, and interfaces across the six purpose-built systems. Executives see pipeline and margin dynamics. Delivery heads see sprint velocity, risks, and resource health.',
  },
  {
    num: 2,
    title: 'Six Purpose-Built Systems',
    subtitle: '6 connected operating domains',
    color: 'text-[#FF5841]',
    bg: 'bg-[#FFF4F2]',
    border: 'border-[#FF5841]/40',
    accent: 'bg-[#FF5841]',
    items: ['GROW', 'DISCOVER', 'DELIVER (ONIT)', 'PEOPLE', 'MONEY', 'SERVE'],
    detail: 'The ecosystem domain layer connects all business functions on a unified contextual spine. Opportunities in GROW flow into DISCOVER requirements. Delivery in DELIVER (powered by ONIT) feeds customer operations in SERVE without dropped context.',
  },
  {
    num: 3,
    title: 'AI Workforce',
    subtitle: 'Specialized workers across every function',
    color: 'text-[#3B1A54]',
    bg: 'bg-[#F5F3F8]',
    border: 'border-[#3B1A54]/30',
    accent: 'bg-[#3B1A54]',
    items: ['AI Business Analyst', 'AI Solution Architect', 'AI Engineering Agent', 'AI QA Engineer', 'AI DevOps Engineer', 'AI Project Manager', 'AI Finance Agent', 'AI Support Agent'],
    detail: 'Specialized digital specialists with defined roles, domain goals, context, tools, and permissions. Workers operate inside the ScaleOnIt ecosystem with mandatory human approval gates on critical actions.',
  },
  {
    num: 4,
    title: 'Agent Orchestration',
    subtitle: 'Coordinated multi-agent execution',
    color: 'text-[#C53678]',
    bg: 'bg-[#FDF2F7]',
    border: 'border-[#C53678]/40',
    accent: 'bg-[#C53678]',
    items: ['Planning', 'Task decomposition', 'State management', 'Memory', 'Coordination', 'Workflow execution', 'Human approval gates'],
    detail: 'The orchestration layer decomposes goals into tasks, assigns them to the right AI workers, manages state across long-running workflows, and enforces approval gates with full audit trails.',
  },
  {
    num: 5,
    title: 'Domain Intelligence',
    subtitle: 'Multi-model routing & evaluation',
    color: 'text-[#FF5841]',
    bg: 'bg-[#FFF4F2]',
    border: 'border-[#FF5841]/40',
    accent: 'bg-[#FF5841]',
    items: ['Model routing', 'Prompt optimization', 'Evaluation harness', 'Context retrieval', 'Output guardrails', 'Fine-tuned adapters'],
    detail: 'Routes each task to the optimal model based on capability, cost, and latency requirements. Incorporates strict pre-execution guardrails and evaluation harnesses.',
  },
  {
    num: 6,
    title: 'Integration & Connectivity',
    subtitle: 'Bidirectional sync across toolstack',
    color: 'text-[#3B1A54]',
    bg: 'bg-[#F5F3F8]',
    border: 'border-[#3B1A54]/30',
    accent: 'bg-[#3B1A54]',
    items: ['Git providers', 'Issue trackers', 'Cloud & infrastructure', 'Communication', 'CRM & ERP', 'Observability'],
    detail: 'Connects to your existing enterprise stack — GitHub, GitLab, Jira, AWS, Azure, GCP, Salesforce, SAP, and Slack — preserving context without forcing tool replacement.',
  },
  {
    num: 7,
    title: 'Governance & Security',
    subtitle: 'Policy, permissions, and audit',
    color: 'text-[#C53678]',
    bg: 'bg-[#FDF2F7]',
    border: 'border-[#C53678]/40',
    accent: 'bg-[#C53678]',
    items: ['RBAC', 'Policy enforcement', 'Human approval gates', 'Audit logging', 'Data controls', 'Air-gapped deployment'],
    detail: 'Enterprise governance enforcing role-based permissions, data classification boundaries, and mandatory human checkpoints for consequential actions.',
  },
]
