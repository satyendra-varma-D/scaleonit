# ScaleOnIt & ONIT — Production Website Architecture Blueprint

**Document:** `SCALEONIT_WEBSITE_BLUEPRINT.md`  
**Date:** September 2, 2026  
**Auditor & Architect:** Antigravity / DeepMind AI Pair Programmer  
**Product & Corporate Entities:** **ScaleOnIt** (Parent Entity) & **ONIT** (Flagship Platform)  
**Status:** Architecture Blueprint (Read-Only Planning Phase; No Code Modifications)

---

## 1. Brand Architecture

A foundational rule of this architecture is the strict separation and hierarchical relationship between the parent enterprise company and its flagship product:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   SCALEONIT BRAND HIERARCHY                                      │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│   PARENT ENTERPRISE BRAND:                                                                       │
│   ┌──────────────────────────────────────────────────────────────────────────────────────────┐   │
│   │                                       ScaleOnIt                                          │   │
│   │   "Enterprise technology, digital engineering, and operational innovation company"       │   │
│   └─────────────────────────────────────────────┬────────────────────────────────────────────┘   │
│                                                 │ Flagship Product                               │
│                                                 ▼                                                │
│   FLAGSHIP OPERATING PLATFORM:                                                                   │
│   ┌──────────────────────────────────────────────────────────────────────────────────────────┐   │
│   │                                         ONIT                                             │   │
│   │   "The AI-Native Operating Platform for Software Delivery & IT Operations"               │   │
│   │   "One Platform. Every IT Need."                                                         │   │
│   └──────────────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **ScaleOnIt (Parent Company / Corporate Brand):** The legal, engineering, and solutions organization. ScaleOnIt owns, develops, and delivers ONIT, alongside enterprise consulting, system integration, and digital engineering services.
- **ONIT (Flagship / Master Product):** The unified operating platform that connects people, processes, systems, data, and autonomous AI workers across the entire software delivery lifecycle (SDLC).
- **Brand Identity Rule:** Never merge the two identities into a single ambiguous noun. Copy and headers must clearly state *"ONIT by ScaleOnIt"* or establish ScaleOnIt as the company powering the platform.

---

## 2. Website Information Architecture & Final Sitemap

To prevent thin SEO pages while ensuring comprehensive topical authority and search engine crawlability, the website structure is divided into **Launch Now (Phase 1)**, **Content Expansion (Phase 2)**, and **Future Expansion (Phase 3)**:

```
https://scaleonit.com/
├── /                               [Homepage — 16 Vertical Sections, Full Interactive Experience]
├── /platform                       [Platform Overview & All 11 Capabilities Hub]
│   ├── /platform/discover          [Dedicated Page: Discovery, Requirements, BRD & AI Business Analyst]
│   ├── /platform/engineer          [Dedicated Page: Architecture, Coding, AI Solution Architect & Engineering]
│   ├── /platform/quality           [Dedicated Page: QA Automation, Test Strategies & Quality Gates]
│   ├── /platform/deliver           [Dedicated Page: Project Coordination, DevOps, Releases & Rollbacks]
│   ├── /platform/serve             [Dedicated Page: Contextual Support, SLAs & Incident-to-Code Traceability]
│   ├── /platform/intelligence      [Dedicated Page: Dynamic Model Routing, RAG & Evaluation Engine]
│   └── /platform/connect           [Dedicated Page: Integration Ecosystem, 8 Categories & 10 Protocols]
├── /ai-workforce                   [Dedicated Page: Multi-Agent Workforce, Roles, Tools & Permissions]
├── /architecture                   [Dedicated Page: 7-Layer Operating Architecture Deep-Dive]
├── /security                       [Dedicated Page: Enterprise Governance, RBAC, Approval Gates & Audit]
├── /solutions                      [Solutions Hub — Multi-Industry Landing]
│   ├── /solutions/it-services      [Dedicated Page: For IT Services & System Delivery Firms]
│   └── /solutions/software-development [Dedicated Page: For Software Engineering & SaaS Organizations]
├── /company                        [Dedicated Page: About ScaleOnIt, Mission, Leadership & Global Reach]
└── /demo                           [Dedicated Page: Interactive Architecture Consultation & Pilot Booking]
```

