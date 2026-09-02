export interface SolutionItem {
  id: string
  slug: string
  title: string
  tagline: string
  targetAudience: string
  heroHeadline: string
  heroDescription: string
  challenges: string[]
  solutionCapabilities: string[]
  keyOutcomes: string[]
  color: string
  bg: string
  border: string
  accent: string
}

export const solutions: SolutionItem[] = [
  {
    id: 'it-services',
    slug: 'it-services',
    title: 'IT Services & Delivery Firms',
    tagline: 'Scale Delivery Margin & Traceability',
    targetAudience: 'Founders, Delivery Heads, Practice Leads & Operations Directors',
    heroHeadline: 'Operate client software delivery with connected intelligence.',
    heroDescription: 'Eliminate manual status reports, fragmented project handoffs, and unexpected margin leaks. ONIT provides one operating environment across business development, sprint execution, quality, and support.',
    challenges: [
      'Requirements get lost between sales discovery and technical delivery teams',
      'Delivery leads lack real-time visibility into project margin burn and team allocation',
      'Client status reporting is manual, delayed, and labor-intensive',
      'Support tickets have zero context linking back to original code changes or PRDs',
    ],
    solutionCapabilities: [
      'Automated BRD and user story generation directly from client meeting transcripts',
      'Continuous project economics tracking connected to milestones and timesheets',
      'AI Project Manager automated stakeholder updates and early blocker detection',
      'Bidirectional traceability from customer support tickets to Git commits',
    ],
    keyOutcomes: [
      'Reduced context switching between sales, Jira, and customer communication',
      'Real-time margin visibility across all active client engagements',
      'Standardized software delivery execution with built-in quality gates',
    ],
    color: 'text-onit',
    bg: 'bg-onit-light',
    border: 'border-blue-200',
    accent: 'bg-onit',
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development & SaaS Teams',
    tagline: 'From PRD to Pull Request with Governed AI',
    targetAudience: 'CTOs, VPs of Engineering, Engineering Managers & Product Leads',
    heroHeadline: 'Accelerate your software lifecycle without losing control.',
    heroDescription: 'Bridge product requirements, technical architecture, code implementation, and release management into a coherent system. Specialized AI workers execute features within your defined policies and approval gates.',
    challenges: [
      'Engineering teams spend excessive time translating vague PRDs into architecture and tasks',
      'Disconnected design tokens, wireframes, and API contracts cause implementation rework',
      'Automated test suites do not reliably align with initial acceptance criteria',
      'Autonomous AI tools lack enterprise policy boundaries and human oversight',
    ],
    solutionCapabilities: [
      'AI Solution Architect translates approved requirements into API specs and data models',
      'AI Engineering Agent creates feature pull requests adhering to team conventions',
      'AI QA Engineer generates comprehensive test suites directly from user story acceptance criteria',
      'Configurable human approval gates required for code merges and production deployments',
    ],
    keyOutcomes: [
      'Accelerated concept-to-production delivery velocity',
      'Complete end-to-end requirement traceability across all code changes',
      'Strict enterprise governance and policy-bounded AI execution',
    ],
    color: 'text-ai-violet',
    bg: 'bg-ai-light',
    border: 'border-violet-200',
    accent: 'bg-ai-violet',
  },
]
