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
    title: 'ONIT Experience',
    subtitle: 'The interface layer',
    color: 'text-onit',
    bg: 'bg-onit-light',
    border: 'border-blue-200',
    accent: 'bg-onit',
    items: ['Dashboards', 'Workspaces', 'Projects', 'Command Center', 'Reports', 'AI Interface'],
    detail: 'The ONIT experience layer provides role-specific workspaces, dashboards, and interfaces across all platform capabilities. CTOs see architecture and engineering intelligence. Delivery heads see project health, risks, and resource utilization. AI workers surface their outputs through consistent interaction patterns.',
  },
  {
    num: 2,
    title: 'Business + SDLC',
    subtitle: '11 connected capabilities',
    color: 'text-onit',
    bg: 'bg-onit-light',
    border: 'border-blue-200',
    accent: 'bg-onit',
    items: ['GROW', 'DISCOVER', 'DESIGN', 'ENGINEER', 'QUALITY', 'DELIVER', 'SERVE', 'PEOPLE', 'FINANCE', 'INTELLIGENCE', 'CONNECT'],
    detail: 'The SDLC layer contains all business and software delivery capabilities operating on a shared data model. Requirements created in DISCOVER flow directly to ENGINEER. Budgets defined in FINANCE connect to DELIVER project tracking. Support escalations in SERVE link back to the original requirements and code that caused them.',
  },
  {
    num: 3,
    title: 'AI Workforce',
    subtitle: 'Specialized workers across every function',
    color: 'text-ai-violet',
    bg: 'bg-ai-light',
    border: 'border-violet-200',
    accent: 'bg-ai-violet',
    items: ['AI Business Analyst', 'AI Solution Architect', 'AI Engineering Agent', 'AI QA Engineer', 'AI DevOps Engineer', 'AI Project Manager', 'AI Finance Agent', 'AI Support Agent'],
    detail: 'AI workers are specialized agents with defined roles, goals, context, tools, and permissions. Each worker operates within the ONIT platform rather than as a standalone chatbot. Workers share organizational context through the platform knowledge layer. Human approval requirements are configured per worker and action type.',
  },
  {
    num: 4,
    title: 'Agent Orchestration',
    subtitle: 'Coordinated multi-agent execution',
    color: 'text-ai-violet',
    bg: 'bg-ai-light',
    border: 'border-violet-200',
    accent: 'bg-ai-violet',
    items: ['Planning', 'Task decomposition', 'State management', 'Memory', 'Coordination', 'Workflow execution', 'Human approval gates'],
    detail: 'The orchestration layer decomposes goals into tasks, assigns them to the right AI workers, manages state across long-running workflows, and enforces approval gates. Agents are not permitted to act outside their defined scope. Every orchestrated workflow maintains a verifiable audit trail.',
  },
  {
    num: 5,
    title: 'AI Intelligence',
    subtitle: 'Right intelligence for every job',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    accent: 'bg-violet-600',
    items: ['Model routing', 'Foundation models', 'Reasoning models', 'Coding models', 'Specialized models', 'RAG', 'Embeddings', 'Organizational knowledge', 'Evaluation', 'Guardrails'],
    detail: 'ONIT routes tasks to the appropriate intelligence rather than forcing all work through a single model. Requirements analysis uses reasoning plus RAG against organizational knowledge. Code generation uses coding-specialized intelligence. Financial analysis uses deterministic logic plus analytical models. Models are replaceable. The ONIT intelligence architecture is not.',
  },
  {
    num: 6,
    title: 'Action + Integration',
    subtitle: 'Connected to everything that matters',
    color: 'text-data-cyan',
    bg: 'bg-cyan-light',
    border: 'border-cyan-200',
    accent: 'bg-data-cyan',
    items: ['REST APIs', 'Webhooks', 'Tool interfaces', 'Git', 'Cloud platforms', 'CRM', 'ERP', 'Data platforms', 'Communication', 'CI/CD'],
    detail: 'The action layer gives AI workers and workflows the ability to take real actions: create repositories, deploy services, update records, send notifications, and query external systems. All tool invocations are governed by policy, permissions, and where required, human approval.',
  },
  {
    num: 7,
    title: 'Security + Governance',
    subtitle: 'Enterprise-grade control',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    accent: 'bg-slate-600',
    items: ['IAM', 'RBAC', 'SSO', 'Audit logging', 'Secrets management', 'Policy engine', 'Approval workflows', 'Multi-tenancy', 'Encryption', 'Data governance', 'Observability', 'Cost controls'],
    detail: 'ONIT is built for enterprise deployment. Every AI action is authorized, audited, and observable. Multi-tenant isolation, RBAC, SSO, and secrets management provide the control foundation. The policy engine defines what AI workers can do, what requires human approval, and what is never permitted.',
  },
]