### Page Justification Summary

| Route | Classification | Justification Based on Existing Codebase & Content |
|---|---|---|
| `/` | **Launch Now** | Preserves all 16 existing high-fidelity interactive sections. |
| `/platform` | **Launch Now** | Unified hub categorizing the 11 capabilities with live interactive preview. |
| `/platform/discover` | **Launch Now** | Deep existing content: AI Business Analyst profile, BRD user story artifact, live console simulation. |
| `/platform/engineer` | **Launch Now** | Deep content: AI Solution Architect, AI Engineering Agent, PR artifacts, and governance demo. |
| `/platform/quality` | **Launch Now** | Deep content: AI QA Engineer profile, test report artifact, and CI/CD quality gate policies. |
| `/platform/deliver` | **Launch Now** | Deep content: AI Project Manager, AI DevOps Engineer, release records, and rollback safeguards. |
| `/platform/serve` | **Launch Now** | Deep content: AI Support Agent, support ticket artifact, SLA rules, and code traceability. |
| `/platform/intelligence`| **Launch Now** | Deep content: Dedicated `IntelligenceSection.tsx`, 6 task matrices, and 10 architecture pillars. |
| `/platform/connect` | **Launch Now** | Deep content: Dedicated `ConnectSection.tsx`, 8 categories, and 10 connection protocols. |
| `/platform/grow` | **Phase 2 (Later)**| Content currently thin (1 metadata blurb); should launch after sales workflow copy is expanded. |
| `/platform/design` | **Phase 2 (Later)**| Moderate content; launch after dedicated AI UX Designer and Figma token specifications are expanded. |
| `/platform/people` | **Phase 2 (Later)**| Content currently thin; launch after capacity planning and skills matrix copy is developed. |
| `/platform/finance` | **Phase 2 (Later)**| Moderate content; launch after billing/ERP integration specifications are developed. |
| `/ai-workforce` | **Launch Now** | Substantial content: 8 full worker cards, tools, goals, outputs, and human approval gates. |
| `/architecture` | **Launch Now** | Substantial content: 7-layer architecture accordion, technical breakdown, and engineering specs. |
| `/security` | **Launch Now** | Substantial content: 8 governance pillars and interactive approval gate console. |
| `/solutions/it-services` | **Launch Now** | High commercial relevance; directly addresses IT delivery leaders, utilization, and margins. |
| `/solutions/software-development` | **Launch Now** | High commercial relevance; directly addresses CTOs, sprint velocity, and code traceability. |
| `/company` | **Launch Now** | Establishes parent entity ScaleOnIt credibility, global hubs, and corporate vision. |
| `/demo` | **Launch Now** | Uses the full-featured, stateful `TalkToUsPage.tsx` consultation interface. |

---

## 3. Capability Page Decision (11 Modules)

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               11 CAPABILITY PAGE DECISION MATRIX                                │
├────┬──────────────┬────────────────────────┬────────────────────────────────────────────────────┤
│ #  │ Capability   │ Final Decision         │ Architectural & Search Intent Reason               │
├────┼──────────────┼────────────────────────┼────────────────────────────────────────────────────┤
│ 1  │ GROW         │ C. Page Later (Exp. 2) │ Content is currently 1 sentence + 4 pills. Thin.   │
│ 2  │ DISCOVER     │ A. Dedicated Page Now  │ Extensive content: BA agent, BRD, user story flows │
│ 3  │ DESIGN       │ C. Page Later (Exp. 2) │ Needs explicit Figma token & UI generator copy     │
│ 4  │ ENGINEER     │ A. Dedicated Page Now  │ Exceptional depth: 2 agents, PRs, architecture    │
│ 5  │ QUALITY      │ A. Dedicated Page Now  │ Strong depth: QA agent, test reports, quality gates│
│ 6  │ DELIVER      │ A. Dedicated Page Now  │ Strong depth: PM agent, DevOps agent, release logs │
│ 7  │ SERVE        │ A. Dedicated Page Now  │ Strong depth: Support agent, SLA, ticket tracing   │
│ 8  │ PEOPLE       │ C. Page Later (Exp. 2) │ Content is currently metadata only. Thin.          │
│ 9  │ FINANCE      │ C. Page Later (Exp. 2) │ Needs ERP billing & expense workflow expansion     │
│ 10 │ INTELLIGENCE │ A. Dedicated Page Now  │ Dedicated section exists: 6 task matrices, RAG     │
│ 11 │ CONNECT      │ A. Dedicated Page Now  │ Dedicated section exists: 8 categories, 10 protocols│
└────┴──────────────┴────────────────────────┴────────────────────────────────────────────────────┘
```

*Rule: Capabilities classified as "Page Later" remain accessible via the interactive selector on the Homepage and `/platform` hub without generating low-value, thin standalone URLs.*

---

## 4. Homepage Section Plan

The homepage visual experience is world-class and must be **strictly preserved** while updating links to reference crawlable path URLs:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                HOMEPAGE SECTION ACTION PLAN                            │
├────┬─────────────────────────────┬───────────┬─────────────────────────────────────────┤
│ #  │ Section Component           │ Action    │ Specific Refinement                     │
├────┼─────────────────────────────┼───────────┼─────────────────────────────────────────┤
│ 01 │ HeroSection                 │ KEEP      │ Preserve 9-stage lifecycle & pulse dots │
│ 02 │ ProblemSection              │ KEEP      │ Preserve Before/After fragmented graph  │
│ 03 │ CategorySection             │ KEEP      │ Preserve central ONIT orbital visual    │
│ 04 │ ArchitectureSection         │ IMPROVE   │ Add "Explore Full Architecture →" link  │
│ 05 │ IntelligenceSection         │ IMPROVE   │ Add "Explore Intelligence Engine →" link│
│ 06 │ AIWorkforceSection          │ IMPROVE   │ Add "Explore All AI Workers →" link     │
│ 07 │ AgentConsoleSection         │ KEEP      │ Preserve live streaming terminal console│
│ 08 │ ConnectedContextSection     │ KEEP      │ Preserve 8-stage artifact pipeline      │
│ 09 │ OrchestratorSection         │ KEEP      │ Preserve 10-layer decomposition stepper │
│ 10 │ ConnectSection              │ IMPROVE   │ Add "Explore All 30+ Integrations →"    │
│ 11 │ GovernanceSection           │ IMPROVE   │ Add "Explore Enterprise Security →"     │
│ 12 │ PlatformSection             │ IMPROVE   │ Add deep-links on dedicated tabs        │
│ 13 │ TransformationSection       │ KEEP      │ Preserve role-based persona tabs        │
│ 14 │ AdoptionSection             │ KEEP      │ Preserve 3-path adoption framework      │
│ 15 │ FutureSection               │ KEEP      │ Preserve People+Process+Data equation   │
│ 16 │ CTASection                  │ KEEP      │ Preserve bottom conversion banner       │
└────┴─────────────────────────────┴───────────┴─────────────────────────────────────────┘
```

---

## 5. Navigation Architecture (Desktop & Mobile)

The global header will support both immediate anchor navigation on the homepage and seamless path-based navigation to dedicated pages:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     DESKTOP NAVIGATION BAR (STICKY)                                    │
├───────────────────┬────────────────────────────────────────────────────────────────┬───────────────────┤
│ LEFT BRAND        │ CENTER NAVIGATION (DROPDOWNS & CLEAN URLS)                     │ RIGHT CTAS        │
├───────────────────┼────────────────────────────────────────────────────────────────┼───────────────────┤
│ ONIT              │ • Platform ▾  (Dropdown: Overview, Discover, Engineer, etc.)   │ [Talk to Us]      │
│ by ScaleOnIt      │ • AI Workforce (/ai-workforce)                                 │ [Book Demo]       │
│                   │ • Architecture (/architecture)                                 │ (Primary Accent)  │
│                   │ • Connect (/platform/connect)                                  │                   │
│                   │ • Solutions ▾ (Dropdown: IT Services, Software Dev)            │                   │
│                   │ • Security (/security)                                         │                   │
│                   │ • Company (/company)                                           │                   │
└───────────────────┴────────────────────────────────────────────────────────────────┴───────────────────┘
```

### Desktop Dropdown Specifications
1. **Platform Dropdown:**
   - *Header:* Platform Overview (`/platform`)
   - *Dedicated Capabilities:* Discover (`/platform/discover`), Engineer (`/platform/engineer`), Quality (`/platform/quality`), Deliver (`/platform/deliver`), Serve (`/platform/serve`), Intelligence (`/platform/intelligence`), Connect (`/platform/connect`).
   - *Supporting Capabilities:* Grow, Design, People, Finance (linked directly to `/platform#all-capabilities`).
2. **Solutions Dropdown:**
   - IT Services & Delivery Firms (`/solutions/it-services`)
   - Software Development & Engineering Teams (`/solutions/software-development`)
   - Overview & Enterprise Transformation (`/solutions`)

### Mobile Navigation Drawer
- Compact, high-contrast, accordion-based drawer preserving fast access to all dedicated pages and primary CTAs without oversized touch targets.

---

## 6. Page Template System

Every dedicated page adheres to a cohesive structural standard guaranteeing high design consistency and comprehensive AEO/SEO metadata:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               STANDARD PAGE TEMPLATE LAYOUT                                    │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│  1. Breadcrumbs Bar (e.g. Home / Platform / Discover) + Live Status Badge                      │
│  2. Page Hero (Eyebrow Tag, Confident H1, Descriptive Sub-paragraph, Dual CTAs)                 │
│  3. Value Proposition & Problem Context (Why this capability exists)                           │
│  4. Interactive Feature Breakdown (Key Workflows, Architecture, or Task Matrix)                 │
│  5. Dedicated AI Worker Spotlight (Role, Goal, Context, Tools, Output, Approval Gate)           │
│  6. Connected Context & Artifact Preview (Interactive simulated artifact or workflow)          │
│  7. Integration Ecosystem & Protocols (Relevant connectors)                                    │
│  8. Enterprise Governance & Policy Controls (Role-based permissions & auditability)            │
│  9. Frequently Asked Questions (Structured FAQ Accordion for AEO / Answer Engines)             │
│  10. Bottom Contextual CTA Banner (Direct conversion to /demo with pre-selected focus area)    │
│  11. Standard Global Footer (Complete sitemap with crawlable internal links)                   │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Capability Page Structure (Deep-Dive Example: `/platform/discover`)

Each capability page is tailored to its specific user persona and search intent:

1. **Breadcrumb:** `Home / Platform / Discover`
2. **Hero:**
   - Eyebrow: `AI-Native Discovery & Requirements Engineering`
   - H1: `Turn stakeholder conversations into implementation-ready requirements.`
   - Subhead: `Eliminate requirement ambiguity. Capture meetings, generate BRDs, synthesize user stories, and link business intent directly to production code.`
3. **Problem:** Context lost between sales discovery calls, product managers, and engineering backlog.
4. **Core Workflows:** Requirements Gathering, Automated BRD/FRD Authoring, Acceptance Criteria Synthesis, Scope Baseline Gating.
5. **AI Worker in Action:** Spotlight on `AI Business Analyst` (Goal, Context sources, Tool integrations, Output artifacts, Human Approval checkpoint).
6. **Artifact Showcase:** Interactive Meeting Transcript -> BRD -> User Story (`US-001`) preview.
7. **Integrations:** Jira, Confluence, Linear, Google Meet, Zoom, Slack.
8. **Enterprise Governance:** Human review required before requirement baseline sign-off; change-request tracking.
9. **FAQ (AEO Optimized):**
   - *How does ONIT generate requirements from meeting transcripts?*
   - *Can product managers edit and approve generated BRDs?*
   - *How do requirements connect to engineering pull requests?*
10. **CTA:** `Book a Discovery Architecture Call →` (routes to `/demo?focus=discover`).

---

## 8. AI Workforce Page (`/ai-workforce`)

The AI Workforce page establishes that ONIT’s AI is a structured digital labor force, not a conversational chatbot:

- **Core Theme:** *"AI doesn't just suggest. It executes under human governance."*
- **The Worker Model Grid:** Interactive cards for all 8 detailed workers:
  1. `AI Business Analyst` (Discovery & Requirements)
  2. `AI Solution Architect` (Architecture & System Design)
  3. `AI Engineering Agent` (Feature Implementation & Unit Tests)
  4. `AI QA Engineer` (Test Strategies, Regression & Quality Gates)
  5. `AI DevOps Engineer` (Infrastructure, Pipelines & Deployment)
  6. `AI Project Manager` (Delivery Coordination & Risk Surface)
  7. `AI Support Agent` (Full-Lifecycle Customer Support)
  8. `AI Finance Agent` (Project Profitability & Margin Forecasting)
- **Ontological Worker Anatomy:** Each profile breaks down **Role**, **Goal**, **Context Sources**, **Connected Tools**, **Autonomous Actions**, **Structured Outputs**, and **Mandatory Human Approval Gates**.
- **Interactive Console Sandbox:** Reusable `AgentConsoleSection` embedded as an interactive live execution demonstration.

---

## 9. Architecture Page (`/architecture`)

Communicates the 7-layer operating architecture for technical buyers, CTOs, and Architects:

- **Layer 1: Experience Layer** (Role-specific workspaces, command centers, and dashboards).
- **Layer 2: Business + SDLC Layer** (11 interconnected platform capabilities operating on a shared schema).
- **Layer 3: AI Workforce Layer** (Specialized digital workers operating across all business units).
- **Layer 4: Agent Orchestration Layer** (Goal decomposition, memory, state management, and approval gating).
- **Layer 5: AI Intelligence Architecture** (Task-based model routing: reasoning, coding, RAG, deterministic logic).
- **Layer 6: Action & Integration Layer** (Open integration hub, bi-directional sync, webhooks, and tool execution).
- **Layer 7: Security & Governance Layer** (Enterprise RBAC, IAM, SSO, multi-tenancy, secrets, and audit logging).

---

## 10. ONIT Connect Page (`/platform/connect`)

Built around the core integration philosophy:

- **The Three Pillars:**
  1. `KEEP WHAT WORKS` — Preserve your existing tools and repositories.
  2. `CONNECT WHAT MATTERS` — Bridge tools into a unified operating context via ONIT.
  3. `REPLACE WHAT YOU WANT` — Adopt native ONIT modules gradually at your own pace.
- **8 Integration Categories:** CRM, ERP, Dev & Code, Project Management, Cloud Infrastructure, Data Platforms, Communication, Custom APIs.
- **10 Connection Protocols:** REST APIs, Webhooks, OAuth 2.0, API Keys, Event Stream, Bi-directional Sync, Field Mapping, Data Transformation, Scheduled Sync, Custom Connectors.
- **Supported Ecosystem Representation:** Clearly presented as connector categories and protocols supported by the open architecture.

---

## 11. Security & Governance Page (`/security`)

Presents enterprise-grade governance without inventing unverified claims:

- **The 8 Governance Pillars:** Identity, Permissions (RBAC), Organization Policy, Human Approvals, Complete Audit Trail, Data Boundaries, Guardrails, Human Oversight.
- **Human-in-the-Loop Governance Simulator:** Interactive approval card showcasing a deployment gate (`deploy --env production`) with real-time approval/rejection state transitions.
- **Zero-Training Data Privacy Policy:** Explicit policy detailing that client code and organizational data are never used to train public foundation models.
- **Deployment Flexibility:** Multi-tenant cloud, dedicated virtual private cloud (VPC), and enterprise air-gapped configuration options.

---

## 12. Solutions Architecture

Focused on high-intent buyer personas:

### A. `/solutions/it-services` (IT Services & Delivery Firms)
- **Target Audience:** Founders, CEOs, Delivery Heads, and Operations Leaders at IT consulting and software services firms.
- **Core Problem:** Low project margins, manual status coordination, high bench utilization risk, and handoff friction across client teams.
- **ONIT Value Proposition:** Standardized delivery pipelines, automated weekly client reports, real-time margin burn alerts, and unified context across sales, delivery, and support.

### B. `/solutions/software-development` (Software Development Companies)
- **Target Audience:** CTOs, VPs of Engineering, Engineering Managers, and Product Leaders.
- **Core Problem:** Requirement drift, disconnected Jira tickets, manual test authoring, and slow deployment verification cycles.
- **ONIT Value Proposition:** End-to-end traceability from PRD to Pull Request, AI QA automated test suite synthesis, policy-bounded code review, and automated release records.

### C. `/solutions` (Solutions Overview Hub)
- Directory and comparison mapping across organization types, team sizes, and adoption stages.

---

## 13. Comprehensive SEO & Metadata Architecture

Each indexable route is assigned unique metadata, OpenGraph cards, canonical tags, and structured JSON-LD schemas:

```
┌───────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    SEO METADATA & SCHEMA MATRIX                                   │
├──────────────────────────┬─────────────────────────────────────────────────┬──────────────────────┤
│ URL Route                │ Page Title (<title>)                            │ Schema.org Type      │
├──────────────────────────┼─────────────────────────────────────────────────┼──────────────────────┤
│ /                        │ ONIT by ScaleOnIt | AI-Native Operating Platform│ Organization, WebSite│
│ /platform                │ The ONIT Platform | 11 Connected Capabilities   │ SoftwareApplication  │
│ /platform/discover       │ DISCOVER | AI Requirements & Business Analysis  │ SoftwareApplication  │
│ /platform/engineer       │ ENGINEER | Architecture & Coding Intelligence   │ SoftwareApplication  │
│ /platform/quality        │ QUALITY | AI QA Automation & Quality Gates      │ SoftwareApplication  │
│ /platform/deliver        │ DELIVER | Project Coordination & DevOps Releases│ SoftwareApplication  │
│ /platform/serve          │ SERVE | Context-Aware Customer Support & SLAs   │ SoftwareApplication  │
│ /platform/intelligence   │ AI Intelligence Architecture | Model Routing    │ TechArticle, Software│
│ /platform/connect        │ ONIT Connect | Enterprise Integration Ecosystem │ SoftwareApplication  │
│ /ai-workforce            │ AI Workforce | 8 Specialized Digital Workers    │ SoftwareApplication  │
│ /architecture            │ 7-Layer Operating Architecture | ScaleOnIt ONIT │ TechArticle          │
│ /security                │ Enterprise Security, Governance & AI Policy     │ SecurityService      │
│ /solutions/it-services   │ ONIT for IT Services & Software Delivery Firms  │ Service              │
│ /solutions/software-dev  │ ONIT for Software Development & SaaS Teams      │ Service              │
│ /company                 │ About ScaleOnIt | The Enterprise Tech Company   │ Organization, About  │
│ /demo                    │ Talk to Us | Book an Architecture Consultation  │ ContactPage          │
└──────────────────────────┴─────────────────────────────────────────────────┴──────────────────────┘
```

---

## 14. AEO (Answer Engine Optimization) & Semantic Structuring

To optimize for AI search agents (Perplexity, ChatGPT Search, Claude, Google AI Overviews), every page includes a dedicated **Semantic Quick-Answer Box** and **FAQ Accordion**:

```markdown
### What is ONIT?
ONIT by ScaleOnIt is an AI-native operating platform for software delivery and IT operations. It connects requirements, design, engineering, quality, deployment, projects, support, people, and finance into one modular operating environment governed by specialized AI workers and human approval gates.

### How is ONIT different from a standard SaaS tool?
Unlike isolated SaaS tools (e.g. standalone Jira or CRM), ONIT maintains continuous organizational context across all SDLC handoffs. A customer conversation in Discovery automatically informs system architecture, pull requests, quality gates, and customer support tickets.
```

---

## 15. Internal Linking Strategy

A bidirectional linking web ensures zero orphan pages and maximizes search engine link equity:

```
                  ┌────────────────────────┐
                  │       HOMEPAGE (/)     │
                  └───────────┬────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│  /platform Hub   │ │  /ai-workforce   │ │  /architecture   │
└───┬──────────────┘ └────────┬─────────┘ └────────┬─────────┘
    │                         │                    │
    ├─► /platform/discover ◄──┤ (Cross-Worker)     ├─► /security
    ├─► /platform/engineer ◄──┤ (Cross-Worker)     │
    ├─► /platform/quality  ◄──┤ (Cross-Worker)     └─► /platform/intelligence
    ├─► /platform/deliver  ◄──┤ (Cross-Worker)
    ├─► /platform/serve    ◄──┤ (Cross-Worker)
    └─► /platform/connect  ──────────────────────────► /solutions/it-services
                                                   └─► /solutions/software-dev
                                                              │
                                                              ▼
                                                   ┌─────────────────────┐
                                                   │   /demo (Primary)   │
                                                   └─────────────────────┘
```

- **Footer on Every Page:** Lists all active capability pages, solutions, architecture deep-dives, and corporate links.
- **Capability Cross-Links:** `/platform/discover` links directly to `/platform/engineer` and `/ai-workforce`.
- **Primary Conversion Path:** Every capability and solution page contains high-visibility CTAs driving directly to `/demo`.

---

## 16. Content Requirements & Anti-Fabrication Safeguards

All content for new pages will be derived strictly from the verified platform concepts established in `onit-tech-website-brief.md` and `SCALEONIT_WEBSITE_AUDIT.md`.

### Strict Safeguard Rules
- **No Fabricated Metrics:** Do not write *"Trusted by 5,000+ companies"* or *"Boosted revenue by 487%"*. Use descriptive architectural value: *"Eliminates manual handoff friction and provides real-time margin visibility."*
- **No Fake Reviews/Testimonials:** All consultation profiles on `/demo` reflect the verified team roster (`Dr. Evelyn Vance`, `Marcus Brody`, `Sarah Chen`).
- **No Fake Integrations:** Present external tools as integration categories and supported protocols (`REST APIs, Webhooks, OAuth 2.0, Scheduled Sync`) rather than verified direct vendor partnerships.

---

## 17. URL & Routing Strategy

- **Routing Protocol:** Client-side path-based router using standard HTML5 History API (`window.location.pathname`).
- **Clean URLs:** Strict lowercase paths with hyphens (e.g. `/platform/discover`, `/solutions/it-services`).
- **No Hash Routes for Pages:** Hashes (`#section`) are reserved purely for in-page smooth scrolling.
- **404 Catch-All:** A dedicated, polished 404 page redirecting lost visitors back to `/` or `/platform`.

---

## 18. Technical Architecture for React + Vite

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 TECHNICAL RUNTIME ARCHITECTURE                                   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│   src/                                                                                           │
│   ├── data/                                                                                      │
│   │   ├── capabilities.ts         # Centralized 11 capabilities definitions & metadata           │
│   │   ├── workers.ts              # Centralized 8 AI worker specifications                       │
│   │   ├── solutions.ts            # Centralized industry solution content                        │
│   │   └── navigation.ts           # Global header, dropdown, and footer link models              │
│   ├── components/                                                                                │
│   │   ├── layout/                                                                                │
│   │   │   ├── Navigation.tsx      # Global sticky header with real path links & dropdowns        │
│   │   │   ├── Footer.tsx          # Global multi-column footer with clean URL paths              │
│   │   │   └── PageLayout.tsx      # Standard page shell (Breadcrumb, Meta, CTA banner)           │
│   │   ├── pages/                                                                                 │
│   │   │   ├── HomePage.tsx        # Preserved 16-section homepage                                │
│   │   │   ├── PlatformHubPage.tsx # /platform overview hub                                       │
│   │   │   ├── CapabilityPage.tsx  # Dynamic parameterized capability page template               │
│   │   │   ├── AIWorkforcePage.tsx # /ai-workforce dedicated page                                 │
│   │   │   ├── ArchitecturePage.tsx# /architecture dedicated page                                 │
│   │   │   ├── SecurityPage.tsx    # /security dedicated page                                     │
│   │   │   ├── SolutionsPage.tsx   # /solutions & /solutions/[slug] template                      │
│   │   │   ├── CompanyPage.tsx     # /company dedicated ScaleOnIt page                            │
│   │   │   ├── TalkToUsPage.tsx    # /demo consultation & booking page                            │
│   │   │   └── NotFoundPage.tsx    # Polished 404 handler                                         │
│   │   └── sections/               # Existing 16 homepage section components (unchanged)          │
│   ├── utils/                                                                                     │
│   │   ├── router.ts               # Lightweight zero-dependency path router                      │
│   │   └── seo.ts                  # Document title, meta description & JSON-LD schema updater    │
│   ├── App.tsx                     # Top-level route dispatcher & scroll-to-top manager           │
│   ├── index.css                   # Preserved Tailwind v4 theme & animation tokens               │
│   └── main.tsx                    # React entrypoint                                             │
│                                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 19. Responsive, Accessibility & Performance Standards

- **Responsive Breakpoints:** Fully fluid layouts across Mobile (< 640px), Tablet (640px - 1024px), Desktop (1024px - 1440px), and Large Displays (1440px+).
- **Accessibility Standards (WCAG 2.1 AA):**
  - All interactive icons and buttons contain descriptive `aria-label` or `aria-labelledby`.
  - Visible keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-onit`).
  - Strict color contrast ratios exceeding 4.5:1 for body copy.
  - Skip-to-content bypass link injected on all pages.
- **Performance Optimizations:**
  - Route-level lazy loading (`React.lazy` and `Suspense`) to ensure lightning-fast initial bundle load.
  - Google Fonts preconnected with `display=swap`.
  - Zero heavy external runtime dependencies (100% pure React + Tailwind CSS).

---

## 20. Phased Implementation Roadmap

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    IMPLEMENTATION PHASES                                         │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│  PHASE A: Data Centralization & Router Foundation                                                │
│  ├── Extract capabilities, workers, architecture, and navigation into `src/data/` modules        │
│  └── Implement clean client-side path router & scroll manager in `src/utils/router.ts`           │
│                                                                                                  │
│  PHASE B: Shared Layout & Navigation Refactor                                                    │
│  ├── Update `Navigation.tsx` with real URLs and Platform/Solutions dropdowns                     │
│  ├── Update `Footer.tsx` with clean crawlable links across all sections                          │
│  └── Create reusable `PageLayout.tsx` template (Breadcrumbs, SEO schema, Bottom CTA)             │
│                                                                                                  │
│  PHASE C: Dedicated Capability Pages (7 Priority Modules)                                        │
│  ├── Implement `/platform` (Hub)                                                                │
│  ├── Implement `/platform/discover`, `/platform/engineer`, `/platform/quality`                   │
│  └── Implement `/platform/deliver`, `/platform/serve`, `/platform/intelligence`, `/platform/connect`│
│                                                                                                  │
│  PHASE D: Architecture, AI Workforce & Security Pages                                            │
│  ├── Implement `/ai-workforce` (8-Worker Directory & Live Execution Console)                     │
│  ├── Implement `/architecture` (7-Layer Operating OS Deep-Dive)                                  │
│  └── Implement `/security` (Governance Pillars, Approval Simulator & Air-gapped VPC Specs)       │
│                                                                                                  │
│  PHASE E: Solutions, Corporate & Demo Pages                                                      │
│  ├── Implement `/solutions/it-services` & `/solutions/software-development`                      │
│  ├── Implement `/company` (About ScaleOnIt & Global Operations)                                  │
│  └── Route `/demo` to the full-featured `TalkToUsPage.tsx` interface                             │
│                                                                                                  │
│  PHASE F: SEO, AEO & Production Verification                                                     │
│  ├── Wire dynamic Document Title, Meta Description, and JSON-LD schema per page                  │
│  ├── Update `public/sitemap.xml` with all clean URLs and lastmod timestamps                      │
│  └── Full build validation (`vite build`), accessibility audit, and mobile responsiveness check  │
│                                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 21. Open Decisions & Confirmations

Before starting Phase A implementation, please confirm:
1. **Approval of the 7 Launch-Now Capability Pages:** (Discover, Engineer, Quality, Deliver, Serve, Intelligence, Connect), keeping Grow, Design, People, and Finance on the Platform Hub until Phase 2 content expansion.
2. **Approval of the 2 Launch-Now Solutions Pages:** (`/solutions/it-services` and `/solutions/software-development`).
3. **Approval of the Path-Based Client Router Approach:** (Zero extra dependencies, full SPA capability, crawlable URLs).

---
*Blueprint complete. Awaiting user confirmation before commencing Phase A implementation.*
